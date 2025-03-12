// import React, { useState } from "react";
// import Flag from "react-world-flags"; // Import Flag component from react-world-flags

// const LanguageSelector = () => {
//   const [locale, setLocale] = useState("en");
//   const [isOpen, setIsOpen] = useState(false); // To control dropdown visibility

//   const changeLanguage = (code) => {
//     setLocale(code);
//     setIsOpen(false); // Close the dropdown after selection
//   };

//   const languages = [
//     { code: "en", name: "English", flag: "US" },
//     { code: "es", name: "Español", flag: "ES" },
//     { code: "fr", name: "Français", flag: "FR" },
//     { code: "nl", name: "Dutch", flag: "NL" },
//     { code: "de", name: "German", flag: "DE" },
//   ];

//   return (
//     <div className="header-btns p-0 relative inline-block">
//       <div className="select-container">
//         {/* Display current language */}
//         <div
//           onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
//           className="cursor-pointer text-white p-2 bg-transparent border border-gray-400 rounded flex items-center"
//         >
//                {isOpen && (
//             languages.map((loc) => (
//               <div
//                 key={loc.code}
//                 onClick={() => changeLanguage(loc.code)}
//                 className="cursor-pointer flex items-center p-2 hover:bg-gray-200"
//               >
//                 <Flag
//                   code={loc.flag}
//                   style={{ width: 20, height: 15, marginRight: 8 }}
//                 />
//                 {loc.name}
//               </div>
//             ))
//         )}
//           <Flag
//             code={languages.find((loc) => loc.code === locale)?.flag}
//             style={{ width: 20, height: 15, marginRight: 8 }}
//           />
//           {languages.find((loc) => loc.code === locale)?.name}
//         </div>

//         {/* Custom Dropdown */}
     
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;