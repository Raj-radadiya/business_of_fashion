import React from 'react'
import './card.css'
import r_image from '../../../assets/image/r_image.avif'
export default function Card() {
    return (
        <div>
            <div className='container'>
                <div className='main_body'>
                    <div className='main_left'>
                        <div className='card_partner'>
                            <div className='flex_card'>
                                <div className='containt_cards'>
                                    <span>PARTNER CONTENT</span>
                                    <h3>Solving Fashion’s $163 Billion Buying and Sizing Inaccuracy Problem</h3>
                                    <p>As competition for customers’ discretionary spend intensifies, smart assortment planning — from size predictions to demand forecasting — can help brands and retailers stay ahead. BoF sits down with Style Arcade CEO and co-founder Michaela Wessels to learn more.</p>

                                    <small>05 September 2024</small>
                                </div>
                                <div className='r_image'>
                                    <img src={r_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
