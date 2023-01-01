import { render } from "@testing-library/react";
import Home from "./Home";
import TProvider from "../helpers/ThemeProvider";

describe("Test the Home component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<TProvider><Home /></TProvider>)
    expect(asFragment()).toMatchSnapshot();
  })
})