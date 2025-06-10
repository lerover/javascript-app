import { store } from "./store.js";


//for cards 
//documentation

/*
    first declare your card data objects
    second declare your container
    third call your function (two params - object, container)
*/

const cardFunction = (values,entryContainer,customAttr = {},cardName, noGenerateId = true) => {
    values.forEach((value) => {
        let card = document.createElement(`${cardName ?? 'card'}-component`);
        switch(cardName){
            case 'review-card':
                card.setAttribute('name', value.name);
                card.setAttribute('text', value.text);
                card.setAttribute('date', value.date);
                card.setAttribute('image', value.image);
                break;
            default:
                customAttr.isImage ? '' : card.setAttribute('image', value.image);
                card.setAttribute('title', value.title);
                card.setAttribute('text', value.text);
                card.setAttribute('buttonText', value.buttonText);
                noGenerateId ? card.setAttribute('id', `${value.title}-${value.image}`) : card.setAttribute('id', value.id);
                Object.entries(customAttr).forEach(([key, val]) => {
                    card.setAttribute(key, val);
                })
                break;
        }
        entryContainer.appendChild(card);
    })
}




// card data objects 
const catalogues = [
    {
        image: 't-shirt.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt2.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt3.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt4.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 'watch.png',
        title: 'Watch',
        text: '$20',
        buttonText: 'Buy'
    },
    {
        image: 'watch2.png',
        title: 'Watch',
        text: '$20',
        buttonText: 'Buy'
    },
    {
        image: 'shoe.png',
        title: 'Shoe',
        text: '$30',
        buttonText: 'Buy'
    },
    {
        image: 'girlshoe.png',
        title: 'Shoe',
        text: '$30',
        buttonText: 'Buy'
    },
]
const shopCatalogues = [
    {
        image: 't-shirt.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt2.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt3.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 't-shirt4.png',
        title: 'T-Shirt',
        text: '$10',
        buttonText: 'Buy'
    },
    {
        image: 'watch.png',
        title: 'Watch',
        text: '$20',
        buttonText: 'Buy'
    },
    {
        image: 'watch2.png',
        title: 'Watch',
        text: '$20',
        buttonText: 'Buy'
    },
    {
        image: 'shoe.png',
        title: 'Shoe',
        text: '$30',
        buttonText: 'Buy'
    },
    {
        image: 'girlshoe.png',
        title: 'Shoe',
        text: '$30',
        buttonText: 'Buy'
    },
    
        {
          image: 'https://tmlewin.co.uk/cdn/shop/files/Crewneck_Tshirt_Black_67937_FLF.jpg?v=1727366656',
          title: 'T-Shirt',
          text: '$10',
          buttonText: 'Buy'
        },
        {
          image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1736527960-untitled-3-67815035563fa.jpg?crop=0.774xw:0.830xh;0.111xw,0.0871xh&resize=980:*',
          title: 'Jeans',
          text: '$25',
          buttonText: 'Buy'
        },
        {
          image: 'https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg',
          title: 'Jacket',
          text: '$40',
          buttonText: 'Buy'
        },
        {
          image: 'https://assets.manufactum.de/p/209/209943/209943_01.jpg/ladies-sneaker.jpg?profile=pdsmain_1500',
          title: 'Sneakers',
          text: '$35',
          buttonText: 'Buy'
        },
        {
          image: 'https://m.media-amazon.com/images/I/61R3gy6ocCL.jpg',
          title: 'Backpack',
          text: '$20',
          buttonText: 'Buy'
        },
        {
          image: 'https://images.samsung.com/is/image/samsung/p6pim/ie/sm-r861nzkaeua/gallery/ie-galaxy-watch-fe-r861-sm-r861nzkaeua-542501610?$684_547_PNG$',
          title: 'Watch',
          text: '$30',
          buttonText: 'Buy'
        },
        {
          image: 'https://shadyrays.com/cdn/shop/files/DSC_3635_Original.jpg?v=1747238059&width=1800',
          title: 'Sunglasses',
          text: '$15',
          buttonText: 'Buy'
        },
        {
          image: 'https://m.media-amazon.com/images/I/71tKXRvS9IL._AC_SL1500_.jpg',
          title: 'Hat',
          text: '$12',
          buttonText: 'Buy'
        },
        {
          image: 'https://content.woolovers.com/img/747x856/319494_p100c_cherryred_w_6.jpg',
          title: 'Scarf',
          text: '$8',
          buttonText: 'Buy'
        },
        {
          image: 'https://m.media-amazon.com/images/I/71GEK6a0gAL._AC_UY1000_.jpg',
          title: 'Wallet',
          text: '$18',
          buttonText: 'Buy'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoPNvnWce-s8_999I7-rfbNHY_auHfu4e-Q&s',
          title: 'Shoes',
          text: '$32',
          buttonText: 'Buy'
        },
        {
          image: 'https://thesilverstore.com.au/cdn/shop/files/engrvaed-gold-bar-barcelet.jpg?v=1713750486',
          title: 'Bracelet',
          text: '$10',
          buttonText: 'Buy'
        },
        {
          image: 'https://www.tailoredjewel.com/wp-content/uploads/2022/12/1.0ct-Diamond-Bridge-Solitaire-Engagement-Ring-4.jpg',
          title: 'Ring',
          text: '$22',
          buttonText: 'Buy'
        },
        {
          image: 'https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/large_transparent/ce632827adec4e1842caa762f10e643d.png',
          title: 'Headphones',
          text: '$50',
          buttonText: 'Buy'
        },
        {
          image: 'https://i5.walmartimages.com/asr/f7837d96-46a9-4a93-b2ae-7aae9d4a34b7.ee7886a1edadebb5617039a832aef144.jpeg',
          title: 'Camera',
          text: '$75',
          buttonText: 'Buy'
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhrc-lfoLRIBkJfjUbg54bISTzMHanZgg1Q&s',
          title: 'Laptop',
          text: '$500',
          buttonText: 'Buy'
        },
        {
          image: 'https://www.zdnet.com/a/img/resize/9f3fcf92f17d47c88823e7f2c0f1454ecd3e5140/2024/09/19/8da68e24-08b1-467a-9062-a90a96c1d879/dsc02198.jpg?auto=webp&fit=crop&height=900&width=1200',
          title: 'Phone',
          text: '$300',
          buttonText: 'Buy'
        },
        {
          image: 'https://i5.walmartimages.com/seo/Phone-Charger-2-Pack-20w-Charging-Cable-USB-C-type-Wall-Charger-PD-Power-Adapter-Compatible-Phone-12-pro-max-11-X-8-8-Plus-7-7-Plus-6-6S-6-Plus-5S-SE_636f1b61-6894-47ca-b613-2e0b95355e76.c9c2761f73e00d32ee5bcf4eb31759d9.jpeg',
          title: 'Tablet',
          text: '$200',
          buttonText: 'Buy'
        },
        {
          image: 'https://tecknet.co.uk/cdn/shop/files/TECKNETWiredMouse-Gray.jpg?v=1697449058',
          title: 'Charger',
          text: '$15',
          buttonText: 'Buy'
        },
        {
          image: 'https://placehold.co/768x1024?text=Mouse',
          title: 'Mouse',
          text: '$10',
          buttonText: 'Buy'
        }
 ]

 const contactData = [
    {
        title: 'Contact Information',
        text: 'Address : Lanmadaw,Yangon, Phone : +959777777777, Email : shoppy@gmail.com',
        buttonText: 'Contact Us',
    }
 ]

 const reviewData = [
    {
        name: 'John Doe',
        text: 'Absolutely love this product! Quality is amazing and delivery was super fast. Will definitely buy again!',
        date: 'June 9, 2025',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Jane Smith',
        text: 'The product exceeded my expectations. The quality is top-notch and the delivery was prompt. Highly recommend!',
        date: 'June 8, 2025',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Michael Johnson',
        text: 'I was pleasantly surprised by the product. The quality is good and the delivery was on time. Will purchase again!',
        date: 'June 7, 2025',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Emily Davis',
        text: 'The product is exactly as advertised. The quality is excellent and the delivery was fast. Would buy again!',
        date: 'June 6, 2025',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'David Wilson',
        text: 'The product is exactly as advertised. The quality is excellent and the delivery was fast. Would buy again!',
        date: 'June 5, 2025',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
 ]
      

const cartItems = JSON.parse(localStorage.getItem('cart'))?.map(item => {
  return {
    id: item.id,
    image: item.image,
    title: item.name,
    text: item.text,
    buttonText: 'Remove From Cart'
  }
}) || [];


const waitDom = (arrays) => {
    arrays.forEach((array) => {
        if(array[1]) cardFunction(array[0], array[1], array[2], array[3])
    })
}



document.addEventListener('DOMContentLoaded', () => {
    //declare your container here
const container = document.getElementById('cards');
const shopContainer = document.getElementById('shopCards');
const contactContainer = document.getElementById('contact');
const reviewContainer = document.getElementById('review-container');
const cart = document.getElementById('cart');

// array first room - input your data array
// array second room - input your container
// array third room - input your custom attributes kinda condition true or false - isBtn, isImage
// array fourth room - input your card name, card name must to be the component name without component
waitDom([
    [catalogues, container],
    [shopCatalogues, shopContainer],
    [contactData, contactContainer, {isBtn: false, isImage: true},null],
    [reviewData, reviewContainer, null, 'review-card'],
    [cartItems, cart, {},null , false]
])
})

//end for cards

//@click 
// script.js
// bind the @click (data-click) in script.js, so whereever I use that from html file, it can use the functions of window.AppFunctions
export function bindClickDirectives(context = window) {
  document.querySelectorAll('[data-click]').forEach(el => {
    const fnName = el.dataset.click;
    const fn = window.AppFunctions?.[fnName];

    console.log(el)

    if (typeof fn === 'function') {
      const argsAttr = el.dataset.clickArgs ;
      let args = [];

      try{
        if(argsAttr){
          args = JSON.parse(argsAttr);
          console.log(args);
        }
      }catch(e){
        console.log(e);
      }
      el.addEventListener('click', () => {
        const result = fn(...args);
        console.log(result)
        const bindKey = el.dataset.bindResult;

        if(bindKey && context && typeof context == 'object'){
            context[bindKey] = result;
            console.log(context)
        }
        
      });
    } else {
      console.warn(`Function "${fnName}" not found in AppFunctions`);
    }
  });
}

window.addEventListener('DOMContentLoaded', bindClickDirectives);


//for cart page
console.log(store.getState().cart)



