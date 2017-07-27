function solve(commandsLines) {
    let obj = {};

    for (let i = 0;i < commandsLines.length - 2; i++)
    {
        let line = commandsLines[i].split(" ");
        let key = line[0];
        let value = line[1];

        if (!(obj.hasOwnProperty(key))) {
            obj[key] = [];
            obj[key].push(value);
        }
        else {
            obj[key].push(value);
        }
    }
    let key = commandsLines[commandsLines.length - 2];
    if (obj.hasOwnProperty(key)) {
        for (let item of obj[key]){
            console.log(item);
        }
    }
    else {
        console.log('None');
    }
}
solve([ '3 test', '3 test1', '4 test2', '4 test3', '4 test5', '4', '' ]);
