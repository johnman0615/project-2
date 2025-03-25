import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const MapView: React.FC = () => {
  // Define the center coordinates for New York City
  const center = useMemo(() => ({ lat: 40.7128, lng: -74.0060 }), []);

  // Container style for the map
  const containerStyle = {
    width: '800px',
    height: '400px'
  };

  // Load the Google Maps script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
  });

  // Show loading state while the script is loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      {/* Add a marker at the center position */}
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapView; 