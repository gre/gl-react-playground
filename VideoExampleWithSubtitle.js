const React = require("react");

class VideoExampleWithSubtitle extends React.Component {
  componentDidMount () {
  }
  getSubtitleCue () {
    const video = this.refs.video;
    const track = video.textTracks[0];
    if (!track || !track.activeCues) return;
    const activeCue = track.activeCues[0];
    if (!activeCue) return;
    return activeCue;

  }
  render () {
    return <video ref="video" {...this.props}>
      <source src="developerStories-en.webm" type="video/webm" />
      <track
        src="developerStories-subtitles-en.vtt"
        label="English subtitles"
        kind="subtitles"
        srcLang="en"
        default
      />
    </video>;
  }
}

module.exports = VideoExampleWithSubtitle;
