
function breakingRecords(scores) {
    let best = 0;
    let worst = 0;
    let bestScore = scores[0];
    let worstScore = scores[0];
    const lengthOfData = scores.length;
    let result = [];
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore) {
            worstScore = scores[i]
            worst++;
            continue;
        }
    }
    result.push(best);
    result.push(worst);
    return result;
}

console.log(breakingRecords([3, 4, 21, 36, 10 ,28 ,35, 5 ,24, 42]));