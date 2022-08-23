const review = [
    {
        image:"image/athh.jpg",
        name:"Md Athar Sharif",
        work: "WEB-Developer",
        info:"i am web-developer and web-expert. i am doing job as web-developer in tcs. i have 1 year experience.",
    },
    {
        image:"image/b1 (4).jpg",
        name:"Suraj Kumar",
        work: "ux-developer",
        info:"i am ux developer. i am doing job as ux-developer in wipro.i have one year experience in ux developer",
    },
    {
        image:"image/b1 (3).jpg",
        name:"Mansih kumar",
        work: "phyton-Developer",
        info:"i am python developer. i am doing job as web-developer in google. i have one year experience",
    },
    {
        image:"image/b1 (1).jpg",
        name:"jonn doe",
        work: "full stack developer",
        info:"i am full stack developer and web-expert. i am doing job as full stack developer in IBM. i have 2 years experience.",
    },
    {
        image:"image/b1 (2).jpg",
        name:"gorge boy",
        work: "java developer",
        info:"i am java-developer and web-expert. i am doing job as java-developer in golorious. i have 1 year experience.",
    },
]
let image = document.getElementById("image");
let namme = document.getElementById("name");
let work = document.getElementById("work");
let info = document.getElementById("info");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// show person info and card 

function showperson(person){
 const item = review[person];
 image.src = item.image;
 namme.textContent = item.name;
 work.textContent = item.work;
 info.textContent = item.info;
}


let currentitem = 0;

// now add eventlistner on next button
next.addEventListener('click',function(){
    currentitem++;
    if(currentitem>review.length-1){
        currentitem = 0;
    }
    showperson(currentitem);
})
prev.addEventListener('click',function(){
    currentitem--;
    if(currentitem<0){
     currentitem = review.length-1;
    }
    showperson(currentitem);
})
