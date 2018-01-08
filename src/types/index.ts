export interface AppState {
    restaurants: Restaurant[];
    location: {
        latitude: number;
        longitude: number;
    };
    activeFilter: String;
    currentSearch: String;
}

export interface Restaurant {
    name: string;
    review: string;
    address: string;
    otherLocations?: string;
    phone: string;
    website: string;
    latitude?: number;
    longitude?: number;
    image: string;
}