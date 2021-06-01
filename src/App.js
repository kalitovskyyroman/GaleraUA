import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';
import Routes from './components/Routes/Routes';
import { UserProvider } from './Context/User/userContext';
import { LoaderProvider } from './Context/Loader/LoaderContext';

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <UserProvider>
                <LoaderProvider>
                    <GridHeader>
                        <Header />
                    </GridHeader>
                    <GridAside>
                        <Aside />
                    </GridAside>
                    <GridContent>
                        <Routes />
                    </GridContent>
                    <GridFooter>
                        <Footer />
                    </GridFooter>
                </LoaderProvider>
            </UserProvider>
        </BrowserRouter>
    </GridLayout>
);
export default App;
