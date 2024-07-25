const shareBtn = document.querySelector(".share-btn")
const shareBox = document.querySelector(".sharebox")
const fbBtn = document.querySelector(".share-icon-fb")
const tweetBtn = document.querySelector(".share-icon-tweet")
const pintBtn = document.querySelector(".share-icon-pint")

shareBtn.addEventListener("click", function(){
    shareBox.classList.toggle("hide-it")
    shareBtn.classList.toggle("hover-active-bg")
})

fbBtn.addEventListener("click", function(){
    window.open(
        'https://www.facebook.com/sharer/sharer.php?u=https://my-article-card.netlify.app/&quote=Here\'s my first article, you can read 👉',
        'Share Window',
        'width=600,height=300'
      );
      
})

tweetBtn.addEventListener("click", function(){
    window.open(
        'https://twitter.com/intent/tweet?text=Here\'s my first article, you can read 👉 https://my-article-card.netlify.app/',
        'Tweet Window',
        'width=600,height=300'
      );
})

pintBtn.addEventListener("click", function(){
    window.open(
        'https://www.pinterest.com/pin/create/button/?url=https://my-article-card.netlify.app/&description=Here\'s my first article, you can read 👉',
        'Share Window',
        'width=600,height=300'
      );      
})