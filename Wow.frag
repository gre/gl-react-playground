precision mediump float;

varying vec2 uv;
uniform float time;
uniform vec2 resolution;

// adapted from http://glslsandbox.com/e#27937.0

void main( void ) {
	float amnt;
	float nd;
	vec4 cbuff = vec4(0.0);
	for(float i=0.0; i<5.0;i++){
	  nd = sin(3.17*0.8*uv.x + (i*0.1+sin(+time)*0.2) + time)*0.8+0.1 + uv.x;
	  amnt = 1.0/abs(nd-uv.y)*0.01;

	  cbuff += vec4(amnt, amnt*0.3 , amnt*uv.y, 90.0);
	}
	for(float i=0.0; i<1.0;i++){
	  nd = sin(3.14*2.0*uv.y + i*40.5 + time)*90.3*(uv.y+80.3)+0.5;
	  amnt = 1.0/abs(nd-uv.x)*0.015;

	  cbuff += vec4(amnt*0.2, amnt*0.2 , amnt*uv.x, 1.0);
	}
  gl_FragColor = cbuff;
}
