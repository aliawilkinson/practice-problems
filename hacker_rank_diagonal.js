function diagonalDifference(arr) {
    var leftDiag = null;
    var rightDiag = null;
    for (var i = 0; i < arr.length; i++) {
        leftDiag += arr[i][i];
        rightDiag += arr[i][arr[i].length - (i + 1)];
    }
    return Math.abs(leftDiag - rightDiag);

}

var sampleArray = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    var negNums = 0;
    var posNums = 0;
    var zeros = 0;
    var answers = [];
    for (var i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 1) {
            posNums++;
        }
        else if (Math.sign(arr[i]) === -1) {
            negNums++;
        }
        else if (Math.sign(arr[i]) === 0) {
            zeros++
        }
    }
    answers.push(posNums, negNums, zeros)
    for (var x = 0; x < answers.length; x++) {
        answers[x] = parseFloat((answers[x] / arr.length)).toFixed(6);
    }
    return answers;
}