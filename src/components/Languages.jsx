import React from "react";

function Languages({ languages, addFilterValue }) {
  // console.log(languages);
  return (
    <>
      {languages.map((language, index) => (
        <div
          className="language"
          key={index}
          onClick={(e) => addFilterValue(e)}
        >
          {language}
        </div>
      ))}
    </>
  );
}

export default Languages;
