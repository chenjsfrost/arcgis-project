export const BASEMAPS = {
    ONLINE_BASEMAP_DEFAULT: 'STREET',
    ONLINE_BASEMAP_NIGHT: 'NIGHT',
    ONLINE_BASEMAP_GREY: 'GREY',
  };
  
  interface LODProps {
    [key: number]: {
      level: number,
      resolution: number,
      scale: number,
    };
  }

  export const DEFAULT_LEVEL_OF_DETAILS: LODProps = {
    0: { level: 0, resolution: 156543.033928, scale: 591657527.591555 },
    1: { level: 1, resolution: 78271.5169639999, scale: 295828763.795777 },
    2: { level: 2, resolution: 39135.7584820001, scale: 147914381.897889 },
    3: { level: 3, resolution: 19567.8792409999, scale: 73957190.948944 },
    4: { level: 4, resolution: 9783.93962049996, scale: 36978595.474472 },
    5: { level: 5, resolution: 4891.96981024998, scale: 18489297.737236 },
    6: { level: 6, resolution: 2445.98490512499, scale: 9244648.868618 },
    7: { level: 7, resolution: 1222.99245256249, scale: 4622324.434309 },
    8: { level: 8, resolution: 611.49622628138, scale: 2311162.217155 },
    9: { level: 9, resolution: 305.748113140558, scale: 1155581.108577 },
    10: { level: 10, resolution: 152.874056570411, scale: 577790.554289 },
    11: { level: 11, resolution: 76.4370282850732, scale: 288895.277144 },
    12: { level: 12, resolution: 38.2185141425366, scale: 144447.638572 },
    13: { level: 13, resolution: 19.1092570712683, scale: 72223.819286 },
    14: { level: 14, resolution: 9.55462853563415, scale: 36111.909643 },
    15: { level: 15, resolution: 4.77731426794937, scale: 18055.954822 },
    16: { level: 16, resolution: 2.38865713397468, scale: 9027.977411 },
    17: { level: 17, resolution: 1.19432856685505, scale: 4513.988705 },
    18: { level: 18, resolution: 0.597164283559817, scale: 2256.994353 },
    19: { level: 19, resolution: 0.298582141647617, scale: 1128.497176 },
    20: { level: 20, resolution: 0.1492910708238085, scale: 564.248588 },
    21: { level: 21, resolution: 0.07464553541190416, scale: 282.124294 },
    22: { level: 22, resolution: 0.03732276770595208, scale: 141.062147 },
    23: { level: 23, resolution: 0.01866138385297604, scale: 70.5310735 },
  };
  