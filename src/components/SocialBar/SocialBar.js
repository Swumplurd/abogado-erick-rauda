import React from 'react'
import './SocialBar.css'
export const SocialBar = () => {
    return (
        <>
            <div className="sticky-container">
                <ul className="sticky">
                    <li> 
                        <img  src="assets/Social/facebook-circle.png" width="32" height="32"/>
                        <p><a href="https://www.facebook.com/erikrauda" target="_blank">Danos un me gusta<br/>Facebook</a></p>
                    </li>
                    <li>
                        <img src="assets/Social/twitter-circle.png" width="32" height="32"/>
                        <p><a href="https://twitter.com/Erik_Rauda" target="_blank">Sigueme en<br/>Twitter</a></p>
                    </li>
                    <li>
                        <img src="assets/Social/instagram-circle.png" width="32" height="32"/>
                        <p><a href="https://www.instagram.com/erikrauda/" target="_blank">Sigenos en<br/>Instagram</a></p>
                    </li>
                    <li>
                        <img src="assets/Social/youtube-circle.png" width="32" height="32"/>
                        <p><a href="https://www.youtube.com/user/erikrauda1" target="_blank">Siguenos en<br/>YouTube</a></p>
                    </li>
                </ul>
            </div>
        </>
    )
}
