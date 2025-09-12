let headings = ["SMART IT SOLUTIONS FOR YOUR BUSINESS GROWTH", "ENGAGING CONTENT THAT BUILDS TRUST & DRIVES RESULTS", "POWERFUL WEBSITES DESIGNED TO PERFORM & SCALE", "INTUITIVE DESIGNS CRAFTED FOR SEAMLESS USER EXPERIENCES"];
let background = [
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/bg.jpg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/download.jpeg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url('./images/In hd quality________.jpeg')",
    "linear-gradient(94.2deg, #021E2D 47.66%, #021e2d80 96.58%), url(\"./images/Marvel's Spider-Man HD Spider Symbol Wallpaper.jpeg\")"
  ];
let container = document.querySelector(".pagination");
let children = container.children;
let heroHeading = document.querySelector("#heading");
let heroSection = document.querySelector("header");

container.innerHTML += container.innerHTML;
children = container.children;


let gap = parseFloat(getComputedStyle(container).gap);
console.log(gap);
let widths = Array.from(children).map(el => el.offsetWidth + gap);

let index = 0;
let idx = 0;
let move = 0;
let time = 3000;

function slider() {
        setInterval(() => {
        move += widths[index];
        let containerWidth = container.scrollWidth + widths[0];
        if (move >= containerWidth / 2) {
            move = 0;
            index = 0;
            time = 0;
            container.style.transition = "none"; 
            container.style.transform = `translateX(0px)`;
            children[0].classList.add("text-secondary");
            heroHeading.innerText = headings[0];
            heroSection.style.background = background[0];
            heroSection.style.backgroundRepeat = "no-repeat";
            heroSection.style.backgroundSize = "cover"
            setTimeout(() => {
                container.style.transition = "transform 0.3s";
            }, 50);
        } else {
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
            heroHeading.innerText = headings[idx];
            heroSection.style.background = background[idx];
            heroSection.style.backgroundRepeat = "no-repeat";
            heroSection.style.backgroundSize = "cover"
        }
    }, time);
}

slider();
