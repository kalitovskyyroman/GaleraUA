import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/SignUp';
import JobList from '../pages/JobList/JobList';
import PinnedJobs from '../pages/PinnedJobs/PinnedJobs';
import SelectedJobs from '../pages/SelectedJobs/SelectedJobs';
import roles from './roles';

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
    },
    {
        path: paths.login,
        component: Login,
        exact: true,
    },
    {
        path: paths.signup,
        component: Signup,
        exact: true,
    },
    {
        path: paths.jobList,
        component: JobList,
        exact: true,
    },
    {
        path: paths.pinnedJobs,
        component: PinnedJobs,
        exact: true,
        permissions: [roles.ADMIN, roles.GUEST, roles.MANAGER],
    },
    {
        path: paths.selectedJobs,
        component: SelectedJobs,
        exact: true,
        permissions: [roles.ADMIN, roles.MANAGER],
    },
];

export default routers;
