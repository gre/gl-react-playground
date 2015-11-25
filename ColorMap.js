const React = require("react");
const GL = require("gl-react");

const shaders = GL.Shaders.create({
  colorMap: {
    frag: `
precision highp float;
varying vec2 uv;
uniform sampler2D image;
uniform sampler2D colorScale; // used as a lookup texture

float monochrome (vec3 c) {
  return 0.2125 * c.r + 0.7154 * c.g + 0.0721 * c.b;
}

void main () {
  vec4 imgC = texture2D(image, uv);
  vec4 scaleC = texture2D(colorScale, vec2(monochrome(imgC.rgb), 0.5));
  gl_FragColor = scaleC;
  //gl_FragColor = texture2D(colorScale, uv);
}
    `
  }
});

module.exports = GL.createComponent(
  ({ width, height, children: image, colorScale, disableLinearInterpolation }) =>
    <GL.View
      shader={shaders.colorMap}
      width={width}
      height={height}
      uniforms={{ image }}
      opaque={false}>
      <GL.Uniform name="colorScale" disableLinearInterpolation={disableLinearInterpolation}>
        {colorScale}
      </GL.Uniform>
    </GL.View>
  , {
    displayName: "ColorMap"
  }
);
