const React = require("react");
const GL = require("gl-react");

const shaders = GL.Shaders.create({
  helloGL: {
    frag: `
precision highp float;
varying vec2 uv;
uniform float blue;
void main () {
  gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
}`
  }
});

module.exports = GL.createComponent(
  ({ width, height, blue }) =>
  <GL.View
	shader={shaders.helloGL}
	width={width}
	height={height}
	uniforms={{ blue }}
  />,
  {
    displayName: "HelloGL",
    defaultProps: {
      blue: 0.5
    }
  });
