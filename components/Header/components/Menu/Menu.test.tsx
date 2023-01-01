import { render } from "@testing-library/react";
import Menu from "./Menu";

describe("Test the Menu component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Menu />)
    expect(asFragment()).toMatchSnapshot();
  })
})