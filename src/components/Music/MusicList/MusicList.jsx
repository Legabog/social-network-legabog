import React from "react"
import HeaderMusicList from "./HeaderMusicList/HeaderMusicList"
import classes from "./MusicList.module.css"
import BodyMusicList from "./BodyMusicList/BodyMusicList"
import FooterMusicList from "./FooterMusicList/FooterMusicList"

class MusicList extends React.Component {
    render() {
        return (
            <div className={classes.musicList}>
                <HeaderMusicList/>
                <BodyMusicList/>
                <FooterMusicList/>
            </div>


        )
    }
}



export default MusicList