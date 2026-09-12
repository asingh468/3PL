import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="siteHeader">
      <nav className="nav shell" aria-label="Primary">
        <a href="#top" className="brand" aria-label={`${siteConfig.name} home`}>
          <span className="brandMark" aria-hidden="true" />
          {siteConfig.shortName}
        </a>
        <ul className="navLinks">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className="button ghost navCta" href="#contact">
          Talk to the founding team
        </a>
      </nav>
    </header>
  );
}
