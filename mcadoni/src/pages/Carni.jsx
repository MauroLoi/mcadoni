import React from 'react'
import CardCarni from '../components/CardCarni'

function Carni() {
    return (
        <>
            <div className='flex justify-center'>
                <h2 className='text-3xl italic font-semibold text-amber-50 p-7'>Le nostre carni</h2>
            </div>
            <CardCarni/>
        </>
    )
}

export default Carni