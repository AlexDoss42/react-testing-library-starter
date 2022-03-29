import { render } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "234" }} />);
  // eslint-disable-next-line no-restricted-globals
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
