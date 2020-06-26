import React, { Fragment } from 'react';

export default function Footer() {

    return (
        <Fragment>
            <div id="footer">

                <ul class="social-networks square spin-icon">
                    <li><a href="https://www.linkedin.com/in/bertrandshao/" class="icon-linkedin">LinkedIn</a></li>
                    <li><a href="https://github.com/bertrandcodes" class="icon-github">GitHub</a></li>
                    <li><a href="https://www.facebook.com/bertrand.shao" class="icon-facebook">Facebook</a></li>
                    {/* <li><a href="https://www.instagram.com/bertrand_money/" class="icon-instagram">Instagram</a></li> */}
                    {/* <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li> */}
                    {/* <li><a href="https://twitch.tv" class="icon-twitch">Twitch</a></li> */}
                    {/* <li><a href="https://pinterest.com" class="icon-pinterest">Pinterest</a></li> */}
                    {/* <li><a href="https://vimeo.com" class="icon-vimeo">Vimeo</a></li> */}
                </ul>
                <p className="copyright">Copyright © 2020, Bertrand Shao. All Rights Reserved</p>
            </div>
        </Fragment>
    );
};