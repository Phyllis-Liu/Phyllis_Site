var t=Object.defineProperty,e=(e,i,s)=>((e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s)(e,"symbol"!=typeof i?i+"":i,s);!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const i of t)if("childList"===i.type)for(const t of i.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,o)},l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:m,getPrototypeOf:g}=Object,u=globalThis,f=u.trustedTypes,v=f?f.emptyScript:"",y=u.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(s){i=null}}return i}},_=(t,e)=>!c(t,e),x={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),u.litPropertyMetadata??(u.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);o.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=g(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),o=i.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??_)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EC(t,this[t])))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,y?.({ReactiveElement:A}),(u.reactiveElementVersions??(u.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=globalThis,w=E.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,O=`<${P}>`,U=document,T=()=>U.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,L=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,z=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,V=(Y=1,(t,...e)=>({_$litType$:Y,strings:t,values:e})),W=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),K=new WeakMap,X=U.createTreeWalker(U,129);var Y;function q(t,e){if(!L(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const n=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=H;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,d=0;for(;d<e.length&&(n.lastIndex=d,l=n.exec(e),null!==l);)d=n.lastIndex,n===H?"!--"===l[1]?n=M:void 0!==l[1]?n=z:void 0!==l[2]?(D.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=o??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,i=l[1],n=void 0===l[3]?I:'"'===l[3]?B:j):n===B||n===j?n=I:n===M||n===z?n=H:(n=I,o=void 0);const h=n===I&&t[a+1].startsWith("/>")?" ":"";r+=n===H?e+O:c>=0?(s.push(i),e.slice(0,c)+C+e.slice(c)+k+h):e+k+(-2===c?a:h)}return[q(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=F.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=X.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=c[r++],i=s.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),X.nextNode(),a.push({type:2,index:++o});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:o}),t+=k.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=N(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);X.currentNode=s;let o=X.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=X.nextNode(),r++)}return X.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),N(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>L(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new F(t)),e}k(t){L(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=J(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=J(this,s[i+n],e,n),a===W&&(a=this._$AH[n]),r||(r=!N(a)||a!==this._$AH[n]),a===G?t=G:t!==G&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??G)===W)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=E.litHtmlPolyfillSupport;rt?.(F,Q),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(T(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const at=globalThis.litElementPolyfillSupport;at?.({LitElement:nt}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");class lt extends nt{render(){return V`
            <div class="header">
                <div class="logo-area">LOGO AREA</div>
                <nav class="nav-menu">
                    <a class="nav-item">SKILL</a>
                    <a class="nav-item">EXPERIENCE</a>
                    <a class="nav-item">BLOG</a>
                    <a class="nav-item">CONTACT</a>
                    <a class="nav-item">EN</a>
                </nav>
            </div>

            <div class="main-content">
                <div class="photo-area">
                    PHOTO AREA
                </div>
                <div class="content-area">
                    <h1>Hi there!</h1>
                    <p>I'm Phyllis, the creator of this little corner of the internet. 
                       I'm passionate about marketing, technical writing, and front-end development, 
                       and I'm here to share my world with you!</p>
                    <p>Thank you for visiting, and I hope you enjoy your stay!</p>
                    
                    <div class="button-group">
                        <a class="button">Resume</a>
                        <a class="button">Ability</a>
                        <a class="button">Experience</a>
                    </div>

                    <div class="social-links">
                        <a class="social-link" title="Email">📧</a>
                        <a class="social-link" title="LinkedIn">in</a>
                        <a class="social-link" title="GitHub">gh</a>
                    </div>
                </div>
            </div>

            <div class="footer">
                Copyright © 2025 Phyllis Liu. All rights reserved.
            </div>
        `}}e(lt,"styles",a`
        :host {
            display: block;
            min-height: 100vh;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            border-bottom: 1px solid #eee;
        }

        .logo-area {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
            align-items: center;
        }

        .nav-item {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: 500;
            cursor: pointer;
        }

        .main-content {
            display: flex;
            align-items: center;
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            gap: 4rem;
        }

        .photo-area {
            width: 500px;
            height: 500px;
            border-radius: 2rem;
            overflow: hidden;
            background-color: #f5f5f5;
        }

        .content-area {
            flex: 1;
        }

        h1 {
            font-size: 4rem;
            margin: 0 0 1rem;
            color: var(--primary-color);
        }

        p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--secondary-color);
            margin-bottom: 2rem;
        }

        .button-group {
            display: flex;
            gap: 1rem;
        }

        .button {
            padding: 0.8rem 2rem;
            border: 1px solid #ddd;
            border-radius: 2rem;
            text-decoration: none;
            color: var(--primary-color);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .button:hover {
            background-color: var(--accent-color);
            color: white;
            border-color: var(--accent-color);
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #f5f5f5;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background-color: var(--accent-color);
            color: white;
        }

        .footer {
            text-align: center;
            padding: 2rem;
            color: var(--secondary-color);
            margin-top: auto;
        }
    `),customElements.define("my-app",lt);class ct extends nt{render(){return V`
      <div class="nav-bar">
        <div class="logo-area">LOGO AREA</div>
        <div class="nav-links">
          <a href="/skill">SKILL</a>
          <a href="/experience">EXPERIENCE</a>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
          <a href="#" @click=\${this._toggleLanguage}>EN</a>
        </div>
      </div>

      <div class="main-content">
        <h1>Skill & Ability</h1>
        <div class="venn-diagram">
          <div class="circle marketing">Marketing</div>
          <div class="circle technical-writing">Technical Writing</div>
          <div class="circle front-end">Front-End</div>
        </div>
      </div>

      <div class="footer">
        Copyright © 2025 Phyllis Liu. All rights reserved.
      </div>
    `}_toggleLanguage(t){t.preventDefault()}}e(ct,"styles",a`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: white;
    }

    .logo-area {
      border: 1px solid #000;
      padding: 1rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #666;
    }

    .main-content {
      text-align: center;
      padding: 2rem;
    }

    h1 {
      color: #666;
      font-size: 3rem;
      margin-bottom: 4rem;
    }

    .venn-diagram {
      position: relative;
      width: 600px;
      height: 600px;
      margin: 0 auto;
    }

    .circle {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      opacity: 0.7;
    }

    .marketing {
      background-color: #E8DCD0;
      top: 0;
      left: 50px;
    }

    .technical-writing {
      background-color: #C4C4C4;
      top: 0;
      right: 50px;
    }

    .front-end {
      background-color: #D8E1D7;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }

    .footer {
      text-align: center;
      padding: 2rem;
      color: #666;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  `),customElements.define("skill-page",ct);class dt extends nt{render(){return V`
      <nav class="nav-bar">
        <div class="logo">LOGO AREA</div>
        <div class="nav-links">
          <a href="/skills">SKILL</a>
          <a href="/experience">EXPERIENCE</a>
          <a href="/blog">BLOG</a>
          <a href="/contact">CONTACT</a>
          <a href="#" @click=\${this._toggleLanguage}>EN</a>
        </div>
      </nav>

      <h1 class="blog-title">Blog</h1>

      <div class="blog-grid">
        ${this._renderBlogCards()}
      </div>

      <a href="#" class="more-button">MORE</a>

      <footer class="footer">
        Copyright © 2025 Phyllis Liu. All rights reserved.
      </footer>
    `}_renderBlogCards(){return Array(3).fill({title:"Title",description:"In a whimsical land where purple elephants fly, the sun sings lullabies to dancing trees....."}).map((t=>V`
      <div class="blog-card">
        <div class="blog-card-image">IMAGE AREA</div>
        <div class="blog-card-content">
          <h2 class="blog-card-title">${t.title}</h2>
          <p class="blog-card-description">${t.description}</p>
        </div>
      </div>
    `))}_toggleLanguage(t){t.preventDefault()}}e(dt,"styles",a`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }

    .logo {
      border: 1px solid #000;
      padding: 1rem;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #666;
    }

    .blog-title {
      text-align: center;
      color: #666;
      font-size: 3rem;
      margin: 4rem 0;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      padding: 0 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .blog-card {
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .blog-card-image {
      width: 100%;
      height: 200px;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .blog-card-content {
      padding: 1.5rem;
    }

    .blog-card-title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .blog-card-description {
      color: #666;
      line-height: 1.5;
    }

    .more-button {
      display: block;
      width: fit-content;
      margin: 3rem auto;
      padding: 0.75rem 2rem;
      border: 1px solid #666;
      border-radius: 2rem;
      color: #666;
      text-decoration: none;
      cursor: pointer;
    }

    .footer {
      text-align: center;
      color: #666;
      padding: 2rem;
      margin-top: 2rem;
    }
  `),customElements.define("blog-page",dt);class ht extends nt{render(){return V`
      <div class="experience-page">
        <h1 class="title">Experience</h1>
        
        <timeline-element></timeline-element>

        <div class="education">
          <h2 class="education-title">Education</h2>
          <div class="education-items">
            <div class="education-item">
              <img src="public/images/shih-hsin-logo.png" alt="Shih Hsin University" class="school-logo">
              <div class="school-info">
                <h3>Shih Hsin University</h3>
                <p>Bachelor's degree / English Language and Literature</p>
                <p>2006 - 2010</p>
              </div>
            </div>
            <div class="education-item">
              <img src="public/images/apc-logo.png" alt="Australia Pacific College" class="school-logo">
              <div class="school-info">
                <h3>Australia Pacific College</h3>
                <p>Advanced Diploma / Marketing and Communication</p>
                <p>April 2018 - 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright">
          Copyright © 2025 Phyllis Liu. All rights reserved.
        </div>
      </div>
    `}}e(ht,"styles",a`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .title {
      font-size: 48px;
      color: #666;
      margin-bottom: 50px;
    }


    .education {
      margin-top: 100px;
    }

    .education-title {
      font-size: 48px;
      color: #666;
      margin-bottom: 50px;
    }

    .education-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
    }

    .education-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
    }

    .school-logo {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    .school-info h3 {
      margin: 0;
      font-size: 18px;
      color: #333;
    }

    .school-info p {
      margin: 5px 0;
      color: #666;
    }

    .copyright {
      text-align: center;
      color: #666;
      margin-top: 100px;
      padding: 20px 0;
    }
  `),customElements.define("experience-page",ht);class pt extends nt{render(){return V`
      <div class="dot"></div>
      <div class="year">${this.title}</div>
      <div class="event-content">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
      </div>
    `}}e(pt,"styles",a`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      flex: 1;
      min-width: 120px;
    }

    .event-content {
      position: absolute;
      width: 200px;
      padding: 15px;
      background-color: var(--event-bg-color);
      border-radius: 10px;
      box-shadow: var(--event-shadow);
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      text-align: center;
    }

    :host([is-odd]) .event-content {
      bottom: 100%;
      margin-bottom: 20px;
    }

    :host(:not([is-odd])) .event-content {
      top: 100%;
      margin-top: 20px;
    }

    :host(:hover) .event-content {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    :host([is-odd]) .event-content {
      transform: translateY(10px);
    }

    :host(:not([is-odd])) .event-content {
      transform: translateY(-10px);
    }

    .event-content::before {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      height: 0;
      border-style: solid;
    }

    :host([is-odd]) .event-content::before {
      bottom: -10px;
      transform: translateX(-50%);
      border-width: 10px 10px 0 10px;
      border-color: var(--event-bg-color) transparent transparent transparent;
    }

    :host(:not([is-odd])) .event-content::before {
      top: -10px;
      transform: translateX(-50%);
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent var(--event-bg-color) transparent;
    }

    .dot {
      width: var(--dot-size);
      height: var(--dot-size);
      background-color: var(--dot-bg-color);
      border: 4px solid var(--dot-border-color);
      border-radius: 50%;
      margin: 10px 0;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      z-index: 2;
    }

    :host(:hover) .dot {
      background-color: var(--dot-hover-bg-color);
      transform: scale(1.2);
    }

    .year {
      font-size: 1rem;
      font-weight: 500;
      color: #666;
      transition: all 0.3s ease;
    }

    :host(:hover) .year {
      color: var(--dot-border-color);
    }

    h3 {
      margin-top: 0;
      color: #333;
      font-size: 1.1rem;
    }

    p {
      margin: 5px 0 0;
      font-size: 0.9rem;
      color: #666;
    }

    @media (max-width: 768px) {
      :host {
        width: 100%;
        margin: 15px 0;
      }

      .event-content {
        position: relative;
        width: calc(100% - 60px);
        margin-left: 60px !important;
        opacity: 1;
        visibility: visible;
        transform: none !important;
        top: 0 !important;
        bottom: auto !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
      }

      .dot {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
      }

      .year {
        margin-left: 60px;
        text-align: left;
      }

      .event-content::before {
        display: none;
      }
    }
  `),e(pt,"properties",{title:{type:String},description:{type:String},isOdd:{type:Boolean,reflect:!0,attribute:"is-odd"}});class mt extends nt{constructor(){super(),this.events=[{title:"2010",description:"世新大學畢業"},{title:"2011",description:"開始第一份工作"},{title:"2012",description:"轉職新領域"},{title:"2013",description:"持續成長"},{title:"2015",description:"職涯轉折點"},{title:"2017",description:"新的挑戰"},{title:"2022",description:"重要里程碑"},{title:"Current",description:"現在"}]}render(){return V`
      <div class="timeline" role="list">
        ${this.events.map(((t,e)=>V`
          <event-element
            .title=${t.title}
            .description=${t.description}
            ?is-odd=${e%2==0}
            role="listitem"
          ></event-element>
        `))}
      </div>
    `}}e(mt,"styles",a`
    :host {
      --timeline-width: 4px;
      --timeline-color: #ddd;
      --event-bg-color: #fff;
      --event-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      --event-hover-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      --dot-size: 16px;
      --dot-border-color: #4caf50;
      --dot-bg-color: #fff;
      --dot-hover-bg-color: #4caf50;
      display: block;
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      padding: 40px 20px;
    }

    .timeline {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      min-height: 150px;
    }

    .timeline::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      height: var(--timeline-width);
      background-color: var(--timeline-color);
      transform: translateY(-50%);
    }

    @media (max-width: 768px) {
      .timeline {
        flex-direction: column;
        align-items: flex-start;
        min-height: auto;
      }

      .timeline::before {
        left: 30px;
        width: var(--timeline-width);
        height: 100%;
        top: 0;
        transform: none;
      }
    }
  `),e(mt,"properties",{events:{type:Array}}),customElements.define("event-element",pt),customElements.define("timeline-element",mt);const gt=document.createElement("style");gt.textContent="\n    html, body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n        width: 100%;\n    }\n\n    body {\n        display: flex;\n        flex-direction: column;\n    }\n",document.head.appendChild(gt);
