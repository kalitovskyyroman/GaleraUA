import routers from '../config/routers';

export const getPublicRouters = () => routers.filter(router => !router.permissions);

const getAvailableRouters = permission => {
    const availableRouters = [
        ...getPublicRouters(),
        ...routers.filter(router => !!router.permissions && router.permissions.includes(permission)),
    ];

    return availableRouters;
};

export default getAvailableRouters;
