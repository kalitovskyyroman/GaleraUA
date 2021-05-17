import routes from '../config/routes';

export const getPublicRoutes = () => routes.filter(route => !route.permissions);

const getAvailableRoutes = permission => {
    const availableRoutes = [
        ...getPublicRoutes(),
        ...routes.filter(route => !!route.permissions && route.permissions.includes(permission)),
    ];

    return availableRoutes;
};

export default getAvailableRoutes;
