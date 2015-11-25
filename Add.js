const React = require("react");
const GL = require("gl-react");

const {
  PropTypes
} = React;

const shaders = GL.Shaders.create({
  Add: {
    frag: `
precision highp float;
varying vec2 uv;
uniform sampler2D t1;
uniform sampler2D t2;

void main () {
  gl_FragColor = texture2D(t1, uv) + texture2D(t2, uv);
}
    `
  }
});

module.exports = GL.createComponent(
  ({ children: [t1, t2], ...rest }) =>
  <GL.View
    {...rest}
    shader={shaders.Add}
    uniforms={{ t1, t2 }}
  />,
{ displayName: "Add" });
