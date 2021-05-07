import React from 'react';
import AsideItem from '../AsideItem/AsideItem';

import grid from '../../App.module.css';

const Aside = () => (
    <aside className={grid.grid_aside}>
        <AsideItem path='/' text='Home' />
        <br />
        <AsideItem path='/login' text='Login' />
        <br />
        <AsideItem path='/signup' text='Signup' />
        <br />
        <AsideItem path='/jobList' text='Job list' />
        <br />
        <AsideItem path='/pinnedJobs' text='Pinned jobs' />
        <br />
        <AsideItem path='/selectedJobs' text='Selected jobs' />
    </aside>
);
export default Aside;
