import React, { useContext, useEffect, useState } from 'react'
import dogsAPI from '../../api/axios';
import { DogsInfo } from '../../../interfaces/dogsInterfaces';
import './index.css'
import { SearchContext } from '../../context/SearchContext';

const GridFavorites = () => {

    const [dogs, setDogs] = useState<DogsInfo>()
    const [onLoading, setOnLoading] = useState<boolean>(false)
    const { search } = useContext(SearchContext)

    useEffect(() => {
        console.log('favs')
    }, [])

    const getInfoDogs = async () => {
        if (search === '') return;
        setOnLoading(true)
        const data = await dogsAPI.get<DogsInfo>(`/breed/${search}/images/random/10`);
        setDogs(data.data);
        setOnLoading(false)
    }

    return (
        <div className='grid sm: grid-cols-1 gap-1 md:grid-cols-2 gap-2 lg:grid-cols-4 gap-4'>
            {
                dogs?.message.map((dog, index) => (
                    <div key={index}>
                        <img src={dog} alt="dog" className='p-5 card grid justify-center sm: w-full  md: w-75  lg: w-50 xl: w-100' />
                    </div>
                ))
            }
        </div>
    )
}

export default GridFavorites