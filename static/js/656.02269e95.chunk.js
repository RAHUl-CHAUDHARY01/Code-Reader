"use strict";(self.webpackChunkcodereader=self.webpackChunkcodereader||[]).push([[656],{656:(e,o,i)=>{i.d(o,{Collider:()=>u});var s=i(4409);const t=.5,n=10,d=0;function a(e,o,i,a,c,l){const r=(0,s.qE)(e.options.collisions.absorb.speed*c.factor/n,d,a);e.size.value+=r*t,i.size.value-=r,a<=l&&(i.size.value=0,i.destroy())}const c=e=>{void 0===e.collisionMaxSpeed&&(e.collisionMaxSpeed=(0,s.VG)(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function l(e,o){(0,s.pE)((0,s.Tg)(e),(0,s.Tg)(o)),c(e),c(o)}function r(e,o,i,s){switch(e.options.collisions.mode){case"absorb":!function(e,o,i,s){const t=e.getRadius(),n=o.getRadius();void 0===t&&void 0!==n?e.destroy():void 0!==t&&void 0===n?o.destroy():void 0!==t&&void 0!==n&&(t>=n?a(e,0,o,n,i,s):a(o,0,e,t,i,s))}(e,o,i,s);break;case"bounce":l(e,o);break;case"destroy":!function(e,o){e.unbreakable||o.unbreakable||l(e,o),void 0===e.getRadius()&&void 0!==o.getRadius()?e.destroy():void 0!==e.getRadius()&&void 0===o.getRadius()?o.destroy():void 0!==e.getRadius()&&void 0!==o.getRadius()&&(e.getRadius()>=o.getRadius()?o:e).destroy()}(e,o)}}class u extends s.U4{constructor(e){super(e)}clear(){}init(){}interact(e,o){if(e.destroyed||e.spawning)return;const i=this.container,t=e.getPosition(),n=e.getRadius(),d=i.particles.quadTree.queryCircle(t,2*n);for(const a of d){if(e===a||!a.options.collisions.enable||e.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const d=a.getPosition(),c=a.getRadius();if(Math.abs(Math.round(t.z)-Math.round(d.z))>n+c)continue;(0,s.Yf)(t,d)>n+c||r(e,a,o,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);
//# sourceMappingURL=656.02269e95.chunk.js.map