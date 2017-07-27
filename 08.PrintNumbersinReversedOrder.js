function solve(nums) {
    reversed = nums.filter(e => e).reverse();

    for (let i = 0; i< reversed.length; i++)
    {
        console.log(reversed[i]);
    }
}
solve([ '5', '5.5', '24', '-3', '' ]);
