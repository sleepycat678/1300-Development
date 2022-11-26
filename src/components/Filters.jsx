import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import "./Filters.css";

export default function Filters ({ sort, setSort, genre, setGenre, developer, setDeveloper }) {
    const resetFilters = () => {
        setSort("price");
        setGenre("");
        setDeveloper("");
    };
    
    return (
        <div className="filters">
            <h2>Filters</h2>
            <FormControl className="filters-control">
                <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        // defaultValue="price"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="price" control={<Radio />} label="Price" />
                        <FormControlLabel value="ign rating" control={<Radio />} label="IGN Rating" />
                    </RadioGroup>
                
                <FormLabel id="demo-radio-buttons-group-label">Genre</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        // defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="RPG" control={<Radio />} label="RPG" />
                        <FormControlLabel value="FPS" control={<Radio />} label="FPS" />
                    </RadioGroup>

                <FormLabel id="demo-radio-buttons-group-label">Developer</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={developer}
                        onChange={(e) => setDeveloper(e.target.value)}
                        // defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="CD Projekt Red" control={<Radio />} label="CD Projekt Red" />
                        <FormControlLabel value="Ubisoft" control={<Radio />} label="Ubisoft" />
                        <FormControlLabel value="Treyarch" control={<Radio />} label="Treyarch" />
                        <FormControlLabel value="Rockstar" control={<Radio />} label="Rockstar" />
                        <FormControlLabel value="Infinity Ward" control={<Radio />} label="Infinity Ward" />
                    </RadioGroup>
            </FormControl>

            <button className="reset-filters" onClick={resetFilters}>Reset Filters</button>
        </div>
    );
};