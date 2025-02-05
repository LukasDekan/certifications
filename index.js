list = {
    friendName:  prompt("What is your friend's name?"),
    type: prompt("What are you rewarding him for?"),
    title: prompt("How skilled is your friend in this area?"),
    issuerName: prompt("What is your name?")
};

var newcontent = document.createElement('h1');
newcontent.id = 'syndicated-content';
newcontent.appendChild(document.createTextNode(list.friendName));

var scr = document.getElementById('test');
scr.parentNode.insertBefore(newcontent, scr);



var newcontent = document.createElement('p');
newcontent.id = 'syndicated-content';
newcontent.appendChild(document.createTextNode(list.type));

var scr = document.getElementById('test');
scr.parentNode.insertBefore(newcontent, scr);





var newcontent = document.createElement('p');
newcontent.id = 'syndicated-content';
newcontent.appendChild(document.createTextNode(list.title));

var scr = document.getElementById('test');
scr.parentNode.insertBefore(newcontent, scr);



var newcontent = document.createElement('p');
newcontent.id = 'syndicated-content';
newcontent.appendChild(document.createTextNode(list.issuerName));

var scr = document.getElementById('test');
scr.parentNode.insertBefore(newcontent, scr);



// function calcPrompt(){
   
// let currentDate = Number
// let equationA = num1 + num2;
// let equationB = num1 - num2;
// let equationC = num1 * num2;
// let equationD = num1 / num2;
// if(askEquation == "Add"){
//     document.write(equationA);
// }
// else if(askEquation == "Subtract"){
//     document.write(equationB);
// }
// else if(askEquation == "Multiply"){
//     document.write(equationC);
// }
// else if(askEquation == "Devide"){
//     document.write(equationD);
// }
// else if(askEquation == "+"){
//     document.write(equationA);
// }
// else if(askEquation == "-"){
//     document.write(equationB);
// }
// else if(askEquation == "*"){
//     document.write(equationC);
// }
// else if(askEquation == "/"){
//     document.write(equationD);
// }
// else if(askEquation == "Plus"){
//     document.write(equationA);
// }
// else if(askEquation == "Minus"){
//     document.write(equationB);
// }
// else{
//     document.write("You entered an invalid responce.")
// }
// }
// calcPrompt();