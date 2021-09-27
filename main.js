let toggleIconSideNav = document.getElementById("toggleIconSideNav"),
  filterToSideNav = document.getElementById("filterToSideNav"),
  sidenav = document.getElementById("sidenav"),
  sidenaveItems = document.getElementsByClassName("sidenave-item"),
  navContainer = document.getElementById("navContainer"),
  arrowUp = document.getElementById("arrowUp");
navLink = document.getElementsByClassName("nav-lnk");

for (let i = 0; i < navLink.length; i++) {
  const element = navLink[i];
  element.addEventListener("click", () => {
    let current = document.getElementsByClassName("navigatactive");
    current[0].className = current[0].className.replace(" navigatactive", "");
    element.className += " navigatactive";
  });
}
// this Listener to open side nave
toggleIconSideNav.addEventListener("click", () => {
  filterToSideNav.style.display = "block";
  sidenav.classList.add("active");
  toggleIconSideNav.style.visibility = "hidden";
});
// this Listener to close side nav
filterToSideNav.addEventListener("click", () => {
  toggleIconSideNav.style.visibility = "visible";
  filterToSideNav.style.display = "none";
  sidenav.classList.remove("active");
  for (let i = 0; i < sidenaveItems.length; i++) {
    const element = sidenaveItems[i];
    element.addEventListener("click", () => {
      toggleIconSideNav.style.visibility = "visible";
      filterToSideNav.style.display = "none";
      sidenav.classList.remove("active");
    });
  }
});

//this listener to show scroll to top button when (scrollY more than 100px) and add back ground to navbar
window.onscroll = function () {
  if (window.pageYOffset >= 100) {
    navContainer.classList.add("navBackground");
    arrowUp.classList.add("arrowTopShow");
    for (let i = 0; i < navLink.length; i++) {
      const element = navLink[i];
      element.style.color = " hsl(240, 75%, 98%)";
    }
  } else {
    navContainer.classList.remove("navBackground");
    arrowUp.classList.remove("arrowTopShow");
    for (let i = 0; i < navLink.length; i++) {
      const element = navLink[i];
      element.style.color = " rgba(96, 98, 105, 0.8)";
    }
  }
};
// //this listener when i click the button th page scroll to top
arrowUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// // // form
let form = document.forms.form1;
let form2 = document.forms.form2;
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (this.email1.value == "") {
    this.email1.style.borderColor = "red";
    error1.style.display = "block";
  } else {
    error1.style.display = "none";
    this.email1.style.borderColor = "hsl(225, 21%, 66%)";
  }
});
form2.addEventListener("submit", function (event) {
  event.preventDefault();
  if (this.email2.value == "") {
    this.email2.style.borderColor = "red";
    error2.style.display = "block";
  } else {
    error2.style.display = "none";
    this.email2.style.borderColor = "hsl(225, 21%, 66%)";
  }
});

//animation when scroll to evry element in page
let elementsToShow = document.querySelectorAll(".show-on-scroll");
let transleateRight = document.querySelectorAll(".transleate-right");
let transleateLeft = document.querySelectorAll(".transleate-left");

window.addEventListener("scroll", () => {
  [].forEach.call(elementsToShow, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("scrollAnimat");
    }
  });
  [].forEach.call(transleateRight, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("transleate-to-right");
    }
  });
  [].forEach.call(transleateLeft, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("transleate-to-left");
    }
  });
});

window.addEventListener("load", function () {
  [].forEach.call(elementsToShow, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("scrollAnimat");
    }
  });
  [].forEach.call(transleateRight, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("transleate-to-right");
    }
  });
  [].forEach.call(transleateLeft, (element) => {
    if (
      element.getBoundingClientRect().y <= document.documentElement.clientHeight
    ) {
      element.classList.add("transleate-to-left");
    }
  });
});
