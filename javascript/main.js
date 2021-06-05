//Sticky Nav//
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0.5) {
          document.getElementById('topNav').classList.add('sticky');
        } else {
          document.getElementById('topNav').classList.remove('sticky');
        } 
    });
  });


//Scroll to top button - show and hide button based on scroll position//
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          document.getElementById('scroll-top').style.display= "block";
     
        } else {
            document.getElementById('scroll-top').style.display= "none";
        } 
    });
  });

//Scroll to top button - click to return to top of page//
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Responsive Top Nav - show and hide mobile navigation menu//
function displayNav() {
    var mobileNav = document.getElementById("nav-list");
    if (mobileNav.className === "nav_list") {
        mobileNav.className += "_open";
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    } else {
        mobileNav.className = "nav_list";
        document.documentElement.style.overflow = 'visible';
    }      
  }