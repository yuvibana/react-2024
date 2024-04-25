import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // currency = 'usd'

    useEffect(() => {
        // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then(res => res.json())
            .then(res => setData(res[currency]))
    }, [currency])

    return data;
}

export default useCurrencyInfo