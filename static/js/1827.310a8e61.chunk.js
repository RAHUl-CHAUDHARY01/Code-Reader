"use strict";(self.webpackChunkcodereader=self.webpackChunkcodereader||[]).push([[1827],{1827:(e,o,n)=>{n.d(o,{WobbleUpdater:()=>d});var a=n(4409);class l{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,a.DT)(e.angle)),void 0!==e.move&&(this.move=(0,a.DT)(e.move)))}}class s{constructor(){this.distance=5,this.enable=!1,this.speed=new l}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,a.DT)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,a.Et)(e.speed))this.speed.load({angle:e.speed});else{const o=e.speed;void 0!==o.min?this.speed.load({angle:o}):this.speed.load(e.speed)}}}const t=2*Math.PI;const i=2*Math.PI;class d{constructor(e){this.container=e}init(e){var o;const n=e.options.wobble;null!==n&&void 0!==n&&n.enable?e.wobble={angle:(0,a.G0)()*i,angleSpeed:(0,a.VG)(n.speed.angle)/360,moveSpeed:(0,a.VG)(n.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,a.VG)(null!==(o=null===n||void 0===n?void 0:n.distance)&&void 0!==o?o:0)*this.container.retina.pixelRatio}isEnabled(e){var o;return!e.destroyed&&!e.spawning&&!(null===(o=e.options.wobble)||void 0===o||!o.enable)}loadOptions(e){e.wobble||(e.wobble=new s);for(var o=arguments.length,n=new Array(o>1?o-1:0),a=1;a<o;a++)n[a-1]=arguments[a];for(const l of n)e.wobble.load(null===l||void 0===l?void 0:l.wobble)}update(e,o){this.isEnabled(e)&&function(e,o){var n;const{wobble:l}=e.options,{wobble:s}=e;if(null===l||void 0===l||!l.enable||!s)return;const i=s.angleSpeed*o.factor,d=s.moveSpeed*o.factor*((null!==(n=e.retina.wobbleDistance)&&void 0!==n?n:0)*o.factor)/(a.Xu/60),b=t,{position:c}=e;s.angle+=i,s.angle>b&&(s.angle-=b),c.x+=d*Math.cos(s.angle),c.y+=d*Math.abs(Math.sin(s.angle))}(e,o)}}}}]);
//# sourceMappingURL=1827.310a8e61.chunk.js.map