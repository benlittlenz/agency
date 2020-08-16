import React from 'react';

import Time from './Time'
import Tracking from './Tracking'
import Reporting from './Reporting'
import Paperless from './Paperless'

export default function HomeServices() {
    return (
        <>
            <Time />
            <Reporting />
            <Tracking />
            <Paperless />
        </>
    )
}