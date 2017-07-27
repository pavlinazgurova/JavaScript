function solve(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);

    let count = 0;

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log('Positive');
        return;
    }

    if (num1 < 0) {
        count = count + 1;
    }
    if (num2 < 0) {
        count = count + 1;
    }
    if (num3 < 0) {
        count = count + 1;
    }

    if (count % 2 === 0) {
        console.log('Positive');
    }
    else if (count % 2 === 1) {
        console.log('Negative');
    }

}
solve([ '-2', '-20', '-1' ]);