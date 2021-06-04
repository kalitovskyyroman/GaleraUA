import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import Loader from './components/Loader/Loader';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';
import Routes from './components/Routes/Routes';

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <GridHeader>
                <Header />
                <Loader />
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
        </BrowserRouter>
    </GridLayout>
);

export default App;
