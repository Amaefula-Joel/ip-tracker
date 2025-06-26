import React, { useState } from 'react';

import { useIpData } from '~/hooks/useIpData';
import IpInfoCard from '../components/IpInfoCard';
import MapView from '../components/MapView';

import patternDesktopBg from './pattern-bg-desktop.png';
import patternMobilepBg from './pattern-bg-mobile.png';

export const IpTracker = () => {
    const { ipData, loading, error, fetchIpData } = useIpData();
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() !== "") {
            fetchIpData(query.trim());
        }
    };

    return (
        <main className='relative'>
            <div className='max-w-[1000px] w-full mx-auto px-4 py-5 z-50 absolute top-0 left-0 right-0'>
                <h1 className='text-2xl text-center font-[500] text-white'>IP Address Tracker</h1>

                {/* search form */}
                <div className="flex justify-center max-w-[450px] mx-auto mt-5">
                    <form onSubmit={handleSearch} className="search-bar flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Search for any IP address or domain"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='grow text-sm px-5 py-3.5 rounded-l-xl bg-white focus:outline-none'
                        />
                        <button type="submit" className='bg-[black] text-white text-sm px-5 py-3.5 rounded-r-xl cursor-pointer hover:bg-gray-800'>
                            <span className='fa fa-chevron-right'></span>
                        </button>
                    </form>
                </div>

                {/* Info card */}
                <div className='mt-7'>
                    {loading && (
                        <div className="flex justify-center items-center py-6">
                            <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-white mr-3"></div>
                            <span className="text-white text-base">Loading...</span>
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow mb-4 text-center">
                            {error}
                        </div>
                    )}
                    {ipData && !loading && (
                        <IpInfoCard
                            ip={ipData.ip}
                            isp={ipData.isp}
                            city={ipData.location.city}
                            region={ipData.location.region}
                            postalCode={ipData.location.postalCode}
                            timezone={ipData.location.timezone}
                        />
                    )}
                </div>
            </div>

            <div className='relative z-10'>
                {/* pattern */}
                <img
                    src={patternDesktopBg}
                    alt="desktop pattern"
                    className="hidden sm:block w-full"
                />
                <img
                    src={patternMobilepBg}
                    alt="mobile pattern"
                    className="block sm:hidden w-full h-[250px]"
                />

                {/* Map view */}
                {ipData && !loading && (
                    <MapView lat={ipData.location.lat} lng={ipData.location.lng} />
                )}
            </div>
        </main>
    );
};

export default IpTracker;