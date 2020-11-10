import axios from 'axios';
import _ from 'lodash';

const url = 'https://api.covid19api.com/total/country/malaysia'

export const getData = async() => {
    try {
        const res = await axios.get(url);  

        // Here i only need Confirmed, Deaths, Recovered and last time updated
        // Filter out only required data and pick only the last value
        const finalizedData = {

            confirmed: _.last(_.map(res.data, "Confirmed")),
            confirmedDaily: _.last(_.map(res.data, "Confirmed")) - _.nth(_.map(res.data, "Confirmed"), -2),

            active: _.last(_.map(res.data, "Active")),
            activeDaily: _.last(_.map(res.data, "Active")) - _.nth(_.map(res.data, "Active"), -2),
            
            death: _.last(_.map(res.data, "Deaths")),
            deathDaily: _.last(_.map(res.data, "Deaths")) - _.nth(_.map(res.data, "Deaths"), -2),
            
            recovered: _.last(_.map(res.data, "Recovered")),
            recoveredDaily: _.last(_.map(res.data, "Recovered")) - _.nth(_.map(res.data, "Recovered"), -2),

            dateLastUpdated: _.last(_.map(res.data, "Date")),
        }
        return finalizedData;

    } catch (error) {
        alert(error);
    }
}

// temp comment
// export const getHighChartData = async() => {
//     try {
//         const res = await axios.get(url);

//         // Data to feed into HighCharts usage
//         const finalizedChartData = {
//             confirmed: _.map(res.data, "Confirmed"),
//             recovered: _.map(res.data, "Recovered"),
//             date: _.map(res.data, "Date")
//         }

//         return finalizedChartData

//     } catch(error){

//     }
// }