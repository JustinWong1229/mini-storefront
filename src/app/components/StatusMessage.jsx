'use client';
export default function StatusMessage({ loading, error, empty}) {
    if (loading) {
        return ( 
        <p>page is loading</p>
        );
    }
    if (error) {
        return(
            <p>A error has occurred</p>
        );
    }
    if (empty) {
        return (
            <p>No products matched the filter</p>
        );
    }
    
}



