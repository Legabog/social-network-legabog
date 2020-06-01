import React from "react";
import classes from "./BodyArtists.module.css";
import ItemArtists from "./ItemArtists/ItemArtists";

class BodyArtists extends React.Component {
  render() {
    return (
      <div className={classes.bodyArtists}>
        {[
          "CAKEBOY",
          "Mnogoznaal",
          "Travis Scott",
          "ZillaKami",
          "VELIAL SQUAD",
        ].map((e) => (
          <ItemArtists key={Math.random()} nameArtist={e} />
        ))}

        <div className={classes.lastBlock}></div>
      </div>
    );
  }
}

export default BodyArtists;
