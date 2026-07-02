import ContinueWatching from '@/components/HomeSections/ContinueWatching'
import OtherSections from '@/components/HomeSections/OtherSections'
import React from 'react'
import { popularMovies } from '@/data/catagoriesData'
import { popularSeries } from '@/data/catagoriesData'
import { popularAnime } from '@/data/catagoriesData'
import Footer from '@/components/layout/Footer'

export default function page() {
  const catagories = [
    {
      id:1,
      label: "Movies - Popular",
      data: popularMovies,
      path: "/popularmovies"
    },
    {
      id:2,
      label: "Series - Popular",
      data: popularSeries,
      path: "/popularseries"
    },
    {
      id:3,
      label: "Anime - Popular",
      data: popularAnime,
      path: "/popularanime"
    },

  ]
  return (
    <div className='flex flex-col gap-10 overflow-hidden'>
      <section>
        <ContinueWatching />
      </section>
        {catagories.map((items)=> {
        return <section key={items.id}>
          <OtherSections data={items}/>
        </section>
        })}
         <footer>
            <Footer />
          </footer>
    </div>
  )
}
