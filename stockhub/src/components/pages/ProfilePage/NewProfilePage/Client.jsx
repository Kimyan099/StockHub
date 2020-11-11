import {
    Typography,
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    ButtonGroup
  } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React, {useContext} from 'react';
import { UserContext } from "../Register/UserContext"


const Client = (props) => {
    let profilePicture = "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190423100153-01-charlie-the-otter-file.jpg";
    const [name, setName, isLoggedIn, setIsLoggedIn, contextEmail, setContextEmail ] = useContext(UserContext);


    return (
        <div className="User">
        <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
          <div><Avatar src={profilePicture} alt="Gajdos Tamás" style={{width: '100px', height:'100px' , marginRight: 10, display: 'inline-block', verticalAlign: 'middle'}}/></div>
          <div>
            <Typography variant="h4" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              1993.02.28
            </Typography>
          </div>
          <div style={{position: 'absolute', right: 30}}>
            <ButtonGroup
              variant="contained"
              aria-label="full-width contained primary button group"
            >
              <Button style={{color:"#fff", backgroundColor:"#1c2237"}}>Message</Button>
              <Button style={{color:"#fff", backgroundColor:"#1c2237"}}>Friend</Button>
              <Button style={{color:"#fff", backgroundColor:"#1c2237"}}>Follow</Button>
            </ButtonGroup>
          </div>
        </div>
        <Divider />
        <Typography variant="h5" component="h2" style={{margin: '20px'}}>
          Contact info
        </Typography>
        <Divider style={{margin: '0 20px'}} />
        <Grid container spacing={2}>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Phone number"
                  secondary="+36305451518"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Mobile number"
                  secondary="+36305451518"
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary="Dorozsmai utca 211"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Email address"
                  secondary={contextEmail}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
    </div>
    );

}

export default Client;