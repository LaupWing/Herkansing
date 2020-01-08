export default class MobileAside{
    constructor(){
        this.open = document.getElementById("mobielaside")
        this.close = document.getElementById("closebtn")
        this.myNav = document.getElementById("myNav")
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.events()
    }
    
    openNav() {
        this.myNav.style.height = "100%";   
    }
    closeNav() {
        this.myNav.style.height = "0%";
    }
    events(){
        open.addEventListener("click", this.openNav)
        close.addEventListener("click", this.closeNav)
    }
}