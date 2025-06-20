import React from 'react'
import { SlRefresh } from 'react-icons/sl'
import '../styles/icon.css'

const Loading = () => {
    return (
        <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center'}} >
            <SlRefresh className='icon' />
        </div>
    )
}

export default Loading