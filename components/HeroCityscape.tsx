// Lightweight, CSS-driven animated skyline used as a subtle hero backdrop.
// Pure SVG + CSS keyframes -- no client JS, no external assets, and it
// respects prefers-reduced-motion (see .heroCityscape rules in globals.css).
export function HeroCityscape() {
  const buildings = [
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
        <g className="cityscapeBuildings">
          {buildings.map((b, i) => (
            <rect
              key={i}
              x={b.x}
              y={230 - b.h}
              width={b.w}
              height={b.h}
              rx={2}
              className="cityscapeBuilding"
            />
          ))}
        </g>
        <rect x={0} y={230} width={1600} height={6} className="cityscapeRoadLine" />
        <rect x={0} y={236} width={1600} height={40} className="cityscapeRoad" />

        <g className="cityscapeVehicles">
          <g className="vehicle vehicle-right vehicle-speed-1">
            <rect x={0} y={248} width={54} height={20} rx={5} className="vehicleBody" />
            <rect x={6} y={248} width={16} height={12} rx={2} className="vehicleCab" />
          </g>
          <g className="vehicle vehicle-right vehicle-speed-2">
            <rect x={0} y={250} width={40} height={16} rx={5} className="vehicleBody vehicleBody-accent" />
          </g>
          <g className="vehicle vehicle-left vehicle-speed-3">
            <rect x={0} y={248} width={54} height={20} rx={5} className="vehicleBody" />
            <rect x={32} y={248} width={16} height={12} rx={2} className="vehicleCab" />
          </g>
          <g className="vehicle vehicle-left vehicle-speed-4">
            <rect x={0} y={250} width={36} height={16} rx={5} className="vehicleBody vehicleBody-accent" />
          </g>
        </g>
      </svg>
    </div>
  );
}
