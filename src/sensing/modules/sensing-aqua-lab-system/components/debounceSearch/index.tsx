import { InputAdornment, TextField } from "@mui/material";
import React, { useState, useCallback, useRef, useEffect } from "react";
// import "../Search/search.scss";
// import "src/containers/car-wash-owner/modules/account-setup";
// import { SearchIcon } from "src/utils/common/constants";

interface DebounceSearchProps {
  onSearch: (query: string) => void;
  debounceTime?: number;
  placeholder?: string;
  alphanumericOnly?: boolean;
  setExternalState?: (search: string) => void;
}

const DebounceSearch: React.FC<DebounceSearchProps> = ({
  onSearch,
  debounceTime = 400,
  placeholder = "Search...",
  alphanumericOnly = true,
  setExternalState
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSearch = useCallback(
    (query: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        if (query.length > 2 || query.length === 0) onSearch(query);
      }, debounceTime);
    },
    [onSearch, debounceTime],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value.trimStart();
    if(alphanumericOnly){
      const alphanumericWithSpacesRegex = /^[a-zA-Z0-9][a-zA-Z0-9 ]*$/;
      if (
        alphanumericWithSpacesRegex.test(newSearchTerm) ||
        newSearchTerm === ""
      ) {
        setSearchTerm(newSearchTerm);
        debouncedSearch(newSearchTerm);
      }
    } else{
      setSearchTerm(newSearchTerm);
      debouncedSearch(newSearchTerm);
    }
  };

  useEffect(() => {
    if (setExternalState) {
        setSearchTerm(""); // Reset the search term
    }
  }, [setExternalState]);
  return (
    <div className="commonSearchWrapper customerSearch">
      <TextField
      onKeyDown={(e) => e.stopPropagation()}
      onClick={(e)=>e.stopPropagation()}
        fullWidth
        className="searchInput"
        variant="outlined"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={''} alt="Icon" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default DebounceSearch;
