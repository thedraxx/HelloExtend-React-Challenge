import React from 'react'
import GridAnimals from '../../components/GridAnimals/GridAnimals'
import Search from '../../components/Search/Search'

const Home = () => {
    return (
        <div className='content-center' >
            <h1 className='underline md:underline-offset-4 capitalize'>Dogs Breeds</h1>
            <Search />
            <GridAnimals />
        </div>
    )
}

export default Home