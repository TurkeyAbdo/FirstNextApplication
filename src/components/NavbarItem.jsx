"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const NavbarItem = ({title, param}) => {
  
  
  const params = useSearchParams()
  const genre = params.get('genre')

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-400 rounded-lg" : ""}`}
      href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}

export default NavbarItem