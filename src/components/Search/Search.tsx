import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { SearchContext } from '../../context/SearchContext';

const Search = () => {


    const { sendSearch } = useContext(SearchContext)

    const {
        search,
        onChange

    } = useForm({
        search: ''
    })


    return (
        <div className='flex flex-row justify-center p-2s '>

            <input
                type="text"
                name="search"
                value={search}
                onChange={({ target }) => onChange(target.value, 'search')}
                className='p-5 mt-10 mr-5 w-9 md:mr-10 w-64 md:w-96 lg:w-96 xl:w-96 2xl:w-96 3xl:w-96'
                style={{ backgroundColor: '#efefef', borderRadius: 5 }}
            />
            <button className='p-5 mt-10 rounded-lg ' style={{ background: '#0794E3' }}>
                <h1 className='text-white' onClick={() => sendSearch(search)}>Search</h1>
            </button>
        </div>
    )
}

export default Search