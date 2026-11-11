const typing = document.getElementById("typing");

const word = "Developer";

let i = 0;

function typeEffect() {
  if (i < word.length) {
    typing.innerHTML += word.charAt(i);
    i++;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(eraseEffect, 2000); 
  }
}

function eraseEffect() {
  if (i >= 0) {
    typing.innerHTML = word.substring(0, i - 1);
    i--;
    setTimeout(eraseEffect, 50); 
  } else {
    i++;
    if (i >= word.length) {
       i = 0; 
    }
    setTimeout(typeEffect, 200);
  }
}; typeEffect();




var swiper = new Swiper('.mySwiper', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});



document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', (e) => {
    const accordionItem = e.currentTarget.closest('.accordion-item');
    const sign = accordionItem.querySelector('.sign');
    accordionItem.classList.toggle('active');
    
    if (accordionItem.classList.contains('active')) {
      sign.textContent = '-';
    } else {
      sign.textContent = '+';
    }
  });
});




const header = document.querySelector('.header');
const hero = document.getElementById('hero'); 
const observerOptions = {
  root: null, 
  rootMargin: '0px',
  threshold: 0 
};

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting && window.innerWidth > 768) {
      header.classList.add('header-scrolled');
      document.querySelector(".contact-btn").style.color = 'orange';
      document.querySelector(".contact-btn").style.border = '1px solid orange';

      document.querySelector(".contact-btn").onmouseover = () => {
        document.querySelector(".contact-btn").style.color = 'white';
        document.querySelector(".contact-btn").style.border = '1px solid white';
      }
      
    } else {
      header.classList.remove('header-scrolled');

      document.querySelector(".contact-btn").onmouseover = () => {
        document.querySelector(".contact-btn").style.color = 'white';
        document.querySelector(".contact-btn").style.border = '1px solid white';
      }

      document.querySelector(".contact-btn").onmouseout = () => {
        document.querySelector(".contact-btn").style.color = 'orange';
        document.querySelector(".contact-btn").style.border = '1px solid orange';
      }
    }
  });
}, observerOptions);

if (hero) {
  heroObserver.observe(hero);
}



const hamOffIcon = document.querySelector(".ham-off-icon");
const mobileNav = document.querySelector(".header .nav");
const mobileHamOffIcon = document.querySelector(".nav .ham-icon");
hamOffIcon.onclick = () => {
  mobileNav.classList.add("show");
}
mobileHamOffIcon.onclick = () => {
  mobileNav.classList.remove("show");
}



form.addEventListener('submit', async (e) => {
   e.preventDefault();

   const formData = new FormData(e.target);

   const data = { 
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
   };

   const res = await fetch('https://web3forms.com', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      },
      body: JSON.stringify(data),
   });

   const result = await res.json();
   
   if (res.status === 200) {
      alert("Message sent successfully!");
      form.reset();
   } else {
      alert(result.message || "Oops! There was a problem submitting your form.");
   }
});
