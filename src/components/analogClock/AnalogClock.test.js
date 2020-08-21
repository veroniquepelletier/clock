import { render } from "@testing-library/react";
import { Midnight } from "./AnalogClock.stories";

describe("Analog Clock test", () => {
  it("should render midndnight", () => {
    const comp = render(Midnight());
    expect(comp).toMatchSnapshot();
  });
});
