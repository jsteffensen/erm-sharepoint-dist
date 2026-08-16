import{a as sr}from"./chunk-XFVDIVRT.js";import{A as jo,B as Wo,C as Go,D as $o,E as Uo,F as Qo,G as Yo,H as qo,I as Xo,J as Ko,K as Zo,L as Jo,M as Sn,N as Mn,O as Dn,P as tr,Q as er,R as ir,S as nr,a as Eo,b as bn,c as Be,d as To,e as vn,f as Oo,g as Ao,h as Po,j as Lo,k as Ss,l as Fo,m as zo,n as yn,o as Bo,q as No,r as Ho,s as xn,t as kn,w as oi,x as wn,y as Cn,z as Vo}from"./chunk-QHSQ74B7.js";import{Aa as Rn,B as mn,D as _o,E as bo,G as vo,H as yo,J as pn,K as un,P as ni,Q as si,R as xo,S as fn,T as ko,U as wo,V as ze,W as Co,X as ai,Y as gn,Z as _n,b as ws,e as uo,ga as So,ia as Mo,ja as Do,m as fo,pa as Io,q as Fe,r as cn,ra as Ro,s as dn,t as Jt,u as ei,v as ii,w as Cs,xa as te,y as hn,ya as Wt,z as go,za as In}from"./chunk-CPFR4GCD.js";import{$ as I,$b as Y,Ab as P,Ac as gt,Bb as U,Bc as Mi,Cb as Rt,Db as Pe,Eb as Le,Fb as Kt,Gb as dt,Hb as Zt,Kb as z,Lb as Ze,Mb as R,Nb as zt,O as Ht,Ob as ht,P as en,Pb as Bt,Q as St,Qb as jt,Ra as k,Rb as B,Sb as N,V as vs,W as ao,Wa as Ke,Wb as Je,X as qt,Xb as on,Ya as an,Yb as ut,Z as Vt,Zb as ti,_a as ro,_b as x,a as Zi,ac as Nt,b as Ji,cb as J,cc as ys,d as tn,db as Xt,dc as xs,ea as K,eb as ot,ec as ks,fa as Z,fc as co,ga as Mt,gc as ce,h as le,hb as It,hc as Si,ia as nn,ib as vt,ic as ho,ja as oo,jb as lo,ma as bt,mc as rn,na as Xe,o as no,qb as F,qc as ln,ra as Dt,rb as W,s as so,sb as G,ta as _e,tb as be,tc as mo,ua as sn,ub as rt,uc as po,va as Tt,vb as lt,wb as $,xa as Ft,xb as _,xc as ve,ya as Ae,yb as y,z as Ci,zb as tt}from"./chunk-6SIMKND5.js";var ar=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Xt({type:e});static \u0275inj=qt({imports:[Jt]})}return e})();var $c=["*"],Uc=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,Qc=["unscopedContent"],Yc=["text"],qc=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Xc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Kc=new Vt("ListOption"),Ds=(()=>{class e{_elementRef=I(Ft);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),Zc=(()=>{class e{_elementRef=I(Ft);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),Jc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),or=(()=>{class e{_listOption=I(Kc,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,hostVars:4,hostBindings:function(i,s){i&2&&ut("mdc-list-item__start",s._isAlignedAtStart())("mdc-list-item__end",!s._isAlignedAtStart())}})}return e})(),td=(()=>{class e extends or{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[It]})}return e})(),Is=(()=>{class e extends or{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[It]})}return e})(),ed=new Vt("MAT_LIST_CONFIG"),Ms=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=si(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(si(t))}_disabled=Dt(!1);_defaultOptions=I(ed,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,hostVars:1,hostBindings:function(i,s){i&2&&F("aria-disabled",s.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),id=(()=>{class e{_elementRef=I(Ft);_ngZone=I(Xe);_listBase=I(Ms,{optional:!0});_platform=I(hn);_hostElement;_isButtonElement;_noopAnimations=ni();_avatars;_icons;set lines(t){this._explicitLines=go(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=si(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(si(t))}_disabled=Dt(!1);_subscriptions=new tn;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){I(Fe).load(ze);let t=I(fn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new xo(this,this._ngZone,this._hostElement,this._platform,I(nn)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(Ci(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),s=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;s.classList.toggle("mdc-list-item__primary-text",a),s.classList.toggle("mdc-list-item__secondary-text",!a)}else s.classList.remove("mdc-list-item__primary-text"),s.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,contentQueries:function(i,s,a){if(i&1&&Bt(a,td,4)(a,Is,4),i&2){let o;B(o=N())&&(s._avatars=o),B(o=N())&&(s._icons=o)}},hostVars:4,hostBindings:function(i,s){i&2&&(F("aria-disabled",s.disabled)("disabled",s._isButtonElement&&s.disabled||null),ut("mdc-list-item--disabled",s.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var rr=(()=>{class e extends Ms{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275cmp=J({type:e,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ce([{provide:Ms,useExisting:e}]),It],ngContentSelectors:$c,decls:1,vars:0,template:function(i,s){i&1&&(zt(),ht(0))},styles:[Uc],encapsulation:2,changeDetection:0})}return e})(),lr=(()=>{class e extends id{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=si(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275cmp=J({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,s,a){if(i&1&&Bt(a,Zc,5)(a,Ds,5)(a,Jc,5),i&2){let o;B(o=N())&&(s._lines=o),B(o=N())&&(s._titles=o),B(o=N())&&(s._meta=o)}},viewQuery:function(i,s){if(i&1&&jt(Qc,5)(Yc,5),i&2){let a;B(a=N())&&(s._unscopedContent=a.first),B(a=N())&&(s._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,s){i&2&&(F("aria-current",s._getAriaCurrent()),ut("mdc-list-item--activated",s.activated)("mdc-list-item--with-leading-avatar",s._avatars.length!==0)("mdc-list-item--with-leading-icon",s._icons.length!==0)("mdc-list-item--with-trailing-meta",s._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",s._hasBothLeadingAndTrailing())("_mat-animation-noopable",s._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[It],ngContentSelectors:Xc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,s){i&1&&(zt(qc),ht(0),_(1,"span",1),ht(2,1),ht(3,2),_(4,"span",2,0),z("cdkObserveContent",function(){return s._updateItemLines(!0)}),ht(6,3),y()(),ht(7,4),ht(8,5),tt(9,"div",3))},dependencies:[_o],encapsulation:2,changeDetection:0})}return e})();var cr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Xt({type:e});static \u0275inj=qt({imports:[bo,ai,tr,Jt,ar]})}return e})();function Ri(e){return e+.5|0}var ye=(e,n,t)=>Math.max(Math.min(e,t),n);function Di(e){return ye(Ri(e*2.55),0,255)}function xe(e){return ye(Ri(e*255),0,255)}function de(e){return ye(Ri(e/2.55)/100,0,1)}function dr(e){return ye(Ri(e*100),0,100)}var Gt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Es=[..."0123456789ABCDEF"],sd=e=>Es[e&15],ad=e=>Es[(e&240)>>4]+Es[e&15],En=e=>(e&240)>>4===(e&15),od=e=>En(e.r)&&En(e.g)&&En(e.b)&&En(e.a);function rd(e){var n=e.length,t;return e[0]==="#"&&(n===4||n===5?t={r:255&Gt[e[1]]*17,g:255&Gt[e[2]]*17,b:255&Gt[e[3]]*17,a:n===5?Gt[e[4]]*17:255}:(n===7||n===9)&&(t={r:Gt[e[1]]<<4|Gt[e[2]],g:Gt[e[3]]<<4|Gt[e[4]],b:Gt[e[5]]<<4|Gt[e[6]],a:n===9?Gt[e[7]]<<4|Gt[e[8]]:255})),t}var ld=(e,n)=>e<255?n(e):"";function cd(e){var n=od(e)?sd:ad;return e?"#"+n(e.r)+n(e.g)+n(e.b)+ld(e.a,n):void 0}var dd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function ur(e,n,t){let i=n*Math.min(t,1-t),s=(a,o=(a+e/30)%12)=>t-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function hd(e,n,t){let i=(s,a=(s+e/60)%6)=>t-t*n*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function md(e,n,t){let i=ur(e,1,.5),s;for(n+t>1&&(s=1/(n+t),n*=s,t*=s),s=0;s<3;s++)i[s]*=1-n-t,i[s]+=n;return i}function pd(e,n,t,i,s){return e===s?(n-t)/i+(n<t?6:0):n===s?(t-e)/i+2:(e-n)/i+4}function Ts(e){let t=e.r/255,i=e.g/255,s=e.b/255,a=Math.max(t,i,s),o=Math.min(t,i,s),r=(a+o)/2,l,c,d;return a!==o&&(d=a-o,c=r>.5?d/(2-a-o):d/(a+o),l=pd(t,i,s,d,a),l=l*60+.5),[l|0,c||0,r]}function Os(e,n,t,i){return(Array.isArray(n)?e(n[0],n[1],n[2]):e(n,t,i)).map(xe)}function As(e,n,t){return Os(ur,e,n,t)}function ud(e,n,t){return Os(md,e,n,t)}function fd(e,n,t){return Os(hd,e,n,t)}function fr(e){return(e%360+360)%360}function gd(e){let n=dd.exec(e),t=255,i;if(!n)return;n[5]!==i&&(t=n[6]?Di(+n[5]):xe(+n[5]));let s=fr(+n[2]),a=+n[3]/100,o=+n[4]/100;return n[1]==="hwb"?i=ud(s,a,o):n[1]==="hsv"?i=fd(s,a,o):i=As(s,a,o),{r:i[0],g:i[1],b:i[2],a:t}}function _d(e,n){var t=Ts(e);t[0]=fr(t[0]+n),t=As(t),e.r=t[0],e.g=t[1],e.b=t[2]}function bd(e){if(!e)return;let n=Ts(e),t=n[0],i=dr(n[1]),s=dr(n[2]);return e.a<255?`hsla(${t}, ${i}%, ${s}%, ${de(e.a)})`:`hsl(${t}, ${i}%, ${s}%)`}var hr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},mr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function vd(){let e={},n=Object.keys(mr),t=Object.keys(hr),i,s,a,o,r;for(i=0;i<n.length;i++){for(o=r=n[i],s=0;s<t.length;s++)a=t[s],r=r.replace(a,hr[a]);a=parseInt(mr[o],16),e[r]=[a>>16&255,a>>8&255,a&255]}return e}var Tn;function yd(e){Tn||(Tn=vd(),Tn.transparent=[0,0,0,0]);let n=Tn[e.toLowerCase()];return n&&{r:n[0],g:n[1],b:n[2],a:n.length===4?n[3]:255}}var xd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function kd(e){let n=xd.exec(e),t=255,i,s,a;if(n){if(n[7]!==i){let o=+n[7];t=n[8]?Di(o):ye(o*255,0,255)}return i=+n[1],s=+n[3],a=+n[5],i=255&(n[2]?Di(i):ye(i,0,255)),s=255&(n[4]?Di(s):ye(s,0,255)),a=255&(n[6]?Di(a):ye(a,0,255)),{r:i,g:s,b:a,a:t}}}function wd(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${de(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Rs=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,ri=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function Cd(e,n,t){let i=ri(de(e.r)),s=ri(de(e.g)),a=ri(de(e.b));return{r:xe(Rs(i+t*(ri(de(n.r))-i))),g:xe(Rs(s+t*(ri(de(n.g))-s))),b:xe(Rs(a+t*(ri(de(n.b))-a))),a:e.a+t*(n.a-e.a)}}function On(e,n,t){if(e){let i=Ts(e);i[n]=Math.max(0,Math.min(i[n]+i[n]*t,n===0?360:1)),i=As(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function gr(e,n){return e&&Object.assign(n||{},e)}function pr(e){var n={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(n={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(n.a=xe(e[3]))):(n=gr(e,{r:0,g:0,b:0,a:1}),n.a=xe(n.a)),n}function Sd(e){return e.charAt(0)==="r"?kd(e):gd(e)}var Ii=class e{constructor(n){if(n instanceof e)return n;let t=typeof n,i;t==="object"?i=pr(n):t==="string"&&(i=rd(n)||yd(n)||Sd(n)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var n=gr(this._rgb);return n&&(n.a=de(n.a)),n}set rgb(n){this._rgb=pr(n)}rgbString(){return this._valid?wd(this._rgb):void 0}hexString(){return this._valid?cd(this._rgb):void 0}hslString(){return this._valid?bd(this._rgb):void 0}mix(n,t){if(n){let i=this.rgb,s=n.rgb,a,o=t===a?.5:t,r=2*o-1,l=i.a-s.a,c=((r*l===-1?r:(r+l)/(1+r*l))+1)/2;a=1-c,i.r=255&c*i.r+a*s.r+.5,i.g=255&c*i.g+a*s.g+.5,i.b=255&c*i.b+a*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(n,t){return n&&(this._rgb=Cd(this._rgb,n._rgb,t)),this}clone(){return new e(this.rgb)}alpha(n){return this._rgb.a=xe(n),this}clearer(n){let t=this._rgb;return t.a*=1-n,this}greyscale(){let n=this._rgb,t=Ri(n.r*.3+n.g*.59+n.b*.11);return n.r=n.g=n.b=t,this}opaquer(n){let t=this._rgb;return t.a*=1+n,this}negate(){let n=this._rgb;return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,this}lighten(n){return On(this._rgb,2,n),this}darken(n){return On(this._rgb,2,-n),this}saturate(n){return On(this._rgb,1,n),this}desaturate(n){return On(this._rgb,1,-n),this}rotate(n){return _d(this._rgb,n),this}};function se(){}var Dr=(()=>{let e=0;return()=>e++})();function H(e){return e==null}function it(e){if(Array.isArray&&Array.isArray(e))return!0;let n=Object.prototype.toString.call(e);return n.slice(0,7)==="[object"&&n.slice(-6)==="Array]"}function V(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function ct(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Ot(e,n){return ct(e)?e:n}function O(e,n){return typeof e>"u"?n:e}var Ir=(e,n)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/n,zs=(e,n)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*n:+e;function et(e,n,t){if(e&&typeof e.call=="function")return e.apply(t,n)}function q(e,n,t,i){let s,a,o;if(it(e))if(a=e.length,i)for(s=a-1;s>=0;s--)n.call(t,e[s],s);else for(s=0;s<a;s++)n.call(t,e[s],s);else if(V(e))for(o=Object.keys(e),a=o.length,s=0;s<a;s++)n.call(t,e[o[s]],o[s])}function Oi(e,n){let t,i,s,a;if(!e||!n||e.length!==n.length)return!1;for(t=0,i=e.length;t<i;++t)if(s=e[t],a=n[t],s.datasetIndex!==a.datasetIndex||s.index!==a.index)return!1;return!0}function Fn(e){if(it(e))return e.map(Fn);if(V(e)){let n=Object.create(null),t=Object.keys(e),i=t.length,s=0;for(;s<i;++s)n[t[s]]=Fn(e[t[s]]);return n}return e}function Rr(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Md(e,n,t,i){if(!Rr(e))return;let s=n[e],a=t[e];V(s)&&V(a)?ci(s,a,i):n[e]=Fn(a)}function ci(e,n,t){let i=it(n)?n:[n],s=i.length;if(!V(e))return e;t=t||{};let a=t.merger||Md,o;for(let r=0;r<s;++r){if(o=i[r],!V(o))continue;let l=Object.keys(o);for(let c=0,d=l.length;c<d;++c)a(l[c],e,o,t)}return e}function hi(e,n){return ci(e,n,{merger:Dd})}function Dd(e,n,t){if(!Rr(e))return;let i=n[e],s=t[e];V(i)&&V(s)?hi(i,s):Object.prototype.hasOwnProperty.call(n,e)||(n[e]=Fn(s))}var _r={"":e=>e,x:e=>e.x,y:e=>e.y};function Id(e){let n=e.split("."),t=[],i="";for(let s of n)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(t.push(i),i="");return t}function Rd(e){let n=Id(e);return t=>{for(let i of n){if(i==="")break;t=t&&t[i]}return t}}function pe(e,n){return(_r[n]||(_r[n]=Rd(n)))(e)}function Hn(e){return e.charAt(0).toUpperCase()+e.slice(1)}var mi=e=>typeof e<"u",he=e=>typeof e=="function",Bs=(e,n)=>{if(e.size!==n.size)return!1;for(let t of e)if(!n.has(t))return!1;return!0};function Er(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}var Q=Math.PI,nt=2*Q,Ed=nt+Q,zn=Number.POSITIVE_INFINITY,Td=Q/180,mt=Q/2,Ne=Q/4,br=Q*2/3,me=Math.log10,Qt=Math.sign;function pi(e,n,t){return Math.abs(e-n)<t}function Ns(e){let n=Math.round(e);e=pi(e,n,e/1e3)?n:e;let t=Math.pow(10,Math.floor(me(e))),i=e/t;return(i<=1?1:i<=2?2:i<=5?5:10)*t}function Tr(e){let n=[],t=Math.sqrt(e),i;for(i=1;i<t;i++)e%i===0&&(n.push(i),n.push(e/i));return t===(t|0)&&n.push(t),n.sort((s,a)=>s-a).pop(),n}function Od(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function je(e){return!Od(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Or(e,n){let t=Math.round(e);return t-n<=e&&t+n>=e}function Hs(e,n,t){let i,s,a;for(i=0,s=e.length;i<s;i++)a=e[i][t],isNaN(a)||(n.min=Math.min(n.min,a),n.max=Math.max(n.max,a))}function $t(e){return e*(Q/180)}function Vn(e){return e*(180/Q)}function Vs(e){if(!ct(e))return;let n=1,t=0;for(;Math.round(e*n)/n!==e;)n*=10,t++;return t}function js(e,n){let t=n.x-e.x,i=n.y-e.y,s=Math.sqrt(t*t+i*i),a=Math.atan2(i,t);return a<-.5*Q&&(a+=nt),{angle:a,distance:s}}function Bn(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function Ad(e,n){return(e-n+Ed)%nt-Q}function xt(e){return(e%nt+nt)%nt}function ui(e,n,t,i){let s=xt(e),a=xt(n),o=xt(t),r=xt(a-s),l=xt(o-s),c=xt(s-a),d=xt(s-o);return s===a||s===o||i&&a===o||r>l&&c<d}function _t(e,n,t){return Math.max(n,Math.min(t,e))}function Ar(e){return _t(e,-32768,32767)}function ae(e,n,t,i=1e-6){return e>=Math.min(n,t)-i&&e<=Math.max(n,t)+i}function jn(e,n,t){t=t||(o=>e[o]<n);let i=e.length-1,s=0,a;for(;i-s>1;)a=s+i>>1,t(a)?s=a:i=a;return{lo:s,hi:i}}var ie=(e,n,t,i)=>jn(e,t,i?s=>{let a=e[s][n];return a<t||a===t&&e[s+1][n]===t}:s=>e[s][n]<t),Pr=(e,n,t)=>jn(e,t,i=>e[i][n]>=t);function Lr(e,n,t){let i=0,s=e.length;for(;i<s&&e[i]<n;)i++;for(;s>i&&e[s-1]>t;)s--;return i>0||s<e.length?e.slice(i,s):e}var Fr=["push","pop","shift","splice","unshift"];function zr(e,n){if(e._chartjs){e._chartjs.listeners.push(n);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),Fr.forEach(t=>{let i="_onData"+Hn(t),s=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...a){let o=s.apply(this,a);return e._chartjs.listeners.forEach(r=>{typeof r[i]=="function"&&r[i](...a)}),o}})})}function Ws(e,n){let t=e._chartjs;if(!t)return;let i=t.listeners,s=i.indexOf(n);s!==-1&&i.splice(s,1),!(i.length>0)&&(Fr.forEach(a=>{delete e[a]}),delete e._chartjs)}function Gs(e){let n=new Set(e);return n.size===e.length?e:Array.from(n)}var $s=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function Us(e,n){let t=[],i=!1;return function(...s){t=s,i||(i=!0,$s.call(window,()=>{i=!1,e.apply(n,t)}))}}function Br(e,n){let t;return function(...i){return n?(clearTimeout(t),t=setTimeout(e,n,i)):e.apply(this,i),n}}var Wn=e=>e==="start"?"left":e==="end"?"right":"center",kt=(e,n,t)=>e==="start"?n:e==="end"?t:(n+t)/2,Nr=(e,n,t,i)=>e===(i?"left":"right")?t:e==="center"?(n+t)/2:n;function Qs(e,n,t){let i=n.length,s=0,a=i;if(e._sorted){let{iScale:o,vScale:r,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=o.axis,{min:h,max:m,minDefined:p,maxDefined:f}=o.getUserBounds();if(p){if(s=Math.min(ie(l,d,h).lo,t?i:ie(n,d,o.getPixelForValue(h)).lo),c){let u=l.slice(0,s+1).reverse().findIndex(g=>!H(g[r.axis]));s-=Math.max(0,u)}s=_t(s,0,i-1)}if(f){let u=Math.max(ie(l,o.axis,m,!0).hi+1,t?0:ie(n,d,o.getPixelForValue(m),!0).hi+1);if(c){let g=l.slice(u-1).findIndex(b=>!H(b[r.axis]));u+=Math.max(0,g)}a=_t(u,s,i)-s}else a=i-s}return{start:s,count:a}}function Ys(e){let{xScale:n,yScale:t,_scaleRanges:i}=e,s={xmin:n.min,xmax:n.max,ymin:t.min,ymax:t.max};if(!i)return e._scaleRanges=s,!0;let a=i.xmin!==n.min||i.xmax!==n.max||i.ymin!==t.min||i.ymax!==t.max;return Object.assign(i,s),a}var An=e=>e===0||e===1,vr=(e,n,t)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-n)*nt/t)),yr=(e,n,t)=>Math.pow(2,-10*e)*Math.sin((e-n)*nt/t)+1,li={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*mt)+1,easeOutSine:e=>Math.sin(e*mt),easeInOutSine:e=>-.5*(Math.cos(Q*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>An(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>An(e)?e:vr(e,.075,.3),easeOutElastic:e=>An(e)?e:yr(e,.075,.3),easeInOutElastic(e){return An(e)?e:e<.5?.5*vr(e*2,.1125,.45):.5+.5*yr(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let n=1.70158;return(e/=.5)<1?.5*(e*e*(((n*=1.525)+1)*e-n)):.5*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)},easeInBounce:e=>1-li.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?li.easeInBounce(e*2)*.5:li.easeOutBounce(e*2-1)*.5+.5};function qs(e){if(e&&typeof e=="object"){let n=e.toString();return n==="[object CanvasPattern]"||n==="[object CanvasGradient]"}return!1}function Xs(e){return qs(e)?e:new Ii(e)}function Ps(e){return qs(e)?e:new Ii(e).saturate(.5).darken(.1).hexString()}var Pd=["x","y","borderWidth","radius","tension"],Ld=["color","borderColor","backgroundColor"];function Fd(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:n=>n!=="onProgress"&&n!=="onComplete"&&n!=="fn"}),e.set("animations",{colors:{type:"color",properties:Ld},numbers:{type:"number",properties:Pd}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:n=>n|0}}}})}function zd(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var xr=new Map;function Bd(e,n){n=n||{};let t=e+JSON.stringify(n),i=xr.get(t);return i||(i=new Intl.NumberFormat(e,n),xr.set(t,i)),i}function fi(e,n,t){return Bd(n,t).format(e)}var Hr={values(e){return it(e)?e:""+e},numeric(e,n,t){if(e===0)return"0";let i=this.chart.options.locale,s,a=e;if(t.length>1){let c=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(c<1e-4||c>1e15)&&(s="scientific"),a=Nd(e,t)}let o=me(Math.abs(a)),r=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:s,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),fi(e,i,l)},logarithmic(e,n,t){if(e===0)return"0";let i=t[n].significand||e/Math.pow(10,Math.floor(me(e)));return[1,2,3,5,10,15].includes(i)||n>.8*t.length?Hr.numeric.call(this,e,n,t):""}};function Nd(e,n){let t=n.length>3?n[2].value-n[1].value:n[1].value-n[0].value;return Math.abs(t)>=1&&e!==Math.floor(e)&&(t=e-Math.floor(e)),t}var Ai={formatters:Hr};function Hd(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(n,t)=>t.lineWidth,tickColor:(n,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ai.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:n=>!n.startsWith("before")&&!n.startsWith("after")&&n!=="callback"&&n!=="parser",_indexable:n=>n!=="borderDash"&&n!=="tickBorderDash"&&n!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:n=>n!=="backdropPadding"&&n!=="callback",_indexable:n=>n!=="backdropPadding"})}var Ce=Object.create(null),Gn=Object.create(null);function Ei(e,n){if(!n)return e;let t=n.split(".");for(let i=0,s=t.length;i<s;++i){let a=t[i];e=e[a]||(e[a]=Object.create(null))}return e}function Ls(e,n,t){return typeof n=="string"?ci(Ei(e,n),t):ci(Ei(e,""),n)}var Fs=class{constructor(n,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Ps(s.backgroundColor),this.hoverBorderColor=(i,s)=>Ps(s.borderColor),this.hoverColor=(i,s)=>Ps(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(n),this.apply(t)}set(n,t){return Ls(this,n,t)}get(n){return Ei(this,n)}describe(n,t){return Ls(Gn,n,t)}override(n,t){return Ls(Ce,n,t)}route(n,t,i,s){let a=Ei(this,n),o=Ei(this,i),r="_"+t;Object.defineProperties(a,{[r]:{value:a[t],writable:!0},[t]:{enumerable:!0,get(){let l=this[r],c=o[s];return V(l)?Object.assign({},c,l):O(l,c)},set(l){this[r]=l}}})}apply(n){n.forEach(t=>t(this))}},st=new Fs({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Fd,zd,Hd]);function Vd(e){return!e||H(e.size)||H(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ti(e,n,t,i,s){let a=n[s];return a||(a=n[s]=e.measureText(s).width,t.push(s)),a>i&&(i=a),i}function Vr(e,n,t,i){i=i||{};let s=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==n&&(s=i.data={},a=i.garbageCollect=[],i.font=n),e.save(),e.font=n;let o=0,r=t.length,l,c,d,h,m;for(l=0;l<r;l++)if(h=t[l],h!=null&&!it(h))o=Ti(e,s,a,o,h);else if(it(h))for(c=0,d=h.length;c<d;c++)m=h[c],m!=null&&!it(m)&&(o=Ti(e,s,a,o,m));e.restore();let p=a.length/2;if(p>t.length){for(l=0;l<p;l++)delete s[a[l]];a.splice(0,p)}return o}function Se(e,n,t){let i=e.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((n-s)*i)/i+s}function Ks(e,n){!n&&!e||(n=n||e.getContext("2d"),n.save(),n.resetTransform(),n.clearRect(0,0,e.width,e.height),n.restore())}function $n(e,n,t,i){Zs(e,n,t,i,null)}function Zs(e,n,t,i,s){let a,o,r,l,c,d,h,m,p=n.pointStyle,f=n.rotation,u=n.radius,g=(f||0)*Td;if(p&&typeof p=="object"&&(a=p.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(t,i),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(u)||u<=0)){switch(e.beginPath(),p){default:s?e.ellipse(t,i,s/2,u,0,0,nt):e.arc(t,i,u,0,nt),e.closePath();break;case"triangle":d=s?s/2:u,e.moveTo(t+Math.sin(g)*d,i-Math.cos(g)*u),g+=br,e.lineTo(t+Math.sin(g)*d,i-Math.cos(g)*u),g+=br,e.lineTo(t+Math.sin(g)*d,i-Math.cos(g)*u),e.closePath();break;case"rectRounded":c=u*.516,l=u-c,o=Math.cos(g+Ne)*l,h=Math.cos(g+Ne)*(s?s/2-c:l),r=Math.sin(g+Ne)*l,m=Math.sin(g+Ne)*(s?s/2-c:l),e.arc(t-h,i-r,c,g-Q,g-mt),e.arc(t+m,i-o,c,g-mt,g),e.arc(t+h,i+r,c,g,g+mt),e.arc(t-m,i+o,c,g+mt,g+Q),e.closePath();break;case"rect":if(!f){l=Math.SQRT1_2*u,d=s?s/2:l,e.rect(t-d,i-l,2*d,2*l);break}g+=Ne;case"rectRot":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+m,i-o),e.lineTo(t+h,i+r),e.lineTo(t-m,i+o),e.closePath();break;case"crossRot":g+=Ne;case"cross":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o);break;case"star":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o),g+=Ne,h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o);break;case"line":o=s?s/2:Math.cos(g)*u,r=Math.sin(g)*u,e.moveTo(t-o,i-r),e.lineTo(t+o,i+r);break;case"dash":e.moveTo(t,i),e.lineTo(t+Math.cos(g)*(s?s/2:u),i+Math.sin(g)*u);break;case!1:e.closePath();break}e.fill(),n.borderWidth>0&&e.stroke()}}function ne(e,n,t){return t=t||.5,!n||e&&e.x>n.left-t&&e.x<n.right+t&&e.y>n.top-t&&e.y<n.bottom+t}function Pi(e,n){e.save(),e.beginPath(),e.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),e.clip()}function Li(e){e.restore()}function jr(e,n,t,i,s){if(!n)return e.lineTo(t.x,t.y);if(s==="middle"){let a=(n.x+t.x)/2;e.lineTo(a,n.y),e.lineTo(a,t.y)}else s==="after"!=!!i?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(t.x,t.y)}function Wr(e,n,t,i){if(!n)return e.lineTo(t.x,t.y);e.bezierCurveTo(i?n.cp1x:n.cp2x,i?n.cp1y:n.cp2y,i?t.cp2x:t.cp1x,i?t.cp2y:t.cp1y,t.x,t.y)}function jd(e,n){n.translation&&e.translate(n.translation[0],n.translation[1]),H(n.rotation)||e.rotate(n.rotation),n.color&&(e.fillStyle=n.color),n.textAlign&&(e.textAlign=n.textAlign),n.textBaseline&&(e.textBaseline=n.textBaseline)}function Wd(e,n,t,i,s){if(s.strikethrough||s.underline){let a=e.measureText(i),o=n-a.actualBoundingBoxLeft,r=n+a.actualBoundingBoxRight,l=t-a.actualBoundingBoxAscent,c=t+a.actualBoundingBoxDescent,d=s.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=s.decorationWidth||2,e.moveTo(o,d),e.lineTo(r,d),e.stroke()}}function Gd(e,n){let t=e.fillStyle;e.fillStyle=n.color,e.fillRect(n.left,n.top,n.width,n.height),e.fillStyle=t}function Me(e,n,t,i,s,a={}){let o=it(n)?n:[n],r=a.strokeWidth>0&&a.strokeColor!=="",l,c;for(e.save(),e.font=s.string,jd(e,a),l=0;l<o.length;++l)c=o[l],a.backdrop&&Gd(e,a.backdrop),r&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),H(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(c,t,i,a.maxWidth)),e.fillText(c,t,i,a.maxWidth),Wd(e,t,i,c,a),i+=Number(s.lineHeight);e.restore()}function gi(e,n){let{x:t,y:i,w:s,h:a,radius:o}=n;e.arc(t+o.topLeft,i+o.topLeft,o.topLeft,1.5*Q,Q,!0),e.lineTo(t,i+a-o.bottomLeft),e.arc(t+o.bottomLeft,i+a-o.bottomLeft,o.bottomLeft,Q,mt,!0),e.lineTo(t+s-o.bottomRight,i+a),e.arc(t+s-o.bottomRight,i+a-o.bottomRight,o.bottomRight,mt,0,!0),e.lineTo(t+s,i+o.topRight),e.arc(t+s-o.topRight,i+o.topRight,o.topRight,0,-mt,!0),e.lineTo(t+o.topLeft,i)}var $d=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Ud=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Qd(e,n){let t=(""+e).match($d);if(!t||t[1]==="normal")return n*1.2;switch(e=+t[2],t[3]){case"px":return e;case"%":e/=100;break}return n*e}var Yd=e=>+e||0;function Un(e,n){let t={},i=V(n),s=i?Object.keys(n):n,a=V(e)?i?o=>O(e[o],e[n[o]]):o=>e[o]:()=>e;for(let o of s)t[o]=Yd(a(o));return t}function Js(e){return Un(e,{top:"y",right:"x",bottom:"y",left:"x"})}function De(e){return Un(e,["topLeft","topRight","bottomLeft","bottomRight"])}function wt(e){let n=Js(e);return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function ft(e,n){e=e||{},n=n||st.font;let t=O(e.size,n.size);typeof t=="string"&&(t=parseInt(t,10));let i=O(e.style,n.style);i&&!(""+i).match(Ud)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let s={family:O(e.family,n.family),lineHeight:Qd(O(e.lineHeight,n.lineHeight),t),size:t,style:i,weight:O(e.weight,n.weight),string:""};return s.string=Vd(s),s}function _i(e,n,t,i){let s=!0,a,o,r;for(a=0,o=e.length;a<o;++a)if(r=e[a],r!==void 0&&(n!==void 0&&typeof r=="function"&&(r=r(n),s=!1),t!==void 0&&it(r)&&(r=r[t%r.length],s=!1),r!==void 0))return i&&!s&&(i.cacheable=!1),r}function Gr(e,n,t){let{min:i,max:s}=e,a=zs(n,(s-i)/2),o=(r,l)=>t&&r===0?0:r+l;return{min:o(i,-Math.abs(a)),max:o(s,a)}}function ue(e,n){return Object.assign(Object.create(e),n)}function Qn(e,n=[""],t,i,s=()=>e[0]){let a=t||e;typeof i>"u"&&(i=Qr("_fallback",e));let o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:i,_getTarget:s,override:r=>Qn([r,...e],n,a,i)};return new Proxy(o,{deleteProperty(r,l){return delete r[l],delete r._keys,delete e[0][l],!0},get(r,l){return $r(r,l,()=>ih(l,n,e,r))},getOwnPropertyDescriptor(r,l){return Reflect.getOwnPropertyDescriptor(r._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(r,l){return wr(r).includes(l)},ownKeys(r){return wr(r)},set(r,l,c){let d=r._storage||(r._storage=s());return r[l]=d[l]=c,delete r._keys,!0}})}function Ve(e,n,t,i){let s={_cacheable:!1,_proxy:e,_context:n,_subProxy:t,_stack:new Set,_descriptors:ta(e,i),setContext:a=>Ve(e,a,t,i),override:a=>Ve(e.override(a),n,t,i)};return new Proxy(s,{deleteProperty(a,o){return delete a[o],delete e[o],!0},get(a,o,r){return $r(a,o,()=>Xd(a,o,r))},getOwnPropertyDescriptor(a,o){return a._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(a,o,r){return e[o]=r,delete a[o],!0}})}function ta(e,n={scriptable:!0,indexable:!0}){let{_scriptable:t=n.scriptable,_indexable:i=n.indexable,_allKeys:s=n.allKeys}=e;return{allKeys:s,scriptable:t,indexable:i,isScriptable:he(t)?t:()=>t,isIndexable:he(i)?i:()=>i}}var qd=(e,n)=>e?e+Hn(n):n,ea=(e,n)=>V(n)&&e!=="adapters"&&(Object.getPrototypeOf(n)===null||n.constructor===Object);function $r(e,n,t){if(Object.prototype.hasOwnProperty.call(e,n)||n==="constructor")return e[n];let i=t();return e[n]=i,i}function Xd(e,n,t){let{_proxy:i,_context:s,_subProxy:a,_descriptors:o}=e,r=i[n];return he(r)&&o.isScriptable(n)&&(r=Kd(n,r,e,t)),it(r)&&r.length&&(r=Zd(n,r,e,o.isIndexable)),ea(n,r)&&(r=Ve(r,s,a&&a[n],o)),r}function Kd(e,n,t,i){let{_proxy:s,_context:a,_subProxy:o,_stack:r}=t;if(r.has(e))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+e);r.add(e);let l=n(a,o||i);return r.delete(e),ea(e,l)&&(l=ia(s._scopes,s,e,l)),l}function Zd(e,n,t,i){let{_proxy:s,_context:a,_subProxy:o,_descriptors:r}=t;if(typeof a.index<"u"&&i(e))return n[a.index%n.length];if(V(n[0])){let l=n,c=s._scopes.filter(d=>d!==l);n=[];for(let d of l){let h=ia(c,s,e,d);n.push(Ve(h,a,o&&o[e],r))}}return n}function Ur(e,n,t){return he(e)?e(n,t):e}var Jd=(e,n)=>e===!0?n:typeof e=="string"?pe(n,e):void 0;function th(e,n,t,i,s){for(let a of n){let o=Jd(t,a);if(o){e.add(o);let r=Ur(o._fallback,t,s);if(typeof r<"u"&&r!==t&&r!==i)return r}else if(o===!1&&typeof i<"u"&&t!==i)return null}return!1}function ia(e,n,t,i){let s=n._rootScopes,a=Ur(n._fallback,t,i),o=[...e,...s],r=new Set;r.add(i);let l=kr(r,o,t,a||t,i);return l===null||typeof a<"u"&&a!==t&&(l=kr(r,o,a,l,i),l===null)?!1:Qn(Array.from(r),[""],s,a,()=>eh(n,t,i))}function kr(e,n,t,i,s){for(;t;)t=th(e,n,t,i,s);return t}function eh(e,n,t){let i=e._getTarget();n in i||(i[n]={});let s=i[n];return it(s)&&V(t)?t:s||{}}function ih(e,n,t,i){let s;for(let a of n)if(s=Qr(qd(a,e),t),typeof s<"u")return ea(e,s)?ia(t,i,e,s):s}function Qr(e,n){for(let t of n){if(!t)continue;let i=t[e];if(typeof i<"u")return i}}function wr(e){let n=e._keys;return n||(n=e._keys=nh(e._scopes)),n}function nh(e){let n=new Set;for(let t of e)for(let i of Object.keys(t).filter(s=>!s.startsWith("_")))n.add(i);return Array.from(n)}function na(e,n,t,i){let{iScale:s}=e,{key:a="r"}=this._parsing,o=new Array(i),r,l,c,d;for(r=0,l=i;r<l;++r)c=r+t,d=n[c],o[r]={r:s.parse(pe(d,a),c)};return o}var sh=Number.EPSILON||1e-14,di=(e,n)=>n<e.length&&!e[n].skip&&e[n],Yr=e=>e==="x"?"y":"x";function ah(e,n,t,i){let s=e.skip?n:e,a=n,o=t.skip?n:t,r=Bn(a,s),l=Bn(o,a),c=r/(r+l),d=l/(r+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;let h=i*c,m=i*d;return{previous:{x:a.x-h*(o.x-s.x),y:a.y-h*(o.y-s.y)},next:{x:a.x+m*(o.x-s.x),y:a.y+m*(o.y-s.y)}}}function oh(e,n,t){let i=e.length,s,a,o,r,l,c=di(e,0);for(let d=0;d<i-1;++d)if(l=c,c=di(e,d+1),!(!l||!c)){if(pi(n[d],0,sh)){t[d]=t[d+1]=0;continue}s=t[d]/n[d],a=t[d+1]/n[d],r=Math.pow(s,2)+Math.pow(a,2),!(r<=9)&&(o=3/Math.sqrt(r),t[d]=s*o*n[d],t[d+1]=a*o*n[d])}}function rh(e,n,t="x"){let i=Yr(t),s=e.length,a,o,r,l=di(e,0);for(let c=0;c<s;++c){if(o=r,r=l,l=di(e,c+1),!r)continue;let d=r[t],h=r[i];o&&(a=(d-o[t])/3,r[`cp1${t}`]=d-a,r[`cp1${i}`]=h-a*n[c]),l&&(a=(l[t]-d)/3,r[`cp2${t}`]=d+a,r[`cp2${i}`]=h+a*n[c])}}function lh(e,n="x"){let t=Yr(n),i=e.length,s=Array(i).fill(0),a=Array(i),o,r,l,c=di(e,0);for(o=0;o<i;++o)if(r=l,l=c,c=di(e,o+1),!!l){if(c){let d=c[n]-l[n];s[o]=d!==0?(c[t]-l[t])/d:0}a[o]=r?c?Qt(s[o-1])!==Qt(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}oh(e,s,a),rh(e,a,n)}function Pn(e,n,t){return Math.max(Math.min(e,t),n)}function ch(e,n){let t,i,s,a,o,r=ne(e[0],n);for(t=0,i=e.length;t<i;++t)o=a,a=r,r=t<i-1&&ne(e[t+1],n),a&&(s=e[t],o&&(s.cp1x=Pn(s.cp1x,n.left,n.right),s.cp1y=Pn(s.cp1y,n.top,n.bottom)),r&&(s.cp2x=Pn(s.cp2x,n.left,n.right),s.cp2y=Pn(s.cp2y,n.top,n.bottom)))}function qr(e,n,t,i,s){let a,o,r,l;if(n.spanGaps&&(e=e.filter(c=>!c.skip)),n.cubicInterpolationMode==="monotone")lh(e,s);else{let c=i?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)r=e[a],l=ah(c,r,e[Math.min(a+1,o-(i?0:1))%o],n.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,c=r}n.capBezierPoints&&ch(e,t)}function Yn(){return typeof window<"u"&&typeof document<"u"}function qn(e){let n=e.parentNode;return n&&n.toString()==="[object ShadowRoot]"&&(n=n.host),n}function Nn(e,n,t){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*n.parentNode[t])):i=e,i}var Xn=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function dh(e,n){return Xn(e).getPropertyValue(n)}var hh=["top","right","bottom","left"];function He(e,n,t){let i={};t=t?"-"+t:"";for(let s=0;s<4;s++){let a=hh[s];i[a]=parseFloat(e[n+"-"+a+t])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var mh=(e,n,t)=>(e>0||n>0)&&(!t||!t.shadowRoot);function ph(e,n){let t=e.touches,i=t&&t.length?t[0]:e,{offsetX:s,offsetY:a}=i,o=!1,r,l;if(mh(s,a,e.target))r=s,l=a;else{let c=n.getBoundingClientRect();r=i.clientX-c.left,l=i.clientY-c.top,o=!0}return{x:r,y:l,box:o}}function Ie(e,n){if("native"in e)return e;let{canvas:t,currentDevicePixelRatio:i}=n,s=Xn(t),a=s.boxSizing==="border-box",o=He(s,"padding"),r=He(s,"border","width"),{x:l,y:c,box:d}=ph(e,t),h=o.left+(d&&r.left),m=o.top+(d&&r.top),{width:p,height:f}=n;return a&&(p-=o.width+r.width,f-=o.height+r.height),{x:Math.round((l-h)/p*t.width/i),y:Math.round((c-m)/f*t.height/i)}}function uh(e,n,t){let i,s;if(n===void 0||t===void 0){let a=e&&qn(e);if(!a)n=e.clientWidth,t=e.clientHeight;else{let o=a.getBoundingClientRect(),r=Xn(a),l=He(r,"border","width"),c=He(r,"padding");n=o.width-c.width-l.width,t=o.height-c.height-l.height,i=Nn(r.maxWidth,a,"clientWidth"),s=Nn(r.maxHeight,a,"clientHeight")}}return{width:n,height:t,maxWidth:i||zn,maxHeight:s||zn}}var we=e=>Math.round(e*10)/10;function Xr(e,n,t,i){let s=Xn(e),a=He(s,"margin"),o=Nn(s.maxWidth,e,"clientWidth")||zn,r=Nn(s.maxHeight,e,"clientHeight")||zn,l=uh(e,n,t),{width:c,height:d}=l;if(s.boxSizing==="content-box"){let m=He(s,"border","width"),p=He(s,"padding");c-=p.width+m.width,d-=p.height+m.height}return c=Math.max(0,c-a.width),d=Math.max(0,i?c/i:d-a.height),c=we(Math.min(c,o,l.maxWidth)),d=we(Math.min(d,r,l.maxHeight)),c&&!d&&(d=we(c/2)),(n!==void 0||t!==void 0)&&i&&l.height&&d>l.height&&(d=l.height,c=we(Math.floor(d*i))),{width:c,height:d}}function sa(e,n,t){let i=n||1,s=we(e.height*i),a=we(e.width*i);e.height=we(e.height),e.width=we(e.width);let o=e.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||o.height!==s||o.width!==a?(e.currentDevicePixelRatio=i,o.height=s,o.width=a,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}var Kr=(function(){let e=!1;try{let n={get passive(){return e=!0,!1}};Yn()&&(window.addEventListener("test",null,n),window.removeEventListener("test",null,n))}catch{}return e})();function aa(e,n){let t=dh(e,n),i=t&&t.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function ke(e,n,t,i){return{x:e.x+t*(n.x-e.x),y:e.y+t*(n.y-e.y)}}function Zr(e,n,t,i){return{x:e.x+t*(n.x-e.x),y:i==="middle"?t<.5?e.y:n.y:i==="after"?t<1?e.y:n.y:t>0?n.y:e.y}}function Jr(e,n,t,i){let s={x:e.cp2x,y:e.cp2y},a={x:n.cp1x,y:n.cp1y},o=ke(e,s,t),r=ke(s,a,t),l=ke(a,n,t),c=ke(o,r,t),d=ke(r,l,t);return ke(c,d,t)}var fh=function(e,n){return{x(t){return e+e+n-t},setWidth(t){n=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,i){return t-i},leftForLtr(t,i){return t-i}}},gh=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,n){return e+n},leftForLtr(e,n){return e}}};function We(e,n,t){return e?fh(n,t):gh()}function oa(e,n){let t,i;(n==="ltr"||n==="rtl")&&(t=e.canvas.style,i=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",n,"important"),e.prevTextDirection=i)}function ra(e,n){n!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",n[0],n[1]))}function tl(e){return e==="angle"?{between:ui,compare:Ad,normalize:xt}:{between:ae,compare:(n,t)=>n-t,normalize:n=>n}}function Cr({start:e,end:n,count:t,loop:i,style:s}){return{start:e%t,end:n%t,loop:i&&(n-e+1)%t===0,style:s}}function _h(e,n,t){let{property:i,start:s,end:a}=t,{between:o,normalize:r}=tl(i),l=n.length,{start:c,end:d,loop:h}=e,m,p;if(h){for(c+=l,d+=l,m=0,p=l;m<p&&o(r(n[c%l][i]),s,a);++m)c--,d--;c%=l,d%=l}return d<c&&(d+=l),{start:c,end:d,loop:h,style:e.style}}function la(e,n,t){if(!t)return[e];let{property:i,start:s,end:a}=t,o=n.length,{compare:r,between:l,normalize:c}=tl(i),{start:d,end:h,loop:m,style:p}=_h(e,n,t),f=[],u=!1,g=null,b,v,C,M=()=>l(s,C,b)&&r(s,C)!==0,w=()=>r(a,b)===0||l(a,C,b),S=()=>u||M(),E=()=>!u||w();for(let D=d,T=d;D<=h;++D)v=n[D%o],!v.skip&&(b=c(v[i]),b!==C&&(u=l(b,s,a),g===null&&S()&&(g=r(b,s)===0?D:T),g!==null&&E()&&(f.push(Cr({start:g,end:D,loop:m,count:o,style:p})),g=null),T=D,C=b));return g!==null&&f.push(Cr({start:g,end:h,loop:m,count:o,style:p})),f}function ca(e,n){let t=[],i=e.segments;for(let s=0;s<i.length;s++){let a=la(i[s],e.points,n);a.length&&t.push(...a)}return t}function bh(e,n,t,i){let s=0,a=n-1;if(t&&!i)for(;s<n&&!e[s].skip;)s++;for(;s<n&&e[s].skip;)s++;for(s%=n,t&&(a+=s);a>s&&e[a%n].skip;)a--;return a%=n,{start:s,end:a}}function vh(e,n,t,i){let s=e.length,a=[],o=n,r=e[n],l;for(l=n+1;l<=t;++l){let c=e[l%s];c.skip||c.stop?r.skip||(i=!1,a.push({start:n%s,end:(l-1)%s,loop:i}),n=o=c.stop?l:null):(o=l,r.skip&&(n=l)),r=c}return o!==null&&a.push({start:n%s,end:o%s,loop:i}),a}function el(e,n){let t=e.points,i=e.options.spanGaps,s=t.length;if(!s)return[];let a=!!e._loop,{start:o,end:r}=bh(t,s,a,i);if(i===!0)return Sr(e,[{start:o,end:r,loop:a}],t,n);let l=r<o?r+s:r,c=!!e._fullLoop&&o===0&&r===s-1;return Sr(e,vh(t,o,l,c),t,n)}function Sr(e,n,t,i){return!i||!i.setContext||!t?n:yh(e,n,t,i)}function yh(e,n,t,i){let s=e._chart.getContext(),a=Mr(e.options),{_datasetIndex:o,options:{spanGaps:r}}=e,l=t.length,c=[],d=a,h=n[0].start,m=h;function p(f,u,g,b){let v=r?-1:1;if(f!==u){for(f+=l;t[f%l].skip;)f-=v;for(;t[u%l].skip;)u+=v;f%l!==u%l&&(c.push({start:f%l,end:u%l,loop:g,style:b}),d=b,h=u%l)}}for(let f of n){h=r?h:f.start;let u=t[h%l],g;for(m=h+1;m<=f.end;m++){let b=t[m%l];g=Mr(i.setContext(ue(s,{type:"segment",p0:u,p1:b,p0DataIndex:(m-1)%l,p1DataIndex:m%l,datasetIndex:o}))),xh(g,d)&&p(h,m-1,f.loop,d),u=b,d=g}h<m-1&&p(h,m-1,f.loop,d)}return c}function Mr(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function xh(e,n){if(!n)return!1;let t=[],i=function(s,a){return qs(a)?(t.includes(a)||t.push(a),t.indexOf(a)):a};return JSON.stringify(e,i)!==JSON.stringify(n,i)}function Ln(e,n,t){return e.options.clip?e[t]:n[t]}function kh(e,n){let{xScale:t,yScale:i}=e;return t&&i?{left:Ln(t,n,"left"),right:Ln(t,n,"right"),top:Ln(i,n,"top"),bottom:Ln(i,n,"bottom")}:n}function da(e,n){let t=n._clip;if(t.disabled)return!1;let i=kh(n,e.chartArea);return{left:t.left===!1?0:i.left-(t.left===!0?0:t.left),right:t.right===!1?e.width:i.right+(t.right===!0?0:t.right),top:t.top===!1?0:i.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?e.height:i.bottom+(t.bottom===!0?0:t.bottom)}}var ka=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(n,t,i,s){let a=t.listeners[s],o=t.duration;a.forEach(r=>r({chart:n,initial:t.initial,numSteps:o,currentStep:Math.min(i-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=$s.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(n=Date.now()){let t=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;let a=i.items,o=a.length-1,r=!1,l;for(;o>=0;--o)l=a[o],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(n),r=!0):(a[o]=a[a.length-1],a.pop());r&&(s.draw(),this._notify(s,i,n,"progress")),a.length||(i.running=!1,this._notify(s,i,n,"complete"),i.initial=!1),t+=a.length}),this._lastDate=n,t===0&&(this._running=!1)}_getAnims(n){let t=this._charts,i=t.get(n);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(n,i)),i}listen(n,t,i){this._getAnims(n).listeners[t].push(i)}add(n,t){!t||!t.length||this._getAnims(n).items.push(...t)}has(n){return this._getAnims(n).items.length>0}start(n){let t=this._charts.get(n);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(n){if(!this._running)return!1;let t=this._charts.get(n);return!(!t||!t.running||!t.items.length)}stop(n){let t=this._charts.get(n);if(!t||!t.items.length)return;let i=t.items,s=i.length-1;for(;s>=0;--s)i[s].cancel();t.items=[],this._notify(n,t,Date.now(),"complete")}remove(n){return this._charts.delete(n)}},fe=new ka,il="transparent",wh={boolean(e,n,t){return t>.5?n:e},color(e,n,t){let i=Xs(e||il),s=i.valid&&Xs(n||il);return s&&s.valid?s.mix(i,t).hexString():n},number(e,n,t){return e+(n-e)*t}},wa=class{constructor(n,t,i,s){let a=t[i];s=_i([n.to,s,a,n.from]);let o=_i([n.from,a,s]);this._active=!0,this._fn=n.fn||wh[n.type||typeof o],this._easing=li[n.easing]||li.linear,this._start=Math.floor(Date.now()+(n.delay||0)),this._duration=this._total=Math.floor(n.duration),this._loop=!!n.loop,this._target=t,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(n,t,i){if(this._active){this._notify(!1);let s=this._target[this._prop],a=i-this._start,o=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(o,n.duration)),this._total+=a,this._loop=!!n.loop,this._to=_i([n.to,t,s,n.from]),this._from=_i([n.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(n){let t=n-this._start,i=this._duration,s=this._prop,a=this._from,o=this._loop,r=this._to,l;if(this._active=a!==r&&(o||t<i),!this._active){this._target[s]=r,this._notify(!0);return}if(t<0){this._target[s]=a;return}l=t/i%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[s]=this._fn(a,r,l)}wait(){let n=this._promises||(this._promises=[]);return new Promise((t,i)=>{n.push({res:t,rej:i})})}_notify(n){let t=n?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][t]()}},as=class{constructor(n,t){this._chart=n,this._properties=new Map,this.configure(t)}configure(n){if(!V(n))return;let t=Object.keys(st.animation),i=this._properties;Object.getOwnPropertyNames(n).forEach(s=>{let a=n[s];if(!V(a))return;let o={};for(let r of t)o[r]=a[r];(it(a.properties)&&a.properties||[s]).forEach(r=>{(r===s||!i.has(r))&&i.set(r,o)})})}_animateOptions(n,t){let i=t.options,s=Sh(n,i);if(!s)return[];let a=this._createAnimations(s,i);return i.$shared&&Ch(n.options.$animations,i).then(()=>{n.options=i},()=>{}),a}_createAnimations(n,t){let i=this._properties,s=[],a=n.$animations||(n.$animations={}),o=Object.keys(t),r=Date.now(),l;for(l=o.length-1;l>=0;--l){let c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){s.push(...this._animateOptions(n,t));continue}let d=t[c],h=a[c],m=i.get(c);if(h)if(m&&h.active()){h.update(m,d,r);continue}else h.cancel();if(!m||!m.duration){n[c]=d;continue}a[c]=h=new wa(m,n,c,d),s.push(h)}return s}update(n,t){if(this._properties.size===0){Object.assign(n,t);return}let i=this._createAnimations(n,t);if(i.length)return fe.add(this._chart,i),!0}};function Ch(e,n){let t=[],i=Object.keys(n);for(let s=0;s<i.length;s++){let a=e[i[s]];a&&a.active()&&t.push(a.wait())}return Promise.all(t)}function Sh(e,n){if(!n)return;let t=e.options;if(!t){e.options=n;return}return t.$shared&&(e.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function nl(e,n){let t=e&&e.options||{},i=t.reverse,s=t.min===void 0?n:0,a=t.max===void 0?n:0;return{start:i?a:s,end:i?s:a}}function Mh(e,n,t){if(t===!1)return!1;let i=nl(e,t),s=nl(n,t);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Dh(e){let n,t,i,s;return V(e)?(n=e.top,t=e.right,i=e.bottom,s=e.left):n=t=i=s=e,{top:n,right:t,bottom:i,left:s,disabled:e===!1}}function ic(e,n){let t=[],i=e._getSortedDatasetMetas(n),s,a;for(s=0,a=i.length;s<a;++s)t.push(i[s].index);return t}function sl(e,n,t,i={}){let s=e.keys,a=i.mode==="single",o,r,l,c;if(n===null)return;let d=!1;for(o=0,r=s.length;o<r;++o){if(l=+s[o],l===t){if(d=!0,i.all)continue;break}c=e.values[l],ct(c)&&(a||n===0||Qt(n)===Qt(c))&&(n+=c)}return!d&&!i.all?0:n}function Ih(e,n){let{iScale:t,vScale:i}=n,s=t.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",o=Object.keys(e),r=new Array(o.length),l,c,d;for(l=0,c=o.length;l<c;++l)d=o[l],r[l]={[s]:d,[a]:e[d]};return r}function ha(e,n){let t=e&&e.options.stacked;return t||t===void 0&&n.stack!==void 0}function Rh(e,n,t){return`${e.id}.${n.id}.${t.stack||t.type}`}function Eh(e){let{min:n,max:t,minDefined:i,maxDefined:s}=e.getUserBounds();return{min:i?n:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function Th(e,n,t){let i=e[n]||(e[n]={});return i[t]||(i[t]={})}function al(e,n,t,i){for(let s of n.getMatchingVisibleMetas(i).reverse()){let a=e[s.index];if(t&&a>0||!t&&a<0)return s.index}return null}function ol(e,n){let{chart:t,_cachedMeta:i}=e,s=t._stacks||(t._stacks={}),{iScale:a,vScale:o,index:r}=i,l=a.axis,c=o.axis,d=Rh(a,o,i),h=n.length,m;for(let p=0;p<h;++p){let f=n[p],{[l]:u,[c]:g}=f,b=f._stacks||(f._stacks={});m=b[c]=Th(s,d,u),m[r]=g,m._top=al(m,o,!0,i.type),m._bottom=al(m,o,!1,i.type);let v=m._visualValues||(m._visualValues={});v[r]=g}}function ma(e,n){let t=e.scales;return Object.keys(t).filter(i=>t[i].axis===n).shift()}function Oh(e,n){return ue(e,{active:!1,dataset:void 0,datasetIndex:n,index:n,mode:"default",type:"dataset"})}function Ah(e,n,t){return ue(e,{active:!1,dataIndex:n,parsed:void 0,raw:void 0,element:t,index:n,mode:"default",type:"data"})}function Fi(e,n){let t=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){n=n||e._parsed;for(let s of n){let a=s._stacks;if(!a||a[i]===void 0||a[i][t]===void 0)return;delete a[i][t],a[i]._visualValues!==void 0&&a[i]._visualValues[t]!==void 0&&delete a[i]._visualValues[t]}}}var pa=e=>e==="reset"||e==="none",rl=(e,n)=>n?e:Object.assign({},e),Ph=(e,n,t)=>e&&!n.hidden&&n._stacked&&{keys:ic(t,!0),values:null},Ee=(()=>{class e{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ha(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Fi(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,i=this._cachedMeta,s=this.getDataset(),a=(m,p,f,u)=>m==="x"?p:m==="r"?u:f,o=i.xAxisID=O(s.xAxisID,ma(t,"x")),r=i.yAxisID=O(s.yAxisID,ma(t,"y")),l=i.rAxisID=O(s.rAxisID,ma(t,"r")),c=i.indexAxis,d=i.iAxisID=a(c,o,r,l),h=i.vAxisID=a(c,r,o,l);i.xScale=this.getScaleForId(o),i.yScale=this.getScaleForId(r),i.rScale=this.getScaleForId(l),i.iScale=this.getScaleForId(d),i.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&Ws(this._data,this),t._stacked&&Fi(t)}_dataCheck(){let t=this.getDataset(),i=t.data||(t.data=[]),s=this._data;if(V(i)){let a=this._cachedMeta;this._data=Ih(i,a)}else if(s!==i){if(s){Ws(s,this);let a=this._cachedMeta;Fi(a),a._parsed=[]}i&&Object.isExtensible(i)&&zr(i,this),this._syncList=[],this._data=i}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let i=this._cachedMeta,s=this.getDataset(),a=!1;this._dataCheck();let o=i._stacked;i._stacked=ha(i.vScale,i),i.stack!==s.stack&&(a=!0,Fi(i),i.stack=s.stack),this._resyncElements(t),(a||o!==i._stacked)&&(ol(this,i._parsed),i._stacked=ha(i.vScale,i))}configure(){let t=this.chart.config,i=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){let{_cachedMeta:s,_data:a}=this,{iScale:o,_stacked:r}=s,l=o.axis,c=t===0&&i===a.length?!0:s._sorted,d=t>0&&s._parsed[t-1],h,m,p;if(this._parsing===!1)s._parsed=a,s._sorted=!0,p=a;else{it(a[t])?p=this.parseArrayData(s,a,t,i):V(a[t])?p=this.parseObjectData(s,a,t,i):p=this.parsePrimitiveData(s,a,t,i);let f=()=>m[l]===null||d&&m[l]<d[l];for(h=0;h<i;++h)s._parsed[h+t]=m=p[h],c&&(f()&&(c=!1),d=m);s._sorted=c}r&&ol(this,p)}parsePrimitiveData(t,i,s,a){let{iScale:o,vScale:r}=t,l=o.axis,c=r.axis,d=o.getLabels(),h=o===r,m=new Array(a),p,f,u;for(p=0,f=a;p<f;++p)u=p+s,m[p]={[l]:h||o.parse(d[u],u),[c]:r.parse(i[u],u)};return m}parseArrayData(t,i,s,a){let{xScale:o,yScale:r}=t,l=new Array(a),c,d,h,m;for(c=0,d=a;c<d;++c)h=c+s,m=i[h],l[c]={x:o.parse(m[0],h),y:r.parse(m[1],h)};return l}parseObjectData(t,i,s,a){let{xScale:o,yScale:r}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=new Array(a),h,m,p,f;for(h=0,m=a;h<m;++h)p=h+s,f=i[p],d[h]={x:o.parse(pe(f,l),p),y:r.parse(pe(f,c),p)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,s){let a=this.chart,o=this._cachedMeta,r=i[t.axis],l={keys:ic(a,!0),values:i._stacks[t.axis]._visualValues};return sl(l,r,o.index,{mode:s})}updateRangeFromParsed(t,i,s,a){let o=s[i.axis],r=o===null?NaN:o,l=a&&s._stacks[i.axis];a&&l&&(a.values=l,r=sl(a,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,i){let s=this._cachedMeta,a=s._parsed,o=s._sorted&&t===s.iScale,r=a.length,l=this._getOtherScale(t),c=Ph(i,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:m}=Eh(l),p,f;function u(){f=a[p];let g=f[l.axis];return!ct(f[t.axis])||h>g||m<g}for(p=0;p<r&&!(!u()&&(this.updateRangeFromParsed(d,t,f,c),o));++p);if(o){for(p=r-1;p>=0;--p)if(!u()){this.updateRangeFromParsed(d,t,f,c);break}}return d}getAllParsedValues(t){let i=this._cachedMeta._parsed,s=[],a,o,r;for(a=0,o=i.length;a<o;++a)r=i[a][t.axis],ct(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let i=this._cachedMeta,s=i.iScale,a=i.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:a?""+a.getLabelForValue(o[a.axis]):""}}_update(t){let i=this._cachedMeta;this.update(t||"default"),i._clip=Dh(O(this.options.clip,Mh(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,i=this.chart,s=this._cachedMeta,a=s.data||[],o=i.chartArea,r=[],l=this._drawStart||0,c=this._drawCount||a.length-l,d=this.options.drawActiveElementsOnTop,h;for(s.dataset&&s.dataset.draw(t,o,l,c),h=l;h<l+c;++h){let m=a[h];m.hidden||(m.active&&d?r.push(m):m.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,i){let s=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,i,s){let a=this.getDataset(),o;if(t>=0&&t<this._cachedMeta.data.length){let r=this._cachedMeta.data[t];o=r.$context||(r.$context=Ah(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=a.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=Oh(this.chart.getContext(),this.index)),o.dataset=a,o.index=o.datasetIndex=this.index;return o.active=!!i,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",s){let a=i==="active",o=this._cachedDataOpts,r=t+"-"+i,l=o[r],c=this.enableOptionSharing&&mi(s);if(l)return rl(l,c);let d=this.chart.config,h=d.datasetElementScopeKeys(this._type,t),m=a?[`${t}Hover`,"hover",t,""]:[t,""],p=d.getOptionScopes(this.getDataset(),h),f=Object.keys(st.elements[t]),u=()=>this.getContext(s,a,i),g=d.resolveNamedOptions(p,f,u,m);return g.$shared&&(g.$shared=c,o[r]=Object.freeze(rl(g,c))),g}_resolveAnimations(t,i,s){let a=this.chart,o=this._cachedDataOpts,r=`animation-${i}`,l=o[r];if(l)return l;let c;if(a.options.animation!==!1){let h=this.chart.config,m=h.datasetAnimationScopeKeys(this._type,i),p=h.getOptionScopes(this.getDataset(),m);c=h.createResolver(p,this.getContext(t,s,i))}let d=new as(a,c&&c.animations);return c&&c._cacheable&&(o[r]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||pa(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){let s=this.resolveDataElementOptions(t,i),a=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(i,o)||o!==a;return this.updateSharedOptions(o,i,s),{sharedOptions:o,includeOptions:r}}updateElement(t,i,s,a){pa(a)?Object.assign(t,s):this._resolveAnimations(i,a).update(t,s)}updateSharedOptions(t,i,s){t&&!pa(i)&&this._resolveAnimations(void 0,i).update(t,s)}_setStyle(t,i,s,a){t.active=a;let o=this.getStyle(i,a);this._resolveAnimations(i,s,a).update(t,{options:!a&&this.getSharedOptions(o)||o})}removeHoverStyle(t,i,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,i,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let i=this._data,s=this._cachedMeta.data;for(let[l,c,d]of this._syncList)this[l](c,d);this._syncList=[];let a=s.length,o=i.length,r=Math.min(o,a);r&&this.parse(0,r),o>a?this._insertElements(a,o-a,t):o<a&&this._removeElements(o,a-o)}_insertElements(t,i,s=!0){let a=this._cachedMeta,o=a.data,r=t+i,l,c=d=>{for(d.length+=i,l=d.length-1;l>=r;l--)d[l]=d[l-i]};for(c(o),l=t;l<r;++l)o[l]=new this.dataElementType;this._parsing&&c(a._parsed),this.parse(t,i),s&&this.updateElements(o,t,i,"reset")}updateElements(t,i,s,a){}_removeElements(t,i){let s=this._cachedMeta;if(this._parsing){let a=s._parsed.splice(t,i);s._stacked&&Fi(s,a)}s.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[i,s,a]=t;this[i](s,a)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);let s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}return e})();function Lh(e,n){if(!e._cache.$bar){let t=e.getMatchingVisibleMetas(n),i=[];for(let s=0,a=t.length;s<a;s++)i=i.concat(t[s].controller.getAllParsedValues(e));e._cache.$bar=Gs(i.sort((s,a)=>s-a))}return e._cache.$bar}function Fh(e){let n=e.iScale,t=Lh(n,e.type),i=n._length,s,a,o,r,l=()=>{o===32767||o===-32768||(mi(r)&&(i=Math.min(i,Math.abs(o-r)||i)),r=o)};for(s=0,a=t.length;s<a;++s)o=n.getPixelForValue(t[s]),l();for(r=void 0,s=0,a=n.ticks.length;s<a;++s)o=n.getPixelForTick(s),l();return i}function zh(e,n,t,i){let s=t.barThickness,a,o;return H(s)?(a=n.min*t.categoryPercentage,o=t.barPercentage):(a=s*i,o=1),{chunk:a/i,ratio:o,start:n.pixels[e]-a/2}}function Bh(e,n,t,i){let s=n.pixels,a=s[e],o=e>0?s[e-1]:null,r=e<s.length-1?s[e+1]:null,l=t.categoryPercentage;o===null&&(o=a-(r===null?n.end-n.start:r-a)),r===null&&(r=a+a-o);let c=a-(a-Math.min(o,r))/2*l;return{chunk:Math.abs(r-o)/2*l/i,ratio:t.barPercentage,start:c}}function Nh(e,n,t,i){let s=t.parse(e[0],i),a=t.parse(e[1],i),o=Math.min(s,a),r=Math.max(s,a),l=o,c=r;Math.abs(o)>Math.abs(r)&&(l=r,c=o),n[t.axis]=c,n._custom={barStart:l,barEnd:c,start:s,end:a,min:o,max:r}}function nc(e,n,t,i){return it(e)?Nh(e,n,t,i):n[t.axis]=t.parse(e,i),n}function ll(e,n,t,i){let s=e.iScale,a=e.vScale,o=s.getLabels(),r=s===a,l=[],c,d,h,m;for(c=t,d=t+i;c<d;++c)m=n[c],h={},h[s.axis]=r||s.parse(o[c],c),l.push(nc(m,h,a,c));return l}function ua(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Hh(e,n,t){return e!==0?Qt(e):(n.isHorizontal()?1:-1)*(n.min>=t?1:-1)}function Vh(e){let n,t,i,s,a;return e.horizontal?(n=e.base>e.x,t="left",i="right"):(n=e.base<e.y,t="bottom",i="top"),n?(s="end",a="start"):(s="start",a="end"),{start:t,end:i,reverse:n,top:s,bottom:a}}function jh(e,n,t,i){let s=n.borderSkipped,a={};if(!s){e.borderSkipped=a;return}if(s===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:r,reverse:l,top:c,bottom:d}=Vh(e);s==="middle"&&t&&(e.enableBorderRadius=!0,(t._top||0)===i?s=c:(t._bottom||0)===i?s=d:(a[cl(d,o,r,l)]=!0,s=c)),a[cl(s,o,r,l)]=!0,e.borderSkipped=a}function cl(e,n,t,i){return i?(e=Wh(e,n,t),e=dl(e,t,n)):e=dl(e,n,t),e}function Wh(e,n,t){return e===n?t:e===t?n:e}function dl(e,n,t){return e==="start"?n:e==="end"?t:e}function Gh(e,{inflateAmount:n},t){e.inflateAmount=n==="auto"?t===1?.33:0:n}var $h=(()=>{class e extends Ee{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,i,s,a){return ll(t,i,s,a)}parseArrayData(t,i,s,a){return ll(t,i,s,a)}parseObjectData(t,i,s,a){let{iScale:o,vScale:r}=t,{xAxisKey:l="x",yAxisKey:c="y"}=this._parsing,d=o.axis==="x"?l:c,h=r.axis==="x"?l:c,m=[],p,f,u,g;for(p=s,f=s+a;p<f;++p)g=i[p],u={},u[o.axis]=o.parse(pe(g,d),p),m.push(nc(pe(g,h),u,r,p));return m}updateRangeFromParsed(t,i,s,a){super.updateRangeFromParsed(t,i,s,a);let o=s._custom;o&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let i=this._cachedMeta,{iScale:s,vScale:a}=i,o=this.getParsed(t),r=o._custom,l=ua(r)?"["+r.start+", "+r.end+"]":""+a.getLabelForValue(o[a.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:l}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,s,a){let o=a==="reset",{index:r,_cachedMeta:{vScale:l}}=this,c=l.getBasePixel(),d=l.isHorizontal(),h=this._getRuler(),{sharedOptions:m,includeOptions:p}=this._getSharedOptions(i,a);for(let f=i;f<i+s;f++){let u=this.getParsed(f),g=o||H(u[l.axis])?{base:c,head:c}:this._calculateBarValuePixels(f),b=this._calculateBarIndexPixels(f,h),v=(u._stacks||{})[l.axis],C={horizontal:d,base:g.base,enableBorderRadius:!v||ua(u._custom)||r===v._top||r===v._bottom,x:d?g.head:b.center,y:d?b.center:g.head,height:d?b.size:Math.abs(g.size),width:d?Math.abs(g.size):b.size};p&&(C.options=m||this.resolveDataElementOptions(f,t[f].active?"active":a));let M=C.options||t[f].options;jh(C,M,v,r),Gh(C,M,h.ratio),this.updateElement(t[f],f,C,a)}}_getStacks(t,i){let{iScale:s}=this._cachedMeta,a=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=s.options.stacked,r=[],l=this._cachedMeta.controller.getParsed(i),c=l&&l[s.axis],d=h=>{let m=h._parsed.find(f=>f[s.axis]===c),p=m&&m[h.vScale.axis];if(H(p)||isNaN(p))return!0};for(let h of a)if(!(i!==void 0&&d(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===i).shift()}_getAxis(){let t={},i=this.getFirstScaleIdForIndexAxis();for(let s of this.chart.data.datasets)t[O(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,s){let a=this._getStacks(t,s),o=i!==void 0?a.indexOf(i):-1;return o===-1?a.length-1:o}_getRuler(){let t=this.options,i=this._cachedMeta,s=i.iScale,a=[],o,r;for(o=0,r=i.data.length;o<r;++o)a.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));let l=t.barThickness;return{min:l||Fh(i),pixels:a,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:l?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:i,_stacked:s,index:a},options:{base:o,minBarLength:r}}=this,l=o||0,c=this.getParsed(t),d=c._custom,h=ua(d),m=c[i.axis],p=0,f=s?this.applyStack(i,c,s):m,u,g;f!==m&&(p=f-m,f=m),h&&(m=d.barStart,f=d.barEnd-d.barStart,m!==0&&Qt(m)!==Qt(d.barEnd)&&(p=0),p+=m);let b=!H(o)&&!h?o:p,v=i.getPixelForValue(b);if(this.chart.getDataVisibility(t)?u=i.getPixelForValue(p+f):u=v,g=u-v,Math.abs(g)<r){g=Hh(g,i,l)*r,m===l&&(v-=g/2);let C=i.getPixelForDecimal(0),M=i.getPixelForDecimal(1),w=Math.min(C,M),S=Math.max(C,M);v=Math.max(Math.min(v,S),w),u=v+g,s&&!h&&(c._stacks[i.axis]._visualValues[a]=i.getValueForPixel(u)-i.getValueForPixel(v))}if(v===i.getPixelForValue(l)){let C=Qt(g)*i.getLineWidthForValue(l)/2;v+=C,g-=C}return{size:g,base:v,head:u,center:u+g/2}}_calculateBarIndexPixels(t,i){let s=i.scale,a=this.options,o=a.skipNull,r=O(a.maxBarThickness,1/0),l,c,d=this._getAxisCount();if(i.grouped){let h=o?this._getStackCount(t):i.stackCount,m=a.barThickness==="flex"?Bh(t,i,a,h*d):zh(t,i,a,h*d),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(O(p,this.getFirstScaleIdForIndexAxis())),u=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;l=m.start+m.chunk*u+m.chunk/2,c=Math.min(r,m.chunk*m.ratio)}else l=s.getPixelForValue(this.getParsed(t)[s.axis],t),c=Math.min(r,i.min*i.ratio);return{base:l-c/2,head:l+c/2,center:l,size:c}}draw(){let t=this._cachedMeta,i=t.vScale,s=t.data,a=s.length,o=0;for(;o<a;++o)this.getParsed(o)[i.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}return e})(),Uh=(()=>{class e extends Ee{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,i,s,a){let o=super.parsePrimitiveData(t,i,s,a);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,i,s,a){let o=super.parseArrayData(t,i,s,a);for(let r=0;r<o.length;r++){let l=i[s+r];o[r]._custom=O(l[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,i,s,a){let o=super.parseObjectData(t,i,s,a);for(let r=0;r<o.length;r++){let l=i[s+r];o[r]._custom=O(l&&l.r&&+l.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){let t=this._cachedMeta.data,i=0;for(let s=t.length-1;s>=0;--s)i=Math.max(i,t[s].size(this.resolveDataElementOptions(s))/2);return i>0&&i}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:a,yScale:o}=i,r=this.getParsed(t),l=a.getLabelForValue(r.x),c=o.getLabelForValue(r.y),d=r._custom;return{label:s[t]||"",value:"("+l+", "+c+(d?", "+d:"")+")"}}update(t){let i=this._cachedMeta.data;this.updateElements(i,0,i.length,t)}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:l}=this._cachedMeta,{sharedOptions:c,includeOptions:d}=this._getSharedOptions(i,a),h=r.axis,m=l.axis;for(let p=i;p<i+s;p++){let f=t[p],u=!o&&this.getParsed(p),g={},b=g[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(u[h]),v=g[m]=o?l.getBasePixel():l.getPixelForValue(u[m]);g.skip=isNaN(b)||isNaN(v),d&&(g.options=c||this.resolveDataElementOptions(p,f.active?"active":a),o&&(g.options.radius=0)),this.updateElement(f,p,g,a)}}resolveDataElementOptions(t,i){let s=this.getParsed(t),a=super.resolveDataElementOptions(t,i);a.$shared&&(a=Object.assign({},a,{$shared:!1}));let o=a.radius;return i!=="active"&&(a.radius=0),a.radius+=O(s&&s._custom,o),a}}return e})();function Qh(e,n,t){let i=1,s=1,a=0,o=0;if(n<nt){let r=e,l=r+n,c=Math.cos(r),d=Math.sin(r),h=Math.cos(l),m=Math.sin(l),p=(C,M,w)=>ui(C,r,l,!0)?1:Math.max(M,M*t,w,w*t),f=(C,M,w)=>ui(C,r,l,!0)?-1:Math.min(M,M*t,w,w*t),u=p(0,c,h),g=p(mt,d,m),b=f(Q,c,h),v=f(Q+mt,d,m);i=(u-b)/2,s=(g-v)/2,a=-(u+b)/2,o=-(g+v)/2}return{ratioX:i,ratioY:s,offsetX:a,offsetY:o}}var Wa=(()=>{class e extends Ee{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let i=t.data,{labels:{pointStyle:s,textAlign:a,color:o,useBorderRadius:r,borderRadius:l}}=t.legend.options;return i.labels.length&&i.datasets.length?i.labels.map((c,d)=>{let m=t.getDatasetMeta(0).controller.getStyle(d);return{text:c,fillStyle:m.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(d),lineDash:m.borderDash,lineDashOffset:m.borderDashOffset,lineJoin:m.borderJoinStyle,lineWidth:m.borderWidth,strokeStyle:m.borderColor,textAlign:a,pointStyle:s,borderRadius:r&&(l||m.borderRadius),index:d}}):[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}}};constructor(t,i){super(t,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,i){let s=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=s;else{let o=c=>+s[c];if(V(s[t])){let{key:c="value"}=this._parsing;o=d=>+pe(s[d],c)}let r,l;for(r=t,l=t+i;r<l;++r)a._parsed[r]=o(r)}}_getRotation(){return $t(this.options.rotation-90)}_getCircumference(){return $t(this.options.circumference)}_getRotationExtents(){let t=nt,i=-nt;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){let a=this.chart.getDatasetMeta(s).controller,o=a._getRotation(),r=a._getCircumference();t=Math.min(t,o),i=Math.max(i,o+r)}return{rotation:t,circumference:i-t}}update(t){let i=this.chart,{chartArea:s}=i,a=this._cachedMeta,o=a.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,l=Math.max((Math.min(s.width,s.height)-r)/2,0),c=Math.min(Ir(this.options.cutout,l),1),d=this._getRingWeight(this.index),{circumference:h,rotation:m}=this._getRotationExtents(),{ratioX:p,ratioY:f,offsetX:u,offsetY:g}=Qh(m,h,c),b=(s.width-r)/p,v=(s.height-r)/f,C=Math.max(Math.min(b,v)/2,0),M=zs(this.options.radius,C),w=Math.max(M*c,0),S=(M-w)/this._getVisibleDatasetWeightTotal();this.offsetX=u*M,this.offsetY=g*M,a.total=this.calculateTotal(),this.outerRadius=M-S*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-S*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,i){let s=this.options,a=this._cachedMeta,o=this._getCircumference();return i&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||a._parsed[t]===null||a.data[t].hidden?0:this.calculateCircumference(a._parsed[t]*o/nt)}updateElements(t,i,s,a){let o=a==="reset",r=this.chart,l=r.chartArea,d=r.options.animation,h=(l.left+l.right)/2,m=(l.top+l.bottom)/2,p=o&&d.animateScale,f=p?0:this.innerRadius,u=p?0:this.outerRadius,{sharedOptions:g,includeOptions:b}=this._getSharedOptions(i,a),v=this._getRotation(),C;for(C=0;C<i;++C)v+=this._circumference(C,o);for(C=i;C<i+s;++C){let M=this._circumference(C,o),w=t[C],S={x:h+this.offsetX,y:m+this.offsetY,startAngle:v,endAngle:v+M,circumference:M,outerRadius:u,innerRadius:f};b&&(S.options=g||this.resolveDataElementOptions(C,w.active?"active":a)),v+=M,this.updateElement(w,C,S,a)}}calculateTotal(){let t=this._cachedMeta,i=t.data,s=0,a;for(a=0;a<i.length;a++){let o=t._parsed[a];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(a)&&!i[a].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){let i=this._cachedMeta.total;return i>0&&!isNaN(t)?nt*(Math.abs(t)/i):0}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart,a=s.data.labels||[],o=fi(i._parsed[t],s.options.locale);return{label:a[t]||"",value:o}}getMaxBorderWidth(t){let i=0,s=this.chart,a,o,r,l,c;if(!t){for(a=0,o=s.data.datasets.length;a<o;++a)if(s.isDatasetVisible(a)){r=s.getDatasetMeta(a),t=r.data,l=r.controller;break}}if(!t)return 0;for(a=0,o=t.length;a<o;++a)c=l.resolveDataElementOptions(a),c.borderAlign!=="inner"&&(i=Math.max(i,c.borderWidth||0,c.hoverBorderWidth||0));return i}getMaxOffset(t){let i=0;for(let s=0,a=t.length;s<a;++s){let o=this.resolveDataElementOptions(s);i=Math.max(i,o.offset||0,o.hoverOffset||0)}return i}_getRingWeightOffset(t){let i=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(i+=this._getRingWeight(s));return i}_getRingWeight(t){return Math.max(O(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}return e})(),Yh=(()=>{class e extends Ee{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let i=this._cachedMeta,{dataset:s,data:a=[],_dataset:o}=i,r=this.chart._animationsDisabled,{start:l,count:c}=Qs(i,a,r);this._drawStart=l,this._drawCount=c,Ys(i)&&(l=0,c=a.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=a;let d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:d},t),this.updateElements(a,l,c,t)}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,{sharedOptions:h,includeOptions:m}=this._getSharedOptions(i,a),p=r.axis,f=l.axis,{spanGaps:u,segment:g}=this.options,b=je(u)?u:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||o||a==="none",C=i+s,M=t.length,w=i>0&&this.getParsed(i-1);for(let S=0;S<M;++S){let E=t[S],D=v?E:{};if(S<i||S>=C){D.skip=!0;continue}let T=this.getParsed(S),L=H(T[f]),A=D[p]=r.getPixelForValue(T[p],S),j=D[f]=o||L?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,T,c):T[f],S);D.skip=isNaN(A)||isNaN(j)||L,D.stop=S>0&&Math.abs(T[p]-w[p])>b,g&&(D.parsed=T,D.raw=d.data[S]),m&&(D.options=h||this.resolveDataElementOptions(S,E.active?"active":a)),v||this.updateElement(E,S,D,a),w=T}}getMaxOverflow(){let t=this._cachedMeta,i=t.dataset,s=i.options&&i.options.borderWidth||0,a=t.data||[];if(!a.length)return s;let o=a[0].size(this.resolveDataElementOptions(0)),r=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(s,o,r)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}return e})(),sc=(()=>{class e extends Ee{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let i=t.data;if(i.labels.length&&i.datasets.length){let{labels:{pointStyle:s,color:a}}=t.legend.options;return i.labels.map((o,r)=>{let c=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:c.backgroundColor,strokeStyle:c.borderColor,fontColor:a,lineWidth:c.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,i){super(t,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart,a=s.data.labels||[],o=fi(i._parsed[t].r,s.options.locale);return{label:a[t]||"",value:o}}parseObjectData(t,i,s,a){return na.bind(this)(t,i,s,a)}update(t){let i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,t)}getMinMax(){let t=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,a)=>{let o=this.getParsed(a).r;!isNaN(o)&&this.chart.getDataVisibility(a)&&(o<i.min&&(i.min=o),o>i.max&&(i.max=o))}),i}_updateRadius(){let t=this.chart,i=t.chartArea,s=t.options,a=Math.min(i.right-i.left,i.bottom-i.top),o=Math.max(a/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),l=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-l*this.index,this.innerRadius=this.outerRadius-l}updateElements(t,i,s,a){let o=a==="reset",r=this.chart,c=r.options.animation,d=this._cachedMeta.rScale,h=d.xCenter,m=d.yCenter,p=d.getIndexAngle(0)-.5*Q,f=p,u,g=360/this.countVisibleElements();for(u=0;u<i;++u)f+=this._computeAngle(u,a,g);for(u=i;u<i+s;u++){let b=t[u],v=f,C=f+this._computeAngle(u,a,g),M=r.getDataVisibility(u)?d.getDistanceFromCenterForValue(this.getParsed(u).r):0;f=C,o&&(c.animateScale&&(M=0),c.animateRotate&&(v=C=p));let w={x:h,y:m,innerRadius:0,outerRadius:M,startAngle:v,endAngle:C,options:this.resolveDataElementOptions(u,b.active?"active":a)};this.updateElement(b,u,w,a)}}countVisibleElements(){let t=this._cachedMeta,i=0;return t.data.forEach((s,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&i++}),i}_computeAngle(t,i,s){return this.chart.getDataVisibility(t)?$t(this.resolveDataElementOptions(t,i).angle||s):0}}return e})(),qh=(()=>{class e extends Wa{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}return e})(),Xh=(()=>{class e extends Ee{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let i=this._cachedMeta.vScale,s=this.getParsed(t);return{label:i.getLabels()[t],value:""+i.getLabelForValue(s[i.axis])}}parseObjectData(t,i,s,a){return na.bind(this)(t,i,s,a)}update(t){let i=this._cachedMeta,s=i.dataset,a=i.data||[],o=i.iScale.getLabels();if(s.points=a,t!=="resize"){let r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);let l={_loop:!0,_fullLoop:o.length===a.length,options:r};this.updateElement(s,void 0,l,t)}this.updateElements(a,0,a.length,t)}updateElements(t,i,s,a){let o=this._cachedMeta.rScale,r=a==="reset";for(let l=i;l<i+s;l++){let c=t[l],d=this.resolveDataElementOptions(l,c.active?"active":a),h=o.getPointPositionForValue(l,this.getParsed(l).r),m=r?o.xCenter:h.x,p=r?o.yCenter:h.y,f={x:m,y:p,angle:h.angle,skip:isNaN(m)||isNaN(p),options:d};this.updateElement(c,l,f,a)}}}return e})(),Kh=(()=>{class e extends Ee{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:a,yScale:o}=i,r=this.getParsed(t),l=a.getLabelForValue(r.x),c=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+l+", "+c+")"}}update(t){let i=this._cachedMeta,{data:s=[]}=i,a=this.chart._animationsDisabled,{start:o,count:r}=Qs(i,s,a);if(this._drawStart=o,this._drawCount=r,Ys(i)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:l,_dataset:c}=i;l._chart=this.chart,l._datasetIndex=this.index,l._decimated=!!c._decimated,l.points=s;let d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(l,void 0,{animated:!a,options:d},t)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:l,_stacked:c,_dataset:d}=this._cachedMeta,h=this.resolveDataElementOptions(i,a),m=this.getSharedOptions(h),p=this.includeOptions(a,m),f=r.axis,u=l.axis,{spanGaps:g,segment:b}=this.options,v=je(g)?g:Number.POSITIVE_INFINITY,C=this.chart._animationsDisabled||o||a==="none",M=i>0&&this.getParsed(i-1);for(let w=i;w<i+s;++w){let S=t[w],E=this.getParsed(w),D=C?S:{},T=H(E[u]),L=D[f]=r.getPixelForValue(E[f],w),A=D[u]=o||T?l.getBasePixel():l.getPixelForValue(c?this.applyStack(l,E,c):E[u],w);D.skip=isNaN(L)||isNaN(A)||T,D.stop=w>0&&Math.abs(E[f]-M[f])>v,b&&(D.parsed=E,D.raw=d.data[w]),p&&(D.options=m||this.resolveDataElementOptions(w,S.active?"active":a)),C||this.updateElement(S,w,D,a),M=E}this.updateSharedOptions(m,a,h)}getMaxOverflow(){let t=this._cachedMeta,i=t.data||[];if(!this.options.showLine){let l=0;for(let c=i.length-1;c>=0;--c)l=Math.max(l,i[c].size(this.resolveDataElementOptions(c))/2);return l>0&&l}let s=t.dataset,a=s.options&&s.options.borderWidth||0;if(!i.length)return a;let o=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(a,o,r)/2}}return e})(),Zh=Object.freeze({__proto__:null,BarController:$h,BubbleController:Uh,DoughnutController:Wa,LineController:Yh,PieController:qh,PolarAreaController:sc,RadarController:Xh,ScatterController:Kh});function Ge(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Ca=class e{static override(n){Object.assign(e.prototype,n)}options;constructor(n){this.options=n||{}}init(){}formats(){return Ge()}parse(){return Ge()}format(){return Ge()}add(){return Ge()}diff(){return Ge()}startOf(){return Ge()}endOf(){return Ge()}},Jh={_date:Ca};function tm(e,n,t,i){let{controller:s,data:a,_sorted:o}=e,r=s._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(r&&n===r.axis&&n!=="r"&&o&&a.length){let c=r._reversePixels?Pr:ie;if(i){if(s._sharedOptions){let d=a[0],h=typeof d.getRange=="function"&&d.getRange(n);if(h){let m=c(a,n,t-h),p=c(a,n,t+h);return{lo:m.lo,hi:p.hi}}}}else{let d=c(a,n,t);if(l){let{vScale:h}=s._cachedMeta,{_parsed:m}=e,p=m.slice(0,d.lo+1).reverse().findIndex(u=>!H(u[h.axis]));d.lo-=Math.max(0,p);let f=m.slice(d.hi).findIndex(u=>!H(u[h.axis]));d.hi+=Math.max(0,f)}return d}}return{lo:0,hi:a.length-1}}function Ui(e,n,t,i,s){let a=e.getSortedVisibleDatasetMetas(),o=t[n];for(let r=0,l=a.length;r<l;++r){let{index:c,data:d}=a[r],{lo:h,hi:m}=tm(a[r],n,o,s);for(let p=h;p<=m;++p){let f=d[p];f.skip||i(f,c,p)}}}function em(e){let n=e.indexOf("x")!==-1,t=e.indexOf("y")!==-1;return function(i,s){let a=n?Math.abs(i.x-s.x):0,o=t?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function fa(e,n,t,i,s){let a=[];return!s&&!e.isPointInArea(n)||Ui(e,t,n,function(r,l,c){!s&&!ne(r,e.chartArea,0)||r.inRange(n.x,n.y,i)&&a.push({element:r,datasetIndex:l,index:c})},!0),a}function im(e,n,t,i){let s=[];function a(o,r,l){let{startAngle:c,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=js(o,{x:n.x,y:n.y});ui(h,c,d)&&s.push({element:o,datasetIndex:r,index:l})}return Ui(e,t,n,a),s}function nm(e,n,t,i,s,a){let o=[],r=em(t),l=Number.POSITIVE_INFINITY;function c(d,h,m){let p=d.inRange(n.x,n.y,s);if(i&&!p)return;let f=d.getCenterPoint(s);if(!(!!a||e.isPointInArea(f))&&!p)return;let g=r(n,f);g<l?(o=[{element:d,datasetIndex:h,index:m}],l=g):g===l&&o.push({element:d,datasetIndex:h,index:m})}return Ui(e,t,n,c),o}function ga(e,n,t,i,s,a){return!a&&!e.isPointInArea(n)?[]:t==="r"&&!i?im(e,n,t,s):nm(e,n,t,i,s,a)}function hl(e,n,t,i,s){let a=[],o=t==="x"?"inXRange":"inYRange",r=!1;return Ui(e,t,n,(l,c,d)=>{l[o]&&l[o](n[t],s)&&(a.push({element:l,datasetIndex:c,index:d}),r=r||l.inRange(n.x,n.y,s))}),i&&!r?[]:a}var sm={evaluateInteractionItems:Ui,modes:{index(e,n,t,i){let s=Ie(n,e),a=t.axis||"x",o=t.includeInvisible||!1,r=t.intersect?fa(e,s,a,i,o):ga(e,s,a,!1,i,o),l=[];return r.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{let d=r[0].index,h=c.data[d];h&&!h.skip&&l.push({element:h,datasetIndex:c.index,index:d})}),l):[]},dataset(e,n,t,i){let s=Ie(n,e),a=t.axis||"xy",o=t.includeInvisible||!1,r=t.intersect?fa(e,s,a,i,o):ga(e,s,a,!1,i,o);if(r.length>0){let l=r[0].datasetIndex,c=e.getDatasetMeta(l).data;r=[];for(let d=0;d<c.length;++d)r.push({element:c[d],datasetIndex:l,index:d})}return r},point(e,n,t,i){let s=Ie(n,e),a=t.axis||"xy",o=t.includeInvisible||!1;return fa(e,s,a,i,o)},nearest(e,n,t,i){let s=Ie(n,e),a=t.axis||"xy",o=t.includeInvisible||!1;return ga(e,s,a,t.intersect,i,o)},x(e,n,t,i){let s=Ie(n,e);return hl(e,s,"x",t.intersect,i)},y(e,n,t,i){let s=Ie(n,e);return hl(e,s,"y",t.intersect,i)}}},ac=["left","top","right","bottom"];function zi(e,n){return e.filter(t=>t.pos===n)}function ml(e,n){return e.filter(t=>ac.indexOf(t.pos)===-1&&t.box.axis===n)}function Bi(e,n){return e.sort((t,i)=>{let s=n?i:t,a=n?t:i;return s.weight===a.weight?s.index-a.index:s.weight-a.weight})}function am(e){let n=[],t,i,s,a,o,r;for(t=0,i=(e||[]).length;t<i;++t)s=e[t],{position:a,options:{stack:o,stackWeight:r=1}}=s,n.push({index:t,box:s,pos:a,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&a+o,stackWeight:r});return n}function om(e){let n={};for(let t of e){let{stack:i,pos:s,stackWeight:a}=t;if(!i||!ac.includes(s))continue;let o=n[i]||(n[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=a}return n}function rm(e,n){let t=om(e),{vBoxMaxWidth:i,hBoxMaxHeight:s}=n,a,o,r;for(a=0,o=e.length;a<o;++a){r=e[a];let{fullSize:l}=r.box,c=t[r.stack],d=c&&r.stackWeight/c.weight;r.horizontal?(r.width=d?d*i:l&&n.availableWidth,r.height=s):(r.width=i,r.height=d?d*s:l&&n.availableHeight)}return t}function lm(e){let n=am(e),t=Bi(n.filter(c=>c.box.fullSize),!0),i=Bi(zi(n,"left"),!0),s=Bi(zi(n,"right")),a=Bi(zi(n,"top"),!0),o=Bi(zi(n,"bottom")),r=ml(n,"x"),l=ml(n,"y");return{fullSize:t,leftAndTop:i.concat(a),rightAndBottom:s.concat(l).concat(o).concat(r),chartArea:zi(n,"chartArea"),vertical:i.concat(s).concat(l),horizontal:a.concat(o).concat(r)}}function pl(e,n,t,i){return Math.max(e[t],n[t])+Math.max(e[i],n[i])}function oc(e,n){e.top=Math.max(e.top,n.top),e.left=Math.max(e.left,n.left),e.bottom=Math.max(e.bottom,n.bottom),e.right=Math.max(e.right,n.right)}function cm(e,n,t,i){let{pos:s,box:a}=t,o=e.maxPadding;if(!V(s)){t.size&&(e[s]-=t.size);let h=i[t.stack]||{size:0,count:1};h.size=Math.max(h.size,t.horizontal?a.height:a.width),t.size=h.size/h.count,e[s]+=t.size}a.getPadding&&oc(o,a.getPadding());let r=Math.max(0,n.outerWidth-pl(o,e,"left","right")),l=Math.max(0,n.outerHeight-pl(o,e,"top","bottom")),c=r!==e.w,d=l!==e.h;return e.w=r,e.h=l,t.horizontal?{same:c,other:d}:{same:d,other:c}}function dm(e){let n=e.maxPadding;function t(i){let s=Math.max(n[i]-e[i],0);return e[i]+=s,s}e.y+=t("top"),e.x+=t("left"),t("right"),t("bottom")}function hm(e,n){let t=n.maxPadding;function i(s){let a={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{a[o]=Math.max(n[o],t[o])}),a}return i(e?["left","right"]:["top","bottom"])}function Vi(e,n,t,i){let s=[],a,o,r,l,c,d;for(a=0,o=e.length,c=0;a<o;++a){r=e[a],l=r.box,l.update(r.width||n.w,r.height||n.h,hm(r.horizontal,n));let{same:h,other:m}=cm(n,t,r,i);c|=h&&s.length,d=d||m,l.fullSize||s.push(r)}return c&&Vi(s,n,t,i)||d}function Kn(e,n,t,i,s){e.top=t,e.left=n,e.right=n+i,e.bottom=t+s,e.width=i,e.height=s}function ul(e,n,t,i){let s=t.padding,{x:a,y:o}=n;for(let r of e){let l=r.box,c=i[r.stack]||{count:1,placed:0,weight:1},d=r.stackWeight/c.weight||1;if(r.horizontal){let h=n.w*d,m=c.size||l.height;mi(c.start)&&(o=c.start),l.fullSize?Kn(l,s.left,o,t.outerWidth-s.right-s.left,m):Kn(l,n.left+c.placed,o,h,m),c.start=o,c.placed+=h,o=l.bottom}else{let h=n.h*d,m=c.size||l.width;mi(c.start)&&(a=c.start),l.fullSize?Kn(l,a,s.top,m,t.outerHeight-s.bottom-s.top):Kn(l,a,n.top+c.placed,m,h),c.start=a,c.placed+=h,a=l.right}}n.x=a,n.y=o}var Et={addBox(e,n){e.boxes||(e.boxes=[]),n.fullSize=n.fullSize||!1,n.position=n.position||"top",n.weight=n.weight||0,n._layers=n._layers||function(){return[{z:0,draw(t){n.draw(t)}}]},e.boxes.push(n)},removeBox(e,n){let t=e.boxes?e.boxes.indexOf(n):-1;t!==-1&&e.boxes.splice(t,1)},configure(e,n,t){n.fullSize=t.fullSize,n.position=t.position,n.weight=t.weight},update(e,n,t,i){if(!e)return;let s=wt(e.options.layout.padding),a=Math.max(n-s.width,0),o=Math.max(t-s.height,0),r=lm(e.boxes),l=r.vertical,c=r.horizontal;q(e.boxes,u=>{typeof u.beforeLayout=="function"&&u.beforeLayout()});let d=l.reduce((u,g)=>g.box.options&&g.box.options.display===!1?u:u+1,0)||1,h=Object.freeze({outerWidth:n,outerHeight:t,padding:s,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/d,hBoxMaxHeight:o/2}),m=Object.assign({},s);oc(m,wt(i));let p=Object.assign({maxPadding:m,w:a,h:o,x:s.left,y:s.top},s),f=rm(l.concat(c),h);Vi(r.fullSize,p,h,f),Vi(l,p,h,f),Vi(c,p,h,f)&&Vi(l,p,h,f),dm(p),ul(r.leftAndTop,p,h,f),p.x+=p.w,p.y+=p.h,ul(r.rightAndBottom,p,h,f),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},q(r.chartArea,u=>{let g=u.box;Object.assign(g,e.chartArea),g.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},os=class{acquireContext(n,t){}releaseContext(n){return!1}addEventListener(n,t,i){}removeEventListener(n,t,i){}getDevicePixelRatio(){return 1}getMaximumSize(n,t,i,s){return t=Math.max(0,t||n.width),i=i||n.height,{width:t,height:Math.max(0,s?Math.floor(t/s):i)}}isAttached(n){return!0}updateConfig(n){}},Sa=class extends os{acquireContext(n){return n&&n.getContext&&n.getContext("2d")||null}updateConfig(n){n.options.animation=!1}},ns="$chartjs",mm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},fl=e=>e===null||e==="";function pm(e,n){let t=e.style,i=e.getAttribute("height"),s=e.getAttribute("width");if(e[ns]={initial:{height:i,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",fl(s)){let a=aa(e,"width");a!==void 0&&(e.width=a)}if(fl(i))if(e.style.height==="")e.height=e.width/(n||2);else{let a=aa(e,"height");a!==void 0&&(e.height=a)}return e}var rc=Kr?{passive:!0}:!1;function um(e,n,t){e&&e.addEventListener(n,t,rc)}function fm(e,n,t){e&&e.canvas&&e.canvas.removeEventListener(n,t,rc)}function gm(e,n){let t=mm[e.type]||e.type,{x:i,y:s}=Ie(e,n);return{type:t,chart:n,native:e,x:i!==void 0?i:null,y:s!==void 0?s:null}}function rs(e,n){for(let t of e)if(t===n||t.contains(n))return!0}function _m(e,n,t){let i=e.canvas,s=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||rs(r.addedNodes,i),o=o&&!rs(r.removedNodes,i);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function bm(e,n,t){let i=e.canvas,s=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||rs(r.removedNodes,i),o=o&&!rs(r.addedNodes,i);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}var Wi=new Map,gl=0;function lc(){let e=window.devicePixelRatio;e!==gl&&(gl=e,Wi.forEach((n,t)=>{t.currentDevicePixelRatio!==e&&n()}))}function vm(e,n){Wi.size||window.addEventListener("resize",lc),Wi.set(e,n)}function ym(e){Wi.delete(e),Wi.size||window.removeEventListener("resize",lc)}function xm(e,n,t){let i=e.canvas,s=i&&qn(i);if(!s)return;let a=Us((r,l)=>{let c=s.clientWidth;t(r,l),c<s.clientWidth&&t()},window),o=new ResizeObserver(r=>{let l=r[0],c=l.contentRect.width,d=l.contentRect.height;c===0&&d===0||a(c,d)});return o.observe(s),vm(e,a),o}function _a(e,n,t){t&&t.disconnect(),n==="resize"&&ym(e)}function km(e,n,t){let i=e.canvas,s=Us(a=>{e.ctx!==null&&t(gm(a,e))},e);return um(i,n,s),s}var Ma=class extends os{acquireContext(n,t){let i=n&&n.getContext&&n.getContext("2d");return i&&i.canvas===n?(pm(n,t),i):null}releaseContext(n){let t=n.canvas;if(!t[ns])return!1;let i=t[ns].initial;["height","width"].forEach(a=>{let o=i[a];H(o)?t.removeAttribute(a):t.setAttribute(a,o)});let s=i.style||{};return Object.keys(s).forEach(a=>{t.style[a]=s[a]}),t.width=t.width,delete t[ns],!0}addEventListener(n,t,i){this.removeEventListener(n,t);let s=n.$proxies||(n.$proxies={}),o={attach:_m,detach:bm,resize:xm}[t]||km;s[t]=o(n,t,i)}removeEventListener(n,t){let i=n.$proxies||(n.$proxies={}),s=i[t];if(!s)return;({attach:_a,detach:_a,resize:_a}[t]||fm)(n,t,s),i[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(n,t,i,s){return Xr(n,t,i,s)}isAttached(n){let t=n&&qn(n);return!!(t&&t.isConnected)}};function wm(e){return!Yn()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Sa:Ma}var Yt=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(n){let{x:t,y:i}=this.getProps(["x","y"],n);return{x:t,y:i}}hasValue(){return je(this.x)&&je(this.y)}getProps(n,t){let i=this.$animations;if(!t||!i)return this;let s={};return n.forEach(a=>{s[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),s}};function Cm(e,n){let t=e.options.ticks,i=Sm(e),s=Math.min(t.maxTicksLimit||i,i),a=t.major.enabled?Dm(n):[],o=a.length,r=a[0],l=a[o-1],c=[];if(o>s)return Im(n,c,a,o/s),c;let d=Mm(a,n,s);if(o>0){let h,m,p=o>1?Math.round((l-r)/(o-1)):null;for(Zn(n,c,d,H(p)?0:r-p,r),h=0,m=o-1;h<m;h++)Zn(n,c,d,a[h],a[h+1]);return Zn(n,c,d,l,H(p)?n.length:l+p),c}return Zn(n,c,d),c}function Sm(e){let n=e.options.offset,t=e._tickSize(),i=e._length/t+(n?0:1),s=e._maxLength/t;return Math.floor(Math.min(i,s))}function Mm(e,n,t){let i=Rm(e),s=n.length/t;if(!i)return Math.max(s,1);let a=Tr(i);for(let o=0,r=a.length-1;o<r;o++){let l=a[o];if(l>s)return l}return Math.max(s,1)}function Dm(e){let n=[],t,i;for(t=0,i=e.length;t<i;t++)e[t].major&&n.push(t);return n}function Im(e,n,t,i){let s=0,a=t[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===a&&(n.push(e[o]),s++,a=t[s*i])}function Zn(e,n,t,i,s){let a=O(i,0),o=Math.min(O(s,e.length),e.length),r=0,l,c,d;for(t=Math.ceil(t),s&&(l=s-i,t=l/Math.floor(l/t)),d=a;d<0;)r++,d=Math.round(a+r*t);for(c=Math.max(a,0);c<o;c++)c===d&&(n.push(e[c]),r++,d=Math.round(a+r*t))}function Rm(e){let n=e.length,t,i;if(n<2)return!1;for(i=e[0],t=1;t<n;++t)if(e[t]-e[t-1]!==i)return!1;return i}var Em=e=>e==="left"?"right":e==="right"?"left":e,_l=(e,n,t)=>n==="top"||n==="left"?e[n]+t:e[n]-t,bl=(e,n)=>Math.min(n||e,e);function vl(e,n){let t=[],i=e.length/n,s=e.length,a=0;for(;a<s;a+=i)t.push(e[Math.floor(a)]);return t}function Tm(e,n,t){let i=e.ticks.length,s=Math.min(n,i-1),a=e._startPixel,o=e._endPixel,r=1e-6,l=e.getPixelForTick(s),c;if(!(t&&(i===1?c=Math.max(l-a,o-l):n===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(s-1))/2,l+=s<n?c:-c,l<a-r||l>o+r)))return l}function Om(e,n){q(e,t=>{let i=t.gc,s=i.length/2,a;if(s>n){for(a=0;a<s;++a)delete t.data[i[a]];i.splice(0,s)}})}function Ni(e){return e.drawTicks?e.tickLength:0}function yl(e,n){if(!e.display)return 0;let t=ft(e.font,n),i=wt(e.padding);return(it(e.text)?e.text.length:1)*t.lineHeight+i.height}function Am(e,n){return ue(e,{scale:n,type:"scale"})}function Pm(e,n,t){return ue(e,{tick:t,index:n,type:"tick"})}function Lm(e,n,t){let i=Wn(e);return(t&&n!=="right"||!t&&n==="right")&&(i=Em(i)),i}function Fm(e,n,t,i){let{top:s,left:a,bottom:o,right:r,chart:l}=e,{chartArea:c,scales:d}=l,h=0,m,p,f,u=o-s,g=r-a;if(e.isHorizontal()){if(p=kt(i,a,r),V(t)){let b=Object.keys(t)[0],v=t[b];f=d[b].getPixelForValue(v)+u-n}else t==="center"?f=(c.bottom+c.top)/2+u-n:f=_l(e,t,n);m=r-a}else{if(V(t)){let b=Object.keys(t)[0],v=t[b];p=d[b].getPixelForValue(v)-g+n}else t==="center"?p=(c.left+c.right)/2-g+n:p=_l(e,t,n);f=kt(i,o,s),h=t==="left"?-mt:mt}return{titleX:p,titleY:f,maxWidth:m,rotation:h}}var Ue=class e extends Yt{constructor(n){super(),this.id=n.id,this.type=n.type,this.options=void 0,this.ctx=n.ctx,this.chart=n.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(n){this.options=n.setContext(this.getContext()),this.axis=n.axis,this._userMin=this.parse(n.min),this._userMax=this.parse(n.max),this._suggestedMin=this.parse(n.suggestedMin),this._suggestedMax=this.parse(n.suggestedMax)}parse(n,t){return n}getUserBounds(){let{_userMin:n,_userMax:t,_suggestedMin:i,_suggestedMax:s}=this;return n=Ot(n,Number.POSITIVE_INFINITY),t=Ot(t,Number.NEGATIVE_INFINITY),i=Ot(i,Number.POSITIVE_INFINITY),s=Ot(s,Number.NEGATIVE_INFINITY),{min:Ot(n,i),max:Ot(t,s),minDefined:ct(n),maxDefined:ct(t)}}getMinMax(n){let{min:t,max:i,minDefined:s,maxDefined:a}=this.getUserBounds(),o;if(s&&a)return{min:t,max:i};let r=this.getMatchingVisibleMetas();for(let l=0,c=r.length;l<c;++l)o=r[l].controller.getMinMax(this,n),s||(t=Math.min(t,o.min)),a||(i=Math.max(i,o.max));return t=a&&t>i?i:t,i=s&&t>i?t:i,{min:Ot(t,Ot(i,t)),max:Ot(i,Ot(t,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let n=this.chart.data;return this.options.labels||(this.isHorizontal()?n.xLabels:n.yLabels)||n.labels||[]}getLabelItems(n=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(n))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){et(this.options.beforeUpdate,[this])}update(n,t,i){let{beginAtZero:s,grace:a,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=n,this.maxHeight=t,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Gr(this,a,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let l=r<this.ticks.length;this._convertTicksToLabels(l?vl(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Cm(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let n=this.options.reverse,t,i;this.isHorizontal()?(t=this.left,i=this.right):(t=this.top,i=this.bottom,n=!n),this._startPixel=t,this._endPixel=i,this._reversePixels=n,this._length=i-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){et(this.options.afterUpdate,[this])}beforeSetDimensions(){et(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){et(this.options.afterSetDimensions,[this])}_callHooks(n){this.chart.notifyPlugins(n,this.getContext()),et(this.options[n],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){et(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(n){let t=this.options.ticks,i,s,a;for(i=0,s=n.length;i<s;i++)a=n[i],a.label=et(t.callback,[a.value,i,n],this)}afterTickToLabelConversion(){et(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){et(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let n=this.options,t=n.ticks,i=bl(this.ticks.length,n.ticks.maxTicksLimit),s=t.minRotation||0,a=t.maxRotation,o=s,r,l,c;if(!this._isVisible()||!t.display||s>=a||i<=1||!this.isHorizontal()){this.labelRotation=s;return}let d=this._getLabelSizes(),h=d.widest.width,m=d.highest.height,p=_t(this.chart.width-h,0,this.maxWidth);r=n.offset?this.maxWidth/i:p/(i-1),h+6>r&&(r=p/(i-(n.offset?.5:1)),l=this.maxHeight-Ni(n.grid)-t.padding-yl(n.title,this.chart.options.font),c=Math.sqrt(h*h+m*m),o=Vn(Math.min(Math.asin(_t((d.highest.height+6)/r,-1,1)),Math.asin(_t(l/c,-1,1))-Math.asin(_t(m/c,-1,1)))),o=Math.max(s,Math.min(a,o))),this.labelRotation=o}afterCalculateLabelRotation(){et(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){et(this.options.beforeFit,[this])}fit(){let n={width:0,height:0},{chart:t,options:{ticks:i,title:s,grid:a}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){let l=yl(s,t.options.font);if(r?(n.width=this.maxWidth,n.height=Ni(a)+l):(n.height=this.maxHeight,n.width=Ni(a)+l),i.display&&this.ticks.length){let{first:c,last:d,widest:h,highest:m}=this._getLabelSizes(),p=i.padding*2,f=$t(this.labelRotation),u=Math.cos(f),g=Math.sin(f);if(r){let b=i.mirror?0:g*h.width+u*m.height;n.height=Math.min(this.maxHeight,n.height+b+p)}else{let b=i.mirror?0:u*h.width+g*m.height;n.width=Math.min(this.maxWidth,n.width+b+p)}this._calculatePadding(c,d,g,u)}}this._handleMargins(),r?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=n.height):(this.width=n.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(n,t,i,s){let{ticks:{align:a,padding:o},position:r}=this.options,l=this.labelRotation!==0,c=r!=="top"&&this.axis==="x";if(this.isHorizontal()){let d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),m=0,p=0;l?c?(m=s*n.width,p=i*t.height):(m=i*n.height,p=s*t.width):a==="start"?p=t.width:a==="end"?m=n.width:a!=="inner"&&(m=n.width/2,p=t.width/2),this.paddingLeft=Math.max((m-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+o)*this.width/(this.width-h),0)}else{let d=t.height/2,h=n.height/2;a==="start"?(d=0,h=n.height):a==="end"&&(d=t.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){et(this.options.afterFit,[this])}isHorizontal(){let{axis:n,position:t}=this.options;return t==="top"||t==="bottom"||n==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(n){this.beforeTickToLabelConversion(),this.generateTickLabels(n);let t,i;for(t=0,i=n.length;t<i;t++)H(n[t].label)&&(n.splice(t,1),i--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let n=this._labelSizes;if(!n){let t=this.options.ticks.sampleSize,i=this.ticks;t<i.length&&(i=vl(i,t)),this._labelSizes=n=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return n}_computeLabelSizes(n,t,i){let{ctx:s,_longestTextCache:a}=this,o=[],r=[],l=Math.floor(t/bl(t,i)),c=0,d=0,h,m,p,f,u,g,b,v,C,M,w;for(h=0;h<t;h+=l){if(f=n[h].label,u=this._resolveTickFontOptions(h),s.font=g=u.string,b=a[g]=a[g]||{data:{},gc:[]},v=u.lineHeight,C=M=0,!H(f)&&!it(f))C=Ti(s,b.data,b.gc,C,f),M=v;else if(it(f))for(m=0,p=f.length;m<p;++m)w=f[m],!H(w)&&!it(w)&&(C=Ti(s,b.data,b.gc,C,w),M+=v);o.push(C),r.push(M),c=Math.max(C,c),d=Math.max(M,d)}Om(a,t);let S=o.indexOf(c),E=r.indexOf(d),D=T=>({width:o[T]||0,height:r[T]||0});return{first:D(0),last:D(t-1),widest:D(S),highest:D(E),widths:o,heights:r}}getLabelForValue(n){return n}getPixelForValue(n,t){return NaN}getValueForPixel(n){}getPixelForTick(n){let t=this.ticks;return n<0||n>t.length-1?null:this.getPixelForValue(t[n].value)}getPixelForDecimal(n){this._reversePixels&&(n=1-n);let t=this._startPixel+n*this._length;return Ar(this._alignToPixels?Se(this.chart,t,0):t)}getDecimalForPixel(n){let t=(n-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:n,max:t}=this;return n<0&&t<0?t:n>0&&t>0?n:0}getContext(n){let t=this.ticks||[];if(n>=0&&n<t.length){let i=t[n];return i.$context||(i.$context=Pm(this.getContext(),n,i))}return this.$context||(this.$context=Am(this.chart.getContext(),this))}_tickSize(){let n=this.options.ticks,t=$t(this.labelRotation),i=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),a=this._getLabelSizes(),o=n.autoSkipPadding||0,r=a?a.widest.width+o:0,l=a?a.highest.height+o:0;return this.isHorizontal()?l*i>r*s?r/i:l/s:l*s<r*i?l/i:r/s}_isVisible(){let n=this.options.display;return n!=="auto"?!!n:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(n){let t=this.axis,i=this.chart,s=this.options,{grid:a,position:o,border:r}=s,l=a.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),m=Ni(a),p=[],f=r.setContext(this.getContext()),u=f.display?f.width:0,g=u/2,b=function(at){return Se(i,at,u)},v,C,M,w,S,E,D,T,L,A,j,yt;if(o==="top")v=b(this.bottom),E=this.bottom-m,T=v-g,A=b(n.top)+g,yt=n.bottom;else if(o==="bottom")v=b(this.top),A=n.top,yt=b(n.bottom)-g,E=v+g,T=this.top+m;else if(o==="left")v=b(this.right),S=this.right-m,D=v-g,L=b(n.left)+g,j=n.right;else if(o==="right")v=b(this.left),L=n.left,j=b(n.right)-g,S=v+g,D=this.left+m;else if(t==="x"){if(o==="center")v=b((n.top+n.bottom)/2+.5);else if(V(o)){let at=Object.keys(o)[0],pt=o[at];v=b(this.chart.scales[at].getPixelForValue(pt))}A=n.top,yt=n.bottom,E=v+g,T=E+m}else if(t==="y"){if(o==="center")v=b((n.left+n.right)/2);else if(V(o)){let at=Object.keys(o)[0],pt=o[at];v=b(this.chart.scales[at].getPixelForValue(pt))}S=v-g,D=S-m,L=n.left,j=n.right}let Lt=O(s.ticks.maxTicksLimit,h),X=Math.max(1,Math.ceil(h/Lt));for(C=0;C<h;C+=X){let at=this.getContext(C),pt=a.setContext(at),Ut=r.setContext(at),Ct=pt.lineWidth,Ye=pt.color,Ki=Ut.dash||[],qe=Ut.dashOffset,ki=pt.tickWidth,Te=pt.tickColor,wi=pt.tickBorderDash||[],Oe=pt.tickBorderDashOffset;M=Tm(this,C,l),M!==void 0&&(w=Se(i,M,Ct),c?S=D=L=j=w:E=T=A=yt=w,p.push({tx1:S,ty1:E,tx2:D,ty2:T,x1:L,y1:A,x2:j,y2:yt,width:Ct,color:Ye,borderDash:Ki,borderDashOffset:qe,tickWidth:ki,tickColor:Te,tickBorderDash:wi,tickBorderDashOffset:Oe}))}return this._ticksLength=h,this._borderValue=v,p}_computeLabelItems(n){let t=this.axis,i=this.options,{position:s,ticks:a}=i,o=this.isHorizontal(),r=this.ticks,{align:l,crossAlign:c,padding:d,mirror:h}=a,m=Ni(i.grid),p=m+d,f=h?-d:p,u=-$t(this.labelRotation),g=[],b,v,C,M,w,S,E,D,T,L,A,j,yt="middle";if(s==="top")S=this.bottom-f,E=this._getXAxisLabelAlignment();else if(s==="bottom")S=this.top+f,E=this._getXAxisLabelAlignment();else if(s==="left"){let X=this._getYAxisLabelAlignment(m);E=X.textAlign,w=X.x}else if(s==="right"){let X=this._getYAxisLabelAlignment(m);E=X.textAlign,w=X.x}else if(t==="x"){if(s==="center")S=(n.top+n.bottom)/2+p;else if(V(s)){let X=Object.keys(s)[0],at=s[X];S=this.chart.scales[X].getPixelForValue(at)+p}E=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")w=(n.left+n.right)/2-p;else if(V(s)){let X=Object.keys(s)[0],at=s[X];w=this.chart.scales[X].getPixelForValue(at)}E=this._getYAxisLabelAlignment(m).textAlign}t==="y"&&(l==="start"?yt="top":l==="end"&&(yt="bottom"));let Lt=this._getLabelSizes();for(b=0,v=r.length;b<v;++b){C=r[b],M=C.label;let X=a.setContext(this.getContext(b));D=this.getPixelForTick(b)+a.labelOffset,T=this._resolveTickFontOptions(b),L=T.lineHeight,A=it(M)?M.length:1;let at=A/2,pt=X.color,Ut=X.textStrokeColor,Ct=X.textStrokeWidth,Ye=E;o?(w=D,E==="inner"&&(b===v-1?Ye=this.options.reverse?"left":"right":b===0?Ye=this.options.reverse?"right":"left":Ye="center"),s==="top"?c==="near"||u!==0?j=-A*L+L/2:c==="center"?j=-Lt.highest.height/2-at*L+L:j=-Lt.highest.height+L/2:c==="near"||u!==0?j=L/2:c==="center"?j=Lt.highest.height/2-at*L:j=Lt.highest.height-A*L,h&&(j*=-1),u!==0&&!X.showLabelBackdrop&&(w+=L/2*Math.sin(u))):(S=D,j=(1-A)*L/2);let Ki;if(X.showLabelBackdrop){let qe=wt(X.backdropPadding),ki=Lt.heights[b],Te=Lt.widths[b],wi=j-qe.top,Oe=0-qe.left;switch(yt){case"middle":wi-=ki/2;break;case"bottom":wi-=ki;break}switch(E){case"center":Oe-=Te/2;break;case"right":Oe-=Te;break;case"inner":b===v-1?Oe-=Te:b>0&&(Oe-=Te/2);break}Ki={left:Oe,top:wi,width:Te+qe.width,height:ki+qe.height,color:X.backdropColor}}g.push({label:M,font:T,textOffset:j,options:{rotation:u,color:pt,strokeColor:Ut,strokeWidth:Ct,textAlign:Ye,textBaseline:yt,translation:[w,S],backdrop:Ki}})}return g}_getXAxisLabelAlignment(){let{position:n,ticks:t}=this.options;if(-$t(this.labelRotation))return n==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(n){let{position:t,ticks:{crossAlign:i,mirror:s,padding:a}}=this.options,o=this._getLabelSizes(),r=n+a,l=o.widest.width,c,d;return t==="left"?s?(d=this.right+a,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d+=l)):(d=this.right-r,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d=this.left)):t==="right"?s?(d=this.left+a,i==="near"?c="right":i==="center"?(c="center",d-=l/2):(c="left",d-=l)):(d=this.left+r,i==="near"?c="left":i==="center"?(c="center",d+=l/2):(c="right",d=this.right)):c="right",{textAlign:c,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;let n=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:n.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:n.width}}drawBackground(){let{ctx:n,options:{backgroundColor:t},left:i,top:s,width:a,height:o}=this;t&&(n.save(),n.fillStyle=t,n.fillRect(i,s,a,o),n.restore())}getLineWidthForValue(n){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let s=this.ticks.findIndex(a=>a.value===n);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(n){let t=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(n)),a,o,r=(l,c,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(t.display)for(a=0,o=s.length;a<o;++a){let l=s[a];t.drawOnChartArea&&r({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),t.drawTicks&&r({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){let{chart:n,ctx:t,options:{border:i,grid:s}}=this,a=i.setContext(this.getContext()),o=i.display?a.width:0;if(!o)return;let r=s.setContext(this.getContext(0)).lineWidth,l=this._borderValue,c,d,h,m;this.isHorizontal()?(c=Se(n,this.left,o)-o/2,d=Se(n,this.right,r)+r/2,h=m=l):(h=Se(n,this.top,o)-o/2,m=Se(n,this.bottom,r)+r/2,c=d=l),t.save(),t.lineWidth=a.width,t.strokeStyle=a.color,t.beginPath(),t.moveTo(c,h),t.lineTo(d,m),t.stroke(),t.restore()}drawLabels(n){if(!this.options.ticks.display)return;let i=this.ctx,s=this._computeLabelArea();s&&Pi(i,s);let a=this.getLabelItems(n);for(let o of a){let r=o.options,l=o.font,c=o.label,d=o.textOffset;Me(i,c,0,d,l,r)}s&&Li(i)}drawTitle(){let{ctx:n,options:{position:t,title:i,reverse:s}}=this;if(!i.display)return;let a=ft(i.font),o=wt(i.padding),r=i.align,l=a.lineHeight/2;t==="bottom"||t==="center"||V(t)?(l+=o.bottom,it(i.text)&&(l+=a.lineHeight*(i.text.length-1))):l+=o.top;let{titleX:c,titleY:d,maxWidth:h,rotation:m}=Fm(this,l,t,r);Me(n,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:m,textAlign:Lm(r,t,s),textBaseline:"middle",translation:[c,d]})}draw(n){this._isVisible()&&(this.drawBackground(),this.drawGrid(n),this.drawBorder(),this.drawTitle(),this.drawLabels(n))}_layers(){let n=this.options,t=n.ticks&&n.ticks.z||0,i=O(n.grid&&n.grid.z,-1),s=O(n.border&&n.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:t,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(n){let t=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[],a,o;for(a=0,o=t.length;a<o;++a){let r=t[a];r[i]===this.id&&(!n||r.type===n)&&s.push(r)}return s}_resolveTickFontOptions(n){let t=this.options.ticks.setContext(this.getContext(n));return ft(t.font)}_maxDigits(){let n=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/n}},vi=class{constructor(n,t,i){this.type=n,this.scope=t,this.override=i,this.items=Object.create(null)}isForType(n){return Object.prototype.isPrototypeOf.call(this.type.prototype,n.prototype)}register(n){let t=Object.getPrototypeOf(n),i;Nm(t)&&(i=this.register(t));let s=this.items,a=n.id,o=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+n);return a in s||(s[a]=n,zm(n,o,i),this.override&&st.override(n.id,n.overrides)),o}get(n){return this.items[n]}unregister(n){let t=this.items,i=n.id,s=this.scope;i in t&&delete t[i],s&&i in st[s]&&(delete st[s][i],this.override&&delete Ce[i])}};function zm(e,n,t){let i=ci(Object.create(null),[t?st.get(t):{},st.get(n),e.defaults]);st.set(n,i),e.defaultRoutes&&Bm(n,e.defaultRoutes),e.descriptors&&st.describe(n,e.descriptors)}function Bm(e,n){Object.keys(n).forEach(t=>{let i=t.split("."),s=i.pop(),a=[e].concat(i).join("."),o=n[t].split("."),r=o.pop(),l=o.join(".");st.route(a,s,l,r)})}function Nm(e){return"id"in e&&"defaults"in e}var Da=class{constructor(){this.controllers=new vi(Ee,"datasets",!0),this.elements=new vi(Yt,"elements"),this.plugins=new vi(Object,"plugins"),this.scales=new vi(Ue,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...n){this._each("register",n)}remove(...n){this._each("unregister",n)}addControllers(...n){this._each("register",n,this.controllers)}addElements(...n){this._each("register",n,this.elements)}addPlugins(...n){this._each("register",n,this.plugins)}addScales(...n){this._each("register",n,this.scales)}getController(n){return this._get(n,this.controllers,"controller")}getElement(n){return this._get(n,this.elements,"element")}getPlugin(n){return this._get(n,this.plugins,"plugin")}getScale(n){return this._get(n,this.scales,"scale")}removeControllers(...n){this._each("unregister",n,this.controllers)}removeElements(...n){this._each("unregister",n,this.elements)}removePlugins(...n){this._each("unregister",n,this.plugins)}removeScales(...n){this._each("unregister",n,this.scales)}_each(n,t,i){[...t].forEach(s=>{let a=i||this._getRegistryForType(s);i||a.isForType(s)||a===this.plugins&&s.id?this._exec(n,a,s):q(s,o=>{let r=i||this._getRegistryForType(o);this._exec(n,r,o)})})}_exec(n,t,i){let s=Hn(n);et(i["before"+s],[],i),t[n](i),et(i["after"+s],[],i)}_getRegistryForType(n){for(let t=0;t<this._typedRegistries.length;t++){let i=this._typedRegistries[t];if(i.isForType(n))return i}return this.plugins}_get(n,t,i){let s=t.get(n);if(s===void 0)throw new Error('"'+n+'" is not a registered '+i+".");return s}},re=new Da,Ia=class{constructor(){this._init=void 0}notify(n,t,i,s){if(t==="beforeInit"&&(this._init=this._createDescriptors(n,!0),this._notify(this._init,n,"install")),this._init===void 0)return;let a=s?this._descriptors(n).filter(s):this._descriptors(n),o=this._notify(a,n,t,i);return t==="afterDestroy"&&(this._notify(a,n,"stop"),this._notify(this._init,n,"uninstall"),this._init=void 0),o}_notify(n,t,i,s){s=s||{};for(let a of n){let o=a.plugin,r=o[i],l=[t,s,a.options];if(et(r,l,o)===!1&&s.cancelable)return!1}return!0}invalidate(){H(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(n){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(n);return this._notifyStateChanges(n),t}_createDescriptors(n,t){let i=n&&n.config,s=O(i.options&&i.options.plugins,{}),a=Hm(i);return s===!1&&!t?[]:jm(n,a,s,t)}_notifyStateChanges(n){let t=this._oldCache||[],i=this._cache,s=(a,o)=>a.filter(r=>!o.some(l=>r.plugin.id===l.plugin.id));this._notify(s(t,i),n,"stop"),this._notify(s(i,t),n,"start")}};function Hm(e){let n={},t=[],i=Object.keys(re.plugins.items);for(let a=0;a<i.length;a++)t.push(re.getPlugin(i[a]));let s=e.plugins||[];for(let a=0;a<s.length;a++){let o=s[a];t.indexOf(o)===-1&&(t.push(o),n[o.id]=!0)}return{plugins:t,localIds:n}}function Vm(e,n){return!n&&e===!1?null:e===!0?{}:e}function jm(e,{plugins:n,localIds:t},i,s){let a=[],o=e.getContext();for(let r of n){let l=r.id,c=Vm(i[l],s);c!==null&&a.push({plugin:r,options:Wm(e.config,{plugin:r,local:t[l]},c,o)})}return a}function Wm(e,{plugin:n,local:t},i,s){let a=e.pluginScopeKeys(n),o=e.getOptionScopes(i,a);return t&&n.defaults&&o.push(n.defaults),e.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ra(e,n){let t=st.datasets[e]||{};return((n.datasets||{})[e]||{}).indexAxis||n.indexAxis||t.indexAxis||"x"}function Gm(e,n){let t=e;return e==="_index_"?t=n:e==="_value_"&&(t=n==="x"?"y":"x"),t}function $m(e,n){return e===n?"_index_":"_value_"}function xl(e){if(e==="x"||e==="y"||e==="r")return e}function Um(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Ea(e,...n){if(xl(e))return e;for(let t of n){let i=t.axis||Um(t.position)||e.length>1&&xl(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function kl(e,n,t){if(t[n+"AxisID"]===e)return{axis:n}}function Qm(e,n){if(n.data&&n.data.datasets){let t=n.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(t.length)return kl(e,"x",t[0])||kl(e,"y",t[0])}return{}}function Ym(e,n){let t=Ce[e.type]||{scales:{}},i=n.scales||{},s=Ra(e.type,n),a=Object.create(null);return Object.keys(i).forEach(o=>{let r=i[o];if(!V(r))return console.error(`Invalid scale configuration for scale: ${o}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);let l=Ea(o,r,Qm(o,e),st.scales[r.type]),c=$m(l,s),d=t.scales||{};a[o]=hi(Object.create(null),[{axis:l},r,d[l],d[c]])}),e.data.datasets.forEach(o=>{let r=o.type||e.type,l=o.indexAxis||Ra(r,n),d=(Ce[r]||{}).scales||{};Object.keys(d).forEach(h=>{let m=Gm(h,l),p=o[m+"AxisID"]||m;a[p]=a[p]||Object.create(null),hi(a[p],[{axis:m},i[p],d[h]])})}),Object.keys(a).forEach(o=>{let r=a[o];hi(r,[st.scales[r.type],st.scale])}),a}function cc(e){let n=e.options||(e.options={});n.plugins=O(n.plugins,{}),n.scales=Ym(e,n)}function dc(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function qm(e){return e=e||{},e.data=dc(e.data),cc(e),e}var wl=new Map,hc=new Set;function Jn(e,n){let t=wl.get(e);return t||(t=n(),wl.set(e,t),hc.add(t)),t}var Hi=(e,n,t)=>{let i=pe(n,t);i!==void 0&&e.add(i)},Ta=class{constructor(n){this._config=qm(n),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(n){this._config.type=n}get data(){return this._config.data}set data(n){this._config.data=dc(n)}get options(){return this._config.options}set options(n){this._config.options=n}get plugins(){return this._config.plugins}update(){let n=this._config;this.clearCache(),cc(n)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(n){return Jn(n,()=>[[`datasets.${n}`,""]])}datasetAnimationScopeKeys(n,t){return Jn(`${n}.transition.${t}`,()=>[[`datasets.${n}.transitions.${t}`,`transitions.${t}`],[`datasets.${n}`,""]])}datasetElementScopeKeys(n,t){return Jn(`${n}-${t}`,()=>[[`datasets.${n}.elements.${t}`,`datasets.${n}`,`elements.${t}`,""]])}pluginScopeKeys(n){let t=n.id,i=this.type;return Jn(`${i}-plugin-${t}`,()=>[[`plugins.${t}`,...n.additionalOptionScopes||[]]])}_cachedScopes(n,t){let i=this._scopeCache,s=i.get(n);return(!s||t)&&(s=new Map,i.set(n,s)),s}getOptionScopes(n,t,i){let{options:s,type:a}=this,o=this._cachedScopes(n,i),r=o.get(t);if(r)return r;let l=new Set;t.forEach(d=>{n&&(l.add(n),d.forEach(h=>Hi(l,n,h))),d.forEach(h=>Hi(l,s,h)),d.forEach(h=>Hi(l,Ce[a]||{},h)),d.forEach(h=>Hi(l,st,h)),d.forEach(h=>Hi(l,Gn,h))});let c=Array.from(l);return c.length===0&&c.push(Object.create(null)),hc.has(t)&&o.set(t,c),c}chartOptionScopes(){let{options:n,type:t}=this;return[n,Ce[t]||{},st.datasets[t]||{},{type:t},st,Gn]}resolveNamedOptions(n,t,i,s=[""]){let a={$shared:!0},{resolver:o,subPrefixes:r}=Cl(this._resolverCache,n,s),l=o;if(Km(o,t)){a.$shared=!1,i=he(i)?i():i;let c=this.createResolver(n,i,r);l=Ve(o,i,c)}for(let c of t)a[c]=l[c];return a}createResolver(n,t,i=[""],s){let{resolver:a}=Cl(this._resolverCache,n,i);return V(t)?Ve(a,t,void 0,s):a}};function Cl(e,n,t){let i=e.get(n);i||(i=new Map,e.set(n,i));let s=t.join(),a=i.get(s);return a||(a={resolver:Qn(n,t),subPrefixes:t.filter(r=>!r.toLowerCase().includes("hover"))},i.set(s,a)),a}var Xm=e=>V(e)&&Object.getOwnPropertyNames(e).some(n=>he(e[n]));function Km(e,n){let{isScriptable:t,isIndexable:i}=ta(e);for(let s of n){let a=t(s),o=i(s),r=(o||a)&&e[s];if(a&&(he(r)||Xm(r))||o&&it(r))return!0}return!1}var Zm="4.5.1",Jm=["top","bottom","left","right","chartArea"];function Sl(e,n){return e==="top"||e==="bottom"||Jm.indexOf(e)===-1&&n==="x"}function Ml(e,n){return function(t,i){return t[e]===i[e]?t[n]-i[n]:t[e]-i[e]}}function Dl(e){let n=e.chart,t=n.options.animation;n.notifyPlugins("afterRender"),et(t&&t.onComplete,[e],n)}function tp(e){let n=e.chart,t=n.options.animation;et(t&&t.onProgress,[e],n)}function mc(e){return Yn()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var ss={},Il=e=>{let n=mc(e);return Object.values(ss).filter(t=>t.canvas===n).pop()};function ep(e,n,t){let i=Object.keys(e);for(let s of i){let a=+s;if(a>=n){let o=e[s];delete e[s],(t>0||a>n)&&(e[a+t]=o)}}}function ip(e,n,t,i){return!t||e.type==="mouseout"?null:i?n:e}var Qi=(()=>{class e{static defaults=st;static instances=ss;static overrides=Ce;static registry=re;static version=Zm;static getChart=Il;static register(...t){re.add(...t),Rl()}static unregister(...t){re.remove(...t),Rl()}constructor(t,i){let s=this.config=new Ta(i),a=mc(t),o=Il(a);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");let r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||wm(a)),this.platform.updateConfig(s);let l=this.platform.acquireContext(a,r.aspectRatio),c=l&&l.canvas,d=c&&c.height,h=c&&c.width;if(this.id=Dr(),this.ctx=l,this.canvas=c,this.width=h,this.height=d,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Ia,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Br(m=>this.update(m),r.resizeDelay||0),this._dataChanges=[],ss[this.id]=this,!l||!c){console.error("Failed to create chart: can't acquire context from the given item");return}fe.listen(this,"complete",Dl),fe.listen(this,"progress",tp),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:i},width:s,height:a,_aspectRatio:o}=this;return H(t)?i&&o?o:a?s/a:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return re}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():sa(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Ks(this.canvas,this.ctx),this}stop(){return fe.stop(this),this}resize(t,i){fe.running(this)?this._resizeBeforeDraw={width:t,height:i}:this._resize(t,i)}_resize(t,i){let s=this.options,a=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(a,t,i,o),l=s.devicePixelRatio||this.platform.getDevicePixelRatio(),c=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,sa(this,l,!0)&&(this.notifyPlugins("resize",{size:r}),et(s.onResize,[this,r],this),this.attached&&this._doResize(c)&&this.render())}ensureScalesHaveIDs(){let i=this.options.scales||{};q(i,(s,a)=>{s.id=a})}buildOrUpdateScales(){let t=this.options,i=t.scales,s=this.scales,a=Object.keys(s).reduce((r,l)=>(r[l]=!1,r),{}),o=[];i&&(o=o.concat(Object.keys(i).map(r=>{let l=i[r],c=Ea(r,l),d=c==="r",h=c==="x";return{options:l,dposition:d?"chartArea":h?"bottom":"left",dtype:d?"radialLinear":h?"category":"linear"}}))),q(o,r=>{let l=r.options,c=l.id,d=Ea(c,l),h=O(l.type,r.dtype);(l.position===void 0||Sl(l.position,d)!==Sl(r.dposition))&&(l.position=r.dposition),a[c]=!0;let m=null;if(c in s&&s[c].type===h)m=s[c];else{let p=re.getScale(h);m=new p({id:c,type:h,ctx:this.ctx,chart:this}),s[m.id]=m}m.init(l,t)}),q(a,(r,l)=>{r||delete s[l]}),q(s,r=>{Et.configure(this,r,r.options),Et.addBox(this,r)})}_updateMetasets(){let t=this._metasets,i=this.data.datasets.length,s=t.length;if(t.sort((a,o)=>a.index-o.index),s>i){for(let a=i;a<s;++a)this._destroyDatasetMeta(a);t.splice(i,s-i)}this._sortedMetasets=t.slice(0).sort(Ml("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:i}}=this;t.length>i.length&&delete this._stacks,t.forEach((s,a)=>{i.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){let t=[],i=this.data.datasets,s,a;for(this._removeUnreferencedMetasets(),s=0,a=i.length;s<a;s++){let o=i[s],r=this.getDatasetMeta(s),l=o.type||this.config.type;if(r.type&&r.type!==l&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=l,r.indexAxis=o.indexAxis||Ra(l,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{let c=re.getController(l),{datasetElementType:d,dataElementType:h}=st.datasets[l];Object.assign(c,{dataElementType:re.getElement(h),datasetElementType:d&&re.getElement(d)}),r.controller=new c(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){q(this.data.datasets,(t,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let i=this.config;i.update();let s=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let d=0,h=this.data.datasets.length;d<h;d++){let{controller:m}=this.getDatasetMeta(d),p=!a&&o.indexOf(m)===-1;m.buildOrUpdateElements(p),r=Math.max(+m.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),a||q(o,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Ml("z","_idx"));let{_active:l,_lastEvent:c}=this;c?this._eventHandler(c,!0):l.length&&this._updateHoverStyles(l,l,!0),this.render()}_updateScales(){q(this.scales,t=>{Et.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,i=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Bs(i,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,i=this._getUniformDataChanges()||[];for(let{method:s,start:a,count:o}of i){let r=s==="_removeElements"?-o:o;ep(t,a,r)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let i=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,l)=>l+","+r.splice(1).join(","))),a=s(0);for(let o=1;o<i;o++)if(!Bs(a,s(o)))return;return Array.from(a).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Et.update(this,this.width,this.height,t);let i=this.chartArea,s=i.width<=0||i.height<=0;this._layers=[],q(this.boxes,a=>{s&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,o)=>{a._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let i=0,s=this.data.datasets.length;i<s;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,s=this.data.datasets.length;i<s;++i)this._updateDataset(i,he(t)?t({datasetIndex:i}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,i){let s=this.getDatasetMeta(t),a={meta:s,index:t,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(s.controller._update(i),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(fe.has(this)?this.attached&&!fe.running(this)&&fe.start(this):(this.draw(),Dl({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:s,height:a}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,a)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let i=this._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(this.chartArea);for(this._drawDatasets();t<i.length;++t)i[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let i=this._sortedMetasets,s=[],a,o;for(a=0,o=i.length;a<o;++a){let r=i[a];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let i=t.length-1;i>=0;--i)this._drawDataset(t[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let i=this.ctx,s={meta:t,index:t.index,cancelable:!0},a=da(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(a&&Pi(i,a),t.controller.draw(),a&&Li(i),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return ne(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,i,s,a){let o=sm.modes[i];return typeof o=="function"?o(this,t,s,a):[]}getDatasetMeta(t){let i=this.data.datasets[t],s=this._metasets,a=s.filter(o=>o&&o._dataset===i).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:t,_dataset:i,_parsed:[],_sorted:!1},s.push(a)),a}getContext(){return this.$context||(this.$context=ue(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let i=this.data.datasets[t];if(!i)return!1;let s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!i.hidden}setDatasetVisibility(t,i){let s=this.getDatasetMeta(t);s.hidden=!i}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,i,s){let a=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,a);mi(i)?(o.data[i].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(l=>l.datasetIndex===t?a:void 0))}hide(t,i){this._updateVisibility(t,i,!1)}show(t,i){this._updateVisibility(t,i,!0)}_destroyDatasetMeta(t){let i=this._metasets[t];i&&i.controller&&i.controller._destroy(),delete this._metasets[t]}_stop(){let t,i;for(this.stop(),fe.remove(this),t=0,i=this.data.datasets.length;t<i;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:i}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Ks(t,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete ss[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,i=this.platform,s=(o,r)=>{i.addEventListener(this,o,r),t[o]=r},a=(o,r,l)=>{o.offsetX=r,o.offsetY=l,this._eventHandler(o)};q(this.options.events,o=>s(o,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,i=this.platform,s=(c,d)=>{i.addEventListener(this,c,d),t[c]=d},a=(c,d)=>{t[c]&&(i.removeEventListener(this,c,d),delete t[c])},o=(c,d)=>{this.canvas&&this.resize(c,d)},r,l=()=>{a("attach",l),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,a("resize",o),this._stop(),this._resize(0,0),s("attach",l)},i.isAttached(this.canvas)?l():r()}unbindEvents(){q(this._listeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._listeners={},q(this._responsiveListeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,i,s){let a=s?"set":"remove",o,r,l,c;for(i==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+a+"DatasetHoverStyle"]()),l=0,c=t.length;l<c;++l){r=t[l];let d=r&&this.getDatasetMeta(r.datasetIndex).controller;d&&d[a+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let i=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{let l=this.getDatasetMeta(o);if(!l)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:l.data[r],index:r}});!Oi(s,i)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,i))}notifyPlugins(t,i,s){return this._plugins.notify(this,t,i,s)}isPluginEnabled(t){return this._plugins._cache.filter(i=>i.plugin.id===t).length===1}_updateHoverStyles(t,i,s){let a=this.options.hover,o=(c,d)=>c.filter(h=>!d.some(m=>h.datasetIndex===m.datasetIndex&&h.index===m.index)),r=o(i,t),l=s?t:o(t,i);r.length&&this.updateHoverStyle(r,a.mode,!1),l.length&&a.mode&&this.updateHoverStyle(l,a.mode,!0)}_eventHandler(t,i){let s={event:t,replay:i,cancelable:!0,inChartArea:this.isPointInArea(t)},a=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,a)===!1)return;let o=this._handleEvent(t,i,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,a),(o||s.changed)&&this.render(),this}_handleEvent(t,i,s){let{_active:a=[],options:o}=this,r=i,l=this._getActiveElements(t,a,s,r),c=Er(t),d=ip(t,this._lastEvent,s,c);s&&(this._lastEvent=null,et(o.onHover,[t,l,this],this),c&&et(o.onClick,[t,l,this],this));let h=!Oi(l,a);return(h||i)&&(this._active=l,this._updateHoverStyles(l,a,i)),this._lastEvent=d,h}_getActiveElements(t,i,s,a){if(t.type==="mouseout")return[];if(!s)return i;let o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,a)}}return e})();function Rl(){return q(Qi.instances,e=>e._plugins.invalidate())}function np(e,n,t){let{startAngle:i,x:s,y:a,outerRadius:o,innerRadius:r,options:l}=n,{borderWidth:c,borderJoinStyle:d}=l,h=Math.min(c/o,xt(i-t));if(e.beginPath(),e.arc(s,a,o-c/2,i+h/2,t-h/2),r>0){let m=Math.min(c/r,xt(i-t));e.arc(s,a,r+c/2,t-m/2,i+m/2,!0)}else{let m=Math.min(c/2,o*xt(i-t));if(d==="round")e.arc(s,a,m,t-Q/2,i+Q/2,!0);else if(d==="bevel"){let p=2*m*m,f=-p*Math.cos(t+Q/2)+s,u=-p*Math.sin(t+Q/2)+a,g=p*Math.cos(i+Q/2)+s,b=p*Math.sin(i+Q/2)+a;e.lineTo(f,u),e.lineTo(g,b)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function sp(e,n,t){let{startAngle:i,pixelMargin:s,x:a,y:o,outerRadius:r,innerRadius:l}=n,c=s/r;e.beginPath(),e.arc(a,o,r,i-c,t+c),l>s?(c=s/l,e.arc(a,o,l,t+c,i-c,!0)):e.arc(a,o,s,t+mt,i-mt),e.closePath(),e.clip()}function ap(e){return Un(e,["outerStart","outerEnd","innerStart","innerEnd"])}function op(e,n,t,i){let s=ap(e.options.borderRadius),a=(t-n)/2,o=Math.min(a,i*n/2),r=l=>{let c=(t-Math.min(a,l))*i/2;return _t(l,0,Math.min(a,c))};return{outerStart:r(s.outerStart),outerEnd:r(s.outerEnd),innerStart:_t(s.innerStart,0,o),innerEnd:_t(s.innerEnd,0,o)}}function bi(e,n,t,i){return{x:t+e*Math.cos(n),y:i+e*Math.sin(n)}}function ls(e,n,t,i,s,a){let{x:o,y:r,startAngle:l,pixelMargin:c,innerRadius:d}=n,h=Math.max(n.outerRadius+i+t-c,0),m=d>0?d+i+t+c:0,p=0,f=s-l;if(i){let X=d>0?d-i:0,at=h>0?h-i:0,pt=(X+at)/2,Ut=pt!==0?f*pt/(pt+i):f;p=(f-Ut)/2}let u=Math.max(.001,f*h-t/Q)/h,g=(f-u)/2,b=l+g+p,v=s-g-p,{outerStart:C,outerEnd:M,innerStart:w,innerEnd:S}=op(n,m,h,v-b),E=h-C,D=h-M,T=b+C/E,L=v-M/D,A=m+w,j=m+S,yt=b+w/A,Lt=v-S/j;if(e.beginPath(),a){let X=(T+L)/2;if(e.arc(o,r,h,T,X),e.arc(o,r,h,X,L),M>0){let Ct=bi(D,L,o,r);e.arc(Ct.x,Ct.y,M,L,v+mt)}let at=bi(j,v,o,r);if(e.lineTo(at.x,at.y),S>0){let Ct=bi(j,Lt,o,r);e.arc(Ct.x,Ct.y,S,v+mt,Lt+Math.PI)}let pt=(v-S/m+(b+w/m))/2;if(e.arc(o,r,m,v-S/m,pt,!0),e.arc(o,r,m,pt,b+w/m,!0),w>0){let Ct=bi(A,yt,o,r);e.arc(Ct.x,Ct.y,w,yt+Math.PI,b-mt)}let Ut=bi(E,b,o,r);if(e.lineTo(Ut.x,Ut.y),C>0){let Ct=bi(E,T,o,r);e.arc(Ct.x,Ct.y,C,b-mt,T)}}else{e.moveTo(o,r);let X=Math.cos(T)*h+o,at=Math.sin(T)*h+r;e.lineTo(X,at);let pt=Math.cos(L)*h+o,Ut=Math.sin(L)*h+r;e.lineTo(pt,Ut)}e.closePath()}function rp(e,n,t,i,s){let{fullCircles:a,startAngle:o,circumference:r}=n,l=n.endAngle;if(a){ls(e,n,t,i,l,s);for(let c=0;c<a;++c)e.fill();isNaN(r)||(l=o+(r%nt||nt))}return ls(e,n,t,i,l,s),e.fill(),l}function lp(e,n,t,i,s){let{fullCircles:a,startAngle:o,circumference:r,options:l}=n,{borderWidth:c,borderJoinStyle:d,borderDash:h,borderDashOffset:m,borderRadius:p}=l,f=l.borderAlign==="inner";if(!c)return;e.setLineDash(h||[]),e.lineDashOffset=m,f?(e.lineWidth=c*2,e.lineJoin=d||"round"):(e.lineWidth=c,e.lineJoin=d||"bevel");let u=n.endAngle;if(a){ls(e,n,t,i,u,s);for(let g=0;g<a;++g)e.stroke();isNaN(r)||(u=o+(r%nt||nt))}f&&sp(e,n,u),l.selfJoin&&u-o>=Q&&p===0&&d!=="miter"&&np(e,n,u),a||(ls(e,n,t,i,u,s),e.stroke())}var Oa=class extends Yt{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:n=>n!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(n){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,t,i){let s=this.getProps(["x","y"],i),{angle:a,distance:o}=js(s,{x:n,y:t}),{startAngle:r,endAngle:l,innerRadius:c,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,p=O(h,l-r),f=ui(a,r,l)&&r!==l,u=p>=nt||f,g=ae(o,c+m,d+m);return u&&g}getCenterPoint(n){let{x:t,y:i,startAngle:s,endAngle:a,innerRadius:o,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:l,spacing:c}=this.options,d=(s+a)/2,h=(o+r+c+l)/2;return{x:t+Math.cos(d)*h,y:i+Math.sin(d)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){let{options:t,circumference:i}=this,s=(t.offset||0)/4,a=(t.spacing||0)/2,o=t.circular;if(this.pixelMargin=t.borderAlign==="inner"?.33:0,this.fullCircles=i>nt?Math.floor(i/nt):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();let r=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(r)*s,Math.sin(r)*s);let l=1-Math.sin(Math.min(Q,i||0)),c=s*l;n.fillStyle=t.backgroundColor,n.strokeStyle=t.borderColor,rp(n,this,c,a,o),lp(n,this,c,a,o),n.restore()}};function pc(e,n,t=n){e.lineCap=O(t.borderCapStyle,n.borderCapStyle),e.setLineDash(O(t.borderDash,n.borderDash)),e.lineDashOffset=O(t.borderDashOffset,n.borderDashOffset),e.lineJoin=O(t.borderJoinStyle,n.borderJoinStyle),e.lineWidth=O(t.borderWidth,n.borderWidth),e.strokeStyle=O(t.borderColor,n.borderColor)}function cp(e,n,t){e.lineTo(t.x,t.y)}function dp(e){return e.stepped?jr:e.tension||e.cubicInterpolationMode==="monotone"?Wr:cp}function uc(e,n,t={}){let i=e.length,{start:s=0,end:a=i-1}=t,{start:o,end:r}=n,l=Math.max(s,o),c=Math.min(a,r),d=s<o&&a<o||s>r&&a>r;return{count:i,start:l,loop:n.loop,ilen:c<l&&!d?i+c-l:c-l}}function hp(e,n,t,i){let{points:s,options:a}=n,{count:o,start:r,loop:l,ilen:c}=uc(s,t,i),d=dp(a),{move:h=!0,reverse:m}=i||{},p,f,u;for(p=0;p<=c;++p)f=s[(r+(m?c-p:p))%o],!f.skip&&(h?(e.moveTo(f.x,f.y),h=!1):d(e,u,f,m,a.stepped),u=f);return l&&(f=s[(r+(m?c:0))%o],d(e,u,f,m,a.stepped)),!!l}function mp(e,n,t,i){let s=n.points,{count:a,start:o,ilen:r}=uc(s,t,i),{move:l=!0,reverse:c}=i||{},d=0,h=0,m,p,f,u,g,b,v=M=>(o+(c?r-M:M))%a,C=()=>{u!==g&&(e.lineTo(d,g),e.lineTo(d,u),e.lineTo(d,b))};for(l&&(p=s[v(0)],e.moveTo(p.x,p.y)),m=0;m<=r;++m){if(p=s[v(m)],p.skip)continue;let M=p.x,w=p.y,S=M|0;S===f?(w<u?u=w:w>g&&(g=w),d=(h*d+M)/++h):(C(),e.lineTo(M,w),f=S,h=0,u=g=w),b=w}C()}function Aa(e){let n=e.options,t=n.borderDash&&n.borderDash.length;return!e._decimated&&!e._loop&&!n.tension&&n.cubicInterpolationMode!=="monotone"&&!n.stepped&&!t?mp:hp}function pp(e){return e.stepped?Zr:e.tension||e.cubicInterpolationMode==="monotone"?Jr:ke}function up(e,n,t,i){let s=n._path;s||(s=n._path=new Path2D,n.path(s,t,i)&&s.closePath()),pc(e,n.options),e.stroke(s)}function fp(e,n,t,i){let{segments:s,options:a}=n,o=Aa(n);for(let r of s)pc(e,a,r.style),e.beginPath(),o(e,n,r,{start:t,end:t+i-1})&&e.closePath(),e.stroke()}var gp=typeof Path2D=="function";function _p(e,n,t,i){gp&&!n.options.segment?up(e,n,t,i):fp(e,n,t,i)}var hs=(()=>{class e extends Yt{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,i){let s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){let a=s.spanGaps?this._loop:this._fullLoop;qr(this._points,s,t,a,i),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=el(this,this.options.segment))}first(){let t=this.segments,i=this.points;return t.length&&i[t[0].start]}last(){let t=this.segments,i=this.points,s=t.length;return s&&i[t[s-1].end]}interpolate(t,i){let s=this.options,a=t[i],o=this.points,r=ca(this,{property:i,start:a,end:a});if(!r.length)return;let l=[],c=pp(s),d,h;for(d=0,h=r.length;d<h;++d){let{start:m,end:p}=r[d],f=o[m],u=o[p];if(f===u){l.push(f);continue}let g=Math.abs((a-f[i])/(u[i]-f[i])),b=c(f,u,g,s.stepped);b[i]=t[i],l.push(b)}return l.length===1?l[0]:l}pathSegment(t,i,s){return Aa(this)(t,this,i,s)}path(t,i,s){let a=this.segments,o=Aa(this),r=this._loop;i=i||0,s=s||this.points.length-i;for(let l of a)r&=o(t,this,l,{start:i,end:i+s-1});return!!r}draw(t,i,s,a){let o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),_p(t,this,s,a),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}return e})();function El(e,n,t,i){let s=e.options,{[t]:a}=e.getProps([t],i);return Math.abs(n-a)<s.radius+s.hitRadius}var bp=(()=>{class e extends Yt{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,i,s){let a=this.options,{x:o,y:r}=this.getProps(["x","y"],s);return Math.pow(t-o,2)+Math.pow(i-r,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(t,i){return El(this,t,"x",i)}inYRange(t,i){return El(this,t,"y",i)}getCenterPoint(t){let{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}size(t){t=t||this.options||{};let i=t.radius||0;i=Math.max(i,i&&t.hoverRadius||0);let s=i&&t.borderWidth||0;return(i+s)*2}draw(t,i){let s=this.options;this.skip||s.radius<.1||!ne(this,i,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,$n(t,s,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}}return e})();function fc(e,n){let{x:t,y:i,base:s,width:a,height:o}=e.getProps(["x","y","base","width","height"],n),r,l,c,d,h;return e.horizontal?(h=o/2,r=Math.min(t,s),l=Math.max(t,s),c=i-h,d=i+h):(h=a/2,r=t-h,l=t+h,c=Math.min(i,s),d=Math.max(i,s)),{left:r,top:c,right:l,bottom:d}}function Re(e,n,t,i){return e?0:_t(n,t,i)}function vp(e,n,t){let i=e.options.borderWidth,s=e.borderSkipped,a=Js(i);return{t:Re(s.top,a.top,0,t),r:Re(s.right,a.right,0,n),b:Re(s.bottom,a.bottom,0,t),l:Re(s.left,a.left,0,n)}}function yp(e,n,t){let{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),s=e.options.borderRadius,a=De(s),o=Math.min(n,t),r=e.borderSkipped,l=i||V(s);return{topLeft:Re(!l||r.top||r.left,a.topLeft,0,o),topRight:Re(!l||r.top||r.right,a.topRight,0,o),bottomLeft:Re(!l||r.bottom||r.left,a.bottomLeft,0,o),bottomRight:Re(!l||r.bottom||r.right,a.bottomRight,0,o)}}function xp(e){let n=fc(e),t=n.right-n.left,i=n.bottom-n.top,s=vp(e,t/2,i/2),a=yp(e,t/2,i/2);return{outer:{x:n.left,y:n.top,w:t,h:i,radius:a},inner:{x:n.left+s.l,y:n.top+s.t,w:t-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,a.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(s.b,s.r))}}}}function ba(e,n,t,i){let s=n===null,a=t===null,r=e&&!(s&&a)&&fc(e,i);return r&&(s||ae(n,r.left,r.right))&&(a||ae(t,r.top,r.bottom))}function kp(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function wp(e,n){e.rect(n.x,n.y,n.w,n.h)}function va(e,n,t={}){let i=e.x!==t.x?-n:0,s=e.y!==t.y?-n:0,a=(e.x+e.w!==t.x+t.w?n:0)-i,o=(e.y+e.h!==t.y+t.h?n:0)-s;return{x:e.x+i,y:e.y+s,w:e.w+a,h:e.h+o,radius:e.radius}}var Pa=class extends Yt{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(n){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,n&&Object.assign(this,n)}draw(n){let{inflateAmount:t,options:{borderColor:i,backgroundColor:s}}=this,{inner:a,outer:o}=xp(this),r=kp(o.radius)?gi:wp;n.save(),(o.w!==a.w||o.h!==a.h)&&(n.beginPath(),r(n,va(o,t,a)),n.clip(),r(n,va(a,-t,o)),n.fillStyle=i,n.fill("evenodd")),n.beginPath(),r(n,va(a,t)),n.fillStyle=s,n.fill(),n.restore()}inRange(n,t,i){return ba(this,n,t,i)}inXRange(n,t){return ba(this,n,null,t)}inYRange(n,t){return ba(this,null,n,t)}getCenterPoint(n){let{x:t,y:i,base:s,horizontal:a}=this.getProps(["x","y","base","horizontal"],n);return{x:a?(t+s)/2:t,y:a?i:(i+s)/2}}getRange(n){return n==="x"?this.width/2:this.height/2}},Cp=Object.freeze({__proto__:null,ArcElement:Oa,BarElement:Pa,LineElement:hs,PointElement:bp}),La=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Tl=La.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function gc(e){return La[e%La.length]}function _c(e){return Tl[e%Tl.length]}function Sp(e,n){return e.borderColor=gc(n),e.backgroundColor=_c(n),++n}function Mp(e,n){return e.backgroundColor=e.data.map(()=>gc(n++)),n}function Dp(e,n){return e.backgroundColor=e.data.map(()=>_c(n++)),n}function Ip(e){let n=0;return(t,i)=>{let s=e.getDatasetMeta(i).controller;s instanceof Wa?n=Mp(t,n):s instanceof sc?n=Dp(t,n):s&&(n=Sp(t,n))}}function Ol(e){let n;for(n in e)if(e[n].borderColor||e[n].backgroundColor)return!0;return!1}function Rp(e){return e&&(e.borderColor||e.backgroundColor)}function Ep(){return st.borderColor!=="rgba(0,0,0,0.1)"||st.backgroundColor!=="rgba(0,0,0,0.1)"}var Tp={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,n,t){if(!t.enabled)return;let{data:{datasets:i},options:s}=e.config,{elements:a}=s,o=Ol(i)||Rp(s)||a&&Ol(a)||Ep();if(!t.forceOverride&&o)return;let r=Ip(e);i.forEach(r)}};function Op(e,n,t,i,s){let a=s.samples||i;if(a>=t)return e.slice(n,n+t);let o=[],r=(t-2)/(a-2),l=0,c=n+t-1,d=n,h,m,p,f,u;for(o[l++]=e[d],h=0;h<a-2;h++){let g=0,b=0,v,C=Math.floor((h+1)*r)+1+n,M=Math.min(Math.floor((h+2)*r)+1,t)+n,w=M-C;for(v=C;v<M;v++)g+=e[v].x,b+=e[v].y;g/=w,b/=w;let S=Math.floor(h*r)+1+n,E=Math.min(Math.floor((h+1)*r)+1,t)+n,{x:D,y:T}=e[d];for(p=f=-1,v=S;v<E;v++)f=.5*Math.abs((D-g)*(e[v].y-T)-(D-e[v].x)*(b-T)),f>p&&(p=f,m=e[v],u=v);o[l++]=m,d=u}return o[l++]=e[c],o}function Ap(e,n,t,i){let s=0,a=0,o,r,l,c,d,h,m,p,f,u,g=[],b=n+t-1,v=e[n].x,M=e[b].x-v;for(o=n;o<n+t;++o){r=e[o],l=(r.x-v)/M*i,c=r.y;let w=l|0;if(w===d)c<f?(f=c,h=o):c>u&&(u=c,m=o),s=(a*s+r.x)/++a;else{let S=o-1;if(!H(h)&&!H(m)){let E=Math.min(h,m),D=Math.max(h,m);E!==p&&E!==S&&g.push(Ji(Zi({},e[E]),{x:s})),D!==p&&D!==S&&g.push(Ji(Zi({},e[D]),{x:s}))}o>0&&S!==p&&g.push(e[S]),g.push(r),d=w,a=0,f=u=c,h=m=p=o}}return g}function bc(e){if(e._decimated){let n=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:n})}}function Al(e){e.data.datasets.forEach(n=>{bc(n)})}function Pp(e,n){let t=n.length,i=0,s,{iScale:a}=e,{min:o,max:r,minDefined:l,maxDefined:c}=a.getUserBounds();return l&&(i=_t(ie(n,a.axis,o).lo,0,t-1)),c?s=_t(ie(n,a.axis,r).hi+1,i,t)-i:s=t-i,{start:i,count:s}}var Lp={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,n,t)=>{if(!t.enabled){Al(e);return}let i=e.width;e.data.datasets.forEach((s,a)=>{let{_data:o,indexAxis:r}=s,l=e.getDatasetMeta(a),c=o||s.data;if(_i([r,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;let d=e.scales[l.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:h,count:m}=Pp(l,c),p=t.threshold||4*i;if(m<=p){bc(s);return}H(o)&&(s._data=c,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(u){this._data=u}}));let f;switch(t.algorithm){case"lttb":f=Op(c,h,m,i,t);break;case"min-max":f=Ap(c,h,m,i);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}s._decimated=f})},destroy(e){Al(e)}};function Fp(e,n,t){let i=e.segments,s=e.points,a=n.points,o=[];for(let r of i){let{start:l,end:c}=r;c=ms(l,c,s);let d=Fa(t,s[l],s[c],r.loop);if(!n.segments){o.push({source:r,target:d,start:s[l],end:s[c]});continue}let h=ca(n,d);for(let m of h){let p=Fa(t,a[m.start],a[m.end],m.loop),f=la(r,s,p);for(let u of f)o.push({source:u,target:m,start:{[t]:Pl(d,p,"start",Math.max)},end:{[t]:Pl(d,p,"end",Math.min)}})}}return o}function Fa(e,n,t,i){if(i)return;let s=n[e],a=t[e];return e==="angle"&&(s=xt(s),a=xt(a)),{property:e,start:s,end:a}}function zp(e,n){let{x:t=null,y:i=null}=e||{},s=n.points,a=[];return n.segments.forEach(({start:o,end:r})=>{r=ms(o,r,s);let l=s[o],c=s[r];i!==null?(a.push({x:l.x,y:i}),a.push({x:c.x,y:i})):t!==null&&(a.push({x:t,y:l.y}),a.push({x:t,y:c.y}))}),a}function ms(e,n,t){for(;n>e;n--){let i=t[n];if(!isNaN(i.x)&&!isNaN(i.y))break}return n}function Pl(e,n,t,i){return e&&n?i(e[t],n[t]):e?e[t]:n?n[t]:0}function vc(e,n){let t=[],i=!1;return it(e)?(i=!0,t=e):t=zp(e,n),t.length?new hs({points:t,options:{tension:0},_loop:i,_fullLoop:i}):null}function Ll(e){return e&&e.fill!==!1}function Bp(e,n,t){let s=e[n].fill,a=[n],o;if(!t)return s;for(;s!==!1&&a.indexOf(s)===-1;){if(!ct(s))return s;if(o=e[s],!o)return!1;if(o.visible)return s;a.push(s),s=o.fill}return!1}function Np(e,n,t){let i=Wp(e);if(V(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return ct(s)&&Math.floor(s)===s?Hp(i[0],n,s,t):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Hp(e,n,t,i){return(e==="-"||e==="+")&&(t=n+t),t===n||t<0||t>=i?!1:t}function Vp(e,n){let t=null;return e==="start"?t=n.bottom:e==="end"?t=n.top:V(e)?t=n.getPixelForValue(e.value):n.getBasePixel&&(t=n.getBasePixel()),t}function jp(e,n,t){let i;return e==="start"?i=t:e==="end"?i=n.options.reverse?n.min:n.max:V(e)?i=e.value:i=n.getBaseValue(),i}function Wp(e){let n=e.options,t=n.fill,i=O(t&&t.target,t);return i===void 0&&(i=!!n.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Gp(e){let{scale:n,index:t,line:i}=e,s=[],a=i.segments,o=i.points,r=$p(n,t);r.push(vc({x:null,y:n.bottom},i));for(let l=0;l<a.length;l++){let c=a[l];for(let d=c.start;d<=c.end;d++)Up(s,o[d],r)}return new hs({points:s,options:{}})}function $p(e,n){let t=[],i=e.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){let a=i[s];if(a.index===n)break;a.hidden||t.unshift(a.dataset)}return t}function Up(e,n,t){let i=[];for(let s=0;s<t.length;s++){let a=t[s],{first:o,last:r,point:l}=Qp(a,n,"x");if(!(!l||o&&r)){if(o)i.unshift(l);else if(e.push(l),!r)break}}e.push(...i)}function Qp(e,n,t){let i=e.interpolate(n,t);if(!i)return{};let s=i[t],a=e.segments,o=e.points,r=!1,l=!1;for(let c=0;c<a.length;c++){let d=a[c],h=o[d.start][t],m=o[d.end][t];if(ae(s,h,m)){r=s===h,l=s===m;break}}return{first:r,last:l,point:i}}var cs=class{constructor(n){this.x=n.x,this.y=n.y,this.radius=n.radius}pathSegment(n,t,i){let{x:s,y:a,radius:o}=this;return t=t||{start:0,end:nt},n.arc(s,a,o,t.end,t.start,!0),!i.bounds}interpolate(n){let{x:t,y:i,radius:s}=this,a=n.angle;return{x:t+Math.cos(a)*s,y:i+Math.sin(a)*s,angle:a}}};function Yp(e){let{chart:n,fill:t,line:i}=e;if(ct(t))return qp(n,t);if(t==="stack")return Gp(e);if(t==="shape")return!0;let s=Xp(e);return s instanceof cs?s:vc(s,i)}function qp(e,n){let t=e.getDatasetMeta(n);return t&&e.isDatasetVisible(n)?t.dataset:null}function Xp(e){return(e.scale||{}).getPointPositionForValue?Zp(e):Kp(e)}function Kp(e){let{scale:n={},fill:t}=e,i=Vp(t,n);if(ct(i)){let s=n.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function Zp(e){let{scale:n,fill:t}=e,i=n.options,s=n.getLabels().length,a=i.reverse?n.max:n.min,o=jp(t,n,a),r=[];if(i.grid.circular){let l=n.getPointPositionForValue(0,a);return new cs({x:l.x,y:l.y,radius:n.getDistanceFromCenterForValue(o)})}for(let l=0;l<s;++l)r.push(n.getPointPositionForValue(l,o));return r}function ya(e,n,t){let i=Yp(n),{chart:s,index:a,line:o,scale:r,axis:l}=n,c=o.options,d=c.fill,h=c.backgroundColor,{above:m=h,below:p=h}=d||{},f=s.getDatasetMeta(a),u=da(s,f);i&&o.points.length&&(Pi(e,t),Jp(e,{line:o,target:i,above:m,below:p,area:t,scale:r,axis:l,clip:u}),Li(e))}function Jp(e,n){let{line:t,target:i,above:s,below:a,area:o,scale:r,clip:l}=n,c=t._loop?"angle":n.axis;e.save();let d=a;a!==s&&(c==="x"?(Fl(e,i,o.top),xa(e,{line:t,target:i,color:s,scale:r,property:c,clip:l}),e.restore(),e.save(),Fl(e,i,o.bottom)):c==="y"&&(zl(e,i,o.left),xa(e,{line:t,target:i,color:a,scale:r,property:c,clip:l}),e.restore(),e.save(),zl(e,i,o.right),d=s)),xa(e,{line:t,target:i,color:d,scale:r,property:c,clip:l}),e.restore()}function Fl(e,n,t){let{segments:i,points:s}=n,a=!0,o=!1;e.beginPath();for(let r of i){let{start:l,end:c}=r,d=s[l],h=s[ms(l,c,s)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(d.x,t),e.lineTo(d.x,d.y)),o=!!n.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(h.x,t)}e.lineTo(n.first().x,t),e.closePath(),e.clip()}function zl(e,n,t){let{segments:i,points:s}=n,a=!0,o=!1;e.beginPath();for(let r of i){let{start:l,end:c}=r,d=s[l],h=s[ms(l,c,s)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(t,d.y),e.lineTo(d.x,d.y)),o=!!n.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(t,h.y)}e.lineTo(t,n.first().y),e.closePath(),e.clip()}function xa(e,n){let{line:t,target:i,property:s,color:a,scale:o,clip:r}=n,l=Fp(t,i,s);for(let{source:c,target:d,start:h,end:m}of l){let{style:{backgroundColor:p=a}={}}=c,f=i!==!0;e.save(),e.fillStyle=p,tu(e,o,r,f&&Fa(s,h,m)),e.beginPath();let u=!!t.pathSegment(e,c),g;if(f){u?e.closePath():Bl(e,i,m,s);let b=!!i.pathSegment(e,d,{move:u,reverse:!0});g=u&&b,g||Bl(e,i,h,s)}e.closePath(),e.fill(g?"evenodd":"nonzero"),e.restore()}}function tu(e,n,t,i){let s=n.chart.chartArea,{property:a,start:o,end:r}=i||{};if(a==="x"||a==="y"){let l,c,d,h;a==="x"?(l=o,c=s.top,d=r,h=s.bottom):(l=s.left,c=o,d=s.right,h=r),e.beginPath(),t&&(l=Math.max(l,t.left),d=Math.min(d,t.right),c=Math.max(c,t.top),h=Math.min(h,t.bottom)),e.rect(l,c,d-l,h-c),e.clip()}}function Bl(e,n,t,i){let s=n.interpolate(t,i);s&&e.lineTo(s.x,s.y)}var eu={id:"filler",afterDatasetsUpdate(e,n,t){let i=(e.data.datasets||[]).length,s=[],a,o,r,l;for(o=0;o<i;++o)a=e.getDatasetMeta(o),r=a.dataset,l=null,r&&r.options&&r instanceof hs&&(l={visible:e.isDatasetVisible(o),index:o,fill:Np(r,o,i),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:r}),a.$filler=l,s.push(l);for(o=0;o<i;++o)l=s[o],!(!l||l.fill===!1)&&(l.fill=Bp(s,o,t.propagate))},beforeDraw(e,n,t){let i=t.drawTime==="beforeDraw",s=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let o=s.length-1;o>=0;--o){let r=s[o].$filler;r&&(r.line.updateControlPoints(a,r.axis),i&&r.fill&&ya(e.ctx,r,a))}},beforeDatasetsDraw(e,n,t){if(t.drawTime!=="beforeDatasetsDraw")return;let i=e.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){let a=i[s].$filler;Ll(a)&&ya(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,n,t){let i=n.meta.$filler;!Ll(i)||t.drawTime!=="beforeDatasetDraw"||ya(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Nl=(e,n)=>{let{boxHeight:t=n,boxWidth:i=n}=e;return e.usePointStyle&&(t=Math.min(t,n),i=e.pointStyleWidth||Math.min(i,n)),{boxWidth:i,boxHeight:t,itemHeight:Math.max(n,t)}},iu=(e,n)=>e!==null&&n!==null&&e.datasetIndex===n.datasetIndex&&e.index===n.index,ds=class extends Yt{constructor(n){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,t,i){this.maxWidth=n,this.maxHeight=t,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let n=this.options.labels||{},t=et(n.generateLabels,[this.chart],this)||[];n.filter&&(t=t.filter(i=>n.filter(i,this.chart.data))),n.sort&&(t=t.sort((i,s)=>n.sort(i,s,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:n,ctx:t}=this;if(!n.display){this.width=this.height=0;return}let i=n.labels,s=ft(i.font),a=s.size,o=this._computeTitleHeight(),{boxWidth:r,itemHeight:l}=Nl(i,a),c,d;t.font=s.string,this.isHorizontal()?(c=this.maxWidth,d=this._fitRows(o,a,r,l)+10):(d=this.maxHeight,c=this._fitCols(o,s,r,l)+10),this.width=Math.min(c,n.maxWidth||this.maxWidth),this.height=Math.min(d,n.maxHeight||this.maxHeight)}_fitRows(n,t,i,s){let{ctx:a,maxWidth:o,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],d=s+r,h=n;a.textAlign="left",a.textBaseline="middle";let m=-1,p=-d;return this.legendItems.forEach((f,u)=>{let g=i+t/2+a.measureText(f.text).width;(u===0||c[c.length-1]+g+2*r>o)&&(h+=d,c[c.length-(u>0?0:1)]=0,p+=d,m++),l[u]={left:0,top:p,row:m,width:g,height:s},c[c.length-1]+=g+r}),h}_fitCols(n,t,i,s){let{ctx:a,maxHeight:o,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],d=o-n,h=r,m=0,p=0,f=0,u=0;return this.legendItems.forEach((g,b)=>{let{itemWidth:v,itemHeight:C}=nu(i,t,a,g,s);b>0&&p+C+2*r>d&&(h+=m+r,c.push({width:m,height:p}),f+=m+r,u++,m=p=0),l[b]={left:f,top:p,col:u,width:v,height:C},m=Math.max(m,v),p+=C+r}),h+=m,c.push({width:m,height:p}),h}adjustHitBoxes(){if(!this.options.display)return;let n=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:i,labels:{padding:s},rtl:a}}=this,o=We(a,this.left,this.width);if(this.isHorizontal()){let r=0,l=kt(i,this.left+s,this.right-this.lineWidths[r]);for(let c of t)r!==c.row&&(r=c.row,l=kt(i,this.left+s,this.right-this.lineWidths[r])),c.top+=this.top+n+s,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+s}else{let r=0,l=kt(i,this.top+n+s,this.bottom-this.columnSizes[r].height);for(let c of t)c.col!==r&&(r=c.col,l=kt(i,this.top+n+s,this.bottom-this.columnSizes[r].height)),c.top=l,c.left+=this.left+s,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let n=this.ctx;Pi(n,this),this._draw(),Li(n)}}_draw(){let{options:n,columnSizes:t,lineWidths:i,ctx:s}=this,{align:a,labels:o}=n,r=st.color,l=We(n.rtl,this.left,this.width),c=ft(o.font),{padding:d}=o,h=c.size,m=h/2,p;this.drawTitle(),s.textAlign=l.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=c.string;let{boxWidth:f,boxHeight:u,itemHeight:g}=Nl(o,h),b=function(S,E,D){if(isNaN(f)||f<=0||isNaN(u)||u<0)return;s.save();let T=O(D.lineWidth,1);if(s.fillStyle=O(D.fillStyle,r),s.lineCap=O(D.lineCap,"butt"),s.lineDashOffset=O(D.lineDashOffset,0),s.lineJoin=O(D.lineJoin,"miter"),s.lineWidth=T,s.strokeStyle=O(D.strokeStyle,r),s.setLineDash(O(D.lineDash,[])),o.usePointStyle){let L={radius:u*Math.SQRT2/2,pointStyle:D.pointStyle,rotation:D.rotation,borderWidth:T},A=l.xPlus(S,f/2),j=E+m;Zs(s,L,A,j,o.pointStyleWidth&&f)}else{let L=E+Math.max((h-u)/2,0),A=l.leftForLtr(S,f),j=De(D.borderRadius);s.beginPath(),Object.values(j).some(yt=>yt!==0)?gi(s,{x:A,y:L,w:f,h:u,radius:j}):s.rect(A,L,f,u),s.fill(),T!==0&&s.stroke()}s.restore()},v=function(S,E,D){Me(s,D.text,S,E+g/2,c,{strikethrough:D.hidden,textAlign:l.textAlign(D.textAlign)})},C=this.isHorizontal(),M=this._computeTitleHeight();C?p={x:kt(a,this.left+d,this.right-i[0]),y:this.top+d+M,line:0}:p={x:this.left+d,y:kt(a,this.top+M+d,this.bottom-t[0].height),line:0},oa(this.ctx,n.textDirection);let w=g+d;this.legendItems.forEach((S,E)=>{s.strokeStyle=S.fontColor,s.fillStyle=S.fontColor;let D=s.measureText(S.text).width,T=l.textAlign(S.textAlign||(S.textAlign=o.textAlign)),L=f+m+D,A=p.x,j=p.y;l.setWidth(this.width),C?E>0&&A+L+d>this.right&&(j=p.y+=w,p.line++,A=p.x=kt(a,this.left+d,this.right-i[p.line])):E>0&&j+w>this.bottom&&(A=p.x=A+t[p.line].width+d,p.line++,j=p.y=kt(a,this.top+M+d,this.bottom-t[p.line].height));let yt=l.x(A);if(b(yt,j,S),A=Nr(T,A+f+m,C?A+L:this.right,n.rtl),v(l.x(A),j,S),C)p.x+=L+d;else if(typeof S.text!="string"){let Lt=c.lineHeight;p.y+=yc(S,Lt)+d}else p.y+=w}),ra(this.ctx,n.textDirection)}drawTitle(){let n=this.options,t=n.title,i=ft(t.font),s=wt(t.padding);if(!t.display)return;let a=We(n.rtl,this.left,this.width),o=this.ctx,r=t.position,l=i.size/2,c=s.top+l,d,h=this.left,m=this.width;if(this.isHorizontal())m=Math.max(...this.lineWidths),d=this.top+c,h=kt(n.align,h,this.right-m);else{let f=this.columnSizes.reduce((u,g)=>Math.max(u,g.height),0);d=c+kt(n.align,this.top,this.bottom-f-n.labels.padding-this._computeTitleHeight())}let p=kt(r,h,h+m);o.textAlign=a.textAlign(Wn(r)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=i.string,Me(o,t.text,p,d,i)}_computeTitleHeight(){let n=this.options.title,t=ft(n.font),i=wt(n.padding);return n.display?t.lineHeight+i.height:0}_getLegendItemAt(n,t){let i,s,a;if(ae(n,this.left,this.right)&&ae(t,this.top,this.bottom)){for(a=this.legendHitBoxes,i=0;i<a.length;++i)if(s=a[i],ae(n,s.left,s.left+s.width)&&ae(t,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(n){let t=this.options;if(!ou(n.type,t))return;let i=this._getLegendItemAt(n.x,n.y);if(n.type==="mousemove"||n.type==="mouseout"){let s=this._hoveredItem,a=iu(s,i);s&&!a&&et(t.onLeave,[n,s,this],this),this._hoveredItem=i,i&&!a&&et(t.onHover,[n,i,this],this)}else i&&et(t.onClick,[n,i,this],this)}};function nu(e,n,t,i,s){let a=su(i,e,n,t),o=au(s,i,n.lineHeight);return{itemWidth:a,itemHeight:o}}function su(e,n,t,i){let s=e.text;return s&&typeof s!="string"&&(s=s.reduce((a,o)=>a.length>o.length?a:o)),n+t.size/2+i.measureText(s).width}function au(e,n,t){let i=e;return typeof n.text!="string"&&(i=yc(n,t)),i}function yc(e,n){let t=e.text?e.text.length:0;return n*t}function ou(e,n){return!!((e==="mousemove"||e==="mouseout")&&(n.onHover||n.onLeave)||n.onClick&&(e==="click"||e==="mouseup"))}var ru={id:"legend",_element:ds,start(e,n,t){let i=e.legend=new ds({ctx:e.ctx,options:t,chart:e});Et.configure(e,i,t),Et.addBox(e,i)},stop(e){Et.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,n,t){let i=e.legend;Et.configure(e,i,t),i.options=t},afterUpdate(e){let n=e.legend;n.buildLabels(),n.adjustHitBoxes()},afterEvent(e,n){n.replay||e.legend.handleEvent(n.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,n,t){let i=n.datasetIndex,s=t.chart;s.isDatasetVisible(i)?(s.hide(i),n.hidden=!0):(s.show(i),n.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let n=e.data.datasets,{labels:{usePointStyle:t,pointStyle:i,textAlign:s,color:a,useBorderRadius:o,borderRadius:r}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{let c=l.controller.getStyle(t?0:void 0),d=wt(c.borderWidth);return{text:n[l.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:c.borderColor,pointStyle:i||c.pointStyle,rotation:c.rotation,textAlign:s||c.textAlign,borderRadius:o&&(r||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}},Gi=class extends Yt{constructor(n){super(),this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,t){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=n,this.height=this.bottom=t;let s=it(i.text)?i.text.length:1;this._padding=wt(i.padding);let a=s*ft(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){let n=this.options.position;return n==="top"||n==="bottom"}_drawArgs(n){let{top:t,left:i,bottom:s,right:a,options:o}=this,r=o.align,l=0,c,d,h;return this.isHorizontal()?(d=kt(r,i,a),h=t+n,c=a-i):(o.position==="left"?(d=i+n,h=kt(r,s,t),l=Q*-.5):(d=a-n,h=kt(r,t,s),l=Q*.5),c=s-t),{titleX:d,titleY:h,maxWidth:c,rotation:l}}draw(){let n=this.ctx,t=this.options;if(!t.display)return;let i=ft(t.font),a=i.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:l,rotation:c}=this._drawArgs(a);Me(n,t.text,0,0,i,{color:t.color,maxWidth:l,rotation:c,textAlign:Wn(t.align),textBaseline:"middle",translation:[o,r]})}};function lu(e,n){let t=new Gi({ctx:e.ctx,options:n,chart:e});Et.configure(e,t,n),Et.addBox(e,t),e.titleBlock=t}var cu={id:"title",_element:Gi,start(e,n,t){lu(e,t)},stop(e){let n=e.titleBlock;Et.removeBox(e,n),delete e.titleBlock},beforeUpdate(e,n,t){let i=e.titleBlock;Et.configure(e,i,t),i.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},ts=new WeakMap,du={id:"subtitle",start(e,n,t){let i=new Gi({ctx:e.ctx,options:t,chart:e});Et.configure(e,i,t),Et.addBox(e,i),ts.set(e,i)},stop(e){Et.removeBox(e,ts.get(e)),ts.delete(e)},beforeUpdate(e,n,t){let i=ts.get(e);Et.configure(e,i,t),i.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},ji={average(e){if(!e.length)return!1;let n,t,i=new Set,s=0,a=0;for(n=0,t=e.length;n<t;++n){let r=e[n].element;if(r&&r.hasValue()){let l=r.tooltipPosition();i.add(l.x),s+=l.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((r,l)=>r+l)/i.size,y:s/a}},nearest(e,n){if(!e.length)return!1;let t=n.x,i=n.y,s=Number.POSITIVE_INFINITY,a,o,r;for(a=0,o=e.length;a<o;++a){let l=e[a].element;if(l&&l.hasValue()){let c=l.getCenterPoint(),d=Bn(n,c);d<s&&(s=d,r=l)}}if(r){let l=r.tooltipPosition();t=l.x,i=l.y}return{x:t,y:i}}};function oe(e,n){return n&&(it(n)?Array.prototype.push.apply(e,n):e.push(n)),e}function ge(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function hu(e,n){let{element:t,datasetIndex:i,index:s}=n,a=e.getDatasetMeta(i).controller,{label:o,value:r}=a.getLabelAndValue(s);return{chart:e,label:o,parsed:a.getParsed(s),raw:e.data.datasets[i].data[s],formattedValue:r,dataset:a.getDataset(),dataIndex:s,datasetIndex:i,element:t}}function Hl(e,n){let t=e.chart.ctx,{body:i,footer:s,title:a}=e,{boxWidth:o,boxHeight:r}=n,l=ft(n.bodyFont),c=ft(n.titleFont),d=ft(n.footerFont),h=a.length,m=s.length,p=i.length,f=wt(n.padding),u=f.height,g=0,b=i.reduce((M,w)=>M+w.before.length+w.lines.length+w.after.length,0);if(b+=e.beforeBody.length+e.afterBody.length,h&&(u+=h*c.lineHeight+(h-1)*n.titleSpacing+n.titleMarginBottom),b){let M=n.displayColors?Math.max(r,l.lineHeight):l.lineHeight;u+=p*M+(b-p)*l.lineHeight+(b-1)*n.bodySpacing}m&&(u+=n.footerMarginTop+m*d.lineHeight+(m-1)*n.footerSpacing);let v=0,C=function(M){g=Math.max(g,t.measureText(M).width+v)};return t.save(),t.font=c.string,q(e.title,C),t.font=l.string,q(e.beforeBody.concat(e.afterBody),C),v=n.displayColors?o+2+n.boxPadding:0,q(i,M=>{q(M.before,C),q(M.lines,C),q(M.after,C)}),v=0,t.font=d.string,q(e.footer,C),t.restore(),g+=f.width,{width:g,height:u}}function mu(e,n){let{y:t,height:i}=n;return t<i/2?"top":t>e.height-i/2?"bottom":"center"}function pu(e,n,t,i){let{x:s,width:a}=i,o=t.caretSize+t.caretPadding;if(e==="left"&&s+a+o>n.width||e==="right"&&s-a-o<0)return!0}function uu(e,n,t,i){let{x:s,width:a}=t,{width:o,chartArea:{left:r,right:l}}=e,c="center";return i==="center"?c=s<=(r+l)/2?"left":"right":s<=a/2?c="left":s>=o-a/2&&(c="right"),pu(c,e,n,t)&&(c="center"),c}function Vl(e,n,t){let i=t.yAlign||n.yAlign||mu(e,t);return{xAlign:t.xAlign||n.xAlign||uu(e,n,t,i),yAlign:i}}function fu(e,n){let{x:t,width:i}=e;return n==="right"?t-=i:n==="center"&&(t-=i/2),t}function gu(e,n,t){let{y:i,height:s}=e;return n==="top"?i+=t:n==="bottom"?i-=s+t:i-=s/2,i}function jl(e,n,t,i){let{caretSize:s,caretPadding:a,cornerRadius:o}=e,{xAlign:r,yAlign:l}=t,c=s+a,{topLeft:d,topRight:h,bottomLeft:m,bottomRight:p}=De(o),f=fu(n,r),u=gu(n,l,c);return l==="center"?r==="left"?f+=c:r==="right"&&(f-=c):r==="left"?f-=Math.max(d,m)+s:r==="right"&&(f+=Math.max(h,p)+s),{x:_t(f,0,i.width-n.width),y:_t(u,0,i.height-n.height)}}function es(e,n,t){let i=wt(t.padding);return n==="center"?e.x+e.width/2:n==="right"?e.x+e.width-i.right:e.x+i.left}function Wl(e){return oe([],ge(e))}function _u(e,n,t){return ue(e,{tooltip:n,tooltipItems:t,type:"tooltip"})}function Gl(e,n){let t=n&&n.dataset&&n.dataset.tooltip&&n.dataset.tooltip.callbacks;return t?e.override(t):e}var xc={beforeTitle:se,title(e){if(e.length>0){let n=e[0],t=n.chart.data.labels,i=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return n.dataset.label||"";if(n.label)return n.label;if(i>0&&n.dataIndex<i)return t[n.dataIndex]}return""},afterTitle:se,beforeBody:se,beforeLabel:se,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let n=e.dataset.label||"";n&&(n+=": ");let t=e.formattedValue;return H(t)||(n+=t),n},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:se,afterBody:se,beforeFooter:se,footer:se,afterFooter:se};function At(e,n,t,i){let s=e[n].call(t,i);return typeof s>"u"?xc[n].call(t,i):s}var $l=(()=>{class e extends Yt{static positioners=ji;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let i=this.chart,s=this.options.setContext(this.getContext()),a=s.enabled&&i.options.animation&&s.animations,o=new as(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=_u(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,i){let{callbacks:s}=i,a=At(s,"beforeTitle",this,t),o=At(s,"title",this,t),r=At(s,"afterTitle",this,t),l=[];return l=oe(l,ge(a)),l=oe(l,ge(o)),l=oe(l,ge(r)),l}getBeforeBody(t,i){return Wl(At(i.callbacks,"beforeBody",this,t))}getBody(t,i){let{callbacks:s}=i,a=[];return q(t,o=>{let r={before:[],lines:[],after:[]},l=Gl(s,o);oe(r.before,ge(At(l,"beforeLabel",this,o))),oe(r.lines,At(l,"label",this,o)),oe(r.after,ge(At(l,"afterLabel",this,o))),a.push(r)}),a}getAfterBody(t,i){return Wl(At(i.callbacks,"afterBody",this,t))}getFooter(t,i){let{callbacks:s}=i,a=At(s,"beforeFooter",this,t),o=At(s,"footer",this,t),r=At(s,"afterFooter",this,t),l=[];return l=oe(l,ge(a)),l=oe(l,ge(o)),l=oe(l,ge(r)),l}_createItems(t){let i=this._active,s=this.chart.data,a=[],o=[],r=[],l=[],c,d;for(c=0,d=i.length;c<d;++c)l.push(hu(this.chart,i[c]));return t.filter&&(l=l.filter((h,m,p)=>t.filter(h,m,p,s))),t.itemSort&&(l=l.sort((h,m)=>t.itemSort(h,m,s))),q(l,h=>{let m=Gl(t.callbacks,h);a.push(At(m,"labelColor",this,h)),o.push(At(m,"labelPointStyle",this,h)),r.push(At(m,"labelTextColor",this,h))}),this.labelColors=a,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=l,l}update(t,i){let s=this.options.setContext(this.getContext()),a=this._active,o,r=[];if(!a.length)this.opacity!==0&&(o={opacity:0});else{let l=ji[s.position].call(this,a,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);let c=this._size=Hl(this,s),d=Object.assign({},l,c),h=Vl(this.chart,s,d),m=jl(s,d,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:m.x,y:m.y,width:c.width,height:c.height,caretX:l.x,caretY:l.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(t,i,s,a){let o=this.getCaretPosition(t,s,a);i.lineTo(o.x1,o.y1),i.lineTo(o.x2,o.y2),i.lineTo(o.x3,o.y3)}getCaretPosition(t,i,s){let{xAlign:a,yAlign:o}=this,{caretSize:r,cornerRadius:l}=s,{topLeft:c,topRight:d,bottomLeft:h,bottomRight:m}=De(l),{x:p,y:f}=t,{width:u,height:g}=i,b,v,C,M,w,S;return o==="center"?(w=f+g/2,a==="left"?(b=p,v=b-r,M=w+r,S=w-r):(b=p+u,v=b+r,M=w-r,S=w+r),C=b):(a==="left"?v=p+Math.max(c,h)+r:a==="right"?v=p+u-Math.max(d,m)-r:v=this.caretX,o==="top"?(M=f,w=M-r,b=v-r,C=v+r):(M=f+g,w=M+r,b=v+r,C=v-r),S=M),{x1:b,x2:v,x3:C,y1:M,y2:w,y3:S}}drawTitle(t,i,s){let a=this.title,o=a.length,r,l,c;if(o){let d=We(s.rtl,this.x,this.width);for(t.x=es(this,s.titleAlign,s),i.textAlign=d.textAlign(s.titleAlign),i.textBaseline="middle",r=ft(s.titleFont),l=s.titleSpacing,i.fillStyle=s.titleColor,i.font=r.string,c=0;c<o;++c)i.fillText(a[c],d.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+l,c+1===o&&(t.y+=s.titleMarginBottom-l)}}_drawColorBox(t,i,s,a,o){let r=this.labelColors[s],l=this.labelPointStyles[s],{boxHeight:c,boxWidth:d}=o,h=ft(o.bodyFont),m=es(this,"left",o),p=a.x(m),f=c<h.lineHeight?(h.lineHeight-c)/2:0,u=i.y+f;if(o.usePointStyle){let g={radius:Math.min(d,c)/2,pointStyle:l.pointStyle,rotation:l.rotation,borderWidth:1},b=a.leftForLtr(p,d)+d/2,v=u+c/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,$n(t,g,b,v),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,$n(t,g,b,v)}else{t.lineWidth=V(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;let g=a.leftForLtr(p,d),b=a.leftForLtr(a.xPlus(p,1),d-2),v=De(r.borderRadius);Object.values(v).some(C=>C!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,gi(t,{x:g,y:u,w:d,h:c,radius:v}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),gi(t,{x:b,y:u+1,w:d-2,h:c-2,radius:v}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(g,u,d,c),t.strokeRect(g,u,d,c),t.fillStyle=r.backgroundColor,t.fillRect(b,u+1,d-2,c-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,i,s){let{body:a}=this,{bodySpacing:o,bodyAlign:r,displayColors:l,boxHeight:c,boxWidth:d,boxPadding:h}=s,m=ft(s.bodyFont),p=m.lineHeight,f=0,u=We(s.rtl,this.x,this.width),g=function(T){i.fillText(T,u.x(t.x+f),t.y+p/2),t.y+=p+o},b=u.textAlign(r),v,C,M,w,S,E,D;for(i.textAlign=r,i.textBaseline="middle",i.font=m.string,t.x=es(this,b,s),i.fillStyle=s.bodyColor,q(this.beforeBody,g),f=l&&b!=="right"?r==="center"?d/2+h:d+2+h:0,w=0,E=a.length;w<E;++w){for(v=a[w],C=this.labelTextColors[w],i.fillStyle=C,q(v.before,g),M=v.lines,l&&M.length&&(this._drawColorBox(i,t,w,u,s),p=Math.max(m.lineHeight,c)),S=0,D=M.length;S<D;++S)g(M[S]),p=m.lineHeight;q(v.after,g)}f=0,p=m.lineHeight,q(this.afterBody,g),t.y-=o}drawFooter(t,i,s){let a=this.footer,o=a.length,r,l;if(o){let c=We(s.rtl,this.x,this.width);for(t.x=es(this,s.footerAlign,s),t.y+=s.footerMarginTop,i.textAlign=c.textAlign(s.footerAlign),i.textBaseline="middle",r=ft(s.footerFont),i.fillStyle=s.footerColor,i.font=r.string,l=0;l<o;++l)i.fillText(a[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,i,s,a){let{xAlign:o,yAlign:r}=this,{x:l,y:c}=t,{width:d,height:h}=s,{topLeft:m,topRight:p,bottomLeft:f,bottomRight:u}=De(a.cornerRadius);i.fillStyle=a.backgroundColor,i.strokeStyle=a.borderColor,i.lineWidth=a.borderWidth,i.beginPath(),i.moveTo(l+m,c),r==="top"&&this.drawCaret(t,i,s,a),i.lineTo(l+d-p,c),i.quadraticCurveTo(l+d,c,l+d,c+p),r==="center"&&o==="right"&&this.drawCaret(t,i,s,a),i.lineTo(l+d,c+h-u),i.quadraticCurveTo(l+d,c+h,l+d-u,c+h),r==="bottom"&&this.drawCaret(t,i,s,a),i.lineTo(l+f,c+h),i.quadraticCurveTo(l,c+h,l,c+h-f),r==="center"&&o==="left"&&this.drawCaret(t,i,s,a),i.lineTo(l,c+m),i.quadraticCurveTo(l,c,l+m,c),i.closePath(),i.fill(),a.borderWidth>0&&i.stroke()}_updateAnimationTarget(t){let i=this.chart,s=this.$animations,a=s&&s.x,o=s&&s.y;if(a||o){let r=ji[t.position].call(this,this._active,this._eventPosition);if(!r)return;let l=this._size=Hl(this,t),c=Object.assign({},r,this._size),d=Vl(i,t,c),h=jl(t,c,d,i);(a._to!==h.x||o._to!==h.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=l.width,this.height=l.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){let i=this.options.setContext(this.getContext()),s=this.opacity;if(!s)return;this._updateAnimationTarget(i);let a={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;let r=wt(i.padding),l=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&l&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,a,i),oa(t,i.textDirection),o.y+=r.top,this.drawTitle(o,t,i),this.drawBody(o,t,i),this.drawFooter(o,t,i),ra(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,i){let s=this._active,a=t.map(({datasetIndex:l,index:c})=>{let d=this.chart.getDatasetMeta(l);if(!d)throw new Error("Cannot find a dataset at index "+l);return{datasetIndex:l,element:d.data[c],index:c}}),o=!Oi(s,a),r=this._positionChanged(a,i);(o||r)&&(this._active=a,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,i,s=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let a=this.options,o=this._active||[],r=this._getActiveElements(t,o,i,s),l=this._positionChanged(r,t),c=i||!Oi(r,o)||l;return c&&(this._active=r,(a.enabled||a.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,i))),c}_getActiveElements(t,i,s,a){let o=this.options;if(t.type==="mouseout")return[];if(!a)return i.filter(l=>this.chart.data.datasets[l.datasetIndex]&&this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index)!==void 0);let r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,i){let{caretX:s,caretY:a,options:o}=this,r=ji[o.position].call(this,t,i);return r!==!1&&(s!==r.x||a!==r.y)}}return e})(),bu={id:"tooltip",_element:$l,positioners:ji,afterInit(e,n,t){t&&(e.tooltip=new $l({chart:e,options:t}))},beforeUpdate(e,n,t){e.tooltip&&e.tooltip.initialize(t)},reset(e,n,t){e.tooltip&&e.tooltip.initialize(t)},afterDraw(e){let n=e.tooltip;if(n&&n._willRender()){let t={tooltip:n};if(e.notifyPlugins("beforeTooltipDraw",Ji(Zi({},t),{cancelable:!0}))===!1)return;n.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",t)}},afterEvent(e,n){if(e.tooltip){let t=n.replay;e.tooltip.handleEvent(n.event,t,n.inChartArea)&&(n.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,n)=>n.bodyFont.size,boxWidth:(e,n)=>n.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:xc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},vu=Object.freeze({__proto__:null,Colors:Tp,Decimation:Lp,Filler:eu,Legend:ru,SubTitle:du,Title:cu,Tooltip:bu}),yu=(e,n,t,i)=>(typeof n=="string"?(t=e.push(n)-1,i.unshift({index:t,label:n})):isNaN(n)&&(t=null),t);function xu(e,n,t,i){let s=e.indexOf(n);if(s===-1)return yu(e,n,t,i);let a=e.lastIndexOf(n);return s!==a?t:s}var ku=(e,n)=>e===null?null:_t(Math.round(e),0,n);function Ul(e){let n=this.getLabels();return e>=0&&e<n.length?n[e]:e}var wu=(()=>{class e extends Ue{static id="category";static defaults={ticks:{callback:Ul}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let i=this._addedLabels;if(i.length){let s=this.getLabels();for(let{index:a,label:o}of i)s[a]===o&&s.splice(a,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(H(t))return null;let s=this.getLabels();return i=isFinite(i)&&s[i]===t?i:xu(s,t,O(i,t),this._addedLabels),ku(i,s.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:i}=this.getUserBounds(),{min:s,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),i||(a=this.getLabels().length-1)),this.min=s,this.max=a}buildTicks(){let t=this.min,i=this.max,s=this.options.offset,a=[],o=this.getLabels();o=t===0&&i===o.length-1?o:o.slice(t,i+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=i;r++)a.push({value:r});return a}getLabelForValue(t){return Ul.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}return e})();function Cu(e,n){let t=[],{bounds:s,step:a,min:o,max:r,precision:l,count:c,maxTicks:d,maxDigits:h,includeBounds:m}=e,p=a||1,f=d-1,{min:u,max:g}=n,b=!H(o),v=!H(r),C=!H(c),M=(g-u)/(h+1),w=Ns((g-u)/f/p)*p,S,E,D,T;if(w<1e-14&&!b&&!v)return[{value:u},{value:g}];T=Math.ceil(g/w)-Math.floor(u/w),T>f&&(w=Ns(T*w/f/p)*p),H(l)||(S=Math.pow(10,l),w=Math.ceil(w*S)/S),s==="ticks"?(E=Math.floor(u/w)*w,D=Math.ceil(g/w)*w):(E=u,D=g),b&&v&&a&&Or((r-o)/a,w/1e3)?(T=Math.round(Math.min((r-o)/w,d)),w=(r-o)/T,E=o,D=r):C?(E=b?o:E,D=v?r:D,T=c-1,w=(D-E)/T):(T=(D-E)/w,pi(T,Math.round(T),w/1e3)?T=Math.round(T):T=Math.ceil(T));let L=Math.max(Vs(w),Vs(E));S=Math.pow(10,H(l)?L:l),E=Math.round(E*S)/S,D=Math.round(D*S)/S;let A=0;for(b&&(m&&E!==o?(t.push({value:o}),E<o&&A++,pi(Math.round((E+A*w)*S)/S,o,Ql(o,M,e))&&A++):E<o&&A++);A<T;++A){let j=Math.round((E+A*w)*S)/S;if(v&&j>r)break;t.push({value:j})}return v&&m&&D!==r?t.length&&pi(t[t.length-1].value,r,Ql(r,M,e))?t[t.length-1].value=r:t.push({value:r}):(!v||D===r)&&t.push({value:D}),t}function Ql(e,n,{horizontal:t,minRotation:i}){let s=$t(i),a=(t?Math.sin(s):Math.cos(s))||.001,o=.75*n*(""+e).length;return Math.min(n/a,o)}var yi=class extends Ue{constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(n,t){return H(n)||(typeof n=="number"||n instanceof Number)&&!isFinite(+n)?null:+n}handleTickRangeOptions(){let{beginAtZero:n}=this.options,{minDefined:t,maxDefined:i}=this.getUserBounds(),{min:s,max:a}=this,o=l=>s=t?s:l,r=l=>a=i?a:l;if(n){let l=Qt(s),c=Qt(a);l<0&&c<0?r(0):l>0&&c>0&&o(0)}if(s===a){let l=a===0?1:Math.abs(a*.05);r(a+l),n||o(s-l)}this.min=s,this.max=a}getTickLimit(){let n=this.options.ticks,{maxTicksLimit:t,stepSize:i}=n,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let n=this.options,t=n.ticks,i=this.getTickLimit();i=Math.max(2,i);let s={maxTicks:i,bounds:n.bounds,min:n.min,max:n.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},a=this._range||this,o=Cu(s,a);return n.bounds==="ticks"&&Hs(o,this,"value"),n.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){let n=this.ticks,t=this.min,i=this.max;if(super.configure(),this.options.offset&&n.length){let s=(i-t)/Math.max(n.length-1,1)/2;t-=s,i+=s}this._startValue=t,this._endValue=i,this._valueRange=i-t}getLabelForValue(n){return fi(n,this.chart.options.locale,this.options.ticks.format)}},za=class extends yi{static id="linear";static defaults={ticks:{callback:Ai.formatters.numeric}};determineDataLimits(){let{min:n,max:t}=this.getMinMax(!0);this.min=ct(n)?n:0,this.max=ct(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let n=this.isHorizontal(),t=n?this.width:this.height,i=$t(this.options.ticks.minRotation),s=(n?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,a.lineHeight/s))}getPixelForValue(n){return n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getValueForPixel(n){return this._startValue+this.getDecimalForPixel(n)*this._valueRange}},$i=e=>Math.floor(me(e)),$e=(e,n)=>Math.pow(10,$i(e)+n);function Yl(e){return e/Math.pow(10,$i(e))===1}function ql(e,n,t){let i=Math.pow(10,t),s=Math.floor(e/i);return Math.ceil(n/i)-s}function Su(e,n){let t=n-e,i=$i(t);for(;ql(e,n,i)>10;)i++;for(;ql(e,n,i)<10;)i--;return Math.min(i,$i(e))}function Mu(e,{min:n,max:t}){n=Ot(e.min,n);let i=[],s=$i(n),a=Su(n,t),o=a<0?Math.pow(10,Math.abs(a)):1,r=Math.pow(10,a),l=s>a?Math.pow(10,s):0,c=Math.round((n-l)*o)/o,d=Math.floor((n-l)/r/10)*r*10,h=Math.floor((c-d)/Math.pow(10,a)),m=Ot(e.min,Math.round((l+d+h*Math.pow(10,a))*o)/o);for(;m<t;)i.push({value:m,major:Yl(m),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,o=a>=0?1:o),m=Math.round((l+d+h*Math.pow(10,a))*o)/o;let p=Ot(e.max,m);return i.push({value:p,major:Yl(p),significand:h}),i}var Ba=class extends Ue{static id="logarithmic";static defaults={ticks:{callback:Ai.formatters.logarithmic,major:{enabled:!0}}};constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(n,t){let i=yi.prototype.parse.apply(this,[n,t]);if(i===0){this._zero=!0;return}return ct(i)&&i>0?i:null}determineDataLimits(){let{min:n,max:t}=this.getMinMax(!0);this.min=ct(n)?Math.max(0,n):null,this.max=ct(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!ct(this._userMin)&&(this.min=n===$e(this.min,0)?$e(this.min,-1):$e(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:n,maxDefined:t}=this.getUserBounds(),i=this.min,s=this.max,a=r=>i=n?i:r,o=r=>s=t?s:r;i===s&&(i<=0?(a(1),o(10)):(a($e(i,-1)),o($e(s,1)))),i<=0&&a($e(s,-1)),s<=0&&o($e(i,1)),this.min=i,this.max=s}buildTicks(){let n=this.options,t={min:this._userMin,max:this._userMax},i=Mu(t,this);return n.bounds==="ticks"&&Hs(i,this,"value"),n.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(n){return n===void 0?"0":fi(n,this.chart.options.locale,this.options.ticks.format)}configure(){let n=this.min;super.configure(),this._startValue=me(n),this._valueRange=me(this.max)-me(n)}getPixelForValue(n){return(n===void 0||n===0)&&(n=this.min),n===null||isNaN(n)?NaN:this.getPixelForDecimal(n===this.min?0:(me(n)-this._startValue)/this._valueRange)}getValueForPixel(n){let t=this.getDecimalForPixel(n);return Math.pow(10,this._startValue+t*this._valueRange)}};function Na(e){let n=e.ticks;if(n.display&&e.display){let t=wt(n.backdropPadding);return O(n.font&&n.font.size,st.font.size)+t.height}return 0}function Du(e,n,t){return t=it(t)?t:[t],{w:Vr(e,n.string,t),h:t.length*n.lineHeight}}function Xl(e,n,t,i,s){return e===i||e===s?{start:n-t/2,end:n+t/2}:e<i||e>s?{start:n-t,end:n}:{start:n,end:n+t}}function Iu(e){let n={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},t=Object.assign({},n),i=[],s=[],a=e._pointLabels.length,o=e.options.pointLabels,r=o.centerPointLabels?Q/a:0;for(let l=0;l<a;l++){let c=o.setContext(e.getPointLabelContext(l));s[l]=c.padding;let d=e.getPointPosition(l,e.drawingArea+s[l],r),h=ft(c.font),m=Du(e.ctx,h,e._pointLabels[l]);i[l]=m;let p=xt(e.getIndexAngle(l)+r),f=Math.round(Vn(p)),u=Xl(f,d.x,m.w,0,180),g=Xl(f,d.y,m.h,90,270);Ru(t,n,p,u,g)}e.setCenterPoint(n.l-t.l,t.r-n.r,n.t-t.t,t.b-n.b),e._pointLabelItems=Ou(e,i,s)}function Ru(e,n,t,i,s){let a=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t)),r=0,l=0;i.start<n.l?(r=(n.l-i.start)/a,e.l=Math.min(e.l,n.l-r)):i.end>n.r&&(r=(i.end-n.r)/a,e.r=Math.max(e.r,n.r+r)),s.start<n.t?(l=(n.t-s.start)/o,e.t=Math.min(e.t,n.t-l)):s.end>n.b&&(l=(s.end-n.b)/o,e.b=Math.max(e.b,n.b+l))}function Eu(e,n,t){let i=e.drawingArea,{extra:s,additionalAngle:a,padding:o,size:r}=t,l=e.getPointPosition(n,i+s+o,a),c=Math.round(Vn(xt(l.angle+mt))),d=Lu(l.y,r.h,c),h=Au(c),m=Pu(l.x,r.w,h);return{visible:!0,x:l.x,y:d,textAlign:h,left:m,top:d,right:m+r.w,bottom:d+r.h}}function Tu(e,n){if(!n)return!0;let{left:t,top:i,right:s,bottom:a}=e;return!(ne({x:t,y:i},n)||ne({x:t,y:a},n)||ne({x:s,y:i},n)||ne({x:s,y:a},n))}function Ou(e,n,t){let i=[],s=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:r}=a.pointLabels,l={extra:Na(a)/2,additionalAngle:o?Q/s:0},c;for(let d=0;d<s;d++){l.padding=t[d],l.size=n[d];let h=Eu(e,d,l);i.push(h),r==="auto"&&(h.visible=Tu(h,c),h.visible&&(c=h))}return i}function Au(e){return e===0||e===180?"center":e<180?"left":"right"}function Pu(e,n,t){return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function Lu(e,n,t){return t===90||t===270?e-=n/2:(t>270||t<90)&&(e-=n),e}function Fu(e,n,t){let{left:i,top:s,right:a,bottom:o}=t,{backdropColor:r}=n;if(!H(r)){let l=De(n.borderRadius),c=wt(n.backdropPadding);e.fillStyle=r;let d=i-c.left,h=s-c.top,m=a-i+c.width,p=o-s+c.height;Object.values(l).some(f=>f!==0)?(e.beginPath(),gi(e,{x:d,y:h,w:m,h:p,radius:l}),e.fill()):e.fillRect(d,h,m,p)}}function zu(e,n){let{ctx:t,options:{pointLabels:i}}=e;for(let s=n-1;s>=0;s--){let a=e._pointLabelItems[s];if(!a.visible)continue;let o=i.setContext(e.getPointLabelContext(s));Fu(t,o,a);let r=ft(o.font),{x:l,y:c,textAlign:d}=a;Me(t,e._pointLabels[s],l,c+r.lineHeight/2,r,{color:o.color,textAlign:d,textBaseline:"middle"})}}function kc(e,n,t,i){let{ctx:s}=e;if(t)s.arc(e.xCenter,e.yCenter,n,0,nt);else{let a=e.getPointPosition(0,n);s.moveTo(a.x,a.y);for(let o=1;o<i;o++)a=e.getPointPosition(o,n),s.lineTo(a.x,a.y)}}function Bu(e,n,t,i,s){let a=e.ctx,o=n.circular,{color:r,lineWidth:l}=n;!o&&!i||!r||!l||t<0||(a.save(),a.strokeStyle=r,a.lineWidth=l,a.setLineDash(s.dash||[]),a.lineDashOffset=s.dashOffset,a.beginPath(),kc(e,t,o,i),a.closePath(),a.stroke(),a.restore())}function Nu(e,n,t){return ue(e,{label:t,index:n,type:"pointLabel"})}var Ha=class extends yi{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ai.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(n){return n},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(n){super(n),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let n=this._padding=wt(Na(this.options)/2),t=this.width=this.maxWidth-n.width,i=this.height=this.maxHeight-n.height;this.xCenter=Math.floor(this.left+t/2+n.left),this.yCenter=Math.floor(this.top+i/2+n.top),this.drawingArea=Math.floor(Math.min(t,i)/2)}determineDataLimits(){let{min:n,max:t}=this.getMinMax(!1);this.min=ct(n)&&!isNaN(n)?n:0,this.max=ct(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Na(this.options))}generateTickLabels(n){yi.prototype.generateTickLabels.call(this,n),this._pointLabels=this.getLabels().map((t,i)=>{let s=et(this.options.pointLabels.callback,[t,i],this);return s||s===0?s:""}).filter((t,i)=>this.chart.getDataVisibility(i))}fit(){let n=this.options;n.display&&n.pointLabels.display?Iu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(n,t,i,s){this.xCenter+=Math.floor((n-t)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(n,t,i,s))}getIndexAngle(n){let t=nt/(this._pointLabels.length||1),i=this.options.startAngle||0;return xt(n*t+$t(i))}getDistanceFromCenterForValue(n){if(H(n))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-n)*t:(n-this.min)*t}getValueForDistanceFromCenter(n){if(H(n))return NaN;let t=n/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(n){let t=this._pointLabels||[];if(n>=0&&n<t.length){let i=t[n];return Nu(this.getContext(),n,i)}}getPointPosition(n,t,i=0){let s=this.getIndexAngle(n)-mt+i;return{x:Math.cos(s)*t+this.xCenter,y:Math.sin(s)*t+this.yCenter,angle:s}}getPointPositionForValue(n,t){return this.getPointPosition(n,this.getDistanceFromCenterForValue(t))}getBasePosition(n){return this.getPointPositionForValue(n||0,this.getBaseValue())}getPointLabelPosition(n){let{left:t,top:i,right:s,bottom:a}=this._pointLabelItems[n];return{left:t,top:i,right:s,bottom:a}}drawBackground(){let{backgroundColor:n,grid:{circular:t}}=this.options;if(n){let i=this.ctx;i.save(),i.beginPath(),kc(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),i.closePath(),i.fillStyle=n,i.fill(),i.restore()}}drawGrid(){let n=this.ctx,t=this.options,{angleLines:i,grid:s,border:a}=t,o=this._pointLabels.length,r,l,c;if(t.pointLabels.display&&zu(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){l=this.getDistanceFromCenterForValue(d.value);let m=this.getContext(h),p=s.setContext(m),f=a.setContext(m);Bu(this,p,l,o,f)}}),i.display){for(n.save(),r=o-1;r>=0;r--){let d=i.setContext(this.getPointLabelContext(r)),{color:h,lineWidth:m}=d;!m||!h||(n.lineWidth=m,n.strokeStyle=h,n.setLineDash(d.borderDash),n.lineDashOffset=d.borderDashOffset,l=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(r,l),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(c.x,c.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let n=this.ctx,t=this.options,i=t.ticks;if(!i.display)return;let s=this.getIndexAngle(0),a,o;n.save(),n.translate(this.xCenter,this.yCenter),n.rotate(s),n.textAlign="center",n.textBaseline="middle",this.ticks.forEach((r,l)=>{if(l===0&&this.min>=0&&!t.reverse)return;let c=i.setContext(this.getContext(l)),d=ft(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){n.font=d.string,o=n.measureText(r.label).width,n.fillStyle=c.backdropColor;let h=wt(c.backdropPadding);n.fillRect(-o/2-h.left,-a-d.size/2-h.top,o+h.width,d.size+h.height)}Me(n,r.label,0,-a,d,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),n.restore()}drawTitle(){}},ps={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Pt=Object.keys(ps);function Kl(e,n){return e-n}function Zl(e,n){if(H(n))return null;let t=e._adapter,{parser:i,round:s,isoWeekday:a}=e._parseOpts,o=n;return typeof i=="function"&&(o=i(o)),ct(o)||(o=typeof i=="string"?t.parse(o,i):t.parse(o)),o===null?null:(s&&(o=s==="week"&&(je(a)||a===!0)?t.startOf(o,"isoWeek",a):t.startOf(o,s)),+o)}function Jl(e,n,t,i){let s=Pt.length;for(let a=Pt.indexOf(e);a<s-1;++a){let o=ps[Pt[a]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-n)/(r*o.size))<=i)return Pt[a]}return Pt[s-1]}function Hu(e,n,t,i,s){for(let a=Pt.length-1;a>=Pt.indexOf(t);a--){let o=Pt[a];if(ps[o].common&&e._adapter.diff(s,i,o)>=n-1)return o}return Pt[t?Pt.indexOf(t):0]}function Vu(e){for(let n=Pt.indexOf(e)+1,t=Pt.length;n<t;++n)if(ps[Pt[n]].common)return Pt[n]}function tc(e,n,t){if(!t)e[n]=!0;else if(t.length){let{lo:i,hi:s}=jn(t,n),a=t[i]>=n?t[i]:t[s];e[a]=!0}}function ju(e,n,t,i){let s=e._adapter,a=+s.startOf(n[0].value,i),o=n[n.length-1].value,r,l;for(r=a;r<=o;r=+s.add(r,1,i))l=t[r],l>=0&&(n[l].major=!0);return n}function ec(e,n,t){let i=[],s={},a=n.length,o,r;for(o=0;o<a;++o)r=n[o],s[r]=o,i.push({value:r,major:!1});return a===0||!t?i:ju(e,i,s,t)}var Va=(()=>{class e extends Ue{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){let s=t.time||(t.time={}),a=this._adapter=new Jh._date(t.adapters.date);a.init(i),hi(s.displayFormats,a.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:Zl(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,i=this._adapter,s=t.time.unit||"day",{min:a,max:o,minDefined:r,maxDefined:l}=this.getUserBounds();function c(d){!r&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!l&&!isNaN(d.max)&&(o=Math.max(o,d.max))}(!r||!l)&&(c(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&c(this.getMinMax(!1))),a=ct(a)&&!isNaN(a)?a:+i.startOf(Date.now(),s),o=ct(o)&&!isNaN(o)?o:+i.endOf(Date.now(),s)+1,this.min=Math.min(a,o-1),this.max=Math.max(a+1,o)}_getLabelBounds(){let t=this.getLabelTimestamps(),i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],s=t[t.length-1]),{min:i,max:s}}buildTicks(){let t=this.options,i=t.time,s=t.ticks,a=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);let o=this.min,r=this.max,l=Lr(a,o,r);return this._unit=i.unit||(s.autoSkip?Jl(i.minUnit,this.min,this.max,this._getLabelCapacity(o)):Hu(this,l.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Vu(this._unit),this.initOffsets(a),t.reverse&&l.reverse(),ec(this,l,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,s=0,a,o;this.options.offset&&t.length&&(a=this.getDecimalForValue(t[0]),t.length===1?i=1-a:i=(this.getDecimalForValue(t[1])-a)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);let r=t.length<3?.5:.25;i=_t(i,0,r),s=_t(s,0,r),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){let t=this._adapter,i=this.min,s=this.max,a=this.options,o=a.time,r=o.unit||Jl(o.minUnit,i,s,this._getLabelCapacity(i)),l=O(a.ticks.stepSize,1),c=r==="week"?o.isoWeekday:!1,d=je(c)||c===!0,h={},m=i,p,f;if(d&&(m=+t.startOf(m,"isoWeek",c)),m=+t.startOf(m,d?"day":r),t.diff(s,i,r)>1e5*l)throw new Error(i+" and "+s+" are too far apart with stepSize of "+l+" "+r);let u=a.ticks.source==="data"&&this.getDataTimestamps();for(p=m,f=0;p<s;p=+t.add(p,l,r),f++)tc(h,p,u);return(p===s||a.bounds==="ticks"||f===1)&&tc(h,p,u),Object.keys(h).sort(Kl).map(g=>+g)}getLabelForValue(t){let i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(t,s.tooltipFormat):i.format(t,s.displayFormats.datetime)}format(t,i){let a=this.options.time.displayFormats,o=this._unit,r=i||a[o];return this._adapter.format(t,r)}_tickFormatFunction(t,i,s,a){let o=this.options,r=o.ticks.callback;if(r)return et(r,[t,i,s],this);let l=o.time.displayFormats,c=this._unit,d=this._majorUnit,h=c&&l[c],m=d&&l[d],p=s[i],f=d&&m&&p&&p.major;return this._adapter.format(t,a||(f?m:h))}generateTickLabels(t){let i,s,a;for(i=0,s=t.length;i<s;++i)a=t[i],a.label=this._tickFormatFunction(a.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let i=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(t){let i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){let i=this.options.ticks,s=this.ctx.measureText(t).width,a=$t(this.isHorizontal()?i.maxRotation:i.minRotation),o=Math.cos(a),r=Math.sin(a),l=this._resolveTickFontOptions(0).size;return{w:s*o+l*r,h:s*r+l*o}}_getLabelCapacity(t){let i=this.options.time,s=i.displayFormats,a=s[i.unit]||s.millisecond,o=this._tickFormatFunction(t,0,ec(this,[t],this._majorUnit),a),r=this._getLabelSize(o),l=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return l>0?l:1}getDataTimestamps(){let t=this._cache.data||[],i,s;if(t.length)return t;let a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(i=0,s=a.length;i<s;++i)t=t.concat(a[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],i,s;if(t.length)return t;let a=this.getLabels();for(i=0,s=a.length;i<s;++i)t.push(Zl(this,a[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Gs(t.sort(Kl))}}return e})();function is(e,n,t){let i=0,s=e.length-1,a,o,r,l;t?(n>=e[i].pos&&n<=e[s].pos&&({lo:i,hi:s}=ie(e,"pos",n)),{pos:a,time:r}=e[i],{pos:o,time:l}=e[s]):(n>=e[i].time&&n<=e[s].time&&({lo:i,hi:s}=ie(e,"time",n)),{time:a,pos:r}=e[i],{time:o,pos:l}=e[s]);let c=o-a;return c?r+(l-r)*(n-a)/c:r}var ja=class extends Va{static id="timeseries";static defaults=Va.defaults;constructor(n){super(n),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let n=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(n);this._minPos=is(t,this.min),this._tableRange=is(t,this.max)-this._minPos,super.initOffsets(n)}buildLookupTable(n){let{min:t,max:i}=this,s=[],a=[],o,r,l,c,d;for(o=0,r=n.length;o<r;++o)c=n[o],c>=t&&c<=i&&s.push(c);if(s.length<2)return[{time:t,pos:0},{time:i,pos:1}];for(o=0,r=s.length;o<r;++o)d=s[o+1],l=s[o-1],c=s[o],Math.round((d+l)/2)!==c&&a.push({time:c,pos:o/(r-1)});return a}_generate(){let n=this.min,t=this.max,i=super.getDataTimestamps();return(!i.includes(n)||!i.length)&&i.splice(0,0,n),(!i.includes(t)||i.length===1)&&i.push(t),i.sort((s,a)=>s-a)}_getTimestampsForTable(){let n=this._cache.all||[];if(n.length)return n;let t=this.getDataTimestamps(),i=this.getLabelTimestamps();return t.length&&i.length?n=this.normalize(t.concat(i)):n=t.length?t:i,n=this._cache.all=n,n}getDecimalForValue(n){return(is(this._table,n)-this._minPos)/this._tableRange}getValueForPixel(n){let t=this._offsets,i=this.getDecimalForPixel(n)/t.factor-t.end;return is(this._table,i*this._tableRange+this._minPos,!0)}},Wu=Object.freeze({__proto__:null,CategoryScale:wu,LinearScale:za,LogarithmicScale:Ba,RadialLinearScale:Ha,TimeScale:Va,TimeSeriesScale:ja}),wc=[Zh,Cp,vu,Wu];var Gu=["inherentRisksChart"],$u=["residualRisksChart"],Uu=(e,n)=>n.label;function Qu(e,n){e&1&&Rt(0,"canvas",null,0)}function Yu(e,n){e&1&&Rt(0,"canvas",null,1)}function qu(e,n){if(e&1&&(P(0,"div",5),W(1,Qu,2,0,"canvas"),W(2,Yu,2,0,"canvas"),P(3,"div",7),x(4),U()()),e&2){let t=R(),i=t.$implicit,s=t.$index;k(),G(s===4?1:-1),k(),G(s===5?2:-1),k(2),Y(i.value)}}function Xu(e,n){if(e&1&&(P(0,"div",6),x(1),P(2,"span",8),x(3),U()()),e&2){let t=R().$implicit;k(),Nt(" ",t.value),k(2),Y(t.suffix)}}function Ku(e,n){if(e&1&&(P(0,"div",3)(1,"div",4),x(2),U(),W(3,qu,5,3,"div",5)(4,Xu,4,2,"div",6),U()),e&2){let t=n.$implicit;k(2),Y(t.label),k(),G(t.hasChart?3:4)}}Qi.register(...wc);var us=class e{dataService=I(Wt);inherentRisksCanvas;residualRisksCanvas;inherentRisksChart;residualRisksChart;stats=[{label:"Total Risks",value:0,suffix:""},{label:"Avg Risk Exposure",value:"",suffix:""},{label:"Treatment Activities",value:0,suffix:""},{label:"Treatment Progress",value:0,suffix:"%"},{label:"Inherent Risks",value:0,suffix:"",hasChart:!0,chartData:[0,0,0,0]},{label:"Residual Risks",value:0,suffix:"",hasChart:!0,chartData:[0,0,0,0]}];constructor(){_e(()=>{let n=this.dataService.risksLoaded(),t=this.dataService.treatmentsLoaded();(n||t)&&(this.updateStats(),this.updateCharts())})}ngOnInit(){this.updateStats()}ngAfterViewInit(){this.createInherentRisksChart(),this.createResidualRisksChart()}updateStats(){this.stats[0].value=this.calculateTotalRisks(),this.stats[1].value=this.calculateRiskExposure(),this.stats[2].value=this.calculateTreatmentActivities(),this.stats[3].value=this.calculateTreatmentProgress();let n=this.calculateInherentRisksData();this.stats[4].value=n.total,this.stats[4].chartData=n.chartData;let t=this.calculateResidualRisksData();this.stats[5].value=t.total,this.stats[5].chartData=t.chartData}updateCharts(){if(this.inherentRisksChart){let n=this.stats[4].chartData||[];this.inherentRisksChart.data.datasets[0].data=[n[0],n[1],n[2]],this.inherentRisksChart.update()}if(this.residualRisksChart){let n=this.stats[5].chartData||[];this.residualRisksChart.data.datasets[0].data=[n[0],n[1],n[2]],this.residualRisksChart.update()}}calculateTotalRisks(){return this.dataService.risks().length}calculateRiskExposure(){let n=this.dataService.risks();return""}calculateTreatmentActivities(){return this.dataService.treatments().length}calculateTreatmentProgress(){let n=this.dataService.treatments();return 62}calculateInherentRisksData(){let n=this.dataService.risks(),t=0,i=0,s=0;t=9,i=3,s=13;let a=t+i+s;return{total:a,chartData:[t,i,s,a]}}calculateResidualRisksData(){let n=this.dataService.risks(),t=0,i=0,s=0;t=19,i=11,s=11;let a=t+i+s;return{total:a,chartData:[t,i,s,a]}}createInherentRisksChart(){let n=this.inherentRisksCanvas.nativeElement.getContext("2d");if(!n)return;let t=this.stats[4].chartData||[],i={type:"doughnut",data:{labels:["High","Medium","Low"],datasets:[{data:[t[0],t[1],t[2]],backgroundColor:["#e53935","#fdd835","#fb8c00"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"70%",plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"rgba(255, 255, 255, 0.2)",borderWidth:1,padding:10,displayColors:!0,boxPadding:5}}}};this.inherentRisksChart=new Qi(n,i)}createResidualRisksChart(){let n=this.residualRisksCanvas.nativeElement.getContext("2d");if(!n)return;let t=this.stats[5].chartData||[],i={type:"doughnut",data:{labels:["High","Medium","Low"],datasets:[{data:[t[0],t[1],t[2]],backgroundColor:["#e53935","#fdd835","#66bb6a"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"70%",plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"rgba(255, 255, 255, 0.2)",borderWidth:1,padding:10,displayColors:!0,boxPadding:5}}}};this.residualRisksChart=new Qi(n,i)}ngOnDestroy(){this.inherentRisksChart&&this.inherentRisksChart.destroy(),this.residualRisksChart&&this.residualRisksChart.destroy()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-risk-stats"]],viewQuery:function(t,i){if(t&1&&jt(Gu,5)($u,5),t&2){let s;B(s=N())&&(i.inherentRisksCanvas=s.first),B(s=N())&&(i.residualRisksCanvas=s.first)}},decls:3,vars:0,consts:[["inherentRisksChart",""],["residualRisksChart",""],[1,"risk-stats-container"],[1,"stat-cell"],[1,"stat-label"],[1,"chart-container"],[1,"stat-value"],[1,"chart-center-value"],[1,"stat-suffix"]],template:function(t,i){t&1&&(P(0,"div",2),rt(1,Ku,5,2,"div",3,Uu),U()),t&2&&(k(),lt(i.stats))},dependencies:[uo],styles:[".risk-stats-container[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:20px;background:#fff;padding:0}.stat-cell[_ngcontent-%COMP%]{flex:1;padding:30px 20px;background:#fff;border-right:1px solid #e0e0e0;text-align:center;min-width:0}.stat-cell[_ngcontent-%COMP%]:last-child{border-right:none}.stat-label[_ngcontent-%COMP%]{font-size:14px;color:#666;margin-bottom:10px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.stat-value[_ngcontent-%COMP%]{font-size:48px;font-weight:300;color:#333;line-height:1}.stat-suffix[_ngcontent-%COMP%]{font-size:18px;color:#666;margin-left:4px;font-weight:400}.chart-container[_ngcontent-%COMP%]{position:relative;width:120px;height:120px;margin:0 auto;z-index:1}.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;position:relative;z-index:2}.chart-center-value[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:36px;font-weight:300;color:#333;pointer-events:none;z-index:1}"]})};var Ju=["*"];function tf(e,n){e&1&&ht(0)}var $a=(()=>{class e{_elementRef=I(Ft);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return e})(),Ua=(()=>{class e{template=I(Ke);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","cdkStepLabel",""]]})}return e})();var Qe={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},ef=new Vt("STEPPER_GLOBAL_OPTIONS"),fs=(()=>{class e{_stepperOptions;_stepper=I(xi);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(t){this._interacted.set(t)}_interacted=Dt(!1);interactedStream=new bt;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(t){this._state.set(t)}_state=Dt(void 0);get editable(){return this._editable()}set editable(t){this._editable.set(t)}_editable=Dt(!0);optional=!1;get completed(){let t=this._completedOverride(),i=this._interacted();return t??(i&&(!this.stepControl||this.stepControl.valid))}set completed(t){this._completedOverride.set(t)}_completedOverride=Dt(null);index=Dt(-1);isSelected=ln(()=>this._stepper.selectedIndex===this.index());indicatorType=ln(()=>{let t=this.isSelected(),i=this.completed,s=this._state()??Qe.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!t?Qe.ERROR:this._displayDefaultIndicatorType?!i||t?Qe.NUMBER:a?Qe.EDIT:Qe.DONE:i&&!t?Qe.DONE:i&&t?s:a&&t?Qe.EDIT:s});isNavigable=ln(()=>{let t=this.isSelected();return this.completed||t||!this._stepper.linear});get hasError(){let t=this._customError();return t??this._getDefaultError()}set hasError(t){this._customError.set(t)}_customError=Dt(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let t=I(ef,{optional:!0});this._stepperOptions=t||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(t=>t.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=J({type:e,selectors:[["cdk-step"]],contentQueries:function(i,s,a){if(i&1&&Bt(a,Ua,5)(a,To,5),i&2){let o;B(o=N())&&(s.stepLabel=o.first),B(o=N())&&(s._childForms=o)}},viewQuery:function(i,s){if(i&1&&jt(Ke,7),i&2){let a;B(a=N())&&(s.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",gt],optional:[2,"optional","optional",gt],completed:[2,"completed","completed",gt],hasError:[2,"hasError","hasError",gt]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[sn],ngContentSelectors:Ju,decls:1,vars:0,template:function(i,s){i&1&&(zt(),lo(0,tf,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return e})(),xi=(()=>{class e{_dir=I(dn,{optional:!0});_changeDetectorRef=I(ve);_elementRef=I(Ft);_destroyed=new le;_keyManager;_steps;steps=new Ae;_stepHeader;_sortedHeaders=new Ae;get linear(){return this._linear()}set linear(t){this._linear.set(t)}_linear=Dt(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(t){this._steps?(this._isValidIndex(t),this.selectedIndex!==t&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(t)&&(t>=this.selectedIndex||this.steps.toArray()[t].editable)&&this._updateSelectedItemIndex(t))):this._selectedIndex.set(t)}_selectedIndex=Dt(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}selectionChange=new bt;selectedIndexChange=new bt;_groupId=I(un).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation(t==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(Ht(this._steps),St(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(i=>i._stepper===this)),this.steps.forEach((i,s)=>i.index.set(s)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Ht(this._stepHeader),St(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((i,s)=>i._elementRef.nativeElement.compareDocumentPosition(s._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new pn(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:no()).pipe(Ht(this._layoutDirection()),St(this._destroyed)).subscribe(t=>this._keyManager?.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let t=this.steps.toArray().slice(0,this._selectedIndex());for(let i of t)i._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`${this._groupId}-label-${t}`}_getStepContentId(t){return`${this._groupId}-content-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){let i=t-this._selectedIndex();return i<0?this._layoutDirection()==="rtl"?"next":"previous":i>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(t){let i=this.steps.toArray(),s=this._selectedIndex();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:s,selectedStep:i[t],previouslySelectedStep:i[s]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t)),this._selectedIndex.set(t),this.selectedIndexChange.emit(t),this._stateChanged()}_onKeydown(t){let i=yo(t),s=t.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!i&&(s===32||s===13)?(this.selectedIndex=a.activeItemIndex,t.preventDefault()):a?.setFocusOrigin("keyboard").onKeydown(t)}_anyControlsInvalidOrPending(t){return this.linear&&t>=0?this.steps.toArray().slice(0,t).some(i=>{let s=i.stepControl;return(s?s.invalid||s.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let t=this._elementRef.nativeElement,i=Cs();return t===i||t.contains(i)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","cdkStepper",""]],contentQueries:function(i,s,a){if(i&1&&Bt(a,fs,5)(a,$a,5),i&2){let o;B(o=N())&&(s._steps=o),B(o=N())&&(s._stepHeader=o)}},inputs:{linear:[2,"linear","linear",gt],selectedIndex:[2,"selectedIndex","selectedIndex",Mi],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return e})(),Cc=(()=>{class e{_stepper=I(xi);type="submit";constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(i,s){i&1&&z("click",function(){return s._stepper.next()}),i&2&&Zt("type",s.type)},inputs:{type:"type"}})}return e})(),Sc=(()=>{class e{_stepper=I(xi);type="button";constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(i,s){i&1&&z("click",function(){return s._stepper.previous()}),i&2&&Zt("type",s.type)},inputs:{type:"type"}})}return e})(),Mc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Xt({type:e});static \u0275inj=qt({imports:[Jt]})}return e})();var nf=(e,n,t)=>({index:e,active:n,optional:t});function sf(e,n){if(e&1&&Kt(0,2),e&2){let t=R();$("ngTemplateOutlet",t.iconOverrides[t.state])("ngTemplateOutletContext",ho(2,nf,t.index,t.active,t.optional))}}function af(e,n){if(e&1&&(_(0,"span",7),x(1),y()),e&2){let t=R(2);k(),Y(t._getDefaultTextForState(t.state))}}function of(e,n){if(e&1&&(_(0,"span",8),x(1),y()),e&2){let t=R(3);k(),Y(t._intl.completedLabel)}}function rf(e,n){if(e&1&&(_(0,"span",8),x(1),y()),e&2){let t=R(3);k(),Y(t._intl.editableLabel)}}function lf(e,n){if(e&1&&(W(0,of,2,1,"span",8)(1,rf,2,1,"span",8),_(2,"mat-icon",7),x(3),y()),e&2){let t=R(2);G(t.state==="done"?0:t.state==="edit"?1:-1),k(3),Y(t._getDefaultTextForState(t.state))}}function cf(e,n){if(e&1&&W(0,af,2,1,"span",7)(1,lf,4,2),e&2){let t,i=R();G((t=i.state)==="number"?0:1)}}function df(e,n){e&1&&(_(0,"div",4),Kt(1,9),y()),e&2&&(k(),$("ngTemplateOutlet",n.template))}function hf(e,n){if(e&1&&(_(0,"div",4),x(1),y()),e&2){let t=R();k(),Y(t.label)}}function mf(e,n){if(e&1&&(_(0,"div",5),x(1),y()),e&2){let t=R();k(),Y(t._intl.optionalLabel)}}function pf(e,n){if(e&1&&(_(0,"div",6),x(1),y()),e&2){let t=R();k(),Y(t.errorMessage)}}var Dc=["*"];function uf(e,n){}function ff(e,n){if(e&1&&(ht(0),vt(1,uf,0,0,"ng-template",0)),e&2){let t=R();k(),$("cdkPortalOutlet",t._portal)}}var gf=["animatedContainer"],Ic=e=>({steps:e}),Rc=e=>({step:e});function _f(e,n){e&1&&ht(0)}function bf(e,n){if(e&1&&(_(0,"div",5),Kt(1,9)(2,6),y()),e&2){let t=R(2),i=Je(6);k(),$("ngTemplateOutlet",t.headerPrefix()),k(),$("ngTemplateOutlet",i)("ngTemplateOutletContext",Si(3,Ic,t.steps))}}function vf(e,n){if(e&1&&Kt(0,6),e&2){let t=R(2),i=Je(6);$("ngTemplateOutlet",i)("ngTemplateOutletContext",Si(2,Ic,t.steps))}}function yf(e,n){if(e&1&&(_(0,"div",10,2),Kt(2,9),y()),e&2){let t=n.$implicit,i=n.$index,s=R(2);ti("mat-horizontal-stepper-content-"+s._getAnimationDirection(i)),$("id",s._getStepContentId(i)),F("aria-labelledby",s._getStepLabelId(i))("inert",s.selectedIndex===i?null:""),k(2),$("ngTemplateOutlet",t.content)}}function xf(e,n){if(e&1&&(_(0,"div",3),W(1,bf,3,5,"div",5)(2,vf,1,4,"ng-container",6),_(3,"div",7),rt(4,yf,3,6,"div",8,be),y()()),e&2){let t=R();k(),G(t.headerPrefix()?1:2),k(3),lt(t.steps)}}function kf(e,n){if(e&1&&Kt(0,9),e&2){let t=R(2);$("ngTemplateOutlet",t.headerPrefix())}}function wf(e,n){if(e&1&&(_(0,"div",11),Kt(1,6),_(2,"div",12,2)(4,"div",13)(5,"div",14),Kt(6,9),y()()()()),e&2){let t=n.$implicit,i=n.$index,s=n.$index,a=n.$count,o=R(2),r=Je(4);k(),$("ngTemplateOutlet",r)("ngTemplateOutletContext",Si(11,Rc,t)),k(),ut("mat-stepper-vertical-line",s!==a-1)("mat-vertical-content-container-active",o.selectedIndex===i),F("inert",o.selectedIndex===i?null:"")("aria-label",o.ariaLabel),k(2),$("id",o._getStepContentId(i)),F("aria-labelledby",o._getStepLabelId(i)),k(2),$("ngTemplateOutlet",t.content)}}function Cf(e,n){if(e&1&&(_(0,"div",4),W(1,kf,1,1,"ng-container",9),rt(2,wf,7,13,"div",11,be),y()),e&2){let t=R();k(),G(t.headerPrefix()?1:-1),k(),lt(t.steps)}}function Sf(e,n){if(e&1){let t=dt();_(0,"mat-step-header",15),z("click",function(){let s=K(t).step;return Z(s.select())})("keydown",function(s){K(t);let a=R();return Z(a._onKeydown(s))}),y()}if(e&2){let t=n.step,i=R();ut("mat-horizontal-stepper-header",i.orientation==="horizontal")("mat-vertical-stepper-header",i.orientation==="vertical"),$("tabIndex",i._getFocusIndex()===t.index()?0:-1)("id",i._getStepLabelId(t.index()))("index",t.index())("state",t.indicatorType())("label",t.stepLabel||t.label)("selected",t.isSelected())("active",t.isNavigable())("optional",t.optional)("errorMessage",t.errorMessage)("iconOverrides",i._iconOverrides)("disableRipple",i.disableRipple||!t.isNavigable())("color",t.color||i.color),F("role",i.orientation==="horizontal"?"tab":"button")("aria-posinset",i.orientation==="horizontal"?t.index()+1:null)("aria-setsize",i.orientation==="horizontal"?i.steps.length:null)("aria-selected",i.orientation==="horizontal"?t.isSelected():null)("aria-current",i.orientation==="vertical"&&t.isSelected()?"step":null)("aria-disabled",i.orientation==="vertical"&&t.isSelected()?"true":null)("aria-expanded",i.orientation==="vertical"?t.isSelected():null)("aria-controls",i._getStepContentId(t.index()))("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null)("aria-disabled",t.isNavigable()?null:!0)}}function Mf(e,n){e&1&&tt(0,"div",17)}function Df(e,n){if(e&1&&(Kt(0,6),W(1,Mf,1,0,"div",17)),e&2){let t=n.$implicit,i=n.$index,s=n.$count;R(2);let a=Je(4);$("ngTemplateOutlet",a)("ngTemplateOutletContext",Si(3,Rc,t)),k(),G(i!==s-1?1:-1)}}function If(e,n){if(e&1&&(_(0,"div",16),rt(1,Df,2,5,null,null,be),y()),e&2){let t=n.steps,i=R();F("aria-label",i.ariaLabel),k(),lt(t)}}var qi=(()=>{class e extends Ua{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["","matStepLabel",""]],features:[It]})}return e})(),Rf=(()=>{class e{changes=new le;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(i){return new(i||e)};static \u0275prov=ao({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Qa=(()=>{class e extends $a{_intl=I(Rf);_focusMonitor=I(mn);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let t=I(Fe);t.load(ze),t.load(cn);let i=I(ve);this._intlSubscription=this._intl.changes.subscribe(()=>i.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,i){t?this._focusMonitor.focusVia(this._elementRef,t,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof qi?null:this.label}_templateLabel(){return this.label instanceof qi?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(t){return t=="number"?`${this.index+1}`:t=="edit"?"create":t=="error"?"warning":t}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=J({type:e,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(i,s){i&2&&(ti("mat-"+(s.color||"primary")),ut("mat-step-header-empty-label",s._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[It],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(i,s){if(i&1&&(tt(0,"div",0),_(1,"div")(2,"div",1),W(3,sf,1,6,"ng-container",2)(4,cf,2,1),y()(),_(5,"div",3),W(6,df,2,1,"div",4)(7,hf,2,1,"div",4),W(8,mf,2,1,"div",5),W(9,pf,2,1,"div",6),y()),i&2){let a;$("matRippleTrigger",s._getHostElement())("matRippleDisabled",s.disableRipple),k(),ti(co("mat-step-icon-state-",s.state," mat-step-icon")),ut("mat-step-icon-selected",s.selected),k(2),G(s.iconOverrides&&s.iconOverrides[s.state]?3:4),k(2),ut("mat-step-label-active",s.active)("mat-step-label-selected",s.selected)("mat-step-label-error",s.state=="error"),k(),G((a=s._templateLabel())?6:s._stringLabel()?7:-1,a),k(2),G(s._hasOptionalLabel()?8:-1),k(),G(s._hasErrorLabel()?9:-1)}},dependencies:[ko,ws,ei],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return e})(),Ef=(()=>{class e{templateRef=I(Ke);name;constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return e})(),Tf=(()=>{class e{_template=I(Ke);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["ng-template","matStepContent",""]]})}return e})(),Ya=(()=>{class e extends fs{_errorStateMatcher=I(oi,{skipSelf:!0});_viewContainerRef=I(ro);_isSelected=tn.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(en(()=>this._stepper.selectionChange.pipe(so(t=>t.selectedStep===this),Ht(this._stepper.selected===this)))).subscribe(t=>{t&&this._lazyContent&&!this._portal&&(this._portal=new So(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(t,i){let s=this._errorStateMatcher.isErrorState(t,i),a=!!(t&&t.invalid&&this.interacted);return s||a}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275cmp=J({type:e,selectors:[["mat-step"]],contentQueries:function(i,s,a){if(i&1&&Bt(a,qi,5)(a,Tf,5),i&2){let o;B(o=N())&&(s.stepLabel=o.first),B(o=N())&&(s._lazyContent=o.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[ce([{provide:oi,useExisting:e},{provide:fs,useExisting:e}]),It],ngContentSelectors:Dc,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(i,s){i&1&&(zt(),vt(0,ff,2,1,"ng-template"))},dependencies:[Mo],encapsulation:2,changeDetection:0})}return e})(),qa=(()=>{class e extends xi{_ngZone=I(Xe);_renderer=I(an);_animationsDisabled=ni();_cleanupTransition;_isAnimating=Dt(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Ae;_icons;animationDone=new bt;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=po(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}_animationDuration="";_isServer=!I(hn).isBrowser;constructor(){super();let i=I(Ft).nativeElement.nodeName.toLowerCase();this.orientation=i==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:t,templateRef:i})=>this._iconOverrides[t]=i),this.steps.changes.pipe(St(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(St(this._destroyed)).subscribe(()=>{let t=this._getAnimationDuration();t==="0ms"||t==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let t=!1;this._animatedContainers.changes.pipe(Ht(null),St(this._destroyed)).subscribe(()=>queueMicrotask(()=>{t||(t=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=t=>{let i=t.target;if(!i)return;let s=this.orientation==="horizontal"&&t.propertyName==="transform"&&i.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&t.propertyName==="grid-template-rows"&&i.classList.contains("mat-vertical-content-container-active");(s||a)&&this._animatedContainers.find(r=>r.nativeElement===i)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=J({type:e,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(i,s,a){if(i&1&&Bt(a,Ya,5)(a,Ef,5),i&2){let o;B(o=N())&&(s._steps=o),B(o=N())&&(s._icons=o)}},viewQuery:function(i,s){if(i&1&&jt(Qa,5)(gf,5),i&2){let a;B(a=N())&&(s._stepHeader=a),B(a=N())&&(s._animatedContainers=a)}},hostVars:14,hostBindings:function(i,s){i&2&&(on("--mat-stepper-animation-duration",s._getAnimationDuration()),ut("mat-stepper-horizontal",s.orientation==="horizontal")("mat-stepper-vertical",s.orientation==="vertical")("mat-stepper-label-position-end",s.orientation==="horizontal"&&s.labelPosition=="end")("mat-stepper-label-position-bottom",s.orientation==="horizontal"&&s.labelPosition=="bottom")("mat-stepper-header-position-bottom",s.headerPosition==="bottom")("mat-stepper-animating",s._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[ce([{provide:xi,useExisting:e}]),It],ngContentSelectors:Dc,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(i,s){if(i&1&&(zt(),W(0,_f,1,0),W(1,xf,6,1,"div",3)(2,Cf,4,1,"div",4),vt(3,Sf,1,27,"ng-template",null,0,rn)(5,If,3,1,"ng-template",null,1,rn)),i&2){let a;G(s._isServer?0:-1),k(),G((a=s.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[ws,Qa],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return e})(),Ec=(()=>{class e extends Cc{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(i,s){i&2&&Zt("type",s.type)},features:[It]})}return e})(),Tc=(()=>{class e extends Sc{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(i,s){i&2&&Zt("type",s.type)},features:[It]})}return e})(),Oc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Xt({type:e});static \u0275inj=qt({providers:[oi],imports:[Do,Mc,ii,ai,qa,Qa,Jt]})}return e})();var zc=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Bc=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Af(e,n){e&1&&(_(0,"span",3),ht(1,1),y())}function Pf(e,n){e&1&&(_(0,"span",6),ht(1,2),y())}function Lf(e,n){e&1&&(_(0,"span",3),ht(1,1),_(2,"span",7),Mt(),_(3,"svg",8),tt(4,"path",9),y()()())}function Ff(e,n){e&1&&(_(0,"span",6),ht(1,2),y())}var zf=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var Nc=["*"],Bf=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`,Za=new Vt("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Ac=new Vt("MatChipAvatar"),Pc=new Vt("MatChipTrailingIcon"),Lc=new Vt("MatChipEdit"),Fc=new Vt("MatChipRemove"),Ja=new Vt("MatChip"),Hc=(()=>{class e{_elementRef=I(Ft);_parentChip=I(Ja);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){I(Fe).load(ze),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=ot({type:e,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,s){i&2&&(F("disabled",s._getDisabledAttribute())("aria-disabled",s.disabled),ut("mdc-evolution-chip__action--primary",s._isPrimary)("mdc-evolution-chip__action--secondary",!s._isPrimary)("mdc-evolution-chip__action--trailing",!s._isPrimary&&!s._isLeading))},inputs:{disabled:[2,"disabled","disabled",gt],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:Mi(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return e})(),Vc=(()=>{class e extends Hc{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275dir=ot({type:e,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,s){i&1&&z("click",function(o){return s._handleClick(o)})("keydown",function(o){return s._handleKeydown(o)}),i&2&&(F("tabindex",s._getTabindex()),ut("mdc-evolution-chip__action--presentational",!1))},features:[It]})}return e})();var Xa=(()=>{class e{_changeDetectorRef=I(ve);_elementRef=I(Ft);_tagName=I(mo);_ngZone=I(Xe);_focusMonitor=I(mn);_globalRippleOptions=I(fn,{optional:!0});_document=I(oo);_onFocus=new le;_onBlur=new le;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ni();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=I(un).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new bt;destroyed=new bt;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=I(wo);_injector=I(nn);constructor(){let t=I(Fe);t.load(ze),t.load(cn),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Ci(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let s=i._elementRef.nativeElement;return s===t||s.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=J({type:e,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,s,a){if(i&1&&Bt(a,Ac,5)(a,Lc,5)(a,Pc,5)(a,Fc,5)(a,Ac,5)(a,Pc,5)(a,Lc,5)(a,Fc,5),i&2){let o;B(o=N())&&(s.leadingIcon=o.first),B(o=N())&&(s.editIcon=o.first),B(o=N())&&(s.trailingIcon=o.first),B(o=N())&&(s.removeIcon=o.first),B(o=N())&&(s._allLeadingIcons=o),B(o=N())&&(s._allTrailingIcons=o),B(o=N())&&(s._allEditIcons=o),B(o=N())&&(s._allRemoveIcons=o)}},viewQuery:function(i,s){if(i&1&&jt(Vc,5),i&2){let a;B(a=N())&&(s.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,s){i&1&&z("keydown",function(o){return s._handleKeydown(o)}),i&2&&(Zt("id",s.id),F("role",s.role)("aria-label",s.ariaLabel),ti("mat-"+(s.color||"primary")),ut("mdc-evolution-chip",!s._isBasicChip)("mdc-evolution-chip--disabled",s.disabled)("mdc-evolution-chip--with-trailing-action",s._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",s.leadingIcon)("mdc-evolution-chip--with-primary-icon",s.leadingIcon)("mdc-evolution-chip--with-avatar",s.leadingIcon)("mat-mdc-chip-with-avatar",s.leadingIcon)("mat-mdc-chip-highlighted",s.highlighted)("mat-mdc-chip-disabled",s.disabled)("mat-mdc-basic-chip",s._isBasicChip)("mat-mdc-standard-chip",!s._isBasicChip)("mat-mdc-chip-with-trailing-icon",s._hasTrailingIcon())("_mat-animation-noopable",s._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",gt],highlighted:[2,"highlighted","highlighted",gt],disableRipple:[2,"disableRipple","disableRipple",gt],disabled:[2,"disabled","disabled",gt]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[ce([{provide:Ja,useExisting:e}])],ngContentSelectors:Bc,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,s){i&1&&(zt(zc),tt(0,"span",0),_(1,"span",1)(2,"span",2),W(3,Af,2,0,"span",3),_(4,"span",4),ht(5),tt(6,"span",5),y()()(),W(7,Pf,2,0,"span",6)),i&2&&(k(3),G(s.leadingIcon?3:-1),k(4),G(s._hasTrailingIcon()?7:-1))},dependencies:[Hc],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return e})();var to=(()=>{class e extends Xa{_defaultOptions=I(Za,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=t,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(t){this._setSelectedState(t,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new bt;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(t=!1){return this._setSelectedState(!this.selected,t,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(t,i,s){t!==this.selected&&(this._selected=t,s&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275cmp=J({type:e,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,s){i&2&&(Zt("id",s.id),F("tabindex",null)("aria-label",null)("aria-description",null)("role",s.role),ut("mdc-evolution-chip",!s._isBasicChip)("mdc-evolution-chip--filter",!s._isBasicChip)("mdc-evolution-chip--selectable",!s._isBasicChip)("mat-mdc-chip-selected",s.selected)("mat-mdc-chip-multiple",s._chipListMultiple)("mat-mdc-chip-disabled",s.disabled)("mat-mdc-chip-with-avatar",s.leadingIcon)("mdc-evolution-chip--disabled",s.disabled)("mdc-evolution-chip--selected",s.selected)("mdc-evolution-chip--selecting",!s._animationsDisabled)("mdc-evolution-chip--with-trailing-action",s._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",s.leadingIcon)("mdc-evolution-chip--with-primary-graphic",s._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",s.leadingIcon)("mat-mdc-chip-highlighted",s.highlighted)("mat-mdc-chip-with-trailing-icon",s._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",gt],selected:[2,"selected","selected",gt]},outputs:{selectionChange:"selectionChange"},features:[ce([{provide:Xa,useExisting:e},{provide:Ja,useExisting:e}]),It],ngContentSelectors:Bc,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,s){i&1&&(zt(zc),tt(0,"span",0),_(1,"span",1)(2,"button",2),W(3,Lf,5,0,"span",3),_(4,"span",4),ht(5),tt(6,"span",5),y()()(),W(7,Ff,2,0,"span",6)),i&2&&(k(2),$("_allowFocusWhenDisabled",!0),F("aria-description",s.ariaDescription)("aria-label",s.ariaLabel)("aria-selected",s.ariaSelected),k(),G(s._hasLeadingGraphic()?3:-1),k(4),G(s._hasTrailingIcon()?7:-1))},dependencies:[Vc],styles:[zf],encapsulation:2,changeDetection:0})}return e})();var Nf=(()=>{class e{_elementRef=I(Ft);_changeDetectorRef=I(ve);_dir=I(dn,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new le;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Ae;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(Ht(null),en(()=>Ci(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Ht(this._chips)).subscribe(t=>{let i=[];t.forEach(s=>s._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new pn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(St(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(St(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Ht(null),St(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(St(this._destroyed)).subscribe(t=>{let s=this._chips.toArray().indexOf(t.chip),a=t.chip._hasFocus(),o=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),r=a||o;this._isValidIndex(s)&&r&&(this._lastDestroyedFocusedChipIndex=s)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=J({type:e,selectors:[["mat-chip-set"]],contentQueries:function(i,s,a){if(i&1&&Bt(a,Xa,5),i&2){let o;B(o=N())&&(s._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,s){i&1&&z("keydown",function(o){return s._handleKeydown(o)}),i&2&&F("role",s.role)},inputs:{disabled:[2,"disabled","disabled",gt],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:Mi(t)]},ngContentSelectors:Nc,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,s){i&1&&(zt(),P(0,"div",0),ht(1),U())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2,changeDetection:0})}return e})(),Ka=class{source;value;constructor(n,t){this.source=n,this.value=t}},Hf={provide:Eo,useExisting:vs(()=>eo),multi:!0},eo=(()=>{class e extends Nf{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=I(Za,{optional:!0});get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._syncListboxProperties()}_multiple=!1;get selected(){let t=this._chips.toArray().filter(i=>i.selected);return this.multiple?t:t[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(t){this._selectable=t,this._syncListboxProperties()}_selectable=!0;compareWith=(t,i)=>t===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(t=>t.selectionChange)}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}get value(){return this._value}set value(t){this._chips&&this._chips.length&&this._setSelectionByValue(t,!1),this._value=t}_value;change=new bt;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Ht(null),St(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(St(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(St(this._destroyed)).subscribe(t=>{this.multiple||this._chips.forEach(i=>{i!==t.source&&i._setSelectedState(!1,!1,!1)}),t.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let t=this._getFirstSelectedChip();t&&!t.disabled?t.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(t){t!=null?this.value=t:this.value=void 0}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_setSelectionByValue(t,i=!0){this._clearSelection(),Array.isArray(t)?t.forEach(s=>this._selectValue(s,i)):this._selectValue(t,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(t){t.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let t=null;Array.isArray(this.selected)?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:void 0,this._value=t,this.change.emit(new Ka(this,t)),this._onChange(t),this._changeDetectorRef.markForCheck()}_clearSelection(t){this._chips.forEach(i=>{i!==t&&i.deselect()})}_selectValue(t,i){let s=this._chips.find(a=>a.value!=null&&this.compareWith(a.value,t));return s&&(i?s.selectViaInteraction():s.select()),s}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(t=>{t._chipListMultiple=this.multiple,t.chipListSelectable=this._selectable,t._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,t._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(t){return!1}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Tt(e)))(s||e)}})();static \u0275cmp=J({type:e,selectors:[["mat-chip-listbox"]],contentQueries:function(i,s,a){if(i&1&&Bt(a,to,5),i&2){let o;B(o=N())&&(s._chips=o)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,s){i&1&&z("focus",function(){return s.focus()})("blur",function(){return s._blur()})("keydown",function(o){return s._keydown(o)}),i&2&&(Zt("tabIndex",s.disabled||s.empty?-1:s.tabIndex),F("role",s.role)("aria-required",s.role?s.required:null)("aria-disabled",s.disabled.toString())("aria-multiselectable",s.multiple)("aria-orientation",s.ariaOrientation),ut("mat-mdc-chip-list-disabled",s.disabled)("mat-mdc-chip-list-required",s.required))},inputs:{multiple:[2,"multiple","multiple",gt],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",gt],compareWith:"compareWith",required:[2,"required","required",gt],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",gt],value:"value"},outputs:{change:"change"},features:[ce([Hf]),It],ngContentSelectors:Nc,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,s){i&1&&(zt(),P(0,"div",0),ht(1),U())},styles:[Bf],encapsulation:2,changeDetection:0})}return e})();var jc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Xt({type:e});static \u0275inj=qt({providers:[oi,{provide:Za,useValue:{separatorKeyCodes:[13]}}],imports:[ai,Jt]})}return e})();var qf=(e,n)=>n.value,Wc=(e,n)=>n.Id;function Xf(e,n){e&1&&x(0,"Choose Associated Objective")}function Kf(e,n){if(e&1){let t=dt();_(0,"mat-chip-option",27),z("click",function(){let s=K(t).$implicit,a=R();return Z(a.onDivisionSelect(s.value))}),x(1),y()}if(e&2){let t=n.$implicit,i=R();$("value",t.value)("selected",i.isDivisionSelected(t.value)),k(),Nt(" ",t.label," ")}}function Zf(e,n){if(e&1&&(_(0,"mat-option",23),x(1),y()),e&2){let t=n.$implicit;$("value",t.Id),k(),Nt(" ",t.Title," ")}}function Jf(e,n){if(e&1){let t=dt();_(0,"mat-form-field",14)(1,"mat-label"),x(2,"Select Objective"),y(),_(3,"mat-select",28),z("selectionChange",function(s){K(t);let a=R();return Z(a.onObjectiveSelect(s.value))}),rt(4,Zf,2,2,"mat-option",23,Wc),y()()}if(e&2){let t=R();k(4),lt(t.filteredObjectives)}}function tg(e,n){e&1&&x(0,"Fill in Risk Details")}function eg(e,n){e&1&&x(0,"Assign Owner")}function ig(e,n){if(e&1&&(_(0,"mat-option",23),x(1),y()),e&2){let t=n.$implicit;$("value",t.Id),k(),Nt(" ",t.Title," ")}}function ng(e,n){e&1&&x(0,"Verify Risk Data")}var gs=class e{logger=I(te);dialogRef=I(Io);formBuilder=I(zo);dataService=I(Wt);objectiveFormGroup;riskFormGroup;ownerFormGroup;divisions=[{value:"NAPMO",label:"NAPMO"},{value:"FN",label:"Finance Office"},{value:"HRGS",label:"HR&GS"},{value:"IKM",label:"IKM"},{value:"SEC",label:"Security Office"},{value:"EN",label:"Engineer's Office"},{value:"PM",label:"PM Division"},{value:"PS",label:"PS Division"}];selectedDivision="";filteredObjectives=[];allObjectives=[];selectedObjective=null;siteUsers=[];selectedOwner=null;constructor(){this.objectiveFormGroup=this.formBuilder.group({divisionCtrl:["",Be.required],objectiveCtrl:["",Be.required]}),this.riskFormGroup=this.formBuilder.group({titleCtrl:["",Be.required],descriptionCtrl:["",Be.required]}),this.ownerFormGroup=this.formBuilder.group({ownerCtrl:["",Be.required]})}async ngOnInit(){try{this.allObjectives=this.dataService.objectives(),this.logger.debugLog("Loaded objectives for risk dialog",{count:this.allObjectives.length}),this.siteUsers=await this.loadSiteUsers(),this.logger.debugLog("Loaded site users for risk dialog",{count:this.siteUsers.length})}catch(n){this.logger.debugLog("Failed to load data",n)}}loadSiteUsers=async()=>{let n=this.dataService.siteUsers(),t=[];for(let i=0;i<n.length;i++){let s=n[i];s.PrincipalType===1&&s.Email&&!s.IsHiddenInUI&&t.push(s)}return t};onDivisionSelect=n=>{this.selectedDivision=n,this.objectiveFormGroup.patchValue({divisionCtrl:n}),this.filteredObjectives=[];for(let t=0;t<this.allObjectives.length;t++)this.allObjectives[t].OrgDivision===n&&this.filteredObjectives.push(this.allObjectives[t]);this.logger.debugLog("Division selected",{division:n,objectiveCount:this.filteredObjectives.length}),this.objectiveFormGroup.patchValue({objectiveCtrl:""}),this.selectedObjective=null};isDivisionSelected=n=>this.selectedDivision===n;onObjectiveSelect=n=>{for(let t=0;t<this.filteredObjectives.length;t++)if(this.filteredObjectives[t].Id===n){this.selectedObjective=this.filteredObjectives[t];break}this.logger.debugLog("Objective selected",{objectiveId:n,objective:this.selectedObjective})};onOwnerSelect=n=>{for(let t=0;t<this.siteUsers.length;t++)if(this.siteUsers[t].Id===n){this.selectedOwner=this.siteUsers[t];break}this.logger.debugLog("Owner selected",{ownerId:n,owner:this.selectedOwner})};getSelectedDivisionLabel=()=>{for(let n=0;n<this.divisions.length;n++)if(this.divisions[n].value===this.selectedDivision)return this.divisions[n].label;return""};onSave=async()=>{if(!this.objectiveFormGroup.valid||!this.riskFormGroup.valid||!this.ownerFormGroup.valid){this.logger.debugLog("Cannot save risk - invalid form data");return}let n={Title:this.riskFormGroup.get("titleCtrl")?.value,Description:this.riskFormGroup.get("descriptionCtrl")?.value,ParentId:this.objectiveFormGroup.get("objectiveCtrl")?.value,OwnerId:this.ownerFormGroup.get("ownerCtrl")?.value};this.logger.debugLog("Saving new risk",n),this.dialogRef.close(n)};onCancel=()=>{this.logger.debugLog("Add risk dialog cancelled"),this.dialogRef.close(null)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-add-risk-dialog"]],decls:108,vars:16,consts:[["stepper",""],[1,"info-card"],["color","primary"],[1,"spacer"],["mat-button","",3,"click"],["labelPosition","bottom","linear",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"step-content"],[1,"division-section"],[1,"section-label"],["aria-label","Division selection","formControlName","divisionCtrl",1,"division-chips"],[3,"value","selected"],["appearance","outline",1,"objective-select"],[1,"step-actions"],["mat-raised-button","","color","primary","matStepperNext","",3,"disabled"],["appearance","outline"],["matInput","","formControlName","titleCtrl","placeholder","Enter risk title","required",""],["matInput","","formControlName","descriptionCtrl","placeholder","Enter risk description","rows","6","required",""],["mat-button","","matStepperPrevious",""],["appearance","outline",1,"owner-select"],["formControlName","ownerCtrl","required","",3,"selectionChange"],[3,"value"],[1,"verification-section"],[1,"verification-field"],["mat-raised-button","","color","primary",3,"click"],[3,"click","value","selected"],["formControlName","objectiveCtrl","required","",3,"selectionChange"]],template:function(t,i){if(t&1&&(_(0,"mat-card",1)(1,"mat-toolbar",2)(2,"span"),x(3,"ADD RISK"),y(),tt(4,"span",3),_(5,"button",4),z("click",function(){return i.onCancel()}),x(6," CANCEL "),y()(),_(7,"mat-card-content")(8,"mat-stepper",5,0)(10,"mat-step",6)(11,"form",7),vt(12,Xf,1,0,"ng-template",8),_(13,"div",9)(14,"div",10)(15,"label",11),x(16,"Select Division"),y(),_(17,"mat-chip-listbox",12),rt(18,Kf,2,3,"mat-chip-option",13,qf),y()(),W(20,Jf,6,0,"mat-form-field",14),_(21,"div",15)(22,"button",16),x(23," Next "),y()()()()(),_(24,"mat-step",6)(25,"form",7),vt(26,tg,1,0,"ng-template",8),_(27,"div",9)(28,"mat-form-field",17)(29,"mat-label"),x(30,"RISK TITLE"),y(),tt(31,"input",18),y(),_(32,"mat-form-field",17)(33,"mat-label"),x(34,"RISK DESCRIPTION"),y(),_(35,"textarea",19),x(36,"              "),y()(),_(37,"div",15)(38,"button",20),x(39,"Back"),y(),_(40,"button",16),x(41," Next "),y()()()()(),_(42,"mat-step",6)(43,"form",7),vt(44,eg,1,0,"ng-template",8),_(45,"div",9)(46,"mat-form-field",21)(47,"mat-label"),x(48,"Select Risk Owner"),y(),_(49,"mat-select",22),z("selectionChange",function(a){return i.onOwnerSelect(a.value)}),rt(50,ig,2,2,"mat-option",23,Wc),y(),_(52,"mat-hint"),x(53,"Select the person responsible for managing this risk"),y()(),_(54,"div",15)(55,"button",20),x(56,"Back"),y(),_(57,"button",16),x(58," Next "),y()()()()(),_(59,"mat-step"),vt(60,ng,1,0,"ng-template",8),_(61,"div",9)(62,"div",24)(63,"h3"),x(64,"Associated Objective"),y(),_(65,"div",25)(66,"label"),x(67,"Division:"),y(),_(68,"span"),x(69),y()(),_(70,"div",25)(71,"label"),x(72,"Objective:"),y(),_(73,"span"),x(74),y()()(),_(75,"div",24)(76,"h3"),x(77,"Risk Details"),y(),_(78,"div",25)(79,"label"),x(80,"Title:"),y(),_(81,"span"),x(82),y()(),_(83,"div",25)(84,"label"),x(85,"Description:"),y(),_(86,"span"),x(87),y()()(),_(88,"div",24)(89,"h3"),x(90,"Risk Owner"),y(),_(91,"div",25)(92,"label"),x(93,"Owner:"),y(),_(94,"span"),x(95),y()(),_(96,"div",25)(97,"label"),x(98,"Email:"),y(),_(99,"span"),x(100),y()()(),_(101,"div",15)(102,"button",20),x(103,"Back"),y(),_(104,"button",26),z("click",function(){return i.onSave()}),_(105,"mat-icon"),x(106,"save"),y(),x(107," SAVE "),y()()()()()()()),t&2){let s,a;k(10),$("stepControl",i.objectiveFormGroup),k(),$("formGroup",i.objectiveFormGroup),k(7),lt(i.divisions),k(2),G(i.selectedDivision?20:-1),k(2),$("disabled",!i.objectiveFormGroup.valid),k(2),$("stepControl",i.riskFormGroup),k(),$("formGroup",i.riskFormGroup),k(15),$("disabled",!i.riskFormGroup.valid),k(2),$("stepControl",i.ownerFormGroup),k(),$("formGroup",i.ownerFormGroup),k(7),lt(i.siteUsers),k(7),$("disabled",!i.ownerFormGroup.valid),k(12),Y(i.getSelectedDivisionLabel()),k(5),Y((i.selectedObjective==null?null:i.selectedObjective.Title)||"Not selected"),k(8),Y((s=i.riskFormGroup.get("titleCtrl"))==null?null:s.value),k(5),Y((a=i.riskFormGroup.get("descriptionCtrl"))==null?null:a.value),k(8),Y((i.selectedOwner==null?null:i.selectedOwner.Title)||"Not selected"),k(5),Y((i.selectedOwner==null?null:i.selectedOwner.Email)||"N/A")}},dependencies:[yn,Po,bn,vn,Oo,Fo,Bo,Ss,Lo,Dn,Sn,Mn,Rn,In,ii,ei,_n,gn,kn,xn,No,Ho,Cn,wn,Oc,Ya,qi,qa,Ec,Tc,jc,eo,to,nr,ir,er,vo],styles:["mat-card[_ngcontent-%COMP%]{padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{height:48px;font-size:14px;font-weight:500}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}mat-stepper[_ngcontent-%COMP%]{background:transparent}.step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px 0;min-height:300px}.division-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.section-label[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#0009}.division-chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.objective-select[_ngcontent-%COMP%], .owner-select[_ngcontent-%COMP%]{width:100%}.step-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.step-actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:auto;padding-top:20px}.step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:100px}.verification-section[_ngcontent-%COMP%]{padding:16px;background-color:#f5f5f5;border-radius:4px;margin-bottom:16px}.verification-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 12px;font-size:16px;font-weight:500;color:#000000de}.verification-field[_ngcontent-%COMP%]{display:flex;gap:12px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.12)}.verification-field[_ngcontent-%COMP%]:last-child{border-bottom:none}.verification-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;min-width:120px;color:#0009}.verification-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;color:#000000de}"]})};var sg=(e,n)=>n.impact+"-"+n.likelihood;function ag(e,n){if(e&1){let t=dt();Mt(),P(0,"g",40),Ze("click",function(){K(t);let s=R().$implicit,a=R();return Z(a.onCellClick(s))}),Rt(1,"circle",41),P(2,"text",42),x(3),U()()}if(e&2){let t=R().$implicit;k(),F("cx",t.x)("cy",t.y),k(),F("x",t.x)("y",t.y),k(),Y(t.count)}}function og(e,n){if(e&1&&W(0,ag,4,5,":svg:g",39),e&2){let t=n.$implicit;G(t.count>0?0:-1)}}var Xi=class e{dataService=I(Wt);logger=I(te);MATRIX_SIZE=5;CELL_SIZE=50;MARGIN=30;cells=[];cellSelected=new bt;constructor(){_e(()=>{this.dataService.risksLoaded()&&this.buildCells()})}getCellCenterX=n=>this.MARGIN+(n-1)*this.CELL_SIZE+this.CELL_SIZE/2;getCellCenterY=n=>{let t=this.MATRIX_SIZE+1-n;return this.MARGIN+(t-1)*this.CELL_SIZE+this.CELL_SIZE/2};countRisksForCell=(n,t)=>{let i=this.dataService.risks(),s=0;for(let a=0;a<i.length;a++)i[a].InherentImpact===n&&i[a].InherentLikelihood===t&&(s=s+1);return s};buildCells=()=>{let n=[];for(let t=1;t<=this.MATRIX_SIZE;t++)for(let i=1;i<=this.MATRIX_SIZE;i++){let s={impact:i,likelihood:t,x:this.getCellCenterX(i),y:this.getCellCenterY(t),count:this.countRisksForCell(i,t)};n.push(s)}this.cells=n,this.logger.debugLog("Risk matrix summary built",{cellCount:n.length})};refreshCounts=()=>{this.buildCells()};onCellClick=n=>{this.logger.debugLog("Matrix cell clicked",{impact:n.impact,likelihood:n.likelihood,count:n.count}),this.cellSelected.emit(n)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-risk-matrix-summary"]],outputs:{cellSelected:"cellSelected"},decls:53,vars:0,consts:[[1,"risk-matrix-container"],["width","80%","height","80%","viewBox","-10 -10 330 340","xmlns","http://www.w3.org/2000/svg"],["x","30","y","30","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","80","y","30","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","130","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","180","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","230","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","80","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","80","y","80","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","130","y","80","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","180","y","80","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","230","y","80","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","130","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","130","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","130","y","130","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","180","y","130","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","230","y","130","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","180","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","180","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","130","y","180","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","180","y","180","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","230","y","180","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","30","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","130","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","180","y","230","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","230","y","230","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","55","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","105","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","155","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","205","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","255","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","58","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","108","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","158","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","208","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","258","text-anchor","middle","font-size","12","fill","#333"],["x","155","y","320","text-anchor","middle","font-size","12","fill","#333"],["x","5","y","160","text-anchor","middle","font-size","12","fill","#333","transform","rotate(-90 5 160)"],[1,"risk-count-label"],[1,"risk-count-label",3,"click"],["r","12","fill","#000","opacity","0.75"],["text-anchor","middle","dominant-baseline","middle","font-size","12","font-weight","600","font-family","Roboto, sans-serif","fill","#fff"]],template:function(t,i){t&1&&(P(0,"div",0),Mt(),P(1,"svg",1),Rt(2,"rect",2)(3,"rect",3)(4,"rect",4)(5,"rect",5)(6,"rect",6)(7,"rect",7)(8,"rect",8)(9,"rect",9)(10,"rect",10)(11,"rect",11)(12,"rect",12)(13,"rect",13)(14,"rect",14)(15,"rect",15)(16,"rect",16)(17,"rect",17)(18,"rect",18)(19,"rect",19)(20,"rect",20)(21,"rect",21)(22,"rect",22)(23,"rect",23)(24,"rect",24)(25,"rect",25)(26,"rect",26),P(27,"text",27),x(28,"1"),U(),P(29,"text",28),x(30,"2"),U(),P(31,"text",29),x(32,"3"),U(),P(33,"text",30),x(34,"4"),U(),P(35,"text",31),x(36,"5"),U(),P(37,"text",32),x(38,"5"),U(),P(39,"text",33),x(40,"4"),U(),P(41,"text",34),x(42,"3"),U(),P(43,"text",35),x(44,"2"),U(),P(45,"text",36),x(46,"1"),U(),P(47,"text",37),x(48,"Impact"),U(),P(49,"text",38),x(50,"Likelihood"),U(),rt(51,og,1,1,null,null,sg),U()()),t&2&&(k(51),lt(i.cells))},styles:[".risk-matrix-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:16px}svg[_ngcontent-%COMP%]{max-width:100%;height:auto}.risk-count-label[_ngcontent-%COMP%]{cursor:pointer}"]})};var rg=(e,n)=>n.division,lg=(e,n)=>n.color+"-"+n.x;function cg(e,n){e&1&&(P(0,"p",1),x(1,"No risks to display"),U())}function dg(e,n){if(e&1&&(Mt(),Rt(0,"line",3),P(1,"text",4),x(2),U()),e&2){let t=n.$implicit,i=R(2);F("x1",i.getTickX(t))("x2",i.getTickX(t))("y2",i.axisY()-4),k(),F("x",i.getTickX(t))("y",i.axisY()+12),k(),Nt("",t,"%")}}function hg(e,n){if(e&1&&(Mt(),Rt(0,"rect",8)),e&2){let t=n.$implicit,i=R().$implicit;F("x",t.x)("y",i.y)("width",t.width)("fill",t.color)}}function mg(e,n){if(e&1){let t=dt();Mt(),P(0,"g",5),Ze("click",function(){let s=K(t).$implicit,a=R(2);return Z(a.onLabelClick(s))}),Rt(1,"rect",6),P(2,"text",7),x(3),U()(),rt(4,hg,1,4,":svg:rect",8,lg),Rt(6,"rect",9)}if(e&2){let t=n.$implicit,i=R(2);k(),F("y",t.y)("width",i.labelChipWidth()),k(),F("y",t.y+17),k(),Y(t.division),k(),lt(t.segments),k(2),F("x",i.barsAreaX())("y",t.y)("width",i.barsAreaWidth())}}function pg(e,n){if(e&1&&(Mt(),P(0,"svg",2),rt(1,dg,3,6,null,null,be),rt(3,mg,7,7,null,null,rg),U()),e&2){let t=R();F("width",t.svgWidth())("height",t.svgHeight())("viewBox",t.viewBox()),k(),lt(t.ticks),k(2),lt(t.bars)}}var _s=class e{dataService=I(Wt);logger=I(te);MARGIN_LEFT=140;MARGIN_TOP=20;CHART_WIDTH=340;BAR_HEIGHT=24;BAR_GAP=16;AXIS_HEIGHT=30;PADDING=10;bars=[];ticks=[0,20,40,60,80,100];divisionSelected=new bt;constructor(){_e(()=>{this.dataService.risksLoaded()&&this.buildBars()})}getTickX=n=>this.MARGIN_LEFT+n/100*this.CHART_WIDTH;labelChipWidth=()=>this.MARGIN_LEFT-10;barsAreaX=()=>this.MARGIN_LEFT;barsAreaWidth=()=>this.CHART_WIDTH;contentWidth=()=>this.MARGIN_LEFT+this.CHART_WIDTH+20;contentHeight=()=>{let n=this.bars.length*(this.BAR_HEIGHT+this.BAR_GAP);return this.MARGIN_TOP+n+this.AXIS_HEIGHT};svgWidth=()=>this.contentWidth()+this.PADDING*2;svgHeight=()=>this.contentHeight()+this.PADDING*2;viewBox=()=>{let n=0-this.PADDING;return n+" "+n+" "+this.svgWidth()+" "+this.svgHeight()};axisY=()=>this.contentHeight()-this.AXIS_HEIGHT+10;getMatrixColor=(n,t)=>{let i=n+t;return i<=4?"#65bb6a":i===5?"#fdd933":i===6?"#FFD700":i===7?"#f98d00":"#e13838"};buildBars=()=>{let n=this.dataService.risks(),t=this.dataService.divisions,i=[];for(let s=0;s<t.length;s++){let a=t[s],o=[];for(let c=0;c<n.length;c++)n[c].OrgDivision===a.value&&o.push(n[c]);let r=[];for(let c=0;c<o.length;c++)o[c].Priority!==void 0&&o[c].Priority!==null&&r.push(o[c]);let l=[];if(r.length===0){let c=this.dataService.getPriorityColor(null);l.push({color:c,count:0,percent:100,x:this.MARGIN_LEFT,width:this.CHART_WIDTH})}else{for(let d=0;d<r.length-1;d++)for(let h=0;h<r.length-1-d;h++){let m=r[h].InherentImpact+r[h].InherentLikelihood,p=r[h+1].InherentImpact+r[h+1].InherentLikelihood;if(m>p){let f=r[h];r[h]=r[h+1],r[h+1]=f}}for(let d=0;d<r.length;d++){let h=this.getMatrixColor(r[d].InherentImpact,r[d].InherentLikelihood),m=l[l.length-1];m!==void 0&&m.color===h?m.count=m.count+1:l.push({color:h,count:1,percent:0,x:0,width:0})}let c=0;for(let d=0;d<l.length;d++)l[d].percent=l[d].count/r.length*100,l[d].width=l[d].percent/100*this.CHART_WIDTH,l[d].x=this.MARGIN_LEFT+c/100*this.CHART_WIDTH,c=c+l[d].percent}i.push({division:a.label,value:a.value,total:r.length,y:this.MARGIN_TOP+i.length*(this.BAR_HEIGHT+this.BAR_GAP),segments:l})}this.bars=i,this.logger.debugLog("Risks by division chart built",{divisionCount:i.length})};refreshCounts=()=>{this.buildBars()};onLabelClick=n=>{this.logger.debugLog("Division label clicked",{division:n.division,value:n.value}),this.divisionSelected.emit(n.value)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-risks-by-division"]],outputs:{divisionSelected:"divisionSelected"},decls:3,vars:1,consts:[[1,"risks-by-division-container"],[1,"empty-message"],["xmlns","http://www.w3.org/2000/svg"],["y1","0","stroke","#e0e0e0","stroke-width","1"],["text-anchor","middle","font-size","14","fill","#666"],[1,"risk-count-label",3,"click"],["x","-4","height","24","rx","4","fill","transparent","stroke","#666","stroke-width","1"],["x","4","font-size","15","fill","#333"],["height","24"],["height","24","fill","none","stroke","#666","stroke-width","1"]],template:function(t,i){t&1&&(P(0,"div",0),W(1,cg,2,0,"p",1)(2,pg,5,3,":svg:svg",2),U()),t&2&&(k(),G(i.bars.length===0?1:2))},styles:[".risks-by-division-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:16px}svg[_ngcontent-%COMP%]{max-width:100%;height:auto}.empty-message[_ngcontent-%COMP%]{color:#666;font-size:13px;margin:0;padding:8px 0}.risk-count-label[_ngcontent-%COMP%]{cursor:pointer}"]})};var ug=(e,n)=>n.category,fg=(e,n)=>n.color+"-"+n.x;function gg(e,n){e&1&&(P(0,"p",1),x(1,"No categorized risks to display"),U())}function _g(e,n){if(e&1&&(Mt(),Rt(0,"line",3),P(1,"text",4),x(2),U()),e&2){let t=n.$implicit,i=R(2);F("x1",i.getTickX(t))("x2",i.getTickX(t))("y2",i.axisY()-4),k(),F("x",i.getTickX(t))("y",i.axisY()+12),k(),Nt("",t,"%")}}function bg(e,n){if(e&1&&(Mt(),Rt(0,"rect",8)),e&2){let t=n.$implicit,i=R().$implicit;F("x",t.x)("y",i.y)("width",t.width)("fill",t.color)}}function vg(e,n){if(e&1){let t=dt();Mt(),P(0,"g",5),Ze("click",function(){let s=K(t).$implicit,a=R(2);return Z(a.onLabelClick(s))}),Rt(1,"rect",6),P(2,"text",7),x(3),U()(),rt(4,bg,1,4,":svg:rect",8,fg),Rt(6,"rect",9)}if(e&2){let t=n.$implicit,i=R(2);k(),F("y",t.y)("width",i.labelChipWidth()),k(),F("y",t.y+17),k(),Y(t.category),k(),lt(t.segments),k(2),F("x",i.barsAreaX())("y",t.y)("width",i.barsAreaWidth())}}function yg(e,n){if(e&1&&(Mt(),P(0,"svg",2),rt(1,_g,3,6,null,null,be),rt(3,vg,7,7,null,null,ug),U()),e&2){let t=R();F("width",t.svgWidth())("height",t.svgHeight())("viewBox",t.viewBox()),k(),lt(t.ticks),k(2),lt(t.bars)}}var bs=class e{dataService=I(Wt);logger=I(te);MARGIN_LEFT=140;MARGIN_TOP=20;CHART_WIDTH=340;BAR_HEIGHT=24;BAR_GAP=16;AXIS_HEIGHT=30;PADDING=10;bars=[];ticks=[0,20,40,60,80,100];categorySelected=new bt;constructor(){_e(()=>{this.dataService.risksLoaded()&&this.buildBars()})}getTickX=n=>this.MARGIN_LEFT+n/100*this.CHART_WIDTH;labelChipWidth=()=>this.MARGIN_LEFT-10;barsAreaX=()=>this.MARGIN_LEFT;barsAreaWidth=()=>this.CHART_WIDTH;contentWidth=()=>this.MARGIN_LEFT+this.CHART_WIDTH+20;contentHeight=()=>{let n=this.bars.length*(this.BAR_HEIGHT+this.BAR_GAP);return this.MARGIN_TOP+n+this.AXIS_HEIGHT};svgWidth=()=>this.contentWidth()+this.PADDING*2;svgHeight=()=>this.contentHeight()+this.PADDING*2;viewBox=()=>{let n=0-this.PADDING;return n+" "+n+" "+this.svgWidth()+" "+this.svgHeight()};axisY=()=>this.contentHeight()-this.AXIS_HEIGHT+10;getMatrixColor=(n,t)=>{let i=n+t;return i<=4?"#65bb6a":i===5?"#fdd933":i===6?"#FFD700":i===7?"#f98d00":"#e13838"};buildBars=()=>{let n=this.dataService.risks(),t=[],i={};for(let a=0;a<n.length;a++){let o=n[a].Category||"Uncategorized";i[o]===void 0&&(i[o]=[],t.push(o)),i[o].push(n[a])}let s=[];for(let a=0;a<t.length;a++){let o=t[a],r=i[o],l=[];for(let d=0;d<r.length;d++)r[d].Priority!==void 0&&r[d].Priority!==null&&l.push(r[d]);let c=[];if(l.length===0){let d=this.dataService.getPriorityColor(null);c.push({color:d,count:0,percent:100,x:this.MARGIN_LEFT,width:this.CHART_WIDTH})}else{for(let h=0;h<l.length-1;h++)for(let m=0;m<l.length-1-h;m++){let p=l[m].InherentImpact+l[m].InherentLikelihood,f=l[m+1].InherentImpact+l[m+1].InherentLikelihood;if(p>f){let u=l[m];l[m]=l[m+1],l[m+1]=u}}for(let h=0;h<l.length;h++){let m=this.getMatrixColor(l[h].InherentImpact,l[h].InherentLikelihood),p=c[c.length-1];p!==void 0&&p.color===m?p.count=p.count+1:c.push({color:m,count:1,percent:0,x:0,width:0})}let d=0;for(let h=0;h<c.length;h++)c[h].percent=c[h].count/l.length*100,c[h].width=c[h].percent/100*this.CHART_WIDTH,c[h].x=this.MARGIN_LEFT+d/100*this.CHART_WIDTH,d=d+c[h].percent}s.push({category:o,total:l.length,y:this.MARGIN_TOP+s.length*(this.BAR_HEIGHT+this.BAR_GAP),segments:c})}this.bars=s,this.logger.debugLog("Risks by category chart built",{categoryCount:s.length})};refreshCounts=()=>{this.buildBars()};onLabelClick=n=>{this.logger.debugLog("Category label clicked",{category:n.category}),this.categorySelected.emit(n.category)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-risks-by-category"]],outputs:{categorySelected:"categorySelected"},decls:3,vars:1,consts:[[1,"risks-by-category-container"],[1,"empty-message"],["xmlns","http://www.w3.org/2000/svg"],["y1","0","stroke","#e0e0e0","stroke-width","1"],["text-anchor","middle","font-size","14","fill","#666"],[1,"risk-count-label",3,"click"],["x","-4","height","24","rx","4","fill","transparent","stroke","#666","stroke-width","1"],["x","4","font-size","15","fill","#333"],["height","24"],["height","24","fill","none","stroke","#666","stroke-width","1"]],template:function(t,i){t&1&&(P(0,"div",0),W(1,gg,2,0,"p",1)(2,yg,5,3,":svg:svg",2),U()),t&2&&(k(),G(i.bars.length===0?1:2))},styles:[".risks-by-category-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:16px}svg[_ngcontent-%COMP%]{max-width:100%;height:auto}.empty-message[_ngcontent-%COMP%]{color:#666;font-size:13px;margin:0;padding:8px 0}.risk-count-label[_ngcontent-%COMP%]{cursor:pointer}"]})};var io=(e,n)=>n.FileRef;function xg(e,n){e&1&&tt(0,"mat-progress-bar",0)}function kg(e,n){if(e&1){let t=dt();_(0,"button",38),z("click",function(){K(t);let s=R();return Z(s.clearFilter())}),_(1,"mat-icon"),x(2,"filter_alt_off"),y()()}}function wg(e,n){e&1&&(_(0,"th",39),x(1," ID "),y())}function Cg(e,n){if(e&1&&(_(0,"td",40),x(1),y()),e&2){let t=n.$implicit,i=R();k(),Nt(" ",i.resolveCompositeId(t)," ")}}function Sg(e,n){e&1&&(_(0,"th",39),x(1," Priority "),y())}function Mg(e,n){if(e&1&&(_(0,"td",40),tt(1,"span",41),y()),e&2){let t=n.$implicit,i=R();k(),on("background-color",i.dataService.getPriorityColor(t.Priority)),F("aria-label","Priority "+(t.Priority??"not rated"))}}function Dg(e,n){e&1&&(_(0,"th",39),x(1," Title "),y())}function Ig(e,n){if(e&1){let t=dt();_(0,"mat-form-field",43),z("click",function(s){K(t);let a=R(2);return Z(a.stopPropagation(s))}),_(1,"input",44),ks("ngModelChange",function(s){K(t);let a=R(2);return xs(a.editedTitle,s)||(a.editedTitle=s),Z(s)}),y()()}if(e&2){let t=R(2);k(),ys("ngModel",t.editedTitle)}}function Rg(e,n){if(e&1&&(_(0,"span"),x(1),y()),e&2){let t=R().$implicit;k(),Y(t.Title)}}function Eg(e,n){if(e&1&&(_(0,"td",40),W(1,Ig,2,1,"mat-form-field",42)(2,Rg,2,1,"span"),y()),e&2){let t=n.$implicit,i=R();k(),G(i.isEditing(t.Id)?1:2)}}function Tg(e,n){e&1&&(_(0,"th",39),x(1," Description "),y())}function Og(e,n){if(e&1){let t=dt();_(0,"mat-form-field",43),z("click",function(s){K(t);let a=R(2);return Z(a.stopPropagation(s))}),_(1,"textarea",46),ks("ngModelChange",function(s){K(t);let a=R(2);return xs(a.editedDescription,s)||(a.editedDescription=s),Z(s)}),y()()}if(e&2){let t=R(2);k(),ys("ngModel",t.editedDescription)}}function Ag(e,n){if(e&1&&(_(0,"span"),x(1),y()),e&2){let t=R().$implicit;k(),Y(t.Description||"No description available")}}function Pg(e,n){if(e&1&&(_(0,"td",45),W(1,Og,2,1,"mat-form-field",42)(2,Ag,2,1,"span"),y()),e&2){let t=n.$implicit,i=R();k(),G(i.isEditing(t.Id)?1:2)}}function Lg(e,n){e&1&&(_(0,"th",39),x(1," Owner "),y())}function Fg(e,n){if(e&1&&(_(0,"td",40),x(1),y()),e&2){let t=n.$implicit,i=R();k(),Nt(" ",i.resolveOwnerName(t.OwnerId)," ")}}function zg(e,n){e&1&&(_(0,"th",39),x(1," Actions "),y())}function Bg(e,n){if(e&1){let t=dt();_(0,"div",48)(1,"button",49),z("click",function(){K(t);let s=R().$implicit,a=R();return Z(a.saveEdit(s))}),_(2,"mat-icon"),x(3,"save"),y()(),_(4,"button",50),z("click",function(){K(t);let s=R(2);return Z(s.cancelEdit())}),_(5,"mat-icon"),x(6,"close"),y()()()}}function Ng(e,n){if(e&1){let t=dt();_(0,"div",48)(1,"button",51),z("click",function(){K(t);let s=R().$implicit,a=R();return Z(a.startEdit(s))}),_(2,"mat-icon"),x(3,"edit"),y()(),_(4,"button",52),z("click",function(){K(t);let s=R().$implicit,a=R();return Z(a.openDeleteRiskDialog(s))}),_(5,"mat-icon"),x(6,"delete"),y()()()}}function Hg(e,n){if(e&1){let t=dt();_(0,"td",47),z("click",function(s){K(t);let a=R();return Z(a.stopPropagation(s))}),W(1,Bg,7,0,"div",48)(2,Ng,7,0,"div",48),y()}if(e&2){let t=n.$implicit,i=R();k(),G(i.isEditing(t.Id)?1:2)}}function Vg(e,n){e&1&&tt(0,"tr",53)}function jg(e,n){if(e&1){let t=dt();_(0,"tr",54),z("click",function(){let s=K(t).$implicit,a=R();return Z(a.onRiskRowClick(s))}),y()}if(e&2){let t=n.$implicit,i=R();ut("clickable-row",!i.isEditing(t.Id))("editing-row",i.isEditing(t.Id))}}function Wg(e,n){if(e&1){let t=dt();_(0,"mat-list-item",55),z("click",function(){let s=K(t).$implicit,a=R();return Z(a.openDocument(s))}),_(1,"mat-icon",56),x(2,"description"),y(),_(3,"span",57),x(4),y()()}if(e&2){let t=n.$implicit;k(4),Y(t.Title||t.FileLeafRef)}}function Gg(e,n){e&1&&(_(0,"mat-list-item")(1,"span",57),x(2,"No documents found"),y()())}function $g(e,n){if(e&1){let t=dt();_(0,"mat-list-item",55),z("click",function(){let s=K(t).$implicit,a=R();return Z(a.openDocument(s))}),_(1,"mat-icon",56),x(2,"description"),y(),_(3,"span",57),x(4),y()()}if(e&2){let t=n.$implicit;k(4),Y(t.Title||t.FileLeafRef)}}function Ug(e,n){e&1&&(_(0,"mat-list-item")(1,"span",57),x(2,"No documents found"),y()())}function Qg(e,n){if(e&1){let t=dt();_(0,"mat-list-item",55),z("click",function(){let s=K(t).$implicit,a=R();return Z(a.openDocument(s))}),_(1,"mat-icon",56),x(2,"description"),y(),_(3,"span",57),x(4),y()()}if(e&2){let t=n.$implicit;k(4),Y(t.Title||t.FileLeafRef)}}function Yg(e,n){e&1&&(_(0,"mat-list-item")(1,"span",57),x(2,"No documents found"),y()())}var Gc=class e{logger=I(te);router=I(fo);dialog=I(Ro);dataService=I(Wt);riskMatrixSummary;isLoading=Dt(!1);displayedColumns=["Id","Priority","Title","Description","Owner","Actions"];allRisks=[];dataSource=[];activeFilter=null;reportsFolderKey="riskRegisterReports";supportingDocumentsFolderKey="supportingDocuments";helpManualFolderKey="helpManual";openFolderLibrary=n=>{window.open(this.dataService.getGrcDocumentsLibraryUrl(n),"_blank","noopener")};openDocument=n=>{window.open(this.dataService.getGrcDocumentViewerUrl(n),"_blank","noopener")};editingRiskId=null;editedTitle="";editedDescription="";async ngOnInit(){this.logger.debugLog("Risk Register component initialized"),this.logger.debugLog("Loading risk data...",{timestamp:new Date}),this.isLoading.set(!0);try{await this.dataService.initializeCache(),this.allRisks=this.dataService.risks(),this.dataSource=this.allRisks}catch(n){this.logger.debugLog("Failed to initialize data cache",n)}finally{this.isLoading.set(!1)}}resolveCompositeId=n=>n?n.OrgDivision?`R${n.Id.toString().padStart(3,"0")}${n.OrgDivision}`:n.Id.toString():"";isEditing=n=>this.editingRiskId===n;startEdit=n=>{this.logger.debugLog("Starting edit for risk",{riskId:n.Id}),this.editingRiskId=n.Id,this.editedTitle=n.Title||"",this.editedDescription=n.Description||""};saveEdit=async n=>{if(this.editingRiskId){this.logger.debugLog("Saving risk changes",{riskId:n.Id,newTitle:this.editedTitle,newDescription:this.editedDescription});try{this.isLoading.set(!0),await this.dataService.updateRisk(n.Id,{Title:this.editedTitle,Description:this.editedDescription}),n.Title=this.editedTitle,n.Description=this.editedDescription,this.editingRiskId=null,this.editedTitle="",this.editedDescription="",this.logger.debugLog("Risk updated successfully")}catch(t){this.logger.debugLog("Failed to save risk",t)}finally{this.isLoading.set(!1)}}};cancelEdit=()=>{this.logger.debugLog("Canceling edit"),this.editingRiskId=null,this.editedTitle="",this.editedDescription=""};openDeleteRiskDialog=n=>{this.dialog.open(sr,{width:"400px",maxWidth:"90vw",data:{itemType:"Risk",itemName:n.Title||"this risk"}}).afterClosed().subscribe(async i=>{if(i)try{this.isLoading.set(!0),await this.dataService.deleteRiskCascade(n.Id);let s=[];for(let a=0;a<this.allRisks.length;a++)this.allRisks[a].Id!==n.Id&&s.push(this.allRisks[a]);this.allRisks=s,this.applyFilter(),this.riskMatrixSummary?.refreshCounts(),this.logger.debugLog("Risk deleted",{riskId:n.Id})}catch(s){this.logger.debugLog("Failed to delete risk",s)}finally{this.isLoading.set(!1)}})};openAddRiskDialog=()=>{this.logger.debugLog("Opening add risk dialog"),this.dialog.open(gs,{width:"900px",maxWidth:"90vw",disableClose:!1,hasBackdrop:!0,backdropClass:"logger-dark-backdrop",panelClass:"logger-dialog-panel"}).afterClosed().subscribe(async t=>{if(t){this.logger.debugLog("Dialog closed with data",t);try{this.isLoading.set(!0);let i=await this.dataService.addRisk(t);this.logger.debugLog("Risk saved successfully",i);let s=this.dataService.risks();this.allRisks=[];for(let a=0;a<s.length;a++)this.allRisks.push(s[a]);this.applyFilter(),this.riskMatrixSummary?.refreshCounts(),this.logger.debugLog("Risk table reloaded",{count:this.dataSource.length})}catch(i){this.logger.debugLog("Failed to save risk",i)}finally{this.isLoading.set(!1)}}else this.logger.debugLog("Dialog cancelled")})};resolveOwnerName=n=>{let t=this.dataService.siteUsers();for(let i=0;i<t.length;i++)if(t[i].Id===n)return t[i].Title;return"Unassigned"};onMatrixCellSelected=n=>{this.logger.debugLog("Filtering risks by matrix cell",n),this.activeFilter={type:"matrix",impact:n.impact,likelihood:n.likelihood},this.applyFilter()};onDivisionSelected=n=>{this.logger.debugLog("Filtering risks by division",{value:n}),this.activeFilter={type:"division",value:n},this.applyFilter()};onCategorySelected=n=>{this.logger.debugLog("Filtering risks by category",{value:n}),this.activeFilter={type:"category",value:n},this.applyFilter()};clearFilter=()=>{this.logger.debugLog("Clearing risk matrix filter"),this.activeFilter=null,this.applyFilter()};applyFilter=()=>{if(!this.activeFilter){this.dataSource=this.allRisks;return}let n=[];for(let t=0;t<this.allRisks.length;t++){let i=this.allRisks[t];this.activeFilter.type==="matrix"?i.InherentImpact===this.activeFilter.impact&&i.InherentLikelihood===this.activeFilter.likelihood&&n.push(i):this.activeFilter.type==="division"?i.OrgDivision===this.activeFilter.value&&n.push(i):this.activeFilter.type==="category"&&i.Category===this.activeFilter.value&&n.push(i)}this.dataSource=n};onRiskRowClick=n=>{this.editingRiskId!==n.Id&&(this.logger.debugLog("Risk row clicked",{riskId:n.Id,riskTitle:n.Title}),this.router.navigate(["/risk-register",n.Id]))};stopPropagation=n=>{n.stopPropagation()};goBack=()=>{this.logger.debugLog("Navigating back to home"),this.router.navigate(["/"])};ngOnDestroy=()=>{this.logger.debugLog("Risk Register component destroyed")};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-risk-register"]],viewQuery:function(t,i){if(t&1&&jt(Xi,5),t&2){let s;B(s=N())&&(i.riskMatrixSummary=s.first)}},decls:128,vars:8,consts:[["mode","indeterminate"],[1,"risk-register-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to home",3,"click"],[1,"page-title"],[1,"cards-container"],[1,"table-card"],["color","primary"],[1,"spacer"],["mat-icon-button","","aria-label","Clear filter"],["mat-icon-button","","aria-label","Add risk",3,"click"],["mat-table","",1,"mat-elevation-z0","striped-table",3,"dataSource"],["matColumnDef","Id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Priority"],["matColumnDef","Title"],["matColumnDef","Description"],["mat-cell","","class","description-cell",4,"matCellDef"],["matColumnDef","Owner"],["matColumnDef","Actions"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"clickable-row","editing-row","click",4,"matRowDef","matRowDefColumns"],[1,"right-column"],[1,"comment-card"],["mat-icon-button",""],[1,"comment-section"],["mat-stroked-button","",1,"add-comment-btn"],[1,"matrix-card"],[3,"cellSelected"],[3,"divisionSelected"],[3,"categorySelected"],[1,"documents-card"],["mat-icon-button","","aria-label","Open Risk Register Reports library in SharePoint",3,"click"],[1,"document-item"],["mat-icon-button","","aria-label","Open Supporting Documents library in SharePoint",3,"click"],["mat-icon-button","","aria-label","Open Help Manual library in SharePoint",3,"click"],["mat-icon-button","","aria-label","Clear filter",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"priority-dot"],["appearance","outline",1,"inline-edit-field"],["appearance","outline",1,"inline-edit-field",3,"click"],["matInput","","placeholder","Risk title",3,"ngModelChange","ngModel"],["mat-cell","",1,"description-cell"],["matInput","","placeholder","Risk description","rows","2",3,"ngModelChange","ngModel"],["mat-cell","",3,"click"],[1,"action-buttons"],["mat-icon-button","","color","primary","aria-label","Save changes",3,"click"],["mat-icon-button","","aria-label","Cancel editing",3,"click"],["mat-icon-button","","aria-label","Edit risk",3,"click"],["mat-icon-button","","aria-label","Delete risk",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"document-item",3,"click"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,i){t&1&&(W(0,xg,1,0,"mat-progress-bar",0),_(1,"div",1)(2,"div",2)(3,"button",3),z("click",function(){return i.goBack()}),_(4,"mat-icon"),x(5,"arrow_back"),y()(),_(6,"h1",4),x(7,"Risk Register"),y()(),tt(8,"app-risk-stats"),_(9,"div",5)(10,"mat-card",6)(11,"mat-toolbar",7)(12,"span"),x(13,"RISKS"),y(),tt(14,"span",8),W(15,kg,3,0,"button",9),_(16,"button",10),z("click",function(){return i.openAddRiskDialog()}),_(17,"mat-icon"),x(18,"add"),y()()(),_(19,"mat-card-content")(20,"table",11),Pe(21,12),vt(22,wg,2,0,"th",13)(23,Cg,2,1,"td",14),Le(),Pe(24,15),vt(25,Sg,2,0,"th",13)(26,Mg,2,3,"td",14),Le(),Pe(27,16),vt(28,Dg,2,0,"th",13)(29,Eg,3,1,"td",14),Le(),Pe(30,17),vt(31,Tg,2,0,"th",13)(32,Pg,3,1,"td",18),Le(),Pe(33,19),vt(34,Lg,2,0,"th",13)(35,Fg,2,1,"td",14),Le(),Pe(36,20),vt(37,zg,2,0,"th",13)(38,Hg,3,1,"td",21),Le(),vt(39,Vg,1,0,"tr",22)(40,jg,1,4,"tr",23),y()()(),_(41,"div",24)(42,"mat-card",25)(43,"mat-toolbar",7)(44,"span"),x(45,"OVERALL RISK ANALYSIS"),y(),tt(46,"span",8),_(47,"button",26)(48,"mat-icon"),x(49,"add"),y()(),_(50,"button",26)(51,"mat-icon"),x(52,"more_vert"),y()()(),_(53,"mat-card-content")(54,"div",27)(55,"button",28)(56,"mat-icon"),x(57,"comment"),y(),x(58," ADD A COMMENT "),y()()()(),_(59,"mat-card",29)(60,"mat-toolbar",7)(61,"span"),x(62,"RISK MATRIX"),y(),tt(63,"span",8),_(64,"button",26)(65,"mat-icon"),x(66,"more_vert"),y()()(),_(67,"mat-card-content")(68,"app-risk-matrix-summary",30),z("cellSelected",function(a){return i.onMatrixCellSelected(a)}),y()()(),_(69,"mat-card",29)(70,"mat-toolbar",7)(71,"span"),x(72,"RISKS BY DIVISION"),y(),tt(73,"span",8),_(74,"button",26)(75,"mat-icon"),x(76,"more_vert"),y()()(),_(77,"mat-card-content")(78,"app-risks-by-division",31),z("divisionSelected",function(a){return i.onDivisionSelected(a)}),y()()(),_(79,"mat-card",29)(80,"mat-toolbar",7)(81,"span"),x(82,"RISKS BY CATEGORY"),y(),tt(83,"span",8),_(84,"button",26)(85,"mat-icon"),x(86,"more_vert"),y()()(),_(87,"mat-card-content")(88,"app-risks-by-category",32),z("categorySelected",function(a){return i.onCategorySelected(a)}),y()()(),_(89,"mat-card",33)(90,"mat-toolbar",7)(91,"span"),x(92,"REPORTS"),y(),tt(93,"span",8),_(94,"button",34),z("click",function(){return i.openFolderLibrary(i.reportsFolderKey)}),_(95,"mat-icon"),x(96,"open_in_new"),y()()(),_(97,"mat-card-content")(98,"mat-list"),rt(99,Wg,5,1,"mat-list-item",35,io,!1,Gg,3,0,"mat-list-item"),y()()(),_(102,"mat-card",33)(103,"mat-toolbar",7)(104,"span"),x(105,"SUPPORTING DOCUMENTS"),y(),tt(106,"span",8),_(107,"button",36),z("click",function(){return i.openFolderLibrary(i.supportingDocumentsFolderKey)}),_(108,"mat-icon"),x(109,"open_in_new"),y()()(),_(110,"mat-card-content")(111,"mat-list"),rt(112,$g,5,1,"mat-list-item",35,io,!1,Ug,3,0,"mat-list-item"),y()()(),_(115,"mat-card",33)(116,"mat-toolbar",7)(117,"span"),x(118,"HELP MANUAL"),y(),tt(119,"span",8),_(120,"button",37),z("click",function(){return i.openFolderLibrary(i.helpManualFolderKey)}),_(121,"mat-icon"),x(122,"open_in_new"),y()()(),_(123,"mat-card-content")(124,"mat-list"),rt(125,Qg,5,1,"mat-list-item",35,io,!1,Yg,3,0,"mat-list-item"),y()()()()()()),t&2&&(G(i.isLoading()?0:-1),k(15),G(i.activeFilter?15:-1),k(5),$("dataSource",i.dataSource),k(19),$("matHeaderRowDef",i.displayedColumns),k(),$("matRowDefColumns",i.displayedColumns),k(59),lt(i.dataService.grcDocumentsForFolder(i.reportsFolderKey)),k(13),lt(i.dataService.grcDocumentsForFolder(i.supportingDocumentsFolderKey)),k(13),lt(i.dataService.grcDocumentsForFolder(i.helpManualFolderKey)))},dependencies:[jo,Vo,Jo,Wo,$o,qo,Uo,Go,Xo,Qo,Yo,Ko,Zo,Dn,Sn,Mn,Rn,In,ii,ei,_n,gn,Co,cr,rr,lr,Is,Ds,kn,xn,Cn,wn,yn,bn,vn,Ao,us,Xi,_s,bs],styles:[".risk-register-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-container[_ngcontent-%COMP%]{display:flex;gap:20px;margin-top:20px}.table-card[_ngcontent-%COMP%]{flex:0 0 66%;padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.right-column[_ngcontent-%COMP%]{flex:0 0 calc(34% - 20px);display:flex;flex-direction:column;gap:20px}.matrix-card[_ngcontent-%COMP%], .comment-card[_ngcontent-%COMP%], .documents-card[_ngcontent-%COMP%]{padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{height:48px;font-size:14px;font-weight:500}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:0!important}.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px!important}table[_ngcontent-%COMP%], .striped-table[_ngcontent-%COMP%]{width:100%}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.clickable-row[_ngcontent-%COMP%]:hover{background-color:#e3f2fd!important}.editing-row[_ngcontent-%COMP%]{cursor:default}.editing-row[_ngcontent-%COMP%]:hover{background-color:inherit!important}.description-cell[_ngcontent-%COMP%]{max-width:400px;white-space:normal;word-break:break-word}.mat-mdc-header-row[_ngcontent-%COMP%]{background-color:#fafafa}.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;color:#333}.mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:12px 16px;vertical-align:top}.mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{height:auto}.priority-dot[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;display:inline-block;border:1px solid rgba(0,0,0,.2)}.inline-edit-field[_ngcontent-%COMP%]{width:100%;margin:0;padding:0}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%]{padding:4px 8px}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{display:none}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:4px;align-items:center}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px}.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-section[_ngcontent-%COMP%]{padding:20px}.add-comment-btn[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;text-align:left;color:#666}.add-comment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.document-item[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.document-item[_ngcontent-%COMP%]:hover{background-color:#e3f2fd}"]})};export{Gc as RiskRegister};
