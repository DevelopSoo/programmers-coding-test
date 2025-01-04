function dfs(graph, start, visited = new Set()) {
  visited.add(start);

  // 현재 상태 출력
  console.log(`현재 방문 노드: ${start}`);
  console.log(`방문한 노드들: ${[...visited].join(" -> ")}`);
  console.log("------------------------");

  for (const next of graph[start]) {
    console.log("next", next);
    if (!visited.has(next)) {
      dfs(graph, next, visited);
    }
  }
}

// 그래프 정의
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// 시각화
/**
 *        A
 *      /   \
 *     B     C
 *    / \   /
 *   D   E-F
 */

// DFS 실행
console.log("DFS 탐색 시작 (시작점: A)");
console.log("========================");
dfs(graph, "A");
