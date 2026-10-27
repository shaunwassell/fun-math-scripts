const width = 81;
const height = 40;
const iterations = 20000;

const grid = Array.from(
  { length: height },
  () => Array(width).fill(" ")
);

const corners = [
  [width / 2, 0],
  [0, height - 1],
  [width - 1, height - 1],
];

let x = Math.random() * width;
let y = Math.random() * height;

for (let i = 0; i < iterations; i++) {
  // Choose a random corner
  const [cx, cy] = corners[
    Math.floor(Math.random() * 3)
  ];

  // Move halfway toward that corner
  x = (x + cx) / 2;
  y = (y + cy) / 2;

  // Plot the point
  grid[Math.floor(y)][Math.floor(x)] = "█";
}

console.log(grid.map(row => row.join("")).join("\n"));
