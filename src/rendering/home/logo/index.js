import React from 'react'
import './logo.css'
import logo from '../../../assets/logo/main_logo.svg'
export default function Logo() {
    return (
        <div>

            <div className='container'>
                <div className='small_text'>
                    <small>the business of fashion</small>
                </div>
                <div className='main_logo'>
                    <img src={logo} className='logo' />
                </div>
            </div>

            <div className='start_trial'>
                <div className='container'>
                    <div className='trial_contain'>
                    <p>Join BoF Professional today for agenda-setting analysis and advice. Start your 30-day trial for just ₹100.</p>
                    <button className='trial'>START TRIAL</button>
                    </div>
                </div>
            </div>









        </div>
    )
}
