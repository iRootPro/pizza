import {fireEvent, render} from "@testing-library/react"
import {Router} from 'react-router-dom'
import {createMemoryHistory} from "history";
import React from "react";
import App from "./App";


describe('App', () => {
    describe('Registration link click', () => {
        it('navigates to registration page', () => {
            const history = createMemoryHistory()
            const {container, getByText} = render(
                <Router history={history}>
                    <App/>
                </Router>
            )

            expect(container.innerHTML).toMatch('Big')
            expect(container.innerHTML).toMatch('Registration')
            fireEvent.click(getByText("Registration"))
            expect(container.innerHTML).toMatch('Registration Page')
        })
    })

    describe('Login link click', () => {
        it('navigates to login page', () => {
            const history = createMemoryHistory()
            const {container, getByText} = render(
                <Router history={history}>
                    <App/>
                </Router>
            )

            expect(container.innerHTML).toMatch('big')
            fireEvent.click(getByText(/login/i))
            expect(container.innerHTML).toMatch('Login Page')
        })
    })

    describe('Order link click', () => {
        it.todo('navigates to order page')
    })

    describe('Receipt link click', () => {
        it.todo('navigate to receipt page')
    })

    describe('With an unsupported URL', () => {
        it('shows 404 page', () => {
            const history = createMemoryHistory()
            const {container, getByText} = render(
                <Router history={history}>
                    <App/>
                </Router>
            )
            history.push('/some/bad/route')
            expect(container.innerHTML).toMatch('404 Page Not Found')
        })
    })
})
