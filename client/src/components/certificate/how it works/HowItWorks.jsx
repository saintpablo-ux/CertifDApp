import React, { Component } from 'react';

import './HowItWorks.css';

class HowItWorks extends Component {
    render () {
        return (
            <div className="how-it-works">
                <div className="title">
                    <h1>How it works..!</h1>
                </div>
                <div className="section">
                    <section>
                        <p>1 You must have Metamask
                            extension installed on your browser.
                        </p>
                    </section>
                    <section>
                        <p>2. Must be logged in to Metamask.</p>
                    </section>
                </div>
            </div>
        );
    };
}

export default HowItWorks;
