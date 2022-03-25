import { useCallback, useLayoutEffect, useState } from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Home from '@arcgis/core/widgets/Home';
import { makeStyles } from '@mui/styles';
import getBasemaps from '../utils/Basemaps';
import BasemapPanel from './BasemapPanel';
import '../css/mapView.css';

const useStyles = makeStyles(() => ({
  mapContainer: {
    zIndex: 0,
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
  }
}));

const initMapView = () => {
	const basemaps = getBasemaps();
	const map = new Map({
		basemap: Object.values(basemaps)[0],
	});

	return new MapView({
		map,
		container: 'viewDiv',
		center: [103.840, 1.340], // longitude, latitude
		spatialReference: { wkid: 3857 },
		zoom: 12,
		// NOTE: Very important to have constraints, else map won't load properly
		// Check tile level property for minimum tile
		constraints: {
			maxZoom: 18,
			minZoom: 11,
		},
	});
};

const addWidgetsToScreen = (mapView: MapView) => {
    mapView.when(() => {
			// Remove 'Powered by Esri' attribution component at the bottom
      mapView.ui.remove('attribution');

			const homeWidget = new Home({
					view: mapView
			});
			mapView.ui.add(homeWidget, 'top-left');
    });
};

const MapViewContainer: React.FC = () => {
	const classes = useStyles();
	const [mapView, setMapView] = useState<MapView | undefined>(undefined);
	const initMapComponent = useCallback(() => {
		const mapView = initMapView();
		addWidgetsToScreen(mapView);
		setMapView(mapView);
	}, []);

	useLayoutEffect(() => {
    initMapComponent();
  }, [initMapComponent]);

	return (
		<div id='viewDiv' className={classes.mapContainer}>
			{ mapView && <BasemapPanel mapView={mapView} /> }
		</div>
	)
};

export default MapViewContainer;
