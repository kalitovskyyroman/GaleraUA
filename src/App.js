import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';
import Routes from './components/Routes/Routes';
import { UserProvider } from './Context/User/userContext';

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <UserProvider>
                <GridHeader children={<Header />} />
                <GridAside children={<Aside />} />
                <GridContent>
                    <Routes />
                </GridContent>
                <GridFooter children={<Footer />} />
            </UserProvider>
        </BrowserRouter>
    </GridLayout>
);
export default App;
