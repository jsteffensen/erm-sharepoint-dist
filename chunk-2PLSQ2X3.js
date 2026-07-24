import{$ as Ui,B as Pi,H as Ie,K as Lt,L as Ni,M as ji,N as ye,W as it,X as be,Y as zi,_ as Bi,a as At,b as Oi,ba as Hi,n as It,p as tt,q as J,ta as qi,v as re,w as Tt,x as Vt}from"./chunk-ADYGN4TG.js";import{A as Xe,Ab as me,Ac as Li,Bb as le,Eb as z,Gb as Ke,J as Ci,Jb as W,Kb as Y,L as xi,Lb as ie,Mb as k,N as wi,Nb as ke,Ob as Je,P as q,Pb as v,Qa as p,Qb as y,Rb as Fi,S as Ze,Sb as ki,Tb as Ft,U as se,Ua as he,Ub as kt,V as Z,Va as ee,Vb as Ee,W as T,Wa as Si,Wb as E,Xa as G,Xb as Ei,Y as g,Ya as _,Yb as et,Z as Di,Za as pe,Zb as Ai,_ as s,a as f,b as L,bb as O,c as mi,cb as V,db as m,e as fi,ec as C,g as F,gb as h,h as Re,ha as Mt,hb as ge,ia as Me,j as hi,k as pi,kb as Ri,kc as Ii,l as gi,la as U,lb as Mi,m as _i,ma as j,n as Rt,nc as ne,oc as K,p as vi,pb as te,qa as x,qb as D,qc as Ti,r as Ge,rb as S,s as We,sa as Ye,ta as $,tc as Ae,ua as N,uc as Vi,vb as _e,vc as de,w as yi,wa as w,wb as R,wc as ve,xb as M,y as bi,yb as Fe,yc as P,z as Qe,zb as ue,zc as Et}from"./chunk-DC574OAK.js";var Ji=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(_(G),_(w))};static \u0275dir=m({type:n})}return n})(),en=(()=>{class n extends Ji{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,features:[h]})}return n})(),ht=new g("");var Zn={provide:ht,useExisting:se(()=>tn),multi:!0};function Yn(){let n=At()?At().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Kn=new g(""),tn=(()=>{class n extends Ji{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Yn())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(_(G),_(w),_(Kn,8))};static \u0275dir=m({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&W("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[C([Zn]),h]})}return n})();function jt(n){return n==null||zt(n)===0}function zt(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ze=new g(""),pt=new g(""),Jn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,rt=class{static min(i){return er(i)}static max(i){return tr(i)}static required(i){return nn(i)}static requiredTrue(i){return ir(i)}static email(i){return nr(i)}static minLength(i){return rr(i)}static maxLength(i){return or(i)}static pattern(i){return ar(i)}static nullValidator(i){return ot()}static compose(i){return dn(i)}static composeAsync(i){return cn(i)}};function er(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function tr(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function nn(n){return jt(n.value)?{required:!0}:null}function ir(n){return n.value===!0?null:{required:!0}}function nr(n){return jt(n.value)||Jn.test(n.value)?null:{email:!0}}function rr(n){return i=>{let e=i.value?.length??zt(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function or(n){return i=>{let e=i.value?.length??zt(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function ar(n){if(!n)return ot;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(jt(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ot(n){return null}function rn(n){return n!=null}function on(n){return Mi(n)?_i(n):n}function an(n){let i={};return n.forEach(e=>{i=e!=null?f(f({},i),e):i}),Object.keys(i).length===0?null:i}function sn(n,i){return i.map(e=>e(n))}function sr(n){return!n.validate}function ln(n){return n.map(i=>sr(i)?i:e=>i.validate(e))}function dn(n){if(!n)return null;let i=n.filter(rn);return i.length==0?null:function(e){return an(sn(e,i))}}function Bt(n){return n!=null?dn(ln(n)):null}function cn(n){if(!n)return null;let i=n.filter(rn);return i.length==0?null:function(e){let t=sn(e,i).map(on);return yi(t).pipe(Ge(an))}}function Ut(n){return n!=null?cn(ln(n)):null}function $i(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function un(n){return n._rawValidators}function mn(n){return n._rawAsyncValidators}function Ot(n){return n?Array.isArray(n)?n:[n]:[]}function at(n,i){return Array.isArray(n)?n.includes(i):n===i}function Gi(n,i){let e=Ot(i);return Ot(n).forEach(r=>{at(e,r)||e.push(r)}),e}function Wi(n,i){return Ot(i).filter(e=>!at(n,e))}var st=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Bt(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ut(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},oe=class extends st{name;get formDirective(){return null}get path(){return null}},ae=class extends st{_parent=null;name=null;valueAccessor=null},lt=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Go=(()=>{class n extends lt{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(_(ae,2))};static \u0275dir=m({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&E("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[h]})}return n})(),Wo=(()=>{class n extends lt{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(_(oe,10))};static \u0275dir=m({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&E("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[h]})}return n})();var Te="VALID",nt="INVALID",Ce="PENDING",Ve="DISABLED",ce=class{},dt=class extends ce{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Oe=class extends ce{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Pe=class extends ce{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},xe=class extends ce{status;source;constructor(i,e){super(),this.status=i,this.source=e}},ct=class extends ce{source;constructor(i){super(),this.source=i}},je=class extends ce{source;constructor(i){super(),this.source=i}};function Ht(n){return(gt(n)?n.validators:n)||null}function lr(n){return Array.isArray(n)?Bt(n):n||null}function qt(n,i){return(gt(i)?i.asyncValidators:n)||null}function dr(n){return Array.isArray(n)?Ut(n):n||null}function gt(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function fn(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new Ze(1e3,"");if(!t[e])throw new Ze(1001,"")}function hn(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new Ze(-1002,"")})}var we=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ne(this.statusReactive)}set status(i){ne(()=>this.statusReactive.set(i))}_status=K(()=>this.statusReactive());statusReactive=x(void 0);get valid(){return this.status===Te}get invalid(){return this.status===nt}get pending(){return this.status===Ce}get disabled(){return this.status===Ve}get enabled(){return this.status!==Ve}errors;get pristine(){return ne(this.pristineReactive)}set pristine(i){ne(()=>this.pristineReactive.set(i))}_pristine=K(()=>this.pristineReactive());pristineReactive=x(!0);get dirty(){return!this.pristine}get touched(){return ne(this.touchedReactive)}set touched(i){ne(()=>this.touchedReactive.set(i))}_touched=K(()=>this.touchedReactive());touchedReactive=x(!1);get untouched(){return!this.touched}_events=new F;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Gi(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Gi(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Wi(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Wi(i,this._rawAsyncValidators))}hasValidator(i){return at(this._rawValidators,i)}hasAsyncValidator(i){return at(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(L(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Pe(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new Pe(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(L(f({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Oe(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Oe(!0,t))}markAsPending(i={}){this.status=Ce;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new xe(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(L(f({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ve,this.errors=null,this._forEachChild(r=>{r.disable(L(f({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new dt(this.value,t)),this._events.next(new xe(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Te,this._forEachChild(t=>{t.enable(L(f({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(L(f({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Te||this.status===Ce)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new dt(this.value,e)),this._events.next(new xe(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(L(f({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ve:Te}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Ce,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=on(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new xe(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?Ve:this.errors?nt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ce)?Ce:this._anyControlsHaveStatus(nt)?nt:Te}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Oe(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Pe(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){gt(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=lr(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=dr(this._rawAsyncValidators)}},De=class extends we{constructor(i,e,t){super(Ht(e),qt(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){hn(this,!0,i),Object.keys(i).forEach(t=>{fn(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,L(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new je(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Pt=class extends De{};var Be=new g("",{factory:()=>_t}),_t="always";function pn(n,i){return[...i.path,n]}function ut(n,i,e=_t){$t(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),ur(n,i),fr(n,i),mr(n,i),cr(n,i)}function Qi(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),ft(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function mt(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function cr(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function $t(n,i){let e=un(n);i.validator!==null?n.setValidators($i(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=mn(n);i.asyncValidator!==null?n.setAsyncValidators($i(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();mt(i._rawValidators,r),mt(i._rawAsyncValidators,r)}function ft(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=un(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=mn(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return mt(i._rawValidators,t),mt(i._rawAsyncValidators,t),e}function ur(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&gn(n,i)})}function mr(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&gn(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function gn(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function fr(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function _n(n,i){n==null,$t(n,i)}function hr(n,i){return ft(n,i)}function vn(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function pr(n){return Object.getPrototypeOf(n.constructor)===en}function yn(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function bn(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===tn?e=o:pr(o)?t=o:r=o}),r||t||e||null}function gr(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var _r={provide:oe,useExisting:se(()=>Gt)},Le=Promise.resolve(),Gt=(()=>{class n extends oe{callSetDisabledState;get submitted(){return ne(this.submittedReactive)}_submitted=K(()=>this.submittedReactive());submittedReactive=x(!1);_directives=new Set;form;ngSubmit=new U;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new De({},Bt(e),Ut(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Le.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),ut(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Le.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Le.then(()=>{let t=this._findContainer(e.path),r=new De({});_n(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Le.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Le.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),yn(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ct(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(_(ze,10),_(pt,10),_(Be,8))};static \u0275dir=m({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&W("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[C([_r]),h]})}return n})();function Xi(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function Zi(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Ne=class extends we{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Ht(e),qt(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),gt(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Zi(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new je(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Xi(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Xi(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Zi(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var vr=n=>n instanceof Ne;var yr={provide:ae,useExisting:se(()=>br)},Yi=Promise.resolve(),br=(()=>{class n extends ae{_changeDetectorRef;callSetDisabledState;control=new Ne;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new U;constructor(e,t,r,o,a,l){super(),this._changeDetectorRef=a,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=bn(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),vn(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ut(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Yi.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,r=t!==0&&P(t);Yi.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?pn(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(_(oe,9),_(ze,10),_(pt,10),_(ht,10),_(de,8),_(Be,8))};static \u0275dir=m({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[C([yr]),h,$]})}return n})();var Xo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})(),Cr={provide:ht,useExisting:se(()=>xr),multi:!0},xr=(()=>{class n extends en{writeValue(e){let t=e??"";this.setProperty("value",t)}registerOnChange(e){this.onChange=t=>{e(t==""?null:parseFloat(t))}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(t,r){t&1&&W("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},standalone:!1,features:[C([Cr]),h]})}return n})();var Nt=class extends we{constructor(i,e,t){super(Ht(e),qt(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){hn(this,!1,i),i.forEach((t,r)=>{fn(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],L(f({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new je(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var wr=(()=>{class n extends oe{callSetDisabledState;get submitted(){return ne(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=K(()=>this._submittedReactive());_submittedReactive=x(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ft(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return ut(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Qi(e.control||null,e,!1),gr(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,yn(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ct(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Qi(t||null,e),vr(r)&&(ut(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);_n(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&hr(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){$t(this.form,this),this._oldForm&&ft(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(_(ze,10),_(pt,10),_(Be,8))};static \u0275dir=m({type:n,features:[h,$]})}return n})();var Cn=new g("");var Dr={provide:ae,useExisting:se(()=>Sr)},Sr=(()=>{class n extends ae{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new U;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=bn(this,o)}ngOnChanges(e){this._added||this._setUpControl(),vn(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return pn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(_(oe,13),_(ze,10),_(pt,10),_(ht,10),_(Cn,8))};static \u0275dir=m({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[C([Dr]),h,$]})}return n})();var Rr={provide:oe,useExisting:se(()=>Wt)},Wt=(()=>{class n extends wr{form=null;ngSubmit=new U;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&W("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[C([Rr]),h]})}return n})();var Mr=(()=>{class n{_validator=ot;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):ot,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,features:[$]})}return n})();var Fr={provide:ze,useExisting:se(()=>kr),multi:!0};var kr=(()=>{class n extends Mr{required;inputName="required";normalizeInput=P;createValidator=e=>nn;enabled(e){return e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,r){t&2&&te("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[C([Fr]),h]})}return n})();var xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({})}return n})();function Ki(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Zo=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return Ki(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new De(r,o)}record(e,t=null){let r=this._reduceControls(e);return new Pt(r,t)}control(e,t,r){let o={};return this.useNonNullable?(Ki(t)?o=t:(o.validators=t,o.asyncValidators=r),new Ne(e,L(f({},o),{nonNullable:!0}))):new Ne(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new Nt(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof Ne)return e;if(e instanceof we)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Yo=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Be,useValue:e.callSetDisabledState??_t}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[xn]})}return n})(),Ko=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Cn,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Be,useValue:e.callSetDisabledState??_t}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[xn]})}return n})();var Qt=class{_box;_destroyed=new F;_resizeSubject=new F;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new fi(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Qe(e=>e.some(t=>t.target===i)),xi({bufferSize:1,refCount:!0}),q(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},wn=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=s(j);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Qt(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Er=["notch"],Ar=["matFormFieldNotchedOutline",""],Ir=["*"],Dn=["iconPrefixContainer"],Sn=["textPrefixContainer"],Rn=["iconSuffixContainer"],Mn=["textSuffixContainer"],Tr=["textField"],Vr=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Lr=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Or(n,i){n&1&&Fe(0,"span",21)}function Pr(n,i){if(n&1&&(R(0,"label",20),k(1,1),D(2,Or,1,0,"span",21),M()),n&2){let e=Y(2);_e("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),te("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),S(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Nr(n,i){if(n&1&&D(0,Pr,3,5,"label",20),n&2){let e=Y();S(e._hasFloatingLabel()?0:-1)}}function jr(n,i){n&1&&Fe(0,"div",7)}function zr(n,i){}function Br(n,i){if(n&1&&ge(0,zr,0,0,"ng-template",13),n&2){Y(2);let e=kt(1);_e("ngTemplateOutlet",e)}}function Ur(n,i){if(n&1&&(R(0,"div",9),D(1,Br,1,1,null,13),M()),n&2){let e=Y();_e("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),S(e._forceDisplayInfixLabel()?-1:1)}}function Hr(n,i){n&1&&(R(0,"div",10,2),k(2,2),M())}function qr(n,i){n&1&&(R(0,"div",11,3),k(2,3),M())}function $r(n,i){}function Gr(n,i){if(n&1&&ge(0,$r,0,0,"ng-template",13),n&2){Y();let e=kt(1);_e("ngTemplateOutlet",e)}}function Wr(n,i){n&1&&(R(0,"div",14,4),k(2,4),M())}function Qr(n,i){n&1&&(R(0,"div",15,5),k(2,5),M())}function Xr(n,i){n&1&&Fe(0,"div",16)}function Zr(n,i){n&1&&(R(0,"div",18),k(1,6),M())}function Yr(n,i){if(n&1&&(R(0,"mat-hint",22),et(1),M()),n&2){let e=Y(2);_e("id",e._hintLabelId),p(),Ai(e.hintLabel)}}function Kr(n,i){if(n&1&&(R(0,"div",19),D(1,Yr,2,2,"mat-hint",22),k(2,7),Fe(3,"div",23),k(4,8),M()),n&2){let e=Y();p(),S(e.hintLabel?1:-1)}}var Xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-label"]]})}return n})(),Jr=new g("MatError");var Zt=(()=>{class n{align="start";id=s(Ie).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Ke("id",r.id),te("align",null),E("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),eo=new g("MatPrefix");var to=new g("MatSuffix");var Vn=new g("FloatingLabelParent"),Fn=(()=>{class n{_elementRef=s(w);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(wn);_ngZone=s(j);_parent=s(Vn);_resizeSubscription=new mi;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return io(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&E("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function io(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var kn="mdc-line-ripple--active",vt="mdc-line-ripple--deactivating",En=(()=>{class n{_elementRef=s(w);_cleanupTransitionEnd;constructor(){let e=s(j),t=s(G);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(vt),e.add(kn)}deactivate(){this._elementRef.nativeElement.classList.add(vt)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(vt);e.propertyName==="opacity"&&r&&t.remove(kn,vt)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),An=(()=>{class n{_elementRef=s(w);_ngZone=s(j);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Je(Er,5),t&2){let o;v(o=y())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&E("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ar,ngContentSelectors:Ir,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(ie(),le(0,"div",1),ue(1,"div",2,0),k(3),me(),le(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),Yt=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n})}return n})();var Kt=new g("MatFormField"),no=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),In="fill",ro="auto",Tn="fixed",oo="translateY(-50%)",Ln=(()=>{class n{_elementRef=s(w);_changeDetectorRef=s(de);_platform=s(re);_idGenerator=s(Ie);_ngZone=s(j);_defaults=s(no,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Ae("iconPrefixContainer");_textPrefixContainerSignal=Ae("textPrefixContainer");_iconSuffixContainerSignal=Ae("iconSuffixContainer");_textSuffixContainerSignal=Ae("textSuffixContainer");_prefixSuffixContainers=K(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Vi(Xt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=ye(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ro}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||In;this._appearanceSignal.set(t)}_appearanceSignal=x(In);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Tn}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Tn}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new F;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ji();constructor(){let e=this._defaults,t=s(tt);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ye(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=K(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(wi([void 0,void 0]),Ge(()=>[t.errorState,t.userAriaDescribedBy]),Ci(),Qe(([[o,a],[l,c]])=>o!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(q(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),bi(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Li({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=K(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",b=`${a+l}px`,A=`calc(${u} * (${b} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,qe=`var(--mat-mdc-form-field-label-transform, ${oo} translateX(${A}))`,$e=a+l+c+d;return[qe,$e]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Fi(o,r._labelChild,Xt,5),ke(o,Yt,5)(o,eo,5)(o,to,5)(o,Jr,5)(o,Zt,5)),t&2){Ft();let a;v(a=y())&&(r._formFieldControl=a.first),v(a=y())&&(r._prefixChildren=a),v(a=y())&&(r._suffixChildren=a),v(a=y())&&(r._errorChildren=a),v(a=y())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(ki(r._iconPrefixContainerSignal,Dn,5)(r._textPrefixContainerSignal,Sn,5)(r._iconSuffixContainerSignal,Rn,5)(r._textSuffixContainerSignal,Mn,5),Je(Tr,5)(Dn,5)(Sn,5)(Rn,5)(Mn,5)(Fn,5)(An,5)(En,5)),t&2){Ft(4);let o;v(o=y())&&(r._textField=o.first),v(o=y())&&(r._iconPrefixContainer=o.first),v(o=y())&&(r._textPrefixContainer=o.first),v(o=y())&&(r._iconSuffixContainer=o.first),v(o=y())&&(r._textSuffixContainer=o.first),v(o=y())&&(r._floatingLabel=o.first),v(o=y())&&(r._notchedOutline=o.first),v(o=y())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&E("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[C([{provide:Kt,useExisting:n},{provide:Vn,useExisting:n}])],ngContentSelectors:Lr,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(ie(Vr),ge(0,Nr,1,1,"ng-template",null,0,Ii),R(2,"div",6,1),W("click",function(a){return r._control.onContainerClick(a)}),D(4,jr,1,0,"div",7),R(5,"div",8),D(6,Ur,2,2,"div",9),D(7,Hr,3,0,"div",10),D(8,qr,3,0,"div",11),R(9,"div",12),D(10,Gr,1,1,null,13),k(11),M(),D(12,Wr,3,0,"div",14),D(13,Qr,3,0,"div",15),M(),D(14,Xr,1,0,"div",16),M(),R(15,"div",17),D(16,Zr,2,0,"div",18)(17,Kr,5,1,"div",19),M()),t&2){let o;p(2),E("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),S(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),S(r._hasOutline()?6:-1),p(),S(r._hasIconPrefix?7:-1),p(),S(r._hasTextPrefix?8:-1),p(2),S(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),S(r._hasTextSuffix?12:-1),p(),S(r._hasIconSuffix?13:-1),p(),S(r._hasOutline()?-1:14),p(),E("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),S((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Fn,An,Oi,En,Zt],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0})}return n})();var Jt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[Pi,Ln,J]})}return n})();var On=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2,changeDetection:0})}return n})(),ao={passive:!0},Pn=(()=>{class n{_platform=s(re);_ngZone=s(j);_renderer=s(Si).createRenderer(null,null);_styleLoader=s(It);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return gi;this._styleLoader.load(On);let t=Vt(e),r=this._monitoredElements.get(t);if(r)return r.subject;let o=new F,a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,ao)));return this._monitoredElements.set(t,{subject:o,unlisten:c}),o}stopMonitoring(e){let t=Vt(e),r=this._monitoredElements.get(t);r&&(r.unlisten(),r.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Wa=(()=>{class n{_elementRef=s(w);_platform=s(re);_ngZone=s(j);_renderer=s(G);_resizeEvents=new F;_previousValue;_initialHeight;_destroyed=new F;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(e){this._minRows=Tt(e),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(e){this._maxRows=Tt(e),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&((this._enabled=e)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(e){this._cachedPlaceholderHeight=void 0,e?this._textareaElement.setAttribute("placeholder",e):this._textareaElement.removeAttribute("placeholder"),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=s(Me);_hasFocus=!1;_isViewInited=!1;constructor(){s(It).load(On),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let e=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.minHeight=e)}_setMaxHeight(){let e=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;e&&(this._textareaElement.style.maxHeight=e)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen("window","resize",()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,"focus",this._handleFocusEvent),this._renderer.listen(this._textareaElement,"blur",this._handleFocusEvent)],this._resizeEvents.pipe(Xe(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(e=>e()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let e=this._textareaElement.cloneNode(!1),t=e.style;e.rows=1,t.position="absolute",t.visibility="hidden",t.border="none",t.padding="0",t.height="",t.minHeight="",t.maxHeight="",t.top=t.bottom=t.left=t.right="auto",t.overflow="hidden",this._textareaElement.parentNode.appendChild(e),this._cachedLineHeight=e.clientHeight,e.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let e=this._textareaElement,t=e.style.marginBottom||"",r=this._platform.FIREFOX,o=this._hasFocus,a=r?"cdk-textarea-autosize-measuring-firefox":"cdk-textarea-autosize-measuring";o&&(e.style.marginBottom=`${e.clientHeight}px`),e.classList.add(a);let l=e.scrollHeight-4;return e.classList.remove(a),o&&(e.style.marginBottom=t),l}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let e=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=e}_handleFocusEvent=e=>{this._hasFocus=e.type==="focus"};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(e=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let t=this._elementRef.nativeElement,r=t.value;if(!e&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let o=this._measureScrollHeight(),a=Math.max(o,this._cachedPlaceholderHeight||0);t.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<"u"?requestAnimationFrame(()=>this._scrollToCaretPosition(t)):setTimeout(()=>this._scrollToCaretPosition(t))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(e){let{selectionStart:t,selectionEnd:r}=e;!this._destroyed.isStopped&&this._hasFocus&&e.setSelectionRange(t,r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["textarea","cdkTextareaAutosize",""]],hostAttrs:["rows","1",1,"cdk-textarea-autosize"],hostBindings:function(t,r){t&1&&W("input",function(){return r._noopInputHandler()})},inputs:{minRows:[0,"cdkAutosizeMinRows","minRows"],maxRows:[0,"cdkAutosizeMaxRows","maxRows"],enabled:[2,"cdkTextareaAutosize","enabled",P],placeholder:"placeholder"},exportAs:["cdkTextareaAutosize"]})}return n})(),Nn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({})}return n})();var jn=new g("MAT_INPUT_VALUE_ACCESSOR");var zn=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var yt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var so=["button","checkbox","file","hidden","image","radio","range","reset","submit"],lo=new g("MAT_INPUT_CONFIG"),ps=(()=>{class n{_elementRef=s(w);_platform=s(re);ngControl=s(ae,{optional:!0,self:!0});_autofillMonitor=s(Pn);_ngZone=s(j);_formField=s(Kt,{optional:!0});_renderer=s(G);_uid=s(Ie).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(lo,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new F;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=ye(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(rt.required)??!1}set required(e){this._required=ye(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Lt().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=ye(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Lt().has(e));constructor(){let e=s(Gt,{optional:!0}),t=s(Wt,{optional:!0}),r=s(zn),o=s(jn,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();o?Ri(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new yt(r,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ye(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){so.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,r){t&1&&W("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),t&2&&(Ke("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),te("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),E("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",P]},exportAs:["matInput"],features:[C([{provide:Yt,useExisting:n}]),$]})}return n})(),gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[Jt,Jt,Nn,J]})}return n})();var Bn=class n{constructor(i){this.logger=i;this.config=this.getConfig(),this.logger.debugLog("Data service initialized",{environment:window.location.href.includes("localhost")?"localhost":"production",siteUrl:this.config.siteUrl,apiPath:this.config.apiPath})}logger;config;getConfig(){return window.location.href.includes("localhost")?(this.logger.debugLog("Running in localhost development mode"),{siteUrl:"http://localhost:3000",apiPath:""}):(this.logger.debugLog("Running in production SharePoint mode"),{siteUrl:"https://collab.napma.nato.int/grc",apiPath:"/_api/web"})}cacheState=x({isInitialized:!1,lastUpdated:null,initializationError:null});risksState=x({isLoaded:!1,lastUpdated:null,error:null});objectivesState=x({isLoaded:!1,lastUpdated:null,error:null});categoriesState=x({isLoaded:!1,lastUpdated:null,error:null});criticalAssetsState=x({isLoaded:!1,lastUpdated:null,error:null});treatmentsState=x({isLoaded:!1,lastUpdated:null,error:null});userState=x({isLoaded:!1,lastUpdated:null,error:null});causesState=x({isLoaded:!1,lastUpdated:null,error:null});consequencesState=x({isLoaded:!1,lastUpdated:null,error:null});controlsState=x({isLoaded:!1,lastUpdated:null,error:null});controlCommentsState=x({isLoaded:!1,lastUpdated:null,error:null});controlImpactState=x({isLoaded:!1,lastUpdated:null,error:null});siteUsersState=x({isLoaded:!1,lastUpdated:null,error:null});_risks=[];_objectives=[];_categories=[];_criticalAssets=[];_treatments=[];_causes=[];_consequences=[];_controls=[];_controlComments=[];_controlImpact=[];_siteUsers=[];_user=null;_selectedRisk=null;_selectedRiskSubject=new Re(null);_selectedObjective=null;_selectedObjectiveSubject=new Re(null);requestDigest=null;digestExpirationTime=null;selectedRisk$=this._selectedRiskSubject.asObservable();selectedObjective$=this._selectedObjectiveSubject.asObservable();risks(){return this._risks}objectives(){return this._objectives}categories(){return this._categories}criticalAssets(){return this._criticalAssets}treatments(){return this._treatments}causes(){return this._causes}consequences(){return this._consequences}controls(){return this._controls}controlComments(){return this._controlComments}controlImpact(){return this._controlImpact}siteUsers(){return this._siteUsers}user(){return this._user}selectedRisk(){return this._selectedRisk}selectedObjective(){return this._selectedObjective}isInitialized(){return this.cacheState().isInitialized}lastUpdated(){return this.cacheState().lastUpdated}risksLoaded(){return this.risksState().isLoaded}objectivesLoaded(){return this.objectivesState().isLoaded}categoriesLoaded(){return this.categoriesState().isLoaded}criticalAssetsLoaded(){return this.criticalAssetsState().isLoaded}treatmentsLoaded(){return this.treatmentsState().isLoaded}causesLoaded(){return this.causesState().isLoaded}consequencesLoaded(){return this.consequencesState().isLoaded}controlsLoaded(){return this.controlsState().isLoaded}controlCommentsLoaded(){return this.controlCommentsState().isLoaded}controlImpactLoaded(){return this.controlImpactState().isLoaded}siteUsersLoaded(){return this.siteUsersState().isLoaded}userLoaded(){return this.userState().isLoaded}async initializeCache(){if(this.cacheState().isInitialized){this.logger.debugLog("Cache already initialized, skipping initialization");return}this.logger.debugLog("Starting cache initialization");try{this._user=await this.loadUser(),this.userState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("User loaded",this._user);let[i,e,t,r,o,a,l,c,d,u,b]=await Promise.all([this.loadRisks(),this.loadObjectives(),this.loadCategories(),this.loadCriticalAssets(),this.loadTreatments(),this.loadCauses(),this.loadConsequences(),this.loadControls(),this.loadControlComments(),this.loadControlImpact(),this.loadSiteUsers()]);this._risks=i,this.risksState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._objectives=e,this.objectivesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._categories=t,this.categoriesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._criticalAssets=r,this.criticalAssetsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._treatments=o,this.treatmentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._causes=a,this.causesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._consequences=l,this.consequencesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controls=c,this.controlsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controlComments=d,this.controlCommentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._controlImpact=u,this.controlImpactState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this._siteUsers=b,this.siteUsersState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.cacheState.set({isInitialized:!0,lastUpdated:new Date,initializationError:null}),this.logger.debugLog("Cache initialization completed successfully",{risksCount:i.length,objectivesCount:e.length,categoriesCount:t.length,criticalAssetsCount:r.length,treatmentsCount:o.length,causesCount:a.length,consequencesCount:l.length,controlsCount:c.length,controlCommentsCount:d.length,controlImpactCount:u.length,siteUsersCount:b.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:e}),this.logger.debugLog("Cache initialization failed",i),i}}async forceRefreshCache(){this.logger.debugLog("Force refreshing entire cache"),this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:null}),await this.initializeCache()}async invalidateUser(){this.logger.debugLog("Invalidating user cache");try{this._user=await this.loadUser(),this.userState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("User cache refreshed",this._user)}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.userState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("User cache refresh failed",i),i}}async invalidateRisks(){this.logger.debugLog("Invalidating risks cache");try{this._risks=await this.loadRisks(),this.risksState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Risks cache refreshed",{count:this._risks.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.risksState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Risks cache refresh failed",i),i}}async invalidateObjectives(){this.logger.debugLog("Invalidating objectives cache");try{this._objectives=await this.loadObjectives(),this.objectivesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Objectives cache refreshed",{count:this._objectives.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.objectivesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Objectives cache refresh failed",i),i}}async invalidateCategories(){this.logger.debugLog("Invalidating categories cache");try{this._categories=await this.loadCategories(),this.categoriesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Categories cache refreshed",{count:this._categories.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.categoriesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Categories cache refresh failed",i),i}}async invalidateCriticalAssets(){this.logger.debugLog("Invalidating critical assets cache");try{this._criticalAssets=await this.loadCriticalAssets(),this.criticalAssetsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Critical assets cache refreshed",{count:this._criticalAssets.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.criticalAssetsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Critical assets cache refresh failed",i),i}}async invalidateTreatments(){this.logger.debugLog("Invalidating treatments cache");try{this._treatments=await this.loadTreatments(),this.treatmentsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Treatments cache refreshed",{count:this._treatments.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.treatmentsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Treatments cache refresh failed",i),i}}async invalidateCauses(){this.logger.debugLog("Invalidating causes cache");try{this._causes=await this.loadCauses(),this.causesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Causes cache refreshed",{count:this._causes.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.causesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Causes cache refresh failed",i),i}}async invalidateConsequences(){this.logger.debugLog("Invalidating consequences cache");try{this._consequences=await this.loadConsequences(),this.consequencesState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Consequences cache refreshed",{count:this._consequences.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.consequencesState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Consequences cache refresh failed",i),i}}async invalidateControls(){this.logger.debugLog("Invalidating controls cache");try{this._controls=await this.loadControls(),this.controlsState.set({isLoaded:!0,lastUpdated:new Date,error:null}),this.logger.debugLog("Controls cache refreshed",{count:this._controls.length})}catch(i){let e=i instanceof Error?i.message:"Unknown error";throw this.controlsState.set({isLoaded:!1,lastUpdated:null,error:e}),this.logger.debugLog("Controls cache refresh failed",i),i}}clearCache(){this.logger.debugLog("Clearing cache"),this._risks=[],this._objectives=[],this._categories=[],this._criticalAssets=[],this._treatments=[],this._user=null,this.cacheState.set({isInitialized:!1,lastUpdated:null,initializationError:null}),this.risksState.set({isLoaded:!1,lastUpdated:null,error:null}),this.objectivesState.set({isLoaded:!1,lastUpdated:null,error:null}),this.categoriesState.set({isLoaded:!1,lastUpdated:null,error:null}),this.criticalAssetsState.set({isLoaded:!1,lastUpdated:null,error:null}),this.treatmentsState.set({isLoaded:!1,lastUpdated:null,error:null}),this.userState.set({isLoaded:!1,lastUpdated:null,error:null})}buildApiUrl(i){return`${this.config.siteUrl}${this.config.apiPath}${i}`}getHeaders(i){let e={Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"};return i&&(e["X-RequestDigest"]=i),e}async getRequestDigest(i=!1){let e=Date.now();if(!i&&this.requestDigest&&this.digestExpirationTime&&e<this.digestExpirationTime)return this.logger.debugLog("Using cached request digest"),this.requestDigest;let t=`${this.config.siteUrl}/_api/contextinfo`;this.logger.debugLog("Requesting new digest from:",t);try{let r=await fetch(t,{method:"POST",headers:{Accept:"application/json;odata=verbose","Content-Type":"application/json;odata=verbose"},credentials:"include"});if(!r.ok){let a=await r.text();throw this.logger.debugLog("Failed to get digest",{status:r.status,statusText:r.statusText,responseBody:a}),new Error(`Failed to get request digest: ${r.status} ${r.statusText}`)}let o=await r.json();return this.requestDigest=o.d.GetContextWebInformation.FormDigestValue,this.digestExpirationTime=e+1500*1e3,this.logger.debugLog("Request digest obtained and cached successfully"),this.requestDigest}catch(r){throw this.logger.debugLog("Error getting request digest",r),r}}async executeWithDigestRetry(i,e){try{let t=await this.getRequestDigest();return await i(t)}catch(t){let r=t instanceof Error?t.message:String(t);if(r.includes("401")||r.includes("403")||r.includes("digest")){this.logger.debugLog(`${e} failed with potential digest error, retrying with fresh digest`);let a=await this.getRequestDigest(!0);return await i(a)}throw t}}async queryList(i,e,t,r,o){this.logger.debugLog(`Querying SharePoint list: ${i}`,{select:e,filter:t,orderBy:r,expand:o});let a=`/Lists/getbytitle('${i}')/Items`,l=[];e&&l.push(`$select=${e}`),t&&l.push(`$filter=${t}`),r&&l.push(`$orderby=${r}`),o&&l.push(`$expand=${o}`),l.length>0&&(a+="?"+l.join("&"));let c=this.buildApiUrl(a);this.logger.debugLog(`Fetching data from URL: ${c}`);try{let d=await fetch(c,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!d.ok){let b=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:c,responseBody:b}),new Error(`SharePoint query failed: ${d.status} ${d.statusText}`)}let u=await d.json();return this.logger.debugLog(`Raw JSON response from ${i}`,u),Array.isArray(u)?u:u.d&&u.d.results?u.d.results:u.d&&Array.isArray(u.d)?u.d:(this.logger.debugLog("Unexpected response format",u),[])}catch(d){throw this.logger.debugLog(`Error querying list ${i}`,{error:d,message:d instanceof Error?d.message:String(d),stack:d instanceof Error?d.stack:void 0,url:c}),d}}async addListItem(i,e){this.logger.debugLog(`Adding item to SharePoint list: ${i}`,e);let t=`/Lists/getbytitle('${i}')/Items`,r=this.buildApiUrl(t);this.logger.debugLog(`POST request to URL: ${r}`);let o=async a=>{let l=f({__metadata:{type:`SP.Data.${i}ListItem`}},e);this.logger.debugLog("Request payload:",l);let c=await fetch(r,{method:"POST",headers:this.getHeaders(a),credentials:"include",body:JSON.stringify(l)});if(!c.ok){let u=await c.text();throw this.logger.debugLog("HTTP Error Details",{status:c.status,statusText:c.statusText,url:r,responseBody:u}),new Error(`SharePoint add failed: ${c.status} ${c.statusText} - ${u}`)}let d=await c.json();return this.logger.debugLog(`Item added successfully to ${i}`,d.d),d.d};return this.executeWithDigestRetry(o,"addListItem")}async updateListItem(i,e,t){this.logger.debugLog(`Updating item in SharePoint list: ${i}`,{itemId:e,itemData:t});let r=`/Lists/getbytitle('${i}')/Items(${e})`,o=this.buildApiUrl(r);this.logger.debugLog(`MERGE request to URL: ${o}`);let a=async l=>{let c=f({__metadata:{type:`SP.Data.${i}ListItem`}},t),d=await fetch(o,{method:"POST",headers:L(f({},this.getHeaders(l)),{"X-HTTP-Method":"MERGE","IF-MATCH":"*"}),credentials:"include",body:JSON.stringify(c)});if(!d.ok){let u=await d.text();throw this.logger.debugLog("HTTP Error Details",{status:d.status,statusText:d.statusText,url:o,responseBody:u}),new Error(`SharePoint update failed: ${d.status} ${d.statusText} - ${u}`)}this.logger.debugLog(`Item updated successfully in ${i}`,{itemId:e})};return this.executeWithDigestRetry(a,"updateListItem")}async deleteListItem(i,e){this.logger.debugLog(`Deleting item from SharePoint list: ${i}`,{itemId:e});let t=`/Lists/getbytitle('${i}')/Items(${e})`,r=this.buildApiUrl(t);this.logger.debugLog(`DELETE request to URL: ${r}`);let o=async a=>{let l=await fetch(r,{method:"POST",headers:L(f({},this.getHeaders(a)),{"X-HTTP-Method":"DELETE","IF-MATCH":"*"}),credentials:"include"});if(!l.ok){let c=await l.text();throw this.logger.debugLog("HTTP Error Details",{status:l.status,statusText:l.statusText,url:r,responseBody:c}),new Error(`SharePoint delete failed: ${l.status} ${l.statusText} - ${c}`)}this.logger.debugLog(`Item deleted successfully from ${i}`,{itemId:e})};return this.executeWithDigestRetry(o,"deleteListItem")}async loadUser(){this.logger.debugLog("Loading current user");let i=this.buildApiUrl("/currentuser");this.logger.debugLog(`Fetching current user from URL: ${i}`);try{let e=await fetch(i,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)throw new Error(`Failed to load user: ${e.status}`);return(await e.json()).d}catch(e){throw this.logger.debugLog("Error loading user",e),e}}async loadSiteUsers(){this.logger.debugLog("Loading site users");let i=this.buildApiUrl("/siteusers");this.logger.debugLog(`Fetching site users from URL: ${i}`);try{let e=await fetch(i,{method:"GET",headers:this.getHeaders(),credentials:"include"});if(!e.ok)return this.logger.debugLog(`Failed to load site users: ${e.status} - returning empty array`),[];let t=await e.json();return this.logger.debugLog("Raw JSON response from siteusers",t),t.d.results||[]}catch(e){return this.logger.debugLog("Error loading site users - returning empty array",e),[]}}async loadRisks(){return this.queryList("Risks","FileSystemObjectType,Id,ServerRedirectedEmbedUri,ServerRedirectedEmbedUrl,ContentTypeId,Title,ComplianceAssetId,Category,Description,OwnerId,OwnerStringId,OrgDivision,DateIdentified,InherentLikelihood,InherentImpact,OrgUnit,ParentId,ID,Modified,Created,AuthorId,EditorId,OData__UIVersionString,Attachments,GUID,Author/Id,Author/Title,Author/Name,Author/EMail",void 0,void 0,"Author")}async loadObjectives(){return this.queryList("Objectives")}async loadCategories(){return this.queryList("Categories")}async loadCriticalAssets(){return this.queryList("CriticalAssets")}async loadTreatments(){return this.queryList("Treatments")}async loadCauses(){return this.queryList("Causes")}async loadConsequences(){return this.queryList("Consequences")}async loadControls(){return this.queryList("Controls")}async loadControlComments(){return this.queryList("ControlComments")}async loadControlImpact(){return this.queryList("ControlImpact")}async addRisk(i){let e=await this.addListItem("Risks",i);return this._risks.push(e),this.logger.debugLog("Risk added to cache",e),e}async updateRisk(i,e){await this.updateListItem("Risks",i,e);let t=this._risks.findIndex(r=>r.Id===i);t!==-1&&(this._risks[t]=f(f({},this._risks[t]),e),this.logger.debugLog("Risk updated in cache",{riskId:i}))}async deleteRisk(i){await this.deleteListItem("Risks",i),this._risks=this._risks.filter(e=>e.Id!==i),this.logger.debugLog("Risk deleted from cache",{riskId:i})}async deleteRiskCascade(i){this.logger.debugLog("Starting cascade delete for risk",{riskId:i});let e=[];for(let a=0;a<this._controls.length;a++)this._controls[a].ParentId===i&&e.push(this._controls[a]);for(let a=0;a<e.length;a++){let l=e[a].Id,c=[];for(let u=0;u<this._controlComments.length;u++)this._controlComments[u].ParentId===l&&c.push(this._controlComments[u]);for(let u=0;u<c.length;u++)await this.deleteControlComment(c[u].Id);let d=[];for(let u=0;u<this._controlImpact.length;u++)this._controlImpact[u].ParentId===l&&d.push(this._controlImpact[u]);for(let u=0;u<d.length;u++)await this.deleteControlImpact(d[u].Id)}for(let a=0;a<e.length;a++)await this.deleteControl(e[a].Id);let t=[];for(let a=0;a<this._causes.length;a++)this._causes[a].ParentId===i&&t.push(this._causes[a]);for(let a=0;a<t.length;a++)await this.deleteCause(t[a].Id);let r=[];for(let a=0;a<this._consequences.length;a++)this._consequences[a].ParentId===i&&r.push(this._consequences[a]);for(let a=0;a<r.length;a++)await this.deleteConsequence(r[a].Id);let o=[];for(let a=0;a<this._treatments.length;a++)this._treatments[a].ParentId===i&&o.push(this._treatments[a]);for(let a=0;a<o.length;a++)await this.deleteTreatment(o[a].Id);await this.deleteRisk(i),this.logger.debugLog("Cascade delete completed for risk",{riskId:i,controlsDeleted:e.length,causesDeleted:t.length,consequencesDeleted:r.length,treatmentsDeleted:o.length})}async addObjective(i){let e=await this.addListItem("Objectives",i);return this._objectives.push(e),this.logger.debugLog("Objective added to cache",e),e}async updateObjective(i,e){await this.updateListItem("Objectives",i,e);let t=this._objectives.findIndex(r=>r.Id===i);t!==-1&&(this._objectives[t]=f(f({},this._objectives[t]),e),this.logger.debugLog("Objective updated in cache",{objectiveId:i}))}async deleteObjective(i){await this.deleteListItem("Objectives",i),this._objectives=this._objectives.filter(e=>e.Id!==i),this.logger.debugLog("Objective deleted from cache",{objectiveId:i})}async addCategory(i){let e=await this.addListItem("Categories",i);return this._categories.push(e),this.logger.debugLog("Category added to cache",e),e}async updateCategory(i,e){await this.updateListItem("Categories",i,e);let t=this._categories.findIndex(r=>r.Id===i);t!==-1&&(this._categories[t]=f(f({},this._categories[t]),e),this.logger.debugLog("Category updated in cache",{categoryId:i}))}async deleteCategory(i){await this.deleteListItem("Categories",i),this._categories=this._categories.filter(e=>e.Id!==i),this.logger.debugLog("Category deleted from cache",{categoryId:i})}async addCriticalAsset(i){let e=await this.addListItem("CriticalAssets",i);return this._criticalAssets.push(e),this.logger.debugLog("Critical asset added to cache",e),e}async updateCriticalAsset(i,e){await this.updateListItem("CriticalAssets",i,e);let t=this._criticalAssets.findIndex(r=>r.Id===i);t!==-1&&(this._criticalAssets[t]=f(f({},this._criticalAssets[t]),e),this.logger.debugLog("Critical asset updated in cache",{assetId:i}))}async deleteCriticalAsset(i){await this.deleteListItem("CriticalAssets",i),this._criticalAssets=this._criticalAssets.filter(e=>e.Id!==i),this.logger.debugLog("Critical asset deleted from cache",{assetId:i})}async addTreatment(i){let e=await this.addListItem("Treatments",i);return this._treatments.push(e),this.logger.debugLog("Treatment added to cache",e),e}async updateTreatment(i,e){await this.updateListItem("Treatments",i,e);let t=this._treatments.findIndex(r=>r.Id===i);t!==-1&&(this._treatments[t]=f(f({},this._treatments[t]),e),this.logger.debugLog("Treatment updated in cache",{treatmentId:i}))}async deleteTreatment(i){await this.deleteListItem("Treatments",i),this._treatments=this._treatments.filter(e=>e.Id!==i),this.logger.debugLog("Treatment deleted from cache",{treatmentId:i})}async addCause(i){let e=await this.addListItem("Causes",i);return this._causes.push(e),this.logger.debugLog("Cause added to cache",e),e}async updateCause(i,e){await this.updateListItem("Causes",i,e);let t=this._causes.findIndex(r=>r.Id===i);t!==-1&&(this._causes[t]=f(f({},this._causes[t]),e),this.logger.debugLog("Cause updated in cache",{causeId:i}))}async deleteCause(i){await this.deleteListItem("Causes",i),this._causes=this._causes.filter(e=>e.Id!==i),this.logger.debugLog("Cause deleted from cache",{causeId:i})}async addConsequence(i){let e=await this.addListItem("Consequences",i);return this._consequences.push(e),this.logger.debugLog("Consequence added to cache",e),e}async updateConsequence(i,e){await this.updateListItem("Consequences",i,e);let t=this._consequences.findIndex(r=>r.Id===i);t!==-1&&(this._consequences[t]=f(f({},this._consequences[t]),e),this.logger.debugLog("Consequence updated in cache",{consequenceId:i}))}async deleteConsequence(i){await this.deleteListItem("Consequences",i),this._consequences=this._consequences.filter(e=>e.Id!==i),this.logger.debugLog("Consequence deleted from cache",{consequenceId:i})}async addControl(i){let e=await this.addListItem("Controls",i);return this._controls.push(e),this.logger.debugLog("Control added to cache",e),e}async updateControl(i,e){await this.updateListItem("Controls",i,e);let t=this._controls.findIndex(r=>r.Id===i);t!==-1&&(this._controls[t]=f(f({},this._controls[t]),e),this.logger.debugLog("Control updated in cache",{controlId:i}))}async deleteControl(i){await this.deleteListItem("Controls",i),this._controls=this._controls.filter(e=>e.Id!==i),this.logger.debugLog("Control deleted from cache",{controlId:i})}async addControlComment(i){let e=await this.addListItem("ControlComments",i);return this._controlComments.push(e),this.logger.debugLog("ControlComment added to cache",e),e}async updateControlComment(i,e){await this.updateListItem("ControlComments",i,e);let t=this._controlComments.findIndex(r=>r.Id===i);t!==-1&&(this._controlComments[t]=f(f({},this._controlComments[t]),e),this.logger.debugLog("ControlComment updated in cache",{commentId:i}))}async deleteControlComment(i){await this.deleteListItem("ControlComments",i),this._controlComments=this._controlComments.filter(e=>e.Id!==i),this.logger.debugLog("ControlComment deleted from cache",{commentId:i})}async addControlImpact(i){let e=await this.addListItem("ControlImpact",i);return this._controlImpact.push(e),this.logger.debugLog("ControlImpact added to cache",e),e}async updateControlImpact(i,e){await this.updateListItem("ControlImpact",i,e);let t=this._controlImpact.findIndex(r=>r.Id===i);t!==-1&&(this._controlImpact[t]=f(f({},this._controlImpact[t]),e),this.logger.debugLog("ControlImpact updated in cache",{impactId:i}))}async deleteControlImpact(i){await this.deleteListItem("ControlImpact",i),this._controlImpact=this._controlImpact.filter(e=>e.Id!==i),this.logger.debugLog("ControlImpact deleted from cache",{impactId:i})}selectRisk(i){this.logger.debugLog("Selecting risk",{riskId:i});let e=null;for(let t=0;t<this._risks.length;t++)if(this._risks[t].Id===i){e=this._risks[t];break}if(!e)return this.logger.debugLog("Risk not found",{riskId:i}),this._selectedRisk=null,this._selectedRiskSubject.next(null),null;if(this._selectedRisk=L(f({},e),{Objective:null,Causes:[],Consequences:[],Controls:[],Treatments:[],ControlComments:[],ControlImpact:[]}),e.OrgDivision){let t=e.Id.toString().padStart(3,"0");this._selectedRisk.CompositeId=`R${t}${e.OrgDivision}`}else this._selectedRisk.CompositeId=null;if(e.ParentId){for(let t=0;t<this._objectives.length;t++)if(this._objectives[t].Id===e.ParentId){this._selectedRisk.Objective=this._objectives[t];break}}for(let t=0;t<this._causes.length;t++)this._causes[t].ParentId===i&&this._selectedRisk.Causes.push(this._causes[t]);for(let t=0;t<this._consequences.length;t++)this._consequences[t].ParentId===i&&this._selectedRisk.Consequences.push(this._consequences[t]);for(let t=0;t<this._controls.length;t++)this._controls[t].ParentId===i&&this._selectedRisk.Controls.push(this._controls[t]);for(let t=0;t<this._treatments.length;t++)this._treatments[t].ParentId===i&&this._selectedRisk.Treatments.push(this._treatments[t]);for(let t=0;t<this._controlComments.length;t++)this._controlComments[t].ParentId===i&&this._selectedRisk.ControlComments.push(this._controlComments[t]);for(let t=0;t<this._controlImpact.length;t++)this._controlImpact[t].ParentId===i&&this._selectedRisk.ControlImpact.push(this._controlImpact[t]);return this.logger.debugLog("Risk selected with associated items",{riskId:i,compositeId:this._selectedRisk.CompositeId||"Not set",objective:this._selectedRisk.Objective?.Title||"None",causesCount:this._selectedRisk.Causes.length,consequencesCount:this._selectedRisk.Consequences.length,controlsCount:this._selectedRisk.Controls.length,treatmentsCount:this._selectedRisk.Treatments.length,controlCommentsCount:this._selectedRisk.ControlComments.length,controlImpactCount:this._selectedRisk.ControlImpact.length}),this._selectedRiskSubject.next(this._selectedRisk),this._selectedRisk}clearSelectedRisk(){this.logger.debugLog("Clearing selected risk"),this._selectedRisk=null,this._selectedRiskSubject.next(null)}selectObjective(i){this.logger.debugLog("Selecting objective",{objectiveId:i});let e=null;for(let t=0;t<this._objectives.length;t++)if(this._objectives[t].Id===i){e=this._objectives[t];break}if(!e)return this.logger.debugLog("Objective not found",{objectiveId:i}),this._selectedObjective=null,this._selectedObjectiveSubject.next(null),null;this._selectedObjective=L(f({},e),{Risks:[]});for(let t=0;t<this._risks.length;t++)this._risks[t].ParentId===i&&this._selectedObjective.Risks.push(this._risks[t]);return this.logger.debugLog("Objective selected with associated items",{objectiveId:i,title:this._selectedObjective.Title,risksCount:this._selectedObjective.Risks.length}),this._selectedObjectiveSubject.next(this._selectedObjective),this._selectedObjective}clearSelectedObjective(){this.logger.debugLog("Clearing selected objective"),this._selectedObjective=null,this._selectedObjectiveSubject.next(null)}static \u0275fac=function(e){return new(e||n)(Di(qi))};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})};function co(n,i){n&1&&le(0,"div",2)}var uo=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var Ts=(()=>{class n{_elementRef=s(w);_ngZone=s(j);_changeDetectorRef=s(de);_renderer=s(G);_cleanupTransitionEnd;constructor(){let e=Ni(),t=s(uo,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Un(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Un(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new U;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,r){t&2&&(te("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Ei("mat-"+r.color),E("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Et],bufferValue:[2,"bufferValue","bufferValue",Et],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,r){t&1&&(ue(0,"div",0),le(1,"div",1),D(2,co,1,0,"div",2),me(),ue(3,"div",3),le(4,"span",4),me(),ue(5,"div",5),le(6,"span",4),me()),t&2&&(p(),Ee("flex-basis",r._getBufferBarFlexBasis()),p(),S(r.mode==="buffer"?2:-1),p(),Ee("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
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
`],encapsulation:2,changeDetection:0})}return n})();function Un(n,i=0,e=100){return Math.max(i,Math.min(e,n))}var Vs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[J]})}return n})();var bt=class{applyChanges(i,e,t,r,o){i.forEachOperation((a,l,c)=>{let d,u;if(a.previousIndex==null){let b=t(a,l,c);d=e.createEmbeddedView(b.templateRef,b.context,b.index),u=be.INSERTED}else c==null?(e.remove(l),u=be.REMOVED):(d=e.get(l),e.move(d,c),u=be.MOVED);o&&o({context:d?.context,operation:u,record:a})})}detach(){}};var po=[[["caption"]],[["colgroup"],["col"]],"*"],go=["caption","colgroup, col","*"];function _o(n,i){n&1&&k(0,2)}function vo(n,i){n&1&&(R(0,"thead",0),z(1,1),M(),R(2,"tbody",0),z(3,2)(4,3),M(),R(5,"tfoot",0),z(6,4),M())}function yo(n,i){n&1&&z(0,1)(1,2)(2,3)(3,4)}var X=new g("CDK_TABLE");var wt=(()=>{class n{template=s(ee);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkCellDef",""]]})}return n})(),Dt=(()=>{class n{template=s(ee);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkHeaderCellDef",""]]})}return n})(),$n=(()=>{class n{template=s(ee);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkFooterCellDef",""]]})}return n})(),Se=(()=>{class n{_table=s(X,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,r,o){if(t&1&&ke(o,wt,5)(o,Dt,5)(o,$n,5),t&2){let a;v(a=y())&&(r.cell=a.first),v(a=y())&&(r.headerCell=a.first),v(a=y())&&(r.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",P],stickyEnd:[2,"stickyEnd","stickyEnd",P]}})}return n})(),xt=class{constructor(i,e){e.nativeElement.classList.add(...i._columnCssClassName)}},Gn=(()=>{class n extends xt{constructor(){super(s(Se),s(w))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[h]})}return n})();var Wn=(()=>{class n extends xt{constructor(){let e=s(Se),t=s(w);super(e,t);let r=e._table?._getCellRole();r&&t.nativeElement.setAttribute("role",r)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[h]})}return n})();var ti=(()=>{class n{template=s(ee);_differs=s(ve);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof He?e.headerCell.template:this instanceof ii?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,features:[$]})}return n})(),He=(()=>{class n extends ti{_table=s(X,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(ee),s(ve))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",P]},features:[h,$]})}return n})(),ii=(()=>{class n extends ti{_table=s(X,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(ee),s(ve))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",P]},features:[h,$]})}return n})(),St=(()=>{class n extends ti{_table=s(X,{optional:!0});when;constructor(){super(s(ee),s(ve))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[h]})}return n})(),fe=(()=>{class n{_viewContainer=s(pe);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","cdkCellOutlet",""]]})}return n})(),ni=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&z(0,0)},dependencies:[fe],encapsulation:2})}return n})();var ri=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&z(0,0)},dependencies:[fe],encapsulation:2})}return n})(),Qn=(()=>{class n{templateRef=s(ee);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["ng-template","cdkNoDataRow",""]]})}return n})(),Hn=["top","bottom","left","right"],ei=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(i=>this._updateCachedSizes(i)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(i,e,t=!0,r=!0,o,a,l){this._isNativeHtmlTable=i,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=r,this.direction=o,this._positionListener=a,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(i,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(i);let t=[];for(let r of i)r.nodeType===r.ELEMENT_NODE&&t.push(r,...Array.from(r.children));he({write:()=>{for(let r of t)this._removeStickyStyle(r,e)}},{injector:this._tableInjector})}updateStickyColumns(i,e,t,r=!0,o=!0){if(!i.length||!this._isBrowser||!(e.some(H=>H)||t.some(H=>H))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=i[0],l=a.children.length,c=this.direction==="rtl",d=c?"right":"left",u=c?"left":"right",b=e.lastIndexOf(!0),I=t.indexOf(!0),A,qe,$e;o&&this._updateStickyColumnReplayQueue({rows:[...i],stickyStartStates:[...e],stickyEndStates:[...t]}),he({earlyRead:()=>{A=this._getCellWidths(a,r),qe=this._getStickyStartColumnPositions(A,e),$e=this._getStickyEndColumnPositions(A,t)},write:()=>{for(let H of i)for(let B=0;B<l;B++){let ui=H.children[B];e[B]&&this._addStickyStyle(ui,d,qe[B],B===b),t[B]&&this._addStickyStyle(ui,u,$e[B],B===I)}this._positionListener&&A.some(H=>!!H)&&(this._positionListener.stickyColumnsUpdated({sizes:b===-1?[]:A.slice(0,b+1).map((H,B)=>e[B]?H:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:I===-1?[]:A.slice(I).map((H,B)=>t[B+I]?H:null).reverse()}))}},{injector:this._tableInjector})}stickRows(i,e,t){if(!this._isBrowser)return;let r=t==="bottom"?i.slice().reverse():i,o=t==="bottom"?e.slice().reverse():e,a=[],l=[],c=[];he({earlyRead:()=>{for(let d=0,u=0;d<r.length;d++){if(!o[d])continue;a[d]=u;let b=r[d];c[d]=this._isNativeHtmlTable?Array.from(b.children):[b];let I=this._retrieveElementSize(b).height;u+=I,l[d]=I}},write:()=>{let d=o.lastIndexOf(!0);for(let u=0;u<r.length;u++){if(!o[u])continue;let b=a[u],I=u===d;for(let A of c[u])this._addStickyStyle(A,t,b,I)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:a,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:a,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(i,e){this._isNativeHtmlTable&&he({write:()=>{let t=i.querySelector("tfoot");t&&(e.some(r=>!r)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(i,e){if(!i.classList.contains(this._stickCellCss))return;for(let r of e)i.style[r]="",i.classList.remove(this._borderCellCss[r]);Hn.some(r=>e.indexOf(r)===-1&&i.style[r])?i.style.zIndex=this._getCalculatedZIndex(i):(i.style.zIndex="",this._needsPositionStickyOnElement&&(i.style.position=""),i.classList.remove(this._stickCellCss))}_addStickyStyle(i,e,t,r){i.classList.add(this._stickCellCss),r&&i.classList.add(this._borderCellCss[e]),i.style[e]=`${t}px`,i.style.zIndex=this._getCalculatedZIndex(i),this._needsPositionStickyOnElement&&(i.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(i){let e={top:100,bottom:10,left:1,right:1},t=0;for(let r of Hn)i.style[r]&&(t+=e[r]);return t?`${t}`:""}_getCellWidths(i,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],r=i.children;for(let o=0;o<r.length;o++){let a=r[o];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(i,e){let t=[],r=0;for(let o=0;o<i.length;o++)e[o]&&(t[o]=r,r+=i[o]);return t}_getStickyEndColumnPositions(i,e){let t=[],r=0;for(let o=i.length;o>0;o--)e[o]&&(t[o]=r,r+=i[o]);return t}_retrieveElementSize(i){let e=this._elemSizeCache.get(i);if(e)return e;let t=i.getBoundingClientRect(),r={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(i,r),this._resizeObserver.observe(i,{box:"border-box"})),r}_updateStickyColumnReplayQueue(i){this._removeFromStickyColumnReplayQueue(i.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(i)}_removeFromStickyColumnReplayQueue(i){let e=new Set(i);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(r=>!e.has(r));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(i){let e=!1;for(let t of i){let r=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};r.width!==this._elemSizeCache.get(t.target)?.width&&bo(t.target)&&(e=!0),this._elemSizeCache.set(t.target,r)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function bo(n){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(i=>n.classList.contains(i))}var Ue=new g("STICKY_POSITIONING_LISTENER");var oi=(()=>{class n{viewContainer=s(pe);elementRef=s(w);constructor(){let e=s(X);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","rowOutlet",""]]})}return n})(),ai=(()=>{class n{viewContainer=s(pe);elementRef=s(w);constructor(){let e=s(X);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","headerRowOutlet",""]]})}return n})(),si=(()=>{class n{viewContainer=s(pe);elementRef=s(w);constructor(){let e=s(X);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","footerRowOutlet",""]]})}return n})(),li=(()=>{class n{viewContainer=s(pe);elementRef=s(w);constructor(){let e=s(X);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["","noDataRowOutlet",""]]})}return n})(),di=(()=>{class n{_differs=s(ve);_changeDetectorRef=s(de);_elementRef=s(w);_dir=s(tt,{optional:!0});_platform=s(re);_viewRepeater;_viewportRuler=s(Bi);_injector=s(Mt);_virtualScrollViewport=s(Ui,{optional:!0,host:!0});_positionListener=s(Ue,{optional:!0})||s(Ue,{optional:!0,skipSelf:!0});_document=s(Me);_data;_renderedRange;_onDestroy=new F;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new F;_footerRowStickyUpdates=new F;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new F;_dataStream=new F;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new U;viewChange=new Re({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new Ti("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,r)=>this.trackBy?this.trackBy(r.dataIndex,r.data):r)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(q(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new zi:new bt,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),it(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(r,o,a)=>this._getEmbeddedViewArgs(r.item,a),r=>r.item.data,r=>{r.operation===be.INSERTED&&r.context&&this._renderCellTemplateForItem(r.record.item.rowDef,r.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(r=>{let o=t.get(r.currentIndex);o.context.$implicit=r.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let r=qn(this._headerRowOutlet,"thead");r&&(r.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let r=qn(this._footerRowOutlet,"tfoot");r&&(r.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(r=>r.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(r=>r.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...r],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===o&&a.push(t[l]);this._addStickyColumnStyles(a,o)}),r.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),r=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],l=this._getRenderRowsForData(a,o,r.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let c=0;c<l.length;c++){let d=l[c],u=this._cachedRenderRowsMap.get(d.data);u.has(d.rowDef)?u.get(d.rowDef).push(d):u.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,r){return this._getRowDefs(e,t).map(a=>{let l=r&&r.has(a)?r.get(a):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Ct(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Ct(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Ct(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Ct(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,l)=>{let c=!!l.getColumnsDiff();return a||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let r=this._headerRowDefs.reduce(e,!1);r&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||r||o}_switchDataSource(e){this._data=[],it(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;it(this.dataSource)?e=this.dataSource.connect(this):vi(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Rt(this.dataSource)),this._renderChangeSubscription=We([e,this.viewChange]).pipe(q(this._onDestroy)).subscribe(([t,r])=>{this._data=t||[],this._renderedRange=r,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let r=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);return c}),o=r.map(l=>l.sticky),a=r.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let r=0;r<e.viewContainer.length;r++){let o=e.viewContainer.get(r);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let r=[];if(this.multiTemplateDataRows)r=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&r.push(o)}return r.length,r}_getEmbeddedViewArgs(e,t){let r=e.rowDef,o={$implicit:e.data};return{templateRef:r.template,context:o,index:t}}_renderRow(e,t,r,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,r);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let r of this._getCellTemplates(e))fe.mostRecentCellOutlet&&fe.mostRecentCellOutlet._viewContainer.createEmbeddedView(r,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,r=e.length;t<r;t++){let a=e.get(t).context;a.count=r,a.first=t===0,a.last=t===r-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let r=this._columnDefsByName.get(t);return e.extractCellTemplate(r)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,r)=>t||r.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new ei(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Rt()).pipe(q(this._onDestroy)).subscribe(r=>{this._stickyStyler.direction=r,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?pi:hi;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Xe(0,t),q(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(r,o)=>this._measureRangeSize(r,o)}),We([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(q(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let l=o.elements[a];if(l){let c=o.offsets[a],d=r!==0?Math.max(r-c,c):-c;for(let u of l)u.style.top=`${-d}px`}}}),We([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(q(this._onDestroy)).subscribe(([r,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let l=o.elements[a];if(l)for(let c of l)c.style.bottom=`${r+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let r=this._noDataRowOutlet.viewContainer;if(t){let o=r.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let l=a.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else r.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let r=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<r.start||e.end>r.end;let a=e.start-r.start,l=e.end-e.start,c,d;for(let I=0;I<l;I++){let A=o.get(I+a);if(A&&A.rootNodes.length){c=d=A.rootNodes[0];break}}for(let I=l-1;I>-1;I--){let A=o.get(I+a);if(A&&A.rootNodes.length){d=A.rootNodes[A.rootNodes.length-1];break}}let u=c?.getBoundingClientRect?.(),b=d?.getBoundingClientRect?.();return u&&b?b.bottom-u.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,r,o){if(t&1&&ke(o,Qn,5)(o,Se,5)(o,St,5)(o,He,5)(o,ii,5),t&2){let a;v(a=y())&&(r._noDataRow=a.first),v(a=y())&&(r._contentColumnDefs=a),v(a=y())&&(r._contentRowDefs=a),v(a=y())&&(r._contentHeaderRowDefs=a),v(a=y())&&(r._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,r){t&2&&E("cdk-table-fixed-layout",r.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",P],fixedLayout:[2,"fixedLayout","fixedLayout",P],recycleRows:[2,"recycleRows","recycleRows",P]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[C([{provide:X,useExisting:n},{provide:Ue,useValue:null}])],ngContentSelectors:go,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(ie(po),k(0),k(1,1),D(2,_o,1,0),D(3,vo,7,0)(4,yo,4,0)),t&2&&(p(2),S(r._isServer?2:-1),p(),S(r._isNativeHtmlTable?3:4))},dependencies:[ai,oi,li,si],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return n})();function Ct(n,i){return n.concat(Array.from(i))}function qn(n,i){let e=i.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let r=t.nodeType===1?t.nodeName:null;if(r===e)return t;if(r==="TABLE")break;t=t.parentNode}return null}var Xn=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[Hi]})}return n})();var ci=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new F;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var Co=[[["caption"]],[["colgroup"],["col"]],"*"],xo=["caption","colgroup, col","*"];function wo(n,i){n&1&&k(0,2)}function Do(n,i){n&1&&(R(0,"thead",0),z(1,1),M(),R(2,"tbody",2),z(3,3)(4,4),M(),R(5,"tfoot",0),z(6,5),M())}function So(n,i){n&1&&z(0,1)(1,3)(2,4)(3,5)}var Cl=(()=>{class n extends di{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275cmp=O({type:n,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,r){t&2&&E("mat-table-fixed-layout",r.fixedLayout)},exportAs:["matTable"],features:[C([{provide:di,useExisting:n},{provide:X,useExisting:n},{provide:Ue,useValue:null}]),h],ngContentSelectors:xo,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,r){t&1&&(ie(Co),k(0),k(1,1),D(2,wo,1,0),D(3,Do,7,0)(4,So,4,0)),t&2&&(p(2),S(r._isServer?2:-1),p(),S(r._isNativeHtmlTable?3:4))},dependencies:[ai,oi,li,si],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return n})(),xl=(()=>{class n extends wt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matCellDef",""]],features:[C([{provide:wt,useExisting:n}]),h]})}return n})(),wl=(()=>{class n extends Dt{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matHeaderCellDef",""]],features:[C([{provide:Dt,useExisting:n}]),h]})}return n})();var Dl=(()=>{class n extends Se{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[C([{provide:Se,useExisting:n}]),h]})}return n})(),Sl=(()=>{class n extends Gn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[h]})}return n})();var Rl=(()=>{class n extends Wn{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[h]})}return n})();var Ml=(()=>{class n extends He{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",P]},features:[C([{provide:He,useExisting:n}]),h]})}return n})();var Fl=(()=>{class n extends St{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275dir=m({type:n,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[C([{provide:St,useExisting:n}]),h]})}return n})(),kl=(()=>{class n extends ni{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275cmp=O({type:n,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[C([{provide:ni,useExisting:n}]),h],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&z(0,0)},dependencies:[fe],encapsulation:2})}return n})();var El=(()=>{class n extends ri{static \u0275fac=(()=>{let e;return function(r){return(e||(e=N(n)))(r||n)}})();static \u0275cmp=O({type:n,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[C([{provide:ri,useExisting:n}]),h],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,r){t&1&&z(0,0)},dependencies:[fe],encapsulation:2})}return n})();var Al=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[Xn,J]})}return n})();var Ro=["*"];var Mo=new g("MAT_CARD_CONFIG"),Bl=(()=>{class n{appearance;constructor(){let e=s(Mo,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=O({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&E("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ro,decls:1,vars:0,template:function(t,r){t&1&&(ie(),k(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return n})();var Ul=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})();var Hl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=V({type:n});static \u0275inj=T({imports:[J]})}return n})();export{ht as a,tn as b,rt as c,oe as d,ae as e,Go as f,Wo as g,Gt as h,br as i,Xo as j,xr as k,Sr as l,Wt as m,kr as n,Zo as o,Yo as p,Ko as q,wn as r,Xt as s,Zt as t,Yt as u,Kt as v,Ln as w,Jt as x,Wa as y,Nn as z,zn as A,yt as B,ps as C,gs as D,Bn as E,Ts as F,Vs as G,ci as H,Cl as I,xl as J,wl as K,Dl as L,Sl as M,Rl as N,Ml as O,Fl as P,kl as Q,El as R,Al as S,Bl as T,Ul as U,Hl as V};
