import roles from './roles';

const User = { is_authenticated: false, role: roles.GUEST };

export const setUser = () => localStorage.setItem('User', JSON.stringify(User));

export default User;
