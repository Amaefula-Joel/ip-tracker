// app/components/MapView.tsx
import { useEffect, useState } from 'react';
import blackMarker from './icon-location.svg';

const MapView = ({ lat, lng }: { lat: number; lng: number }) => {
    const [MapComponent, setMapComponent] = useState<React.FC | null>(null);

    useEffect(() => {
        const loadMap = async () => {
            const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
            const L = await import('leaflet');

            const iconUrl = await import('leaflet/dist/images/marker-icon.png');
            const iconShadow = await import('leaflet/dist/images/marker-shadow.png');

            const DefaultIcon = L.icon({
                iconUrl: blackMarker,
                shadowUrl: iconShadow.default,
                iconAnchor: [12, 41],
            });

            // Set the default icon for all markers
            L.Marker.prototype.options.icon = DefaultIcon;

            const DynamicMap = () => (
                <MapContainer center={[lat, lng]} className="custom-map-container" zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={[lat, lng]}>
                        <Popup>You are here: [{lat}, {lng}]</Popup>
                    </Marker>
                </MapContainer>
            );

            setMapComponent(() => DynamicMap);
        };

        loadMap();
    }, [lat, lng]);


    return MapComponent ? <MapComponent /> : <p>Loading map...</p>;
};

export default MapView;
