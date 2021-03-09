const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const nava = document.querySelectorAll("nav a");
console.log("s",nava);
nava[0].textContent= "Services";
nava[1].textContent= "Product";
nava[2].textContent= "Vision";
nava[3].textContent= "Features";
nava[4].textContent= "About";
nava[5].textContent= "Contact";
const topimg = document.querySelector("#cta-img");
topimg.src = "img/header-img.png";
const dom= document.querySelector("h1");
dom.innerHTML = "DOM<br>IS<br>AWESOME";
button=document.querySelector("button");
button.textContent="Get Started";
const he4 = document.querySelectorAll(".text-content h4");
he4[0].textContent="Features";
he4[1].textContent="About";
he4[2].textContent="Services";
he4[3].textContent="Product";
he4[4].textContent="Vision";
const mainp=document.querySelectorAll(".text-content p");
mainp[0].textContent="Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainp[1].textContent="About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainp[2].textContent="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainp[3].textContent="Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainp[4].textContent="Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
const banner=document.querySelector(".middle-img");
banner.src="img/mid-page-accent.jpg";
const conh=document.querySelectorAll(".contact h4");
conh[0].textContent="CONTACT";
const conp=document.querySelectorAll(".contact p");
conp[0].innerHTML="123 Way 456 Street<br>Somewhere, USA";
conp[1].textContent="1 (888) 888-8888";
conp[2].textContent="sales@greatidea.io";
const footer= document.querySelectorAll("footer p");
footer[0].textContent="Copyright Great Idea! 2018";
///////////////////////////////////////////////////
///new-content////
const nwnav= document.querySelector("header");
nwnav.style.backgroundColor="green";
console.log("s",nwnav);
const Link = document.createElement('a');
Link.textContent ="Employment";
Link.href = "#";
const Link2 = document.createElement('a');
document.querySelector("nav").appendChild(Link);
Link2.textContent ="Projects";
Link2.href = "#";
document.querySelector("nav").prepend(Link2);











