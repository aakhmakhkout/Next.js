import ContinueWatching from '@/components/HomeSections/ContinueWatching'
import OtherSections from '@/components/HomeSections/OtherSections'
import React from 'react'

export default function page() {
  return (
    <div>
      <section>
        <ContinueWatching />
      </section>
      <section>
        <OtherSections />
      </section>
    </div>
  )
}
