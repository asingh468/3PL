import { siteConfig, footerLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerInner">
        <div className="footerBrand">
          <span className="footerName">{siteConfig.name}</span>
          <span className="footerRegion">{siteConfig.region}</span>
        </div>

        <nav className="footerLinks" aria-label="Legal">
          <a href={footerLinks.privacy.href}>
            {footerLinks.privacy.label}
            {footerLinks.privacy.todo && <span className="todoTag"> (TODO)</span>}
          </a>
          <a href={footerLinks.terms.href}>
            {footerLinks.terms.label}
            {footerLinks.terms.todo && <span className="todoTag"> (TODO)</span>}
          </a>
        </nav>

        <a className="button ghost" href="#contact">
          Talk to Our Team
        </a>

        <p className="footerNote">
          Working name -- business name, trademark, and final service terms are subject to launch agreements and may
          change before public launch.
        </p>
      </div>
    </footer>
  );
}
