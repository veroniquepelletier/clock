import React, { useEffect, useState, useCallback } from "react";
import DateTimePicker from "react-datetime-picker";
import styled from "@emotion/styled";

import { AnalogClock, DigitalClock } from "../../components";

const SECOND = 1000; // one second for intervals

const ClockContainer = styled.div({
  width: "15rem",
  height: "15rem",
  float: "left",
});

const DateTimeContainer = styled.div({
  width: "100%",
  height: "5rem",
});

const Clocks = () => {
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
      <DateTimeContainer>
        <DateTimePicker
          maxDetail="second"
          onChange={handleDateChanged}
          value={date}
        />
      </DateTimeContainer>
      <ClockContainer>
        <AnalogClock time={time}></AnalogClock>
      </ClockContainer>
      <ClockContainer>
        <DigitalClock time={time}></DigitalClock>
      </ClockContainer>
    </>
  );
};

export default Clocks;
