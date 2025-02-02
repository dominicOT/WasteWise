import React from 'react';
import { ChevronLeft, UserCog,  Building2, UserRound } from 'lucide-react';
import './SignInOptions.css'
import { Link } from 'react-router-dom';
const SignInOptions = () => {
  return (
    <>
        <header className='header-section'>
            <Link to={'/auth'} className="arrow-left-container">
                <ChevronLeft className='arrow-left'/>
            </Link>
            <div className='header-text'>Sign In Options</div>
        </header>
        <main className='options'>
            <Link to={'/admin-login'} className='admin-option'>
                <div className='admin'>
                    <UserCog className='userCog' size={36}/>
                </div>
                <div className='admin-text'>Admin</div>
            </Link>
            <Link to={'/agency-login'} className='agency-option'>
                <div className='agency'>
                    <Building2 
                    className='building-two' size={36}/>
                </div>
                <div className='agency-text'>Agency</div>
            </Link>
            <Link to={'/user-signIn'} className='user-option'>
                <div className='user'>
                    <UserRound className='userRound'  size={36}/>
                </div>
                <div className='user-text'>User</div>
            </Link>
        </main>
    </>
  )
}

export default SignInOptions