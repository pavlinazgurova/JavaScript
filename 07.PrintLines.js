function solve(lines) {
    for (let i = 0; i < lines.length; i++)
    {
        let line = lines[i];

        if (line === 'Stop')
        {
         return;
        }
        else
        {
        console.log(line);
        }
    }
}
solve([ 'Line 1', 'Line 2', 'Line 3', 'Stop' ]);