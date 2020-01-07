import listStories from './data.js'

function injectStory(array){
    const aanbevolenLijst = document.querySelector('section.aanbevolen .lijst')
    const jouwLijst = document.querySelector('section.jouwLijst .lijst')
    array.forEach(story=>{
        const storyEl = `
        <article>
            <div class="artikeltitel">
                <h2><span>${story.title}</span></h2>
                <img class="plusicon" src="img/Plus.png" alt="">
            </div>
            <a href="${story.link}">
                <blockquote>
                    <div class="text">Kort verhaaltje</div>
                </blockquote>
            </a>
            <div class="imagecontainer">
                <a href="${story.link}"><img src="${story.img}" alt="verhaal3"></a>
                <figure class="verhaallikes">
                    <p>${story.likes}</p>
                    <img src="img/Likes.png" alt="">
                </figure>
                <figure class="verhaaltijd">
                    <img src="img/Tijd%20png.png" alt="">
                    <p>${story.time} min</p>
                </figure>
            </div>
        </article>
        `
        aanbevolenLijst.insertAdjacentHTML('beforeend', storyEl)
        jouwLijst.insertAdjacentHTML('beforeend', storyEl)
    })
}

const init = ()=>{
    injectStory(listStories)
    addingEvents()
}


function addingEvents(){
    const articles = document.querySelectorAll('article')
    articles.forEach(article=>{
        article.addEventListener('mouseover', (event)=>{
            const item = event.target.closest('article')
            const h2 = item.querySelector('h2')
            if(isEllipsisActive(h2)){
                h2.classList.add('sliding')
            }
        })
        article.addEventListener('mouseout', (event)=>{
            const item = event.target.closest('article')
            const h2 = item.querySelector('h2')
            if(isEllipsisActive(h2)){
                h2.classList.remove('sliding')
            }
        })
    })
}

function isEllipsisActive(e) {
    return (e.offsetWidth < e.scrollWidth);
}

init()