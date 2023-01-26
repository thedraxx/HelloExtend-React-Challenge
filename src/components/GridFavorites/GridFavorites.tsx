import React, { useContext, useEffect, useState } from 'react'
import dogsAPI from '../../api/axios';
import { DogsInfo } from '../../../interfaces/dogsInterfaces';
import './index.css'
import { SearchContext } from '../../context/SearchContext';
import { AnimalFavsContext } from '../../context/AnimalFavs/AnimalFavsContext';
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const GridFavorites = () => {

    const { ToggleAnimals, Animals } = useContext(AnimalFavsContext)

    return (
        <div>
            <div className='grid card sm: grid-cols-1 gap-2 md:grid-cols-2 gap-2 lg:grid-cols-2 gap-2 xl:grid-cols-3 gap-2 '>
                {
                    Animals?.map((dog, index) => (
                        <div key={index}>
                            <div
                                className='p-5 card grid justify-center sm: w-full  md: w-75  lg: w-50 xl: w-100'>
                                <img
                                    src={dog} alt="dog"
                                    className='object-cover h-96 w-96'
                                />
                                <button className='flex justify-end mt-0'
                                    onClick={() => { ToggleAnimals(dog) }}
                                >
                                    <div className='flex justify-end ' >
                                        {
                                            Animals.includes(dog) ?
                                                <AiTwotoneHeart className='text-4xl text-red-500' /> : <AiOutlineHeart className='text-4xl text-red-500' />
                                        }
                                    </div>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default GridFavorites