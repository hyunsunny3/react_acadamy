import { useEffect, useState } from "react";

function useFetch(fetchUrl, initData) {
    const [items, setItems] = useState([]);
    
    const fetchData = (resourceType) => {
        fetch(fetchUrl + '/' + resourceType)
        .then( res => res.json() )
        .then( res => setItems(res) )
    }

    useEffect( () => {
        fetchData(initData)
    }, [] )

    return {
        items,
        fetchData
    }
}

export default useFetch