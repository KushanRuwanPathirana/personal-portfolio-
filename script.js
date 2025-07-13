let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentwordIndex = 0;
let maxwordIndex = words.length - 1;
words[currentwordIndex].style.opacity = "1";

let changeText = () => {
  let currentword = words[currentwordIndex];
  let nextword = currentwordIndex === maxwordIndex ? words[0] : words[currentwordIndex + 1];

  Array.from(currentword.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextword.style.opacity = "1";

  Array.from(nextword.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentwordIndex = currentwordIndex === maxwordIndex ? 0 : currentwordIndex + 1;
};

changeText();
setInterval(changeText, 3000);



// Circle skill///////////////////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots=elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate =360/dots;

    for(let i=0; i<dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML =points;

    const pointMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointMarked[i].classList.add('marked')
    } 
}) 


// Mix it up port folio sectiion

var mixer = mixitup('.portfolio-gallery');

// Active menu///////////////////////////////////////////////////////
 let menuLi = document.querySelectorAll('header ul li a');
 let sectiion = document.querySelectorAll('section');

 function activeMenu(){
    let len = sectiion.length;
    while(--len && window.scrollY + 97 < sectiion[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.remove("active"));
    menuLi[len].classList.add("active");
 }

 activeMenu();
    window.addEventListener("scroll",activeMenu);

// Sticky navbar///////////////////////////////////////////////////////
const header =document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>50)
})

//toggle icon nacbar///////////////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
};

//parallax///////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
