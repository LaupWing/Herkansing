import listStories from './data.js'

function injectStory(array){
    const aanbevolenLijst = document.querySelector('section.aanbevolen .lijst')
    // const jouwLijst = document.querySelector('section.jouwLijst .lijst')
    array.forEach(story=>{
        const storyEl = `
        <article>
            <div class="artikeltitel">
                <h2>${story.title}</h2>
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
        // jouwLijst.insertAdjacentHTML('beforeend', storyEl)
    })
}

const init = ()=>{
    injectStory(listStories)
}

init()