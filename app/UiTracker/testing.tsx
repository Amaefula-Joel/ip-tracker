import React, { useState } from 'react';

import { useIpData } from '~/hooks/useIpData';
import IpInfoCard from '../components/IpInfoCard';
import MapView from '../components/MapView';

export const UiTracker = () => {

    const { ipData, loading, error, fetchIpData } = useIpData();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() !== "") {
            fetchIpData(query.trim());
        }
    };


    return (
        <main>
            <form onSubmit={handleSearch} className="search-bar">
                <input
                    type="text"
                    placeholder="Search for any IP address or domain"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">→</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {ipData && !loading && (
                <>
                    <IpInfoCard
                        ip={ipData.ip}
                        isp={ipData.isp}
                        city={ipData.location.city}
                        region={ipData.location.region}
                        postalCode={ipData.location.postalCode}
                        timezone={ipData.location.timezone}
                    />


                    <MapView lat={ipData.location.lat} lng={ipData.location.lng} />
                </>
            )}


            {/* {ipData && !loading && (
                <>
                    <IpInfoCard
                        ip={ipData.ip}
                        isp={ipData.isp}
                        city={ipData.location.city}
                        region={ipData.location.region}
                        postalCode={ipData.location.postalCode}
                        timezone={ipData.location.timezone}
                    />
                    <MapView lat={ipData.location.lat} lng={ipData.location.lng} />
                </>
            )} */}

        </main>
    )
};