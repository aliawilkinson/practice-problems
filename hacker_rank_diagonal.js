function diagonalDifference(arr) {
    var leftDiag = null;
    var rightDiag = null;
    for (var i = 0; i < arr.length; i++) {
        leftDiag += arr[i][i];
        rightDiag += arr[i][arr[i].length - (i + 1)];
    }
    return Math.abs(leftDiag - rightDiag);

}
