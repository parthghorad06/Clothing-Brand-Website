// ============================
// theTagless JavaScript
// ============================

// Sticky Navbar

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

    } else {

        header.style.background = "#111";
        header.style.boxShadow = "none";

    }

});

// Scroll Reveal Animation

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=+counter.getAttribute("data-target");

        const count=+counter.innerText;

        const increment=target/100;

        if(count<target){

            counter.innerText=Math.ceil(count+increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText=target;

        }

    };

    updateCounter();

});

// Back To Top

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};