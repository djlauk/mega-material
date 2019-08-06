import{L as t,d as e,e as i,c as o,h as s,_ as n,p as a,a as r}from"./common.js";let l=class extends t{constructor(){super(...arguments),this.fixed=!1,this.prominent=!1,this.short=!1,this.collapsed=!1,this.dense=!1,this.centerTitle=!1}get scrollTarget(){return this.t||window}set scrollTarget(t){this.scrollTarget,this.t=t}firstUpdated(){this.i=this.o(),this.s=this.l()}connectedCallback(){super.connectedCallback(),this.scrollTarget.addEventListener("scroll",this.p),this.i=this.o(),this.s=this.l(),this.short||this.fixed||window.addEventListener("resize",this.h)}disconnectedCallback(){super.disconnectedCallback()}p(t){}h(t){}l(){return this.clientHeight}o(){const t=this.scrollTarget,e=this.scrollTarget;return void 0!==t.pageYOffset?t.pageYOffset:e.scrollTop}g(){this.dispatchEvent(new CustomEvent("top-app-bar:nav",{bubbles:!0,composed:!0}))}static get styles(){return[e,i,o`:host{background-color:var(--mega-theme-primary,#6200ee);color:#fff;display:inline-flex;flex-direction:column;flex:1;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4;contain:content}slot.icons::slotted(*){--mega-ripple-fg-size:0;--mega-ripple-left:0;--mega-ripple-top:0;--mega-ripple-fg-scale:1;--mega-ripple-fg-translate-end:0;--mega-ripple-fg-translate-start:0;--mega-ripple-fg-opacity:0.08;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;display:flex;position:relative;flex-shrink:0;align-items:center;justify-content:center;box-sizing:border-box;border:none;outline:0;color:var(--mega-theme-on-primary,#fff);background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer}div{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}section:not([role]){justify-content:flex-start;order:-1}section[role=toolbar]{justify-content:flex-end;order:1}slot[name=title]::slotted(*){font-family:Roboto,sans-serif;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;z-index:1;text-decoration:inherit;overflow:hidden}:host([short][collapsed]){border-radius:0 0 24px 0}:host([short]){top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(.4,0,.2,1)}:host([short]) div{height:56px}:host([short]) section{padding:4px}:host([short]) slot[name=title]::slotted(*){transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}:host([short][collapsed]){box-shadow:var(--elevation-04);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}:host([short][collapsed]) slot[name=title]::slotted(*){display:none}:host([short][collapsed]) .mega-top-app-bar__action-item{transition:padding 150ms cubic-bezier(.4,0,.2,1)}:host([short][collapsed][has-action-item]){width:112px}:host([short][collapsed][has-action-item]) section[role=toolbar]{padding-left:0;padding-right:12px}:host([dense]) div{height:48px}:host([dense]) section{padding:0 4px}:host([dense]) slot[name=title]::slotted(*){padding-left:12px;padding-right:0}:host([prominent]) div{height:128px}:host([prominent]) slot[name=title]::slotted(*){align-self:flex-end;padding-bottom:2px}:host([prominent]) slot.icons::slotted(*){align-self:flex-start}:host([fixed]){transition:box-shadow .2s linear}:host([fixed][scrolled]){box-shadow:var(--elevation-04);transition:box-shadow .2s linear}:host([dense][prominent]) div{height:96px}:host([dense][prominent]) section{padding:0 12px}:host([dense]][prominent]) slot[name=title]::slotted(*){padding-left:20px;padding-right:0;padding-bottom:9px}:host([fixed][adjust]){padding-top:64px}:host([dense][fixed][adjust]){padding-top:48px}:host([short][fixed][adjust]){padding-top:56px}:host([prominent][fixed][adjust]){padding-top:128px}:host([dense][prominent][fixed][adjust]){padding-top:96px}@media (max-width:599px){div{height:56px}section{padding:4px}:host([short]){transition:width .2s cubic-bezier(.4,0,.2,1)}:host([short][collapsed]){transition:width 250ms cubic-bezier(.4,0,.2,1)}:host([short][collapsed]) section[role=toolbar]{padding-left:0;padding-right:12px}:host([prominent]) slot[name=title]::slotted(*){padding-bottom:6px}:host([fixed][adjust]){padding-top:56px}}:host([center-title]) section{flex-basis:0%}:host([center-title]) section:not([role]){justify-content:center}:host([center-title]) slot[name=title]::slotted(*){padding-left:0}`]}render(){return s`<header><div><section ?align-center=${this.centerTitle}><slot class=icons name=navigationIcon ?hidden=${this.centerTitle} @click=${this.g}></slot><slot name=title></slot></section><section role=toolbar><slot class=icons name=actionItems></slot></section></div></header>`}};n([a({type:Boolean,reflect:!0})],l.prototype,"fixed",void 0),n([a({type:Boolean,reflect:!0})],l.prototype,"prominent",void 0),n([a({type:Boolean,reflect:!0})],l.prototype,"short",void 0),n([a({type:Boolean,reflect:!0})],l.prototype,"collapsed",void 0),n([a({type:Boolean,reflect:!0})],l.prototype,"dense",void 0),n([a({type:Boolean,reflect:!0,attribute:"center-title"})],l.prototype,"centerTitle",void 0),l=n([r("mega-top-app-bar")],l);export{l as TopAppBarElement};
