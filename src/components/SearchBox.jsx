'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const SearchBox = () => {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/search/${search}`)
    }

  return (
    <form className='flex justify-between' onSubmit={handleSearch}>
        <input type="text" placeholder="Search for movies..."  className='w-full bg-transparent h-14 outline-none flex-1 placeholder-gray-400 p-4'
        onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" disabled={search === ""} className='text-amber-600 disabled:text-gray-600 cursor-pointer'>Search</button>
    </form>
)
}

export default SearchBox