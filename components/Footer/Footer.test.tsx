import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Test the Footer component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot();
  })
})