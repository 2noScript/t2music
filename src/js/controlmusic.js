const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const controlmusicCustomToggle = $(".controlmusic__custom-toggle");
const controlmusicCustom = $(".controlmusic__custom");
const inputRangeProgress = $(".controlmusic__progress input[type='range']");
const inputRangeVolume = $(".controlmusic__custom-volume input[type='range']");

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
  eventHandle: function () {
    controlmusicCustomToggle.addEventListener("click", function () {
      controlmusicCustom.classList.toggle("controlmusic__custom--show");
    });
    //progress song
    this.setBackgroundSize(inputRangeProgress);
    inputRangeProgress.addEventListener("input", () =>
      this.setBackgroundSize(inputRangeProgress)
    );
    // volume
    this.setBackgroundSize(inputRangeVolume);
    inputRangeVolume.addEventListener("input", () =>
      this.setBackgroundSize(inputRangeVolume)
    );
  },
  start: function () {
    this.eventHandle();
  },
};
export { controlmusic };
