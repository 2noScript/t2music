const navmenu = {
  eventHandle: function () {
    // $(document).ready(alert("xin chào"));
    var currentTab;

    $(".navmenu__tab").click(function () {
      $(".navmenu__tab").removeClass("navmenu__tab--active");
      // var top = ;
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
  },
  start: function () {
    this.eventHandle();
  },
};
export { navmenu };
