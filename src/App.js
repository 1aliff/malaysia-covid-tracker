import React from 'react';

import { getData, getHighChartData } from './api'

import Header from './components/Header/Header.jsx';
import Cards from './components/Cards/Cards.jsx';
import Chart from './components/Chart/Chart.jsx';

class App extends React.Component {
    state = {
        cardData: [],
        chartData : [],
    }

// getting data from API index.js
async componentDidMount() {
    const finalizedData = await getData();
    this.setState({ cardData: finalizedData })

    const finalizedChartData = await getHighChartData();
    this.setState({ chartData : finalizedChartData })
}

render() {
    const { cardData, chartData } = this.state;

        return (
            <>
                <Header />
                <Cards 
                    data={cardData}
                />
                <Chart 
                    data={cardData}
                />
            </>
        )
    }
}

export default App;