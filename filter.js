// now create array 
const menucardinfo = [
    {
        id:1,
        category: "breakfast",
        img:"image/breafast (1).jpg",
        headerinfo:"butter chaines packages",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:2,
        category: "breakfast",
        img:"image/breafast (2).jpg",
        headerinfo:"burger with orange juice",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:3,
        category: "shake",
        img:"image/shake (1).jpg",
        headerinfo:"burger with butter",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:4,
        category: "shake",
        img:"image/shake (2).jpg",
        headerinfo:"ksmri lemon shake",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:5,
        category: "shake",
        img:"image/shake1.jpg",
        headerinfo:"butter orange shake",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
   
    {
        id:6,
        category: "lunch",
        img:"image/launch (2).jpg",
        headerinfo:"dahi rice and sandwich",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:7,
        category: "lunch",
        img:"image/launch (3).jpg",
        headerinfo:"korma rice with mixture matan",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:8,
        category: "dinner",
        img:"image/dinner (1).jpg",
        headerinfo:"bread matan and chicken korma",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:9,
        category: "dinner",
        img:"image/dinner (2).jpg",
        headerinfo:"matar and potato mix sabzi",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
    {
        id:10,
        category: "shake",
        img:"image/shake2.jpg",
        headerinfo:"butter chaines packages",
        price:"15$",
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, dignissimos molestias nesciunt nihil doloribus       culpa recusandae vero harum iure tempora"
    },
]

const menuinfo =  document.querySelector('.menuinfo');
const btns = document.querySelectorAll('.btns');

window.addEventListener('DOMContentLoaded',function(){
     displaymenuitem(menucardinfo);
})

// now add filter btns 
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const category = e.currentTarget.dataset.id;
        const menuCategory = menucardinfo.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
           
        })
        console.log(menuCategory);
        
        if(category === "all"){
          displaymenuitem(menucardinfo);
        }
        else{
            displaymenuitem(menuCategory);
        }

    })
})



// display menu item
function displaymenuitem(menucardinfo){
    let displaymenu = menucardinfo.map(function(item){
        return `<div class="menucard">
        <div class="image">
            <img src="${item.img}" alt="menu image" class="photo">
        </div>
        <div class="menutitle">
            <div class="headertitle">
                <h2 class="headerinfo">${item.headerinfo}</h2>
                <h2 class="price">${item.price}</h2>
            </div>
            <div class="info">
                <p>${item.desc}</p>
            </div>
        </div>
    </div>`;
    })
    displaymenu = displaymenu.join("");
    menuinfo.innerHTML = displaymenu;
}


