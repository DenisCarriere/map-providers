interface Provider {
    attribution: string;
    categories: string[];
    description: string;
    name: string;
    shortName: string;
    format: 'png' | 'pbf' | 'webp' | 'jpg';
    url: string;
    type: 'baselayer' | 'overlay';
    minZoom: number;
    maxZoom: number;
    required: string[];
}
interface Providers {
    digitalglobe: {
        premium: Provider;
        standard: Provider;
    }
    bing: {
        imagery: Provider;
        roads: Provider;
    }
    esri: {
        natgeo: Provider;
        ocean: Provider;
        usatopo: Provider;
        imagery: Provider;
        street: Provider;
        topo: Provider;
    }
    toporama: {
        english: Provider;
    }
    openstreetmap: {
        standard: Provider;
        hot: Provider;
        wikimedia: Provider;
        hillshade: Provider;
    }
    nrcan: {
        basemap: Provider;
    }
    [provider: string]: {
        [service: string]: Provider
  }
}
declare const providers: Providers
declare namespace providers {}
export = providers
