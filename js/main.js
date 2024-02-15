const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const allNavItems = document.querySelectorAll(".nav__link-mobile");
const body = document.querySelector("body");

const handleNavBtn = () => 
{
    navBtn.classList.toggle("is-active");
    navMobile.classList.toggle("nav-mobile--active");
    body.classList.toggle("body-overflow");
    allNavItems.forEach(item =>
    {
        item.addEventListener("click", () =>
        {
            navMobile.classList.remove("nav-mobile--active");
            navBtn.classList.remove("is-active");
            body.classList.remove("body-overflow");
        })
    });
}

const handleCurrentYear = () =>
{
    const year = new Date().getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();

navBtn.addEventListener("click", handleNavBtn);