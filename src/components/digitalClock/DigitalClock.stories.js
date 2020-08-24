import React from "react";
import { DigitalClock } from "./DigitalClock";

export default {
  title: "Components/DigitalClock",
  component: DigitalClock,
  argTypes: {},
};
export const Default = () => (
  <DigitalClock
    time={{
      hours: 1,
      minutes: 1,
      seconds: 1,
    }}
  />
);

export const Midnight = () => (
  <DigitalClock
    time={{
      hours: 12,
      minutes: 0,
      seconds: 0,
    }}
  />
);
