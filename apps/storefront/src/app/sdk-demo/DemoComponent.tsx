'use client'
import React from 'react';
import { zerowrap } from '@smartacct';

function DemoComponent(): React.ReactElement {

    console.log('zerowrap', zerowrap.sum(1, 2));
    return (
        <div>
            <h1>Smart Account Demo</h1>
            <p>zerowrap.sum(1, 2) = {zerowrap.sum(1, 2)}</p>
        </div>
    );
}


export default DemoComponent;
