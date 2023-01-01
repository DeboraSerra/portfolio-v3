import { render } from "@testing-library/react";
import TProvider from "../../../helpers/ThemeProvider";
import Menu from "./Menu";

describe("Test the Menu component", () => {
  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <TProvider>
        <Menu />
      </TProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
