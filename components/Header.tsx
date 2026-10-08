import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Packages", href: "/#pricing" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact#contact" },
  { label: "FAQ", href: "/contact#faq-heading" },
];

export function Header() {
  return (
    <header className="siteHeader">
      <nav className="nav shell" aria-label="Primary">
        <a href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <span className="brandMark" aria-hidden="true" />
          <span className="brandWord">{siteConfig.shortName}</span>
        </a>
        <ul className="navLinks">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <details className="mobileNav">
          <summary>
            <span className="mobileNavIcon" aria-hidden="true" />
            Menu
          </summary>
          <ul className="mobileNavLinks">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a className="mobileNavCta" href="/contact#contact">
                Get a Fulfillment Quote
              </a>
            </li>
          </ul>
        </details>
        <div className="navActions">
          <a className="button navSecondary" href="/contact#contact">
            Get Connected
          </a>
          <a className="button navCta" href="/contact#contact">
            Get a Fulfillment Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
