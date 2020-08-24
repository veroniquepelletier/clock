import { render } from "@testing-library/react";
import { Midnight } from "./DigitalClock.stories";

describe("Analog Clock test", () => {
  it("should match snapshot", () => {
    const comp = render(Midnight());
    expect(comp).toMatchSnapshot();
  });

  it("should render midnight", () => {
    const { getByText } = render(Midnight());
    const time = getByText(/0:00:00 PM/i);
    expect(time).toBeInTheDocument();
  });
});
