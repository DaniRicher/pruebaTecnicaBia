'use client';

import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export const ButtonBack = () => {

    const router = useRouter();

  return (
    <button
      onClick={ () => router.back() }
      className="flex items-center bg-white rounded px-10 py-2 shadow w-40 cursor-pointer"
    >
      <FontAwesomeIcon icon={ faBackward } className="mr-4" />
      Back
    </button>
  )
}
