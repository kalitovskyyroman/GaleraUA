import { useContext } from 'react';
import { UserContext } from '../Context/User/userContext';

const useUser = () => useContext(UserContext);

export default useUser;
