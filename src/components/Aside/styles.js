import styled from 'styled-components';
import StyledLinkComponent from '../StyledLink/StyledLink';

const Sidebar = styled.div`
    position: sticky;
    top: 12vh;
    left: 0;
`;

const activeClassName = 'nav-item-active';

export const AsideStyledLink = styled(StyledLinkComponent).attrs({ activeClassName })`
    font-size: 20px;
    padding: 20px 0;

    &.${activeClassName} {
        color: ${({ theme }) => theme.colors.green};
        font-weight: 600;
    }
`;

export default Sidebar;
