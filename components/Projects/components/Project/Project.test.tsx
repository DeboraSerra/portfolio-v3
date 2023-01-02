import { render } from "@testing-library/react";
import Project from "./Project";
import TProvider from "../helpers/ThemeProvider";

describe("Test the Project component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<TProvider><Project /></TProvider>)
    expect(asFragment()).toMatchSnapshot();
  })
})