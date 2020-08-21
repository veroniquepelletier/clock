import React, { useState, useEffect, useCallback } from "react";

import "./analogClock.scss";

export const AnalogClock = ({ time }) => {
  const updateClock = useCallback(() => {
    const angleSeconds = time.seconds * 6;
    const angleMinutes = time.minutes * 6;
    const angleHours = (time.hours / 12) * 360;

    document.getElementById("js-seconds").style.transform =
      "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
    document.getElementById("js-minutes").style.transform =
      "translate(-50%, -100%) rotate(" + angleMinutes + "deg)";
    document.getElementById("js-hours").style.transform =
      "translate(-50%, -100%) rotate(" + angleHours + "deg)";
  }, [time]);

  useEffect(() => {
    updateClock(time);
  }, [time, updateClock]);

  return (
    <div className="c-clock">
      <div id="js-hours" className="c-clock__tick c-clock__tick--hours"></div>
      <div
        id="js-minutes"
        className="c-clock__tick c-clock__tick--minutes"
      ></div>
      <div
        id="js-seconds"
        className="c-clock__tick c-clock__tick--seconds"
      ></div>
    </div>
  );
};
