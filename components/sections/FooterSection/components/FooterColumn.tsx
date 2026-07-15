import Link from "next/link"
import { FooterSection } from "../data/navigationData"


interface Props {
  section: FooterSection
}

export default function FooterColumn({ section }: Props) {

  return (
    <div>
      <h3 className="mb-8 text-30 text-extra-dark">{section.title}</h3>

      <div
        className={`grid ${
          section.columns.length > 1 ? "grid-cols-2 gap-10" : "grid-cols-1"
        }`}
      >
        {section.columns.map((column, index) => (
          <ul key={index} className="space-y-2">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link className="text-19 text-extra-dark" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}