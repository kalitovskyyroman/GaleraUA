import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import JobList from './pages/JobList/JobList';
import PinnedJobs from './pages/PinnedJobs/PinnedJobs';
import SelectedJobs from './pages/SelectedJobs/SelectedJobs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';

import s from './App.module.css';

const App = () => (
    <div className={s.grid_wrapper}>
        <BrowserRouter>
            <Header />
            <Aside />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/signup'>
                    <Signup />
                </Route>
                <Route exact path='/jobList'>
                    <JobList />
                </Route>
                <Route exact path='/pinnedJobs'>
                    <PinnedJobs />
                </Route>
                <Route exact path='/selectedJobs'>
                    <SelectedJobs />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
);
export default App;
