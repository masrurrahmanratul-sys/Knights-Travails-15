function getvalidmove([x, y],) {
    const offset =  [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], 
                     [-2, 1], [-1, 2]];

    const validmoves = [];
    for (const [dx, dy] of offset) {
        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            validmoves.push([newX, newY]);
        }
    }

    return validmoves;
}

function knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const currentPos = path[path.length - 1];
        
        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            printoutresult(path);
            return path;
        }

        const moves = getvalidmove(currentPos);
        for (const move of moves) {
            if (!visited.has(move.toString())) {
                const movestring = move.toString();
                visited.add(movestring);
                
                const newPath = [...path, move];
                queue.push(newPath);
            }
        }
    }

}

function printoutresult(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    for (const move of path) {
        console.log(`[${move[0]}, ${move[1]}]`);
    }
}

console.log("--- Test Case 1 ---");
knightMoves([0, 0], [1, 2]);

console.log("\n--- Test Case 2 ---");
knightMoves([0, 0], [3, 3]);

console.log("\n--- Test Case 3 ---");
knightMoves([3, 3], [4, 3]);