import { render } from "@testing-library/react";
import Header from "./Header";

describe("Test the Header component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot();
  })
})