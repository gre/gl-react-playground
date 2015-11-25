const React = require("react");
const GL = require("gl-react");

const shaders = GL.Shaders.create({
  WeirdGradient: {
    frag: `
precision highp float;
varying vec2 uv;
void main () {
  gl_FragColor = vec4(vec3(
    0.5 + 0.5 * (sin(uv.y * 10.0) * cos(uv.x * 10.0))
  ), 1.0);
}`
  }
});

module.exports = GL.createComponent(
  ({ width, height }) =>
  <GL.View
	shader={shaders.WeirdGradient}
	width={width}
	height={height}
  />,
{ displayName: "WeirdGradient" });
