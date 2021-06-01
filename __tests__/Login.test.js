import { render, screen, fireEvent, waitFor } from "../test-utils";
import Login from "../components/Login";

describe("Login Form", () => {
  it("checks for valid email field value with correct format", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "nouran@hotmail.com" },
    });
    fireEvent.click(screen.getByRole("button"));

    const emailField = await waitFor(() => {
      return screen.getByPlaceholderText("Email");
    });

    expect(emailField).toBeValid();
  });

  it("checks for valid password field value with minimum 8 characters", async () => {
    render(<Login />);

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "nouran123" },
    });

    fireEvent.click(screen.getByRole("button"));
    const passwordField = await waitFor(() => {
      return screen.getByPlaceholderText("Password");
    });

    expect(passwordField).toBeValid();
  });
});
