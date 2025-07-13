import Image from "next/image"
import Link from "next/link"
import { OneCountry } from '../../interfaces/one-country';


import './countryCard.css';

interface Props {
    country: OneCountry;
}
export const CountryCard = ( { country }: Props ) => {

    const { flags, name, population, region, capital } = country;
    
  return (
       <div className="countryCard fade-in-up mx-auto right-0 w-full md:w-70 md:mx-0">
            <div className="rounded-md overflow-hidden card">
                <div className="aspect-[4/3] w-full relative ">
                    <Link href={`country/${ name.common }`}>
                    <Image
                            src={ flags.svg }
                            width={0}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            alt={ name.official }
                            priority={true}
                        />
                    </Link>

                </div>
                <div className="flex flex-col p-6 pb-10 border-0">
                  
                   <h2 className="font-bold mb-3 text-lg">{ name.common }</h2>

                    <span >
                        <strong>Population:</strong> { population.toLocaleString() }
                    </span> 
                    <span>
                        <strong>Region:</strong> { region }
                    </span> 
                    <span>
                        <strong>Capital:</strong> { capital }
                    </span> 
                </div>
            </div>
        </div>
  )
}
