import Link from "next/link"

export default function Header() {
  const links = [
    { name: "home", slug: "/" },
    { name: "writing", slug: "/writing" },
    { name: "uses", slug: "/uses" },
  ]

  return (
    <header>
      <nav>
        {links.map(({ name, slug }) => (
          <ul>
            <li>{<Link href={slug}>{name}</Link>}</li>
          </ul>
        ))}
      </nav>
    </header>
  )
}
