const sections = document.querySelectorAll(".fade");

function reveal(){
    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);