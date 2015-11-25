const React = require("react");
const { Surface, Text, FontFace } = require("react-canvas");

class SubtitleView extends React.Component {
  constructor (props) {
    super(props);
    this._sanitizeSpan = document.createElement("span");
  }
  sanitizeCueText (cueText) {
    this._sanitizeSpan.innerHTML = cueText;
    return this._sanitizeSpan.textContent;
  }
  render () {
    const { width, height, cue } = this.props;
    const textStyle = {
      top: height - 70,
      left: 20,
      width: width - 40,
      height: 60,
      padding: 0,
      textAlign: "center",
      color: "#000",
      fontFace: new FontFace("Helvetica", null, { weight: 800 }),
      fontSize: 20,
      lineHeight: 32
    };
    return <Surface width={width} height={height} left={0} top={0}>
      <Text style={textStyle}>{cue && this.sanitizeCueText(cue.text) || ""}</Text>
    </Surface>;
  }
}

module.exports = SubtitleView;
