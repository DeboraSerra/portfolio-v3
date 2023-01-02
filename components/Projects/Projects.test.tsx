import { render } from "@testing-library/react";
import Projects from "./Projects";
import TProvider from "../helpers/ThemeProvider";

describe("Test the Projects component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<TProvider><Projects /></TProvider>)
    expect(asFragment()).toMatchSnapshot();
  })
})