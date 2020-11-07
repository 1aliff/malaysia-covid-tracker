import Typography from '@material-ui/core/Typography';

const style = {
    Header : {
        width: '100%',
        textAlign: 'center'
    }
}
function Header(props) {
    return (
        <div style={style.Header}>
            <Typography variant="h3">
                <img src="https://cdn.countryflags.com/thumbs/malaysia/flag-round-500.png" alt="Malaysia Flag" width="40" height="40"/>
                &nbsp; Malaysia Covid-19 Tracker
            </Typography>
            <br /><br />
        </div>
    )
}

export default Header;