interface Provider {
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
interface Providers {
    bing: {
        imagery: Provider;
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
        cycle: Provider;
        hot: Provider;
        transport: Provider;
        wikimedia: Provider;
        lyrk: Provider;
    }
    [provider: string]: {
        [service: string]: Provider
  }
}
declare const providers: Providers
declare namespace providers {}
export = providers
