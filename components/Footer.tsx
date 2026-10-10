import { siteConfig, footerLinks } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerInner">
        <div className="footerBrand">
          <span className="footerName">{siteConfig.name}</span>
          <span className="footerRegion">{siteConfig.region}</span>
        </div>

        <nav className="footerLinks" aria-label="Footer navigation">
          <a href={footerLinks.about.href}>{footerLinks.about.label}</a>
        </nav>

        <a className="button" href="/contact#contact">
          Get Connected
        </a>

      </div>
    </footer>
  );
}
