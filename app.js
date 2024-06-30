let str = "necessitatibus dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi facere temporibus illum cumque laudantium reiciendis impedit atque sed nostrum itaque distinctio magnam molestiae cupiditate animi, repudiandae eius, deleniti ex.";
let msg = document.getElementById("demo");

// method 1
let wordlength = 100 ;

function show(){
     if(str.length < 100){
        msg.innerHTML = `${str.slice(0)}`
}
   else if ( wordlength >= str.length ){
        
        msg.innerHTML = `${str.slice(0)} <a id="btn1">Show less </a> `
    }
else{
    msg.innerHTML = `${str.slice(0,wordlength)} <a id="btn2">Show More </a> `
}

}
show()
msg.addEventListener("click", function(e){

if (e.target.id ==="btn1"){

 wordlength = 100;
    show();
}
else if(e.target.id === "btn2"){
 wordlength += 200;
show()
}

})






//method 2

// function showmore() {
//     msg.innerHTML = `${str.slice(0,200)} <a href="#" id="btn1">...See More</a>`;
//     var btt1 = document.getElementById("btn1");

//     btt1.addEventListener("click", showmore2)
// }
// function showmore2() {
//     msg.innerHTML = `${str.slice(0,300)} <a href="#" id="btn3">...See More</a>`
// let btn3 = document.getElementById("btn3");
// btn3.addEventListener('click',showmore3)

// }
// function showmore3() {
//     msg.innerHTML = `${str.slice(0)} <a href="#" id="btn4">...See Less</a>`
// let btn3 = document.getElementById("btn4");
// btn3.addEventListener('click',showless)

// }
// function showless() {
    
//     msg.innerHTML = `${str.slice(0,100)} <a href="#" id="btn2">...show More</a>`
//     var btt2 = document.getElementById("btn2");
    
    
//     btt2.addEventListener("click",  showmore)
// }


// if (str.length <= 100) {

//     msg.innerText = str;

// } else {

// showless();

// }






