function onLoad() {
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let randomWho = who[Math.floor(Math.random()*4)];
    let randomAction = action[Math.floor(Math.random()*4)];
    let randomWhat = what[Math.floor(Math.random()*3)];
    let randomWhen = when[Math.floor(Math.random()*5)];

    let excuse = randomWho.concat(" ",randomAction," ",randomWhat," ",randomWhen);
        
    document.getElementById("excuse").innerHTML = excuse;
}
