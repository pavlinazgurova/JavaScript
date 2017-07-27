function solve(input) {
    let nums = input[0].split(' ');

    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let num3 = Number(nums[2]);

    if (num1 + num2 === num3) {
        console.log(`${Math.min(num1, num2)} + ${Math.max(num1, num2)} = ${num3}`);
    }
    else if (num1 + num3 === num2) {
        console.log(`${Math.min(num1, num3)} + ${Math.max(num1, num3)} = ${num2}`);
    }
    else if (num3 + num2 === num1) {
        console.log(`${Math.min(num3, num2)} + ${Math.max(num3, num2)} = ${num1}`);
    }
    else {
        console.log('No');
    }
}

solve([ '-5 -3 -2' ]);