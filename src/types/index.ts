export interface AppState {
    restaurants: Restaurant[];
    location: LatLong | null;
    activeFilter: string;
    currentSearch: string;
}

export interface LatLong {
    latitude: number;
    longitude: number;
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

export interface ControlledInput {
    value: string;
    onChange?: (Function);
    name?: string;
    placeholder?: string;
}