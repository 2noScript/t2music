const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const controlmusicCustomToggle = $(".controlmusic__custom-toggle");
const controlmusicCustom = $(".controlmusic__custom");
const controlmusic = {
  eventHandle: function () {
    controlmusicCustomToggle.addEventListener("click", function () {
      controlmusicCustom.classList.toggle("controlmusic__custom--show");
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { controlmusic };
