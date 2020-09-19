import React from 'react';
import {
    FacebookIcon,
    TwitterIcon,
    RedditIcon,
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton
} from "react-share";

const SocialMedia = () => {
    return (
        <>
            <br/>
            <div>
                <FacebookShareButton children={<FacebookIcon size={60} round={true} />} url={'https://www.facebook.com/sharer/sharer.php?u=' + window.location} />
                <TwitterShareButton children={<TwitterIcon size={60} round={true} />} url={window.location.href} />
                <RedditShareButton children={<RedditIcon size={60} round={true} />} url={window.location.href} />
            </div>
        </>
    )
}

export default SocialMedia;