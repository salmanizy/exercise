import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("Menampilkan judul dengan benar", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 }))
      .toHaveTextContent("Hello Jayjay Student!");
  });

  test("Menampilkan sub judul dengan benar", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 2 }))
      .toHaveTextContent("Let's create unit test");
  });
});
