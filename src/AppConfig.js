import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import JobList from './pages/JobList/JobList';
import PinnedJobs from './pages/PinnedJobs/PinnedJobs';
import SelectedJobs from './pages/SelectedJobs/SelectedJobs';

export const paths = {
    home: '/',
    login: '/login',
    signup: '/signup',
    jobList: '/jobList',
    pinnedJobs: '/pinnedJobs',
    selectedJobs: '/selectedJobs',
    notFound: '*',
};

const routers = [
    {
        path: paths.home,
        component: Home,
        exact: true,
        is_protected: false,
    },
    {
        path: paths.login,
        component: Login,
        exact: true,
        is_protected: false,
    },
    {
        path: paths.signup,
        component: Signup,
        exact: true,
        is_protected: false,
    },
    {
        path: paths.jobList,
        component: JobList,
        exact: true,
        is_protected: false,
    },
    {
        path: paths.pinnedJobs,
        component: PinnedJobs,
        exact: true,
        is_protected: true,
    },
    {
        path: paths.selectedJobs,
        component: SelectedJobs,
        exact: true,
        is_protected: true,
    },
    {
        path: paths.notFound,
        component: NotFound,
        exact: false,
        is_protected: false,
    },
];

export default routers;
