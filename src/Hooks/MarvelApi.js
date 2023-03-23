import axios from "axios";
import { useEffect, useState } from "react";


export function MarvelApi(RequestParam) {
    var URL = "http://gateway.marvel.com/"
    var ts = "1"
    var publicKey = "7cbe8b76645a6b9fbcf16a43b5bd85a9"
    var md5Value = "9918927a30eb19a9f248ab8ca51619c4"
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [hasLoadedRequest, setHasLoadedRequest] = useState(false)
    var URL_RESQUEST = `${URL}${RequestParam}ts=${ts}&apikey=${publicKey}&hash=${md5Value}`
    useEffect(() => {
        setHasLoadedRequest(false)
        axios.get(URL_RESQUEST)
            .then((ResponseData) => {
                setData(ResponseData.data.data.results)
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setHasLoaded(true)                
                setHasLoadedRequest(true)
            })
    }, [URL_RESQUEST])
    return { data, error, hasLoaded, hasLoadedRequest }
}
