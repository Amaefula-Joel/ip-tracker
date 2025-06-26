import { useEffect, useState } from "react";
import axios from "axios";

interface IpData {
    ip: string;
    isp: string;
    location: {
        city: string;
        region: string;
        postalCode: string;
        timezone: string;
        lat: number;
        lng: number;
    };
}

export const useIpData = () => {
    const [ipData, setIpData] = useState<IpData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchIpData = async (ipOrDomain?: string) => {
        try {
            setLoading(true);
            setError(null);

            // If an IP or domain is provided, use it; otherwise, fetch the user's IP
            let ip = ipOrDomain;

            if (!ip) {
                const ipRes = await axios.get("https://api.ipify.org?format=json");
                ip = ipRes.data.ip;
            }

            const isIp = (value: string) =>
                /^(\d{1,3}\.){3}\d{1,3}$/.test(value) || // IPv4
                /^[a-fA-F0-9:]+$/.test(value);           // IPv6 (simple check)

            // Fetch location data using the IP or domain
            const geoRes = await axios.get(`https://geo.ipify.org/api/v2/country,city`, {
                params: {
                    apiKey: import.meta.env.VITE_IPIFY_API_KEY,
                    ipAddress: ipOrDomain && isIp(ipOrDomain) ? ipOrDomain : undefined,
                    domain: ipOrDomain && !isIp(ipOrDomain) ? ipOrDomain : undefined
                }
            });

            // Set the fetched IP data
            setIpData(geoRes.data);

        } catch (err) {
            setError("Could not retrieve data for this input.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch on first load
        fetchIpData();
    }, []);

    // Return the IP data, loading state, and error
    return { ipData, loading, error, fetchIpData };
}