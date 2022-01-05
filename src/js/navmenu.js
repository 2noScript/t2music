const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navmenuTabs = $$(".navmenu__tab");
const navmenuTabSelect = $(".navmenu__tab-select");
const navmenu = {
  tabActve: function (tab) {
    navmenuTabSelect.style.top = tab.offsetTop + "px";
    navmenuTabSelect.style.height = tab.offsetHeight + "px";
    tab.classList.add("navmenu__tab--active");
  },
  eventHandle: function () {
    // khi chọn 1 tab trong menu
    var currentIndex = 1;
    this.tabActve(navmenuTabs[currentIndex]);
    navmenuTabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        navmenuTabs[currentIndex].classList.remove("navmenu__tab--active");
        currentIndex = index;
        navmenu.tabActve(navmenuTabs[currentIndex]);
      });
    });
    window.addEventListener("resize", function () {
      navmenu.tabActve(navmenuTabs[currentIndex]);
    });
    console.log(navmenuTabs);
  },
  start: function () {
    this.eventHandle();
  },
};
export { navmenu };
