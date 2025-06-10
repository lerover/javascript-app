import {store} from "./store.js";
import { bindClickDirectives } from "./script.js";

console.log(store.getState().cart)

class Nav extends HTMLElement {
    constructor(){
        super();
        this.mediaQuery = window.matchMedia("(max-width: 728px)");
        this.handleResize = this.handleResize.bind(this);
        this.links = [];
        this.text = '';

        // making like ref() of vue 
        Object.defineProperty(this, 'openNavResult', {
            get: () => this._openNavResult,
            set: (value) => {
                this._openNavResult = value;
                this.render();
            }
        })
        this.openNavResult = false;
    }
    connectedCallback() {
        
        this.mediaQuery.addEventListener("change", this.handleResize);
        
        this.links = this.getAttribute("links");
        this.text = this.getAttribute("text");
        
        console.log(this.mobileNavBtn)


        try{
            this.links = JSON.parse(this.links);
        }catch(e){
            console.log(e);
        }

        this.render();
    }

    disconnectedCallback(){
        this.mediaQuery.removeEventListener("change", this.handleResize);
    }

    handleResize(){
        this.render();
    }

    render(){
        const isMobile = this.mediaQuery.matches;
        const mobileIcon = this.openNavResult ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-count" style="--w: 24px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`  
                            : 
                            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-count" style="--w: 24px;">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>`

        
        const listItems = this.links.map((link) => {
            return `<li><a href="${link.href}">${link.text}</a></li>`;
        });

        const mobileLists = this.links.map((link) => {
            return `<div class=" padding-x margin-y ${this.openNavResult ? 'block' : 'hidden'}" style="--my: 5px; cursor: pointer;">
                <ul class="" style="list-style-type: none;">
                    <li class="link-decoration"><a href="${link.href}">${link.text}</a></li>
                </ul>
            </div>`;
        })
                    
                    
        this.innerHTML = `
            <nav class="nav flex justify-between items-center">
                <h1 class="text-center margin-x text-color" style="--color: #fff;">${this.title}</h1>
                                
                <button id="mobile-nav-btn" class="btn btn-color ${isMobile ? 'block' : 'hidden'}" style="padding: 2px 2px; --btn-color:transparent; --btn-text-color:white;" >${mobileIcon}</button>
                                   
                <ul class="nav-list ${isMobile ? 'hidden' : 'block'}">${listItems.join('')}</ul>
            </nav>
            ${isMobile ? mobileLists.join('') : ''}
            `;
        
        this.mobileNavBtn = document.getElementById('mobile-nav-btn');
        this.mobileNavBtn.addEventListener('click', () => {
            this.openNavResult = !this.openNavResult;
            console.log(this.openNavResult)
        })
        bindClickDirectives(this);
        
    }
}

class Card extends HTMLElement {
    constructor(){
        super();
        this.cart =  store.getState().cart;  
       
    }
    connectedCallback() {
        try{
            const text = this.getAttribute("text");
            const id = this.getAttribute("id");
            const imageUrl = this.getAttribute("image");
            
            const condition = Array.isArray(text.split(', '));
            let textContent;
            if(condition){
                textContent = text.split(', ').map(pt => {
                    return `<p class="card-text">${pt}</p>`
                }).join('')
            }else{
                textContent = `<p class="card-text">${text}</p>`
            }
            const isBtn = this.hasAttribute("isBtn") ? this.getAttribute("isBtn") !== "false" : true;
            this.innerHTML = `
        <div class="card">
            ${this.hasAttribute("image") ? `<img src="${imageUrl.includes('https') ? imageUrl : `assets/images/${imageUrl}`}" alt="" class="card-img">` : ''}
            <h2 class="card-title">${this.getAttribute("title")}</h2>
            ${textContent}
            ${isBtn ? `<button id="btn-${id}" class="card-button btn-color" style="${this.getAttribute('buttonText').includes('Remove') ? '--card-btn-color:red; --btn-text-color:white; --card-btn-color-hover:rgba(255, 0, 0, 0.7);':''}">${this.getAttribute("buttonText")}</button>` : ''}
         </div>`;

         const btn = document.getElementById(`btn-${id}`);
         btn.addEventListener('click', () => {
            this.storeInArray({id, name: this.getAttribute("title"), text, image: imageUrl})
         })
        }catch(e){
            console.log(e);
        }
    }

    storeInArray(value){
        if(JSON.parse(localStorage.getItem('cart'))){
            this.cart = [...JSON.parse(localStorage.getItem('cart'))];
        }

            if(!this.cart.find(item => item.id === value.id)){
                this.cart.push(value)
                localStorage.setItem('cart', JSON.stringify(this.cart));
                console.log('yes')
            }else{
                console.log('no')
                this.cart = this.cart.filter(item => item.id !== value.id)
                localStorage.setItem('cart', JSON.stringify(this.cart));
                console.log(this.cart.filter(item => item.id !== value.id))
            }

            location.reload();
        
        return this.cart;
    }

    


}

class ReviewCard extends HTMLElement{
    connectedCallback(){
        try{
            this.innerHTML = `
            <div class="review-card">
                <div class="review-header">
                  <img src="${this.getAttribute("image")}" alt="User Avatar" class="review-avatar">
                  <div>
                    <h3 class="review-name">${this.getAttribute("name")}</h3>
                    <div class="review-stars">★★★★★</div>
                  </div>
                </div>
                <p class="review-text">
                  "${this.getAttribute("text")}"
                </p>
                <div class="review-date">${this.getAttribute("date")}</div>
              </div>`;
        }catch(e){
            console.log(e);
        }
    }
}

class Hero extends HTMLElement{
    connectedCallback(){
        try{
            this.innerHTML = `
            <div class="w-full h-count" style="--h: 500px;">
                <div class="h-full flex flex-col justify-center items-center relative">
                    <h1 class="text-center text-color text-size" style="--color: #fff; --size: 100px;">
                        ${this.getAttribute("title")}
                    </h1>
                    <p class="text-center text-color text-size" style="--color: #fff; --size: 50px;">
                        ${this.getAttribute("text")}
                    </p>
                    <button class="btn btn-premium margin-y" >${this.getAttribute("buttonText")}</button>
                    <img src="${this.getAttribute("image")}" alt="" class="w-full h-full absolute center z-index object-cover object-center" style="--z-index: -1;">
                </div>
            </div>`;
        }catch(e){
            console.log(e);
        }
    }
}

class Footer extends HTMLElement{
    connectedCallback(){
        try{
            this.innerHTML = `
            <footer class="w-full h-count bg-color" style="--h: 50px; --bg-color: #333">
                <div class="h-full flex flex-col justify-center items-center">
                    <p class="text-color text-size" style="--color: #fff; --size: 20px;">${this.getAttribute("text")}</p>
                </div>
            </footer>`;
        }catch(e){
            console.log(e);
        }
    }
}



customElements.define('nav-component', Nav);
customElements.define('card-component', Card);
customElements.define('review-card-component', ReviewCard);
customElements.define('hero-component', Hero);
customElements.define('footer-component', Footer);

// functions register
window.AppFunctions = {
    // true false function | use it for every true false function 
    isBool(value){
        value === false ? value = true : value = false;
        return value;
        
    },
    output(){
        console.log('work')
    },
    storeInArray(value){
        let cart = [];
        cart.push(value)
        return cart;
    },
    store(value){
        let cart = [];
        cart.push(value)
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(value)
    }
}
