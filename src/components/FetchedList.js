import React from "react";
import { Image, Typography } from "antd";
import No_Results from "../Static/Images/No_Results.svg";
const { Title } = Typography;

function FetchedList({ FetchedJSON }) {
  let displayedCount = 0;

  return (
    <>
      {console.log("insdie fetchedlist json =", FetchedJSON)}
      <div className="MovieItemList">
        {FetchedJSON !== "NoneFound" && FetchedJSON.length > 0 ? (
          FetchedJSON.map((element, index) => {
            displayedCount++;
            return (
              <div className="MovieItem" key={displayedCount}>
                <Image
                  height={300}
                  width={200}
                  src={element.images["Poster Art"].url}
                />
                <Title>{element.title}</Title>
              </div>
            );
          })
        ) : (
          <div className="MovieItem" key={displayedCount}>
            <Image preview={false} width={200} src={No_Results} />
            <Title>Nothing found, Sorry</Title>
            {/* {console.log("fetchedJSON =", FetchedJSON)} */}
          </div>
        )}
      </div>
    </>
  );
}

export default FetchedList;
