import React, { Suspense } from 'react';
import NavbarItem from './NavbarItem';

function Navbar() {
    return ( 
        <div className='bg-amber-100 p-4 flex justify-center gap-4 lg:text-lg'>
            <Suspense fallback={<div>Loading...</div>}>
                <NavbarItem title="Trending" param="fetchTrending"/>
                <NavbarItem title="Top Rated" param="fetchTopRated"/>
            </Suspense>
        </div>
    );
}

export default Navbar;