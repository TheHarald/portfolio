import React from 'react';
import { ReactComponent as GitHubLogo } from '../../assets/github_icon.svg';
import './link.css'

function GitHubLink({ url }) {
    return (
        <div className='link'>
            <a href={url}>
                <GitHubLogo className='link__github' />
            </a>
        </div>
    );
}

export default GitHubLink;