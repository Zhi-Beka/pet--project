import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/renderWithRouter/componentRender";
import { Counter } from "./Counter";

describe("Counter", () => {
    test("test render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    });

    test("increment", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
    });

    test("decrement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
    });
});
