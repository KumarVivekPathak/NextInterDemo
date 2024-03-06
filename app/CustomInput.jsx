
import React, { useState } from 'react'

const CustomInput = (props) => {
    // const {label, error} = props;
    
    return (
        <div className=" justify-start w-4/5">
        <p className=" mt-2 ml-3 justify-start align-baseline items-start">{props.label}</p>
        <input type='email' className=' w-full p-5 h-10 border-b-slate-950 border-r-2 rounded-2xl '
        placeholder={props.placeholder}
        onChange={props.onChange}
        />

       {props.showError&& <p className="my-2 text-red-600" >{props.error}</p>}
        </div>
    )
}

export default CustomInput;