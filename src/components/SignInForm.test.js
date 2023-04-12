import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();
      render(<SignInForm onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText("Username"), "testuser");
      fireEvent.changeText(
        screen.getByPlaceholderText("Password"),
        "testpassword"
      );
      fireEvent.press(screen.getByText("SignIn"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "testuser",
          password: "testpassword",
        });
      });
    });
  });
});
