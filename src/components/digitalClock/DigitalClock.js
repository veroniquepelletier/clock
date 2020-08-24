import React from "react";
import { Alert } from "react-bootstrap";

export const DigitalClock = ({ time }) => (
  <Alert variant={"dark"} style={{ maxWidth: "160px" }}>
    {/* Using Alert for quick styling for background */}
    {time.hours >= 12 ? time.hours - 12 : time.hours}:
    {time.minutes < 10 ? "0" + time.minutes : time.minutes}:
    {time.seconds < 10 ? "0" + time.seconds : time.seconds}
    {time.hours >= 12 ? " PM" : " AM"}
  </Alert>
);
