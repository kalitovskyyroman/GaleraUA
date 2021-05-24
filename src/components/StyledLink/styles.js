import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { linkHoverGreen } from '../../variables';

const StyledLink = styled(NavLink)`
    font-family: 'Arvo', sans-serif;
    display: block;

    &:hover {
        color: ${linkHoverGreen};
    }
`;

export default StyledLink;
