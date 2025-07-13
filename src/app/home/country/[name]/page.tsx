import { ButtonBack } from "@/components";
import { Country } from "@/countries";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ name: string }>;
}

const getCountry = async(name: string): Promise<Country> => {
  try {
    const country = await fetch(`https://restcountries.com/v3.1/name/${ name }`, {
      cache: 'force-cache'
    }).then( resp => resp.json());

    return country[0];
    
  } catch (error) {
    notFound();
  }
}

export default async function CountryPage({ params }: Props) {

  const { name } = await params;
  const country = await getCountry(name);


  return (
    <div className="details fade-in md:p-5 p-0 flex flex-col justify-start text-start">
      <ButtonBack />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-20 items-center">

        <div className="flex">
          <Image 
            src={ country.flags.svg }
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            alt={ country.name.official }
            priority
          />
        
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-5">{ country.name.official }</h1>

          <div className="flex flex-row flex-wrap md:gap-15 gap-10">
            <div className="flex flex-col gap-2">
              <span><strong>Native Name:</strong> { Object.values(country.name.nativeName).map(c => c.official).join(', ') }</span>
              <span><strong>Population:</strong> { country.population.toLocaleString() }</span>
              <span><strong>Region:</strong> { country.region }</span>
              <span><strong>Sub Region:</strong> { country.subregion }</span>
              <span><strong>Capital:</strong> { country.capital }</span>
            </div>
            <div className="flex flex-col gap-2">
              <span><strong>Currencies:</strong> { Object.values(country.currencies).map(c => c.name).join(', ') }</span>
              <span><strong>Languages:</strong> { Object.values(country.languages).join(', ') }</span>
            </div>
          </div>

          <div className="flex mt-10">
            <div className="flex items-center flex-wrap">
              <span className="mr-5 mb-5"><strong>Border Countries: </strong></span>
              <div className="gap-2 flex mb-5">
                { country.borders && country.borders.length > 0 
                ? (
                    country.borders.map(border => (
                      <label
                        key={border}
                        className="rounded px-6 py-1 shadow text-sm"
                      >
                        {border}
                      </label>
                    ))
                  ) 
                  : (
                    <span>No border countries</span>
                  )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}