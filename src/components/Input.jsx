import React from 'react'

function Input(props) {

    return (
        <div className='flex flex-col gap-2'>
            <p className='font-semibold'>{props.label}</p>
            <input value={props.value} onChange={props.changeValue} type="text" className='bg-slate-600 w-full h-12 rounded-xl text-lg px-4 shadow-md text-white'/>
        </div>
    )
}

export default Input