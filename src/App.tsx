import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PizzaConstructor from "./PizzaConstructor";
import RegistrationPage from "./RegistrationPage";
import LoginPage from "./LoginPage";
import ReceiptPage from "./ReceiptPage";
import OrderPage from "./OrderPage";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";


const App = () => {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route exact path='/'>
                    <PizzaConstructor/>
                </Route>
                <Route path='/registration'>
                    <RegistrationPage/>
                </Route>
                <Route path='/login'>
                    <LoginPage/>
                </Route>
                <Route path='/receipt'>
                    <ReceiptPage/>
                </Route>
                <Route path='/order'>
                    <OrderPage/>
                </Route>
                <Route>
                    <PageNotFound/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
