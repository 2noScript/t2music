import { custom } from "./custom";

const personal = {
  eventHandle: function () {
    $.getJSON("./wwwroot/data/data.json", function (data) {
      for (var i = 0; i < 50; i++) {
        custom.loadOverView.songs("");
        custom.loadOverView.playList(".overview__playlist .slide-show");
        custom.loadOverView.album(".overview__album .slide-show");
        custom.loadOverView.mv(".overview__mv .slide-show");
        custom.loadOverView.artist(".overview__artist .slide-show");

        custom.loadOverView.songs(".overview__songs .overview-songs__list");
      }

      $(document).ready(
        custom.slickSlider.playList(".overview__playlist .slide-show"),
        custom.slickSlider.album(".overview__album .slide-show"),
        custom.slickSlider.mv(".overview__mv .slide-show"),
        custom.slickSlider.artist(".overview__artist .slide-show")
      );
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { personal };
