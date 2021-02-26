import React from 'react';
import EastView from './css/images/eastview.png'
import BYG from './css/images/byg.png'

const Sponsors = () => {

    return(
        <section className="sponsors">
            <h2 className="sponsors__title">Organized by:</h2>
            <div className="sponsors__content container">
                <div className="sponsors__img">
                    <a className="sponsors__link" rel="noreferrer" target="_blank" href="https://eastviewcentre.com/">
                        <img  src={EastView} alt="eastview logo"/>
                    </a>
                </div>
                <div className="sponsors__img">
                    <a className="sponsors__link" rel="noreferrer" target="_blank" href="https://www.bgccan.com/en/">
                        <img  src={BYG} alt="boys and girls of Canada logo"/>
                    </a>
                </div>
                
            </div>
        </section>
    );
}

export default Sponsors;