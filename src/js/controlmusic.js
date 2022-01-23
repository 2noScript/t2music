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
}

function toggleControlOption() {
  $(".controlmusic__custom-toggle").click(function () {
    $(".controlmusic__custom").toggleClass("controlmusic__custom--show");
  });
}

function toggleMute() {
  $(".controlmusic__custom-item.toggle-mute").click(function () {
    $(this).toggleClass("controlmusic__custom-item--mute");
  });
}

function isAudioMute() {
  if (
    $(".controlmusic__custom-item.controlmusic__custom-item--mute").length == 0
  )
    return false;
  else return true;
}
function isRepeatSong() {
  if ($(".controlmusic__btnbox-item.is-repeat.is-repeat--true").length == 0)
    return false;
  else return true;
}
function controller() {}
const controlmusic = {
  musicPlay: function (audio, img, id) {
    var duration;
    //
    audio.play();
    $(".controlmusic__btnbox-item.btn-pause").css("display", "flex");
    $(".controlmusic__btnbox-item.btn-play").css("display", "none");

    audio.onloadeddata = function () {
      duration = audio.duration;
      audio.ontimeupdate = function () {
        // bắt đầu set trạng thái âm thanh
        audio.muted = isAudioMute();
        audio.loop = isRepeatSong();
        // audio state time
        //

        $(".controlmusic__current-timesong span").text(
          `${convertTime(audio.currentTime)}/${convertTime(duration)}`
        );

        $(`.controlmusic__progress input`)[0].value = Math.floor(
          (audio.currentTime / duration) * 1000
        );
        setBackgroundSize($(`.controlmusic__progress input`)[0]);
        // audio muted
        $(".controlmusic__custom-item.toggle-mute").click(function () {
          audio.muted = isAudioMute();
        });
      };
      // controler
      $(".controlmusic__progress input").bind("input", function () {
        audio.currentTime = ($(this)[0].value * duration) / 1000;
      });
      //played
      $(".controlmusic__btnbox-item.btn-play").click(function () {
        $(this).css("display", "none");
        $(".controlmusic__btnbox-item.btn-pause").css("display", "flex");
        audio.play();
      });
      //paused
      $(".controlmusic__btnbox-item.btn-pause").click(function () {
        $(this).css("display", "none");
        $(".controlmusic__btnbox-item.btn-play").css("display", "flex");
        audio.pause();
      });
      //repeat
      $(".controlmusic__btnbox-item.is-repeat").click(function () {
        audio.loop = isRepeatSong();
      });

      //option
      $(".controlmusic__custom-volume input").bind("input", function () {
        audio.volume = $(this)[0].value / 100;
      });
    };
    $(".controlmusic__currentsong-img").attr("src", img);
    var name = $(`#${id} .the-song-des-name`).text();
    var artist = $(`#${id} .the-song-des-author`).text();
    $(`.controlmusic__currentsong-songname`).text(`${name}`);
    $(`.controlmusic__currentsong-author`).text(`${artist}`);
  },

  eventHandle: function () {
    // play();
    toggleControlOption();
    progressHandle();
    toggleMute();

    $(".controlmusic__btnbox-item.is-repeat").click(function () {
      $(this).toggleClass("is-repeat--true");
    });
  },
  start: function () {
    this.eventHandle();
  },
};
export { controlmusic };
