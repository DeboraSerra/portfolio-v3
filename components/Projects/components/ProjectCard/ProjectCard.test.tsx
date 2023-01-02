import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import TProvider from "../helpers/ThemeProvider";

describe("Test the ProjectCard component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<TProvider><ProjectCard /></TProvider>)
    expect(asFragment()).toMatchSnapshot();
  })
})