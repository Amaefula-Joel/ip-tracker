import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useIpData } from '~/hooks/useIpData';

import IpInfoCard from '../components/IpInfoCard';

export const IpTracker = () => {

    const { ipData, loading, error } = useIpData();

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="ip-tracker">
            <h2>Your IP Information</h2>
            {ipData ? (
                <IpInfoCard
                    ip={ipData.ip}
                    isp={ipData.isp}
                    city={ipData.location.city}
                    region={ipData.location.region}
                    postalCode={ipData.location.postalCode}
                    timezone={ipData.location.timezone}
                />
            ) : (
                <p>No IP data available.</p>
            )}
        </div>
    );
};