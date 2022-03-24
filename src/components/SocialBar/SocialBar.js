import React from 'react'
import './SocialBar.css'
export const SocialBar = () => {
    return (
        <>
            <div className="sticky-container">
                <ul className="sticky">
                    <li className='shadow'> 
                        <a href="https://www.facebook.com/erikrauda" target="_blank" rel="noreferrer">
                            <img  src="assets/Social/facebook-circle.png" width="32" height="32" alt='...'/>
                            <p>Danos un me gusta<br/>Facebook</p>
                        </a>
                    </li>
                    <li className='shadow'>
                        <a href="https://twitter.com/Erik_Rauda" target="_blank" rel="noreferrer">
                            <img src="assets/Social/twitter-circle.png" width="32" height="32" alt='...'/>
                            <p>Sigueme en<br/>Twitter</p>
                        </a>
                    </li>
                    <li className='shadow'>
                        <a href="https://www.instagram.com/erikrauda/" target="_blank" rel="noreferrer">
                            <img src="assets/Social/instagram-circle.png" width="32" height="32" alt='...'/>
                            <p>Sigenos en<br/>Instagram</p>
                        </a>
                    </li>
                    <li className='shadow'>
                        <a href="https://www.youtube.com/user/erikrauda1" target="_blank" rel="noreferrer">
                            <img src="assets/Social/youtube-circle.png" width="32" height="32" alt='...'/>
                            <p>Siguenos en<br/>YouTube</p>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
