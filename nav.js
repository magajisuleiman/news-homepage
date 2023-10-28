const primaryNav = document.querySelector(".primary-nav")
const primaryToggle = document.querySelector(".mobile-nav-toggle")

primaryToggle.addEventListener('click', () => {

  const visibility = primaryNav.getAttribute("data-visible")

  if (visibility === "false"){

    primaryNav.setAttribute("data-visible", true)
    primaryToggle.setAttribute("aria-expanded", true)

  } else if (visibility === "true"){
    primaryNav.setAttribute("data-visible", false)
    primaryToggle.setAttribute("aria-expanded", false)

  }

});