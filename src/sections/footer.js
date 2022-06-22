import React, { Component } from 'react';
import '../css/ourstrap.css';
import '../css/style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="container-xxl position-relative justify-content-between">
                <div>
                    <a href="">
                        <div className="iconefooter">
                            <img src="whatsapp.png" />
                        </div>
                        <p>+55 34 99928-4080</p>
                    </a>
                </div>
                <div>
                    <p>Redes Sociais</p>
                    <a href="">
                        <div className="iconefooter">
                            <img src="instagram.png" alt="" />
                        </div>
                    </a>
                    <a href="">
                        <div className="iconefooter">
                            <img src="youtube.png" alt="" />
                        </div>
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;