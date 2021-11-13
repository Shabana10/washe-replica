import React from 'react'
import Advertise from '../Advertsement.jsx/Advertise'
import MyCard from '../Card/MyCard'
import MyCarousel from '..//Carousel/MyCarousel'
import CoverImg from '../Cardimg/CoverImg'
import SecondComp from '../Cardimg/SecondComp'


function Home() {
    return (
        <>
        <CoverImg />
        <SecondComp />
        <MyCarousel />
        <MyCard />
            <div className="text-end">
                <p className="text-secondary fs-6">
                    *Actual earning may vary depending on time of day, location, and
                    other factors. Any testimonials, examples, or stated earnings are
                    in no<br /> way representations or guarantee of a subcontractor earning
                    potential. Subcontractors should consult their business advisor(s).
                </p>
            </div>
            <Advertise />
        </>
    )
}

export default Home
