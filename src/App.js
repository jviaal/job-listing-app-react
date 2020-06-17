import React from "react";
import data from "./data.json";
// COMPONENTS
import Header from "./components/Header";
import JobListContainer from "./components/JobListContainer";
// STYLES
import { GlobalStyle } from "./styles/GlobalStyles";
import "./styles/global.css";

function App() {
  // STATES
  const [companyDetails, setCompanyDetails] = React.useState();
  const [filterBy, setFilterBy] = React.useState([]);
  // USE EFFECT
  React.useEffect(() => {
    const getData = async () => {
      setCompanyDetails(data);
      if (filterBy.length === 0) {
      } else {
        const temp = [];
        data.forEach((x) => {
          let flag = true;
          filterBy.data.forEach((y) => {
            if (
              Object.values(x).includes(y) ||
              Object.values(x.languages).includes(y) ||
              Object.values(x.tools).includes(y)
            ) {
            } else {
              return (flag = false);
            }
          });
          if (flag === true) {
            temp.push(x);
          }
        });
        setCompanyDetails(temp);
      }
    };
    getData();
  }, [filterBy]);
  return (
    <>
      <Header filterBy={filterBy} setFilterBy={setFilterBy} />
      {companyDetails && (
        <JobListContainer
          companyDetails={companyDetails}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      )}
      <GlobalStyle />
    </>
  );
}

export default App;
