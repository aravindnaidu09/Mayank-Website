
ScrollReveal().reveal('.fade-in', { delay: 300, distance: '50px', duration: 1000, easing: 'cubic-bezier(0.5, 0, 0, 1)' });

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "text-black", "shadow-lg");
        navbar.classList.remove("bg-transparent", "text-[#011E4A]");
    } else {
        navbar.classList.add("bg-transparent", "text-[#011E4A]");
        navbar.classList.remove("bg-white", "text-black", "shadow-lg");
    }
});


const navBar = document.getElementById('navBar');
let isVisible = true; // Track if the navbar is currently visible
let fadeTimeout;

// Function to show the nav bar
const showNavBar = () => {
    if (!isVisible) {
        navBar.classList.remove('fade-out');
        navBar.classList.add('fade-in');
        isVisible = true;
    }

    // Reset the fade timeout
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
        hideNavBar();
    }, 3000); // Nav bar stays visible for 3 seconds
};

// Function to hide the nav bar
const hideNavBar = () => {
    if (isVisible) {
        navBar.classList.remove('fade-in');
        navBar.classList.add('fade-out');
        isVisible = false;
    }
};

// Add a scroll event listener
window.addEventListener('scroll', () => {
    showNavBar();
});

function downloadPDF() {
    const link = document.createElement('a');
    link.href = './assets/pdf/Omkara_Project.pdf';
    link.download = 'Omkara_Project_Details.pdf';
    link.click();
}

///<!-- Carosoule -->

const wrapper = document.getElementById("carousel-wrapper");
const slides = wrapper.children;
const totalSlides = slides.length;

let currentIndex = 0;

const showSlide = (index) => {
    const offset = -index * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
};

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
});


///<!-- Tabs -->

const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("text-blue-600", "text-gray-600", "font-bold", "border-blue-600"));
        contents.forEach((c) => c.classList.add("hidden"));

        tab.classList.add("text-blue-600", "font-bold", "border-blue-600");
        contents[index].classList.remove("hidden");
    });
});

///<!-- Count -->

const counters = document.querySelectorAll("#counts-section h4");
let isCounting = false; // Ensure the animation happens only once

const animateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const speed = 200; // Adjust speed of animation
    const increment = Math.ceil(target / speed);

    let count = 0;

    const updateCount = () => {
        count += increment;
        if (count >= target) {
            counter.textContent = target;
        } else {
            counter.textContent = count;
            requestAnimationFrame(updateCount);
        }
    };

    updateCount();
};

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !isCounting) {
                isCounting = true;
                counters.forEach((counter) => animateCount(counter));
                observer.disconnect(); // Stop observing once the animation starts
            }
        });
    },
    { threshold: 0.3 } // Trigger animation when 30% of the section is visible
);

observer.observe(document.querySelector("#counts-section"));