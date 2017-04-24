export interface Provider {
    attribution: string;
    categories: string[];
    description: string;
    name: string;
    format: 'png' | 'pbf' | 'webp' | 'jpg';
    url: string;
    type: 'baselayer' | 'overlay';
    minZoom: number;
    maxZoom: number;
}

/**
 * Bing
 */
export declare const bing: {
    imagery: Provider;
}

/**
 * ESRI Basemaps
 */
export declare const esri: {
    natgeo: Provider;
    ocean: Provider;
    usatopo: Provider;
    imagery: Provider;
    street: Provider;
    topo: Provider;
}

/**
 * Toporama
 */
export declare const toporama: {
    english: Provider;
}

/**
 * OpenStreetMap
 */
export declare const openstreetmap: {
    standard: Provider;
    cycle: Provider;
    hot: Provider;
    transport: Provider;
    wikimedia: Provider;
    lyrk: Provider;
}
