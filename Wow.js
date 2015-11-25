const React = require("react");
const GL = require("gl-react");
const glslify = require("glslify");

const shaders = GL.Shaders.create({
  Wow: {
    frag: glslify(`${__dirname}/Wow.frag`)
  }
});

module.exports = GL.createComponent(
  ({ time, ...rest }) =>
  <GL.View
    {...rest}
    shader={shaders.Wow}
    uniforms={{
      time
    }}
  />,
  {
    displayName: "Wow"
  }
);
