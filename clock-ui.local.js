/* ============================================================
   clock-ui.local.js
   Ported directly from your uploaded clock-ui-main repo:
   packages/utils/src/*.ts and packages/dom/src/index.ts
   — bundled into one plain JS file, no build step, no CDN.
   Exposes window.ClockUI.LiveClockUI (same API as the npm package).
   ============================================================ */
(function () {
  "use strict";

  // ---- constants (from utils/calculations.ts) ----
  var HOURS_IN_CLOCK = 12;
  var MINUTES_IN_CLOCK = 60;
  var DEGREES_PER_HOUR = 360 / 12;
  var DEGREES_PER_MINUTE = 360 / 60;
  var DEGREES_PER_SECOND = 360 / 60;
  var CARDINAL_STEP = 3;
  var MAJOR_TICK_STEP = 5;

  var romanNumerals = ["I","II","III","IIII","V","VI","VII","VIII","IX","X","XI","XII"];

  var listHours = [];
  for (var h = 1; h <= HOURS_IN_CLOCK; h++) listHours.push(h);

  var listTicks = [];
  for (var t = 0; t < MINUTES_IN_CLOCK; t++) listTicks.push(t);

  function getHoursToDisplay(cardinalOnly) {
    return cardinalOnly
      ? listHours.filter(function (hour) { return hour % CARDINAL_STEP === 0; })
      : listHours.slice();
  }

  function getTicksToDisplay(opts) {
    var ticks = [];
    if (opts.major) ticks = ticks.concat(listTicks.filter(function (i) { return i % MAJOR_TICK_STEP === 0; }));
    if (opts.minor) ticks = ticks.concat(listTicks.filter(function (i) { return i % MAJOR_TICK_STEP !== 0; }));
    return ticks;
  }

  function calculateAngles(hours, minutes, seconds, milliseconds) {
    var secondFraction = milliseconds ? seconds + milliseconds / 1000 : seconds;
    var realSeconds = secondFraction % 60;

    var hourAngle = ((hours % HOURS_IN_CLOCK) + minutes / MINUTES_IN_CLOCK + realSeconds / (MINUTES_IN_CLOCK * 60)) * DEGREES_PER_HOUR;
    var minuteAngle = (minutes + realSeconds / 60) * DEGREES_PER_MINUTE;
    var secondAngle = secondFraction * DEGREES_PER_SECOND;

    return { hour: hourAngle, minute: minuteAngle, second: secondAngle };
  }

  function calculateShadow(angle, width, distance) {
    distance = distance || 4;
    var LIGHT_ANGLE = 135;
    var BASE_CLOCK_SIZE = 500;
    var BLUR_RATIO = 180;
    var SHADOW_OPACITY = 0.5;

    var angleInRadians = ((angle + LIGHT_ANGLE) * Math.PI) / 180;
    var scaledDistance = width * (distance / BASE_CLOCK_SIZE);
    var shadowX = -Math.sin(angleInRadians) * scaledDistance;
    var shadowY = -Math.cos(angleInRadians) * scaledDistance;
    var blurRadius = (width / BLUR_RATIO) * (distance / 8);

    return "drop-shadow(" + shadowX + "px " + shadowY + "px " + blurRadius + "px rgba(0,0,0," + SHADOW_OPACITY + "))";
  }

  function getTime(timezone) {
    try {
      return timezone
        ? new Date(new Date().toLocaleString("en-US", { timeZone: timezone }))
        : new Date();
    } catch (e) {
      return new Date();
    }
  }

  // ---- BaseClockUI (renders + positions the hands) ----
  function BaseClockUI(el, options) {
    this.el = typeof el === "string" ? document.querySelector(el) : el;
    if (!this.el) throw new Error("Clock root element not found");

    this.width = 0;
    this.angles = { hour: 0, minute: 0, second: 0 };
    this.shadows = { hour: "", minute: "", second: "" };

    this.options = Object.assign({
      hideSeconds: false,
      hideNumbers: false,
      useRoman: false,
      seconds: 0,
      milliseconds: 0,
      cardinalOnly: false,
      noBorder: false,
      hideMinorTicks: false,
      hideMajorTicks: false,
      hideTicks: false,
      dualTone: true
    }, options);

    this._init();
  }

  BaseClockUI.prototype._init = function () {
    this._renderClock();
    this._observeSize();
    this.update();
  };

  BaseClockUI.prototype._observeSize = function () {
    var self = this;
    var clockFace = this.el.querySelector(".clock-ui__face");
    if (!clockFace) return;

    this.resizeObserver = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        self.width = entry.contentRect.width;
        self.el.style.setProperty("--cui-width", String(self.width));
        self.update();
      });
    });

    this.resizeObserver.observe(clockFace);
    this.width = clockFace.getBoundingClientRect().width;
    this.el.style.setProperty("--cui-width", String(this.width));
  };

  BaseClockUI.prototype._renderClock = function () {
    var p = this.options;

    this.el.classList.add("clock-ui");
    if (p.useRoman) this.el.classList.add("clock-ui--roman");
    if (!p.noBorder) this.el.classList.add("clock-ui--bordered");
    if (p.dualTone) this.el.classList.add("clock-ui--dual-tone");

    this.el.innerHTML =
      '<div class="clock-ui__face">' +
        (!p.hideTicks ? this._renderTicks() : "") +
        (!p.hideNumbers ? this._renderNumbers() : "") +
        '<div class="clock-ui__hand clock-ui__hand--hour"></div>' +
        '<div class="clock-ui__hand clock-ui__hand--minute"></div>' +
        (!p.hideSeconds ? '<div class="clock-ui__hand clock-ui__hand--second"></div>' : "") +
        '<div class="clock-ui__center"></div>' +
      '</div>';

    this.handHour = this.el.querySelector(".clock-ui__hand--hour");
    this.handMinute = this.el.querySelector(".clock-ui__hand--minute");
    this.handSecond = this.el.querySelector(".clock-ui__hand--second");
  };

  BaseClockUI.prototype._renderTicks = function () {
    var ticks = getTicksToDisplay({ major: !this.options.hideMajorTicks, minor: !this.options.hideMinorTicks });
    return ticks.map(function (i) {
      var major = i % 5 === 0 ? "clock-ui__tick--major" : "";
      return '<div class="clock-ui__tick ' + major + '" style="--i:' + i + '"></div>';
    }).join("");
  };

  BaseClockUI.prototype._renderNumbers = function () {
    var self = this;
    return getHoursToDisplay(this.options.cardinalOnly).map(function (hour) {
      var cardinal = hour % 3 === 0 ? "clock-ui__number--cardinal" : "";
      var text = self.options.useRoman ? romanNumerals[hour - 1] : hour;
      return '<div class="clock-ui__number ' + cardinal + '" style="--n:' + hour + '">' + text + '</div>';
    }).join("");
  };

  BaseClockUI.prototype.update = function (options) {
    if (options) this.options = Object.assign({}, this.options, options);

    this.angles = calculateAngles(
      this.options.hours,
      this.options.minutes,
      this.options.seconds || 0,
      this.options.milliseconds || 0
    );

    this.shadows.hour = calculateShadow(this.angles.hour, this.width);
    this.shadows.minute = calculateShadow(this.angles.minute, this.width);
    this.shadows.second = calculateShadow(this.angles.second, this.width, 8);

    this._applyStyles();
  };

  BaseClockUI.prototype._applyStyles = function () {
    this.handHour.style.setProperty("--angle", String(this.angles.hour));
    this.handHour.style.filter = this.shadows.hour;

    this.handMinute.style.setProperty("--angle", String(this.angles.minute));
    this.handMinute.style.filter = this.shadows.minute;

    if (this.handSecond && !this.options.hideSeconds) {
      this.handSecond.style.setProperty("--angle", String(this.angles.second));
      this.handSecond.style.filter = this.shadows.second;
    }
  };

  BaseClockUI.prototype.destroy = function () {
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.el.innerHTML = "";
  };

  // ---- LiveClockUI (ticks every animation frame using real time) ----
  function LiveClockUI(el, options) {
    this.options = options || {};
    this.frameId = null;

    this.domClock = new BaseClockUI(el, {
      hideSeconds: this.options.hideSeconds,
      hideNumbers: this.options.hideNumbers,
      useRoman: this.options.useRoman,
      cardinalOnly: this.options.cardinalOnly,
      noBorder: this.options.noBorder,
      hideMinorTicks: this.options.hideMinorTicks,
      hideMajorTicks: this.options.hideMajorTicks,
      hideTicks: this.options.hideTicks,
      dualTone: this.options.dualTone !== undefined ? this.options.dualTone : true,
      hours: 0, minutes: 0, seconds: 0, milliseconds: 0
    });

    this.start();
  }

  LiveClockUI.prototype._updateTime = function () {
    var time = getTime(this.options.timezone);
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var milliseconds = time.getMilliseconds();

    this.domClock.update({ hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds });
  };

  LiveClockUI.prototype.start = function () {
    var self = this;
    if (this.frameId) return;
    (function loop() {
      self._updateTime();
      self.frameId = requestAnimationFrame(loop);
    })();
  };

  LiveClockUI.prototype.stop = function () {
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  };

  LiveClockUI.prototype.destroy = function () {
    this.stop();
    this.domClock.destroy();
  };

  window.ClockUI = { LiveClockUI: LiveClockUI, BaseClockUI: BaseClockUI };
})();
