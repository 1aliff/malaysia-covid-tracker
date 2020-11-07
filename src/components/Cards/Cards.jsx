import { 
    Grid,
    Card,
    CardContent,
    Typography
 } from '@material-ui/core';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { makeStyles } from '@material-ui/core/styles';

import CountUp from 'react-countup';
import moment from 'moment'

// styling
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

const div = {
    newCase : {
        display: 'flex',
        alignItems: 'baseline'
    }
}
const caseColor = {
    confirmed: {
        color: '#5B8FF8'
    },
    active: {
        color: '#ff0000',
    },
    recovered: {
        color: '#339933'
    },
    death: {
        color: '#3d3d5c'
    },
    activeDaily: {
        marginTop: '0px',
        fontSize: '11pt'
    }
}

const cardColor = {
    confirmed: {
        boxShadow: '2px 2px 5px #5B8FF8'
    },
    active : {
        boxShadow: '2px 2px 5px #ff0000'
    },
    recovered: {
        boxShadow: '2px 2px 5px #339933'
    },
    death: {
        boxShadow: '2px 2px 5px #3d3d5c'
    }
}

function Cards(props) {
    const classes = useStyles();
    // console.log('what is props: ', props.data)
    
    if(!props.data.confirmed) {
        return "We are getting data.."
    }

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        {/* confirmed case cards */}
            <Grid item xs>
                <Card className={classes.root} style={cardColor.confirmed}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom> Confirmed </Typography>
                        <Typography variant="h4" component="h2" style={caseColor.confirmed}>
                            <CountUp 
                                start={0}
                                end={props.data.confirmed}
                                duration={2.5}
                                separator=","
                            />
                        { props.data.confirmedDaily >= 0 ? <div style={div.newCase}><ArrowDropUpIcon /> <p style={caseColor.activeDaily}> {props.data.confirmedDaily}</p></div>: "" }
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Last updated: {moment(props.data.dateLastUpdated).format("DD/MM/YYYY hh:mm")}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p"> Number of confirmed cases as of today. <br /></Typography>
                    </CardContent>
                </Card>

            </Grid>
        
        {/* active case cards */}
        <Grid item xs>
                <Card style={cardColor.active}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom> Active </Typography>
                            <Typography variant="h4" component="h2" style={caseColor.active}>
                                <CountUp 
                                    start={0}
                                    end={props.data.active}
                                    duration={2.5}
                                    separator=","
                            />
                            { props.data.activeDaily >= 0 ? <div style={div.newCase}><ArrowDropUpIcon /> <p style={caseColor.activeDaily}> {props.data.activeDaily}</p></div>: "" }
                            </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Last updated: {moment(props.data.dateLastUpdated).format("DD/MM/YYYY hh:mm")}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p"> Number of active cases for today. <br /></Typography>
                    </CardContent>
                </Card>
            </Grid>

        {/* recovered case cards */}
            <Grid item xs>
                <Card className={classes.root} style={cardColor.recovered}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant="h4" component="h2" style={caseColor.recovered}>
                            <CountUp 
                                start={0}
                                end={props.data.recovered}
                                duration={2.5}
                                separator=","
                            />
                        { props.data.recoveredDaily >= 0 ? <div style={div.newCase}><ArrowDropUpIcon /> <p style={caseColor.activeDaily}> {props.data.recoveredDaily}</p></div>: "" }
                        </Typography>
                        <Typography variant="subtitle2"color="textSecondary">
                            Last updated: {moment(props.data.dateLastUpdated).format("DD/MM/YYYY hh:mm")}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p"> Number of recovered cases for today. <br /></Typography>
                    </CardContent>
                </Card>
            </Grid>

        {/* death case cards */}
            <Grid item xs>
                <Card className={classes.root} style={cardColor.death}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom> Death </Typography>
                        <Typography variant="h4" component="h2" style={caseColor.death}>
                            <CountUp 
                                start={0}
                                end={props.data.death}
                                duration={2.5}
                                separator=","
                            />
                        { props.data.deathDaily >= 0 ? <div style={div.newCase}><ArrowDropUpIcon /> <p style={caseColor.activeDaily}> {props.data.deathDaily}</p></div>: "" }
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Last updated: {moment(props.data.dateLastUpdated).format("DD/MM/YYYY hh:mm")}
                        </Typography>
                        <br />
                        <Typography variant="body2" component="p"> Number of death cases for today. <br /></Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <br />
        <br />
    </div>
    )
}

export default Cards;