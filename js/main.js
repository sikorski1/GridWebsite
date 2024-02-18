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

const readMoreBtn = document.querySelectorAll(".info__box-link");
const readMoreText = document.querySelector(".info__box-text-read-more");
const readMoreBox = document.querySelectorAll(".info__box");

readMoreBox.forEach(box =>
{

    box.addEventListener("click", e => 
    {
        const current = e.target;
        if (!current.className.includes("info__box-link"))
        {
            return;
        }

        const currentText = e.target.parentNode.querySelector(".info__box-text-read-more");
        currentText.classList.toggle("info__box-text-read-more--open");
        current.textContent = current.textContent.includes("read more...") ? "read less..." : "read more..."
    });
}
)