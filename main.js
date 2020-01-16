import aanbevolen from './aanbevolen.js'
import jouwLijst from './jouwlijst.js'
import MobileAside from './scripts/mobileaside.js'
import debounce from './scripts/debounce.js'

function injectStory(container, array){
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
        container.insertAdjacentHTML('beforeend', storyEl)
    })
}

const init = ()=>{
    const aanbevolenLijstContainer = document.querySelector('section.aanbevolen .lijst')
    const jouwLijstContainer = document.querySelector('section.jouwLijst .lijst')
    window.addEventListener('keydown', goToPornhub)
    injectStory(aanbevolenLijstContainer, aanbevolen)
    injectStory(jouwLijstContainer, jouwLijst)
    addingEvents()
    new MobileAside()
    checkWindowSize()
}

function checkWindowSize(){
    if(window.innerWidth < 430){
        document.querySelector('.jouwLijst .lijst').addEventListener('scroll', debounce(mobileScrollEvent,200))
        document.querySelector('.aanbevolen .lijst').addEventListener('scroll', debounce(mobileScrollEvent,200))
    }
}

function mobileScrollEvent(e){
    const list = Array.from(e.target.querySelectorAll('article'))
    const minPoint= e.target.scrollLeft + 40 + (e.target.offsetWidth/2)
    const maxPoint= e.target.scrollWidth - (e.target.scrollLeft+(e.target.offsetWidth/2)) +40

    list.forEach(item=>{
        item.classList.remove('hover')
        item.querySelector('h2').classList.remove('sliding')
    })
    console.log('removing hover clases')
    const findArticleOnThreshhold = list.find(item=>{
        const itemOffsetRight = e.target.scrollWidth - (item.offsetLeft + item.offsetWidth)
        return minPoint >= item.offsetLeft && itemOffsetRight <= maxPoint
    })
    if(findArticleOnThreshhold){
        const h2 = findArticleOnThreshhold.querySelector('h2')
        if(isEllipsisActive(h2)){
            h2.classList.add('sliding')
        }
        findArticleOnThreshhold.classList.add('hover')
    }
}

function centerArticle(article, container){
    const valueToCenter = (window.innerWidth - article.offsetWidth)/2
    const currentXval = article.getBoundingClientRect().x
    const diffrence = currentXval - valueToCenter
    // container.scrollBy(diffrence,0)
    
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

let input = []

function goToPornhub(e){
    const secret = 'Jim is gay, suck my dick'
    const notAllowed = ['Shift', 'Alt', 'Control', 'Backspace', 'Tab']
    if(e.key==='Backspace'){
        return input.pop()
    }
    if(notAllowed.includes(e.key)){
        return
    }
    input.push(e.key)
    if(input=== secret){
        input = []
    }else{
        if(input.join('').trim()=== secret){
            location.href = 'https://www.facebook.com/jim.deven'
        }
    }

}   

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


init()