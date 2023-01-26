import React, { useContext, useEffect, useState } from 'react'
import dogsAPI from '../../api/axios';
import { DogsInfo } from '../../../interfaces/dogsInterfaces';
import './index.css'
import { SearchContext } from '../../context/SearchContext';
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { AnimalFavsContext } from '../../context/AnimalFavs/AnimalFavsContext';

const GridAnimals = () => {

    const [dogs, setDogs] = useState<DogsInfo>()
    const [onLoading, setOnLoading] = useState<boolean>(false)
    const { search } = useContext(SearchContext)
    const [AnimalListFavs, setAnimalListFavs] = useState<string[]>([])

    const { ToggleAnimals, Animals } = useContext(AnimalFavsContext)


    useEffect(() => {
        getInfoDogs();
    }, [search])

    const getInfoDogs = async () => {
        if (search === '') return;
        setOnLoading(true)
        const data = await dogsAPI.get<DogsInfo>(`/breed/${search}/images/random/10`);
        setDogs(data.data);
        setOnLoading(false)
    }


    // const addAnimalsFavs = (animal: string) => {

    //if (AnimalListFavs.includes(animal)) {
    //       const newList = AnimalListFavs.filter((item) => item !== animal)
    //     setAnimalListFavs(newList)
    // console.log("eliminando animal")
    //   return;
    // }
    //console.log("agregando animal")
    //setAnimalListFavs([...AnimalListFavs, animal])
    //return
    //}


    return (
        <div>
            {
                onLoading ?
                    <div className=' grid justify-center p-2 mt-5'>
                        <div className='Spin' />
                    </div>
                    : (
                        <div className='grid card sm: grid-cols-1 gap-2 md:grid-cols-2 gap-2 lg:grid-cols-2 gap-2 xl:grid-cols-3 gap-2 '>
                            {
                                dogs?.message.map((dog, index) => (
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
                    )
            }
        </div >
    )
}

// sm: w-full  md: w-75  lg: w-50 xl: w-100

//      style={{
//    width: "500px", height: "400px"
//  }}

export default GridAnimals