import React from 'react';
import StyledSearchBar, { TextSearchBar, SearchBtn } from './style';
import config from './config.json';

const Searchbar = () => (
    <StyledSearchBar>
        <TextSearchBar placeholder={config.searchPlaceholder} />
        <SearchBtn />
    </StyledSearchBar>
);

export default Searchbar;
