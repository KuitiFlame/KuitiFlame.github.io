// Portefolio Item Filter 

const filterContainer=document.querySelector(".accomplissement-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      accomplissementItems=document.querySelectorAll(".accomplissement-item"),
      totalAccomplissementItem=accomplissementItems.length,
      projets_1Items=document.querySelectorAll(".projets_1-item"),
      projets_2Items=document.querySelectorAll(".projets_2-item"),
      projets_3Items=document.querySelectorAll(".projets_3-item"),
      projets_4Items=document.querySelectorAll(".projets_4-item"),
      projets_5Items=document.querySelectorAll(".projets_5-item"),
      projets_6Items=document.querySelectorAll(".projets_6-item"),
      projets_7Items=document.querySelectorAll(".projets_7-item"),
      projets_8Items=document.querySelectorAll(".projets_8-item"),
      
      totalProjets_1Item=projets_1Items.length;

      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");
            // ========probleme de trie data categorie dans le if == revenir apres =========//
              const filterValue=this.getAttribute("data-filter");
              for(let k=0; k<totalAccomplissementItem; k++){
                  if(filterValue === accomplissementItems[k].getAttribute("data-category")){
                      accomplissementItems[k].classList.remove("hide");
                      accomplissementItems[k].classList.add("show")

                    }
                  else{
                      accomplissementItems[k].classList.remove("show");
                      accomplissementItems[k].classList.add("hide");
                  }
                  //============fin problemes ===============//
                  if(filterValue=== "all"){
                    accomplissementItems[k].classList.remove("hide");
                    accomplissementItems[k].classList.add("show");

                  }

              }
           
          })
      }

 window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})

//debut probleme

// Accomplissement Lightbox 
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      lightboxCounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;
    let items = [];
    let query = '';

    for(let i=0; i<projets_1Items.length; i++){
        projets_1Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_1Items;
            query =  '.projets_1-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_2Items.length; i++){
        projets_2Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_2Items;
            query =  '.projets_2-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_3Items.length; i++){
        projets_3Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_3Items;
            query =  '.projets_3-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_4Items.length; i++){
        projets_4Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_4Items;
            query =  '.projets_4-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_5Items.length; i++){
        projets_5Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_5Items;
            query =  '.projets_5-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_6Items.length; i++){
        projets_6Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_6Items;
            query =  '.projets_6-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_7Items.length; i++){
        projets_7Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_7Items;
            query =  '.projets_7-img img';
            changeItem();
            toggleLightbox();
        })
    }
    for(let i=0; i<projets_8Items.length; i++){
        projets_8Items[i].addEventListener("click", function(){
            itemIndex=i;
            items = projets_8Items;
            query =  '.projets_8-img img';
            changeItem();
            toggleLightbox();
        })
    }
   
   
    

    for(let i=0; i<accomplissementItems.length; i++){
        accomplissementItems[i].addEventListener("click", function(){
            itemIndex=i;
            items = accomplissementItems;
            query =  '.accomplissement-img img';
            changeItem();
            toggleLightbox();
        })

    }

    function nextItem() {
        if(itemIndex=== items.length-1){
            itemIndex=0;
        }
        else{
            itemIndex++
        }
        changeItem();
        
    }
    function prevItem() {
        if(itemIndex=== 0){
            itemIndex=items.length-1
        }
        else{
            itemIndex--;
        }
        changeItem();
        
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }
    function changeItem(){
        //imgSrc=projets_1Items[itemIndex].querySelector(".projets_1-img img").getAttribute("src");
        imgSrc=items[itemIndex].querySelector(query).getAttribute("src");
        lightboxImg.src=imgSrc;
        //lightboxText.innerHTML= items[itemIndex].querySelector("h4") ? items[itemIndex].querySelector("h4").innerHTML : '';
        lightboxCounter.innerHTML=(itemIndex+1) + " of " + items.length;
    }


// fin probleme



//close lightbox
lightbox.addEventListener("click",function(event){
    if(event.target=== lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
    
})

//ASIDE BAR DE NAVIGATION 
   const nav=document.querySelector(".nav"),
         navList=nav.querySelectorAll("li"),
         totalNavList=navList.length,
         allSection=document.querySelectorAll(".section"),
         totalSection=allSection.length;

     for(let i=0; i<totalNavList; i++){
         const a=navList[i].querySelector("a");
         a.addEventListener("click", function(){
             //remove back section class
             removeBackSectionClass();

             for(let j=0; j<totalNavList; j++){
                 if(navList[j].querySelector("a").classList.contains("active")){
                     //add back section class 
                     //allSection[j].classList.add("back-section");
                     addBackSectionClass(j)
                 }


                 navList[j].querySelector("a").classList.remove("active");
             }

             this.classList.add("active")
             showSection(this);

             if(window.innerWidth < 1200){
                 asideSectionTogglerBtn();
             }
         })
     }

     function showSection(element){
         for(let i=0; i<totalSection; i++){
             allSection[i].classList.remove("active");
         }
         const target=element.getAttribute("href").split("#")[1];
      document.querySelector("#"+target).classList.add("active");
     }

     function removeBackSectionClass(){
         for(let i=0; i<totalSection; i++){
             allSection[i].classList.remove("back-section");
         }
     }
     function addBackSectionClass(num){
         allSection[num].classList.add("back-section");
     }

     function updateNav(element){
         for(let i=0; i<totalSection; i++){
             navList[i].querySelector("a").classList.remove("active");
             const target=element.getAttribute("href").split("#")[1];
             if(target=== navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                 navList[i].querySelector("a").classList.add("active");
                
             }
         }
     }


     
     // monter caher section [projets_1 Extravator]
     document.querySelector(".Extravator_Catia").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
    
     // monter caher section [projets_2 Moteur Car]
     document.querySelector(".Car_Engine").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
     
     // monter caher section [projets_3 CNC] 
     document.querySelector(".CNC_Portable").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
    // monter caher section [projets_4Spinner]
    document.querySelector(".Pill_Reminder").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })

    // monter caher section [projets_5 Extravator]
    document.querySelector(".Sheet_Metal").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
     
     // monter caher section [projets_6 Extravator]
     document.querySelector(".Basketball").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
    // monter caher section [projets_7 Extravator]
    document.querySelector(".MSN").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
    // monter caher section [projets_6 Extravator]
    document.querySelector(".Useful").addEventListener("click", function(){
        const sectionIndex=this.getAttribute("data-section-index");
        console.log(sectionIndex);
        showSection(this);
        updateNav(this);
       // removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })
     
    
     document.querySelector(".hire-me").addEventListener("click", function(){
         const sectionIndex=this.getAttribute("data-section-index");
         console.log(sectionIndex);
         showSection(this);
         updateNav(this);
        // removeBackSectionClass();
         addBackSectionClass(sectionIndex);
     })



     const navTogglerBtn=document.querySelector(".nav-toggler"),
           aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)
           //asideSectionTogglerBtn();
    

    function asideSectionTogglerBtn(){
           aside.classList.toggle("open");
           navTogglerBtn.classList.toggle("open");
           for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
           }
    }

       