class Nav extends HTMLElement {
    connectedCallback() {

        const attributeLinks = this.getAttribute("links");

        let links = [];
        try{
            links = JSON.parse(attributeLinks);
        }catch(e){
            console.log(e);
        }

        const listItems = links.map((link) => {
            return `<li><a href="${link.href}">${link.text}</a></li>`;
        });


        this.innerHTML = `
        <nav class="nav flex justify-between items-center">
            <h1 class="text-center margin-x text-color" style="--color: #fff;">${this.getAttribute("title")}</h1>
            <ul class="nav-list ">
                ${listItems.join('')}
            </ul>
        </nav>`;
    }
}

class Card extends HTMLElement {
    connectedCallback() {
        try{
            const text = this.getAttribute("text");
            console.log(text.split(', '))
            
            const condition = Array.isArray(text.split(', '));
            console.log(condition)
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
            ${this.hasAttribute("image") ? `<img src="${this.getAttribute("image")}" alt="" class="card-img">` : ''}
            <h2 class="card-title">${this.getAttribute("title")}</h2>
            ${textContent}
            ${isBtn ? `<button class="card-button">${this.getAttribute("buttonText")}</button>` : ''}
         </div>`;
        }catch(e){
            console.log(e);
        }
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



customElements.define('nav-component', Nav);
customElements.define('card-component', Card);
customElements.define('review-card-component', ReviewCard);
customElements.define('hero-component', Hero);
