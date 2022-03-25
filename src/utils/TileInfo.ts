import TileInfo from "@arcgis/core/layers/support/TileInfo";
import { DEFAULT_LEVEL_OF_DETAILS } from "../constants/BasemapConstant";

export const createTileInfo = (): TileInfo => {
	const defaultLodLevels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
	// 1. Get 'lods' - Level of details
	const lods = [];
	for (let i = 0; i < defaultLodLevels.length; i += 1) {
		const level = defaultLodLevels[i];
		lods.push(DEFAULT_LEVEL_OF_DETAILS[level]);
	}
  
	// 2. Initialise TileInfo
	return new TileInfo({
		lods,
		format: 'png',
		size: [256, 256],
		dpi: 96,
		origin: { x: -20037508.342787, y: 20037508.342787 },
		spatialReference: { wkid: 3857 },
	});
};