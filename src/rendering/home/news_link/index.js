import React from 'react'
import './news_link.css'
import podcast1 from '../../../assets/image/podcast1.avif'
import auther from '../../../assets/image/auther.avif'
import card1 from '../../../assets/image/card1.avif'
export default function NewsLink() {
    return (
        <div>
            <div className='container'>
                <div className='main_podcast'>
                    <h4>Marketing</h4>
                    <h3>The BoF Podcast | Lyas on the Enduring Power of Fashion Storytelling</h3>
                    <p>French fashion narrator Lyas joins BoF founder and editor-in-chief Imran Amed to discuss how he developed his fashion persona and why he believes the golden age of fashion designers is over.</p>
                    <div className='p_photo'>
                        <img src={podcast1} alt='photo' />
                        <small>Growing up in France and studying drama, Lyas was first drawn to the visual world filmmaking. (Adriana Pagliai)</small>
                    </div>
                </div>
                <div className='article'>
                    <div className='article_name'>
                        <p>By <b>IMRAN AMED</b></p>
                        <p className='article_color'>06 September 2024</p>
                    </div>

                    <div className='music_player'>
                        <div className='photo_radio'>
                            <img src={podcast1} />
                        </div>
                        <div className='radio_disc'>
                            <small className='small'> The Business of Fashion Podcast</small>
                            <h5 className='head'>Lyas on the Enduring Power of Fashion Storytelling</h5>
                            <p>6 September 2024 • 43 min • Listen later</p>
                        </div>
                    </div>

                    <i>Subscribe to the <b> BoF Podcast here.</b></i>
                    <div className='article_background'>
                        <h3>Background</h3>
                        <p>Fashion narrator Lyas is one of the most compelling and authentic fashion communicators to have arrived on the scene, and whose takes on fashion shows and editorials are incisive, honest and well-informed.</p>
                        <p>“I think we’ve lost the mindset of thinking that it’s possible to be creative and make money for the company, because the golden age of designers is over,” he says. “Now, every designer is disposable. It’s like musical chairs—every month, there’s someone leaving, someone coming.”</p>
                        <p>Lyas’ journey has been shaped by his belief in the emotional power of storytelling, which he sees as central to fashion communication. Using TikTok and Instagram to communicate his thoughts and opinions, his fashion roulette videos and witty runway dissections have captured the attention of hundreds of thousands of viewers. Recently, he has bemoaned the dilution of creativity across the fashion industry.</p>
                    </div>
                    <div className='article_Key_Insights'>
                        <h3>Key Insights</h3>
                        <li>Growing up in France and studying drama, Lyas was first drawn to the visual world filmmaking. Frustrated by the rigid criteria of the film industry, Lyas found freedom in fashion, where he could create personas and critique without fitting into predefined moulds. He connected with fashion insiders at parties, building his presence through social media and discovering a space that allowed his voice and persona to thrive. “I didn’t find the sense of belonging in that cinema crowd, so I started going out with fashion people,” he said. “It became this way of creating this superstar persona at night and I fell in love with that.”</li>
                        <li>Lyas quickly noticed the gap between private opinions and public silence in the fashion world. He began voicing unfiltered critiques, challenging the industry’s hypocrisy. This unapologetic stance led to temporary blacklists but also opened doors, proving the value of staying true to his voice. “I started just saying it like it is on my TikTok... the first Sabato de Sarno I really didn’t like, and I think most of the industry did not like it, but no one wanted to say it, so I took the bullet.”</li>
                        <li>Lyas is critical of the corporatisation of fashion, where creativity is often sidelined for profit. “We’ve lost the mindset of thinking that it’s possible to be creative and make money for the company, " he said. “The golden age of designers is over. Now any designer is disposable. We’ve seen it, it’s like musical chairs.”</li>
                        <li>On advice, Lyas keeps it simple. “Have no fear. But it’s very easy to say, but I think fear is the biggest issue for anyone’s confidence. … Just be fearless and if you’re scared of doing it, do it.”</li>
                    </div>
                    <div className='article_Additional_Resources'>
                        <h3>Additional Resources</h3>
                        <li><a href='#'>Commercialising the Zeitgeist: Crafting a Successful TikTok Strategy.</a>With a community exceeding 1 billion individuals, TikTok is a critical driver of success for fashion and beauty brands today. Partnering with TikTok, BoF shares exclusive internal insights and strategic analysis from a range of independent experts to identify how businesses can optimise their brand and product marketing performance on TikTok, and generate sales through its ads and commerce features.</li>

                        <li><a href='#'>Why Brands Are Inviting Customers on Influencer Trips. </a>Lavish trips full of free swag are no longer exclusively for the high-follower-count elites.
                        </li>

                        <li><a href='#'>Finding Fashion Consumers Beyond Instagram. </a> Once considered fringe, platforms like Reddit, Discord and Twitch are attracting the attention of digital marketers aiming to diversify their channel mix away from Instagram.
                        </li>
                    </div>

                    <div className='see_all_coments'>
                        <button>SEE ALL COMMENTS</button>
                    </div>



                </div>
                <div className='about_auther'>
                    <div className='auther_1'>

                    </div>
                    <div className='auther_2'>
                        <h3>About the author</h3>
                        <div className='auther_discription'>
                            <div className='auther_img'>
                                <img src={auther} alt='photo' />
                            </div>
                            <div className='auther_disc'>
                                <h4>IMRAN AHMAD</h4>
                                <p>Imran Amed is the Founder, CEO and Editor-in-Chief of The Business of Fashion. Based in London, he shapes BoF’s overall editorial strategy and is the host of The BoF Podcast.</p>

                            </div>
                        </div>
                    </div>
                    <div className='auther_3'>
                        <h3 className='auther_3_line'>In This Article</h3>
                        <div className='auther_3_text'>
                            <p>Topics</p>
                            <h3>Marketing</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='hr'></div>

            <div className='bac_color'>
                <div className='container'>
                    <div className='marketing'>
                        <div className='marketing_title'>
                            <h3>More from Marketing</h3>
                            <p>How new technologies and cultural shifts are rewiring fashion communications.</p>
                        </div>
                        <div className='marketing_body'>
                            <div className='marketing_cards'>
                                <div className='marketing_img'>
                                    <img src={card1} />
                                </div>
                                <div className='marketing_discription'>
                                    <h5>Leveraging TikTok for Brand and Sales Success</h5>
                                    <p>     In BoF’s latest white paper, in partnership with TikTok, brand and marketing executives, independent analysts and TikTok business leaders share their insights on the best practices to acquire and engage audiences by honing platform-relevant brand, product and paid marketing strategies, with examples from Coach, E.l.f. Beauty, Marc Jacobs and many more.</p>
                                </div>
                            </div>
                            <div className='marketing_cards'>
                                <div className='marketing_img'>
                                    <img src={card1} />
                                </div>
                                <div className='marketing_discription'>
                                    <h5>Leveraging TikTok for Brand and Sales Success</h5>
                                    <p>     In BoF’s latest white paper, in partnership with TikTok, brand and marketing executives, independent analysts and TikTok business leaders share their insights on the best practices to acquire and engage audiences by honing platform-relevant brand, product and paid marketing strategies, with examples from Coach, E.l.f. Beauty, Marc Jacobs and many more.</p>
                                </div>
                            </div>
                            <div className='marketing_cards'>
                                <div className='marketing_img'>
                                    <img src={card1} />
                                </div>
                                <div className='marketing_discription'>
                                    <h5>Leveraging TikTok for Brand and Sales Success</h5>
                                    <p>     In BoF’s latest white paper, in partnership with TikTok, brand and marketing executives, independent analysts and TikTok business leaders share their insights on the best practices to acquire and engage audiences by honing platform-relevant brand, product and paid marketing strategies, with examples from Coach, E.l.f. Beauty, Marc Jacobs and many more.</p>
                                </div>
                            </div>
                            <div className='marketing_cards'>
                                <div className='marketing_img'>
                                    <img src={card1} alt='photo' />
                                </div>
                                <div className='marketing_discription'>
                                    <h5>Leveraging TikTok for Brand and Sales Success</h5>
                                    <p>     In BoF’s latest white paper, in partnership with TikTok, brand and marketing executives, independent analysts and TikTok business leaders share their insights on the best practices to acquire and engage audiences by honing platform-relevant brand, product and paid marketing strategies, with examples from Coach, E.l.f. Beauty, Marc Jacobs and many more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='marketing_btn'>
                    <button>VIEW MORE</button>
                </div>


                <div className='blrder'></div>
            </div>

        </div>
    )
}
