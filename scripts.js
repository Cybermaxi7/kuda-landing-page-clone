const mobileToggle = document.querySelector(".mobile-toggle");
const closeToggle = document.querySelector(".close-toggle");
const desktopHeader = document.querySelector(".desktop-header");
const mobileHeader = document.querySelector(".mobile-header");
const cookiesContainer = document.querySelector(".cookies-container");
const getAppBtn = document.querySelector(".get-app-btn");
const getKudaApp = document.querySelector(".get-kuda-app");
const container = document.querySelector(".container");
const dismissBtn = document.getElementById("dismiss");
document.addEventListener("DOMContentLoaded", function () {
    mobileToggle.addEventListener("click", function () {
        desktopHeader.style.display = "none";
        mobileHeader.style.display = "flex";
        mobileHeader.classList.add("slide-in");
    });

    closeToggle.addEventListener("click", function () {
        mobileHeader.style.display = "none";
        desktopHeader.style.display = "flex";
        desktopHeader.classList.add("slide-in");
    });
});

// Function to handle header display based on window width
function handleResize() {
    if (window.innerWidth >= 991) {
        mobileHeader.style.display = "none";
        desktopHeader.style.display = "flex";
    }
    if (window.innerWidth <= 768) {
        document.querySelector("body").classList.add("cookies-present");
    }
}

// Initial check
handleResize();

// Add event listener for window resize
window.addEventListener("resize", handleResize);
dismissBtn.addEventListener("click", () => {
    cookiesContainer.style.display = "none";
    desktopHeader.style.top = 0;
    container.style.marginTop = "6rem";
});
getAppBtn.addEventListener("click", () => {
    getKudaApp.style.display = "none";
});
