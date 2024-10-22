const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" :  "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

//header container
scrollRevealOption().reveal(".header_container p",{
    ...scrollRevealOption,
});

scrollRevealOption().reveal(".header_container h1",{
    ...scrollRevealOption,
    delay: 500,
});

//about container
scrollRevealOption().reveal(".about_image img", {
    ...scrollRevealOption,
    orgin: "left",
});

scrollRevealOption().reveal(".about_content .section_subheader",{
    ...scrollRevealOption,
    delay: 500,
});

scrollRevealOption().reveal("..about_content .section_header",{
    ...scrollRevealOption,
    delay: 1000,
});

scrollRevealOption().reveal("..about_content .section_description",{
    ...scrollRevealOption,
    delay: 1500,
});

scrollRevealOption().reveal(".about_btn",{
    ...scrollRevealOption,
    delay: 2000,
});