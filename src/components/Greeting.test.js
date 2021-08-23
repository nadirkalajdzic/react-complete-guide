import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component tests", () => {
  const clickToggleVisibilityButton = async () => {
    await screen.findByRole("button").then(userEvent.click).catch(console.log);
  };

  test("- toggling visibility with button", async () => {
    render(<Greeting />);
    await clickToggleVisibilityButton();

    await screen
      .findByText("Hello World!")
      .then((el) => expect(el).toBeInTheDocument())
      .catch(console.log);

    await clickToggleVisibilityButton();

    const notVisible = screen.queryByText("good to see you", { exact: false });
    expect(notVisible).toBeNull();
  });
});
