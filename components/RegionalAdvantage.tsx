import { regionalAdvantage } from "@/lib/site-config";

export function RegionalAdvantage() {
  return (
    <section className="section alt regionalSection">
      <div className="shell regionalGrid">
        <div>
          <div className="eyebrow">{regionalAdvantage.eyebrow}</div>
          <h2>{regionalAdvantage.heading}</h2>
          <p className="lede small">{regionalAdvantage.body}</p>
          <ul className="checklist">
            {regionalAdvantage.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mapVisual" aria-hidden="true">
          <svg className="mapIllustration" viewBox="0 0 560 420" role="img">
            <defs>
              <pattern id="mapGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#d9e4e9" strokeWidth="1" />
              </pattern>
              <filter id="mapPinShadow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#18314d" floodOpacity="0.2" />
              </filter>
            </defs>
            <rect width="560" height="420" rx="28" fill="#eaf2f5" />
            <rect width="560" height="420" rx="28" fill="url(#mapGrid)" />

            <path
              d="M251 24 454 28 485 70 471 112 493 151 476 185 489 218 465 251 477 285 448 318 451 350 420 382 245 394 224 369 215 339 197 312 185 280 169 251 157 219 148 186 156 153 173 122 188 91 210 63 229 43Z"
              fill="#f8f5ec"
              stroke="#c5d3d8"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M173 122 452 123M156 186 475 185M185 216 318 263 338 354M355 123 354 185 365 251" fill="none" stroke="#cbd8d9" strokeWidth="2" />

            <text x="293" y="91" className="mapStateLabel">WASHINGTON</text>
            <text x="289" y="160" className="mapStateLabel">OREGON</text>
            <text x="390" y="253" className="mapStateLabel">NEVADA</text>
            <text x="254" y="320" className="mapStateLabel">CALIFORNIA</text>

            <path d="M196 231 Q170 187 185 145 M196 231 Q177 284 224 340 M196 231 Q245 204 295 191" className="mapRoute" />
            <circle cx="185" cy="145" r="6" className="mapDestination" />
            <circle cx="295" cy="191" r="6" className="mapDestination" />
            <circle cx="224" cy="340" r="6" className="mapDestination" />
            <circle cx="196" cy="231" r="19" className="mapHubHalo" />
            <circle cx="196" cy="231" r="11" className="mapHub" filter="url(#mapPinShadow)" />
            <circle cx="196" cy="231" r="4" fill="#fff" />
            <rect x="218" y="211" width="164" height="34" rx="17" fill="#fff" filter="url(#mapPinShadow)" />
            <text x="232" y="233" className="mapHubLabel">NORTHERN CALIFORNIA</text>
          </svg>
          <span className="mapCaption">Northern California &amp; West Coast reach</span>
          <span className="mapServiceArea">Currently servicing California 3PL&apos;s, shipping worldwide.</span>
        </div>
      </div>
    </section>
  );
}
