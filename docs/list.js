import{a as t,b as e,c as i,d as s,e as o,g as n,j as a,f as r,i as l}from"./common.js";import"./icon.js";import"./common2.js";import"./ripple.js";let c=class extends t{constructor(){super(...arguments),this.type="default",this.dense=!1,this.t=[]}firstUpdated(t){this.setAttribute("role","list"),this.slotElement.addEventListener("slotchange",t=>this.i(t))}updated(t){(t.has("type")||t.has("dense"))&&this.s()}i(t){this.t=this.slotElement.assignedNodes().filter(t=>1===t.nodeType),this.s()}s(){this.t.forEach(t=>{const e=t;e.setAttribute("list-type",this.type),this.dense?e.setAttribute("dense",""):e.removeAttribute("dense")})}static get styles(){return[e,i`:host{display:flex;flex-direction:column;contain:content;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:0;padding:8px 0;line-height:1.5rem;list-style-type:none}:host([dense]){padding-top:4px;padding-bottom:4px;font-size:.812rem}`]}render(){return s`<slot></slot>`}};o([n({type:String,reflect:!0})],c.prototype,"type",void 0),o([n({type:Boolean,reflect:!0})],c.prototype,"dense",void 0),o([a("slot")],c.prototype,"slotElement",void 0),c=o([r("mwc-list")],c);let d=class extends t{static get styles(){return[e,i`:host{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}:host([padded]){margin:0 16px}:host([inset]){margin-left:72px;margin-right:0;width:calc(100% - 72px)}:host([padded][inset]){width:calc(100% - 72px - 16px)}`]}render(){return s``}};d=o([r("mwc-list-divider")],d);let h=class extends t{constructor(){super(...arguments),this.type="default",this.label="default",this.selected=!1,this.activated=!1}firstUpdated(){this.setAttribute("role","listitem")}static get styles(){return[e,i`:host{box-sizing:border-box;display:flex;position:relative;align-items:center;justify-content:flex-start;height:48px;padding:0 16px;overflow:hidden}mwc-ripple{position:absolute;left:-16px;width:calc(100% + 32px);height:100%;overflow:hidden}:host:focus{outline:0}.secondary{color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.meta,mwc-icon,slot[name=icon]::slotted(*){background-color:transparent;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}:host([activated]),:host([activated]) mwc-icon,:host([activated]) slot[name=icon]::slotted(*),:host([selected]),:host([selected]) mwc-icon,:host([selected]) slot[name=icon]::slotted(*){color:var(--mdc-theme-primary,#6200ee)}slot[name=icon] mwc-icon,slot[name=icon]::slotted(*){margin-left:0;margin-right:32px;width:24px;height:24px;display:inline-flex;flex-shrink:0;align-items:center;justify-content:center}.meta{margin-left:auto;margin-right:0}.secondary,.text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}.secondary{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit}:host([dense]) .secondary{font-size:inherit}:host([dense]){height:40px}:host([dense]) slot[name=icon] mwc-icon,:host([dense]) slot[name=icon]::slotted(*){margin-left:0;margin-right:36px;width:20px;height:20px}:host([list-type=avatar-list]){height:56px}:host([list-type=avatar-list]) slot[name=icon] mwc-icon,:host([list-type=avatar-list]) slot[name=icon]::slotted(*){margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%;background-color:rgba(0,0,0,.3);color:#fff}:host([list-type=two-line]){height:72px}:host([list-type=two-line][dense]){height:60px}:host([list-type=avatar-list][dense]){height:48px}:host([list-type=avatar-list][dense]) slot[name=icon] mwc-icon,:host([list-type=avatar-list][dense]) slot[name=icon]::slotted(*){margin-left:0;margin-right:20px;width:36px;height:36px}`]}render(){return s`<mwc-ripple ?selected=${this.selected} ?activated=${this.activated}></mwc-ripple><slot name=icon>${this.icon?s`<mwc-icon>${this.icon}</mwc-icon>`:l}</slot><span class=text><span class=primary><slot>${this.label}</slot></span><span class=secondary><slot name=secondary></slot></span></span><span class=meta><slot name=meta>${this.trailingIcon?s`<mwc-icon>${this.trailingIcon}</mwc-icon>`:l}</slot></span>`}};o([n({type:String})],h.prototype,"type",void 0),o([n({type:String})],h.prototype,"label",void 0),o([n({type:String})],h.prototype,"icon",void 0),o([n({type:String,attribute:"trailing-icon"})],h.prototype,"trailingIcon",void 0),o([n({type:Boolean,reflect:!0})],h.prototype,"selected",void 0),o([n({type:Boolean,reflect:!0})],h.prototype,"activated",void 0),h=o([r("mwc-list-item")],h);export{d as ListDividerElement,c as ListElement,h as ListItemElement};
