const shareBtn = document.querySelector(".share-btn")
const sharebox = document.querySelector(".sharebox")
const svgIcon = shareBtn.querySelector("svg")
const shareIcons = document.querySelectorAll(".share-icon")

shareBtn.addEventListener("click", function(){
    sharebox.classList.toggle("hide-it")
    shareBtn.classList.toggle("hover-active-bg")
    svgIcon.classList.toggle("white")
});

const shareUrls = {
    facbook: 'https://www.facebook.com/sharer/sharer.php?u=https://my-article-card.netlify.app/&quote=Here\'s my first article, you can read 👉',
    twitter: 'https://twitter.com/intent/tweet?text=Here\'s my first article, you can read 👉 https://my-article-card.netlify.app/',
    pinterest: 'https://www.pinterest.com/pin/create/button/?url=https://my-article-card.netlify.app/&description=Here\'s my first article, you can read 👉'
};

shareIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
        const platform = event.currentTarget.getAttribute("data-platform")
        const url = shareUrls[platform]
        window.open(url, 'Share Window', 'width=600,height=300')
    });
});