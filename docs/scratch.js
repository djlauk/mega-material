import{a as o,b as r,o as t,c as e,d as a,i as c,e as s,g as i,j as n,f as h}from"./common.js";import"./icon.js";import"./common2.js";import"./ripple.js";HTMLSlotElement.prototype.assignedElements||Object.defineProperty(HTMLSlotElement.prototype,"assignedElements",{value:function(o){return this.assignedNodes(o).filter(o=>1===o.nodeType)}});let l=class extends o{constructor(){super(...arguments),this.primary=!1,this.iconElements=[],this.hasIcon=!1}firstUpdated(o){this.iconSlot.addEventListener("slotchange",o=>{this.iconElements=this.iconSlot.assignedElements(),this.hasIconCheck()})}updated(o){this.hasIconCheck()}hasIconCheck(){this.hasIcon=this.iconElements.length>0||void 0!==this.icon}static get styles(){return[r,t,e`:host{position:relative;display:inline-flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding:8px;width:200px;border:1px solid #ccc;border-radius:4px}:host([start]){justify-content:flex-start}:host([end]){justify-content:flex-end}:host([center]){justify-content:center}slot[name=icon] mwc-icon,slot[name=icon]::slotted(*){color:#999;margin-left:0;margin-right:8px}:host([right]) #icon{order:2;margin-left:8px;margin-right:0}`]}render(){return a`<mwc-ripple ?primary=${this.primary}></mwc-ripple><slot name=icon>${this.icon?a`<mwc-icon>${this.icon}</mwc-icon>`:c}</slot><slot></slot>`}};s([i({type:Boolean,reflect:!0})],l.prototype,"primary",void 0),s([i({type:String})],l.prototype,"icon",void 0),s([n('slot[name="icon"]')],l.prototype,"iconSlot",void 0),s([i({type:Boolean,reflect:!0,attribute:"has-icon"})],l.prototype,"hasIcon",void 0),l=s([h("mwc-scratch")],l);let d=class extends o{constructor(){super(...arguments),this.theme="",this.bg=!1,this.disabled=!1}firstUpdated(o){const r=function(o){const r=window.getComputedStyle(o);if(!r||!r.backgroundColor)return!1;const t=r.backgroundColor.match(/^rgb\((\d+),\s?(\d+),\s?(\d+)\)$/);return!!t&&function(o){const[r,t,e]=o;return[(299*r+587*t+114*e)/1e3,(596*r+-274*t+-322*e)/1e3,(211*r+523*t+312*e)/1e3]}(t.slice(1,4).map(o=>parseInt(o)))[0]>160}(this);this.style.setProperty("--overlay",r?"rgb(0, 0, 0)":"rgb(255, 255, 255)"),this.style.setProperty("--hover-opacity",r?"0.04":"0.08"),this.style.setProperty("--focus-opacity",r?"0.12":"0.24"),this.style.setProperty("--selected-opacity",r?"0.08":"0.16"),this.style.setProperty("--activated-opacity",r?"0.12":"0.24"),this.style.setProperty("--pressed-opacity",r?"0.16":"0.32")}static get styles(){return[r,e`:host{position:relative;display:inline-flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding:12px;min-width:200px;color:var(--mwc-background-on);background-color:var(--mwc-background);outline:0;user-select:none}:host([theme=primary]){color:var(--mwc-primary)}:host([theme=primary-light]){color:var(--mwc-primary-light)}:host([theme=primary-dark]){color:var(--mwc-primary-dark)}:host([theme=secondary]){color:var(--mwc-secondary)}:host([theme=secondary-light]){color:var(--mwc-secondary-light)}:host([theme=secondary-dark]){color:var(--mwc-secondary-dark)}:host([theme^=primary][bg]){color:var(--mwc-primary-on)}:host([theme=primary][bg]){background-color:var(--mwc-primary)}:host([theme=primary-light][bg]){background-color:var(--mwc-primary-light)}:host([theme=primary-dark][bg]){background-color:var(--mwc-primary-dark)}:host([theme^=secondary][bg]){color:var(--mwc-primary-on)}:host([theme=secondary][bg]){background-color:var(--mwc-secondary)}:host([theme=secondary-light][bg]){background-color:var(--mwc-secondary-light)}:host([theme=secondary-dark][bg]){background-color:var(--mwc-secondary-dark)}:host([theme=background]){color:var(--mwc-background-on);background-color:var(--mwc-background)}:host([bg][theme=background]){color:var(--mwc-background);background-color:var(--mwc-background-on)}:host([theme=surface]){color:var(--mwc-surface-on);background-color:var(--mwc-surface)}:host([bg][theme=surface]){color:var(--mwc-surface);background-color:var(--mwc-surface-on)}:host([theme=error]){color:var(--mwc-error-on);background-color:var(--mwc-error)}:host([bg][theme=error]){color:var(--mwc-error);background-color:var(--mwc-error-on)}:host::after,:host::before{position:absolute;top:0;right:0;bottom:0;left:0;content:'';opacity:0;background-color:var(--overlay)}:host([theme^=primary])::after,:host([theme^=primary])::before{background-color:var(--mwc-primary)}:host([theme^=secondary])::after,:host([theme^=secondary])::before{background-color:var(--mwc-secondary)}:host([selected])::before{opacity:var(--selected-opacity)}:host([activated])::before{opacity:var(--activated-opacity)}:host([bg])::after{background-color:var(--overlay)}:host(:focus)::after{opacity:var(--focus-opacity)}:host(:hover)::after{opacity:var(--hover-opacity)}:host(:active)::after{opacity:var(--pressed-opacity)}:host([disabled]){color:#444!important;background-color:#ccc!important}:host([disabled])::after,:host([disabled])::before{background-color:transparent!important}`]}render(){return a`<div><slot></slot></div>`}};s([i({type:String,reflect:!0})],d.prototype,"theme",void 0),s([i({type:Boolean,reflect:!0})],d.prototype,"bg",void 0),s([i({type:Boolean,reflect:!0})],d.prototype,"disabled",void 0),d=s([h("mwc-scratch-color")],d);export{d as ScratchColorElement,l as ScratchElement};
