import { Currency, Flags, Name, Region } from "./countries-response";

export interface OneCountry {
    name: Name;
    flags: Flags;
    borders: string[];
    population: number;
    subRegion: string;
    capital: string;
    region: Region;
    currencies: Currency;
    languages: string[];
}