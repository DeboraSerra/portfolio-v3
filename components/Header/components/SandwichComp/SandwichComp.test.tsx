import { render } from "@testing-library/react";
import SandwichComp from "./SandwichComp";

describe("Test the SandwichComp component", () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<SandwichComp />)
    expect(asFragment()).toMatchSnapshot();
  })
})