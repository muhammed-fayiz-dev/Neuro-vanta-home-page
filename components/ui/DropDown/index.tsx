"use client"

import { useEffect, useRef, useState } from "react"

import DropdownButton from "./DropDownButton" 
import DropdownMenu from "./DropDownMenu" 

import { DropdownProps } from "./type" 

export default function Dropdown<T>({
  items,
  value,
  onChange,
  getLabel,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="relative w-full"
    >
      <DropdownButton
        label={getLabel(items[value])}
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      <DropdownMenu
        items={items}
        value={value}
        onChange={onChange}
        getLabel={getLabel}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}