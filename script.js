
let i;
let intelligenceLevels = [' You are Annoyed.', '  Youare Loving ', '   You are Depressed.',
    '  You are Crazy About Every Thing', '  You are Creative  Person',
    'Mega Mind', 'Super Smart', 'Extra Ordinary', 'Jimmy Neutron',
    'Moon of Envey', 'Sarcastic', 'Astagfirullah'
];
function checkIntelligence() {
    let name = document.getElementById("input").value;
    
   if (name != false) {
     
        let randNum = parseInt(Math.random() * intelligenceLevels.length);
    document.querySelector('h5').innerHTML = name + " " + intelligenceLevels[randNum];
     document.querySelector('input').value=" ";
    }
    else {
        alert("Enter Your Name");
        return false;
    }
   
   
}
// let user = name.toUpperCase();
// let res = user.charAt(0);

//    if (res != ""){ 
//     let random = arr.Math.random(); 
//     document.querySelector("h5").innerHTML =  name + random;
//         // if (res == "F" || res=="D") {
        //     //res="FRIENDS";
        //     document.querySelector("h5").innerHTML =  name +'  You are Annoyed.';
        //     document.getElementById("h5").style.color = 'blue';
        // }
        // else if (res == "L"|| res=="B") {
        //     //res="LOVER";
        //        document.querySelector("h5").innerHTML =  name +'  Youare Loving ';
        //     document.querySelector("h5").style.color = '#FF0080';
        // }
        // else if (res == "A" || res=="C") {
        //     //res="AFFECTION";
        //        document.querySelector("h5").innerHTML =  name +'   You are Depressed.';
        //         document.querySelector("h5").style.color = '#DBA901';
        // }
        // else if (res == "M"|| res=="G") {
        //     //res="MARRIAGE";
        //        document.querySelector("h5").innerHTML =  name +'  You are Angry. ';
        //         document.querySelector("h5").style.color = 'green';
        // }
        // else if (res == "E"|| res=="H") {
        //     //res="ENEMY";
        //        document.querySelector("h5").innerHTML =  name +'  You are Crazy About Every Thing';
        //         document.querySelector("h5").style.color = 'red';
        // }
        // else if (res == "S" || res=="J") {
        //     //res="SISTER";
        //        document.querySelector("h5").innerHTML =  name +'  You are Intelligent Person';
        //         document.querySelector("h5").style.color = 'violet';
        // }
        // else if (res == "U" || res=="T") {
        //     //res="SISTER";
        //       document.querySelector("h5").innerHTML =  name +'  You are Rude  Person';
        //         document.querySelector("h5").style.color = 'violet';
        // }
        // else if (res == "K" || res=="L") {
        //     //res="SISTER";
        //        document.querySelector("h5").innerHTML =  name +'  You are Creative  Person';
        //         document.querySelector("h5").style.color = 'violet';
        // }
    //}
//let moods = [
//     'Loving ',
//     'Depressed.',
//     'Angry. ',
//     'Crazy About Every Thing',
//     'Intelligent Person',
// ]

// if (res != ""){ 
//     for( i=res; i>=arr; i++){
//         alert(moods);

//     }
// }
    // else{
    //     alert("Enter Your Name");
    //     return false;
    // }

//}