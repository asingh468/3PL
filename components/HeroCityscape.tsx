// Lightweight, CSS-driven animated skyline used as a subtle hero backdrop.
// Pure SVG + CSS keyframes -- no client JS, no external assets, and it
// respects prefers-reduced-motion (see .heroCityscape rules in globals.css).

type Building = { x: number; w: number; h: number };

function windowRows(building: Building, key: number) {
  const marginX = 6;
  const marginTop = 14;
  const cols = Math.max(2, Math.floor((building.w - marginX * 2) / 12));
  const rows = Math.max(2, Math.floor((building.h - marginTop * 2) / 16));
  const cellW = (building.w - marginX * 2) / cols;
  const cellH = (building.h - marginTop * 2) / rows;
  const windows: { x: number; y: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Deterministic pseudo-random lit/unlit pattern (no client-only randomness).
      const seed = (key * 7 + r * 3 + c * 5) % 5;
      if (seed === 0) continue;
      windows.push({
        x: building.x + marginX + c * cellW + cellW * 0.2,
        y: 230 - building.h + marginTop + r * cellH + cellH * 0.2,
      });
    }
  }

  return windows;
}

export function HeroCityscape() {
  const buildings: Building[] = [
    { x: 0, w: 46, h: 120 },
    { x: 50, w: 30, h: 170 },
    { x: 84, w: 54, h: 90 },
    { x: 142, w: 38, h: 210 },
    { x: 184, w: 46, h: 140 },
    { x: 234, w: 30, h: 180 },
    { x: 268, w: 60, h: 110 },
    { x: 332, w: 34, h: 230 },
    { x: 370, w: 46, h: 150 },
    { x: 420, w: 30, h: 190 },
    { x: 454, w: 58, h: 100 },
    { x: 516, w: 38, h: 220 },
    { x: 558, w: 46, h: 130 },
    { x: 608, w: 30, h: 170 },
    { x: 642, w: 60, h: 95 },
    { x: 706, w: 34, h: 210 },
    { x: 744, w: 46, h: 145 },
    { x: 794, w: 30, h: 185 },
    { x: 828, w: 58, h: 105 },
    { x: 890, w: 38, h: 225 },
    { x: 932, w: 46, h: 135 },
    { x: 982, w: 30, h: 175 },
    { x: 1016, w: 60, h: 100 },
    { x: 1080, w: 34, h: 215 },
    { x: 1118, w: 46, h: 150 },
    { x: 1168, w: 30, h: 190 },
    { x: 1202, w: 58, h: 110 },
    { x: 1264, w: 38, h: 220 },
    { x: 1306, w: 46, h: 140 },
    { x: 1356, w: 30, h: 180 },
    { x: 1390, w: 60, h: 100 },
    { x: 1454, w: 34, h: 210 },
    { x: 1492, w: 46, h: 150 },
    { x: 1542, w: 30, h: 185 },
  ];

  return (
    <div className="heroCityscape" aria-hidden="true">
      <svg
        className="cityscapeSvg"
        viewBox="0 0 1600 320"
        preserveAspectRatio="xMidYMax slice"
        focusable="false"
      >
        <g className="cityscapeSky">
          <g className="cloud cloud-1">
            <ellipse cx={0} cy={40} rx={30} ry={12} />
            <ellipse cx={22} cy={34} rx={22} ry={14} />
            <ellipse cx={-22} cy={36} rx={20} ry={12} />
          </g>
          <g className="cloud cloud-2">
            <ellipse cx={0} cy={20} rx={22} ry={9} />
            <ellipse cx={16} cy={16} rx={16} ry={10} />
            <ellipse cx={-16} cy={17} rx={14} ry={9} />
          </g>
          <g className="cloud cloud-3">
            <ellipse cx={0} cy={60} rx={26} ry={10} />
            <ellipse cx={18} cy={55} rx={18} ry={11} />
            <ellipse cx={-18} cy={57} rx={16} ry={10} />
          </g>

          <g className="plane plane-1">
            <path d="M0 0 L34 3 L44 0 L34 -3 Z" className="planeBody" />
            <path d="M14 0 L4 -10 L8 -10 L20 -1 Z" className="planeWing" />
            <path d="M14 0 L4 10 L8 10 L20 1 Z" className="planeWing" />
            <rect x={38} y={-1} width={5} height={2} className="planeTail" />
          </g>
          <g className="plane plane-2">
            <path d="M0 0 L26 2 L34 0 L26 -2 Z" className="planeBody" />
            <path d="M10 0 L3 -8 L6 -8 L15 -1 Z" className="planeWing" />
            <path d="M10 0 L3 8 L6 8 L15 1 Z" className="planeWing" />
          </g>
        </g>

        <g className="cityscapeBuildings">
          {buildings.map((b, i) => {
            const palette = ["", "cityscapeBuilding-blue", "cityscapeBuilding-teal", "cityscapeBuilding-amber", "cityscapeBuilding-rose", "cityscapeBuilding-violet"];
            const colorClass = palette[i % palette.length];
            return (
            <g key={i}>
              <rect
                x={b.x}
                y={230 - b.h}
                width={b.w}
                height={b.h}
                rx={2}
                className={`cityscapeBuilding ${colorClass}`}
              />
              <rect
                x={b.x}
                y={230 - b.h}
                width={b.w}
                height={4}
                className="cityscapeRoof"
              />
              {windowRows(b, i).map((win, wi) => (
                <rect
                  key={wi}
                  x={win.x}
                  y={win.y}
                  width={3.2}
                  height={5}
                  className={wi % 4 === 0 ? "cityscapeWindow cityscapeWindowLit" : "cityscapeWindow"}
                />
              ))}
            </g>
            );
          })}
        </g>

        <rect x={0} y={230} width={1600} height={2} className="cityscapeCurb" />
        <rect x={0} y={232} width={1600} height={46} className="cityscapeRoad" />
        <rect x={0} y={254} width={1600} height={3} className="cityscapeRoadDash" />

        <g className="cityscapeVehicles">
          <g className="vehicle vehicle-right vehicle-speed-1">
            <rect x={2} y={244} width={58} height={20} rx={4} className="vehicleTrailer" />
            <rect x={4} y={247} width={26} height={12} rx={1.5} className="vehicleTrailerPanel" />
            <rect x={58} y={244} width={16} height={20} rx={3} className="vehicleTruckCab" />
            <rect x={61} y={247} width={7} height={7} rx={1} className="vehicleWindow" />
            <circle cx={14} cy={266} r={5} className="vehicleWheel" />
            <circle cx={50} cy={266} r={5} className="vehicleWheel" />
            <circle cx={68} cy={266} r={5} className="vehicleWheel" />
          </g>

          <g className="vehicle vehicle-right vehicle-speed-2">
            <rect x={2} y={248} width={38} height={16} rx={5} className="vehicleVan vehicleVan-accent" />
            <rect x={26} y={251} width={10} height={8} rx={1.5} className="vehicleWindow" />
            <circle cx={11} cy={266} r={4.5} className="vehicleWheel" />
            <circle cx={31} cy={266} r={4.5} className="vehicleWheel" />
          </g>

          <g className="vehicle vehicle-left vehicle-speed-3">
            <rect x={2} y={244} width={58} height={20} rx={4} className="vehicleTrailer vehicleTrailer-dark" />
            <rect x={30} y={247} width={26} height={12} rx={1.5} className="vehicleTrailerPanel" />
            <rect x={-14} y={244} width={16} height={20} rx={3} className="vehicleTruckCab" />
            <rect x={-11} y={247} width={7} height={7} rx={1} className="vehicleWindow" />
            <circle cx={0} cy={266} r={5} className="vehicleWheel" />
            <circle cx={14} cy={266} r={5} className="vehicleWheel" />
            <circle cx={50} cy={266} r={5} className="vehicleWheel" />
          </g>

          <g className="vehicle vehicle-left vehicle-speed-4">
            <rect x={2} y={248} width={34} height={16} rx={5} className="vehicleVan" />
            <rect x={6} y={251} width={10} height={8} rx={1.5} className="vehicleWindow" />
            <circle cx={11} cy={266} r={4.5} className="vehicleWheel" />
            <circle cx={27} cy={266} r={4.5} className="vehicleWheel" />
          </g>
        </g>
      </svg>
    </div>
  );
}
