import { useState } from "react";
import { AppContext } from "../src/assets/contexts/context";

export function AppContextProvider({ children }) {
  const [populateProfile, setPopulateProfile] = useState("");
  const [populateProfileExperiences, setPopulateProfileExperiences] = useState("");

  const value = {
    populateProfile,
    setPopulateProfile,
    populateProfileExperiences,
    setPopulateProfileExperiences,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
