import React from "react"
import classes from "./MusicPlayer.module.css"
import HeaderMusicPlayer from "./HeaderMusicPlayer/HeaderMusicPlayer"
import BodyMusicPlayer from "./BodyMusicPlayer/BodyMusicPlayer"

class MusicPlayer extends React.Component {
    render() {
        return (
            <div className={classes.musicPlayer}>
                <HeaderMusicPlayer nameArtist={this.props.nameArtist}/>
                <BodyMusicPlayer nameArtist={this.props.nameArtist}/>
            </div>
        )
    }
}



export default MusicPlayer