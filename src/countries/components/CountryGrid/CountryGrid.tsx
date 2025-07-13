import { CountryCard, OneCountry } from '@/countries';


interface Props {
  countries: OneCountry[];
}
export const CountryGrid = ( { countries }: Props ) => {

  return (
     <div className="flex flex-wrap gap-10 items-center justify-between">
        {
          countries.map( (country) => ( 
            <CountryCard key={ country.name.official } country={ country } />
          ))
        }

      </div>
  )
}
