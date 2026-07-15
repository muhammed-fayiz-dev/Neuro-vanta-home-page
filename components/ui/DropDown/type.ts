export interface DropdownOption {
  id: string
  title: string
}

export interface DropdownProps<T> {
  items: T[]
  value: number
  onChange: (index: number) => void
  getLabel: (item: T) => string
}