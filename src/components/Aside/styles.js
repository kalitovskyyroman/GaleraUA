import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { linkHoverGreen } from '../../variables';

const Sidebar = styled.div``;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    font-family: 'Arvo', sans-serif;
    font-size: 20px;
    padding: 20px 0;
    display: block;

    &.${activeClassName} {
        color: ${({ theme }) => theme.colors.green};
        font-weight: 600;
    }

    &:hover {
        color: ${linkHoverGreen};
    }
`;

export default Sidebar;
