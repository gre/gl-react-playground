const React = require("react");
const ReactDOM = require("react-dom");
const ndarray = require("ndarray");
const GlReactInspector = require("gl-react-inspector");
/* eslint no-unused-vars: 0 */
const Example1 = require("./Example1");
const ExampleVideo = require("./ExampleVideo");
const HelloGL = require("./HelloGL");
const Blur = require("./Blur");
const BlurWithMap = require("./BlurWithMap");
const WeirdGradient = require("./WeirdGradient");
const SubtitleOverVideo = require("./SubtitleOverVideo");
const SubtitleView = require("./SubtitleView");
const VideoExampleWithSubtitle = require("./VideoExampleWithSubtitle");
const HueRotate = require("./HueRotate");
const SquircleCrop = require("./SquircleCrop");
const Field = require("./Field");
const Add = require("./Add");
const Wow = require("./Wow");
const ColorMap = require("./ColorMap");

class Demo extends React.Component {
  constructor (props) {
    super(props);
    this.state = { glCanvas: null, cue: null, value: 0, time: 0 };
  }
  componentDidMount () {
    this.setState({
      glCanvas: this.refs.gl.getGLCanvas() // This is a temporary way before we have a real gl-react devtools
    });
    window.addEventListener("resize", () => this.forceUpdate());
    const loop = time => { requestAnimationFrame(loop); this.setState({ time }); };
    // requestAnimationFrame(loop);
    if (this.refs.video) setInterval(() => this.setState({
      cue: this.refs.video.getSubtitleCue()
    }), 100);
  }
  render () {
    const { width, height } = this.props;
    const { glCanvas, cue, value, time } = this.state;
    return <div>


      <HelloGL ref="gl" width={width} height={height} />



      <div style={{ height: window.innerHeight-height }}>
      { glCanvas && <GlReactInspector.Inspector glCanvas={glCanvas} /> || null }
      </div>
    </div>;
  }
}

ReactDOM.render(<Demo width={500} height={300} />, document.getElementById("container"));



/* TRY THESE:

<HelloGL ref="gl" width={width} height={height} />



<HelloGL width={width} height={height} blue={value} ref="gl" />
<div style={{ position: "absolute", top: 0, right: 0 }}>
  <Field name="blue" min={0} max={1} step={0.01} value={value} onChange={value => this.setState({ value })} />
</div>



<Wow ref="gl" width={width} height={height} time={time/1000} />


<SquircleCrop ref="gl" width={width} height={height}>
  <Add>
    <HelloGL />
    http://i.imgur.com/0bUSEBX.jpg
  </Add>
</SquircleCrop>


<Example1 width={width} height={height} ref="gl" />


<BlurWithMap map={<WeirdGradient />} factor={4} passes={6} width={width} height={height} ref="gl">
  http://i.imgur.com/NjbLHx2.jpg
</BlurWithMap>


<ExampleVideo width={width} height={height} ref="gl" />


<SubtitleOverVideo width={width} height={height} autoRedraw eventsThrough visibleContent opaque={false} ref="gl">
 <Blur passes={4} factor={3} width={width} height={height}>
  <VideoExampleWithSubtitle ref="video" style={{ width, height }} autoPlay muted controls />
 </Blur>
 <SubtitleView width={width} height={height} cue={cue} />
</SubtitleOverVideo>


<ColorMap ref="gl" width={256} height={190}
  colorScale={ndarray(new Float64Array([
    0.62,0.00,0.26,
    0.84,0.24,0.31,
    0.96,0.43,0.26,
    0.99,0.68,0.38,
    1.00,0.88,0.55,
    1.00,1.00,0.75,
    0.90,0.96,0.60,
    0.67,0.87,0.64,
    0.40,0.76,0.65,
    0.20,0.53,0.74,
    0.37,0.31,0.64]), [11,1,3])}
  disableLinearInterpolation={false}>
  http://i.imgur.com/iPKTONG.jpg
</ColorMap>
*/
