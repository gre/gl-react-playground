const React = require("react");
const GL = require("gl-react");

const shaders = GL.Shaders.create({
  SubtitleOverVideo: {
    frag: `
precision highp float;

varying vec2 uv;
uniform sampler2D video;
uniform sampler2D text;

float monochrome (vec3 c) {
  return 0.2125 * c.r + 0.7154 * c.g + 0.0721 * c.b;
}
vec3 textColor (vec3 bg) {
  return vec3(step(monochrome(bg), 0.6));
}

vec4 over (vec4 front, vec4 back) {
  return vec4(mix(back.rgb, front.rgb, front.a) * back.a, mix(back.a, front.a, front.a));
}

void main () {
  vec4 v = texture2D(video, uv);
  vec4 t = texture2D(text, uv);
  gl_FragColor = over(
    vec4(mix(textColor(v.rgb), 1. - v.rgb, 0.5), t.a),
    vec4(v.rgb, smoothstep(0.5, 0.3, uv.y)));
}
    `
  }
});

module.exports = GL.createComponent( ({ children, ...rest }) => {
  const [video, text] = children;
  return <GL.View
    {...rest}
    shader={shaders.SubtitleOverVideo}
    uniforms={{ video, text }}
  />;
}, { displayName: "SubtitleOverVideo" });
