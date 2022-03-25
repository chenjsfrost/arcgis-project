import React, { useState } from 'react';
import MapView from "@arcgis/core/views/MapView";
import getBasemaps from "../utils/Basemaps";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  basemapContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  basemapBtn: {
    height: 80,
    width: 80,
    padding: 0,
    margin: 3,
    borderRadius: 7,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: '1px black solid', 
  },
  selectedBasemapBtn: {
    border: '2px red solid',
  },
  basemapIcon: {
    borderRadius: 7,
    height: '100%',
    width: '100%',
  }
}));

interface BasemapPanelProps {
  mapView: MapView;
}

const BasemapPanel = ({ mapView }: BasemapPanelProps): JSX.Element => {
	const classes = useStyles();
  const basemapList = Object.values(getBasemaps());
  const [selectedBasemap, setSelectedBasemap] = useState(basemapList[0]);

  return (
    <div className={classes.basemapContainer}>
      {
        basemapList.map((basemap) => (
          <div key={basemap.id}>
            <button 
              className={selectedBasemap.id === basemap.id
                ? `${classes.basemapBtn} ${classes.selectedBasemapBtn}` : classes.basemapBtn
              }
              onClick={() => {
                mapView.map.basemap = basemap;
                setSelectedBasemap(basemap);
              }}
            >
               <img
                src={basemap.thumbnailUrl}
                className={classes.basemapIcon}
              />
            </button>
          </div>
        ))
      }
    </div>
  )
};

export default BasemapPanel;
