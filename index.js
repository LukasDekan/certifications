// list = {
//     friendName:  prompt("What is your friend's name?"),
//     type: prompt("What are you rewarding him for?"),
//     title: prompt("How skilled is your friend in this area?"),
//     issuerName: prompt("What is your name?")
// };

// var newcontent = document.createElement('h2');
// newcontent.id = 'syndicated-content';
// newcontent.appendChild(document.createTextNode(list.friendName));

// var scr = document.getElementById('test');
// scr.parentNode.insertBefore(newcontent, scr);


// const jackBlack = new Image(438, 248);
// jackBlack.src = "/img/jack-black.jpg";
// document.body.appendChild(jackBlack);

// const selector = document.getElementById("skill_option");
// selector.addEventListener("change", (event) => {
//     updateCertificate();
//     console.log(event);
// });
let element = document.getElementById("skill_option");
let element2 = document.getElementById("skill_level");



element.addEventListener("change", updateImage);



const imageChange = document.getElementById("image")
const textChange = document.getElementById("text")



function changeBackground(color) {
    document.body.style.background = color;
 }

 function skillLevelOcatgon(){
    let selection2 = document.getElementById("skill_level").value;
    // console.log(selection);
    // console.log("Test");
    switch(selection2){
        case "Ultra Skilled":
            // document.body.appendChild("Congratulations!");
            textChange.innerText = "You are the most Octagon of all the Octagons! Yes! Yes! You are! Congrats! Elmo loves you!\nCertified by: Jack Black and you're little friendly monster, Elmo";
                console.log("Test One");
            break;
        case "Super Skilled":
            textChange.innerText = "You're a proffessional Octagon!\nCertified by: Jack Black and you're little friendly monster, Elmo";
                console.log("Test Two");
            break;
        case "Very Skilled":
            textChange.innerText= "You are a very big Octagon!\nCertified by: Jack Black and you're little friendly monster, Elmo";
                console.log("Test Three");
            break;
        case "Skilled":
            textChange.innerText = "You are an Octagon!\nCertified by: Jack Black and you're little friendly monster, Elmo";
                console.log("Test Four");
            break;
        }
    } 
    function skillLevelProgrammer(){
        let selection2 = document.getElementById("skill_level").value;
        // console.log(selection);
        // console.log("Test");
        switch(selection2){
            case "Ultra Skilled":
                // document.body.appendChild("Congratulations!");
                textChange.innerText = "You are a skilled programmer pro proffessional.\nCertified by: Bill Gates. Yes, definitely Bill Gates";
                    console.log("Test One");
                break;
            case "Super Skilled":
                textChange.innerText = "You are a programmer proffessional.\nCertified by: Bill Gates. Yes, definitely Bill Gates";
                    console.log("Test Two");
                break;
            case "Very Skilled":
                textChange.innerText= "You are a very skilled programmer.\nCertified by: Bill Gates. Yes, definitely Bill Gates";
                    console.log("Test Three");
                break;
            case "Skilled":
                textChange.innerText = "You are a skilled programmer.\nCertified by: Bill Gates. Yes, definitely Bill Gates";
                    console.log("Test Four");
                break;
            }
        } 
        function skillLevelDodgeball(){
            let selection2 = document.getElementById("skill_level").value;
            // console.log(selection);
            // console.log("Test");
            switch(selection2){
                case "Ultra Skilled":
                    // document.body.appendChild("Congratulations!");
                    textChange.innerText = "You are the target of all dodgeball target!\nCertified by: You're classmate Lukas Dekan";
                        console.log("Test One");
                    break;
                case "Super Skilled":
                    textChange.innerText = "You are ultimate dodgeball target!\nCertified by: You're classmate Lukas Dekan";
                        console.log("Test Two");
                    break;
                case "Very Skilled":
                    textChange.innerText= "You are a pro at dodgeball target!\nCertified by: You're classmate Lukas Dekan";
                        console.log("Test Three");
                    break;
                case "Skilled":
                    textChange.innerText = "You are a dodgeball target!\nCertified by: You're classmate Lukas Dekan";
                        console.log("Test Four");
                    break;
                }
            } 
