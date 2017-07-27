function solve(number) {
    var num = Number(number);

    for (let i = 1; i <= num; i++)
    {
        let reversed = [];

            reversed = i.toString();
            reversed = reversed.split("").reverse().join("");

            if (i === Number(reversed)) {
                console.log(i);
            }
    }
}
solve('100');
