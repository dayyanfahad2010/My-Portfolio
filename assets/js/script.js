let todolistbtn=document.getElementById("todolist-preview");
let loginbtn=document.getElementById("login-preview");
let clockbtn=document.getElementById("clock-preview");
let hackathonbtn=document.getElementById("hackathon-preview");
let burgerwebsitebtn=document.getElementById("burger-website-preview");
let educationalwebsitebtn=document.getElementById("educational-website-preview");
let ecommercebtn=document.getElementById("ecommerce-preview");
let dropdownbtn=document.getElementById("dropdown-preview");
let roboticsbtn=document.getElementById("robotics-preview");
let loadMoreBtn=document.getElementById("loadmore");
let projectdiv=document.getElementsByClassName("project");
let nav =document.getElementById("nav")
let open=document.getElementById("open")
let close=document.getElementById("close")
close.style.display="none"
// open.style.display="none"

function openmenu(){
    nav.style.right="0px"
    nav.style.top="50px"
    nav.style.width="250px"
    open.style.display="none"
    close.style.display="block"
}
function closemenu(){
    nav.style.right="-400px"
    // nav.style.top="50px"
    nav.style.width="250px"
    close.style.display="none"
    open.style.display="block"
    
}

projectdiv[6].style.display='none'
projectdiv[7].style.display='none'
projectdiv[8].style.display='none'
projectdiv[9].style.display='none'
loadMoreBtn.onclick=()=>{
    if(loadMoreBtn.textContent==="Load More"){
        projectdiv[6].style.display='block'
        projectdiv[7].style.display='block'
        projectdiv[8].style.display='block'
        projectdiv[9].style.display='block'
        loadMoreBtn.textContent="Load less"
    }
    else if(loadMoreBtn.textContent==="Load less"){
        projectdiv[6].style.display='none'
        projectdiv[7].style.display='none'
        projectdiv[8].style.display='none'
        projectdiv[9].style.display='none'
        loadMoreBtn.textContent="Load More"
    }
}
// projectdiv[].style.display='none'
// projectdiv[3].style.display='none'
todolistbtn.onclick=()=>{
    window.open("https://login-signup-todolist.netlify.app/","_blank");
}
loginbtn.onclick=()=>{
    window.open("https://dayyan-fahad-signup.netlify.app/","_blank");
}
clockbtn.onclick=()=>{
    window.open("https://digital-clock-responsive-30.netlify.app/","_blank");
}
hackathonbtn.onclick=()=>{
    window.open("https://first-hackathon-project-30.netlify.app/","_blank");
}
burgerwebsitebtn.onclick=()=>{
    window.open("https://burger-shop-30.netlify.app/","_blank");
}
educationalwebsitebtn.onclick=()=>{
    window.open("https://educational-website-30.netlify.app/","_blank");
}
ecommercebtn.onclick=()=>{
    window.open("https://ecommerce-store-30.netlify.app/","_blank");
}
dropdownbtn.onclick=()=>{
    window.open("https://drop-down-menu-30.netlify.app/","_blank");
}
roboticsbtn.onclick=()=>{
    window.open("https://modern-webpage.netlify.app/","_blank");
}
