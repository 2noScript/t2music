function clearInputSearch() {
  $(".header__search-clear").click(function () {
    $(".header__search-text")[0].value = null;
  });
}
const header = {
  eventHandle: function () {
    clearInputSearch();
  },
  start: function () {
    this.eventHandle();
  },
};
export { header };
