
import React, { useState, useEffect } from 'react'
import { Header, Cards, Charts } from './components/index'
import { getData } from './api'

const App = () => {
    const [data, setData] = useState();
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getData();
        setData(result);
    }

    return (
        <>
            <Header />
            <Cards data={data} />
            <Charts data={data} />
        </>
    )
}

export default App
