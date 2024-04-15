import React, { useEffect, useState } from 'react';

function Album() {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/albums');
                if (!response.ok) {
                    throw new Error('Failed to fetch albums');
                }
                const data = await response.json();
                setAlbums(data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);

        };

        fetchData();
    }, []);

    return (
        <>
            {isLoading && <p>Loading albums</p>}
            {error && <p>{error}</p>}
            {!isLoading && !error && (
                <ul>
                    {albums.map(album => (
                        <li key={album.id}>{album.title}</li>
                    ))}
                </ul>
            )}
        </>
    );


}

export default Album;