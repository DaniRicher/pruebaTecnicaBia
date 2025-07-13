'use client';

import { CountriesResponse, OneCountry } from "@/countries";
import { CountryGrid } from "@/countries/components/CountryGrid/CountryGrid";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const getCountries = async(): Promise<OneCountry[]> => {

  const data: CountriesResponse[] = await fetch(`https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translation,population,subregion,currencies,borders,languages`)
    .then (res => res.json() );

  const countries = data.map((country) => {

    const currenciesArray = Object.values(country.currencies);
    const firstCurrency = currenciesArray[0];

    return {
      flags: country.flags,
      name: country.name,
      borders: country.borders,
      population: country.population,
      subRegion: country.subregion,
      capital: country.capital[0],
      region: country.region,
      currencies: firstCurrency,
      languages: Object.values(country.languages)
    };
  });

  return countries;
}

export default function CountriesPage() {

  const [countries, setCountries] = useState<OneCountry[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {

    getCountries().then(fetchedCountries => {

      setCountries(fetchedCountries);
      const uniqueRegions = Array.from(
        new Set(
          fetchedCountries
            .map((c) => c.region)
            .filter((region) => region)
        )
      );

      setRegions(uniqueRegions);
    });


  }, []);

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = !regionFilter || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="filter flex flex-col items-center">
      <div className="flex w-full gap-4 mb-6 justify-between flex-wrap">

        <div className="search flex items-center bg-white rounded px-10 py-4 w-100 shadow">
          <FontAwesomeIcon icon={faSearch} className="mr-4" />
          <input
            type="text"
            placeholder="Search for a country..."
            value={ search }
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none flex-1"
          />
        </div>

        <div className="filterRegion flex items-center bg-white rounded px-6 py-4 w-60 shadow">
          <select
            value={ regionFilter }
            onChange={(e) => setRegionFilter(e.target.value)}
            className="rounded outline-none flex-1"
          >
            <option value="">Filter by region</option>
            { regions.map(region => (
              <option key={ region } value={ region }>{ region }</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <CountryGrid countries={ filteredCountries } />
      </div>
    </div>
  );
}