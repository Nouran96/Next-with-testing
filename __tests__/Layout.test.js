import { render, screen } from "../test-utils";
import Layout from "../components/Layout";

describe("Layout Component", () => {
  it("renders with login button", () => {
    render(<Layout></Layout>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
