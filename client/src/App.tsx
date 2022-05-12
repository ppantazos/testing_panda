import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {IntlProvider} from 'react-intl';
import english from './intl/entries/en';
import configureStore from "./redux/store";
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from "react-router-config";
import {getRoutes} from "./services/RouterService";

const store = configureStore();

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <IntlProvider locale={english.locale} messages={english.messages}>
                <BrowserRouter>
                    {renderRoutes(getRoutes())}
                </BrowserRouter>
            </IntlProvider>
        </Provider>
    );
}

export default App;
