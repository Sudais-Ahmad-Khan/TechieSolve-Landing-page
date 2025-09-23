let testSlider = document.querySelector(".card-wrapper");
let wrapper = document.querySelector(".card__container")
let menuOptions = document.querySelector(".options");
testSlider.innerHTML += testSlider.innerHTML;
let card = testSlider.children;
let testGap = parseFloat(getComputedStyle(testSlider).testGap);


// resposive
let width, maxtestMove, paddingLeft;
function updatetestSlider() {
    let cardWidth = card[0].scrollWidth;
    let testGap = parseFloat(getComputedStyle(testSlider).gap);

    
    width = cardWidth + testGap;
    paddingLeft = (wrapper.clientWidth / 2) - (cardWidth / 2);

    if (window.innerWidth >= 1280) {
        testSlider.style.paddingLeft = `${paddingLeft}px`;
    } else {
        testSlider.style.paddingLeft = "0px";
    }
    
    maxtestMove = testSlider.scrollWidth - cardWidth - paddingLeft;

    
    testMove = testIndex * width;
    testSlider.style.transform = `translateX(-${testMove}px)`;
}



card[0].firstElementChild.classList.remove("bg-[#EBEBEB]", "border-gray-300");
card[0].firstElementChild.classList.add("bg-secondary", "text-text");

let paginationDiv = document.getElementById("pagination");
for(let n = 0; n <= card.length - 1; n++){
    let pagination = document.createElement("div");
    pagination.classList.add("circles", "cursor-pointer", "w-[clamp(18px,3vw,24px)]", "aspect-square", "rounded-full", "border",  "border-black");
    paginationDiv.append(pagination);
}

let bubble = document.querySelectorAll(".circles");
bubble[0].classList.add("bg-secondary");
bubble[0].classList.remove("border");

let testMove = 0;
let testIndex = 0;
updatetestSlider();
window.addEventListener("resize", updatetestSlider);
// rotation of upcoming card\
Array.from(card).forEach((e)=>{
    e.style.transform = "scale(0.9)"
    card[testIndex].style.transform = "none";
})
let testTime = 4000;
function start(){
    testMove += width;
        if(testMove <= maxtestMove){
            testIndex++;
            console.log(testMove);
            testSlider.style.transform = `translateX(-${testMove}px)`;
            card[testIndex].firstElementChild.classList.add("bg-secondary", "text-text");
            card[testIndex].firstElementChild.classList.remove("bg-[#EBEBEB]", "border-gray-300");
            bubble.forEach((e)=>{
                e.classList.remove("bg-secondary");
                e.classList.add("border");
                bubble[testIndex].classList.add("bg-secondary");
                bubble[testIndex].classList.remove("border");
            })
            Array.from(card).forEach((e)=>{
                e.firstElementChild.classList.remove("bg-secondary", "text-text");
                e.firstElementChild.classList.add("bg-[#EBEBEB]", "border-gray-300");
            })
            card[testIndex].firstElementChild.classList.add("bg-secondary", "text-text");
            card[testIndex].firstElementChild.classList.remove("bg-[#EBEBEB]", "border-gray-300");
            // previous Card Rotation 
            if(card[testIndex - 1]){
                card[testIndex-1].style.transform = "scale(0.9)"
                card[testIndex].style.transform = "none";
            }
            if(card[testIndex + 1]){
                card[testIndex+1].style.transform = "scale(0.9)";
                card[testIndex].style.transform = "none";
            }
        }else {
            testIndex = 0;
            testMove = 0;
            testSlider.style.transform = `translateX(-${testMove}px)`;
            bubble.forEach((e)=>{
                e.classList.remove("bg-secondary");
                e.classList.add("border");
                bubble[testIndex].classList.add("bg-secondary");
                bubble[testIndex].classList.remove("border");
            })
            Array.from(card).forEach((e)=>{
                e.firstElementChild.classList.remove("bg-secondary", "text-text");
                e.firstElementChild.classList.add("bg-[#EBEBEB]", "border-gray-300");
                e.style.transform = "scale(0.9)"
                card[testIndex].style.transform = "none";
            })
            card[testIndex].firstElementChild.classList.add("bg-secondary", "text-text");
            card[testIndex].firstElementChild.classList.remove("bg-[#EBEBEB]", "border-gray-300");
        }
        setTimeout(start, testTime)
}
setTimeout(start, testTime)

bubble.forEach((e, i) => {
    e.addEventListener("click", function () {
        testIndex = i;
        testMove = testIndex * width;
        testSlider.style.transform = `translateX(-${testMove}px)`;
        // circles coloring
        bubble.forEach((b) => {
            b.classList.remove("bg-secondary");
            b.classList.add("border");
        });
        e.classList.add("bg-secondary");
        e.classList.remove("border");
        
        Array.from(card).forEach((el) => {
            el.firstElementChild.classList.remove("bg-secondary", "text-text");
            el.firstElementChild.classList.add("bg-[#EBEBEB]", "border-gray-300");
            el.style.transform = "scale(0.9)";
        });

        card[testIndex].firstElementChild.classList.add("bg-secondary", "text-text");
        card[testIndex].firstElementChild.classList.remove("bg-[#EBEBEB]", "border-gray-300");
        card[testIndex].style.transform = "none";

        if (card[testIndex - 1]) {
            card[testIndex - 1].style.transform = "scale(0.9)";
        }
        if (card[testIndex + 1]) {
            card[testIndex + 1].style.transform = "scale(0.9)";
        }
    });
});

        function menu(){
            if(menuOptions.classList.contains("hidden")){
                menuOptions.classList.remove("hidden");
            }else{
                menuOptions.classList.add("hidden");
            }
        }