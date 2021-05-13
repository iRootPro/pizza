import {fireEvent, render} from "@testing-library/react"
import {Router} from 'react-router-dom'
import {createMemoryHistory} from "history";
import React from "react";
import App from "./App";

const renderWithRouter = (component: JSX.Element | JSX.Element[], initRoute: string = '/') => {
    const history = createMemoryHistory({initialEntries: [initRoute]})
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
}


describe('App', () => {

    describe('Home link click', () => {
        it('navigates to home page', () => {
            const {container, getByText} = renderWithRouter(<App/>, '/order')
            expect(container.innerHTML).toMatch('Order Page')
            fireEvent.click(getByText(/home/i))
            expect(container.innerHTML).toMatch('Pizza Constructor')
        })
    })

    describe('Registration link click', () => {
        it('navigates to registration page', () => {
            const {container, getByText} = renderWithRouter(<App/>)
            expect(container.innerHTML).toMatch('Pizza Constructor')
            fireEvent.click(getByText(/registration/i))
            expect(container.innerHTML).toMatch('Registration Page')
        })
    })

    describe('Login link click', () => {
        it('navigates to login page', () => {
            const {container, getByText} = renderWithRouter(<App/>)
            expect(container.innerHTML).toMatch('Pizza Constructor')
            fireEvent.click(getByText(/login/i))
            expect(container.innerHTML).toMatch('Login Page')
        })
    })

    describe('Order link click', () => {
        it('navigates to order page', () => {
            const {container, getByText} = renderWithRouter(<App/>)
            expect(container.innerHTML).toMatch('Pizza Constructor')
            fireEvent.click(getByText(/order/i))
            expect(container.innerHTML).toMatch('Order Page')
        })
    })

    describe('Receipt link click', () => {
        it('navigate to receipt page', () => {
            const {container, getByText} = renderWithRouter(<App/>)
            expect(container.innerHTML).toMatch('Pizza Constructor')
            fireEvent.click(getByText(/receipt/i))
            expect(container.innerHTML).toMatch('Receipt Page')
        })
    })

    describe('With an unsupported URL', () => {
        it('shows 404 page', () => {
            const {container} = renderWithRouter(<App/>, '/some/bad/route')
            expect(container.innerHTML).toMatch('404 Page Not Found')
        })
    })
})
