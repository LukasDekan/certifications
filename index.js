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


const selector = document.getElementById("skill_option");
selector.addEventListener("change", (event) => {
    updateCertificate();
    console.log(event);
});

function updateCertificate(){
    let selection = selector.value
    console.log(selection);
    // console.log("Test");
    switch(selector.value){
        case "Programmer":
            console.log(`You Are a ${selection}`);
                const jackBlack = new Image(438, 248);
                jackBlack.src = "/img/jack-black.jpg";
                document.body.appendChild(jackBlack);
            break;

        // repeat switch cases for your other 2 certifications.

    }
}

