let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();
//////////////////////////////////////// password verefication  /////////////////////////////
$(".inputs").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.inputs').focus();
  }
});


  //phone size menu onclick
  if ($(window).width() <= 991) {
    $("#menu-id").click(function(e) {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $(".navgition").toggleClass("reset-left");
      $('.filter-section').removeClass('active');
      $("body").toggleClass("overflow");
      $("html").toggleClass("overflow");

  });
  $(".nav-head .close-btn").click(function() {
      $(".navgition").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
  });
  
  /////////////////////// rating ///////////////////////
  const stars = document.querySelectorAll('.star');

document.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('star')) {
    let clicktargetReached = false;
    for (const star of stars) {
      star.classList[clicktargetReached ? 'remove' : 'add']('selected');
      if (star === evt.target) {
        clicktargetReached = true;
      }
    }
    result.textContent = evt.target.dataset.rating;
  }
});


    ////////////////// filter in mobile //////////////////
    $('.filter-toggle').click(function(){
      $('.filter-section').toggleClass('active');
      $("body").addClass("overflow");
      $("html").addClass("overflow");
    });

    $(`.filter-times`).click(function (e) {
      $('.filter-section').toggleClass('active');
      $("body").removeClass("overflow");
      $("html").removeClass("overflow");
       
      
  });
  

 
  
}

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });

  ///////// ** upload images ** /////////



  ImgUpload();


  function ImgUpload() {
      var imgWrap = "";
      var imgArray = [];

      $('.upload__inputfile').each(function() {
          $(this).on('change', function(e) {
              imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
              var maxLength = $(this).attr('data-max_length');

              var files = e.target.files;
              var filesArr = Array.prototype.slice.call(files);
              var iterator = 0;
              filesArr.forEach(function(f, index) {

                  if (!f.type.match('image.*')) {
                      return;
                  }

                  if (imgArray.length > maxLength) {
                      return false
                  } else {
                      var len = 0;
                      for (var i = 0; i < imgArray.length; i++) {
                          if (imgArray[i] !== undefined) {
                              len++;
                          }
                      }
                      if (len > maxLength) {
                          return false;
                      } else {
                          imgArray.push(f);

                          var reader = new FileReader();
                          reader.onload = function(e) {
                              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                              imgWrap.append(html);
                              iterator++;
                          }
                          reader.readAsDataURL(f);
                      }
                  }
              });
          });
      });

      $('body').on('click', ".upload__img-close", function(e) {
          var file = $(this).parent().data("file");
          for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i].name === file) {
                  imgArray.splice(i, 1);
                  break;
              }
          }
          $(this).parent().parent().remove();
      });
  }




  ///////// ** main** /////////
  var specials = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
 
  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });


 




///////// **categories-section** /////////
if ($(window).width() <= 991) {
var screen = new Swiper(".categories-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".categories-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".categories-slider .swiper-btn-next",
    prevEl: ".categories-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

var screen = new Swiper(".products-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".products-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".products-slider .swiper-btn-next",
    prevEl: ".products-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var screen = new Swiper(".fruits-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".fruits-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".fruits-slider .swiper-btn-next",
    prevEl: ".fruits-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var screen = new Swiper(".drinks-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".drinks-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".drinks-slider .swiper-btn-next",
    prevEl: ".drinks-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var screen = new Swiper(".snacks-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".snacks-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".snacks-slider .swiper-btn-next",
    prevEl: ".snacks-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:2,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

};


///////// **brands-section** /////////
var screen = new Swiper(".brands-slider .swiper-container", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".brands-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".brands-slider .swiper-btn-next",
    prevEl: ".brands-slider .swiper-btn-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView:3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


//////////////////////////// delete product from cart ////////////////////////////////
$('.delete-product').on('click', function(){
  $(this).closest(".cart-block").remove();
});

$('.delete-btn').on('click', function(){
    $(this).closest(".table-record").remove();
  });
//////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});


 ////////////////// calender ////////////////////////
 let display = document.querySelector(".display");
 let days = document.querySelector(".days");
 let previous = document.querySelector(".left");
 let next = document.querySelector(".right");
 let selected = document.querySelector(".selected");
 
 let date = new Date();
 
 let year = date.getFullYear();
 let month = date.getMonth();
 
 function displayCalendar() {
   const firstDay = new Date(year, month, 1);
 
   const lastDay = new Date(year, month + 1, 0);
 
   const firstDayIndex = firstDay.getDay(); //4
 
   const numberOfDays = lastDay.getDate(); //31
 
   let formattedDate = date.toLocaleString("en-US", {
     month: "long",
     year: "numeric"
   });
 
   display.innerHTML = `${formattedDate}`;
 
   for (let x = 1; x <= firstDayIndex; x++) {
     const div = document.createElement("div");
     div.innerHTML += "";
 
     days.appendChild(div);
   }
 
   for (let i = 1; i <= numberOfDays; i++) {
     let div = document.createElement("div");
     let currentDate = new Date(year, month, i);
 
     div.dataset.date = currentDate.toDateString();
 
     div.innerHTML += i;
     days.appendChild(div);
     if (
       currentDate.getFullYear() === new Date().getFullYear() &&
       currentDate.getMonth() === new Date().getMonth() &&
       currentDate.getDate() === new Date().getDate()
     ) {
       div.classList.add("current-date");
     }
   }
 }
 
 // Call the function to display the calendar
 displayCalendar();
 
 previous.addEventListener("click", () => {
   days.innerHTML = "";
   selected.innerHTML = "";
 
   if (month < 0) {
     month = 11;
     year = year - 1;
   }
 
   month = month - 1;
 
   date.setMonth(month);
 
   displayCalendar();
   displaySelected();
 });
 
 next.addEventListener("click", () => {
   days.innerHTML = "";
   selected.innerHTML = "";
 
   if (month > 11) {
     month = 0;
     year = year + 1;
   }
 
   month = month + 1;
   date.setMonth(month);
 
   displayCalendar();
   displaySelected();
 });
 
 function displaySelected() {
   const dayElements = document.querySelectorAll(".days div");
   dayElements.forEach((day) => {
     day.addEventListener("click", (e) => {
       const selectedDate = e.target.dataset.date;
       selected.innerHTML = `Selected Date : ${selectedDate}`;
     });
   });
 }
 displaySelected();


});

