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

var majorityElement = function (nums) {
    //find n/3 by dividing nums.length by 3
    //find the number of times a number appears in the sequence
    var targetFreq = Math.ceil(nums.length / 3);
    var answers = [];
    var numCount = null;
    for (var i = 0; i < nums.length; i++) {
        for (var x = 0; x < nums.length; x++) {
            if (nums[x] == nums[i]) {
                numCount++;
            }

        }
        if (numCount++ > targetFreq && nums.indexOf(nums[i])) {
            answers.push(nums[i]);
        }
        numCount = null;
    }
    return answers;
};

var twoSum = function (nums, target) {
    var answer = [];
    debugger;
    for (var i = 0; i < nums.length; i++) {
        for (var x = 0; x < nums.length; x++) {
            if (i === x) {

            } else {

                var sum = nums[i] + nums[x];
                if (sum === target) {
                    answer.push(i, x);
                    return answer;
                }
            }
        }
    }
};