function updateImage(){
    let selection = document.getElementById("skill_option").value;
    // console.log(selection);
    // console.log("Test");
    switch(selection){
        case "Programmer":
            // document.body.appendChild("Congratulations!");
                imageChange.src = "/img/binge-code.jpg";
                   console.log("Test One");
                   element2.addEventListener("change", skillLevelProgrammer);
                changeBackground("orange");  
            break;
        case "They're a true Octogon!":
                imageChange.src = "/img/jack-black.jpg";
                console.log("Test Two");
                element2.addEventListener("change", skillLevelOcatgon);
                changeBackground("red");

            break;
        case "Dodgeball":
                imageChange.src = "/img/muck.jpg";
                console.log("Test Three");
                element2.addEventListener("change", skillLevelDodgeball);
                changeBackground("beige");
            break;  
        }
    }
    // if(imageChange.src = "/img/binge-code.jpg"){
              
    // }
    //     else if(imageChange.src = "/img/jack-black.jpg"){


    //     }
    //     else if(imageChange.src = "/img/muck.jpg"){

    //     }

// function updateImage(){
//     let selection = document.getElementById("skill_option").value;
//     // console.log(selection);
//     // console.log("Test");
//     switch(selection){
//         case "Programmer":
//             // document.body.appendChild("Congratulations!");
//             const programmer = new Image(438, 248);
//                 programmer.src = "/img/binge-code.jpg";
//                 document.body.appendChild(programmer);
//                    console.log("Test One");
//             break;
//         case "They're a true Octogon!":
//             const jackBlack = new Image(438, 248);
//                 jackBlack.src = "/img/jack-black.jpg";
//                 document.body.appendChild(jackBlack);
//                 console.log("Test Two");

//             break;
//         case "Dodgeball":
//             const dodgeball = new Image(438, 248);
//                 dodgeball.src = "/img/muck.jpg";
//                 document.body.appendChild(dodgeball);
//                 console.log("Test Three");
//             break;  
//         }
//     } 




        // var newcontent = document.createElement('p');
        // newcontent.id = 'syndicated-content';
        // newcontent.appendChild(document.createTextNode(list.title));

{/* <body>
    <select name="" id="">
        <option>AWESOM</option>
        <option>ASDFSADF</option>
        <option>DUDSE</option>
        <option>CREAM SUPI</option>
        <option>DESTRUCTION</option>
    </select>
    <select name="" id="">
        <option>AWESOM</option>
        <option>ASDFSADF</option>
        <option>DUDSE</option>
        <option>CREAM SUPI</option>
        <option>DESTRUCTION</option>
    </select>
    <select name="" id="">
        <option>AWESOM</option>
        <option>ASDFSADF</option>
        <option>DUDSE</option>
        <option>CREAM SUPI</option>
        <option>DESTRUCTION</option>
    </select>
    <select name="" id="">
        <option>AWESOM</option>
        <option>ASDFSADF</option>
        <option>DUDSE</option>
        <option>CREAM SUPI</option>
        <option>DESTRUCTION</option>
    </select>
</body> */}

// var newcontent = document.createElement('p');
// newcontent.id = 'syndicated-content';
// newcontent.appendChild(document.createTextNode(list.type));

// var scr = document.getElementById('test');
// scr.parentNode.insertBefore(newcontent, scr);


// function favTutorial() {  
//     var mylist = document.getElementById("myList");  
//     document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;  
//     }  


// var newcontent = document.createElement('p');
// newcontent.id = 'syndicated-content';
// newcontent.appendChild(document.createTextNode(list.title));

// var scr = document.getElementById('test');
// scr.parentNode.insertBefore(newcontent, scr);



// var newcontent = document.createElement('p');
// newcontent.id = 'syndicated-content';
// newcontent.appendChild(document.createTextNode(list.issuerName));

// var scr = document.getElementById('test');
// scr.parentNode.insertBefore(newcontent, scr);


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