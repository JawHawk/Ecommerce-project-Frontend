
    const mobileBtn = document.getElementById('menu-cta')
    nav = document.querySelector('nav')
    const body = document.querySelector('body')
    mobileBtnExit = document.getElementById('menu-exit-cta')
    const cart_icon = document.getElementById('cart-icon')
    cart_window = document.getElementById('cart-window')
    site_body = document.getElementById('site-body')
    add_to_cart_img = document.getElementById('add-to-cart-img')
    cart_hero = document.getElementById('cart-hero')    
    cart_empty = document.getElementById('cart-empty')
    garbage_img = document.getElementById('garbage-can')
    checkout = document.getElementById('checkout')
    addtocart_para = document.getElementById('addtocart-para')
  

    mobileBtn.addEventListener('click',()=>{
      nav.classList.add('menu-btn')
    })
    
    mobileBtnExit.addEventListener('click',()=>{
      nav.classList.remove('menu-btn')
    })
  
    cart_icon.addEventListener('click',()=> {
      cart_window.classList.add('display')
      
    })
    
    function showDropDown(e){
                 document.getElementById('cart-icon').onclick = function(){};
                 if(e.stopPropagation)
                 e.stopPropagation();   // W3C model
                 else
                 e.cancelBubble = true; // IE model

                 document.getElementById("cart-window").style.display = "block";
              
                 document.onclick = function(e){
                 var ele = document.elementFromPoint(e.clientX, e.clientY);
                 if(ele == document.getElementById("cart-icon")){
                     hideDropDown();
                     return;
                 }
                 do{
                     if(ele == document.getElementById("cart-window"))
                     return;
                 }while(ele = ele.parentNode);
                 hideDropDown();
                 };
                 
            }

            function hideDropDown(){
                document.onclick = function(){};
                document.getElementById("cart-window").style.display = "none";
        
                document.getElementById('cart-icon').onclick = showDropDown;
            }
            document.getElementById('cart-icon').onclick = showDropDown;
    
            
     var slideIndex = 1
     window.unitcart = 1
     showSlides(slideIndex);

     // next/previous controls
     function plusSlides(n) {
       showSlides(slideIndex += n);
     }

     //Thumbnail Image controls
     function currentSlide(n) {
       showSlides(slideIndex = n);
     }

     function showSlides(n) {
       var i;
       var slides = document.getElementsByClassName("myslides");
       
       if(n > slides.length) { slideIndex = 1}
       if(n < 1) {slideIndex = slides.length}
       for(i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
       }

       slides[slideIndex - 1].style.display = "block";

      }

      var unitIndex = 1
      showUnit(unitIndex);

      function plusUnit(n) {
       showUnit(unitIndex += n);
       window.unitcart = unitIndex
     }
      function showUnit(n) {
        var i;
        var units = document.getElementsByClassName("units");

        if(n > units.length) { unitIndex = 1}
        if(n<1) {unitIndex = units.length}
        for(i=0;i<units.length;i++) {
          units[i].style.display = "none";
        }
        units[unitIndex - 1 ].style.display = "inline-block";
      }
            
      garbage_img.addEventListener('click',function() {
        cart_empty.classList.remove('displaynone')
        cart_hero.classList.remove('displayblock');
      })
      
      document.getElementById("add-to-cart").addEventListener('click',function(){
        cart_empty.classList.add('displaynone')
        cart_hero.classList.add('displayblock');
        document.getElementById('product-units').innerHTML = "$125.00 x " + window.unitcart + " -"
        document.getElementById('product-price-final').innerHTML = " $" + window.unitcart*125 + ".00"
      },true)