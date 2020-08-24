import React from "react";
import { Clocks } from "./Clocks";

export default {
  title: "Views/Clocks",
  component: Clocks,
  argTypes: {},
};
const Template = (args) => <Clocks initialDate={new Date()} />;

export const Default = Template;
