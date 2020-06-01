import React from "react"
import classes from "./ArtistItemRouter.module.css"
import HeaderArtistItemRouter from "./HeaderArtistItemRouter/HeaderArtistItemRouter"
import BodyArtistItemRouter from "./BodyArtistItemRouter/BodyArtistItemRouter"

const ArtistItemRouter = (props) => {
    return (
        <div className={classes.artistItemRouter}>
            <HeaderArtistItemRouter nameArtist={props.nameArtist}/>
            <BodyArtistItemRouter nameArtist={props.nameArtist}/>
        </div>

    )
}

export default ArtistItemRouter 