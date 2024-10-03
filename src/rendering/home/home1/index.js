import React from 'react'
import './home.css'
import image_left from '../../../assets/image/flex_left.avif' ;
import image_right from '../../../assets/image/flex_right.avif' ;
import main_img1 from '../../../assets/image/main_img.avif'
export default function Nordstrom() {
    return (
        <div>
            <div className='container'>
                <div className='main_body'>



                    <div className='main_left'>
                        <div className='display_text'>
                            <h1>Ralph Lauren Goes to the Hamptons</h1>
                            <img src={main_img1} />
                        </div>
                        <div className='read'>
                            <a href='#'>TODAY'S MUST READ  →</a>
                            <p>The brand brought guests to Khalily Stables in Bridgehampton on Thursday evening for one of the label’s most overt efforts yet to insert itself into the conversation with major luxury players.</p>
                        </div>

                        <div className='main_flex'>
                            <div className='flex_home'>
                                <div className='flex_left'>
                                <img src={image_left} />
                                <h3>How Ulla Johnson Played Fashion’s Long Game</h3>
                                <p>After 25 years in business, Ulla Johnson has reached nine figures in annual sales by charting her own course, from resisting outside fundraising to embracing what she calls “slow fashion.” With a new CEO at the helm, she’s once again looking to enter the next stage of growth her own way.</p>
                                </div>
                                <div className='flex_right'>
                                <img src={image_right} />
                                <h3>How Brands Build Their Resale Teams</h3>
                                <p>As a relatively new business unit with a limited pool of specialists to choose from, companies like M.M.Lafleur and Faherty have gotten creative in curating their re-commerce teams.</p>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className='main_right'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
