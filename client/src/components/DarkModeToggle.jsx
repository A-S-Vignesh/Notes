import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize state from localStorage
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      id="dark-mode-toggle"
      className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-medium text-xs text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
      onClick={toggleDarkMode}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"
          clipRule="evenodd"
        />
        <path
          d="M17.778 8.232a1 1 0 0 1-1.414-1.414L12 11.586l-4.364-4.364a1 1 0 1 1 1.414-1.414L16 10.172V3a1 1 0 1 1 2 0v7.172z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default DarkModeToggle;
