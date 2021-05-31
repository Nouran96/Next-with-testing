import { render, screen } from "@testing-library/react";
import LoginPage from "../pages/login";

describe("Login", () => {
  it("renders without crashing", () => {
    render(<LoginPage />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
