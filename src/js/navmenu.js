function tabHandle() {
  var currentTab;
  $(".navmenu__tab").click(function () {
    $(".navmenu__tab").removeClass("navmenu__tab--active");
    $(".navmenu__tab-select").css({
      top: `${this.offsetTop + "px"}`,
      height: `${this.offsetHeight + "px"}`,
    });
    currentTab = this;
    $(this).addClass("navmenu__tab--active");
  });
  window.addEventListener("resize", function () {
    $(".navmenu__tab-select").css({
      top: `${currentTab.offsetTop + "px"}`,
      height: `${currentTab.offsetHeight + "px"}`,
    });
  });
}

const navmenu = {
  eventHandle: function () {
    tabHandle();
  },
  start: function () {
    this.eventHandle();
  },
};
export { navmenu };
