// import "core-js/stable";
// import "regenerator-runtime/runtime";

const anchors = Array.from(document.querySelectorAll("a[href^=\"#\"]"));

anchors.map(link => {
  const href = link.getAttribute("href");

  link.addEventListener("click", event => {
    event.preventDefault();

    if (href === "#") {
      window.scrollTo({top: 0, behavior: "smooth"});
    } else {
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }
  })
})

const formAgree = document.getElementById('agree');
const formSubmitButton = document.getElementById('submit');
console.log(formAgree, formSubmitButton)
function checkAgreeStatus() {
  formSubmitButton.disabled = !formAgree.checked;
}

formAgree.addEventListener('click', checkAgreeStatus)

checkAgreeStatus();
