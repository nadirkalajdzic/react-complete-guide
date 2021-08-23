import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders greeting component", () => {
  render(<Greeting />);

  const helloWorldEl = screen.getByText("Hello World!");
  expect(helloWorldEl).toBeInTheDocument();
});
