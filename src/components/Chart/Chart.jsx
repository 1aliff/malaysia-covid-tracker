import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Chart(props) {
    const classes = useStyles();

    const { data : { recovered, confirmed, active }} = props

    const chartData = [
        {name: 'Confirmed vs Recovered vs Active', recovered: recovered, confirmed: confirmed, active: active },
    ];

    return (
        <div className={classes.root}>   
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <BarChart width={800} height={450} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="confirmed" fill="#5B8FF8" />
                    <Bar dataKey="recovered" fill="#339933" />
                    <Bar dataKey="active" fill="#ff0000" />
                    </BarChart>
                </Grid>
            </Grid>
        </div>
    )
}

export default Chart