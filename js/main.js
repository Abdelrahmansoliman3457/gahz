// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});

// toggle sidebar
let allLinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}

// Show And Hide Search Navbar
let searchIcon = document.querySelector(".search-mobile");
let searchBox = document.querySelector(".nav-search");

if (searchIcon) {
  searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("active");

    if (
      this.firstElementChild.firstElementChild.classList.contains(
        "fa-magnifying-glass"
      )
    ) {
      this.firstElementChild.firstElementChild.classList.replace(
        "fa-magnifying-glass",
        "fa-xmark"
      );
    } else {
      this.firstElementChild.firstElementChild.classList.replace(
        "fa-xmark",
        "fa-magnifying-glass"
      );
    }
  });
}

// toggle drop-down in header
let myBtndrop = document.querySelector(".flex-profile-d");
let drop = document.querySelector(".my-drop-now");

if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}
// toggle drop-down-search in header
let myBtndropSearch = document.querySelector(".search-go");
let dropSearch = document.querySelector(".my-drop-search");
let dropSearchForm = document.querySelector(".search-form");

if (dropSearch) {
  dropSearchForm.addEventListener("submit", function (e) {
    dropSearch.classList.toggle("show-drop");
    e.stopPropagation();
    e.preventDefault();
  });
  document.body.addEventListener("click", function () {
    dropSearch.classList.remove("show-drop");
  });
  dropSearch.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

var lastScroll = 0;
let header = document.querySelector(".header");
window.onscroll = function () {
  if (header) {
    if (window.pageYOffset > 30) {
      header.classList.add("bg-header");
    } else {
      header.classList.remove("bg-header");
    }
  }
  if (document.querySelector(".all-clicks")) {
    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;
      // document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
      document.querySelector(".all-clicks").classList.add("hide-tabs-btm");
    } else {
      lastScroll = currentScroll;
      document.querySelector(".all-clicks").classList.remove("hide-tabs-btm");
    }
  }
};

//  add active class to cuurent link
$(".links li a").each(function () {
  // console.log($(this).attr("href"));
  // console.log(window.location.href);
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
