import React, { useState } from 'react';
import IpInfoCard from '../components/IpInfoCard';
import MapView from '../components/MapView';

import patternDesktopBg from './pattern-bg-desktop.png';
import patternMobilepBg from './pattern-bg-mobile.png';

const mockIpData = {
    ip: "192.168.1.1",
    isp: "Mock ISP",
    location: {
        city: "Mock City",
        region: "Mock Region",
        postalCode: "12345",
        timezone: "+00:00",
        lat: 37.7749,
        lng: -122.4194,
    }
};

export const IpTrackerPlayground = () => {
    const [query, setQuery] = useState('');
    const [ipData, setIpData] = useState(mockIpData);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Optionally update mock data based on query
        setIpData({ ...mockIpData, ip: query || mockIpData.ip });
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
                        <button type="submit" className='bg-[black] text-white text-sm px-5 py-3.5 rounded-r-xl cursor-pointer hover:bg-gray-800'><span className='fa fa-chevron-right'></span></button>
                    </form>
                </div>

                {/* Ip card */}
                <div className='mt-7'>
                    <IpInfoCard
                        ip={ipData.ip}
                        isp={ipData.isp}
                        city={ipData.location.city}
                        region={ipData.location.region}
                        postalCode={ipData.location.postalCode}
                        timezone={ipData.location.timezone}
                    />
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
                <MapView lat={ipData.location.lat} lng={ipData.location.lng} />
            </div>

        </main>
    );
};

export default IpTrackerPlayground;