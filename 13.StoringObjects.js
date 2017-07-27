function solve(lines) {
    let person = {};

    for (let i = 0;i < lines.length; i++)
    {
        let tokens = lines[i].split(" -> ");
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];

        person['Name'] = name;
        person['Age'] = Number(age);
        person['Grade'] = parseFloat(grade).toFixed( 2 );

        console.log(`Name: ${person['Name']}`);
        console.log(`Age: ${person['Age']}`);
        console.log(`Grade: ${person['Grade']}`);

    }
}
solve([ 'Pesho -> 13 -> 6.00', 'Ivan -> 12 -> 5.57', 'Ivan -> 12 -> 5.57' ]);