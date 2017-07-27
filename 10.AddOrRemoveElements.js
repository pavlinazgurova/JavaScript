function solve(commandLine) {
    let arr = [];
    for (let i = 0; i < commandLine.length; i++)
    {
        let command = commandLine[i].split(" ");
        let first = command[0];
        let second = Number(command[1]);

        if (first === 'add') {
            arr[i] = second;
        }
        else if (first === 'remove' &&
            (second >= 0 && second < arr.length))
        {
            arr.splice(second, 1);
        }
    }

    arr = arr.filter(e => e);

    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i])
    }
}
solve([ 'add 3', 'add 5', 'remove 2', 'remove 0', 'add 7' ]);