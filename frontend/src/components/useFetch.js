import {useEffect, useState} from "react";


function useFetch(url) {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("Could not get data or does not exist")
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsPending(false);
                setError(null);

            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log("fetch aborted")
                }
                setError(error.message)
                console.log(error.message);
                setIsPending(false);
            })
        // catches network error
        console.log("use effect ran")

        return () => abortController.abort();


    }, [url]);//only renders for these dependencies


    return {data, isPending, error}



}

export default useFetch;