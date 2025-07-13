'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

   useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)} 
      className="button rounded gap-2 px-2 py-1 flex items-center"
    >
      <FontAwesomeIcon icon={ faMoon } className="-rotate-12" size="1x" />
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
