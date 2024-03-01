const header = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth scrolling animation

const all_links = document.querySelectorAll("a:link");

all_links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

    //Scroll to the top of the page

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //Scroll to our defined sections
    if (href !== "#" && href.startsWith("#")) {
      const section_to_scroll_to = document.querySelector(href);
      section_to_scroll_to.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link"))
        header.classList.toggle("nav-open");
    }
  });
});

//Sticky navigation Bar
const sectionHero = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHero);
