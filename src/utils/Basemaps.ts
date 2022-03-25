import Basemap from "@arcgis/core/Basemap";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import { BASEMAPS } from "../constants/BasemapConstant";
import { BASEMAP_ICONS } from "./IconManager";
// import { createTileInfo } from "./TileInfo";

const createWebTileLayer = (id: string, type: 'Default' | 'Night' | 'Grey') => new WebTileLayer({
	id,
	urlTemplate: `https://maps-a.onemap.sg/v3/${type}/{level}/{col}/{row}.png`,
})

interface BasemapProps {
	[key: string]: Basemap;
}

const getBasemaps = () => {
	const basemaps: BasemapProps = {};
	// Default basemap
	const mapBaseLayer = new WebTileLayer({
		id: BASEMAPS.ONLINE_BASEMAP_DEFAULT,
		urlTemplate: "https://maps-a.onemap.sg/v3/Default/{level}/{col}/{row}.png",
		// subDomains: ["a", "b", "c"],
		// tileInfo: createTileInfo(),
		// copyright: "hello",
	});

	basemaps[BASEMAPS.ONLINE_BASEMAP_DEFAULT] = new Basemap({
		id: BASEMAPS.ONLINE_BASEMAP_DEFAULT,
		title: BASEMAPS.ONLINE_BASEMAP_DEFAULT,
		baseLayers: [createWebTileLayer(BASEMAPS.ONLINE_BASEMAP_DEFAULT, 'Default')],
		thumbnailUrl: BASEMAP_ICONS.STREET,
	});
	
	// SATELLITE basemap
	basemaps[BASEMAPS.ONLINE_BASEMAP_NIGHT] = new Basemap({
		id: BASEMAPS.ONLINE_BASEMAP_NIGHT,
		title: BASEMAPS.ONLINE_BASEMAP_NIGHT,
		baseLayers: [createWebTileLayer(BASEMAPS.ONLINE_BASEMAP_NIGHT, 'Night')],
		thumbnailUrl: BASEMAP_ICONS.NIGHT,
	});

	// DARK basemap
	basemaps[BASEMAPS.ONLINE_BASEMAP_GREY] = new Basemap({
		id: BASEMAPS.ONLINE_BASEMAP_GREY,
		title: BASEMAPS.ONLINE_BASEMAP_GREY,
		baseLayers: [createWebTileLayer(BASEMAPS.ONLINE_BASEMAP_GREY, 'Grey')],
		thumbnailUrl: BASEMAP_ICONS.GREY,
	});

	return basemaps;
};

export default getBasemaps;
