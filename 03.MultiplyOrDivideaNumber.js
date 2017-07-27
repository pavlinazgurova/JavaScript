function solve(nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);

    if (num2 >= num1) {
        let product = num2 * num1;
        console.log(product);
    }
    else if (num1 > num2) {
        let result = num1 / num2;
        console.log(result);
    }
}
solve([ '144', '12' ]);
