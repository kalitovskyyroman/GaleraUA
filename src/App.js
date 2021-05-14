import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import { GridLayout, GridContent, GridAside, GridFooter, GridHeader } from './globalStyles';
import Routers from './components/Routers/Routers';
import { setUser } from './config/User';

setUser();

const App = () => (
    <GridLayout>
        <BrowserRouter>
            <GridHeader children={<Header />} />
            <GridAside children={<Aside />} />
            <GridContent>
                <Routers />
            </GridContent>
            <GridFooter children={<Footer />} />
        </BrowserRouter>
    </GridLayout>
);
export default App;
