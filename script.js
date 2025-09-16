let headings = [
    `SMART TECHNOLOGY SOLUTIONS FOR YOUR <span class="text-secondary">BUSINESS GROWTH</span>`,
    `ENGAGING CONTENT THAT BUILDS TRUST & <span class="text-secondary">DRIVES RESULTS</span>`,
    `HIGH PERFORMANCE WEBSITES THAT <span class="text-secondary">GROW WITH YOU</span>`,
    `DESIGNS MADE FOR SMOOTH & <span class="text-secondary">INTUITIVE EXPERIENCES</span>`
];
let background = [
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/bg.jpg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/download.jpeg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/In hd quality________.jpeg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url(\"./images/Marvel's Spider-Man HD Spider Symbol Wallpaper.jpeg\")"
];
let container = document.querySelector(".pagination");
let children = container.children;
let heroHeading = document.getElementById("heading");
let heroSection = document.querySelector("header");

container.innerHTML += container.innerHTML;
heroHeading.classList.add("fadeIn")
children = container.children;


let gap = parseFloat(getComputedStyle(container).gap);
console.log(gap);
let widths = Array.from(children).map(el => el.offsetWidth + gap);

let index = 0;
let idx = 0;
let move = 0;
let time = 5000;

function slider() {
        move += widths[index];
    let containerWidth = container.scrollWidth + widths[0];
    if (move >= containerWidth / 2) {
        move = 0;
        index = 0;
        container.style.transition = "none"; 
        container.style.transform = `translateX(0px)`;
        children[0].classList.add("text-secondary");
        heroHeading.innerHTML = headings[0];
        heroHeading.classList.remove("fadeIn");
        heroSection.style.background = background[0];
        heroSection.style.backgroundRepeat = "no-repeat";
        heroSection.style.backgroundSize = "cover"

        slider();
    } else {
        container.style.transition = "transform 1s ease-in-out";
        container.style.transform = `translateX(-${move}px)`;
        Array.from(children).forEach(function(e){
            if(e.classList.contains("text-secondary")){
                e.classList.remove("text-secondary");
                children[index + 1].classList.add("text-secondary");
            }
        })
        index++;
        if(idx < headings.length - 1){
            idx++;
        }else {
            idx = 0;
        }
        heroHeading.innerHTML = headings[idx];
        heroHeading.classList.remove("fadeIn");
        void heroHeading.offsetWidth; 
        heroHeading.classList.add("fadeIn");
        heroSection.style.background = background[idx];
        heroSection.style.backgroundRepeat = "no-repeat";
        heroSection.style.backgroundSize = "cover";
        setTimeout(slider, time);
}
}

setTimeout(slider, time);