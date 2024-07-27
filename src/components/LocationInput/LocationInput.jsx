import {AnimatePresence, motion} from "framer-motion";
import React, {useEffect, useRef, useState} from "react";
import {City, State} from "country-state-city";

const LocationInput = ({setSelectedCity, setSelectedState}) => {
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [cityKeyword, setCityKeyword] = useState("");
    const [stateKeyword, setStateKeyword] = useState("");
    const [filteredCities, setFilteredCities] = useState([]);
    const [filteredStates, setFilteredStates] = useState([]);
    const [openCityDropdown, setOpenCityDropdown] = useState(false);
    const [openStateDropdown, setOpenStateDropdown] = useState(false);
    const cityRef = useRef(null);
    const stateRef = useRef(null);

    useEffect(() => {
        const loadStates = async () => {
            const statesData = await State.getStatesOfCountry('IN');
            setStates(statesData);
        };
        loadStates();
    }, []);

    useEffect(() => {
        const loadCities = async () => {
            const citiesData = await City.getCitiesOfCountry('IN');
            setCities(citiesData);
        };
        loadCities();
    }, []);

    useEffect(() => {
        const statesByKeyword = states.filter(state =>
            state.name.toUpperCase().includes(stateKeyword.toUpperCase())
        );
        setFilteredStates(statesByKeyword.slice(0, 10));
    }, [stateKeyword, states]);

    useEffect(() => {
        const citiesByKeyword = cities.filter(city =>
            city.name.toUpperCase().includes(cityKeyword.toUpperCase())
        );
        setFilteredCities(citiesByKeyword.slice(0, 10));
    }, [cityKeyword, cities]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cityRef.current && !cityRef.current.contains(event.target)) {
                setOpenCityDropdown(false);
            }
            if (stateRef.current && !stateRef.current.contains(event.target)) {
                setOpenStateDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSetCity = (cityName, stateCode, countryCode) => {
        setSelectedCity(cityName);
        setCityKeyword(cityName);
        const state = State.getStateByCodeAndCountry(stateCode, countryCode);
        if (state) {
            setSelectedState(state.name);
            setStateKeyword(state.name);
        }
        setOpenCityDropdown(false);
    };

    const handleSetState = (stateName) => {
        setSelectedState(stateName);
        setStateKeyword(stateName);
        setSelectedCity("");
        setCityKeyword("");
        setOpenStateDropdown(false);
    };

    return (
        <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-4">
            <div>
                <input type="text" placeholder="City"
                       value={cityKeyword}
                       onSelect={() => setOpenCityDropdown(true)}
                       onChange={e => {
                           setCityKeyword(e.target.value);
                       }}
                       className="p-4 w-full border focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                <AnimatePresence>
                    {openCityDropdown && <motion.div
                        initial={{opacity: 0.5}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="relative translate-y-2">
                        <div ref={cityRef}
                             className="absolute grid grid-cols-1 p-2 w-full bg-white border border-gray-200 z-10 rounded-2xl">
                            {filteredCities.length === 0 &&
                                <div className="p-0.5 text-red-800">No cities found with the given
                                    keyword.</div>}
                            {filteredCities.map((item, id) => {
                                return (<button key={id} onClick={() => handleSetCity(item.name, item.stateCode, 'IN')}
                                                className="p-0.5 hover:bg-gray-200 rounded-lg">{item.name}</button>);
                            })}
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>
            <div>
                <input type="text" placeholder="State"
                       value={stateKeyword}
                       onSelect={() => setOpenStateDropdown(true)}
                       onChange={e => {
                           setStateKeyword(e.target.value);
                       }}
                       className="p-4 w-full border bg-white focus:border focus:border-cyan-600 border-gray-200 rounded-lg"/>
                <AnimatePresence>
                    {openStateDropdown && <motion.div
                        initial={{opacity: 0.5}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="relative translate-y-2">
                        <div ref={stateRef}
                             className="absolute grid grid-cols-1 p-2 w-full bg-white border border-gray-200 z-10 rounded-2xl">
                            {filteredStates.length === 0 &&
                                <div className="p-0.5 text-red-800">No states found with the given
                                    keyword.</div>}
                            {filteredStates.map((item, id) => {
                                return (<button key={id} onClick={() => handleSetState(item.name)}
                                                className="p-0.5 hover:bg-gray-200 rounded-lg">{item.name}</button>);
                            })}
                        </div>
                    </motion.div>}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LocationInput;