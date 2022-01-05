const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const search_clear = $(".header__search-clear");
const search_text = $(".header__search-text");
const header = {
  eventHandle: function () {
    // bug

    search_clear.addEventListener("click", function () {
      search_text.value = null;
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { header };
