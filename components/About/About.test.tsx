import { render } from "@testing-library/react";
import About from "./About";
import TProvider from "../helpers/ThemeProvider";

describe("Test the About component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<TProvider><About /></TProvider>)
    expect(asFragment()).toMatchSnapshot();
  })
})