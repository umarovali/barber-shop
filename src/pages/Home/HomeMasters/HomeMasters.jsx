import React, { useState } from 'react';
import MastersKinds from './MatersKinds/MastersKinds';

export default function HomeMasters() {

    return (
        <section className='home_masters'>
            <div className="container">
                <h4 className='master_title'><span>O</span>ur Masters</h4>
                <center>
                    <div className="master_suptitle">Masters with sacred skill: the embodiment of ideas in works of art.</div>
                </center>

                <MastersKinds />

            </div>
        </section>
    );
}
