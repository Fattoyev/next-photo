//
//
// let a=document.querySelectorAll(".class h1")
// console.log(a )
//
//
// function addBtn(){
//         document.getElementById("home").classList.add("active")
// }
// function removeBtn(){
//         document.getElementById("home").classList.remove("active")
// }
// function changeBtn(){
//         document.getElementById("home").classList=" hoshim";
// }
// function toggleBtn(){
//         document.getElementById("home").classList.toggle("active")
// }
// let element=document.querySelector(".Modal-back")
// function toggleModel(){
//         element.classList.toggle("active")
// }

// let input = document.getElementById("inp")
// showBtn()
// function showBtn() {
//     let text = input.getAttribute("type")
//     if (text === "text") {
//         input.setAttribute("type", "password")
//     } else {
//
//         input.setAttribute("type", "text")
//     }
// }

chng = (event) => {
    let img=document.getElementById("largImg");
    img.setAttribute("src", event.srcElement.src);
};


// let images=document.getElementById("images")
// function chng(event){
//     for (let i=0;i<images.length;i++){
//         console.log(images)
//     }
// }
// let count = 0
// let displayCount = document.getElementById("display")
// // displayCount.innerText = count
// let enter
//
// function interval() {
//     count++
//     displayCount.innerText = count
//
// }
//
// function startBtn() {
//
//     enter = setInterval(interval, 500)
// }
//
// function stopBtn() {
//     clearInterval(enter)
// }
//
// function clearBtn() {
//     count = 0
//     displayCount.innerText = count
//     stopBtn()
// }
//
//
// user = {id:1,name:"Yusuf",amount:"2500$"}
//
// friends=[
//     {id:1,name:"Anvar",amount:"1000$"},
//     {id:2,name:"Alisher",amount:"800$"},
//     {id:3,name:"Axmat",amount:"1000$"}
// ]