import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';
import Routes from './components/Routes/Routes';
import User from './config/User';
import { UserContext } from './globalContext';

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <UserContext.Provider value={User}>
                <GridHeader children={<Header />} />
                <GridAside children={<Aside />} />
                <GridContent>
                    <Routes />
                </GridContent>
                <GridFooter children={<Footer />} />
            </UserContext.Provider>
        </BrowserRouter>
    </GridLayout>
);
export default App;
