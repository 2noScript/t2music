function convertTime(time) {
  var p = Math.floor(time / 60);
  var s = Math.floor(time % 60);
  if (p > 9 && s > 9) return p + ":" + s;
  else if (p > 9 && s <= 9) return p + ":0" + s;
  else if (p <= 9 && s <= 9) return "0" + p + ":0" + s;
  else return "0" + p + ":" + s;
}

function getBackgroundSize(inputRange) {
  var min = +inputRange.min || 0;
  var max = +inputRange.max || 100;
  var value = +inputRange.value;
  return ((value - min) / (max - min)) * 100;
}
function setBackgroundSize(inputRange) {
  inputRange.style.setProperty(
    "--background-size",
    `${getBackgroundSize(inputRange)}%`
  );
}

function progressHandle() {
  // progress song
  setBackgroundSize($(".controlmusic__progress input[type='range']")[0]);
  $(".controlmusic__progress input[type='range']").bind("input", function () {
    setBackgroundSize($(".controlmusic__progress input[type='range']")[0]);
  });

  // progress volume
  setBackgroundSize($(".controlmusic__custom-volume input[type='range']")[0]);
  $(".controlmusic__custom-volume input[type='range']").bind(
    "input",
    function () {
      setBackgroundSize(
        $(".controlmusic__custom-volume input[type='range']")[0]
      );
    }
  );
  // $(".controlmusic__custom-volume input[type='range']").bind(
  //   "change",
  //   function () {
  //     setBackgroundSize(
  //       $(".controlmusic__custom-volume input[type='range']")[0]
  //     );
  //   }
  // );
}

function toggleControlOption() {
  $(".controlmusic__custom-toggle").click(function () {
    $(".controlmusic__custom").toggleClass("controlmusic__custom--show");
  });
}

const controlmusic = {
  musicPlay: function (audio) {
    var duration;
    audio.onloadeddata = function () {
      duration = audio.duration;
      audio.ontimeupdate = function () {
        $(".controlmusic__current-timesong span").text(
          `${convertTime(audio.currentTime)}/${convertTime(duration)}`
        );
        $(`.controlmusic__progress input`)[0].value = Math.floor(
          (audio.currentTime / duration) * 100
        );

        setBackgroundSize($(`.controlmusic__progress input`)[0]);
      };
    };
  },

  eventHandle: function () {
    toggleControlOption();
    progressHandle();
    $(`.controlmusic__progress input`).bind("click", function () {
      console.log($(this));
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { controlmusic };
