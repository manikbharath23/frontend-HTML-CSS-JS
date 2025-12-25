let body=document.body
let btn=document.getElementById("btn1")
let mode="light"

btn.onclick=function(){
if(mode==="light"){
body.style.background="black"
body.style.color="white"
btn.innerText="light theme"
mode="dark"
}else{
body.style.background="white"
body.style.color="black"
btn.innerText="dark theme"
mode="light"
}
}

let img=document.getElementById("img")
let images=[
"https://www.w3schools.com/w3images/la.jpg",
"https://www.w3schools.com/w3images/chicago.jpg",
"https://www.w3schools.com/w3images/ny.jpg"
]
let i=0

setInterval(()=>{
img.src=images[i]
i++
if(i>=images.length){i=0}
},3000)

let ticket=document.querySelector(".ticket-box")
let buyButtons=document.querySelectorAll(".buy")
let close=document.getElementById("close")

buyButtons.forEach(btn=>{
btn.onclick=function(){
ticket.style.right="20px"
}
})

close.onclick=function(){
ticket.style.right="-400px"
}
