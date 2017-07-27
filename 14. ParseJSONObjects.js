function solve(lines) {
    let personInfo = {};
    for (let json of lines)
    {
        let obj = JSON.parse(json);

        personInfo['name'] = obj.name;
        personInfo['age'] = obj.age;
        personInfo['date'] = obj.date;

        console.log(`Name: ${personInfo.name}`);
        console.log(`Age: ${personInfo.age}`);
        console.log(`Date: ${personInfo.date}`);
    }
}
solve([ '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}',
    '{"name":"Maria","age":24,"date":"31/12/1996"}' ]);