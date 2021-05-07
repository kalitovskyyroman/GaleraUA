import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import routers from './AppConfig';

import s from './App.module.css';

const App = () => (
    <div className={s.grid_wrapper}>
        <BrowserRouter>
            <Header />
            <Aside />
            <Switch>
                {routers.map(route => (
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                ))}
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
);
export default App;
