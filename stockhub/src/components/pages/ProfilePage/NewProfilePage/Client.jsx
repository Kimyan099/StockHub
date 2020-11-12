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
    ButtonGroup,
    TextField
  } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import React, {useContext, useState} from 'react';
import { UserContext } from "../Register/UserContext"
import axios from 'axios';


const Client = (props) => {
    let profilePicture = "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190423100153-01-charlie-the-otter-file.jpg";
    const [name, setName, 
      isLoggedIn, setIsLoggedIn, 
      contextEmail, setContextEmail,
      contextAddress, setContextAddress,
      contextPhoneNumber, setContextPhoneNumber,
      contextMobileNumber, setContextMobileNumber
    ] = useContext(UserContext);

    const [phoneNumberVisibility, setPhoneNumberVisibility] = useState("none")
    const [phoneNumber, setPhoneNumber] = useState(contextPhoneNumber)

    const [mobileNumberVisibility, setMobileNumberVisibility] = useState("none")
    const [mobileNumber, setMobileNumber] = useState(contextMobileNumber)

    const [addressVisibility, setAddressVisibility] = useState("none")
    const [address, setAddress] = useState(contextAddress)

//Phone number
const savePhoneNumberData = () =>{
  changePhoneNumberVisibility()
  setContextPhoneNumber(phoneNumber);
  axios.post('http://localhost:8080/active/set-phone-number', null, {params: {phoneNumber}})
}

const cancelPhoneNumberSave = () => {
  changePhoneNumberVisibility()
  setPhoneNumber(contextPhoneNumber)
}

const changePhoneNumberVisibility = () => {
  phoneNumberVisibility === "inline" ? setPhoneNumberVisibility("none") : setPhoneNumberVisibility("inline");
}

//Mobile number
const saveMobileNumberData = () =>{
  changeMobileNumberVisibility()
  setContextMobileNumber(mobileNumber);
  axios.post('http://localhost:8080/active/set-mobile-number', null, {params: {mobileNumber}})
}

const cancelMobileNumberSave = () => {
  changeMobileNumberVisibility()
  setMobileNumber(contextMobileNumber)
}

const changeMobileNumberVisibility = () => {
  mobileNumberVisibility === "inline" ? setMobileNumberVisibility("none") : setMobileNumberVisibility("inline");
}

// Address
const saveAddressData = () =>{
  changeAddressVisibility()
  setContextAddress(address);
  axios.post('http://localhost:8080/active/set-address', null, {params: {address}})
}

const cancelAddressSave = () => {
  changeAddressVisibility()
  setAddress(contextAddress)
}

const changeAddressVisibility = () => {
  addressVisibility === "inline" ? setAddressVisibility("none") : setAddressVisibility("inline");
}

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
                  secondary={contextPhoneNumber}
                />

                <TextField value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} style={{display:phoneNumberVisibility}}/>
                <Button onClick={savePhoneNumberData} style={{display:phoneNumberVisibility}}>Save</Button>
                <Button onClick={cancelPhoneNumberSave} style={{display:phoneNumberVisibility}}>Cancel</Button>
                <EditIcon onClick={changePhoneNumberVisibility} style={{display:phoneNumberVisibility === "inline" ? "none" : "inline"}}/>

              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Mobile number"
                  secondary={contextMobileNumber}/>

                <TextField value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} style={{display:mobileNumberVisibility}}/>
                <Button onClick={saveMobileNumberData} style={{display:mobileNumberVisibility}}>Save</Button>
                <Button onClick={cancelMobileNumberSave} style={{display:mobileNumberVisibility}}>Cancel</Button>
                <EditIcon onClick={changeMobileNumberVisibility} style={{display:mobileNumberVisibility === "inline" ? "none" : "inline"}}/>

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
                  secondary={contextAddress}
                />

                <TextField value={address} onChange={e => setAddress(e.target.value)} style={{display:addressVisibility}}/>
                <Button onClick={saveAddressData} style={{display:addressVisibility}}>Save</Button>
                <Button onClick={cancelAddressSave} style={{display:addressVisibility}}>Cancel</Button>
                <EditIcon onClick={changeAddressVisibility} style={{display:addressVisibility === "inline" ? "none" : "inline"}}/>

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