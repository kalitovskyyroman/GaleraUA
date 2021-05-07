import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import JobList from './pages/JobList/JobList';
import PinnedJobs from './pages/PinnedJobs/PinnedJobs';
import SelectedJobs from './pages/SelectedJobs/SelectedJobs';

const routers = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        path: '/signup',
        component: Signup,
        exact: true,
    },
    {
        path: '/jobList',
        component: JobList,
        exact: true,
    },
    {
        path: '/pinnedJobs',
        component: PinnedJobs,
        exact: true,
    },
    {
        path: '/selectedJobs',
        component: SelectedJobs,
        exact: true,
    },
    {
        path: '*',
        component: NotFound,
        exact: false,
    },
];

export default routers;
