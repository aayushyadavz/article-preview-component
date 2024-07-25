const shareBtn = document.querySelector(".share-btn")
const shareBox = document.querySelector(".sharebox")
const fbBtn = document.querySelector(".share-icon-fb")
const tweetBtn = document.querySelector(".share-icon-tweet")
const pintBtn = document.querySelector(".share-icon-pint")

shareBtn.addEventListener("click", function(){
    shareBox.classList.toggle("hide-it")
    shareBtn.classList.toggle("hover-active-bg")
})

tweetBtn.addEventListener("click", function(){
    window.open(`https://twitter.com/intent/tweet?text=http://127.0.0.1:5500/index.html#`, `Tweet Window`, `width=600px height=300px`)
})