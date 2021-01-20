import React, { useState, useEffect } from "react";
import FetchedList from "../components/FetchedList";
import SearchBox from "../components/SearchBox";
import SpinnerLoader from "../Static/Images/SpinnerLoader.svg";
import "../pages/CSS/Search.css";
import { Image } from "antd";
import samplejson from "../pages/sample.json";

function Search() {
  const [SearchTerm, setSearchTerm] = useState(0);
  const [SearchedResults, setSearchedResults] = useState(0);
  const [Filter, setFilter] = useState(0);
  const [Loader, setLoader] = useState(0);

  function GetValueFromChild(data) {
    setSearchTerm(data);
  }
  function GetSearchType(data) {
    setFilter(data);
  }

  useEffect(
    () => {
      const delayDebounceFn = setTimeout(() => {
        if (SearchTerm !== "" && SearchTerm !== 0) {
          //  console.log("Searching... ", SearchTerm);
          setLoader(true);

          console.log("search term =", SearchTerm);

          setSearchedResults(
            doSearch(SearchTerm, samplejson.entries, setLoader)
          );
        } else console.log("filter =", Filter);
        //showResults(Filter, setSearchedResults, samplejson);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    },
    [SearchTerm],
    [Filter]
  );

  return (
    <>
      <SearchBox
        parentCallback={GetValueFromChild}
        getSearchType={GetSearchType}
      />

      {Loader ? (
        <>
          <div className="darkenBG"></div>
          <Image
            className="SpinnerLoader"
            style={{ zIndex: 1 }}
            preview={false}
            width={50}
            src={SpinnerLoader}
          />
        </>
      ) : (
        ""
      )}
      {SearchedResults ? <FetchedList FetchedJSON={SearchedResults} /> : ""}
    </>
  );
}

function doSearch(SearchTerm, samplejson, setLoader) {
  var results = [];
  for (var i = 0; i < samplejson.length; i++) {
    if (samplejson[i]["title"].toLowerCase() === SearchTerm.toLowerCase()) {
      results.push(samplejson[i]);
    }
  }
  setLoader(false);
  if (results.length > 0) return results;
  else return "NoneFound";
}

function sortedJSON(JSONobj) {
  var sortedArray = [];

  // Push each JSON Object entry in array by [key, value]
  for (var i in JSONobj) {
    sortedArray.push([i, JSONobj[i]]);
  }

  // Run native sort function and returns sorted array.
  return sortedArray.sort();
}

function showResults(Filter, setSearchedResults, samplejson) {
  console.log("filter value = ", Filter);

  return setSearchedResults(samplejson.entries);
}
export default Search;
