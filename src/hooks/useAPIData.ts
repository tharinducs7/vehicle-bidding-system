import { useState, useEffect } from 'react';

export function useApiData(apiUrl: string) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err: any) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [apiUrl]);

    return { data, isLoading, error };
}