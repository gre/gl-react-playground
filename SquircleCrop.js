const React = require("react");
const GL = require("gl-react");

const shaders = GL.Shaders.create({
  squircleCrop: {
    frag: `
precision highp float;
varying vec2 uv;
uniform sampler2D texture;
float squircle (vec2 a, vec2 b, float n) {
  return pow(pow(abs(a.x-b.x), n) + pow(abs(a.y-b.y), n), 1.0 / n);
}
void main () {
  gl_FragColor = mix(
    texture2D(texture, uv),
    vec4(0.0),
    step(0.5, squircle(uv, vec2(0.5, 0.5), 4.0)));
}`
  }
});

module.exports = GL.createComponent(
  ({ width, height, children: texture }) =>
  <GL.View
	shader={shaders.squircleCrop}
	width={width}
	height={height}
	uniforms={{ texture }}
  />,
{ displayName: "SquircleCrop" });
