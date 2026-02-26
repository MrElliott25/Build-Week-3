import { useState } from "react";
import { AppContext } from "../src/assets/contexts/context";

export function AppContextProvider({ children }) {
  const [populateProfile, setPopulateProfile] = useState("");
  const [populateProfileExperiences, setPopulateProfileExperiences] = useState("");
  const [navbarSectionSelection, setNavabSectionSelection] = useState("");
  const [selectionObject, setSelectionObject] = useState("");
  const [generalOutput, setGeneralOutput] = useState(false);
  const [populateDropdown, setPopulateDropdown] = useState({});
  const [slideCarosello, setSlideCarosello] = useState(0);
  const [carouselJobs, setCarouselJobs] = useState([]);
  const [showJob, setShowJob] = useState({});
  const [searchList, setSearchList] = useState({});
  const [defaultList, setDefaultList] = useState({});
  

  const value = {defaultList,setDefaultList,
    searchList, setSearchList,
    showJob, setShowJob,
    carouselJobs,
    setCarouselJobs,
    populateProfile,
    setPopulateProfile,
    populateProfileExperiences,
    setPopulateProfileExperiences,
    navbarSectionSelection,
    setNavabSectionSelection,
    selectionObject,
    setSelectionObject,
    generalOutput,
    setGeneralOutput,
    populateDropdown,
    setPopulateDropdown,
    slideCarosello,
    setSlideCarosello,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
