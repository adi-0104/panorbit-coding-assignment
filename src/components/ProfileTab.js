import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import MapComponent from "./MapComponent";
import "./ProfileTab.css";

const ProfileTab = ({ userData }) => {
  return (
    <Grid container spacing={1} sx={{ mt: 0.8 }}>
      <Grid item xs={12} sm={12} md={5}>
        <Box className="left-section">
          <Box className="personal-details">
            <Box className="display-center">
              <Avatar sx={{ width: 160, height: 160, mb: 1 }} />
              <p className="section-title">{userData.name}</p>
            </Box>
            <Box>
              <Box className="item-box">
                <label className="item-label">UserName :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.username}
                </span>
              </Box>
              <Box className="item-box">
                <label className="item-label">e-mail :</label>
                <span className="item">{userData.email}</span>
              </Box>
              <Box className="item-box">
                <label className="item-label">Phone :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.phone}
                </span>
              </Box>
              <Box className="item-box">
                <label className="item-label">Website :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.website}
                </span>
              </Box>
            </Box>
          </Box>
          <Box className="company-details">
            <Box className="display-center">
              <span className="section-title">Company</span>
            </Box>
            <Box>
              <Box className="item-box">
                <label className="item-label">Name :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.company.name}
                </span>
              </Box>
              <Box className="item-box">
                <label className="item-label">catchphrase :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.company.catchPhrase}
                </span>
              </Box>
              <Box className="item-box">
                <label className="item-label">bs :</label>
                <span
                  className="item"
                  variant="span"
                  sx={{ px: 1, fontSize: 20 }}
                >
                  {userData.company.bs}
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={7}>
        <Box className="address-details">
          <Box className="display-left">
            <span className="section-title">Address:</span>
          </Box>
          <Box className="address-items">
            <Box className="item-box-address">
              <label className="item-label">Street :</label>
              <span className="item">{userData.address.street}</span>
            </Box>
            <Box className="item-box-address">
              <label className="item-label">Suite :</label>
              <span className="item">{userData.address.suite}</span>
            </Box>
            <Box className="item-box-address">
              <label className="item-label">City :</label>
              <span className="item">{userData.address.city}</span>
            </Box>
            <Box className="item-box-address">
              <label className="item-label">Zipcode :</label>
              <span className="item">{userData.address.zipcode}</span>
            </Box>
          </Box>
          <Box className="map-wrapper">
            <MapComponent coordinates={userData.address.geo} />
          </Box>
          <Box className="map-geostats">
            <label className="geo-label">Lat:</label>
            <span className="geo-value">{userData.address.geo.lat}</span>
            <label className="geo-label">Long:</label>
            <span className="geo-value">{userData.address.geo.lng}</span>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileTab;
