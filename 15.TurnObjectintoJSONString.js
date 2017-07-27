function solve(input) {
    let personInfo = {};
    for(let i = 0; i < input.length; i++){
        let line = input[i].split(' -> ');
        personInfo[line[0]] = line[1];
        if(line[0] == "grade"){
            personInfo[line[0]] = Math.round(parseInt(line[1]));
        }
        if(line[0] == "age"){
            personInfo[line[0]] = Math.round(parseInt(line[1]));
        }
    }
    console.log(JSON.stringify(personInfo));
}
solve([ 'name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995', 'town -> Sofia']);
