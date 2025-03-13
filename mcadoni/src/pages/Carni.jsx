import React from 'react'
import CardCarni from '../components/CardCarni'
import capocollo from '../assets/carni/capocollo.png'
import picana from '../assets/carni/picana.png'
import picanairl from '../assets/carni/picanairl.png'
import reale from '../assets/carni/realeangus.png'


function Carni() {
    return (
        <>
            <div className='flex justify-center pb-5'>
                <h2 className='text-3xl italic font-semibold text-amber-50 p-7 '>I nostri preparati</h2>
            </div>
            <div className='px-48 grid grid-cols-4 gap-4 justify-between'>

                <CardCarni
                    img={capocollo}
                    title="Capocollo di Manzo"
                    description="Taglio pregiato e saporito, il Capocollo di Manzo Sardo è ricco di gusto e morbidezza grazie al perfetto equilibrio tra carne magra e grasso. Ideale per arrosti, grigliate e cotture lente, esalta il sapore autentico della tradizione sarda."
                    provenienza="Sardegna"
                />

                <CardCarni
                    img={picanairl}
                    title="Picana Irlandese"
                    description="Taglio pregiato e saporito, il Capocollo di Manzo Sardo è ricco di gusto e morbidezza grazie al perfetto equilibrio tra carne magra e grasso. Ideale per arrosti, grigliate e cotture lente, esalta il sapore autentico della tradizione sarda."
                    provenienza="Irlanda"
                />

                <CardCarni
                    img={reale}
                    title="Reale di Angus"
                    description="Taglio pregiato e saporito, il Capocollo di Manzo Sardo è ricco di gusto e morbidezza grazie al perfetto equilibrio tra carne magra e grasso. Ideale per arrosti, grigliate e cotture lente, esalta il sapore autentico della tradizione sarda."
                    provenienza="Sardegna"
                />

                <CardCarni
                    img={picana}
                    title="Picana Sarda"
                    description="Taglio pregiato e saporito, il Capocollo di Manzo Sardo è ricco di gusto e morbidezza grazie al perfetto equilibrio tra carne magra e grasso. Ideale per arrosti, grigliate e cotture lente, esalta il sapore autentico della tradizione sarda."
                    provenienza="Sardegna"
                />
            </div>
        </>
    )
}

export default Carni