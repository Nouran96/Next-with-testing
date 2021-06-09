import { render, screen } from "../test-utils";
import * as nextRouter from "next/router";
import * as redux from "react-redux";
import UserDetails from "../pages/users/[id]";
import { within, fireEvent, waitFor } from "@testing-library/dom";

const state = {
  users: {
    userDetails: [
      {
        id: 1,
        name: "Nouran",
        phone: "1-770-736-8031",
        email: "nouran@hotmail.com",
        company: {
          name: "Ibtikar",
        },
      },
    ],
  },
};

describe("User Details Page", () => {
  jest
    .spyOn(redux, "useSelector")
    .mockImplementation((callback) => callback(state));

  jest.spyOn(nextRouter, "useRouter").mockImplementation(() => ({
    query: { id: 1 },
  }));

  it("changes switcher status on click", async () => {
    render(<UserDetails />);

    const switcher = screen.getByRole("checkbox");

    expect(switcher).toBeChecked();
    expect(screen.getByText(/active/i)).toBeInTheDocument();

    fireEvent.click(switcher);

    await waitFor(() => {
      expect(switcher).not.toBeChecked();
      expect(screen.getByText(/inactive/i)).toBeInTheDocument();
    });
  });
});
