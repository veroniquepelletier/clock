import React, { useEffect, useState, useCallback } from "react";
import DateTimePicker from "react-datetime-picker";

import { AnalogClock, DigitalClock } from "../../components";

const SECOND = 1000;

export const Clocks = () => {
  const getTime = useCallback((date) => {
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }, []);

  const [time, setTime] = useState(getTime(new Date()));
  const [date, setDate] = useState(new Date());

  const handleDateChanged = (newDate) => {
    console.log("CHANGED");
    setDate(newDate);
    getTime(newDate);
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate(new Date(date.getTime() + SECOND));
      setTime(getTime(date));
    }, SECOND);

    return () => {
      clearInterval(timeInterval);
    };
  }, [date, getTime]);

  return (
    <>
      <DateTimePicker onChange={handleDateChanged} value={date} />
      <AnalogClock time={time}></AnalogClock>
      <DigitalClock time={time}> </DigitalClock>
    </>
  );
};
