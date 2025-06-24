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

    useEffect(() => {
        const fetchIpData = async () => {
            try {
                // Step 1: Get IP
                const ipRes = await axios.get("https://api.ipify.org?format=json");
                const userIp = ipRes.data.ip;

                // Step 2: Get Location data
                const geoRes = await axios.get(`https://geo.ipify.org/api/v2/country,city`, {
                    params: {
                        apiKey: import.meta.env.VITE_IPIFY_API_KEY,
                        ipAddress: userIp
                    }
                });

                // Step 3: Set IP data
                setIpData(geoRes.data);
            } catch (err) {
                setError("Failed to fetch IP info");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchIpData();
    }, []);

    // Return the IP data, loading state, and error
    return { ipData, loading, error };
}