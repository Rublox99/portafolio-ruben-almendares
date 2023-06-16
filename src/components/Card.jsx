import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Card = ({ name, url, descripcion, fecha, link, tecnologias}) => {
    return (
        <div className='w-1/6 midWidth:w-1/3 tablet:w-1/3 phone:w-8/12 m-5 rounded-lg bg-white'>
            {url && url != "" ? (
                <>
                    <img src={url} className='h-1/2 w-full mx-auto border-b border-black' />
                    <div className='h-1/2 flex flex-col justify-center'>
                        <p className='h-1/6 py-1 my-4 phone:px-1 font-semibold flex flex-col justify-center'>{name}</p>
                        <p className='h-4/6 px-1 phone:px-1 flex flex-col justify-center'>{descripcion}</p>
                        <p className='h-1/6 py-2 phone:px-1 flex flex-col justify-center'>{fecha}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className='h-full flex flex-col px-1'>
                        <p className='h-1/12 w-full bg-gray-900 rounded-md text-white py-2 my-2 phone:px-1 font-semibold flex flex-col'>{name}</p>
                        <p className='h-4/6 py-2 phone:px-1 flex flex-col mt-auto'>{descripcion}</p>
                        <p className='h-1/6 py-2 my-auto'>({tecnologias})</p>
                        <a href={link} className='h-1/6 py-2 text-blue-700 font-bold my-auto'>Go to</a>
                    </div>
                </>
            )}
        </div>
    )
}

export default Card
