import{A as Gt,G as me,J as tt,K as $t,L as Wt,M as ne,a as Je,b as Bt,n as Ht,p as qt,q as X,sa as Xt,v as ie,w as et}from"./chunk-Z2VT674J.js";import{Ab as $,Fb as Se,Ib as P,J as Ft,Jb as W,Kb as ce,L as At,Lb as V,Mb as Rt,N as St,Nb as Xe,Ob as C,P as De,Pa as _,Pb as w,Qb as kt,Rb as Tt,S as Me,Sb as Ze,Tb as Qe,U as G,Ub as Ye,V as k,Va as Vt,Vb as x,W as D,Wa as O,Wb as Ot,Xa as f,Xb as Pt,Y as h,Yb as Nt,Z as Et,_ as s,a as l,ab as j,b as v,bb as M,c as yt,cb as m,cc as L,e as xt,fb as I,g as R,gb as Ae,h as We,ic as jt,jb as It,ka as T,kb as Lt,l as Ct,la as S,lc as U,m as wt,mc as N,ob as z,pa as g,pb as b,qb as y,r as Ce,ra as Fe,rc as ue,sa as Q,sc as zt,ta as le,tc as ee,ub as J,va as E,vb as F,w as Dt,wb as A,wc as te,xb as de,xc as Ke,y as Mt,yb as Y,yc as Ut,z as we,zb as K}from"./chunk-25ZSCIWA.js";var ni=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||n)(f(O),f(E))};static \u0275dir=m({type:n})}return n})(),ri=(()=>{class n extends ni{static \u0275fac=(()=>{let e;return function(r){return(e||(e=le(n)))(r||n)}})();static \u0275dir=m({type:n,features:[I]})}return n})(),ze=new h("");var Xi={provide:ze,useExisting:G(()=>oi),multi:!0};function Zi(){let n=Je()?Je().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Qi=new h(""),oi=(()=>{class n extends ni{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Zi())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||n)(f(O),f(E),f(Qi,8))};static \u0275dir=m({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&P("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[L([Xi]),I]})}return n})();function ot(n){return n==null||at(n)===0}function at(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ye=new h(""),Ue=new h(""),Yi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ve=class{static min(t){return Ki(t)}static max(t){return Ji(t)}static required(t){return ai(t)}static requiredTrue(t){return en(t)}static email(t){return tn(t)}static minLength(t){return nn(t)}static maxLength(t){return rn(t)}static pattern(t){return on(t)}static nullValidator(t){return Ie()}static compose(t){return mi(t)}static composeAsync(t){return fi(t)}};function Ki(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Ji(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function ai(n){return ot(n.value)?{required:!0}:null}function en(n){return n.value===!0?null:{required:!0}}function tn(n){return ot(n.value)||Yi.test(n.value)?null:{email:!0}}function nn(n){return t=>{let e=t.value?.length??at(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function rn(n){return t=>{let e=t.value?.length??at(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function on(n){if(!n)return Ie;let t,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(ot(i.value))return null;let r=i.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Ie(n){return null}function si(n){return n!=null}function li(n){return Lt(n)?wt(n):n}function di(n){let t={};return n.forEach(e=>{t=e!=null?l(l({},t),e):t}),Object.keys(t).length===0?null:t}function ci(n,t){return t.map(e=>e(n))}function an(n){return!n.validate}function ui(n){return n.map(t=>an(t)?t:e=>t.validate(e))}function mi(n){if(!n)return null;let t=n.filter(si);return t.length==0?null:function(e){return di(ci(e,t))}}function st(n){return n!=null?mi(ui(n)):null}function fi(n){if(!n)return null;let t=n.filter(si);return t.length==0?null:function(e){let i=ci(e,t).map(li);return Dt(i).pipe(Ce(di))}}function lt(n){return n!=null?fi(ui(n)):null}function Zt(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function hi(n){return n._rawValidators}function pi(n){return n._rawAsyncValidators}function it(n){return n?Array.isArray(n)?n:[n]:[]}function Le(n,t){return Array.isArray(n)?n.includes(t):n===t}function Qt(n,t){let e=it(t);return it(n).forEach(r=>{Le(e,r)||e.push(r)}),e}function Yt(n,t){return it(t).filter(e=>!Le(n,e))}var Re=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=st(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},B=class extends Re{name;get formDirective(){return null}get path(){return null}},H=class extends Re{_parent=null;name=null;valueAccessor=null},ke=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Tr=(()=>{class n extends ke{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(f(H,2))};static \u0275dir=m({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&x("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[I]})}return n})(),Or=(()=>{class n extends ke{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(f(B,10))};static \u0275dir=m({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&x("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[I]})}return n})();var fe="VALID",Ee="INVALID",re="PENDING",he="DISABLED",Z=class{},Te=class extends Z{value;source;constructor(t,e){super(),this.value=t,this.source=e}},ge=class extends Z{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},_e=class extends Z{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},oe=class extends Z{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Oe=class extends Z{source;constructor(t){super(),this.source=t}},be=class extends Z{source;constructor(t){super(),this.source=t}};function dt(n){return(Be(n)?n.validators:n)||null}function sn(n){return Array.isArray(n)?st(n):n||null}function ct(n,t){return(Be(t)?t.asyncValidators:n)||null}function ln(n){return Array.isArray(n)?lt(n):n||null}function Be(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function gi(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new Me(1e3,"");if(!i[e])throw new Me(1001,"")}function _i(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new Me(-1002,"")})}var ae=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return U(this.statusReactive)}set status(t){U(()=>this.statusReactive.set(t))}_status=N(()=>this.statusReactive());statusReactive=g(void 0);get valid(){return this.status===fe}get invalid(){return this.status===Ee}get pending(){return this.status===re}get disabled(){return this.status===he}get enabled(){return this.status!==he}errors;get pristine(){return U(this.pristineReactive)}set pristine(t){U(()=>this.pristineReactive.set(t))}_pristine=N(()=>this.pristineReactive());pristineReactive=g(!0);get dirty(){return!this.pristine}get touched(){return U(this.touchedReactive)}set touched(t){U(()=>this.touchedReactive.set(t))}_touched=N(()=>this.touchedReactive());touchedReactive=g(!1);get untouched(){return!this.touched}_events=new R;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Qt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Qt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Yt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Yt(t,this._rawAsyncValidators))}hasValidator(t){return Le(this._rawValidators,t)}hasAsyncValidator(t){return Le(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(v(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new _e(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new _e(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(v(l({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new ge(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new ge(!0,i))}markAsPending(t={}){this.status=re;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new oe(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(v(l({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=he,this.errors=null,this._forEachChild(r=>{r.disable(v(l({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Te(this.value,i)),this._events.next(new oe(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(v(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=fe,this._forEachChild(i=>{i.enable(v(l({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(v(l({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===fe||this.status===re)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Te(this.value,e)),this._events.next(new oe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(v(l({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?he:fe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=re,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=li(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new oe(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?he:this.errors?Ee:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(re)?re:this._anyControlsHaveStatus(Ee)?Ee:fe}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new ge(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new _e(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Be(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=sn(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ln(this._rawAsyncValidators)}},se=class extends ae{constructor(t,e,i){super(dt(e),ct(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){_i(this,!0,t),Object.keys(t).forEach(i=>{gi(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,v(l({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new be(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var nt=class extends se{};var xe=new h("",{factory:()=>He}),He="always";function vi(n,t){return[...t.path,n]}function Pe(n,t,e=He){ut(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),cn(n,t),mn(n,t),un(n,t),dn(n,t)}function Kt(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),je(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Ne(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function dn(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function ut(n,t){let e=hi(n);t.validator!==null?n.setValidators(Zt(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=pi(n);t.asyncValidator!==null?n.setAsyncValidators(Zt(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Ne(t._rawValidators,r),Ne(t._rawAsyncValidators,r)}function je(n,t){let e=!1;if(n!==null){if(t.validator!==null){let r=hi(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(t.asyncValidator!==null){let r=pi(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==t.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Ne(t._rawValidators,i),Ne(t._rawAsyncValidators,i),e}function cn(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&bi(n,t)})}function un(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&bi(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function bi(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function mn(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function yi(n,t){n==null,ut(n,t)}function fn(n,t){return je(n,t)}function xi(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function hn(n){return Object.getPrototypeOf(n.constructor)===ri}function Ci(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function wi(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===oi?e=o:hn(o)?i=o:r=o}),r||i||e||null}function pn(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var gn={provide:B,useExisting:G(()=>mt)},pe=Promise.resolve(),mt=(()=>{class n extends B{callSetDisabledState;get submitted(){return U(this.submittedReactive)}_submitted=N(()=>this.submittedReactive());submittedReactive=g(!1);_directives=new Set;form;ngSubmit=new T;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new se({},st(e),lt(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){pe.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Pe(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){pe.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){pe.then(()=>{let i=this._findContainer(e.path),r=new se({});yi(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){pe.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){pe.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ci(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Oe(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(f(ye,10),f(Ue,10),f(xe,8))};static \u0275dir=m({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[L([gn]),I]})}return n})();function Jt(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function ei(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ve=class extends ae{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(dt(e),ct(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Be(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ei(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new be(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Jt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Jt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){ei(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var _n=n=>n instanceof ve;var vn={provide:H,useExisting:G(()=>bn)},ti=Promise.resolve(),bn=(()=>{class n extends H{_changeDetectorRef;callSetDisabledState;control=new ve;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new T;constructor(e,i,r,o,a,d){super(),this._changeDetectorRef=a,this.callSetDisabledState=d,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=wi(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),xi(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Pe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){ti.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&te(i);ti.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?vi(e,this._parent):[e]}static \u0275fac=function(i){return new(i||n)(f(B,9),f(ye,10),f(Ue,10),f(ze,10),f(ee,8),f(xe,8))};static \u0275dir=m({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[L([vn]),I,Q]})}return n})();var Nr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),yn={provide:ze,useExisting:G(()=>xn),multi:!0},xn=(()=>{class n extends ri{writeValue(e){let i=e??"";this.setProperty("value",i)}registerOnChange(e){this.onChange=i=>{e(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=le(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,r){i&1&&P("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[L([yn]),I]})}return n})();var rt=class extends ae{constructor(t,e,i){super(dt(e),ct(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,i={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,e={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,i={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){_i(this,!1,t),t.forEach((i,r)=>{gi(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((i,r)=>{i.reset(t[r],v(l({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new be(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,i)=>{t(e,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var Cn=(()=>{class n extends B{callSetDisabledState;get submitted(){return U(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=N(()=>this._submittedReactive());_submittedReactive=g(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(je(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Pe(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Kt(e.control||null,e,!1),pn(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Ci(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Oe(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Kt(i||null,e),_n(r)&&(Pe(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);yi(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&fn(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ut(this.form,this),this._oldForm&&je(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||n)(f(ye,10),f(Ue,10),f(xe,8))};static \u0275dir=m({type:n,features:[I,Q]})}return n})();var Di=new h("");var wn={provide:H,useExisting:G(()=>Dn)},Dn=(()=>{class n extends H{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=wi(this,o)}ngOnChanges(e){this._added||this._setUpControl(),xi(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return vi(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(f(B,13),f(ye,10),f(Ue,10),f(ze,10),f(Di,8))};static \u0275dir=m({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[L([wn]),I,Q]})}return n})();var Mn={provide:B,useExisting:G(()=>ft)},ft=(()=>{class n extends Cn{form=null;ngSubmit=new T;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=le(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&P("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[L([Mn]),I]})}return n})();var Fn=(()=>{class n{_validator=Ie;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Ie,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,features:[Q]})}return n})();var An={provide:ye,useExisting:G(()=>Sn),multi:!0};var Sn=(()=>{class n extends Fn{required;inputName="required";normalizeInput=te;createValidator=e=>ai;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=le(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,r){i&2&&z("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[L([An]),I]})}return n})();var Mi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({})}return n})();function ii(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var jr=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return ii(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new se(r,o)}record(e,i=null){let r=this._reduceControls(e);return new nt(r,i)}control(e,i,r){let o={};return this.useNonNullable?(ii(i)?o=i:(o.validators=i,o.asyncValidators=r),new ve(e,v(l({},o),{nonNullable:!0}))):new ve(e,i,r)}array(e,i,r){let o=e.map(a=>this._createControl(a));return new rt(o,i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof ve)return e;if(e instanceof ae)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zr=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:xe,useValue:e.callSetDisabledState??He}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[Mi]})}return n})(),Ur=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Di,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:xe,useValue:e.callSetDisabledState??He}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[Mi]})}return n})();var ht=class{_box;_destroyed=new R;_resizeSubject=new R;_resizeObserver;_elementObservables=new Map;constructor(t){this._box=t,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(t){return this._elementObservables.has(t)||this._elementObservables.set(t,new xt(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(t,{box:this._box}),()=>{this._resizeObserver?.unobserve(t),i.unsubscribe(),this._elementObservables.delete(t)}}).pipe(we(e=>e.some(i=>i.target===t)),At({bufferSize:1,refCount:!0}),De(this._destroyed))),this._elementObservables.get(t)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Fi=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(S);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ht(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var En=["notch"],Vn=["matFormFieldNotchedOutline",""],In=["*"],Ai=["iconPrefixContainer"],Si=["textPrefixContainer"],Ei=["iconSuffixContainer"],Vi=["textSuffixContainer"],Ln=["textField"],Rn=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],kn=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Tn(n,t){n&1&&de(0,"span",21)}function On(n,t){if(n&1&&(F(0,"label",20),V(1,1),b(2,Tn,1,0,"span",21),A()),n&2){let e=W(2);J("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),z("for",e._control.disableAutomaticLabeling?null:e._control.id),_(2),y(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Pn(n,t){if(n&1&&b(0,On,3,5,"label",20),n&2){let e=W();y(e._hasFloatingLabel()?0:-1)}}function Nn(n,t){n&1&&de(0,"div",7)}function jn(n,t){}function zn(n,t){if(n&1&&Ae(0,jn,0,0,"ng-template",13),n&2){W(2);let e=Qe(1);J("ngTemplateOutlet",e)}}function Un(n,t){if(n&1&&(F(0,"div",9),b(1,zn,1,1,null,13),A()),n&2){let e=W();J("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),_(),y(e._forceDisplayInfixLabel()?-1:1)}}function Bn(n,t){n&1&&(F(0,"div",10,2),V(2,2),A())}function Hn(n,t){n&1&&(F(0,"div",11,3),V(2,3),A())}function qn(n,t){}function Gn(n,t){if(n&1&&Ae(0,qn,0,0,"ng-template",13),n&2){W();let e=Qe(1);J("ngTemplateOutlet",e)}}function $n(n,t){n&1&&(F(0,"div",14,4),V(2,4),A())}function Wn(n,t){n&1&&(F(0,"div",15,5),V(2,5),A())}function Xn(n,t){n&1&&de(0,"div",16)}function Zn(n,t){n&1&&(F(0,"div",18),V(1,6),A())}function Qn(n,t){if(n&1&&(F(0,"mat-hint",22),Pt(1),A()),n&2){let e=W(2);J("id",e._hintLabelId),_(),Nt(e.hintLabel)}}function Yn(n,t){if(n&1&&(F(0,"div",19),b(1,Qn,2,2,"mat-hint",22),V(2,7),de(3,"div",23),V(4,8),A()),n&2){let e=W();_(),y(e.hintLabel?1:-1)}}var pt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["mat-label"]]})}return n})(),Kn=new h("MatError");var gt=(()=>{class n{align="start";id=s(me).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(Se("id",r.id),z("align",null),x("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),Jn=new h("MatPrefix");var er=new h("MatSuffix");var Pi=new h("FloatingLabelParent"),Ii=(()=>{class n{_elementRef=s(E);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Fi);_ngZone=s(S);_parent=s(Pi);_resizeSubscription=new yt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return tr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&x("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function tr(n){let t=n;if(t.offsetParent!==null)return t.scrollWidth;let e=t.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var Li="mdc-line-ripple--active",qe="mdc-line-ripple--deactivating",Ri=(()=>{class n{_elementRef=s(E);_cleanupTransitionEnd;constructor(){let e=s(S),i=s(O);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(qe),e.add(Li)}deactivate(){this._elementRef.nativeElement.classList.add(qe)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(qe);e.propertyName==="opacity"&&r&&i.remove(Li,qe)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),ki=(()=>{class n{_elementRef=s(E);_ngZone=s(S);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&Xe(En,5),i&2){let o;C(o=w())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&x("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Vn,ngContentSelectors:In,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(ce(),$(0,"div",1),Y(1,"div",2,0),V(3),K(),$(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),_t=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n})}return n})();var vt=new h("MatFormField"),ir=new h("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ti="fill",nr="auto",Oi="fixed",rr="translateY(-50%)",Ni=(()=>{class n{_elementRef=s(E);_changeDetectorRef=s(ee);_platform=s(ie);_idGenerator=s(me);_ngZone=s(S);_defaults=s(ir,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ue("iconPrefixContainer");_textPrefixContainerSignal=ue("textPrefixContainer");_iconSuffixContainerSignal=ue("iconSuffixContainer");_textSuffixContainerSignal=ue("textSuffixContainer");_prefixSuffixContainers=N(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=zt(pt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ne(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||nr}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||Ti;this._appearanceSignal.set(i)}_appearanceSignal=g(Ti);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Oi}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Oi}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new R;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Wt();constructor(){let e=this._defaults,i=s(qt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Fe(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=N(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(St([void 0,void 0]),Ce(()=>[i.errorState,i.userAriaDescribedBy]),Ft(),we(([[o,a],[d,u]])=>o!==d||a!==u)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(De(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Mt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Ut({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=N(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(d=>d.align==="start"):null,a=this._hintChildren?this._hintChildren.find(d=>d.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,d=i?.getBoundingClientRect().width??0,u=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,p=this._currentDirection==="rtl"?"-1":"1",$e=`${a+d}px`,Gi=`calc(${p} * (${$e} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,$i=`var(--mat-mdc-form-field-label-transform, ${rr} translateX(${Gi}))`,Wi=a+d+u+c;return[$i,Wi]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(kt(o,r._labelChild,pt,5),Rt(o,_t,5)(o,Jn,5)(o,er,5)(o,Kn,5)(o,gt,5)),i&2){Ze();let a;C(a=w())&&(r._formFieldControl=a.first),C(a=w())&&(r._prefixChildren=a),C(a=w())&&(r._suffixChildren=a),C(a=w())&&(r._errorChildren=a),C(a=w())&&(r._hintChildren=a)}},viewQuery:function(i,r){if(i&1&&(Tt(r._iconPrefixContainerSignal,Ai,5)(r._textPrefixContainerSignal,Si,5)(r._iconSuffixContainerSignal,Ei,5)(r._textSuffixContainerSignal,Vi,5),Xe(Ln,5)(Ai,5)(Si,5)(Ei,5)(Vi,5)(Ii,5)(ki,5)(Ri,5)),i&2){Ze(4);let o;C(o=w())&&(r._textField=o.first),C(o=w())&&(r._iconPrefixContainer=o.first),C(o=w())&&(r._textPrefixContainer=o.first),C(o=w())&&(r._iconSuffixContainer=o.first),C(o=w())&&(r._textSuffixContainer=o.first),C(o=w())&&(r._floatingLabel=o.first),C(o=w())&&(r._notchedOutline=o.first),C(o=w())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&x("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[L([{provide:vt,useExisting:n},{provide:Pi,useExisting:n}])],ngContentSelectors:kn,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(ce(Rn),Ae(0,Pn,1,1,"ng-template",null,0,jt),F(2,"div",6,1),P("click",function(a){return r._control.onContainerClick(a)}),b(4,Nn,1,0,"div",7),F(5,"div",8),b(6,Un,2,2,"div",9),b(7,Bn,3,0,"div",10),b(8,Hn,3,0,"div",11),F(9,"div",12),b(10,Gn,1,1,null,13),V(11),A(),b(12,$n,3,0,"div",14),b(13,Wn,3,0,"div",15),A(),b(14,Xn,1,0,"div",16),A(),F(15,"div",17),b(16,Zn,2,0,"div",18)(17,Yn,5,1,"div",19),A()),i&2){let o;_(2),x("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),_(2),y(!r._hasOutline()&&!r._control.disabled?4:-1),_(2),y(r._hasOutline()?6:-1),_(),y(r._hasIconPrefix?7:-1),_(),y(r._hasTextPrefix?8:-1),_(2),y(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),_(2),y(r._hasTextSuffix?12:-1),_(),y(r._hasIconSuffix?13:-1),_(),y(r._hasOutline()?-1:14),_(),x("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();_(),y((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Ii,ki,Bt,Ri,gt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var bt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[Gt,Ni,X]})}return n})();var ar=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return n})(),sr={passive:!0},ji=(()=>{class n{_platform=s(ie);_ngZone=s(S);_renderer=s(Vt).createRenderer(null,null);_styleLoader=s(Ht);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Ct;this._styleLoader.load(ar);let i=et(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new R,a="cdk-text-field-autofilled",d=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(a)?(i.classList.add(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(a)&&(i.classList.remove(a),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},u=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",d,sr)));return this._monitoredElements.set(i,{subject:o,unlisten:u}),o}stopMonitoring(e){let i=et(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({})}return n})();var Ui=new h("MAT_INPUT_VALUE_ACCESSOR");var Bi=(()=>{class n{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ge=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(t,e,i,r,o){this._defaultMatcher=t,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let t=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==t&&(this.errorState=o,this._stateChanges.next())}};var lr=["button","checkbox","file","hidden","image","radio","range","reset","submit"],dr=new h("MAT_INPUT_CONFIG"),ra=(()=>{class n{_elementRef=s(E);_platform=s(ie);ngControl=s(H,{optional:!0,self:!0});_autofillMonitor=s(ji);_ngZone=s(S);_formField=s(vt,{optional:!0});_renderer=s(O);_uid=s(me).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(dr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new R;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ne(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Ve.required)??!1}set required(e){this._required=ne(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&tt().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ne(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>tt().has(e));constructor(){let e=s(mt,{optional:!0}),i=s(ft,{optional:!0}),r=s(Bi),o=s(Ui,{optional:!0,self:!0}),a=this._elementRef.nativeElement,d=a.nodeName.toLowerCase();o?It(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Ge(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Fe(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){lr.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&P("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(Se("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),z("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),x("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",te]},exportAs:["matInput"],features:[L([{provide:_t,useExisting:n}]),Q]})}return n})(),oa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[bt,bt,zi,X]})}return n})();var Hi=class n{constructor(t){this.logger=t;this.config=this.getConfig(),this.logger.debugLog("Data service initialized",{environment:window.location.href.includes("localhost")?"localhost":"production",siteUrl:this.config.siteUrl,apiPath:this.config.apiPath})}config;getConfig(){return window.location.href.includes("localhost")?(this.logger.debugLog("Running in localhost development mode"),{siteUrl:"http://localhost:3000",apiPath:""}):(this.logger.debugLog("Running in production SharePoint mode"),{siteUrl:"https://collab.napma.nato.int/grc",apiPath:"/_api/web"})}cacheState=g({isInitialized:!1,lastUpdated:null,initializationError:null});risksState=g({isLoaded:!1,lastUpdated:null,error:null});objectivesState=g({isLoaded:!1,lastUpdated:null,error:null});criticalAssetsState=g({isLoaded:!1,lastUpdated:null,error:null});treatmentsState=g({isLoaded:!1,lastUpdated:null,error:null});userState=g({isLoaded:!1,lastUpdated:null,error:null});causesState=g({isLoaded:!1,lastUpdated:null,error:null});consequencesState=g({isLoaded:!1,lastUpdated:null,error:null});controlsState=g({isLoaded:!1,lastUpdated:null,error:null});controlCommentsState=g({isLoaded:!1,lastUpdated:null,error:null});controlImpactState=g({isLoaded:!1,lastUpdated:null,error:null});siteUsersState=g({isLoaded:!1,lastUpdated:null,error:null});_risks=[];_objectives=[];_criticalAssets=[];_treatments=[];_causes=[];_consequences=[];_controls=[];_controlComments=[];_controlImpact=[];_siteUsers=[];_user=null;_selectedRisk=null;_selectedRiskSubject=new We(null);_selectedObjective=null;_selectedObjectiveSubject=new We(null);requestDigest=null;digestExpirationTime=null;selectedRisk$=this._selectedRiskSubject.asObservable();selectedObjective$=this._selectedObjectiveSubject.asObservable();risks(){return this._risks}objectives(){return this._objectives}criticalAssets(){return this._criticalAssets}treatments(){return this._treatments}causes(){return this._causes}consequences(){return this._consequences}controls(){return this._controls}controlComments(){return this._controlComments}controlImpact(){return this._controlImpact}siteUsers(){return this._siteUsers}user(){return this._user}selectedRisk(){return this._selectedRisk}selectedObjective(){return this._selectedObjective}isInitialized(){return this.cacheState().isInitialized}lastUpdated(){return this.cacheState().lastUpdated}risksLoaded(){return this.risksState().isLoaded}objectivesLoaded(){return this.objectivesState().isLoaded}criticalAssetsLoaded(){return this.criticalAssetsState().isLoaded}treatmentsLoaded(){return this.treatmentsState().isLoaded}causesLoaded(){return this.causesState().isLoaded}consequencesLoaded(){return this.consequencesState().isLoaded}controlsLoaded(){return this.controlsState().isLoaded}controlCommentsLoaded(){return this.controlCommentsState().isLoaded}controlImpactLoaded(){return this.controlImpactState().isLoaded}siteUsersLoaded(){return this.siteUsersState().isLoaded}userLoaded(){return this.userState().isLoaded}async initializeCache(){if(this.cacheState().isInitialized){this.logger.debugLog("Cache already initialized, skipping initialization");return}this.logger.debugLog("Starting cache initialization");try{this._user=await this.loadUser(),this.userState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("User loaded",this._user);let[t,e,i,r,o,a,d,u,c,p]=await Promise.all([this.loadRisks(),this.loadObjectives(),this.loadCriticalAssets(),this.loadTreatments(),this.loadCauses(),this.loadConsequences(),this.loadControls(),this.loadControlComments(),this.loadControlImpact(),this.loadSiteUsers()]);this._risks=t,this.risksState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._objectives=e,this.objectivesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._criticalAssets=i,this.criticalAssetsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._treatments=r,this.treatmentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._causes=o,this.causesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._consequences=a,this.consequencesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controls=d,this.controlsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controlComments=u,this.controlCommentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controlImpact=c,this.controlImpactState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._siteUsers=p,this.siteUsersState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.cacheState.set({isInitialized:!0,lastUpdated:new Date,initializationError:null}),this.logger.debugLog("Cache initialization completed successfully",{risksCount:t.length,objectivesCount:e.length,criticalAssetsCount:i.length,treatmentsCount:r.length,causesCount:o.length,consequencesCount:a.length,controlsCount:d.length,controlCommentsCount:u.length,controlImpactCount:c.length,siteUsersCount:p.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:e}),this.logger.debugLog("Cache initialization failed",t),t}}async forceRefreshCache(){this.logger.debugLog("Force refreshing entire cache"),this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:null}),await this.initializeCache()}async invalidateUser(){this.logger.debugLog("Invalidating user cache");try{this._user=await this.loadUser(),this.userState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("User cache refreshed",this._user)}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.userState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("User cache refresh failed",t),t}}async invalidateRisks(){this.logger.debugLog("Invalidating risks cache");try{this._risks=await this.loadRisks(),this.risksState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Risks cache refreshed",{count:this._risks.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.risksState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Risks cache refresh failed",t),t}}async invalidateObjectives(){this.logger.debugLog("Invalidating objectives cache");try{this._objectives=await this.loadObjectives(),this.objectivesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Objectives cache refreshed",{count:this._objectives.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.objectivesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Objectives cache refresh failed",t),t}}async invalidateCriticalAssets(){this.logger.debugLog("Invalidating critical assets cache");try{this._criticalAssets=await this.loadCriticalAssets(),this.criticalAssetsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Critical assets cache refreshed",{count:this._criticalAssets.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.criticalAssetsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Critical assets cache refresh failed",t),t}}async invalidateTreatments(){this.logger.debugLog("Invalidating treatments cache");try{this._treatments=await this.loadTreatments(),this.treatmentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Treatments cache refreshed",{count:this._treatments.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.treatmentsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Treatments cache refresh failed",t),t}}async invalidateCauses(){this.logger.debugLog("Invalidating causes cache");try{this._causes=await this.loadCauses(),this.causesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Causes cache refreshed",{count:this._causes.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.causesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Causes cache refresh failed",t),t}}async invalidateConsequences(){this.logger.debugLog("Invalidating consequences cache");try{this._consequences=await this.loadConsequences(),this.consequencesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Consequences cache refreshed",{count:this._consequences.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.consequencesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Consequences cache refresh failed",t),t}}async invalidateControls(){this.logger.debugLog("Invalidating controls cache");try{this._controls=await this.loadControls(),this.controlsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Controls cache refreshed",{count:this._controls.length})}catch(t){let e=t instanceof Error?t.message:"Unknown error";throw this.controlsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Controls cache refresh failed",t),t}}clearCache(){this.logger.debugLog("Clearing cache"),this._risks=[],this._objectives=[],this._criticalAssets=[],this._treatments=[],this._user=null,this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:null}),this.risksState.set({isLoaded:!1,lastUpdated:null,error:null}),this.objectivesState.set({isLoaded:!1,lastUpdated:null,error:null}),this.criticalAssetsState.set({isLoaded:!1,lastUpdated:null,error:null}),this.treatmentsState.set({isLoaded:!1,lastUpdated:null,error:null}),this.userState.set({isLoaded:!1,lastUpdated:null,error:null})}buildApiUrl(t){return`${this.config.siteUrl}${this.config.apiPath}${t}`}getHeaders(t){let e={Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"};return t&&(e["X-RequestDigest"]=t),e}async getRequestDigest(t=!1){let e=Date.now();if(!t&&this.requestDigest&&this.digestExpirationTime&&e<this.digestExpirationTime)return this.logger.debugLog("Using cached request digest"),this.requestDigest;let i=`${this.config.siteUrl}/_api/contextinfo`;this.logger.debugLog("Requesting new digest from:",i);try{let r=await fetch(i,{method:"POST",headers:{Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"},credentials:"include"});if(!r.ok){let a=await r.text();throw this.logger.debugLog("Failed to get digest",{status:r.status,statusText:r.statusText,responseBody:a}),new Error(`Failed to get request digest: ${r.status} ${r.statusText}`)}let o=await r.json();return this.requestDigest=o.d.GetContextWebInformation.FormDigestValue,this.digestExpirationTime=e+1500*1e3,this.logger.debugLog("Request digest obtained and cached successfully"),this.requestDigest}catch(r){throw this.logger.debugLog("Error getting request digest",r),r}}async executeWithDigestRetry(t,e){try{let i=await this.getRequestDigest();return await t(i)}catch(i){let r=i instanceof Error?i.message:String(i);if(r.includes("401")||r.includes("403")||r.includes("digest")){this.logger.debugLog(`${e} failed with potential digest error, retrying with fresh digest`);let a=await this.getRequestDigest(!0);return await t(a)}throw i}}async queryList(t,e,i,r,o){this.logger.debugLog(`Querying SharePoint list: ${t}`,{select:e,filter:i,orderBy:r,expand:o});let a=`/Lists/getbytitle('${t}')/Items`,d=[];e&&d.push(`$select=${e}`),i&&d.push(`$filter=${i}`),r&&d.push(`$orderby=${r}`),o&&d.push(`$expand=${o}`),d.length>0&&(a+="?"+d.join("&"));let u=this.buildApiUrl(a);this.logger.debugLog(`Fetching data from URL: ${u}`);try{let c=await fetch(u,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!c.ok){let $e=await c.text();throw this.logger.debugLog("HTTP Error Details",{status:c.status,statusText:c.statusText,url:u,responseBody:$e}),new Error(`SharePoint query failed: ${c.status} ${c.statusText}`)}let p=await c.json();return this.logger.debugLog(`Raw JSON response from ${t}`,p),Array.isArray(p)?p:p.d&&p.d.results?p.d.results:p.d&&Array.isArray(p.d)?p.d:(this.logger.debugLog("Unexpected response format",p),[])}catch(c){throw this.logger.debugLog(`Error querying list ${t}`,{error:c,message:c instanceof Error?c.message:String(c),stack:c instanceof Error?c.stack:void 0,url:u}),c}}async addListItem(t,e){this.logger.debugLog(`Adding item to SharePoint list: ${t}`,e);let i=`/Lists/getbytitle('${t}')/Items`,r=this.buildApiUrl(i);this.logger.debugLog(`POST request to URL: ${r}`);let o=async a=>{let d=l({__metadata:{type:`SP.Data.${t}ListItem`}},e);this.logger.debugLog("Request payload:",d);let u=await fetch(r,{method:"POST",headers:this.getHeaders(a),credentials:"include",body:JSON.stringify(d)});if(!u.ok){let p=await u.text();throw this.logger.debugLog("HTTP Error Details",{status:u.status,statusText:u.statusText,url:r,responseBody:p}),new Error(`SharePoint add failed: ${u.status} ${u.statusText} - ${p}`)}let c=await u.json();return this.logger.debugLog(`Item added successfully to ${t}`,c.d),c.d};return this.executeWithDigestRetry(o,"addListItem")}async updateListItem(t,e,i){this.logger.debugLog(`Updating item in SharePoint list: ${t}`,{itemId:e,itemData:i});let r=`/Lists/getbytitle('${t}')/Items(${e})`,o=this.buildApiUrl(r);this.logger.debugLog(`MERGE request to URL: ${o}`);let a=async d=>{let u=l({__metadata:{type:`SP.Data.${t}ListItem`}},i),c=await fetch(o,{method:"POST",headers:v(l({},this.getHeaders(d)),{"X-HTTP-Method":"MERGE","IF-MATCH":"*"}),credentials:"include",body:JSON.stringify(u)});if(!c.ok){let p=await c.text();throw this.logger.debugLog("HTTP Error Details",{status:c.status,statusText:c.statusText,url:o,responseBody:p}),new Error(`SharePoint update failed: ${c.status} ${c.statusText} - ${p}`)}this.logger.debugLog(`Item updated successfully in ${t}`,{itemId:e})};return this.executeWithDigestRetry(a,"updateListItem")}async deleteListItem(t,e){this.logger.debugLog(`Deleting item from SharePoint list: ${t}`,{itemId:e});let i=`/Lists/getbytitle('${t}')/Items(${e})`,r=this.buildApiUrl(i);this.logger.debugLog(`DELETE request to URL: ${r}`);let o=async a=>{let d=await fetch(r,{method:"POST",headers:v(l({},this.getHeaders(a)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!d.ok){let u=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:r,responseBody:u}),new Error(`SharePoint delete failed: ${d.status} ${d.statusText} - ${u}`)}this.logger.debugLog(`Item deleted successfully from ${t}`,{itemId:e})};return this.executeWithDigestRetry(o,"deleteListItem")}async loadUser(){this.logger.debugLog("Loading current user");let t=this.buildApiUrl("/currentuser");this.logger.debugLog(`Fetching current user from URL: ${t}`);try{let e=await fetch(t,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)throw new Error(`Failed to load user: ${e.status}`);return(await e.json()).d}catch(e){throw this.logger.debugLog("Error loading user",e),e}}async loadSiteUsers(){this.logger.debugLog("Loading site users");let t=this.buildApiUrl("/siteusers");this.logger.debugLog(`Fetching site users from URL: ${t}`);try{let e=await fetch(t,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)return this.logger.debugLog(`Failed to load site users: ${e.status} - returning empty array`),[];let i=await e.json();return this.logger.debugLog("Raw JSON response from siteusers",i),i.d.results||[]}catch(e){return this.logger.debugLog("Error loading site users - returning empty array",e),[]}}async loadRisks(){return this.queryList("Risks","FileSystemObjectType,Id,ServerRedirectedEmbedUri,ServerRedirectedEmbedUrl,ContentTypeId,Title,ComplianceAssetId,Category,Description,OwnerId,OwnerStringId,OrgDivision,DateIdentified,InherentLikelihood,InherentImpact,OrgUnit,ParentId,ID,Modified,Created,AuthorId,EditorId,OData__UIVersionString,Attachments,GUID,Author/Id,Author/Title,Author/Name,Author/EMail",void 0,void 0,"Author")}async loadObjectives(){return this.queryList("Objectives")}async loadCriticalAssets(){return this.queryList("CriticalAssets")}async loadTreatments(){return this.queryList("Treatments")}async loadCauses(){return this.queryList("Causes")}async loadConsequences(){return this.queryList("Consequences")}async loadControls(){return this.queryList("Controls")}async loadControlComments(){return this.queryList("ControlComments")}async loadControlImpact(){return this.queryList("ControlImpact")}async addRisk(t){let e=await this.addListItem("Risks",t);return this._risks.push(e),this.logger.debugLog("Risk added to cache",e),e}async updateRisk(t,e){await this.updateListItem("Risks",t,e);let i=this._risks.findIndex(r=>r.Id===t);i!==-1&&(this._risks[i]=l(l({},this._risks[i]),e),this.logger.debugLog("Risk updated in cache",{riskId:t}))}async deleteRisk(t){await this.deleteListItem("Risks",t),this._risks=this._risks.filter(e=>e.Id!==t),this.logger.debugLog("Risk deleted from cache",{riskId:t})}async addObjective(t){let e=await this.addListItem("Objectives",t);return this._objectives.push(e),this.logger.debugLog("Objective added to cache",e),e}async updateObjective(t,e){await this.updateListItem("Objectives",t,e);let i=this._objectives.findIndex(r=>r.Id===t);i!==-1&&(this._objectives[i]=l(l({},this._objectives[i]),e),this.logger.debugLog("Objective updated in cache",{objectiveId:t}))}async deleteObjective(t){await this.deleteListItem("Objectives",t),this._objectives=this._objectives.filter(e=>e.Id!==t),this.logger.debugLog("Objective deleted from cache",{objectiveId:t})}async addCriticalAsset(t){let e=await this.addListItem("CriticalAssets",t);return this._criticalAssets.push(e),this.logger.debugLog("Critical asset added to cache",e),e}async updateCriticalAsset(t,e){await this.updateListItem("CriticalAssets",t,e);let i=this._criticalAssets.findIndex(r=>r.Id===t);i!==-1&&(this._criticalAssets[i]=l(l({},this._criticalAssets[i]),e),this.logger.debugLog("Critical asset updated in cache",{assetId:t}))}async deleteCriticalAsset(t){await this.deleteListItem("CriticalAssets",t),this._criticalAssets=this._criticalAssets.filter(e=>e.Id!==t),this.logger.debugLog("Critical asset deleted from cache",{assetId:t})}async addTreatment(t){let e=await this.addListItem("Treatments",t);return this._treatments.push(e),this.logger.debugLog("Treatment added to cache",e),e}async updateTreatment(t,e){await this.updateListItem("Treatments",t,e);let i=this._treatments.findIndex(r=>r.Id===t);i!==-1&&(this._treatments[i]=l(l({},this._treatments[i]),e),this.logger.debugLog("Treatment updated in cache",{treatmentId:t}))}async deleteTreatment(t){await this.deleteListItem("Treatments",t),this._treatments=this._treatments.filter(e=>e.Id!==t),this.logger.debugLog("Treatment deleted from cache",{treatmentId:t})}async addCause(t){let e=await this.addListItem("Causes",t);return this._causes.push(e),this.logger.debugLog("Cause added to cache",e),e}async updateCause(t,e){await this.updateListItem("Causes",t,e);let i=this._causes.findIndex(r=>r.Id===t);i!==-1&&(this._causes[i]=l(l({},this._causes[i]),e),this.logger.debugLog("Cause updated in cache",{causeId:t}))}async deleteCause(t){await this.deleteListItem("Causes",t),this._causes=this._causes.filter(e=>e.Id!==t),this.logger.debugLog("Cause deleted from cache",{causeId:t})}async addConsequence(t){let e=await this.addListItem("Consequences",t);return this._consequences.push(e),this.logger.debugLog("Consequence added to cache",e),e}async updateConsequence(t,e){await this.updateListItem("Consequences",t,e);let i=this._consequences.findIndex(r=>r.Id===t);i!==-1&&(this._consequences[i]=l(l({},this._consequences[i]),e),this.logger.debugLog("Consequence updated in cache",{consequenceId:t}))}async deleteConsequence(t){await this.deleteListItem("Consequences",t),this._consequences=this._consequences.filter(e=>e.Id!==t),this.logger.debugLog("Consequence deleted from cache",{consequenceId:t})}async addControl(t){let e=await this.addListItem("Controls",t);return this._controls.push(e),this.logger.debugLog("Control added to cache",e),e}async updateControl(t,e){await this.updateListItem("Controls",t,e);let i=this._controls.findIndex(r=>r.Id===t);i!==-1&&(this._controls[i]=l(l({},this._controls[i]),e),this.logger.debugLog("Control updated in cache",{controlId:t}))}async deleteControl(t){await this.deleteListItem("Controls",t),this._controls=this._controls.filter(e=>e.Id!==t),this.logger.debugLog("Control deleted from cache",{controlId:t})}async addControlComment(t){let e=await this.addListItem("ControlComments",t);return this._controlComments.push(e),this.logger.debugLog("ControlComment added to cache",e),e}async updateControlComment(t,e){await this.updateListItem("ControlComments",t,e);let i=this._controlComments.findIndex(r=>r.Id===t);i!==-1&&(this._controlComments[i]=l(l({},this._controlComments[i]),e),this.logger.debugLog("ControlComment updated in cache",{commentId:t}))}async deleteControlComment(t){await this.deleteListItem("ControlComments",t),this._controlComments=this._controlComments.filter(e=>e.Id!==t),this.logger.debugLog("ControlComment deleted from cache",{commentId:t})}async addControlImpact(t){let e=await this.addListItem("ControlImpact",t);return this._controlImpact.push(e),this.logger.debugLog("ControlImpact added to cache",e),e}async updateControlImpact(t,e){await this.updateListItem("ControlImpact",t,e);let i=this._controlImpact.findIndex(r=>r.Id===t);i!==-1&&(this._controlImpact[i]=l(l({},this._controlImpact[i]),e),this.logger.debugLog("ControlImpact updated in cache",{impactId:t}))}async deleteControlImpact(t){await this.deleteListItem("ControlImpact",t),this._controlImpact=this._controlImpact.filter(e=>e.Id!==t),this.logger.debugLog("ControlImpact deleted from cache",{impactId:t})}selectRisk(t){this.logger.debugLog("Selecting risk",{riskId:t});let e=null;for(let i=0;i<this._risks.length;i++)if(this._risks[i].Id===t){e=this._risks[i];break}if(!e)return this.logger.debugLog("Risk not found",{riskId:t}),this._selectedRisk=null,this._selectedRiskSubject.next(null),null;if(this._selectedRisk=v(l({},e),{Objective:null,Causes:[],Consequences:[],Controls:[],Treatments:[],ControlComments:[],ControlImpact:[]}),e.OrgDivision){let i=e.Id.toString().padStart(3,"0");this._selectedRisk.CompositeId=`R${i}${e.OrgDivision}`}else this._selectedRisk.CompositeId=null;if(e.ParentId){for(let i=0;i<this._objectives.length;i++)if(this._objectives[i].Id===e.ParentId){this._selectedRisk.Objective=this._objectives[i];break}}for(let i=0;i<this._causes.length;i++)this._causes[i].ParentId===t&&this._selectedRisk.Causes.push(this._causes[i]);for(let i=0;i<this._consequences.length;i++)this._consequences[i].ParentId===t&&this._selectedRisk.Consequences.push(this._consequences[i]);for(let i=0;i<this._controls.length;i++)this._controls[i].ParentId===t&&this._selectedRisk.Controls.push(this._controls[i]);for(let i=0;i<this._treatments.length;i++)this._treatments[i].ParentId===t&&this._selectedRisk.Treatments.push(this._treatments[i]);for(let i=0;i<this._controlComments.length;i++)this._controlComments[i].ParentId===t&&this._selectedRisk.ControlComments.push(this._controlComments[i]);for(let i=0;i<this._controlImpact.length;i++)this._controlImpact[i].ParentId===t&&this._selectedRisk.ControlImpact.push(this._controlImpact[i]);return this.logger.debugLog("Risk selected with associated items",{riskId:t,compositeId:this._selectedRisk.CompositeId||"Not set",objective:this._selectedRisk.Objective?.Title||"None",causesCount:this._selectedRisk.Causes.length,consequencesCount:this._selectedRisk.Consequences.length,controlsCount:this._selectedRisk.Controls.length,treatmentsCount:this._selectedRisk.Treatments.length,controlCommentsCount:this._selectedRisk.ControlComments.length,controlImpactCount:this._selectedRisk.ControlImpact.length}),this._selectedRiskSubject.next(this._selectedRisk),this._selectedRisk}clearSelectedRisk(){this.logger.debugLog("Clearing selected risk"),this._selectedRisk=null,this._selectedRiskSubject.next(null)}selectObjective(t){this.logger.debugLog("Selecting objective",{objectiveId:t});let e=null;for(let i=0;i<this._objectives.length;i++)if(this._objectives[i].Id===t){e=this._objectives[i];break}if(!e)return this.logger.debugLog("Objective not found",{objectiveId:t}),this._selectedObjective=null,this._selectedObjectiveSubject.next(null),null;this._selectedObjective=v(l({},e),{Risks:[]});for(let i=0;i<this._risks.length;i++)this._risks[i].ParentId===t&&this._selectedObjective.Risks.push(this._risks[i]);return this.logger.debugLog("Objective selected with associated items",{objectiveId:t,title:this._selectedObjective.Title,risksCount:this._selectedObjective.Risks.length}),this._selectedObjectiveSubject.next(this._selectedObjective),this._selectedObjective}clearSelectedObjective(){this.logger.debugLog("Clearing selected objective"),this._selectedObjective=null,this._selectedObjectiveSubject.next(null)}static \u0275fac=function(e){return new(e||n)(Et(Xt))};static \u0275prov=k({token:n,factory:n.\u0275fac,providedIn:"root"})};function cr(n,t){n&1&&$(0,"div",2)}var ur=new h("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ca=(()=>{class n{_elementRef=s(E);_ngZone=s(S);_changeDetectorRef=s(ee);_renderer=s(O);_cleanupTransitionEnd;constructor(){let e=$t(),i=s(ur,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=qi(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=qi(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new T;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(i,r){i&2&&(z("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Ot("mat-"+r.color),x("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ke],bufferValue:[2,"bufferValue","bufferValue",Ke],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(i,r){i&1&&(Y(0,"div",0),$(1,"div",1),b(2,cr,1,0,"div",2),K(),Y(3,"div",3),$(4,"span",4),K(),Y(5,"div",5),$(6,"span",4),K()),i&2&&(_(),Ye("flex-basis",r._getBufferBarFlexBasis()),_(),y(r.mode==="buffer"?2:-1),_(),Ye("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function qi(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var wa=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[X]})}return n})();var mr=["*"];var fr=new h("MAT_CARD_CONFIG"),Ra=(()=>{class n{appearance;constructor(){let e=s(fr,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=j({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(i,r){i&2&&x("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mr,decls:1,vars:0,template:function(i,r){i&1&&(ce(),V(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})();var ka=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=m({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Ta=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=D({imports:[X]})}return n})();export{ze as a,oi as b,Ve as c,B as d,H as e,Tr as f,Or as g,mt as h,bn as i,Nr as j,xn as k,Dn as l,ft as m,Sn as n,jr as o,zr as p,Ur as q,Fi as r,pt as s,gt as t,_t as u,vt as v,Ni as w,bt as x,Bi as y,Ge as z,ra as A,oa as B,Hi as C,Ca as D,wa as E,Ra as F,ka as G,Ta as H};
