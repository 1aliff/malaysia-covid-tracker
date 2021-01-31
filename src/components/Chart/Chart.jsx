import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Grid, Typography, Button} from '@material-ui/core';
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

//  temp: coming is actually props value
function Chart(coming) {
    const classes = useStyles();
    
    const [displayChart, setDisplayChart] = useState(false)
    const [buttonTitle, setButtonTitle] = useState('View in Chart')

    const { data : { recovered, confirmed, active }} = coming

    // assign data for recharts
    const chartData = [{
            recovered: recovered, 
            confirmed: confirmed, 
            active: active 
    }];

    function handleClick() {
        setDisplayChart(!displayChart)
        !displayChart ? setButtonTitle('Close chart') : setButtonTitle('View in Chart')
    }

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Button variant="contained" color="primary" onClick={handleClick}>{buttonTitle}</Button>
            </Grid>

            { displayChart ? 
                <Grid container justify="center">
                    <Grid item xs={12} sm={6}>
                    <br /><br />
                    <Typography variant="h5" align="center">Current Malaysia Covid 19 Cases</Typography>
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
                </Grid> : null 
            }
        </div>
    )
}

export default Chart