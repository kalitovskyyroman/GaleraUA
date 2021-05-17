import React from 'react';
import StyledSearchBar, { TextSearchBar, SearchBtn } from './style';
import config from './config';

const Searchbar = () => (
    <StyledSearchBar>
        <TextSearchBar placeholder={config.searchPlaceholder} />
        <SearchBtn img={config.glass} />
    </StyledSearchBar>
);

export default Searchbar;
