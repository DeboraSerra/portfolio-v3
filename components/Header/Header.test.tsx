import { render } from "@testing-library/react";
import TProvider from "../helpers/ThemeProvider";
import Header from "./Header";

describe("Test the Header component", () => {
  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <TProvider>
        <Header />
      </TProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
