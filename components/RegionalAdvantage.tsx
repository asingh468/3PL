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
              <filter id="mapPinShadow" x="-100%" y="-100%" width="300%" height="300%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#18314d" floodOpacity="0.2" />
              </filter>
            </defs>
            <rect width="560" height="420" rx="28" fill="#eaf2f5" />
            <g fill="#f8f5ec" stroke="#c5d3d8" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M332.3 30.5 331.8 88 334.7 91.8 334.8 95.5 289.3 95.4 262.4 101.4 253 100.9 240.9 104 240.2 102.5 233.2 101.4 227.2 101.7 217.6 105.1 206.2 102.8 205.1 96.3 203.1 93.7 198.4 91.4 192.9 92.2 189 89.7 185 88.9 181.8 90.2 177.6 88.3 178.4 85.4 181.3 83.8 176.8 79.3 169.6 57.7 165.3 54.5 163.5 48.1 165.9 43.9 179.4 48.6 191.7 49.6 197.4 48.5 200.2 50.4 205.4 50.3 209 55 211.7 54.7 213.7 66.9 215.9 66.3 213.7 61.3 214.3 56.4 217.9 51.5 215 49.4 212.3 35.8 205.5 32.9 206.4 30.5Z" />
              <path d="M207.2 45.4 210.1 44.5 209.6 48.9 206.1 47.2Z" />
              <path d="M200.4 39.5 202.9 36.6 206.1 40.1 205.1 43 200.1 42.2Z" />
              <path d="M196.4 91.6 198.4 91.4 203.1 93.7 205.1 96.3 206.2 102.8 217.6 105.1 227.2 101.7 233.2 101.4 240.2 102.5 240.9 104 253 100.9 255.9 101.9 262.4 101.4 267.8 99.2 286.2 96.8 289.3 95.4 334.8 95.5 337.8 99.2 343 100.8 344.8 103.7 336.4 116.5 336.7 118.5 334.4 121.7 332.1 122.4 327.7 130.2 329.3 133.1 333.5 133.5 335.3 135.2 332.4 142.4 332.4 181.9 174.3 181.9 171.2 179.4 169.5 172.5 169.8 167.6 166.8 163.8 175.3 142.8 177.3 122 179.5 113.9 180.3 102.8 179.1 96.6 180.2 92.9 189 89.7 192.9 92.2Z" />
              <path d="M332.4 181.9 398.1 182.1 397.9 307.6 395.6 311.2 393.5 311.3 390.8 308.7 382.8 309.6 384.1 322.3 386.4 330.4 385 333.4 322 285.4 267 246.9 267 182.1Z" />
              <path d="M195.9 181.8 267 182.1 267 246.9 322 285.4 385 333.4 385 336.1 388.7 339.7 391.7 345.4 396 348.4 393.4 351.3 389.9 352.7 387.2 356.5 387.5 364.8 383 367.9 384.4 375.9 387.5 376.1 388.7 380.1 387.5 382 330.2 386.7 327.6 383.9 325.8 374 322.6 370.2 307 360.2 305.3 361.5 301.9 360.6 302.4 358.5 298.5 354.1 293.3 355.1 284.2 351.9 282.9 349.3 276.7 346.1 269.7 346.2 263.9 344.8 256.6 345.4 252.7 342.5 253.1 331.3 247.3 328.1 247.1 323.7 244.9 323.4 241.3 319.6 238.8 318.8 229.2 307.6 225.3 304.9 224.4 298 226.1 298.5 227.7 294.4 224.5 290.6 220.7 291.1 215.6 287.6 213.8 284.9 214.2 282.3 211.7 278.9 211.7 273.2 215.7 273.2 214.1 265.2 212.3 266.1 211.9 270 207.6 270.8 202.4 267.9 201.5 262.8 198.2 258.7 193.7 256.2 184.8 247.8 185.9 246.2 182.9 238.9 184.2 234.9 182.3 228.9 176.6 222.9 171 219.6 170 215.7 175.5 206.2 176.6 203 175.5 200.5 177.6 194 175.7 188.1 173.3 186.7 174.3 181.9Z" />
            </g>

            <text x="244" y="76" className="mapStateLabel">WASHINGTON</text>
            <text x="247" y="148" className="mapStateLabel">OREGON</text>
            <text x="299" y="260" className="mapStateLabel">NEVADA</text>
            <text x="205" y="325" className="mapStateLabel">CALIFORNIA</text>

            <path d="M217.1 272.8 Q205 170 215.7 60.6 M217.1 272.8 Q182 190 208 105.8 M217.1 272.8 Q257 315 305.7 354" className="mapRoute" />
            <circle cx="215.7" cy="60.6" r="6" className="mapDestination" />
            <circle cx="208" cy="105.8" r="6" className="mapDestination" />
            <circle cx="305.7" cy="354" r="6" className="mapDestination" />
            <circle cx="217.1" cy="272.8" r="19" className="mapHubHalo" />
            <circle cx="217.1" cy="272.8" r="11" className="mapHub" filter="url(#mapPinShadow)" />
            <circle cx="217.1" cy="272.8" r="4" fill="#fff" />
            <rect x="229" y="251" width="164" height="34" rx="17" fill="#fff" filter="url(#mapPinShadow)" />
            <text x="243" y="273" className="mapHubLabel">NORTHERN CALIFORNIA</text>
          </svg>
          <span className="mapCaption">Northern California &amp; West Coast reach</span>
          <span className="mapServiceArea">Currently servicing California clients, shipping worldwide.</span>
        </div>
      </div>
    </section>
  );
}
