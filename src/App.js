import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import routers from './AppConfig';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <GridHeader children={<Header />} />
            <GridAside children={<Aside />} />
            <GridContent>
                <Switch>
                    {routers.map(route => (
                        <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                    ))}
                </Switch>
            </GridContent>
            <GridFooter children={<Footer />} />
        </BrowserRouter>
    </GridLayout>
);
export default App;
