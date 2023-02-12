import React from 'react';

function Footer() {
    return (
        <div className='notes-app__footer'>
            <p>Copyright &copy; {(new Date().getFullYear())} Nur Muhammad Himawan - Dicoding Academy - <a href="https://github.com/nurmuhimawann/personal-notes-app" target="_blank" rel="noreferrer">Project Repository</a></p>
        </div>
    )
}

export default Footer;