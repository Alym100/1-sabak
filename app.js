const app=document.querySelector("button")
const ann=document.querySelector("h4")


app.onclick=()=>{
    const random=Math.floor(Math.random()*100)
    ann.innerHTML=random
    if (random>30 && random<40){
        alert("siz taptynyz")
    }
    
}
