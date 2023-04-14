export default function initGrid(rows, cols) {
  const resultGrid = [];
  for (let i = 0; i < rows; i++) {
    resultGrid.push(defaultGrid(cols));
  }
  return resultGrid;
}

function defaultGrid(cols) {
  const result = [];

  for (let i = 0; i < cols; i++) {
    result.push({
      letter: "",
      result: "",
    });
  }
  return result;
}
