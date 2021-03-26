const operators = ['+', '-', '*', '/'];

function find(lefts, rights, number, valueSet) {
    for(let l of lefts) {
        for (let r of rights) {
            for (let op of operators) {
                if (op === '/' && r === 0) {
                    continue;
                }
                let expression = `${l}${op}(${r})`;
                let value = Math.floor(eval(expression));
                if (value == number) {
                    return true;
                }
                valueSet.add(value);
            }
        }
    }
    return false;
}

function solution(N, number) {
    const A = [];
    for (let n = 1; n <= 8; ++n) {
        let composed = parseInt(`${N}`.repeat(n));
        if (composed === number) {
            return n;
        }
        const valuesOfN = new Set([composed]);
        for(let i = 0; i < n-1; ++i) {
            let found = find(A[i], A[n-i-2], number, valuesOfN);
            if (found) {
                return n;
            }
        }
        A[n-1] = valuesOfN;
    }
    return -1;
}