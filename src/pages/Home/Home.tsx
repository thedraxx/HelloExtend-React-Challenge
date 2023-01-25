import React from 'react'
import GridAnimals from '../../components/GridAnimals/GridAnimals'
import Search from '../../components/Search/Search'
import GridFavorites from '../../components/GridFavorites/GridFavorites'

const Home = () => {
    return (
        <div className='content-center' >
            <div className='flex justify-start ml-6 mt-5 sm:ml-3 mt-5 '>
                <h1 className='font-bold text-center  capitalize'>Dogs Breeds</h1>
            </div>
            <Search />
            <GridAnimals />
            <div className='flex justify-start ml-6 mt-5 sm:ml-3 mt-5'>
                <h1 className='font-bold text-center  capitalize'>❤ Favorites</h1>
            </div>
            <GridFavorites />
        </div>
    )
}

export default Home