/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import roles from '../../config/roles';

const LOGIN = 'USER/LOGIN';
const LOGOUT = 'USER/LOGOUT';

const initialState = { isAuthenticated: true, role: roles.ADMIN };

// eslint-disable-next-line no-unused-vars
function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            const { isAuthenticatedPayload, rolePayload } = action.payload;

            return {
                ...state,
                isAuthenticated: isAuthenticatedPayload,
                role: rolePayload,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                role: null,
            };
        }
        default: {
            return state;
        }
    }
}

const UserContext = React.createContext();

const UserDispatchContext = React.createContext();

export const useUserState = () => React.useContext(UserContext);

export function UserProvider({ children }) {
    const [state, dispatch] = React.useReducer(userReducer, initialState);
    return (
        <UserContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
