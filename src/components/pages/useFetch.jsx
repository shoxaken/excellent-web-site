import { useEffect, useState } from "react"


export const useFetch = (url, method = "GET") => {
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)
    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
    }

    useEffect(() => {
        const fetchReq = async (fetchOptions) => {
            try {
                setIsPending(true)
                const fetchApi = await fetch(url , {...fetchOptions})
                if (!fetchApi.ok) {
                    throw new Error(fetchApi.statusText)
                }
                const res = await fetchApi.json()
                setIsPending(false)
                setData(res)
            } catch (err) {
                setError(err)
            }
        }
        if(method == "GET"){
            fetchReq()
        }
        if(method == "POST"){
            fetchReq(options)
        }
        fetchReq()
    }, [url , method , options])
    return { data, isPending, error ,postData }
}