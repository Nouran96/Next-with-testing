import { render, screen, fireEvent, waitFor, sleep } from "../test-utils";
import * as redux from "react-redux";
import Home from "../pages";
import { within } from "@testing-library/dom";

const state = {
  users: {
    usersList: [
      {
        id: 1,
        name: "Nouran",
        phone: "1-770-736-8031",
      },
      {
        id: 2,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
      },
    ],
  },
};

describe("Home Page", () => {
  jest
    .spyOn(redux, "useSelector")
    .mockImplementation((callback) => callback(state));

  it("renders users list", async () => {
    render(<Home />);

    // two cards rendered
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("renders user phone and name", async () => {
    render(<Home />);

    state.users.usersList.forEach((user, index) => {
      const card = screen.getAllByRole("button")[index];

      expect(within(card).getByText(user.name)).toBeInTheDocument();
      expect(within(card).getByText(user.phone)).toBeInTheDocument();
    });
  });
});
