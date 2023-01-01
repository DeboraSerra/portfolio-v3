import { render } from "@testing-library/react";
import TProvider from "../../../helpers/ThemeProvider";
import ProjectsMenu from "./ProjectsMenu";

describe("Test the ProjectsMenu component", () => {
  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <TProvider>
        <ProjectsMenu />
      </TProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
