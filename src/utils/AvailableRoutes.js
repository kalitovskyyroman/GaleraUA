import routes from '../config/routes';

const getPublicRoutes = () => routes.filter(route => !route.permissions);

export const getAvailableRoutes = (isAuthenticated, permission) =>
    isAuthenticated
        ? [...getPublicRoutes(), ...routes.filter(route => route.permissions?.includes(permission))]
        : getPublicRoutes();

export const getAvailablePaths = (isAuthenticated, permission) =>
    isAuthenticated
        ? getAvailableRoutes(isAuthenticated, permission).map(route => route.path)
        : getPublicRoutes().map(route => route.path);
