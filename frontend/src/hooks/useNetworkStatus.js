import { useEffect } from 'react';
import toast from 'react-hot-toast';

const useNetworkStatus = () => {

    useEffect(() => {

        const updateNetworkStatus = () => {

            // navigator.onLine
            //     ? toast.success('You are back online!')
            //     : toast.error('You are offline. Please check your connection.')

            !navigator.onLine && toast.error('You are offline.\nPlease check your connection.', { duration: 5000 });
        };

        // Check initial status
        updateNetworkStatus();

        // Add event listeners for online and offline events
        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
        };

    }, []);
};

export default useNetworkStatus;
