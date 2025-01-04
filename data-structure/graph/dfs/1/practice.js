function countIslands(grid) {
  // 그리드가 없거나 비어있으면 0을 반환
  if (!grid || grid.length === 0) return 0;

  // 행과 열의 개수 미리 파악하기
  const rows = grid.length; // 4
  const cols = grid[0].length; // 5

  // 섬의 개수를 초기화하기
  let islands = 0;

  // DFS 함수 정의
  // isIlandNumber와 depth는 console.log 출력을 위한 매개변수
  function dfs(row, col, islandNumber, depth = 0) {
    // 경계 체크 및 물(0)인 경우 종료
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === 0
    ) {
      return;
    }

    console.log(`\n현재 위치 [${row},${col}] 방문 (섬 #${islandNumber})`);
    console.log("방문 전 그리드:");
    grid.forEach((row) => console.log(row.join(" ")));

    // 현재 땅을 물로 바꿈 (방문 처리)
    grid[row][col] = 0;

    console.log("\n방문 후 그리드:");
    grid.forEach((row) => console.log(row.join(" ")));

    // 상하좌우 탐색
    const indent = "  ".repeat(depth);

    console.log(`${indent}[${row},${col}]에서 상하좌우 탐색 시작`);

    console.log(`${indent}위쪽 [${row - 1},${col}] 탐색`);
    dfs(row - 1, col, islandNumber, depth + 1);

    console.log(`${indent}아래쪽 [${row + 1},${col}] 탐색`);
    dfs(row + 1, col, islandNumber, depth + 1);

    console.log(`${indent}왼쪽 [${row},${col - 1}] 탐색`);
    dfs(row, col - 1, islandNumber, depth + 1);

    console.log(`${indent}오른쪽 [${row},${col + 1}] 탐색`);
    dfs(row, col + 1, islandNumber, depth + 1);
  }

  // 전체 그리드 순회
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      console.log("이중 for문에서 현재 위치 [", i, ",", j, "]");
      if (grid[i][j] === 1) {
        islands++; // 새로운 섬 발견
        console.log(`\n새로운 섬 #${islands} 발견! 위치: [${i},${j}]`);
        dfs(i, j, islands); // 연결된 모든 땅 방문
      }
    }
  }

  return islands;
}

// 테스트
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

console.log("초기 그리드:");
grid.forEach((row) => console.log(row.join(" ")));
console.log("\n총 섬의 개수:", countIslands(grid));
