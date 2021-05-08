import React from "react";
import {render} from "@testing-library/react"
import PizzaConstructor from "./PizzaConstructor";

describe("PizzaConstructor", () => {
    it('renders correctly', () => {
        const {container, getByTestId} = render(<PizzaConstructor/>)
        expect(container).toContainHTML("Big")
        expect(getByTestId("big")).toBeChecked()
        expect(container).toContainHTML("Small")
        expect(container).toContainHTML("Thick")
        expect(getByTestId("thick")).toBeChecked()
        expect(container).toContainHTML("Thin")
        expect(container).toContainHTML("Tomato")
        expect(container).toContainHTML("White")
        expect(container).toContainHTML("Spicy")
        expect(container).toContainHTML("Mozzarella")
        expect(container).toContainHTML("Cheddar")
        expect(container).toContainHTML("Dor blue")
        expect(getByTestId("tomato")).toContainHTML("Tomato")
        expect(container).toContainHTML("Mushrooms")
        expect(container).toContainHTML("Pepper")
        expect(container).toContainHTML("Bacon")
        expect(container).toContainHTML("Pepperoni")
        expect(container).toContainHTML("Ham")
        expect(container).toContainHTML("250")
    })
})
