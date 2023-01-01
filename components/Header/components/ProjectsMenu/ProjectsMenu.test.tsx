import { render } from "@testing-library/react";
import ProjectsMenu from "./ProjectsMenu";

describe("Test the ProjectsMenu component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<ProjectsMenu />)
    expect(asFragment()).toMatchSnapshot();
  })
})