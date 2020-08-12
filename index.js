const arr = [
  { x: 1, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 2, y: 2 },
  { x: 2, y: 3 },
  { x: 2, y: 3 },
];

const uniqueArr = arr.reduce(
  (acc, point) =>
    acc.some((val) => val.x === point.x && val.y === point.y)
      ? acc
      : [...acc, point],
  []
);

console.log(uniqueArr);
