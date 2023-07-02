import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <header className='bg-gray-900 py-6 px-6'>
            <div className='flex justify-between m-auto mx-9 font-semibold text-slate-400'>
                <Link to="/" className='text-slate-400 hover:text-slate-300 hover:-translate-y-px'>Home</Link>
                <div className='flex justify-between gap-x-5'>
                    <Link to="/Profile" className='text-slate-400 hover:text-slate-300 hover:-translate-y-px'>Profile</Link>
                    <Link to="/About" className='text-slate-400 hover:text-slate-300 hover:-translate-y-px'>About</Link>
                </div>
            </div>
        </header>
    )
}

export default Navigation;
