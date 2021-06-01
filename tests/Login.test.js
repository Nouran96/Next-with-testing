import { render, screen } from "../test-utils";
import Login from "../components/Login";

describe("Login", () => {
  it("renders without crashing", () => {
    render(<Login />);
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
