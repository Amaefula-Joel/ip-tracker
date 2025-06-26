import React from 'react';

interface Props {
    ip: string;
    isp: string;
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
}

const IpInfoCard: React.FC<Props> = ({ ip, isp, city, region, postalCode, timezone }) => {
    return (
        <div className="ip-info-card">
            <div className="grid sm:grid-cols-4 grid-cols-1 sm:py-6 py-4 bg-white rounded-xl shadow-md text-center sm:text-left gap-1">
                <div className="px-5 border-r-1 border-gray-400">
                    <strong className='text-gray-400 text-xs font-[500]'>IP ADDRESS</strong>
                    <div className="text-lg font-[500]">{ip}</div>
                </div>
                <div className="px-5 border-r-1 border-gray-400">
                    <strong className='text-gray-400 text-xs font-[500]'>LOCATION</strong>
                    <div className="text-lg font-[500]">{city}, {region} {postalCode}</div>
                </div>
                <div className="px-5 border-r-1 border-gray-400">
                    <strong className='text-gray-400 text-xs font-[500]'>TIMEZONE</strong>
                    <div className="text-lg font-[500]">UTC {timezone}</div>
                </div>
                <div className="px-4 ">
                    <strong className='text-gray-400 text-xs font-[500]'>ISP</strong>
                    <div className="text-lg font-[500]">{isp}</div>
                </div>
            </div>
        </div>
    );
};

export default IpInfoCard;