import React from "react";
import { AnalogClock } from "./AnalogClock";

export default {
  title: "Components/AnalogClock",
  component: AnalogClock,
  argTypes: {},
};
const Template = (args) => (
  <AnalogClock
    time={{
      hours: 1,
      minutes: 1,
      seconds: 1,
    }}
  />
);

export const Default = Template.bind({});

export const Midnight = () => (
  <AnalogClock
    time={{
      hours: 12,
      minutes: 0,
      seconds: 0,
    }}
  />
);
