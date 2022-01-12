const header = {
  eventHandle: function () {
    // bug
    $(".header__search-clear").click(function () {
      $(".header__search-text")[0].value = null;
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { header };
