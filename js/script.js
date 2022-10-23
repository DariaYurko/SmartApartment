// =============================== Slider =================================
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
// ==========================================================================

// ============================= Tabs =======================================

const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__item")

tabsBtn.forEach(function(tabBtn) {

  tabBtn.addEventListener("click", function() {
    let currentBtn = tabBtn
    let tabId = currentBtn.getAttribute("data-tab")
    let currentItem = document.querySelector(tabId)

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function(tabBtn) {
        if (tabBtn.classList.contains("active")) {
          tabBtn.classList.remove("active")
        } 
      })
  
      tabsItems.forEach(function(tabItem) {
        if (tabItem.classList.contains("active")) {
          tabItem.classList.remove("active")
        }
      })
  
      currentBtn.classList.add("active")
      currentItem.classList.add("active")
    }

  })
})
