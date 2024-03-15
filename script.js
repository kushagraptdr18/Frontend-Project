const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});








gsap.from("#part1,#part2",{
    y:-100,
    opacity:0,
    duration:1,
    stagger:.2,
})
gsap.from("#page1 h2",{
    y:-300,
    duration:1,
    opacity:1,
})
gsap.from("#page1 img",{
    
    y:80,
    duration:1,
    scale:0,
    opacity:0,
    // scrollTrigger:{
    //     trigger:"#page1",
    //     scroller:"body",
    //     markers:true,
    //     start:"top -20%",
    //     end:" top -20%",
    //     scrub:2,
        

    // }
})





var box=document.querySelectorAll("#swiper .box");
var content=document.querySelector(".content h1")




var arr=["THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO.", "THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH.","MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE.","I THINK I SPEAK FOR EVERYONE WHEN I SAY WE ARE VERY GRATEFUL TO HAVE BEEN ABLE TO COME IN AND HELP OUT FOR THE DAY; THE WORK YOU DO IS AMAZING." ]









var previous;

box.forEach(function(elm,id){
    elm.addEventListener("click",function(){
       if(previous!=undefined){
        previous.style.backgroundColor="transparent"

       }
        elm.childNodes[1].style.backgroundColor="black"
        previous=elm.childNodes[1];

        content.innerHTML=`${arr[id]}`
        
var tl=gsap.timeline();
tl.from(".content h1",{
    y:-100,
    scale:1.5,
    
    opacity:0,
    stagger:0.2
    
})

        
        
    })
})





























