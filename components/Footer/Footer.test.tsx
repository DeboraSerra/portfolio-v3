import { render } from "@testing-library/react";
import TProvider from "../helpers/ThemeProvider";
import Footer from "./Footer";

describe("Test the Footer component", () => {
  it("Should match the snapshot", () => {
    const { asFragment } = render(
      <TProvider>
        <Footer />
      </TProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
