import React from 'react';
import githubLogo from '../images/github.svg';
import linkedInLogo from '../images/linkedin.svg';

class AppFooter extends React.Component {
    render() {
        return (
            <footer className="navbar navbar-dark fixed-bottom bg-dark">
                <span className="float-left">Amanda Tennent</span>
                <span className="float-right">
                    <a className="p-1" href="https://www.github.com/amandatennent" target="_blank" rel="noreferrer noopener">
                        <img src={githubLogo} alt="GitHub Logo" />
                    </a>
                    <a className="p-1" href="https://www.linkedin.com/in/amandatennent" target="_blank" rel="noreferrer noopener">
                        <img src={linkedInLogo} alt="LinkedIn Logo" />
                    </a>
                </span>
            </footer>
        );
    }
}

export default AppFooter;
