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
            <div><strong>IP Address:</strong> {ip}</div>
            <div><strong>Location:</strong> {city}, {region} {postalCode}</div>
            <div><strong>Timezone:</strong> UTC {timezone}</div>
            <div><strong>ISP:</strong> {isp}</div>
        </div>
    );
};

export default IpInfoCard;