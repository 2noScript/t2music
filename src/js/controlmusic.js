const controlmusic = {
  getBackgroundSize: function (inputRange) {
    var min = +inputRange.min || 0;
    var max = +inputRange.max || 100;
    var value = +inputRange.value;
    return ((value - min) / (max - min)) * 100;
  },
  setBackgroundSize: function (inputRange) {
    inputRange.style.setProperty(
      "--background-size",
      `${this.getBackgroundSize(inputRange)}%`
    );
  },
  selectOverviewSonsIt: function () {
    $(document).ready(function () {
      $(".overview__songs .overview-songs__list .the-song").click(function () {
        $(
          ".overview__songs .overview-songs__list .the-song.the-song--active"
        ).removeClass("the-song--active");
        $(this).addClass("the-song--active");
      });
    });
  },
  eventHandle: function () {
    this.selectOverviewSonsIt();
    //
    $(".controlmusic__custom-toggle").click(function () {
      $(".controlmusic__custom").toggleClass("controlmusic__custom--show");
    });
    //sử lý input type='range'
    // control music progress
    this.setBackgroundSize($(".controlmusic__progress input[type='range']")[0]);
    $(".controlmusic__progress input[type='range']").bind("input", function () {
      controlmusic.setBackgroundSize(
        $(".controlmusic__progress input[type='range']")[0]
      );
    });
    // volume
    this.setBackgroundSize(
      $(".controlmusic__custom-volume input[type='range']")[0]
    );
    $(".controlmusic__custom-volume input[type='range']").bind(
      "input",
      function () {
        controlmusic.setBackgroundSize(
          $(".controlmusic__custom-volume input[type='range']")[0]
        );
      }
    );
  },
  start: function () {
    this.eventHandle();
  },
};
export { controlmusic };
