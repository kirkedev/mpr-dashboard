import Greeting from "app/Greeting.svelte";
import { render } from "@testing-library/svelte";
import "@testing-library/jest-dom";

describe("Greeting component", () => {
    it("Greets the whole world by default", () => {
        const { getByText } = render(Greeting);
        expect(getByText("Hello, World!")).toBeInTheDocument();
    });

    it("Greets a subject when specified", () => {
        const { getByText } = render(Greeting, { name: "Andrew" });
        expect(getByText("Hello, Andrew!")).toBeInTheDocument();
    });
});
