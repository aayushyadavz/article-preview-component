const shareBtn = document.querySelector(".share-btn")

shareBtn.addEventListener("click", function(){
    document.querySelector(".sharebox").classList.toggle("hide-it")
    shareBtn.classList.toggle("hover-active-bg")
    document.querySelector("svg").classList.toggle("white")
})

document.querySelector(".share-icon-fb").addEventListener("click", function(){
    window.open(
        'https://www.facebook.com/sharer/sharer.php?u=https://my-article-card.netlify.app/&quote=Here\'s my first article, you can read 👉',
        'Share Window',
        'width=600,height=300'
      );
      
})

document.querySelector(".share-icon-tweet").addEventListener("click", function(){
    window.open(
        'https://twitter.com/intent/tweet?text=Here\'s my first article, you can read 👉 https://my-article-card.netlify.app/',
        'Tweet Window',
        'width=600,height=300'
      );
})

document.querySelector(".share-icon-pint").addEventListener("click", function(){
    window.open(
        'https://www.pinterest.com/pin/create/button/?url=https://my-article-card.netlify.app/&description=Here\'s my first article, you can read 👉',
        'Share Window',
        'width=600,height=300'
      );      
})