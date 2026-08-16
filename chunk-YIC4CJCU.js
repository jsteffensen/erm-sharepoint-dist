import{a as er}from"./chunk-5XLYZP3C.js";import{A as No,B as Vo,C as Ho,D as jo,E as Wo,F as $o,G as Go,H as Uo,I as Qo,J as qo,K as Yo,L as Ko,M as wn,N as Cn,O as Mn,P as Xo,Q as Zo,R as Jo,S as tr,a as Do,b as gn,c as Te,d as Io,e as _n,f as Ro,g as Eo,h as Oo,j as Po,k as ys,l as To,m as Ao,n as bn,o as Lo,q as Fo,r as zo,s as vn,t as xn,w as ii,x as yn,y as kn,z as Bo}from"./chunk-A6DXA4YV.js";import{Aa as Dn,B as dn,D as uo,E as fo,G as go,H as _o,J as hn,K as mn,P as Je,Q as ti,R as bo,S as pn,T as vo,U as xo,V as Pe,W as yo,X as ei,Y as un,Z as fn,b as vs,e as ho,ga as ko,ia as wo,ja as Co,m as mo,pa as Mo,q as Oe,r as rn,ra as So,s as cn,t as Yt,u as Xe,v as Ze,w as xs,xa as ni,y as ln,ya as pe,z as po,za as Sn}from"./chunk-3NQOXSSM.js";import{$ as I,$b as X,Ab as Q,Ac as pt,Bb as it,Bc as wi,Cb as qe,Db as Re,Eb as Ee,Fb as Qt,Gb as Ct,Hb as qt,Kb as H,Lb as ao,Mb as E,Nb as Lt,O as zt,Ob as ot,P as Xi,Pb as Ft,Q as yt,Qb as Nt,Ra as S,Rb as L,Sb as F,V as fs,W as eo,Wa as Qe,Wb as Ye,X as Gt,Xb as sn,Ya as en,Yb as ht,Z as Bt,Zb as Ke,_a as no,_b as w,a as qi,ac as ne,b as Yi,cb as nt,cc as gs,d as Ki,db as Ut,dc as _s,ea as lt,eb as tt,ec as bs,fa as dt,fc as oo,ga as Ge,gc as se,h as ie,hb as wt,hc as ki,ia as Zi,ib as ft,ic as ro,ja as io,jb as so,ma as St,mc as an,na as Ue,o as Ja,qb as et,qc as on,ra as kt,rb as W,s as to,sb as $,ta as Ji,tb as nn,tc as co,ua as tn,ub as It,uc as lo,va as Dt,vb as Rt,wb as V,xa as At,xb as v,xc as me,ya as Ie,yb as y,z as yi,zb as st}from"./chunk-6SIMKND5.js";var ir=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Ut({type:e});static \u0275inj=Gt({imports:[Yt]})}return e})();var jl=["*"],Wl=`.mdc-list {
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
`,$l=["unscopedContent"],Gl=["text"],Ul=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],Ql=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ql=new Bt("ListOption"),ws=(()=>{class e{_elementRef=I(At);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),Yl=(()=>{class e{_elementRef=I(At);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),Kl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),nr=(()=>{class e{_listOption=I(ql,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,hostVars:4,hostBindings:function(i,s){i&2&&ht("mdc-list-item__start",s._isAlignedAtStart())("mdc-list-item__end",!s._isAlignedAtStart())}})}return e})(),Xl=(()=>{class e extends nr{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[wt]})}return e})(),Cs=(()=>{class e extends nr{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[wt]})}return e})(),Zl=new Bt("MAT_LIST_CONFIG"),ks=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=ti(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(ti(t))}_disabled=kt(!1);_defaultOptions=I(Zl,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,hostVars:1,hostBindings:function(i,s){i&2&&et("aria-disabled",s.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),Jl=(()=>{class e{_elementRef=I(At);_ngZone=I(Ue);_listBase=I(ks,{optional:!0});_platform=I(ln);_hostElement;_isButtonElement;_noopAnimations=Je();_avatars;_icons;set lines(t){this._explicitLines=po(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=ti(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(ti(t))}_disabled=kt(!1);_subscriptions=new Ki;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){I(Oe).load(Pe);let t=I(pn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new bo(this,this._ngZone,this._hostElement,this._platform,I(Zi)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(yi(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),s=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;s.classList.toggle("mdc-list-item__primary-text",a),s.classList.toggle("mdc-list-item__secondary-text",!a)}else s.classList.remove("mdc-list-item__primary-text"),s.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,contentQueries:function(i,s,a){if(i&1&&Ft(a,Xl,4)(a,Cs,4),i&2){let o;L(o=F())&&(s._avatars=o),L(o=F())&&(s._icons=o)}},hostVars:4,hostBindings:function(i,s){i&2&&(et("aria-disabled",s.disabled)("disabled",s._isButtonElement&&s.disabled||null),ht("mdc-list-item--disabled",s.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var sr=(()=>{class e extends ks{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275cmp=nt({type:e,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[se([{provide:ks,useExisting:e}]),wt],ngContentSelectors:jl,decls:1,vars:0,template:function(i,s){i&1&&(Lt(),ot(0))},styles:[Wl],encapsulation:2,changeDetection:0})}return e})(),ar=(()=>{class e extends Jl{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=ti(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275cmp=nt({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Yl,5)(a,ws,5)(a,Kl,5),i&2){let o;L(o=F())&&(s._lines=o),L(o=F())&&(s._titles=o),L(o=F())&&(s._meta=o)}},viewQuery:function(i,s){if(i&1&&Nt($l,5)(Gl,5),i&2){let a;L(a=F())&&(s._unscopedContent=a.first),L(a=F())&&(s._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,s){i&2&&(et("aria-current",s._getAriaCurrent()),ht("mdc-list-item--activated",s.activated)("mdc-list-item--with-leading-avatar",s._avatars.length!==0)("mdc-list-item--with-leading-icon",s._icons.length!==0)("mdc-list-item--with-trailing-meta",s._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",s._hasBothLeadingAndTrailing())("_mat-animation-noopable",s._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[wt],ngContentSelectors:Ql,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,s){i&1&&(Lt(Ul),ot(0),v(1,"span",1),ot(2,1),ot(3,2),v(4,"span",2,0),H("cdkObserveContent",function(){return s._updateItemLines(!0)}),ot(6,3),y()(),ot(7,4),ot(8,5),st(9,"div",3))},dependencies:[uo],encapsulation:2,changeDetection:0})}return e})();var or=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Ut({type:e});static \u0275inj=Gt({imports:[fo,ei,Xo,Yt,ir]})}return e})();function Si(e){return e+.5|0}var fe=(e,n,t)=>Math.max(Math.min(e,t),n);function Ci(e){return fe(Si(e*2.55),0,255)}function ge(e){return fe(Si(e*255),0,255)}function ae(e){return fe(Si(e/2.55)/100,0,1)}function rr(e){return fe(Si(e*100),0,100)}var Vt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Ss=[..."0123456789ABCDEF"],ed=e=>Ss[e&15],id=e=>Ss[(e&240)>>4]+Ss[e&15],In=e=>(e&240)>>4===(e&15),nd=e=>In(e.r)&&In(e.g)&&In(e.b)&&In(e.a);function sd(e){var n=e.length,t;return e[0]==="#"&&(n===4||n===5?t={r:255&Vt[e[1]]*17,g:255&Vt[e[2]]*17,b:255&Vt[e[3]]*17,a:n===5?Vt[e[4]]*17:255}:(n===7||n===9)&&(t={r:Vt[e[1]]<<4|Vt[e[2]],g:Vt[e[3]]<<4|Vt[e[4]],b:Vt[e[5]]<<4|Vt[e[6]],a:n===9?Vt[e[7]]<<4|Vt[e[8]]:255})),t}var ad=(e,n)=>e<255?n(e):"";function od(e){var n=nd(e)?ed:id;return e?"#"+n(e.r)+n(e.g)+n(e.b)+ad(e.a,n):void 0}var rd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function hr(e,n,t){let i=n*Math.min(t,1-t),s=(a,o=(a+e/30)%12)=>t-i*Math.max(Math.min(o-3,9-o,1),-1);return[s(0),s(8),s(4)]}function cd(e,n,t){let i=(s,a=(s+e/60)%6)=>t-t*n*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function ld(e,n,t){let i=hr(e,1,.5),s;for(n+t>1&&(s=1/(n+t),n*=s,t*=s),s=0;s<3;s++)i[s]*=1-n-t,i[s]+=n;return i}function dd(e,n,t,i,s){return e===s?(n-t)/i+(n<t?6:0):n===s?(t-e)/i+2:(e-n)/i+4}function Ds(e){let t=e.r/255,i=e.g/255,s=e.b/255,a=Math.max(t,i,s),o=Math.min(t,i,s),r=(a+o)/2,c,l,d;return a!==o&&(d=a-o,l=r>.5?d/(2-a-o):d/(a+o),c=dd(t,i,s,d,a),c=c*60+.5),[c|0,l||0,r]}function Is(e,n,t,i){return(Array.isArray(n)?e(n[0],n[1],n[2]):e(n,t,i)).map(ge)}function Rs(e,n,t){return Is(hr,e,n,t)}function hd(e,n,t){return Is(ld,e,n,t)}function md(e,n,t){return Is(cd,e,n,t)}function mr(e){return(e%360+360)%360}function pd(e){let n=rd.exec(e),t=255,i;if(!n)return;n[5]!==i&&(t=n[6]?Ci(+n[5]):ge(+n[5]));let s=mr(+n[2]),a=+n[3]/100,o=+n[4]/100;return n[1]==="hwb"?i=hd(s,a,o):n[1]==="hsv"?i=md(s,a,o):i=Rs(s,a,o),{r:i[0],g:i[1],b:i[2],a:t}}function ud(e,n){var t=Ds(e);t[0]=mr(t[0]+n),t=Rs(t),e.r=t[0],e.g=t[1],e.b=t[2]}function fd(e){if(!e)return;let n=Ds(e),t=n[0],i=rr(n[1]),s=rr(n[2]);return e.a<255?`hsla(${t}, ${i}%, ${s}%, ${ae(e.a)})`:`hsl(${t}, ${i}%, ${s}%)`}var cr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},lr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function gd(){let e={},n=Object.keys(lr),t=Object.keys(cr),i,s,a,o,r;for(i=0;i<n.length;i++){for(o=r=n[i],s=0;s<t.length;s++)a=t[s],r=r.replace(a,cr[a]);a=parseInt(lr[o],16),e[r]=[a>>16&255,a>>8&255,a&255]}return e}var Rn;function _d(e){Rn||(Rn=gd(),Rn.transparent=[0,0,0,0]);let n=Rn[e.toLowerCase()];return n&&{r:n[0],g:n[1],b:n[2],a:n.length===4?n[3]:255}}var bd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function vd(e){let n=bd.exec(e),t=255,i,s,a;if(n){if(n[7]!==i){let o=+n[7];t=n[8]?Ci(o):fe(o*255,0,255)}return i=+n[1],s=+n[3],a=+n[5],i=255&(n[2]?Ci(i):fe(i,0,255)),s=255&(n[4]?Ci(s):fe(s,0,255)),a=255&(n[6]?Ci(a):fe(a,0,255)),{r:i,g:s,b:a,a:t}}}function xd(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${ae(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var Ms=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,si=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function yd(e,n,t){let i=si(ae(e.r)),s=si(ae(e.g)),a=si(ae(e.b));return{r:ge(Ms(i+t*(si(ae(n.r))-i))),g:ge(Ms(s+t*(si(ae(n.g))-s))),b:ge(Ms(a+t*(si(ae(n.b))-a))),a:e.a+t*(n.a-e.a)}}function En(e,n,t){if(e){let i=Ds(e);i[n]=Math.max(0,Math.min(i[n]+i[n]*t,n===0?360:1)),i=Rs(i),e.r=i[0],e.g=i[1],e.b=i[2]}}function pr(e,n){return e&&Object.assign(n||{},e)}function dr(e){var n={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(n={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(n.a=ge(e[3]))):(n=pr(e,{r:0,g:0,b:0,a:1}),n.a=ge(n.a)),n}function kd(e){return e.charAt(0)==="r"?vd(e):pd(e)}var Mi=class e{constructor(n){if(n instanceof e)return n;let t=typeof n,i;t==="object"?i=dr(n):t==="string"&&(i=sd(n)||_d(n)||kd(n)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var n=pr(this._rgb);return n&&(n.a=ae(n.a)),n}set rgb(n){this._rgb=dr(n)}rgbString(){return this._valid?xd(this._rgb):void 0}hexString(){return this._valid?od(this._rgb):void 0}hslString(){return this._valid?fd(this._rgb):void 0}mix(n,t){if(n){let i=this.rgb,s=n.rgb,a,o=t===a?.5:t,r=2*o-1,c=i.a-s.a,l=((r*c===-1?r:(r+c)/(1+r*c))+1)/2;a=1-l,i.r=255&l*i.r+a*s.r+.5,i.g=255&l*i.g+a*s.g+.5,i.b=255&l*i.b+a*s.b+.5,i.a=o*i.a+(1-o)*s.a,this.rgb=i}return this}interpolate(n,t){return n&&(this._rgb=yd(this._rgb,n._rgb,t)),this}clone(){return new e(this.rgb)}alpha(n){return this._rgb.a=ge(n),this}clearer(n){let t=this._rgb;return t.a*=1-n,this}greyscale(){let n=this._rgb,t=Si(n.r*.3+n.g*.59+n.b*.11);return n.r=n.g=n.b=t,this}opaquer(n){let t=this._rgb;return t.a*=1+n,this}negate(){let n=this._rgb;return n.r=255-n.r,n.g=255-n.g,n.b=255-n.b,this}lighten(n){return En(this._rgb,2,n),this}darken(n){return En(this._rgb,2,-n),this}saturate(n){return En(this._rgb,1,n),this}desaturate(n){return En(this._rgb,1,-n),this}rotate(n){return ud(this._rgb,n),this}};function Zt(){}var Cr=(()=>{let e=0;return()=>e++})();function z(e){return e==null}function Y(e){if(Array.isArray&&Array.isArray(e))return!0;let n=Object.prototype.toString.call(e);return n.slice(0,7)==="[object"&&n.slice(-6)==="Array]"}function B(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function at(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function Et(e,n){return at(e)?e:n}function P(e,n){return typeof e>"u"?n:e}var Mr=(e,n)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/n,Ts=(e,n)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*n:+e;function q(e,n,t){if(e&&typeof e.call=="function")return e.apply(t,n)}function G(e,n,t,i){let s,a,o;if(Y(e))if(a=e.length,i)for(s=a-1;s>=0;s--)n.call(t,e[s],s);else for(s=0;s<a;s++)n.call(t,e[s],s);else if(B(e))for(o=Object.keys(e),a=o.length,s=0;s<a;s++)n.call(t,e[o[s]],o[s])}function Ri(e,n){let t,i,s,a;if(!e||!n||e.length!==n.length)return!1;for(t=0,i=e.length;t<i;++t)if(s=e[t],a=n[t],s.datasetIndex!==a.datasetIndex||s.index!==a.index)return!1;return!0}function An(e){if(Y(e))return e.map(An);if(B(e)){let n=Object.create(null),t=Object.keys(e),i=t.length,s=0;for(;s<i;++s)n[t[s]]=An(e[t[s]]);return n}return e}function Sr(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function wd(e,n,t,i){if(!Sr(e))return;let s=n[e],a=t[e];B(s)&&B(a)?oi(s,a,i):n[e]=An(a)}function oi(e,n,t){let i=Y(n)?n:[n],s=i.length;if(!B(e))return e;t=t||{};let a=t.merger||wd,o;for(let r=0;r<s;++r){if(o=i[r],!B(o))continue;let c=Object.keys(o);for(let l=0,d=c.length;l<d;++l)a(c[l],e,o,t)}return e}function ci(e,n){return oi(e,n,{merger:Cd})}function Cd(e,n,t){if(!Sr(e))return;let i=n[e],s=t[e];B(i)&&B(s)?ci(i,s):Object.prototype.hasOwnProperty.call(n,e)||(n[e]=An(s))}var ur={"":e=>e,x:e=>e.x,y:e=>e.y};function Md(e){let n=e.split("."),t=[],i="";for(let s of n)i+=s,i.endsWith("\\")?i=i.slice(0,-1)+".":(t.push(i),i="");return t}function Sd(e){let n=Md(e);return t=>{for(let i of n){if(i==="")break;t=t&&t[i]}return t}}function ce(e,n){return(ur[n]||(ur[n]=Sd(n)))(e)}function Bn(e){return e.charAt(0).toUpperCase()+e.slice(1)}var li=e=>typeof e<"u",oe=e=>typeof e=="function",As=(e,n)=>{if(e.size!==n.size)return!1;for(let t of e)if(!n.has(t))return!1;return!0};function Dr(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}var j=Math.PI,K=2*j,Dd=K+j,Ln=Number.POSITIVE_INFINITY,Id=j/180,rt=j/2,Ae=j/4,fr=j*2/3,re=Math.log10,Wt=Math.sign;function di(e,n,t){return Math.abs(e-n)<t}function Ls(e){let n=Math.round(e);e=di(e,n,e/1e3)?n:e;let t=Math.pow(10,Math.floor(re(e))),i=e/t;return(i<=1?1:i<=2?2:i<=5?5:10)*t}function Ir(e){let n=[],t=Math.sqrt(e),i;for(i=1;i<t;i++)e%i===0&&(n.push(i),n.push(e/i));return t===(t|0)&&n.push(t),n.sort((s,a)=>s-a).pop(),n}function Rd(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function ze(e){return!Rd(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function Rr(e,n){let t=Math.round(e);return t-n<=e&&t+n>=e}function Fs(e,n,t){let i,s,a;for(i=0,s=e.length;i<s;i++)a=e[i][t],isNaN(a)||(n.min=Math.min(n.min,a),n.max=Math.max(n.max,a))}function Ht(e){return e*(j/180)}function Nn(e){return e*(180/j)}function zs(e){if(!at(e))return;let n=1,t=0;for(;Math.round(e*n)/n!==e;)n*=10,t++;return t}function Bs(e,n){let t=n.x-e.x,i=n.y-e.y,s=Math.sqrt(t*t+i*i),a=Math.atan2(i,t);return a<-.5*j&&(a+=K),{angle:a,distance:s}}function Fn(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function Ed(e,n){return(e-n+Dd)%K-j}function _t(e){return(e%K+K)%K}function hi(e,n,t,i){let s=_t(e),a=_t(n),o=_t(t),r=_t(a-s),c=_t(o-s),l=_t(s-a),d=_t(s-o);return s===a||s===o||i&&a===o||r>c&&l<d}function ut(e,n,t){return Math.max(n,Math.min(t,e))}function Er(e){return ut(e,-32768,32767)}function Jt(e,n,t,i=1e-6){return e>=Math.min(n,t)-i&&e<=Math.max(n,t)+i}function Vn(e,n,t){t=t||(o=>e[o]<n);let i=e.length-1,s=0,a;for(;i-s>1;)a=s+i>>1,t(a)?s=a:i=a;return{lo:s,hi:i}}var Kt=(e,n,t,i)=>Vn(e,t,i?s=>{let a=e[s][n];return a<t||a===t&&e[s+1][n]===t}:s=>e[s][n]<t),Or=(e,n,t)=>Vn(e,t,i=>e[i][n]>=t);function Pr(e,n,t){let i=0,s=e.length;for(;i<s&&e[i]<n;)i++;for(;s>i&&e[s-1]>t;)s--;return i>0||s<e.length?e.slice(i,s):e}var Tr=["push","pop","shift","splice","unshift"];function Ar(e,n){if(e._chartjs){e._chartjs.listeners.push(n);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[n]}}),Tr.forEach(t=>{let i="_onData"+Bn(t),s=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...a){let o=s.apply(this,a);return e._chartjs.listeners.forEach(r=>{typeof r[i]=="function"&&r[i](...a)}),o}})})}function Ns(e,n){let t=e._chartjs;if(!t)return;let i=t.listeners,s=i.indexOf(n);s!==-1&&i.splice(s,1),!(i.length>0)&&(Tr.forEach(a=>{delete e[a]}),delete e._chartjs)}function Vs(e){let n=new Set(e);return n.size===e.length?e:Array.from(n)}var Hs=(function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame})();function js(e,n){let t=[],i=!1;return function(...s){t=s,i||(i=!0,Hs.call(window,()=>{i=!1,e.apply(n,t)}))}}function Lr(e,n){let t;return function(...i){return n?(clearTimeout(t),t=setTimeout(e,n,i)):e.apply(this,i),n}}var Hn=e=>e==="start"?"left":e==="end"?"right":"center",bt=(e,n,t)=>e==="start"?n:e==="end"?t:(n+t)/2,Fr=(e,n,t,i)=>e===(i?"left":"right")?t:e==="center"?(n+t)/2:n;function Ws(e,n,t){let i=n.length,s=0,a=i;if(e._sorted){let{iScale:o,vScale:r,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,d=o.axis,{min:h,max:m,minDefined:p,maxDefined:f}=o.getUserBounds();if(p){if(s=Math.min(Kt(c,d,h).lo,t?i:Kt(n,d,o.getPixelForValue(h)).lo),l){let u=c.slice(0,s+1).reverse().findIndex(g=>!z(g[r.axis]));s-=Math.max(0,u)}s=ut(s,0,i-1)}if(f){let u=Math.max(Kt(c,o.axis,m,!0).hi+1,t?0:Kt(n,d,o.getPixelForValue(m),!0).hi+1);if(l){let g=c.slice(u-1).findIndex(_=>!z(_[r.axis]));u+=Math.max(0,g)}a=ut(u,s,i)-s}else a=i-s}return{start:s,count:a}}function $s(e){let{xScale:n,yScale:t,_scaleRanges:i}=e,s={xmin:n.min,xmax:n.max,ymin:t.min,ymax:t.max};if(!i)return e._scaleRanges=s,!0;let a=i.xmin!==n.min||i.xmax!==n.max||i.ymin!==t.min||i.ymax!==t.max;return Object.assign(i,s),a}var On=e=>e===0||e===1,gr=(e,n,t)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-n)*K/t)),_r=(e,n,t)=>Math.pow(2,-10*e)*Math.sin((e-n)*K/t)+1,ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*rt)+1,easeOutSine:e=>Math.sin(e*rt),easeInOutSine:e=>-.5*(Math.cos(j*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>On(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>On(e)?e:gr(e,.075,.3),easeOutElastic:e=>On(e)?e:_r(e,.075,.3),easeInOutElastic(e){return On(e)?e:e<.5?.5*gr(e*2,.1125,.45):.5+.5*_r(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let n=1.70158;return(e/=.5)<1?.5*(e*e*(((n*=1.525)+1)*e-n)):.5*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)},easeInBounce:e=>1-ai.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?ai.easeInBounce(e*2)*.5:ai.easeOutBounce(e*2-1)*.5+.5};function Gs(e){if(e&&typeof e=="object"){let n=e.toString();return n==="[object CanvasPattern]"||n==="[object CanvasGradient]"}return!1}function Us(e){return Gs(e)?e:new Mi(e)}function Es(e){return Gs(e)?e:new Mi(e).saturate(.5).darken(.1).hexString()}var Od=["x","y","borderWidth","radius","tension"],Pd=["color","borderColor","backgroundColor"];function Td(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:n=>n!=="onProgress"&&n!=="onComplete"&&n!=="fn"}),e.set("animations",{colors:{type:"color",properties:Pd},numbers:{type:"number",properties:Od}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:n=>n|0}}}})}function Ad(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var br=new Map;function Ld(e,n){n=n||{};let t=e+JSON.stringify(n),i=br.get(t);return i||(i=new Intl.NumberFormat(e,n),br.set(t,i)),i}function mi(e,n,t){return Ld(n,t).format(e)}var zr={values(e){return Y(e)?e:""+e},numeric(e,n,t){if(e===0)return"0";let i=this.chart.options.locale,s,a=e;if(t.length>1){let l=Math.max(Math.abs(t[0].value),Math.abs(t[t.length-1].value));(l<1e-4||l>1e15)&&(s="scientific"),a=Fd(e,t)}let o=re(Math.abs(a)),r=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:s,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(c,this.options.ticks.format),mi(e,i,c)},logarithmic(e,n,t){if(e===0)return"0";let i=t[n].significand||e/Math.pow(10,Math.floor(re(e)));return[1,2,3,5,10,15].includes(i)||n>.8*t.length?zr.numeric.call(this,e,n,t):""}};function Fd(e,n){let t=n.length>3?n[2].value-n[1].value:n[1].value-n[0].value;return Math.abs(t)>=1&&e!==Math.floor(e)&&(t=e-Math.floor(e)),t}var Ei={formatters:zr};function zd(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(n,t)=>t.lineWidth,tickColor:(n,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ei.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:n=>!n.startsWith("before")&&!n.startsWith("after")&&n!=="callback"&&n!=="parser",_indexable:n=>n!=="borderDash"&&n!=="tickBorderDash"&&n!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:n=>n!=="backdropPadding"&&n!=="callback",_indexable:n=>n!=="backdropPadding"})}var ve=Object.create(null),jn=Object.create(null);function Di(e,n){if(!n)return e;let t=n.split(".");for(let i=0,s=t.length;i<s;++i){let a=t[i];e=e[a]||(e[a]=Object.create(null))}return e}function Os(e,n,t){return typeof n=="string"?oi(Di(e,n),t):oi(Di(e,""),n)}var Ps=class{constructor(n,t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,s)=>Es(s.backgroundColor),this.hoverBorderColor=(i,s)=>Es(s.borderColor),this.hoverColor=(i,s)=>Es(s.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(n),this.apply(t)}set(n,t){return Os(this,n,t)}get(n){return Di(this,n)}describe(n,t){return Os(jn,n,t)}override(n,t){return Os(ve,n,t)}route(n,t,i,s){let a=Di(this,n),o=Di(this,i),r="_"+t;Object.defineProperties(a,{[r]:{value:a[t],writable:!0},[t]:{enumerable:!0,get(){let c=this[r],l=o[s];return B(c)?Object.assign({},l,c):P(c,l)},set(c){this[r]=c}}})}apply(n){n.forEach(t=>t(this))}},Z=new Ps({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Td,Ad,zd]);function Bd(e){return!e||z(e.size)||z(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ii(e,n,t,i,s){let a=n[s];return a||(a=n[s]=e.measureText(s).width,t.push(s)),a>i&&(i=a),i}function Br(e,n,t,i){i=i||{};let s=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==n&&(s=i.data={},a=i.garbageCollect=[],i.font=n),e.save(),e.font=n;let o=0,r=t.length,c,l,d,h,m;for(c=0;c<r;c++)if(h=t[c],h!=null&&!Y(h))o=Ii(e,s,a,o,h);else if(Y(h))for(l=0,d=h.length;l<d;l++)m=h[l],m!=null&&!Y(m)&&(o=Ii(e,s,a,o,m));e.restore();let p=a.length/2;if(p>t.length){for(c=0;c<p;c++)delete s[a[c]];a.splice(0,p)}return o}function xe(e,n,t){let i=e.currentDevicePixelRatio,s=t!==0?Math.max(t/2,.5):0;return Math.round((n-s)*i)/i+s}function Qs(e,n){!n&&!e||(n=n||e.getContext("2d"),n.save(),n.resetTransform(),n.clearRect(0,0,e.width,e.height),n.restore())}function Wn(e,n,t,i){qs(e,n,t,i,null)}function qs(e,n,t,i,s){let a,o,r,c,l,d,h,m,p=n.pointStyle,f=n.rotation,u=n.radius,g=(f||0)*Id;if(p&&typeof p=="object"&&(a=p.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){e.save(),e.translate(t,i),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(u)||u<=0)){switch(e.beginPath(),p){default:s?e.ellipse(t,i,s/2,u,0,0,K):e.arc(t,i,u,0,K),e.closePath();break;case"triangle":d=s?s/2:u,e.moveTo(t+Math.sin(g)*d,i-Math.cos(g)*u),g+=fr,e.lineTo(t+Math.sin(g)*d,i-Math.cos(g)*u),g+=fr,e.lineTo(t+Math.sin(g)*d,i-Math.cos(g)*u),e.closePath();break;case"rectRounded":l=u*.516,c=u-l,o=Math.cos(g+Ae)*c,h=Math.cos(g+Ae)*(s?s/2-l:c),r=Math.sin(g+Ae)*c,m=Math.sin(g+Ae)*(s?s/2-l:c),e.arc(t-h,i-r,l,g-j,g-rt),e.arc(t+m,i-o,l,g-rt,g),e.arc(t+h,i+r,l,g,g+rt),e.arc(t-m,i+o,l,g+rt,g+j),e.closePath();break;case"rect":if(!f){c=Math.SQRT1_2*u,d=s?s/2:c,e.rect(t-d,i-c,2*d,2*c);break}g+=Ae;case"rectRot":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+m,i-o),e.lineTo(t+h,i+r),e.lineTo(t-m,i+o),e.closePath();break;case"crossRot":g+=Ae;case"cross":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o);break;case"star":h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o),g+=Ae,h=Math.cos(g)*(s?s/2:u),o=Math.cos(g)*u,r=Math.sin(g)*u,m=Math.sin(g)*(s?s/2:u),e.moveTo(t-h,i-r),e.lineTo(t+h,i+r),e.moveTo(t+m,i-o),e.lineTo(t-m,i+o);break;case"line":o=s?s/2:Math.cos(g)*u,r=Math.sin(g)*u,e.moveTo(t-o,i-r),e.lineTo(t+o,i+r);break;case"dash":e.moveTo(t,i),e.lineTo(t+Math.cos(g)*(s?s/2:u),i+Math.sin(g)*u);break;case!1:e.closePath();break}e.fill(),n.borderWidth>0&&e.stroke()}}function Xt(e,n,t){return t=t||.5,!n||e&&e.x>n.left-t&&e.x<n.right+t&&e.y>n.top-t&&e.y<n.bottom+t}function Oi(e,n){e.save(),e.beginPath(),e.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),e.clip()}function Pi(e){e.restore()}function Nr(e,n,t,i,s){if(!n)return e.lineTo(t.x,t.y);if(s==="middle"){let a=(n.x+t.x)/2;e.lineTo(a,n.y),e.lineTo(a,t.y)}else s==="after"!=!!i?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(t.x,t.y)}function Vr(e,n,t,i){if(!n)return e.lineTo(t.x,t.y);e.bezierCurveTo(i?n.cp1x:n.cp2x,i?n.cp1y:n.cp2y,i?t.cp2x:t.cp1x,i?t.cp2y:t.cp1y,t.x,t.y)}function Nd(e,n){n.translation&&e.translate(n.translation[0],n.translation[1]),z(n.rotation)||e.rotate(n.rotation),n.color&&(e.fillStyle=n.color),n.textAlign&&(e.textAlign=n.textAlign),n.textBaseline&&(e.textBaseline=n.textBaseline)}function Vd(e,n,t,i,s){if(s.strikethrough||s.underline){let a=e.measureText(i),o=n-a.actualBoundingBoxLeft,r=n+a.actualBoundingBoxRight,c=t-a.actualBoundingBoxAscent,l=t+a.actualBoundingBoxDescent,d=s.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=s.decorationWidth||2,e.moveTo(o,d),e.lineTo(r,d),e.stroke()}}function Hd(e,n){let t=e.fillStyle;e.fillStyle=n.color,e.fillRect(n.left,n.top,n.width,n.height),e.fillStyle=t}function ye(e,n,t,i,s,a={}){let o=Y(n)?n:[n],r=a.strokeWidth>0&&a.strokeColor!=="",c,l;for(e.save(),e.font=s.string,Nd(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&Hd(e,a.backdrop),r&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),z(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,t,i,a.maxWidth)),e.fillText(l,t,i,a.maxWidth),Vd(e,t,i,l,a),i+=Number(s.lineHeight);e.restore()}function pi(e,n){let{x:t,y:i,w:s,h:a,radius:o}=n;e.arc(t+o.topLeft,i+o.topLeft,o.topLeft,1.5*j,j,!0),e.lineTo(t,i+a-o.bottomLeft),e.arc(t+o.bottomLeft,i+a-o.bottomLeft,o.bottomLeft,j,rt,!0),e.lineTo(t+s-o.bottomRight,i+a),e.arc(t+s-o.bottomRight,i+a-o.bottomRight,o.bottomRight,rt,0,!0),e.lineTo(t+s,i+o.topRight),e.arc(t+s-o.topRight,i+o.topRight,o.topRight,0,-rt,!0),e.lineTo(t+o.topLeft,i)}var jd=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Wd=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function $d(e,n){let t=(""+e).match(jd);if(!t||t[1]==="normal")return n*1.2;switch(e=+t[2],t[3]){case"px":return e;case"%":e/=100;break}return n*e}var Gd=e=>+e||0;function $n(e,n){let t={},i=B(n),s=i?Object.keys(n):n,a=B(e)?i?o=>P(e[o],e[n[o]]):o=>e[o]:()=>e;for(let o of s)t[o]=Gd(a(o));return t}function Ys(e){return $n(e,{top:"y",right:"x",bottom:"y",left:"x"})}function ke(e){return $n(e,["topLeft","topRight","bottomLeft","bottomRight"])}function vt(e){let n=Ys(e);return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function mt(e,n){e=e||{},n=n||Z.font;let t=P(e.size,n.size);typeof t=="string"&&(t=parseInt(t,10));let i=P(e.style,n.style);i&&!(""+i).match(Wd)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let s={family:P(e.family,n.family),lineHeight:$d(P(e.lineHeight,n.lineHeight),t),size:t,style:i,weight:P(e.weight,n.weight),string:""};return s.string=Bd(s),s}function ui(e,n,t,i){let s=!0,a,o,r;for(a=0,o=e.length;a<o;++a)if(r=e[a],r!==void 0&&(n!==void 0&&typeof r=="function"&&(r=r(n),s=!1),t!==void 0&&Y(r)&&(r=r[t%r.length],s=!1),r!==void 0))return i&&!s&&(i.cacheable=!1),r}function Hr(e,n,t){let{min:i,max:s}=e,a=Ts(n,(s-i)/2),o=(r,c)=>t&&r===0?0:r+c;return{min:o(i,-Math.abs(a)),max:o(s,a)}}function le(e,n){return Object.assign(Object.create(e),n)}function Gn(e,n=[""],t,i,s=()=>e[0]){let a=t||e;typeof i>"u"&&(i=$r("_fallback",e));let o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:i,_getTarget:s,override:r=>Gn([r,...e],n,a,i)};return new Proxy(o,{deleteProperty(r,c){return delete r[c],delete r._keys,delete e[0][c],!0},get(r,c){return jr(r,c,()=>Jd(c,n,e,r))},getOwnPropertyDescriptor(r,c){return Reflect.getOwnPropertyDescriptor(r._scopes[0],c)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(r,c){return xr(r).includes(c)},ownKeys(r){return xr(r)},set(r,c,l){let d=r._storage||(r._storage=s());return r[c]=d[c]=l,delete r._keys,!0}})}function Fe(e,n,t,i){let s={_cacheable:!1,_proxy:e,_context:n,_subProxy:t,_stack:new Set,_descriptors:Ks(e,i),setContext:a=>Fe(e,a,t,i),override:a=>Fe(e.override(a),n,t,i)};return new Proxy(s,{deleteProperty(a,o){return delete a[o],delete e[o],!0},get(a,o,r){return jr(a,o,()=>Qd(a,o,r))},getOwnPropertyDescriptor(a,o){return a._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(a,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(a,o,r){return e[o]=r,delete a[o],!0}})}function Ks(e,n={scriptable:!0,indexable:!0}){let{_scriptable:t=n.scriptable,_indexable:i=n.indexable,_allKeys:s=n.allKeys}=e;return{allKeys:s,scriptable:t,indexable:i,isScriptable:oe(t)?t:()=>t,isIndexable:oe(i)?i:()=>i}}var Ud=(e,n)=>e?e+Bn(n):n,Xs=(e,n)=>B(n)&&e!=="adapters"&&(Object.getPrototypeOf(n)===null||n.constructor===Object);function jr(e,n,t){if(Object.prototype.hasOwnProperty.call(e,n)||n==="constructor")return e[n];let i=t();return e[n]=i,i}function Qd(e,n,t){let{_proxy:i,_context:s,_subProxy:a,_descriptors:o}=e,r=i[n];return oe(r)&&o.isScriptable(n)&&(r=qd(n,r,e,t)),Y(r)&&r.length&&(r=Yd(n,r,e,o.isIndexable)),Xs(n,r)&&(r=Fe(r,s,a&&a[n],o)),r}function qd(e,n,t,i){let{_proxy:s,_context:a,_subProxy:o,_stack:r}=t;if(r.has(e))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+e);r.add(e);let c=n(a,o||i);return r.delete(e),Xs(e,c)&&(c=Zs(s._scopes,s,e,c)),c}function Yd(e,n,t,i){let{_proxy:s,_context:a,_subProxy:o,_descriptors:r}=t;if(typeof a.index<"u"&&i(e))return n[a.index%n.length];if(B(n[0])){let c=n,l=s._scopes.filter(d=>d!==c);n=[];for(let d of c){let h=Zs(l,s,e,d);n.push(Fe(h,a,o&&o[e],r))}}return n}function Wr(e,n,t){return oe(e)?e(n,t):e}var Kd=(e,n)=>e===!0?n:typeof e=="string"?ce(n,e):void 0;function Xd(e,n,t,i,s){for(let a of n){let o=Kd(t,a);if(o){e.add(o);let r=Wr(o._fallback,t,s);if(typeof r<"u"&&r!==t&&r!==i)return r}else if(o===!1&&typeof i<"u"&&t!==i)return null}return!1}function Zs(e,n,t,i){let s=n._rootScopes,a=Wr(n._fallback,t,i),o=[...e,...s],r=new Set;r.add(i);let c=vr(r,o,t,a||t,i);return c===null||typeof a<"u"&&a!==t&&(c=vr(r,o,a,c,i),c===null)?!1:Gn(Array.from(r),[""],s,a,()=>Zd(n,t,i))}function vr(e,n,t,i,s){for(;t;)t=Xd(e,n,t,i,s);return t}function Zd(e,n,t){let i=e._getTarget();n in i||(i[n]={});let s=i[n];return Y(s)&&B(t)?t:s||{}}function Jd(e,n,t,i){let s;for(let a of n)if(s=$r(Ud(a,e),t),typeof s<"u")return Xs(e,s)?Zs(t,i,e,s):s}function $r(e,n){for(let t of n){if(!t)continue;let i=t[e];if(typeof i<"u")return i}}function xr(e){let n=e._keys;return n||(n=e._keys=th(e._scopes)),n}function th(e){let n=new Set;for(let t of e)for(let i of Object.keys(t).filter(s=>!s.startsWith("_")))n.add(i);return Array.from(n)}function Js(e,n,t,i){let{iScale:s}=e,{key:a="r"}=this._parsing,o=new Array(i),r,c,l,d;for(r=0,c=i;r<c;++r)l=r+t,d=n[l],o[r]={r:s.parse(ce(d,a),l)};return o}var eh=Number.EPSILON||1e-14,ri=(e,n)=>n<e.length&&!e[n].skip&&e[n],Gr=e=>e==="x"?"y":"x";function ih(e,n,t,i){let s=e.skip?n:e,a=n,o=t.skip?n:t,r=Fn(a,s),c=Fn(o,a),l=r/(r+c),d=c/(r+c);l=isNaN(l)?0:l,d=isNaN(d)?0:d;let h=i*l,m=i*d;return{previous:{x:a.x-h*(o.x-s.x),y:a.y-h*(o.y-s.y)},next:{x:a.x+m*(o.x-s.x),y:a.y+m*(o.y-s.y)}}}function nh(e,n,t){let i=e.length,s,a,o,r,c,l=ri(e,0);for(let d=0;d<i-1;++d)if(c=l,l=ri(e,d+1),!(!c||!l)){if(di(n[d],0,eh)){t[d]=t[d+1]=0;continue}s=t[d]/n[d],a=t[d+1]/n[d],r=Math.pow(s,2)+Math.pow(a,2),!(r<=9)&&(o=3/Math.sqrt(r),t[d]=s*o*n[d],t[d+1]=a*o*n[d])}}function sh(e,n,t="x"){let i=Gr(t),s=e.length,a,o,r,c=ri(e,0);for(let l=0;l<s;++l){if(o=r,r=c,c=ri(e,l+1),!r)continue;let d=r[t],h=r[i];o&&(a=(d-o[t])/3,r[`cp1${t}`]=d-a,r[`cp1${i}`]=h-a*n[l]),c&&(a=(c[t]-d)/3,r[`cp2${t}`]=d+a,r[`cp2${i}`]=h+a*n[l])}}function ah(e,n="x"){let t=Gr(n),i=e.length,s=Array(i).fill(0),a=Array(i),o,r,c,l=ri(e,0);for(o=0;o<i;++o)if(r=c,c=l,l=ri(e,o+1),!!c){if(l){let d=l[n]-c[n];s[o]=d!==0?(l[t]-c[t])/d:0}a[o]=r?l?Wt(s[o-1])!==Wt(s[o])?0:(s[o-1]+s[o])/2:s[o-1]:s[o]}nh(e,s,a),sh(e,a,n)}function Pn(e,n,t){return Math.max(Math.min(e,t),n)}function oh(e,n){let t,i,s,a,o,r=Xt(e[0],n);for(t=0,i=e.length;t<i;++t)o=a,a=r,r=t<i-1&&Xt(e[t+1],n),a&&(s=e[t],o&&(s.cp1x=Pn(s.cp1x,n.left,n.right),s.cp1y=Pn(s.cp1y,n.top,n.bottom)),r&&(s.cp2x=Pn(s.cp2x,n.left,n.right),s.cp2y=Pn(s.cp2y,n.top,n.bottom)))}function Ur(e,n,t,i,s){let a,o,r,c;if(n.spanGaps&&(e=e.filter(l=>!l.skip)),n.cubicInterpolationMode==="monotone")ah(e,s);else{let l=i?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)r=e[a],c=ih(l,r,e[Math.min(a+1,o-(i?0:1))%o],n.tension),r.cp1x=c.previous.x,r.cp1y=c.previous.y,r.cp2x=c.next.x,r.cp2y=c.next.y,l=r}n.capBezierPoints&&oh(e,t)}function Un(){return typeof window<"u"&&typeof document<"u"}function Qn(e){let n=e.parentNode;return n&&n.toString()==="[object ShadowRoot]"&&(n=n.host),n}function zn(e,n,t){let i;return typeof e=="string"?(i=parseInt(e,10),e.indexOf("%")!==-1&&(i=i/100*n.parentNode[t])):i=e,i}var qn=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function rh(e,n){return qn(e).getPropertyValue(n)}var ch=["top","right","bottom","left"];function Le(e,n,t){let i={};t=t?"-"+t:"";for(let s=0;s<4;s++){let a=ch[s];i[a]=parseFloat(e[n+"-"+a+t])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var lh=(e,n,t)=>(e>0||n>0)&&(!t||!t.shadowRoot);function dh(e,n){let t=e.touches,i=t&&t.length?t[0]:e,{offsetX:s,offsetY:a}=i,o=!1,r,c;if(lh(s,a,e.target))r=s,c=a;else{let l=n.getBoundingClientRect();r=i.clientX-l.left,c=i.clientY-l.top,o=!0}return{x:r,y:c,box:o}}function we(e,n){if("native"in e)return e;let{canvas:t,currentDevicePixelRatio:i}=n,s=qn(t),a=s.boxSizing==="border-box",o=Le(s,"padding"),r=Le(s,"border","width"),{x:c,y:l,box:d}=dh(e,t),h=o.left+(d&&r.left),m=o.top+(d&&r.top),{width:p,height:f}=n;return a&&(p-=o.width+r.width,f-=o.height+r.height),{x:Math.round((c-h)/p*t.width/i),y:Math.round((l-m)/f*t.height/i)}}function hh(e,n,t){let i,s;if(n===void 0||t===void 0){let a=e&&Qn(e);if(!a)n=e.clientWidth,t=e.clientHeight;else{let o=a.getBoundingClientRect(),r=qn(a),c=Le(r,"border","width"),l=Le(r,"padding");n=o.width-l.width-c.width,t=o.height-l.height-c.height,i=zn(r.maxWidth,a,"clientWidth"),s=zn(r.maxHeight,a,"clientHeight")}}return{width:n,height:t,maxWidth:i||Ln,maxHeight:s||Ln}}var be=e=>Math.round(e*10)/10;function Qr(e,n,t,i){let s=qn(e),a=Le(s,"margin"),o=zn(s.maxWidth,e,"clientWidth")||Ln,r=zn(s.maxHeight,e,"clientHeight")||Ln,c=hh(e,n,t),{width:l,height:d}=c;if(s.boxSizing==="content-box"){let m=Le(s,"border","width"),p=Le(s,"padding");l-=p.width+m.width,d-=p.height+m.height}return l=Math.max(0,l-a.width),d=Math.max(0,i?l/i:d-a.height),l=be(Math.min(l,o,c.maxWidth)),d=be(Math.min(d,r,c.maxHeight)),l&&!d&&(d=be(l/2)),(n!==void 0||t!==void 0)&&i&&c.height&&d>c.height&&(d=c.height,l=be(Math.floor(d*i))),{width:l,height:d}}function ta(e,n,t){let i=n||1,s=be(e.height*i),a=be(e.width*i);e.height=be(e.height),e.width=be(e.width);let o=e.canvas;return o.style&&(t||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==i||o.height!==s||o.width!==a?(e.currentDevicePixelRatio=i,o.height=s,o.width=a,e.ctx.setTransform(i,0,0,i,0,0),!0):!1}var qr=(function(){let e=!1;try{let n={get passive(){return e=!0,!1}};Un()&&(window.addEventListener("test",null,n),window.removeEventListener("test",null,n))}catch{}return e})();function ea(e,n){let t=rh(e,n),i=t&&t.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function _e(e,n,t,i){return{x:e.x+t*(n.x-e.x),y:e.y+t*(n.y-e.y)}}function Yr(e,n,t,i){return{x:e.x+t*(n.x-e.x),y:i==="middle"?t<.5?e.y:n.y:i==="after"?t<1?e.y:n.y:t>0?n.y:e.y}}function Kr(e,n,t,i){let s={x:e.cp2x,y:e.cp2y},a={x:n.cp1x,y:n.cp1y},o=_e(e,s,t),r=_e(s,a,t),c=_e(a,n,t),l=_e(o,r,t),d=_e(r,c,t);return _e(l,d,t)}var mh=function(e,n){return{x(t){return e+e+n-t},setWidth(t){n=t},textAlign(t){return t==="center"?t:t==="right"?"left":"right"},xPlus(t,i){return t-i},leftForLtr(t,i){return t-i}}},ph=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,n){return e+n},leftForLtr(e,n){return e}}};function Be(e,n,t){return e?mh(n,t):ph()}function ia(e,n){let t,i;(n==="ltr"||n==="rtl")&&(t=e.canvas.style,i=[t.getPropertyValue("direction"),t.getPropertyPriority("direction")],t.setProperty("direction",n,"important"),e.prevTextDirection=i)}function na(e,n){n!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",n[0],n[1]))}function Xr(e){return e==="angle"?{between:hi,compare:Ed,normalize:_t}:{between:Jt,compare:(n,t)=>n-t,normalize:n=>n}}function yr({start:e,end:n,count:t,loop:i,style:s}){return{start:e%t,end:n%t,loop:i&&(n-e+1)%t===0,style:s}}function uh(e,n,t){let{property:i,start:s,end:a}=t,{between:o,normalize:r}=Xr(i),c=n.length,{start:l,end:d,loop:h}=e,m,p;if(h){for(l+=c,d+=c,m=0,p=c;m<p&&o(r(n[l%c][i]),s,a);++m)l--,d--;l%=c,d%=c}return d<l&&(d+=c),{start:l,end:d,loop:h,style:e.style}}function sa(e,n,t){if(!t)return[e];let{property:i,start:s,end:a}=t,o=n.length,{compare:r,between:c,normalize:l}=Xr(i),{start:d,end:h,loop:m,style:p}=uh(e,n,t),f=[],u=!1,g=null,_,b,k,M=()=>c(s,k,_)&&r(s,k)!==0,x=()=>r(a,_)===0||c(a,k,_),C=()=>u||M(),R=()=>!u||x();for(let D=d,O=d;D<=h;++D)b=n[D%o],!b.skip&&(_=l(b[i]),_!==k&&(u=c(_,s,a),g===null&&C()&&(g=r(_,s)===0?D:O),g!==null&&R()&&(f.push(yr({start:g,end:D,loop:m,count:o,style:p})),g=null),O=D,k=_));return g!==null&&f.push(yr({start:g,end:h,loop:m,count:o,style:p})),f}function aa(e,n){let t=[],i=e.segments;for(let s=0;s<i.length;s++){let a=sa(i[s],e.points,n);a.length&&t.push(...a)}return t}function fh(e,n,t,i){let s=0,a=n-1;if(t&&!i)for(;s<n&&!e[s].skip;)s++;for(;s<n&&e[s].skip;)s++;for(s%=n,t&&(a+=s);a>s&&e[a%n].skip;)a--;return a%=n,{start:s,end:a}}function gh(e,n,t,i){let s=e.length,a=[],o=n,r=e[n],c;for(c=n+1;c<=t;++c){let l=e[c%s];l.skip||l.stop?r.skip||(i=!1,a.push({start:n%s,end:(c-1)%s,loop:i}),n=o=l.stop?c:null):(o=c,r.skip&&(n=c)),r=l}return o!==null&&a.push({start:n%s,end:o%s,loop:i}),a}function Zr(e,n){let t=e.points,i=e.options.spanGaps,s=t.length;if(!s)return[];let a=!!e._loop,{start:o,end:r}=fh(t,s,a,i);if(i===!0)return kr(e,[{start:o,end:r,loop:a}],t,n);let c=r<o?r+s:r,l=!!e._fullLoop&&o===0&&r===s-1;return kr(e,gh(t,o,c,l),t,n)}function kr(e,n,t,i){return!i||!i.setContext||!t?n:_h(e,n,t,i)}function _h(e,n,t,i){let s=e._chart.getContext(),a=wr(e.options),{_datasetIndex:o,options:{spanGaps:r}}=e,c=t.length,l=[],d=a,h=n[0].start,m=h;function p(f,u,g,_){let b=r?-1:1;if(f!==u){for(f+=c;t[f%c].skip;)f-=b;for(;t[u%c].skip;)u+=b;f%c!==u%c&&(l.push({start:f%c,end:u%c,loop:g,style:_}),d=_,h=u%c)}}for(let f of n){h=r?h:f.start;let u=t[h%c],g;for(m=h+1;m<=f.end;m++){let _=t[m%c];g=wr(i.setContext(le(s,{type:"segment",p0:u,p1:_,p0DataIndex:(m-1)%c,p1DataIndex:m%c,datasetIndex:o}))),bh(g,d)&&p(h,m-1,f.loop,d),u=_,d=g}h<m-1&&p(h,m-1,f.loop,d)}return l}function wr(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function bh(e,n){if(!n)return!1;let t=[],i=function(s,a){return Gs(a)?(t.includes(a)||t.push(a),t.indexOf(a)):a};return JSON.stringify(e,i)!==JSON.stringify(n,i)}function Tn(e,n,t){return e.options.clip?e[t]:n[t]}function vh(e,n){let{xScale:t,yScale:i}=e;return t&&i?{left:Tn(t,n,"left"),right:Tn(t,n,"right"),top:Tn(i,n,"top"),bottom:Tn(i,n,"bottom")}:n}function oa(e,n){let t=n._clip;if(t.disabled)return!1;let i=vh(n,e.chartArea);return{left:t.left===!1?0:i.left-(t.left===!0?0:t.left),right:t.right===!1?e.width:i.right+(t.right===!0?0:t.right),top:t.top===!1?0:i.top-(t.top===!0?0:t.top),bottom:t.bottom===!1?e.height:i.bottom+(t.bottom===!0?0:t.bottom)}}var ba=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(n,t,i,s){let a=t.listeners[s],o=t.duration;a.forEach(r=>r({chart:n,initial:t.initial,numSteps:o,currentStep:Math.min(i-t.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=Hs.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(n=Date.now()){let t=0;this._charts.forEach((i,s)=>{if(!i.running||!i.items.length)return;let a=i.items,o=a.length-1,r=!1,c;for(;o>=0;--o)c=a[o],c._active?(c._total>i.duration&&(i.duration=c._total),c.tick(n),r=!0):(a[o]=a[a.length-1],a.pop());r&&(s.draw(),this._notify(s,i,n,"progress")),a.length||(i.running=!1,this._notify(s,i,n,"complete"),i.initial=!1),t+=a.length}),this._lastDate=n,t===0&&(this._running=!1)}_getAnims(n){let t=this._charts,i=t.get(n);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(n,i)),i}listen(n,t,i){this._getAnims(n).listeners[t].push(i)}add(n,t){!t||!t.length||this._getAnims(n).items.push(...t)}has(n){return this._getAnims(n).items.length>0}start(n){let t=this._charts.get(n);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((i,s)=>Math.max(i,s._duration),0),this._refresh())}running(n){if(!this._running)return!1;let t=this._charts.get(n);return!(!t||!t.running||!t.items.length)}stop(n){let t=this._charts.get(n);if(!t||!t.items.length)return;let i=t.items,s=i.length-1;for(;s>=0;--s)i[s].cancel();t.items=[],this._notify(n,t,Date.now(),"complete")}remove(n){return this._charts.delete(n)}},de=new ba,Jr="transparent",xh={boolean(e,n,t){return t>.5?n:e},color(e,n,t){let i=Us(e||Jr),s=i.valid&&Us(n||Jr);return s&&s.valid?s.mix(i,t).hexString():n},number(e,n,t){return e+(n-e)*t}},va=class{constructor(n,t,i,s){let a=t[i];s=ui([n.to,s,a,n.from]);let o=ui([n.from,a,s]);this._active=!0,this._fn=n.fn||xh[n.type||typeof o],this._easing=ai[n.easing]||ai.linear,this._start=Math.floor(Date.now()+(n.delay||0)),this._duration=this._total=Math.floor(n.duration),this._loop=!!n.loop,this._target=t,this._prop=i,this._from=o,this._to=s,this._promises=void 0}active(){return this._active}update(n,t,i){if(this._active){this._notify(!1);let s=this._target[this._prop],a=i-this._start,o=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(o,n.duration)),this._total+=a,this._loop=!!n.loop,this._to=ui([n.to,t,s,n.from]),this._from=ui([n.from,s,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(n){let t=n-this._start,i=this._duration,s=this._prop,a=this._from,o=this._loop,r=this._to,c;if(this._active=a!==r&&(o||t<i),!this._active){this._target[s]=r,this._notify(!0);return}if(t<0){this._target[s]=a;return}c=t/i%2,c=o&&c>1?2-c:c,c=this._easing(Math.min(1,Math.max(0,c))),this._target[s]=this._fn(a,r,c)}wait(){let n=this._promises||(this._promises=[]);return new Promise((t,i)=>{n.push({res:t,rej:i})})}_notify(n){let t=n?"res":"rej",i=this._promises||[];for(let s=0;s<i.length;s++)i[s][t]()}},ns=class{constructor(n,t){this._chart=n,this._properties=new Map,this.configure(t)}configure(n){if(!B(n))return;let t=Object.keys(Z.animation),i=this._properties;Object.getOwnPropertyNames(n).forEach(s=>{let a=n[s];if(!B(a))return;let o={};for(let r of t)o[r]=a[r];(Y(a.properties)&&a.properties||[s]).forEach(r=>{(r===s||!i.has(r))&&i.set(r,o)})})}_animateOptions(n,t){let i=t.options,s=kh(n,i);if(!s)return[];let a=this._createAnimations(s,i);return i.$shared&&yh(n.options.$animations,i).then(()=>{n.options=i},()=>{}),a}_createAnimations(n,t){let i=this._properties,s=[],a=n.$animations||(n.$animations={}),o=Object.keys(t),r=Date.now(),c;for(c=o.length-1;c>=0;--c){let l=o[c];if(l.charAt(0)==="$")continue;if(l==="options"){s.push(...this._animateOptions(n,t));continue}let d=t[l],h=a[l],m=i.get(l);if(h)if(m&&h.active()){h.update(m,d,r);continue}else h.cancel();if(!m||!m.duration){n[l]=d;continue}a[l]=h=new va(m,n,l,d),s.push(h)}return s}update(n,t){if(this._properties.size===0){Object.assign(n,t);return}let i=this._createAnimations(n,t);if(i.length)return de.add(this._chart,i),!0}};function yh(e,n){let t=[],i=Object.keys(n);for(let s=0;s<i.length;s++){let a=e[i[s]];a&&a.active()&&t.push(a.wait())}return Promise.all(t)}function kh(e,n){if(!n)return;let t=e.options;if(!t){e.options=n;return}return t.$shared&&(e.options=t=Object.assign({},t,{$shared:!1,$animations:{}})),t}function tc(e,n){let t=e&&e.options||{},i=t.reverse,s=t.min===void 0?n:0,a=t.max===void 0?n:0;return{start:i?a:s,end:i?s:a}}function wh(e,n,t){if(t===!1)return!1;let i=tc(e,t),s=tc(n,t);return{top:s.end,right:i.end,bottom:s.start,left:i.start}}function Ch(e){let n,t,i,s;return B(e)?(n=e.top,t=e.right,i=e.bottom,s=e.left):n=t=i=s=e,{top:n,right:t,bottom:i,left:s,disabled:e===!1}}function Jc(e,n){let t=[],i=e._getSortedDatasetMetas(n),s,a;for(s=0,a=i.length;s<a;++s)t.push(i[s].index);return t}function ec(e,n,t,i={}){let s=e.keys,a=i.mode==="single",o,r,c,l;if(n===null)return;let d=!1;for(o=0,r=s.length;o<r;++o){if(c=+s[o],c===t){if(d=!0,i.all)continue;break}l=e.values[c],at(l)&&(a||n===0||Wt(n)===Wt(l))&&(n+=l)}return!d&&!i.all?0:n}function Mh(e,n){let{iScale:t,vScale:i}=n,s=t.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",o=Object.keys(e),r=new Array(o.length),c,l,d;for(c=0,l=o.length;c<l;++c)d=o[c],r[c]={[s]:d,[a]:e[d]};return r}function ra(e,n){let t=e&&e.options.stacked;return t||t===void 0&&n.stack!==void 0}function Sh(e,n,t){return`${e.id}.${n.id}.${t.stack||t.type}`}function Dh(e){let{min:n,max:t,minDefined:i,maxDefined:s}=e.getUserBounds();return{min:i?n:Number.NEGATIVE_INFINITY,max:s?t:Number.POSITIVE_INFINITY}}function Ih(e,n,t){let i=e[n]||(e[n]={});return i[t]||(i[t]={})}function ic(e,n,t,i){for(let s of n.getMatchingVisibleMetas(i).reverse()){let a=e[s.index];if(t&&a>0||!t&&a<0)return s.index}return null}function nc(e,n){let{chart:t,_cachedMeta:i}=e,s=t._stacks||(t._stacks={}),{iScale:a,vScale:o,index:r}=i,c=a.axis,l=o.axis,d=Sh(a,o,i),h=n.length,m;for(let p=0;p<h;++p){let f=n[p],{[c]:u,[l]:g}=f,_=f._stacks||(f._stacks={});m=_[l]=Ih(s,d,u),m[r]=g,m._top=ic(m,o,!0,i.type),m._bottom=ic(m,o,!1,i.type);let b=m._visualValues||(m._visualValues={});b[r]=g}}function ca(e,n){let t=e.scales;return Object.keys(t).filter(i=>t[i].axis===n).shift()}function Rh(e,n){return le(e,{active:!1,dataset:void 0,datasetIndex:n,index:n,mode:"default",type:"dataset"})}function Eh(e,n,t){return le(e,{active:!1,dataIndex:n,parsed:void 0,raw:void 0,element:t,index:n,mode:"default",type:"data"})}function Ti(e,n){let t=e.controller.index,i=e.vScale&&e.vScale.axis;if(i){n=n||e._parsed;for(let s of n){let a=s._stacks;if(!a||a[i]===void 0||a[i][t]===void 0)return;delete a[i][t],a[i]._visualValues!==void 0&&a[i]._visualValues[t]!==void 0&&delete a[i]._visualValues[t]}}}var la=e=>e==="reset"||e==="none",sc=(e,n)=>n?e:Object.assign({},e),Oh=(e,n,t)=>e&&!n.hidden&&n._stacked&&{keys:Jc(t,!0),values:null},Me=(()=>{class e{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ra(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&Ti(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,i=this._cachedMeta,s=this.getDataset(),a=(m,p,f,u)=>m==="x"?p:m==="r"?u:f,o=i.xAxisID=P(s.xAxisID,ca(t,"x")),r=i.yAxisID=P(s.yAxisID,ca(t,"y")),c=i.rAxisID=P(s.rAxisID,ca(t,"r")),l=i.indexAxis,d=i.iAxisID=a(l,o,r,c),h=i.vAxisID=a(l,r,o,c);i.xScale=this.getScaleForId(o),i.yScale=this.getScaleForId(r),i.rScale=this.getScaleForId(c),i.iScale=this.getScaleForId(d),i.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&Ns(this._data,this),t._stacked&&Ti(t)}_dataCheck(){let t=this.getDataset(),i=t.data||(t.data=[]),s=this._data;if(B(i)){let a=this._cachedMeta;this._data=Mh(i,a)}else if(s!==i){if(s){Ns(s,this);let a=this._cachedMeta;Ti(a),a._parsed=[]}i&&Object.isExtensible(i)&&Ar(i,this),this._syncList=[],this._data=i}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let i=this._cachedMeta,s=this.getDataset(),a=!1;this._dataCheck();let o=i._stacked;i._stacked=ra(i.vScale,i),i.stack!==s.stack&&(a=!0,Ti(i),i.stack=s.stack),this._resyncElements(t),(a||o!==i._stacked)&&(nc(this,i._parsed),i._stacked=ra(i.vScale,i))}configure(){let t=this.chart.config,i=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){let{_cachedMeta:s,_data:a}=this,{iScale:o,_stacked:r}=s,c=o.axis,l=t===0&&i===a.length?!0:s._sorted,d=t>0&&s._parsed[t-1],h,m,p;if(this._parsing===!1)s._parsed=a,s._sorted=!0,p=a;else{Y(a[t])?p=this.parseArrayData(s,a,t,i):B(a[t])?p=this.parseObjectData(s,a,t,i):p=this.parsePrimitiveData(s,a,t,i);let f=()=>m[c]===null||d&&m[c]<d[c];for(h=0;h<i;++h)s._parsed[h+t]=m=p[h],l&&(f()&&(l=!1),d=m);s._sorted=l}r&&nc(this,p)}parsePrimitiveData(t,i,s,a){let{iScale:o,vScale:r}=t,c=o.axis,l=r.axis,d=o.getLabels(),h=o===r,m=new Array(a),p,f,u;for(p=0,f=a;p<f;++p)u=p+s,m[p]={[c]:h||o.parse(d[u],u),[l]:r.parse(i[u],u)};return m}parseArrayData(t,i,s,a){let{xScale:o,yScale:r}=t,c=new Array(a),l,d,h,m;for(l=0,d=a;l<d;++l)h=l+s,m=i[h],c[l]={x:o.parse(m[0],h),y:r.parse(m[1],h)};return c}parseObjectData(t,i,s,a){let{xScale:o,yScale:r}=t,{xAxisKey:c="x",yAxisKey:l="y"}=this._parsing,d=new Array(a),h,m,p,f;for(h=0,m=a;h<m;++h)p=h+s,f=i[p],d[h]={x:o.parse(ce(f,c),p),y:r.parse(ce(f,l),p)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,s){let a=this.chart,o=this._cachedMeta,r=i[t.axis],c={keys:Jc(a,!0),values:i._stacks[t.axis]._visualValues};return ec(c,r,o.index,{mode:s})}updateRangeFromParsed(t,i,s,a){let o=s[i.axis],r=o===null?NaN:o,c=a&&s._stacks[i.axis];a&&c&&(a.values=c,r=ec(a,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,i){let s=this._cachedMeta,a=s._parsed,o=s._sorted&&t===s.iScale,r=a.length,c=this._getOtherScale(t),l=Oh(i,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:m}=Dh(c),p,f;function u(){f=a[p];let g=f[c.axis];return!at(f[t.axis])||h>g||m<g}for(p=0;p<r&&!(!u()&&(this.updateRangeFromParsed(d,t,f,l),o));++p);if(o){for(p=r-1;p>=0;--p)if(!u()){this.updateRangeFromParsed(d,t,f,l);break}}return d}getAllParsedValues(t){let i=this._cachedMeta._parsed,s=[],a,o,r;for(a=0,o=i.length;a<o;++a)r=i[a][t.axis],at(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let i=this._cachedMeta,s=i.iScale,a=i.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:a?""+a.getLabelForValue(o[a.axis]):""}}_update(t){let i=this._cachedMeta;this.update(t||"default"),i._clip=Ch(P(this.options.clip,wh(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,i=this.chart,s=this._cachedMeta,a=s.data||[],o=i.chartArea,r=[],c=this._drawStart||0,l=this._drawCount||a.length-c,d=this.options.drawActiveElementsOnTop,h;for(s.dataset&&s.dataset.draw(t,o,c,l),h=c;h<c+l;++h){let m=a[h];m.hidden||(m.active&&d?r.push(m):m.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,i){let s=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,i,s){let a=this.getDataset(),o;if(t>=0&&t<this._cachedMeta.data.length){let r=this._cachedMeta.data[t];o=r.$context||(r.$context=Eh(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=a.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=Rh(this.chart.getContext(),this.index)),o.dataset=a,o.index=o.datasetIndex=this.index;return o.active=!!i,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",s){let a=i==="active",o=this._cachedDataOpts,r=t+"-"+i,c=o[r],l=this.enableOptionSharing&&li(s);if(c)return sc(c,l);let d=this.chart.config,h=d.datasetElementScopeKeys(this._type,t),m=a?[`${t}Hover`,"hover",t,""]:[t,""],p=d.getOptionScopes(this.getDataset(),h),f=Object.keys(Z.elements[t]),u=()=>this.getContext(s,a,i),g=d.resolveNamedOptions(p,f,u,m);return g.$shared&&(g.$shared=l,o[r]=Object.freeze(sc(g,l))),g}_resolveAnimations(t,i,s){let a=this.chart,o=this._cachedDataOpts,r=`animation-${i}`,c=o[r];if(c)return c;let l;if(a.options.animation!==!1){let h=this.chart.config,m=h.datasetAnimationScopeKeys(this._type,i),p=h.getOptionScopes(this.getDataset(),m);l=h.createResolver(p,this.getContext(t,s,i))}let d=new ns(a,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||la(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){let s=this.resolveDataElementOptions(t,i),a=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(i,o)||o!==a;return this.updateSharedOptions(o,i,s),{sharedOptions:o,includeOptions:r}}updateElement(t,i,s,a){la(a)?Object.assign(t,s):this._resolveAnimations(i,a).update(t,s)}updateSharedOptions(t,i,s){t&&!la(i)&&this._resolveAnimations(void 0,i).update(t,s)}_setStyle(t,i,s,a){t.active=a;let o=this.getStyle(i,a);this._resolveAnimations(i,s,a).update(t,{options:!a&&this.getSharedOptions(o)||o})}removeHoverStyle(t,i,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,i,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let i=this._data,s=this._cachedMeta.data;for(let[c,l,d]of this._syncList)this[c](l,d);this._syncList=[];let a=s.length,o=i.length,r=Math.min(o,a);r&&this.parse(0,r),o>a?this._insertElements(a,o-a,t):o<a&&this._removeElements(o,a-o)}_insertElements(t,i,s=!0){let a=this._cachedMeta,o=a.data,r=t+i,c,l=d=>{for(d.length+=i,c=d.length-1;c>=r;c--)d[c]=d[c-i]};for(l(o),c=t;c<r;++c)o[c]=new this.dataElementType;this._parsing&&l(a._parsed),this.parse(t,i),s&&this.updateElements(o,t,i,"reset")}updateElements(t,i,s,a){}_removeElements(t,i){let s=this._cachedMeta;if(this._parsing){let a=s._parsed.splice(t,i);s._stacked&&Ti(s,a)}s.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[i,s,a]=t;this[i](s,a)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);let s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}return e})();function Ph(e,n){if(!e._cache.$bar){let t=e.getMatchingVisibleMetas(n),i=[];for(let s=0,a=t.length;s<a;s++)i=i.concat(t[s].controller.getAllParsedValues(e));e._cache.$bar=Vs(i.sort((s,a)=>s-a))}return e._cache.$bar}function Th(e){let n=e.iScale,t=Ph(n,e.type),i=n._length,s,a,o,r,c=()=>{o===32767||o===-32768||(li(r)&&(i=Math.min(i,Math.abs(o-r)||i)),r=o)};for(s=0,a=t.length;s<a;++s)o=n.getPixelForValue(t[s]),c();for(r=void 0,s=0,a=n.ticks.length;s<a;++s)o=n.getPixelForTick(s),c();return i}function Ah(e,n,t,i){let s=t.barThickness,a,o;return z(s)?(a=n.min*t.categoryPercentage,o=t.barPercentage):(a=s*i,o=1),{chunk:a/i,ratio:o,start:n.pixels[e]-a/2}}function Lh(e,n,t,i){let s=n.pixels,a=s[e],o=e>0?s[e-1]:null,r=e<s.length-1?s[e+1]:null,c=t.categoryPercentage;o===null&&(o=a-(r===null?n.end-n.start:r-a)),r===null&&(r=a+a-o);let l=a-(a-Math.min(o,r))/2*c;return{chunk:Math.abs(r-o)/2*c/i,ratio:t.barPercentage,start:l}}function Fh(e,n,t,i){let s=t.parse(e[0],i),a=t.parse(e[1],i),o=Math.min(s,a),r=Math.max(s,a),c=o,l=r;Math.abs(o)>Math.abs(r)&&(c=r,l=o),n[t.axis]=l,n._custom={barStart:c,barEnd:l,start:s,end:a,min:o,max:r}}function tl(e,n,t,i){return Y(e)?Fh(e,n,t,i):n[t.axis]=t.parse(e,i),n}function ac(e,n,t,i){let s=e.iScale,a=e.vScale,o=s.getLabels(),r=s===a,c=[],l,d,h,m;for(l=t,d=t+i;l<d;++l)m=n[l],h={},h[s.axis]=r||s.parse(o[l],l),c.push(tl(m,h,a,l));return c}function da(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function zh(e,n,t){return e!==0?Wt(e):(n.isHorizontal()?1:-1)*(n.min>=t?1:-1)}function Bh(e){let n,t,i,s,a;return e.horizontal?(n=e.base>e.x,t="left",i="right"):(n=e.base<e.y,t="bottom",i="top"),n?(s="end",a="start"):(s="start",a="end"),{start:t,end:i,reverse:n,top:s,bottom:a}}function Nh(e,n,t,i){let s=n.borderSkipped,a={};if(!s){e.borderSkipped=a;return}if(s===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:r,reverse:c,top:l,bottom:d}=Bh(e);s==="middle"&&t&&(e.enableBorderRadius=!0,(t._top||0)===i?s=l:(t._bottom||0)===i?s=d:(a[oc(d,o,r,c)]=!0,s=l)),a[oc(s,o,r,c)]=!0,e.borderSkipped=a}function oc(e,n,t,i){return i?(e=Vh(e,n,t),e=rc(e,t,n)):e=rc(e,n,t),e}function Vh(e,n,t){return e===n?t:e===t?n:e}function rc(e,n,t){return e==="start"?n:e==="end"?t:e}function Hh(e,{inflateAmount:n},t){e.inflateAmount=n==="auto"?t===1?.33:0:n}var jh=(()=>{class e extends Me{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,i,s,a){return ac(t,i,s,a)}parseArrayData(t,i,s,a){return ac(t,i,s,a)}parseObjectData(t,i,s,a){let{iScale:o,vScale:r}=t,{xAxisKey:c="x",yAxisKey:l="y"}=this._parsing,d=o.axis==="x"?c:l,h=r.axis==="x"?c:l,m=[],p,f,u,g;for(p=s,f=s+a;p<f;++p)g=i[p],u={},u[o.axis]=o.parse(ce(g,d),p),m.push(tl(ce(g,h),u,r,p));return m}updateRangeFromParsed(t,i,s,a){super.updateRangeFromParsed(t,i,s,a);let o=s._custom;o&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let i=this._cachedMeta,{iScale:s,vScale:a}=i,o=this.getParsed(t),r=o._custom,c=da(r)?"["+r.start+", "+r.end+"]":""+a.getLabelForValue(o[a.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:c}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,s,a){let o=a==="reset",{index:r,_cachedMeta:{vScale:c}}=this,l=c.getBasePixel(),d=c.isHorizontal(),h=this._getRuler(),{sharedOptions:m,includeOptions:p}=this._getSharedOptions(i,a);for(let f=i;f<i+s;f++){let u=this.getParsed(f),g=o||z(u[c.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),_=this._calculateBarIndexPixels(f,h),b=(u._stacks||{})[c.axis],k={horizontal:d,base:g.base,enableBorderRadius:!b||da(u._custom)||r===b._top||r===b._bottom,x:d?g.head:_.center,y:d?_.center:g.head,height:d?_.size:Math.abs(g.size),width:d?Math.abs(g.size):_.size};p&&(k.options=m||this.resolveDataElementOptions(f,t[f].active?"active":a));let M=k.options||t[f].options;Nh(k,M,b,r),Hh(k,M,h.ratio),this.updateElement(t[f],f,k,a)}}_getStacks(t,i){let{iScale:s}=this._cachedMeta,a=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=s.options.stacked,r=[],c=this._cachedMeta.controller.getParsed(i),l=c&&c[s.axis],d=h=>{let m=h._parsed.find(f=>f[s.axis]===l),p=m&&m[h.vScale.axis];if(z(p)||isNaN(p))return!0};for(let h of a)if(!(i!==void 0&&d(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===i).shift()}_getAxis(){let t={},i=this.getFirstScaleIdForIndexAxis();for(let s of this.chart.data.datasets)t[P(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,s){let a=this._getStacks(t,s),o=i!==void 0?a.indexOf(i):-1;return o===-1?a.length-1:o}_getRuler(){let t=this.options,i=this._cachedMeta,s=i.iScale,a=[],o,r;for(o=0,r=i.data.length;o<r;++o)a.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));let c=t.barThickness;return{min:c||Th(i),pixels:a,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:c?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:i,_stacked:s,index:a},options:{base:o,minBarLength:r}}=this,c=o||0,l=this.getParsed(t),d=l._custom,h=da(d),m=l[i.axis],p=0,f=s?this.applyStack(i,l,s):m,u,g;f!==m&&(p=f-m,f=m),h&&(m=d.barStart,f=d.barEnd-d.barStart,m!==0&&Wt(m)!==Wt(d.barEnd)&&(p=0),p+=m);let _=!z(o)&&!h?o:p,b=i.getPixelForValue(_);if(this.chart.getDataVisibility(t)?u=i.getPixelForValue(p+f):u=b,g=u-b,Math.abs(g)<r){g=zh(g,i,c)*r,m===c&&(b-=g/2);let k=i.getPixelForDecimal(0),M=i.getPixelForDecimal(1),x=Math.min(k,M),C=Math.max(k,M);b=Math.max(Math.min(b,C),x),u=b+g,s&&!h&&(l._stacks[i.axis]._visualValues[a]=i.getValueForPixel(u)-i.getValueForPixel(b))}if(b===i.getPixelForValue(c)){let k=Wt(g)*i.getLineWidthForValue(c)/2;b+=k,g-=k}return{size:g,base:b,head:u,center:u+g/2}}_calculateBarIndexPixels(t,i){let s=i.scale,a=this.options,o=a.skipNull,r=P(a.maxBarThickness,1/0),c,l,d=this._getAxisCount();if(i.grouped){let h=o?this._getStackCount(t):i.stackCount,m=a.barThickness==="flex"?Lh(t,i,a,h*d):Ah(t,i,a,h*d),p=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(P(p,this.getFirstScaleIdForIndexAxis())),u=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;c=m.start+m.chunk*u+m.chunk/2,l=Math.min(r,m.chunk*m.ratio)}else c=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,i.min*i.ratio);return{base:c-l/2,head:c+l/2,center:c,size:l}}draw(){let t=this._cachedMeta,i=t.vScale,s=t.data,a=s.length,o=0;for(;o<a;++o)this.getParsed(o)[i.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}return e})(),Wh=(()=>{class e extends Me{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,i,s,a){let o=super.parsePrimitiveData(t,i,s,a);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,i,s,a){let o=super.parseArrayData(t,i,s,a);for(let r=0;r<o.length;r++){let c=i[s+r];o[r]._custom=P(c[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,i,s,a){let o=super.parseObjectData(t,i,s,a);for(let r=0;r<o.length;r++){let c=i[s+r];o[r]._custom=P(c&&c.r&&+c.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){let t=this._cachedMeta.data,i=0;for(let s=t.length-1;s>=0;--s)i=Math.max(i,t[s].size(this.resolveDataElementOptions(s))/2);return i>0&&i}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:a,yScale:o}=i,r=this.getParsed(t),c=a.getLabelForValue(r.x),l=o.getLabelForValue(r.y),d=r._custom;return{label:s[t]||"",value:"("+c+", "+l+(d?", "+d:"")+")"}}update(t){let i=this._cachedMeta.data;this.updateElements(i,0,i.length,t)}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:c}=this._cachedMeta,{sharedOptions:l,includeOptions:d}=this._getSharedOptions(i,a),h=r.axis,m=c.axis;for(let p=i;p<i+s;p++){let f=t[p],u=!o&&this.getParsed(p),g={},_=g[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(u[h]),b=g[m]=o?c.getBasePixel():c.getPixelForValue(u[m]);g.skip=isNaN(_)||isNaN(b),d&&(g.options=l||this.resolveDataElementOptions(p,f.active?"active":a),o&&(g.options.radius=0)),this.updateElement(f,p,g,a)}}resolveDataElementOptions(t,i){let s=this.getParsed(t),a=super.resolveDataElementOptions(t,i);a.$shared&&(a=Object.assign({},a,{$shared:!1}));let o=a.radius;return i!=="active"&&(a.radius=0),a.radius+=P(s&&s._custom,o),a}}return e})();function $h(e,n,t){let i=1,s=1,a=0,o=0;if(n<K){let r=e,c=r+n,l=Math.cos(r),d=Math.sin(r),h=Math.cos(c),m=Math.sin(c),p=(k,M,x)=>hi(k,r,c,!0)?1:Math.max(M,M*t,x,x*t),f=(k,M,x)=>hi(k,r,c,!0)?-1:Math.min(M,M*t,x,x*t),u=p(0,l,h),g=p(rt,d,m),_=f(j,l,h),b=f(j+rt,d,m);i=(u-_)/2,s=(g-b)/2,a=-(u+_)/2,o=-(g+b)/2}return{ratioX:i,ratioY:s,offsetX:a,offsetY:o}}var Na=(()=>{class e extends Me{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let i=t.data,{labels:{pointStyle:s,textAlign:a,color:o,useBorderRadius:r,borderRadius:c}}=t.legend.options;return i.labels.length&&i.datasets.length?i.labels.map((l,d)=>{let m=t.getDatasetMeta(0).controller.getStyle(d);return{text:l,fillStyle:m.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(d),lineDash:m.borderDash,lineDashOffset:m.borderDashOffset,lineJoin:m.borderJoinStyle,lineWidth:m.borderWidth,strokeStyle:m.borderColor,textAlign:a,pointStyle:s,borderRadius:r&&(c||m.borderRadius),index:d}}):[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}}};constructor(t,i){super(t,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,i){let s=this.getDataset().data,a=this._cachedMeta;if(this._parsing===!1)a._parsed=s;else{let o=l=>+s[l];if(B(s[t])){let{key:l="value"}=this._parsing;o=d=>+ce(s[d],l)}let r,c;for(r=t,c=t+i;r<c;++r)a._parsed[r]=o(r)}}_getRotation(){return Ht(this.options.rotation-90)}_getCircumference(){return Ht(this.options.circumference)}_getRotationExtents(){let t=K,i=-K;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){let a=this.chart.getDatasetMeta(s).controller,o=a._getRotation(),r=a._getCircumference();t=Math.min(t,o),i=Math.max(i,o+r)}return{rotation:t,circumference:i-t}}update(t){let i=this.chart,{chartArea:s}=i,a=this._cachedMeta,o=a.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,c=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(Mr(this.options.cutout,c),1),d=this._getRingWeight(this.index),{circumference:h,rotation:m}=this._getRotationExtents(),{ratioX:p,ratioY:f,offsetX:u,offsetY:g}=$h(m,h,l),_=(s.width-r)/p,b=(s.height-r)/f,k=Math.max(Math.min(_,b)/2,0),M=Ts(this.options.radius,k),x=Math.max(M*l,0),C=(M-x)/this._getVisibleDatasetWeightTotal();this.offsetX=u*M,this.offsetY=g*M,a.total=this.calculateTotal(),this.outerRadius=M-C*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-C*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,i){let s=this.options,a=this._cachedMeta,o=this._getCircumference();return i&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||a._parsed[t]===null||a.data[t].hidden?0:this.calculateCircumference(a._parsed[t]*o/K)}updateElements(t,i,s,a){let o=a==="reset",r=this.chart,c=r.chartArea,d=r.options.animation,h=(c.left+c.right)/2,m=(c.top+c.bottom)/2,p=o&&d.animateScale,f=p?0:this.innerRadius,u=p?0:this.outerRadius,{sharedOptions:g,includeOptions:_}=this._getSharedOptions(i,a),b=this._getRotation(),k;for(k=0;k<i;++k)b+=this._circumference(k,o);for(k=i;k<i+s;++k){let M=this._circumference(k,o),x=t[k],C={x:h+this.offsetX,y:m+this.offsetY,startAngle:b,endAngle:b+M,circumference:M,outerRadius:u,innerRadius:f};_&&(C.options=g||this.resolveDataElementOptions(k,x.active?"active":a)),b+=M,this.updateElement(x,k,C,a)}}calculateTotal(){let t=this._cachedMeta,i=t.data,s=0,a;for(a=0;a<i.length;a++){let o=t._parsed[a];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(a)&&!i[a].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){let i=this._cachedMeta.total;return i>0&&!isNaN(t)?K*(Math.abs(t)/i):0}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart,a=s.data.labels||[],o=mi(i._parsed[t],s.options.locale);return{label:a[t]||"",value:o}}getMaxBorderWidth(t){let i=0,s=this.chart,a,o,r,c,l;if(!t){for(a=0,o=s.data.datasets.length;a<o;++a)if(s.isDatasetVisible(a)){r=s.getDatasetMeta(a),t=r.data,c=r.controller;break}}if(!t)return 0;for(a=0,o=t.length;a<o;++a)l=c.resolveDataElementOptions(a),l.borderAlign!=="inner"&&(i=Math.max(i,l.borderWidth||0,l.hoverBorderWidth||0));return i}getMaxOffset(t){let i=0;for(let s=0,a=t.length;s<a;++s){let o=this.resolveDataElementOptions(s);i=Math.max(i,o.offset||0,o.hoverOffset||0)}return i}_getRingWeightOffset(t){let i=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(i+=this._getRingWeight(s));return i}_getRingWeight(t){return Math.max(P(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}return e})(),Gh=(()=>{class e extends Me{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let i=this._cachedMeta,{dataset:s,data:a=[],_dataset:o}=i,r=this.chart._animationsDisabled,{start:c,count:l}=Ws(i,a,r);this._drawStart=c,this._drawCount=l,$s(i)&&(c=0,l=a.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=a;let d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:d},t),this.updateElements(a,c,l,t)}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:c,_stacked:l,_dataset:d}=this._cachedMeta,{sharedOptions:h,includeOptions:m}=this._getSharedOptions(i,a),p=r.axis,f=c.axis,{spanGaps:u,segment:g}=this.options,_=ze(u)?u:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||a==="none",k=i+s,M=t.length,x=i>0&&this.getParsed(i-1);for(let C=0;C<M;++C){let R=t[C],D=b?R:{};if(C<i||C>=k){D.skip=!0;continue}let O=this.getParsed(C),A=z(O[f]),T=D[p]=r.getPixelForValue(O[p],C),N=D[f]=o||A?c.getBasePixel():c.getPixelForValue(l?this.applyStack(c,O,l):O[f],C);D.skip=isNaN(T)||isNaN(N)||A,D.stop=C>0&&Math.abs(O[p]-x[p])>_,g&&(D.parsed=O,D.raw=d.data[C]),m&&(D.options=h||this.resolveDataElementOptions(C,R.active?"active":a)),b||this.updateElement(R,C,D,a),x=O}}getMaxOverflow(){let t=this._cachedMeta,i=t.dataset,s=i.options&&i.options.borderWidth||0,a=t.data||[];if(!a.length)return s;let o=a[0].size(this.resolveDataElementOptions(0)),r=a[a.length-1].size(this.resolveDataElementOptions(a.length-1));return Math.max(s,o,r)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}return e})(),el=(()=>{class e extends Me{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let i=t.data;if(i.labels.length&&i.datasets.length){let{labels:{pointStyle:s,color:a}}=t.legend.options;return i.labels.map((o,r)=>{let l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:a,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,i,s){s.chart.toggleDataVisibility(i.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,i){super(t,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let i=this._cachedMeta,s=this.chart,a=s.data.labels||[],o=mi(i._parsed[t].r,s.options.locale);return{label:a[t]||"",value:o}}parseObjectData(t,i,s,a){return Js.bind(this)(t,i,s,a)}update(t){let i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,t)}getMinMax(){let t=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,a)=>{let o=this.getParsed(a).r;!isNaN(o)&&this.chart.getDataVisibility(a)&&(o<i.min&&(i.min=o),o>i.max&&(i.max=o))}),i}_updateRadius(){let t=this.chart,i=t.chartArea,s=t.options,a=Math.min(i.right-i.left,i.bottom-i.top),o=Math.max(a/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),c=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-c*this.index,this.innerRadius=this.outerRadius-c}updateElements(t,i,s,a){let o=a==="reset",r=this.chart,l=r.options.animation,d=this._cachedMeta.rScale,h=d.xCenter,m=d.yCenter,p=d.getIndexAngle(0)-.5*j,f=p,u,g=360/this.countVisibleElements();for(u=0;u<i;++u)f+=this._computeAngle(u,a,g);for(u=i;u<i+s;u++){let _=t[u],b=f,k=f+this._computeAngle(u,a,g),M=r.getDataVisibility(u)?d.getDistanceFromCenterForValue(this.getParsed(u).r):0;f=k,o&&(l.animateScale&&(M=0),l.animateRotate&&(b=k=p));let x={x:h,y:m,innerRadius:0,outerRadius:M,startAngle:b,endAngle:k,options:this.resolveDataElementOptions(u,_.active?"active":a)};this.updateElement(_,u,x,a)}}countVisibleElements(){let t=this._cachedMeta,i=0;return t.data.forEach((s,a)=>{!isNaN(this.getParsed(a).r)&&this.chart.getDataVisibility(a)&&i++}),i}_computeAngle(t,i,s){return this.chart.getDataVisibility(t)?Ht(this.resolveDataElementOptions(t,i).angle||s):0}}return e})(),Uh=(()=>{class e extends Na{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}}return e})(),Qh=(()=>{class e extends Me{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let i=this._cachedMeta.vScale,s=this.getParsed(t);return{label:i.getLabels()[t],value:""+i.getLabelForValue(s[i.axis])}}parseObjectData(t,i,s,a){return Js.bind(this)(t,i,s,a)}update(t){let i=this._cachedMeta,s=i.dataset,a=i.data||[],o=i.iScale.getLabels();if(s.points=a,t!=="resize"){let r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);let c={_loop:!0,_fullLoop:o.length===a.length,options:r};this.updateElement(s,void 0,c,t)}this.updateElements(a,0,a.length,t)}updateElements(t,i,s,a){let o=this._cachedMeta.rScale,r=a==="reset";for(let c=i;c<i+s;c++){let l=t[c],d=this.resolveDataElementOptions(c,l.active?"active":a),h=o.getPointPositionForValue(c,this.getParsed(c).r),m=r?o.xCenter:h.x,p=r?o.yCenter:h.y,f={x:m,y:p,angle:h.angle,skip:isNaN(m)||isNaN(p),options:d};this.updateElement(l,c,f,a)}}}return e})(),qh=(()=>{class e extends Me{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:a,yScale:o}=i,r=this.getParsed(t),c=a.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+c+", "+l+")"}}update(t){let i=this._cachedMeta,{data:s=[]}=i,a=this.chart._animationsDisabled,{start:o,count:r}=Ws(i,s,a);if(this._drawStart=o,this._drawCount=r,$s(i)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:c,_dataset:l}=i;c._chart=this.chart,c._datasetIndex=this.index,c._decimated=!!l._decimated,c.points=s;let d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(c,void 0,{animated:!a,options:d},t)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,i,s,a){let o=a==="reset",{iScale:r,vScale:c,_stacked:l,_dataset:d}=this._cachedMeta,h=this.resolveDataElementOptions(i,a),m=this.getSharedOptions(h),p=this.includeOptions(a,m),f=r.axis,u=c.axis,{spanGaps:g,segment:_}=this.options,b=ze(g)?g:Number.POSITIVE_INFINITY,k=this.chart._animationsDisabled||o||a==="none",M=i>0&&this.getParsed(i-1);for(let x=i;x<i+s;++x){let C=t[x],R=this.getParsed(x),D=k?C:{},O=z(R[u]),A=D[f]=r.getPixelForValue(R[f],x),T=D[u]=o||O?c.getBasePixel():c.getPixelForValue(l?this.applyStack(c,R,l):R[u],x);D.skip=isNaN(A)||isNaN(T)||O,D.stop=x>0&&Math.abs(R[f]-M[f])>b,_&&(D.parsed=R,D.raw=d.data[x]),p&&(D.options=m||this.resolveDataElementOptions(x,C.active?"active":a)),k||this.updateElement(C,x,D,a),M=R}this.updateSharedOptions(m,a,h)}getMaxOverflow(){let t=this._cachedMeta,i=t.data||[];if(!this.options.showLine){let c=0;for(let l=i.length-1;l>=0;--l)c=Math.max(c,i[l].size(this.resolveDataElementOptions(l))/2);return c>0&&c}let s=t.dataset,a=s.options&&s.options.borderWidth||0;if(!i.length)return a;let o=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(a,o,r)/2}}return e})(),Yh=Object.freeze({__proto__:null,BarController:jh,BubbleController:Wh,DoughnutController:Na,LineController:Gh,PieController:Uh,PolarAreaController:el,RadarController:Qh,ScatterController:qh});function Ne(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var xa=class e{static override(n){Object.assign(e.prototype,n)}options;constructor(n){this.options=n||{}}init(){}formats(){return Ne()}parse(){return Ne()}format(){return Ne()}add(){return Ne()}diff(){return Ne()}startOf(){return Ne()}endOf(){return Ne()}},Kh={_date:xa};function Xh(e,n,t,i){let{controller:s,data:a,_sorted:o}=e,r=s._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(r&&n===r.axis&&n!=="r"&&o&&a.length){let l=r._reversePixels?Or:Kt;if(i){if(s._sharedOptions){let d=a[0],h=typeof d.getRange=="function"&&d.getRange(n);if(h){let m=l(a,n,t-h),p=l(a,n,t+h);return{lo:m.lo,hi:p.hi}}}}else{let d=l(a,n,t);if(c){let{vScale:h}=s._cachedMeta,{_parsed:m}=e,p=m.slice(0,d.lo+1).reverse().findIndex(u=>!z(u[h.axis]));d.lo-=Math.max(0,p);let f=m.slice(d.hi).findIndex(u=>!z(u[h.axis]));d.hi+=Math.max(0,f)}return d}}return{lo:0,hi:a.length-1}}function Wi(e,n,t,i,s){let a=e.getSortedVisibleDatasetMetas(),o=t[n];for(let r=0,c=a.length;r<c;++r){let{index:l,data:d}=a[r],{lo:h,hi:m}=Xh(a[r],n,o,s);for(let p=h;p<=m;++p){let f=d[p];f.skip||i(f,l,p)}}}function Zh(e){let n=e.indexOf("x")!==-1,t=e.indexOf("y")!==-1;return function(i,s){let a=n?Math.abs(i.x-s.x):0,o=t?Math.abs(i.y-s.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function ha(e,n,t,i,s){let a=[];return!s&&!e.isPointInArea(n)||Wi(e,t,n,function(r,c,l){!s&&!Xt(r,e.chartArea,0)||r.inRange(n.x,n.y,i)&&a.push({element:r,datasetIndex:c,index:l})},!0),a}function Jh(e,n,t,i){let s=[];function a(o,r,c){let{startAngle:l,endAngle:d}=o.getProps(["startAngle","endAngle"],i),{angle:h}=Bs(o,{x:n.x,y:n.y});hi(h,l,d)&&s.push({element:o,datasetIndex:r,index:c})}return Wi(e,t,n,a),s}function tm(e,n,t,i,s,a){let o=[],r=Zh(t),c=Number.POSITIVE_INFINITY;function l(d,h,m){let p=d.inRange(n.x,n.y,s);if(i&&!p)return;let f=d.getCenterPoint(s);if(!(!!a||e.isPointInArea(f))&&!p)return;let g=r(n,f);g<c?(o=[{element:d,datasetIndex:h,index:m}],c=g):g===c&&o.push({element:d,datasetIndex:h,index:m})}return Wi(e,t,n,l),o}function ma(e,n,t,i,s,a){return!a&&!e.isPointInArea(n)?[]:t==="r"&&!i?Jh(e,n,t,s):tm(e,n,t,i,s,a)}function cc(e,n,t,i,s){let a=[],o=t==="x"?"inXRange":"inYRange",r=!1;return Wi(e,t,n,(c,l,d)=>{c[o]&&c[o](n[t],s)&&(a.push({element:c,datasetIndex:l,index:d}),r=r||c.inRange(n.x,n.y,s))}),i&&!r?[]:a}var em={evaluateInteractionItems:Wi,modes:{index(e,n,t,i){let s=we(n,e),a=t.axis||"x",o=t.includeInvisible||!1,r=t.intersect?ha(e,s,a,i,o):ma(e,s,a,!1,i,o),c=[];return r.length?(e.getSortedVisibleDatasetMetas().forEach(l=>{let d=r[0].index,h=l.data[d];h&&!h.skip&&c.push({element:h,datasetIndex:l.index,index:d})}),c):[]},dataset(e,n,t,i){let s=we(n,e),a=t.axis||"xy",o=t.includeInvisible||!1,r=t.intersect?ha(e,s,a,i,o):ma(e,s,a,!1,i,o);if(r.length>0){let c=r[0].datasetIndex,l=e.getDatasetMeta(c).data;r=[];for(let d=0;d<l.length;++d)r.push({element:l[d],datasetIndex:c,index:d})}return r},point(e,n,t,i){let s=we(n,e),a=t.axis||"xy",o=t.includeInvisible||!1;return ha(e,s,a,i,o)},nearest(e,n,t,i){let s=we(n,e),a=t.axis||"xy",o=t.includeInvisible||!1;return ma(e,s,a,t.intersect,i,o)},x(e,n,t,i){let s=we(n,e);return cc(e,s,"x",t.intersect,i)},y(e,n,t,i){let s=we(n,e);return cc(e,s,"y",t.intersect,i)}}},il=["left","top","right","bottom"];function Ai(e,n){return e.filter(t=>t.pos===n)}function lc(e,n){return e.filter(t=>il.indexOf(t.pos)===-1&&t.box.axis===n)}function Li(e,n){return e.sort((t,i)=>{let s=n?i:t,a=n?t:i;return s.weight===a.weight?s.index-a.index:s.weight-a.weight})}function im(e){let n=[],t,i,s,a,o,r;for(t=0,i=(e||[]).length;t<i;++t)s=e[t],{position:a,options:{stack:o,stackWeight:r=1}}=s,n.push({index:t,box:s,pos:a,horizontal:s.isHorizontal(),weight:s.weight,stack:o&&a+o,stackWeight:r});return n}function nm(e){let n={};for(let t of e){let{stack:i,pos:s,stackWeight:a}=t;if(!i||!il.includes(s))continue;let o=n[i]||(n[i]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=a}return n}function sm(e,n){let t=nm(e),{vBoxMaxWidth:i,hBoxMaxHeight:s}=n,a,o,r;for(a=0,o=e.length;a<o;++a){r=e[a];let{fullSize:c}=r.box,l=t[r.stack],d=l&&r.stackWeight/l.weight;r.horizontal?(r.width=d?d*i:c&&n.availableWidth,r.height=s):(r.width=i,r.height=d?d*s:c&&n.availableHeight)}return t}function am(e){let n=im(e),t=Li(n.filter(l=>l.box.fullSize),!0),i=Li(Ai(n,"left"),!0),s=Li(Ai(n,"right")),a=Li(Ai(n,"top"),!0),o=Li(Ai(n,"bottom")),r=lc(n,"x"),c=lc(n,"y");return{fullSize:t,leftAndTop:i.concat(a),rightAndBottom:s.concat(c).concat(o).concat(r),chartArea:Ai(n,"chartArea"),vertical:i.concat(s).concat(c),horizontal:a.concat(o).concat(r)}}function dc(e,n,t,i){return Math.max(e[t],n[t])+Math.max(e[i],n[i])}function nl(e,n){e.top=Math.max(e.top,n.top),e.left=Math.max(e.left,n.left),e.bottom=Math.max(e.bottom,n.bottom),e.right=Math.max(e.right,n.right)}function om(e,n,t,i){let{pos:s,box:a}=t,o=e.maxPadding;if(!B(s)){t.size&&(e[s]-=t.size);let h=i[t.stack]||{size:0,count:1};h.size=Math.max(h.size,t.horizontal?a.height:a.width),t.size=h.size/h.count,e[s]+=t.size}a.getPadding&&nl(o,a.getPadding());let r=Math.max(0,n.outerWidth-dc(o,e,"left","right")),c=Math.max(0,n.outerHeight-dc(o,e,"top","bottom")),l=r!==e.w,d=c!==e.h;return e.w=r,e.h=c,t.horizontal?{same:l,other:d}:{same:d,other:l}}function rm(e){let n=e.maxPadding;function t(i){let s=Math.max(n[i]-e[i],0);return e[i]+=s,s}e.y+=t("top"),e.x+=t("left"),t("right"),t("bottom")}function cm(e,n){let t=n.maxPadding;function i(s){let a={left:0,top:0,right:0,bottom:0};return s.forEach(o=>{a[o]=Math.max(n[o],t[o])}),a}return i(e?["left","right"]:["top","bottom"])}function Bi(e,n,t,i){let s=[],a,o,r,c,l,d;for(a=0,o=e.length,l=0;a<o;++a){r=e[a],c=r.box,c.update(r.width||n.w,r.height||n.h,cm(r.horizontal,n));let{same:h,other:m}=om(n,t,r,i);l|=h&&s.length,d=d||m,c.fullSize||s.push(r)}return l&&Bi(s,n,t,i)||d}function Yn(e,n,t,i,s){e.top=t,e.left=n,e.right=n+i,e.bottom=t+s,e.width=i,e.height=s}function hc(e,n,t,i){let s=t.padding,{x:a,y:o}=n;for(let r of e){let c=r.box,l=i[r.stack]||{count:1,placed:0,weight:1},d=r.stackWeight/l.weight||1;if(r.horizontal){let h=n.w*d,m=l.size||c.height;li(l.start)&&(o=l.start),c.fullSize?Yn(c,s.left,o,t.outerWidth-s.right-s.left,m):Yn(c,n.left+l.placed,o,h,m),l.start=o,l.placed+=h,o=c.bottom}else{let h=n.h*d,m=l.size||c.width;li(l.start)&&(a=l.start),c.fullSize?Yn(c,a,s.top,m,t.outerHeight-s.bottom-s.top):Yn(c,a,n.top+l.placed,m,h),l.start=a,l.placed+=h,a=c.right}}n.x=a,n.y=o}var Mt={addBox(e,n){e.boxes||(e.boxes=[]),n.fullSize=n.fullSize||!1,n.position=n.position||"top",n.weight=n.weight||0,n._layers=n._layers||function(){return[{z:0,draw(t){n.draw(t)}}]},e.boxes.push(n)},removeBox(e,n){let t=e.boxes?e.boxes.indexOf(n):-1;t!==-1&&e.boxes.splice(t,1)},configure(e,n,t){n.fullSize=t.fullSize,n.position=t.position,n.weight=t.weight},update(e,n,t,i){if(!e)return;let s=vt(e.options.layout.padding),a=Math.max(n-s.width,0),o=Math.max(t-s.height,0),r=am(e.boxes),c=r.vertical,l=r.horizontal;G(e.boxes,u=>{typeof u.beforeLayout=="function"&&u.beforeLayout()});let d=c.reduce((u,g)=>g.box.options&&g.box.options.display===!1?u:u+1,0)||1,h=Object.freeze({outerWidth:n,outerHeight:t,padding:s,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/d,hBoxMaxHeight:o/2}),m=Object.assign({},s);nl(m,vt(i));let p=Object.assign({maxPadding:m,w:a,h:o,x:s.left,y:s.top},s),f=sm(c.concat(l),h);Bi(r.fullSize,p,h,f),Bi(c,p,h,f),Bi(l,p,h,f)&&Bi(c,p,h,f),rm(p),hc(r.leftAndTop,p,h,f),p.x+=p.w,p.y+=p.h,hc(r.rightAndBottom,p,h,f),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},G(r.chartArea,u=>{let g=u.box;Object.assign(g,e.chartArea),g.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},ss=class{acquireContext(n,t){}releaseContext(n){return!1}addEventListener(n,t,i){}removeEventListener(n,t,i){}getDevicePixelRatio(){return 1}getMaximumSize(n,t,i,s){return t=Math.max(0,t||n.width),i=i||n.height,{width:t,height:Math.max(0,s?Math.floor(t/s):i)}}isAttached(n){return!0}updateConfig(n){}},ya=class extends ss{acquireContext(n){return n&&n.getContext&&n.getContext("2d")||null}updateConfig(n){n.options.animation=!1}},es="$chartjs",lm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},mc=e=>e===null||e==="";function dm(e,n){let t=e.style,i=e.getAttribute("height"),s=e.getAttribute("width");if(e[es]={initial:{height:i,width:s,style:{display:t.display,height:t.height,width:t.width}}},t.display=t.display||"block",t.boxSizing=t.boxSizing||"border-box",mc(s)){let a=ea(e,"width");a!==void 0&&(e.width=a)}if(mc(i))if(e.style.height==="")e.height=e.width/(n||2);else{let a=ea(e,"height");a!==void 0&&(e.height=a)}return e}var sl=qr?{passive:!0}:!1;function hm(e,n,t){e&&e.addEventListener(n,t,sl)}function mm(e,n,t){e&&e.canvas&&e.canvas.removeEventListener(n,t,sl)}function pm(e,n){let t=lm[e.type]||e.type,{x:i,y:s}=we(e,n);return{type:t,chart:n,native:e,x:i!==void 0?i:null,y:s!==void 0?s:null}}function as(e,n){for(let t of e)if(t===n||t.contains(n))return!0}function um(e,n,t){let i=e.canvas,s=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||as(r.addedNodes,i),o=o&&!as(r.removedNodes,i);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}function fm(e,n,t){let i=e.canvas,s=new MutationObserver(a=>{let o=!1;for(let r of a)o=o||as(r.removedNodes,i),o=o&&!as(r.addedNodes,i);o&&t()});return s.observe(document,{childList:!0,subtree:!0}),s}var Vi=new Map,pc=0;function al(){let e=window.devicePixelRatio;e!==pc&&(pc=e,Vi.forEach((n,t)=>{t.currentDevicePixelRatio!==e&&n()}))}function gm(e,n){Vi.size||window.addEventListener("resize",al),Vi.set(e,n)}function _m(e){Vi.delete(e),Vi.size||window.removeEventListener("resize",al)}function bm(e,n,t){let i=e.canvas,s=i&&Qn(i);if(!s)return;let a=js((r,c)=>{let l=s.clientWidth;t(r,c),l<s.clientWidth&&t()},window),o=new ResizeObserver(r=>{let c=r[0],l=c.contentRect.width,d=c.contentRect.height;l===0&&d===0||a(l,d)});return o.observe(s),gm(e,a),o}function pa(e,n,t){t&&t.disconnect(),n==="resize"&&_m(e)}function vm(e,n,t){let i=e.canvas,s=js(a=>{e.ctx!==null&&t(pm(a,e))},e);return hm(i,n,s),s}var ka=class extends ss{acquireContext(n,t){let i=n&&n.getContext&&n.getContext("2d");return i&&i.canvas===n?(dm(n,t),i):null}releaseContext(n){let t=n.canvas;if(!t[es])return!1;let i=t[es].initial;["height","width"].forEach(a=>{let o=i[a];z(o)?t.removeAttribute(a):t.setAttribute(a,o)});let s=i.style||{};return Object.keys(s).forEach(a=>{t.style[a]=s[a]}),t.width=t.width,delete t[es],!0}addEventListener(n,t,i){this.removeEventListener(n,t);let s=n.$proxies||(n.$proxies={}),o={attach:um,detach:fm,resize:bm}[t]||vm;s[t]=o(n,t,i)}removeEventListener(n,t){let i=n.$proxies||(n.$proxies={}),s=i[t];if(!s)return;({attach:pa,detach:pa,resize:pa}[t]||mm)(n,t,s),i[t]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(n,t,i,s){return Qr(n,t,i,s)}isAttached(n){let t=n&&Qn(n);return!!(t&&t.isConnected)}};function xm(e){return!Un()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?ya:ka}var $t=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(n){let{x:t,y:i}=this.getProps(["x","y"],n);return{x:t,y:i}}hasValue(){return ze(this.x)&&ze(this.y)}getProps(n,t){let i=this.$animations;if(!t||!i)return this;let s={};return n.forEach(a=>{s[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),s}};function ym(e,n){let t=e.options.ticks,i=km(e),s=Math.min(t.maxTicksLimit||i,i),a=t.major.enabled?Cm(n):[],o=a.length,r=a[0],c=a[o-1],l=[];if(o>s)return Mm(n,l,a,o/s),l;let d=wm(a,n,s);if(o>0){let h,m,p=o>1?Math.round((c-r)/(o-1)):null;for(Kn(n,l,d,z(p)?0:r-p,r),h=0,m=o-1;h<m;h++)Kn(n,l,d,a[h],a[h+1]);return Kn(n,l,d,c,z(p)?n.length:c+p),l}return Kn(n,l,d),l}function km(e){let n=e.options.offset,t=e._tickSize(),i=e._length/t+(n?0:1),s=e._maxLength/t;return Math.floor(Math.min(i,s))}function wm(e,n,t){let i=Sm(e),s=n.length/t;if(!i)return Math.max(s,1);let a=Ir(i);for(let o=0,r=a.length-1;o<r;o++){let c=a[o];if(c>s)return c}return Math.max(s,1)}function Cm(e){let n=[],t,i;for(t=0,i=e.length;t<i;t++)e[t].major&&n.push(t);return n}function Mm(e,n,t,i){let s=0,a=t[0],o;for(i=Math.ceil(i),o=0;o<e.length;o++)o===a&&(n.push(e[o]),s++,a=t[s*i])}function Kn(e,n,t,i,s){let a=P(i,0),o=Math.min(P(s,e.length),e.length),r=0,c,l,d;for(t=Math.ceil(t),s&&(c=s-i,t=c/Math.floor(c/t)),d=a;d<0;)r++,d=Math.round(a+r*t);for(l=Math.max(a,0);l<o;l++)l===d&&(n.push(e[l]),r++,d=Math.round(a+r*t))}function Sm(e){let n=e.length,t,i;if(n<2)return!1;for(i=e[0],t=1;t<n;++t)if(e[t]-e[t-1]!==i)return!1;return i}var Dm=e=>e==="left"?"right":e==="right"?"left":e,uc=(e,n,t)=>n==="top"||n==="left"?e[n]+t:e[n]-t,fc=(e,n)=>Math.min(n||e,e);function gc(e,n){let t=[],i=e.length/n,s=e.length,a=0;for(;a<s;a+=i)t.push(e[Math.floor(a)]);return t}function Im(e,n,t){let i=e.ticks.length,s=Math.min(n,i-1),a=e._startPixel,o=e._endPixel,r=1e-6,c=e.getPixelForTick(s),l;if(!(t&&(i===1?l=Math.max(c-a,o-c):n===0?l=(e.getPixelForTick(1)-c)/2:l=(c-e.getPixelForTick(s-1))/2,c+=s<n?l:-l,c<a-r||c>o+r)))return c}function Rm(e,n){G(e,t=>{let i=t.gc,s=i.length/2,a;if(s>n){for(a=0;a<s;++a)delete t.data[i[a]];i.splice(0,s)}})}function Fi(e){return e.drawTicks?e.tickLength:0}function _c(e,n){if(!e.display)return 0;let t=mt(e.font,n),i=vt(e.padding);return(Y(e.text)?e.text.length:1)*t.lineHeight+i.height}function Em(e,n){return le(e,{scale:n,type:"scale"})}function Om(e,n,t){return le(e,{tick:t,index:n,type:"tick"})}function Pm(e,n,t){let i=Hn(e);return(t&&n!=="right"||!t&&n==="right")&&(i=Dm(i)),i}function Tm(e,n,t,i){let{top:s,left:a,bottom:o,right:r,chart:c}=e,{chartArea:l,scales:d}=c,h=0,m,p,f,u=o-s,g=r-a;if(e.isHorizontal()){if(p=bt(i,a,r),B(t)){let _=Object.keys(t)[0],b=t[_];f=d[_].getPixelForValue(b)+u-n}else t==="center"?f=(l.bottom+l.top)/2+u-n:f=uc(e,t,n);m=r-a}else{if(B(t)){let _=Object.keys(t)[0],b=t[_];p=d[_].getPixelForValue(b)-g+n}else t==="center"?p=(l.left+l.right)/2-g+n:p=uc(e,t,n);f=bt(i,o,s),h=t==="left"?-rt:rt}return{titleX:p,titleY:f,maxWidth:m,rotation:h}}var He=class e extends $t{constructor(n){super(),this.id=n.id,this.type=n.type,this.options=void 0,this.ctx=n.ctx,this.chart=n.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(n){this.options=n.setContext(this.getContext()),this.axis=n.axis,this._userMin=this.parse(n.min),this._userMax=this.parse(n.max),this._suggestedMin=this.parse(n.suggestedMin),this._suggestedMax=this.parse(n.suggestedMax)}parse(n,t){return n}getUserBounds(){let{_userMin:n,_userMax:t,_suggestedMin:i,_suggestedMax:s}=this;return n=Et(n,Number.POSITIVE_INFINITY),t=Et(t,Number.NEGATIVE_INFINITY),i=Et(i,Number.POSITIVE_INFINITY),s=Et(s,Number.NEGATIVE_INFINITY),{min:Et(n,i),max:Et(t,s),minDefined:at(n),maxDefined:at(t)}}getMinMax(n){let{min:t,max:i,minDefined:s,maxDefined:a}=this.getUserBounds(),o;if(s&&a)return{min:t,max:i};let r=this.getMatchingVisibleMetas();for(let c=0,l=r.length;c<l;++c)o=r[c].controller.getMinMax(this,n),s||(t=Math.min(t,o.min)),a||(i=Math.max(i,o.max));return t=a&&t>i?i:t,i=s&&t>i?t:i,{min:Et(t,Et(i,t)),max:Et(i,Et(t,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let n=this.chart.data;return this.options.labels||(this.isHorizontal()?n.xLabels:n.yLabels)||n.labels||[]}getLabelItems(n=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(n))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){q(this.options.beforeUpdate,[this])}update(n,t,i){let{beginAtZero:s,grace:a,ticks:o}=this.options,r=o.sampleSize;this.beforeUpdate(),this.maxWidth=n,this.maxHeight=t,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Hr(this,a,s),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let c=r<this.ticks.length;this._convertTicksToLabels(c?gc(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=ym(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),c&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let n=this.options.reverse,t,i;this.isHorizontal()?(t=this.left,i=this.right):(t=this.top,i=this.bottom,n=!n),this._startPixel=t,this._endPixel=i,this._reversePixels=n,this._length=i-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){q(this.options.afterUpdate,[this])}beforeSetDimensions(){q(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){q(this.options.afterSetDimensions,[this])}_callHooks(n){this.chart.notifyPlugins(n,this.getContext()),q(this.options[n],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){q(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(n){let t=this.options.ticks,i,s,a;for(i=0,s=n.length;i<s;i++)a=n[i],a.label=q(t.callback,[a.value,i,n],this)}afterTickToLabelConversion(){q(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){q(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let n=this.options,t=n.ticks,i=fc(this.ticks.length,n.ticks.maxTicksLimit),s=t.minRotation||0,a=t.maxRotation,o=s,r,c,l;if(!this._isVisible()||!t.display||s>=a||i<=1||!this.isHorizontal()){this.labelRotation=s;return}let d=this._getLabelSizes(),h=d.widest.width,m=d.highest.height,p=ut(this.chart.width-h,0,this.maxWidth);r=n.offset?this.maxWidth/i:p/(i-1),h+6>r&&(r=p/(i-(n.offset?.5:1)),c=this.maxHeight-Fi(n.grid)-t.padding-_c(n.title,this.chart.options.font),l=Math.sqrt(h*h+m*m),o=Nn(Math.min(Math.asin(ut((d.highest.height+6)/r,-1,1)),Math.asin(ut(c/l,-1,1))-Math.asin(ut(m/l,-1,1)))),o=Math.max(s,Math.min(a,o))),this.labelRotation=o}afterCalculateLabelRotation(){q(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){q(this.options.beforeFit,[this])}fit(){let n={width:0,height:0},{chart:t,options:{ticks:i,title:s,grid:a}}=this,o=this._isVisible(),r=this.isHorizontal();if(o){let c=_c(s,t.options.font);if(r?(n.width=this.maxWidth,n.height=Fi(a)+c):(n.height=this.maxHeight,n.width=Fi(a)+c),i.display&&this.ticks.length){let{first:l,last:d,widest:h,highest:m}=this._getLabelSizes(),p=i.padding*2,f=Ht(this.labelRotation),u=Math.cos(f),g=Math.sin(f);if(r){let _=i.mirror?0:g*h.width+u*m.height;n.height=Math.min(this.maxHeight,n.height+_+p)}else{let _=i.mirror?0:u*h.width+g*m.height;n.width=Math.min(this.maxWidth,n.width+_+p)}this._calculatePadding(l,d,g,u)}}this._handleMargins(),r?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=n.height):(this.width=n.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(n,t,i,s){let{ticks:{align:a,padding:o},position:r}=this.options,c=this.labelRotation!==0,l=r!=="top"&&this.axis==="x";if(this.isHorizontal()){let d=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),m=0,p=0;c?l?(m=s*n.width,p=i*t.height):(m=i*n.height,p=s*t.width):a==="start"?p=t.width:a==="end"?m=n.width:a!=="inner"&&(m=n.width/2,p=t.width/2),this.paddingLeft=Math.max((m-d+o)*this.width/(this.width-d),0),this.paddingRight=Math.max((p-h+o)*this.width/(this.width-h),0)}else{let d=t.height/2,h=n.height/2;a==="start"?(d=0,h=n.height):a==="end"&&(d=t.height,h=0),this.paddingTop=d+o,this.paddingBottom=h+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){q(this.options.afterFit,[this])}isHorizontal(){let{axis:n,position:t}=this.options;return t==="top"||t==="bottom"||n==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(n){this.beforeTickToLabelConversion(),this.generateTickLabels(n);let t,i;for(t=0,i=n.length;t<i;t++)z(n[t].label)&&(n.splice(t,1),i--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let n=this._labelSizes;if(!n){let t=this.options.ticks.sampleSize,i=this.ticks;t<i.length&&(i=gc(i,t)),this._labelSizes=n=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return n}_computeLabelSizes(n,t,i){let{ctx:s,_longestTextCache:a}=this,o=[],r=[],c=Math.floor(t/fc(t,i)),l=0,d=0,h,m,p,f,u,g,_,b,k,M,x;for(h=0;h<t;h+=c){if(f=n[h].label,u=this._resolveTickFontOptions(h),s.font=g=u.string,_=a[g]=a[g]||{data:{},gc:[]},b=u.lineHeight,k=M=0,!z(f)&&!Y(f))k=Ii(s,_.data,_.gc,k,f),M=b;else if(Y(f))for(m=0,p=f.length;m<p;++m)x=f[m],!z(x)&&!Y(x)&&(k=Ii(s,_.data,_.gc,k,x),M+=b);o.push(k),r.push(M),l=Math.max(k,l),d=Math.max(M,d)}Rm(a,t);let C=o.indexOf(l),R=r.indexOf(d),D=O=>({width:o[O]||0,height:r[O]||0});return{first:D(0),last:D(t-1),widest:D(C),highest:D(R),widths:o,heights:r}}getLabelForValue(n){return n}getPixelForValue(n,t){return NaN}getValueForPixel(n){}getPixelForTick(n){let t=this.ticks;return n<0||n>t.length-1?null:this.getPixelForValue(t[n].value)}getPixelForDecimal(n){this._reversePixels&&(n=1-n);let t=this._startPixel+n*this._length;return Er(this._alignToPixels?xe(this.chart,t,0):t)}getDecimalForPixel(n){let t=(n-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:n,max:t}=this;return n<0&&t<0?t:n>0&&t>0?n:0}getContext(n){let t=this.ticks||[];if(n>=0&&n<t.length){let i=t[n];return i.$context||(i.$context=Om(this.getContext(),n,i))}return this.$context||(this.$context=Em(this.chart.getContext(),this))}_tickSize(){let n=this.options.ticks,t=Ht(this.labelRotation),i=Math.abs(Math.cos(t)),s=Math.abs(Math.sin(t)),a=this._getLabelSizes(),o=n.autoSkipPadding||0,r=a?a.widest.width+o:0,c=a?a.highest.height+o:0;return this.isHorizontal()?c*i>r*s?r/i:c/s:c*s<r*i?c/i:r/s}_isVisible(){let n=this.options.display;return n!=="auto"?!!n:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(n){let t=this.axis,i=this.chart,s=this.options,{grid:a,position:o,border:r}=s,c=a.offset,l=this.isHorizontal(),h=this.ticks.length+(c?1:0),m=Fi(a),p=[],f=r.setContext(this.getContext()),u=f.display?f.width:0,g=u/2,_=function(J){return xe(i,J,u)},b,k,M,x,C,R,D,O,A,T,N,gt;if(o==="top")b=_(this.bottom),R=this.bottom-m,O=b-g,T=_(n.top)+g,gt=n.bottom;else if(o==="bottom")b=_(this.top),T=n.top,gt=_(n.bottom)-g,R=b+g,O=this.top+m;else if(o==="left")b=_(this.right),C=this.right-m,D=b-g,A=_(n.left)+g,N=n.right;else if(o==="right")b=_(this.left),A=n.left,N=_(n.right)-g,C=b+g,D=this.left+m;else if(t==="x"){if(o==="center")b=_((n.top+n.bottom)/2+.5);else if(B(o)){let J=Object.keys(o)[0],ct=o[J];b=_(this.chart.scales[J].getPixelForValue(ct))}T=n.top,gt=n.bottom,R=b+g,O=R+m}else if(t==="y"){if(o==="center")b=_((n.left+n.right)/2);else if(B(o)){let J=Object.keys(o)[0],ct=o[J];b=_(this.chart.scales[J].getPixelForValue(ct))}C=b-g,D=C-m,A=n.left,N=n.right}let Tt=P(s.ticks.maxTicksLimit,h),U=Math.max(1,Math.ceil(h/Tt));for(k=0;k<h;k+=U){let J=this.getContext(k),ct=a.setContext(J),jt=r.setContext(J),xt=ct.lineWidth,We=ct.color,Qi=jt.dash||[],$e=jt.dashOffset,vi=ct.tickWidth,Se=ct.tickColor,xi=ct.tickBorderDash||[],De=ct.tickBorderDashOffset;M=Im(this,k,c),M!==void 0&&(x=xe(i,M,xt),l?C=D=A=N=x:R=O=T=gt=x,p.push({tx1:C,ty1:R,tx2:D,ty2:O,x1:A,y1:T,x2:N,y2:gt,width:xt,color:We,borderDash:Qi,borderDashOffset:$e,tickWidth:vi,tickColor:Se,tickBorderDash:xi,tickBorderDashOffset:De}))}return this._ticksLength=h,this._borderValue=b,p}_computeLabelItems(n){let t=this.axis,i=this.options,{position:s,ticks:a}=i,o=this.isHorizontal(),r=this.ticks,{align:c,crossAlign:l,padding:d,mirror:h}=a,m=Fi(i.grid),p=m+d,f=h?-d:p,u=-Ht(this.labelRotation),g=[],_,b,k,M,x,C,R,D,O,A,T,N,gt="middle";if(s==="top")C=this.bottom-f,R=this._getXAxisLabelAlignment();else if(s==="bottom")C=this.top+f,R=this._getXAxisLabelAlignment();else if(s==="left"){let U=this._getYAxisLabelAlignment(m);R=U.textAlign,x=U.x}else if(s==="right"){let U=this._getYAxisLabelAlignment(m);R=U.textAlign,x=U.x}else if(t==="x"){if(s==="center")C=(n.top+n.bottom)/2+p;else if(B(s)){let U=Object.keys(s)[0],J=s[U];C=this.chart.scales[U].getPixelForValue(J)+p}R=this._getXAxisLabelAlignment()}else if(t==="y"){if(s==="center")x=(n.left+n.right)/2-p;else if(B(s)){let U=Object.keys(s)[0],J=s[U];x=this.chart.scales[U].getPixelForValue(J)}R=this._getYAxisLabelAlignment(m).textAlign}t==="y"&&(c==="start"?gt="top":c==="end"&&(gt="bottom"));let Tt=this._getLabelSizes();for(_=0,b=r.length;_<b;++_){k=r[_],M=k.label;let U=a.setContext(this.getContext(_));D=this.getPixelForTick(_)+a.labelOffset,O=this._resolveTickFontOptions(_),A=O.lineHeight,T=Y(M)?M.length:1;let J=T/2,ct=U.color,jt=U.textStrokeColor,xt=U.textStrokeWidth,We=R;o?(x=D,R==="inner"&&(_===b-1?We=this.options.reverse?"left":"right":_===0?We=this.options.reverse?"right":"left":We="center"),s==="top"?l==="near"||u!==0?N=-T*A+A/2:l==="center"?N=-Tt.highest.height/2-J*A+A:N=-Tt.highest.height+A/2:l==="near"||u!==0?N=A/2:l==="center"?N=Tt.highest.height/2-J*A:N=Tt.highest.height-T*A,h&&(N*=-1),u!==0&&!U.showLabelBackdrop&&(x+=A/2*Math.sin(u))):(C=D,N=(1-T)*A/2);let Qi;if(U.showLabelBackdrop){let $e=vt(U.backdropPadding),vi=Tt.heights[_],Se=Tt.widths[_],xi=N-$e.top,De=0-$e.left;switch(gt){case"middle":xi-=vi/2;break;case"bottom":xi-=vi;break}switch(R){case"center":De-=Se/2;break;case"right":De-=Se;break;case"inner":_===b-1?De-=Se:_>0&&(De-=Se/2);break}Qi={left:De,top:xi,width:Se+$e.width,height:vi+$e.height,color:U.backdropColor}}g.push({label:M,font:O,textOffset:N,options:{rotation:u,color:ct,strokeColor:jt,strokeWidth:xt,textAlign:We,textBaseline:gt,translation:[x,C],backdrop:Qi}})}return g}_getXAxisLabelAlignment(){let{position:n,ticks:t}=this.options;if(-Ht(this.labelRotation))return n==="top"?"left":"right";let s="center";return t.align==="start"?s="left":t.align==="end"?s="right":t.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(n){let{position:t,ticks:{crossAlign:i,mirror:s,padding:a}}=this.options,o=this._getLabelSizes(),r=n+a,c=o.widest.width,l,d;return t==="left"?s?(d=this.right+a,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d+=c)):(d=this.right-r,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d=this.left)):t==="right"?s?(d=this.left+a,i==="near"?l="right":i==="center"?(l="center",d-=c/2):(l="left",d-=c)):(d=this.left+r,i==="near"?l="left":i==="center"?(l="center",d+=c/2):(l="right",d=this.right)):l="right",{textAlign:l,x:d}}_computeLabelArea(){if(this.options.ticks.mirror)return;let n=this.chart,t=this.options.position;if(t==="left"||t==="right")return{top:0,left:this.left,bottom:n.height,right:this.right};if(t==="top"||t==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:n.width}}drawBackground(){let{ctx:n,options:{backgroundColor:t},left:i,top:s,width:a,height:o}=this;t&&(n.save(),n.fillStyle=t,n.fillRect(i,s,a,o),n.restore())}getLineWidthForValue(n){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let s=this.ticks.findIndex(a=>a.value===n);return s>=0?t.setContext(this.getContext(s)).lineWidth:0}drawGrid(n){let t=this.options.grid,i=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(n)),a,o,r=(c,l,d)=>{!d.width||!d.color||(i.save(),i.lineWidth=d.width,i.strokeStyle=d.color,i.setLineDash(d.borderDash||[]),i.lineDashOffset=d.borderDashOffset,i.beginPath(),i.moveTo(c.x,c.y),i.lineTo(l.x,l.y),i.stroke(),i.restore())};if(t.display)for(a=0,o=s.length;a<o;++a){let c=s[a];t.drawOnChartArea&&r({x:c.x1,y:c.y1},{x:c.x2,y:c.y2},c),t.drawTicks&&r({x:c.tx1,y:c.ty1},{x:c.tx2,y:c.ty2},{color:c.tickColor,width:c.tickWidth,borderDash:c.tickBorderDash,borderDashOffset:c.tickBorderDashOffset})}}drawBorder(){let{chart:n,ctx:t,options:{border:i,grid:s}}=this,a=i.setContext(this.getContext()),o=i.display?a.width:0;if(!o)return;let r=s.setContext(this.getContext(0)).lineWidth,c=this._borderValue,l,d,h,m;this.isHorizontal()?(l=xe(n,this.left,o)-o/2,d=xe(n,this.right,r)+r/2,h=m=c):(h=xe(n,this.top,o)-o/2,m=xe(n,this.bottom,r)+r/2,l=d=c),t.save(),t.lineWidth=a.width,t.strokeStyle=a.color,t.beginPath(),t.moveTo(l,h),t.lineTo(d,m),t.stroke(),t.restore()}drawLabels(n){if(!this.options.ticks.display)return;let i=this.ctx,s=this._computeLabelArea();s&&Oi(i,s);let a=this.getLabelItems(n);for(let o of a){let r=o.options,c=o.font,l=o.label,d=o.textOffset;ye(i,l,0,d,c,r)}s&&Pi(i)}drawTitle(){let{ctx:n,options:{position:t,title:i,reverse:s}}=this;if(!i.display)return;let a=mt(i.font),o=vt(i.padding),r=i.align,c=a.lineHeight/2;t==="bottom"||t==="center"||B(t)?(c+=o.bottom,Y(i.text)&&(c+=a.lineHeight*(i.text.length-1))):c+=o.top;let{titleX:l,titleY:d,maxWidth:h,rotation:m}=Tm(this,c,t,r);ye(n,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:m,textAlign:Pm(r,t,s),textBaseline:"middle",translation:[l,d]})}draw(n){this._isVisible()&&(this.drawBackground(),this.drawGrid(n),this.drawBorder(),this.drawTitle(),this.drawLabels(n))}_layers(){let n=this.options,t=n.ticks&&n.ticks.z||0,i=P(n.grid&&n.grid.z,-1),s=P(n.border&&n.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:t,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:s,draw:()=>{this.drawBorder()}},{z:t,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(n){let t=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",s=[],a,o;for(a=0,o=t.length;a<o;++a){let r=t[a];r[i]===this.id&&(!n||r.type===n)&&s.push(r)}return s}_resolveTickFontOptions(n){let t=this.options.ticks.setContext(this.getContext(n));return mt(t.font)}_maxDigits(){let n=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/n}},gi=class{constructor(n,t,i){this.type=n,this.scope=t,this.override=i,this.items=Object.create(null)}isForType(n){return Object.prototype.isPrototypeOf.call(this.type.prototype,n.prototype)}register(n){let t=Object.getPrototypeOf(n),i;Fm(t)&&(i=this.register(t));let s=this.items,a=n.id,o=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+n);return a in s||(s[a]=n,Am(n,o,i),this.override&&Z.override(n.id,n.overrides)),o}get(n){return this.items[n]}unregister(n){let t=this.items,i=n.id,s=this.scope;i in t&&delete t[i],s&&i in Z[s]&&(delete Z[s][i],this.override&&delete ve[i])}};function Am(e,n,t){let i=oi(Object.create(null),[t?Z.get(t):{},Z.get(n),e.defaults]);Z.set(n,i),e.defaultRoutes&&Lm(n,e.defaultRoutes),e.descriptors&&Z.describe(n,e.descriptors)}function Lm(e,n){Object.keys(n).forEach(t=>{let i=t.split("."),s=i.pop(),a=[e].concat(i).join("."),o=n[t].split("."),r=o.pop(),c=o.join(".");Z.route(a,s,c,r)})}function Fm(e){return"id"in e&&"defaults"in e}var wa=class{constructor(){this.controllers=new gi(Me,"datasets",!0),this.elements=new gi($t,"elements"),this.plugins=new gi(Object,"plugins"),this.scales=new gi(He,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...n){this._each("register",n)}remove(...n){this._each("unregister",n)}addControllers(...n){this._each("register",n,this.controllers)}addElements(...n){this._each("register",n,this.elements)}addPlugins(...n){this._each("register",n,this.plugins)}addScales(...n){this._each("register",n,this.scales)}getController(n){return this._get(n,this.controllers,"controller")}getElement(n){return this._get(n,this.elements,"element")}getPlugin(n){return this._get(n,this.plugins,"plugin")}getScale(n){return this._get(n,this.scales,"scale")}removeControllers(...n){this._each("unregister",n,this.controllers)}removeElements(...n){this._each("unregister",n,this.elements)}removePlugins(...n){this._each("unregister",n,this.plugins)}removeScales(...n){this._each("unregister",n,this.scales)}_each(n,t,i){[...t].forEach(s=>{let a=i||this._getRegistryForType(s);i||a.isForType(s)||a===this.plugins&&s.id?this._exec(n,a,s):G(s,o=>{let r=i||this._getRegistryForType(o);this._exec(n,r,o)})})}_exec(n,t,i){let s=Bn(n);q(i["before"+s],[],i),t[n](i),q(i["after"+s],[],i)}_getRegistryForType(n){for(let t=0;t<this._typedRegistries.length;t++){let i=this._typedRegistries[t];if(i.isForType(n))return i}return this.plugins}_get(n,t,i){let s=t.get(n);if(s===void 0)throw new Error('"'+n+'" is not a registered '+i+".");return s}},ee=new wa,Ca=class{constructor(){this._init=void 0}notify(n,t,i,s){if(t==="beforeInit"&&(this._init=this._createDescriptors(n,!0),this._notify(this._init,n,"install")),this._init===void 0)return;let a=s?this._descriptors(n).filter(s):this._descriptors(n),o=this._notify(a,n,t,i);return t==="afterDestroy"&&(this._notify(a,n,"stop"),this._notify(this._init,n,"uninstall"),this._init=void 0),o}_notify(n,t,i,s){s=s||{};for(let a of n){let o=a.plugin,r=o[i],c=[t,s,a.options];if(q(r,c,o)===!1&&s.cancelable)return!1}return!0}invalidate(){z(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(n){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(n);return this._notifyStateChanges(n),t}_createDescriptors(n,t){let i=n&&n.config,s=P(i.options&&i.options.plugins,{}),a=zm(i);return s===!1&&!t?[]:Nm(n,a,s,t)}_notifyStateChanges(n){let t=this._oldCache||[],i=this._cache,s=(a,o)=>a.filter(r=>!o.some(c=>r.plugin.id===c.plugin.id));this._notify(s(t,i),n,"stop"),this._notify(s(i,t),n,"start")}};function zm(e){let n={},t=[],i=Object.keys(ee.plugins.items);for(let a=0;a<i.length;a++)t.push(ee.getPlugin(i[a]));let s=e.plugins||[];for(let a=0;a<s.length;a++){let o=s[a];t.indexOf(o)===-1&&(t.push(o),n[o.id]=!0)}return{plugins:t,localIds:n}}function Bm(e,n){return!n&&e===!1?null:e===!0?{}:e}function Nm(e,{plugins:n,localIds:t},i,s){let a=[],o=e.getContext();for(let r of n){let c=r.id,l=Bm(i[c],s);l!==null&&a.push({plugin:r,options:Vm(e.config,{plugin:r,local:t[c]},l,o)})}return a}function Vm(e,{plugin:n,local:t},i,s){let a=e.pluginScopeKeys(n),o=e.getOptionScopes(i,a);return t&&n.defaults&&o.push(n.defaults),e.createResolver(o,s,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ma(e,n){let t=Z.datasets[e]||{};return((n.datasets||{})[e]||{}).indexAxis||n.indexAxis||t.indexAxis||"x"}function Hm(e,n){let t=e;return e==="_index_"?t=n:e==="_value_"&&(t=n==="x"?"y":"x"),t}function jm(e,n){return e===n?"_index_":"_value_"}function bc(e){if(e==="x"||e==="y"||e==="r")return e}function Wm(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function Sa(e,...n){if(bc(e))return e;for(let t of n){let i=t.axis||Wm(t.position)||e.length>1&&bc(e[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function vc(e,n,t){if(t[n+"AxisID"]===e)return{axis:n}}function $m(e,n){if(n.data&&n.data.datasets){let t=n.data.datasets.filter(i=>i.xAxisID===e||i.yAxisID===e);if(t.length)return vc(e,"x",t[0])||vc(e,"y",t[0])}return{}}function Gm(e,n){let t=ve[e.type]||{scales:{}},i=n.scales||{},s=Ma(e.type,n),a=Object.create(null);return Object.keys(i).forEach(o=>{let r=i[o];if(!B(r))return console.error(`Invalid scale configuration for scale: ${o}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);let c=Sa(o,r,$m(o,e),Z.scales[r.type]),l=jm(c,s),d=t.scales||{};a[o]=ci(Object.create(null),[{axis:c},r,d[c],d[l]])}),e.data.datasets.forEach(o=>{let r=o.type||e.type,c=o.indexAxis||Ma(r,n),d=(ve[r]||{}).scales||{};Object.keys(d).forEach(h=>{let m=Hm(h,c),p=o[m+"AxisID"]||m;a[p]=a[p]||Object.create(null),ci(a[p],[{axis:m},i[p],d[h]])})}),Object.keys(a).forEach(o=>{let r=a[o];ci(r,[Z.scales[r.type],Z.scale])}),a}function ol(e){let n=e.options||(e.options={});n.plugins=P(n.plugins,{}),n.scales=Gm(e,n)}function rl(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Um(e){return e=e||{},e.data=rl(e.data),ol(e),e}var xc=new Map,cl=new Set;function Xn(e,n){let t=xc.get(e);return t||(t=n(),xc.set(e,t),cl.add(t)),t}var zi=(e,n,t)=>{let i=ce(n,t);i!==void 0&&e.add(i)},Da=class{constructor(n){this._config=Um(n),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(n){this._config.type=n}get data(){return this._config.data}set data(n){this._config.data=rl(n)}get options(){return this._config.options}set options(n){this._config.options=n}get plugins(){return this._config.plugins}update(){let n=this._config;this.clearCache(),ol(n)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(n){return Xn(n,()=>[[`datasets.${n}`,""]])}datasetAnimationScopeKeys(n,t){return Xn(`${n}.transition.${t}`,()=>[[`datasets.${n}.transitions.${t}`,`transitions.${t}`],[`datasets.${n}`,""]])}datasetElementScopeKeys(n,t){return Xn(`${n}-${t}`,()=>[[`datasets.${n}.elements.${t}`,`datasets.${n}`,`elements.${t}`,""]])}pluginScopeKeys(n){let t=n.id,i=this.type;return Xn(`${i}-plugin-${t}`,()=>[[`plugins.${t}`,...n.additionalOptionScopes||[]]])}_cachedScopes(n,t){let i=this._scopeCache,s=i.get(n);return(!s||t)&&(s=new Map,i.set(n,s)),s}getOptionScopes(n,t,i){let{options:s,type:a}=this,o=this._cachedScopes(n,i),r=o.get(t);if(r)return r;let c=new Set;t.forEach(d=>{n&&(c.add(n),d.forEach(h=>zi(c,n,h))),d.forEach(h=>zi(c,s,h)),d.forEach(h=>zi(c,ve[a]||{},h)),d.forEach(h=>zi(c,Z,h)),d.forEach(h=>zi(c,jn,h))});let l=Array.from(c);return l.length===0&&l.push(Object.create(null)),cl.has(t)&&o.set(t,l),l}chartOptionScopes(){let{options:n,type:t}=this;return[n,ve[t]||{},Z.datasets[t]||{},{type:t},Z,jn]}resolveNamedOptions(n,t,i,s=[""]){let a={$shared:!0},{resolver:o,subPrefixes:r}=yc(this._resolverCache,n,s),c=o;if(qm(o,t)){a.$shared=!1,i=oe(i)?i():i;let l=this.createResolver(n,i,r);c=Fe(o,i,l)}for(let l of t)a[l]=c[l];return a}createResolver(n,t,i=[""],s){let{resolver:a}=yc(this._resolverCache,n,i);return B(t)?Fe(a,t,void 0,s):a}};function yc(e,n,t){let i=e.get(n);i||(i=new Map,e.set(n,i));let s=t.join(),a=i.get(s);return a||(a={resolver:Gn(n,t),subPrefixes:t.filter(r=>!r.toLowerCase().includes("hover"))},i.set(s,a)),a}var Qm=e=>B(e)&&Object.getOwnPropertyNames(e).some(n=>oe(e[n]));function qm(e,n){let{isScriptable:t,isIndexable:i}=Ks(e);for(let s of n){let a=t(s),o=i(s),r=(o||a)&&e[s];if(a&&(oe(r)||Qm(r))||o&&Y(r))return!0}return!1}var Ym="4.5.1",Km=["top","bottom","left","right","chartArea"];function kc(e,n){return e==="top"||e==="bottom"||Km.indexOf(e)===-1&&n==="x"}function wc(e,n){return function(t,i){return t[e]===i[e]?t[n]-i[n]:t[e]-i[e]}}function Cc(e){let n=e.chart,t=n.options.animation;n.notifyPlugins("afterRender"),q(t&&t.onComplete,[e],n)}function Xm(e){let n=e.chart,t=n.options.animation;q(t&&t.onProgress,[e],n)}function ll(e){return Un()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var is={},Mc=e=>{let n=ll(e);return Object.values(is).filter(t=>t.canvas===n).pop()};function Zm(e,n,t){let i=Object.keys(e);for(let s of i){let a=+s;if(a>=n){let o=e[s];delete e[s],(t>0||a>n)&&(e[a+t]=o)}}}function Jm(e,n,t,i){return!t||e.type==="mouseout"?null:i?n:e}var $i=(()=>{class e{static defaults=Z;static instances=is;static overrides=ve;static registry=ee;static version=Ym;static getChart=Mc;static register(...t){ee.add(...t),Sc()}static unregister(...t){ee.remove(...t),Sc()}constructor(t,i){let s=this.config=new Da(i),a=ll(t),o=Mc(a);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");let r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||xm(a)),this.platform.updateConfig(s);let c=this.platform.acquireContext(a,r.aspectRatio),l=c&&c.canvas,d=l&&l.height,h=l&&l.width;if(this.id=Cr(),this.ctx=c,this.canvas=l,this.width=h,this.height=d,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Ca,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Lr(m=>this.update(m),r.resizeDelay||0),this._dataChanges=[],is[this.id]=this,!c||!l){console.error("Failed to create chart: can't acquire context from the given item");return}de.listen(this,"complete",Cc),de.listen(this,"progress",Xm),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:i},width:s,height:a,_aspectRatio:o}=this;return z(t)?i&&o?o:a?s/a:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return ee}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ta(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Qs(this.canvas,this.ctx),this}stop(){return de.stop(this),this}resize(t,i){de.running(this)?this._resizeBeforeDraw={width:t,height:i}:this._resize(t,i)}_resize(t,i){let s=this.options,a=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(a,t,i,o),c=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,ta(this,c,!0)&&(this.notifyPlugins("resize",{size:r}),q(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){let i=this.options.scales||{};G(i,(s,a)=>{s.id=a})}buildOrUpdateScales(){let t=this.options,i=t.scales,s=this.scales,a=Object.keys(s).reduce((r,c)=>(r[c]=!1,r),{}),o=[];i&&(o=o.concat(Object.keys(i).map(r=>{let c=i[r],l=Sa(r,c),d=l==="r",h=l==="x";return{options:c,dposition:d?"chartArea":h?"bottom":"left",dtype:d?"radialLinear":h?"category":"linear"}}))),G(o,r=>{let c=r.options,l=c.id,d=Sa(l,c),h=P(c.type,r.dtype);(c.position===void 0||kc(c.position,d)!==kc(r.dposition))&&(c.position=r.dposition),a[l]=!0;let m=null;if(l in s&&s[l].type===h)m=s[l];else{let p=ee.getScale(h);m=new p({id:l,type:h,ctx:this.ctx,chart:this}),s[m.id]=m}m.init(c,t)}),G(a,(r,c)=>{r||delete s[c]}),G(s,r=>{Mt.configure(this,r,r.options),Mt.addBox(this,r)})}_updateMetasets(){let t=this._metasets,i=this.data.datasets.length,s=t.length;if(t.sort((a,o)=>a.index-o.index),s>i){for(let a=i;a<s;++a)this._destroyDatasetMeta(a);t.splice(i,s-i)}this._sortedMetasets=t.slice(0).sort(wc("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:i}}=this;t.length>i.length&&delete this._stacks,t.forEach((s,a)=>{i.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(a)})}buildOrUpdateControllers(){let t=[],i=this.data.datasets,s,a;for(this._removeUnreferencedMetasets(),s=0,a=i.length;s<a;s++){let o=i[s],r=this.getDatasetMeta(s),c=o.type||this.config.type;if(r.type&&r.type!==c&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=c,r.indexAxis=o.indexAxis||Ma(c,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{let l=ee.getController(c),{datasetElementType:d,dataElementType:h}=Z.datasets[c];Object.assign(l,{dataElementType:ee.getElement(h),datasetElementType:d&&ee.getElement(d)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){G(this.data.datasets,(t,i)=>{this.getDatasetMeta(i).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let i=this.config;i.update();let s=this._options=i.createResolver(i.chartOptionScopes(),this.getContext()),a=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let d=0,h=this.data.datasets.length;d<h;d++){let{controller:m}=this.getDatasetMeta(d),p=!a&&o.indexOf(m)===-1;m.buildOrUpdateElements(p),r=Math.max(+m.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),a||G(o,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(wc("z","_idx"));let{_active:c,_lastEvent:l}=this;l?this._eventHandler(l,!0):c.length&&this._updateHoverStyles(c,c,!0),this.render()}_updateScales(){G(this.scales,t=>{Mt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,i=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!As(i,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,i=this._getUniformDataChanges()||[];for(let{method:s,start:a,count:o}of i){let r=s==="_removeElements"?-o:o;Zm(t,a,r)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let i=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,c)=>c+","+r.splice(1).join(","))),a=s(0);for(let o=1;o<i;o++)if(!As(a,s(o)))return;return Array.from(a).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Mt.update(this,this.width,this.height,t);let i=this.chartArea,s=i.width<=0||i.height<=0;this._layers=[],G(this.boxes,a=>{s&&a.position==="chartArea"||(a.configure&&a.configure(),this._layers.push(...a._layers()))},this),this._layers.forEach((a,o)=>{a._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let i=0,s=this.data.datasets.length;i<s;++i)this.getDatasetMeta(i).controller.configure();for(let i=0,s=this.data.datasets.length;i<s;++i)this._updateDataset(i,oe(t)?t({datasetIndex:i}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,i){let s=this.getDatasetMeta(t),a={meta:s,index:t,mode:i,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",a)!==!1&&(s.controller._update(i),a.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",a))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(de.has(this)?this.attached&&!de.running(this)&&de.start(this):(this.draw(),Cc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:s,height:a}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,a)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let i=this._layers;for(t=0;t<i.length&&i[t].z<=0;++t)i[t].draw(this.chartArea);for(this._drawDatasets();t<i.length;++t)i[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let i=this._sortedMetasets,s=[],a,o;for(a=0,o=i.length;a<o;++a){let r=i[a];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let i=t.length-1;i>=0;--i)this._drawDataset(t[i]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let i=this.ctx,s={meta:t,index:t.index,cancelable:!0},a=oa(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(a&&Oi(i,a),t.controller.draw(),a&&Pi(i),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Xt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,i,s,a){let o=em.modes[i];return typeof o=="function"?o(this,t,s,a):[]}getDatasetMeta(t){let i=this.data.datasets[t],s=this._metasets,a=s.filter(o=>o&&o._dataset===i).pop();return a||(a={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:i&&i.order||0,index:t,_dataset:i,_parsed:[],_sorted:!1},s.push(a)),a}getContext(){return this.$context||(this.$context=le(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let i=this.data.datasets[t];if(!i)return!1;let s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!i.hidden}setDatasetVisibility(t,i){let s=this.getDatasetMeta(t);s.hidden=!i}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,i,s){let a=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,a);li(i)?(o.data[i].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(c=>c.datasetIndex===t?a:void 0))}hide(t,i){this._updateVisibility(t,i,!1)}show(t,i){this._updateVisibility(t,i,!0)}_destroyDatasetMeta(t){let i=this._metasets[t];i&&i.controller&&i.controller._destroy(),delete this._metasets[t]}_stop(){let t,i;for(this.stop(),de.remove(this),t=0,i=this.data.datasets.length;t<i;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:i}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Qs(t,i),this.platform.releaseContext(i),this.canvas=null,this.ctx=null),delete is[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,i=this.platform,s=(o,r)=>{i.addEventListener(this,o,r),t[o]=r},a=(o,r,c)=>{o.offsetX=r,o.offsetY=c,this._eventHandler(o)};G(this.options.events,o=>s(o,a))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,i=this.platform,s=(l,d)=>{i.addEventListener(this,l,d),t[l]=d},a=(l,d)=>{t[l]&&(i.removeEventListener(this,l,d),delete t[l])},o=(l,d)=>{this.canvas&&this.resize(l,d)},r,c=()=>{a("attach",c),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,a("resize",o),this._stop(),this._resize(0,0),s("attach",c)},i.isAttached(this.canvas)?c():r()}unbindEvents(){G(this._listeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._listeners={},G(this._responsiveListeners,(t,i)=>{this.platform.removeEventListener(this,i,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,i,s){let a=s?"set":"remove",o,r,c,l;for(i==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+a+"DatasetHoverStyle"]()),c=0,l=t.length;c<l;++c){r=t[c];let d=r&&this.getDatasetMeta(r.datasetIndex).controller;d&&d[a+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let i=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{let c=this.getDatasetMeta(o);if(!c)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:c.data[r],index:r}});!Ri(s,i)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,i))}notifyPlugins(t,i,s){return this._plugins.notify(this,t,i,s)}isPluginEnabled(t){return this._plugins._cache.filter(i=>i.plugin.id===t).length===1}_updateHoverStyles(t,i,s){let a=this.options.hover,o=(l,d)=>l.filter(h=>!d.some(m=>h.datasetIndex===m.datasetIndex&&h.index===m.index)),r=o(i,t),c=s?t:o(t,i);r.length&&this.updateHoverStyle(r,a.mode,!1),c.length&&a.mode&&this.updateHoverStyle(c,a.mode,!0)}_eventHandler(t,i){let s={event:t,replay:i,cancelable:!0,inChartArea:this.isPointInArea(t)},a=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,a)===!1)return;let o=this._handleEvent(t,i,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,a),(o||s.changed)&&this.render(),this}_handleEvent(t,i,s){let{_active:a=[],options:o}=this,r=i,c=this._getActiveElements(t,a,s,r),l=Dr(t),d=Jm(t,this._lastEvent,s,l);s&&(this._lastEvent=null,q(o.onHover,[t,c,this],this),l&&q(o.onClick,[t,c,this],this));let h=!Ri(c,a);return(h||i)&&(this._active=c,this._updateHoverStyles(c,a,i)),this._lastEvent=d,h}_getActiveElements(t,i,s,a){if(t.type==="mouseout")return[];if(!s)return i;let o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,a)}}return e})();function Sc(){return G($i.instances,e=>e._plugins.invalidate())}function tp(e,n,t){let{startAngle:i,x:s,y:a,outerRadius:o,innerRadius:r,options:c}=n,{borderWidth:l,borderJoinStyle:d}=c,h=Math.min(l/o,_t(i-t));if(e.beginPath(),e.arc(s,a,o-l/2,i+h/2,t-h/2),r>0){let m=Math.min(l/r,_t(i-t));e.arc(s,a,r+l/2,t-m/2,i+m/2,!0)}else{let m=Math.min(l/2,o*_t(i-t));if(d==="round")e.arc(s,a,m,t-j/2,i+j/2,!0);else if(d==="bevel"){let p=2*m*m,f=-p*Math.cos(t+j/2)+s,u=-p*Math.sin(t+j/2)+a,g=p*Math.cos(i+j/2)+s,_=p*Math.sin(i+j/2)+a;e.lineTo(f,u),e.lineTo(g,_)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function ep(e,n,t){let{startAngle:i,pixelMargin:s,x:a,y:o,outerRadius:r,innerRadius:c}=n,l=s/r;e.beginPath(),e.arc(a,o,r,i-l,t+l),c>s?(l=s/c,e.arc(a,o,c,t+l,i-l,!0)):e.arc(a,o,s,t+rt,i-rt),e.closePath(),e.clip()}function ip(e){return $n(e,["outerStart","outerEnd","innerStart","innerEnd"])}function np(e,n,t,i){let s=ip(e.options.borderRadius),a=(t-n)/2,o=Math.min(a,i*n/2),r=c=>{let l=(t-Math.min(a,c))*i/2;return ut(c,0,Math.min(a,l))};return{outerStart:r(s.outerStart),outerEnd:r(s.outerEnd),innerStart:ut(s.innerStart,0,o),innerEnd:ut(s.innerEnd,0,o)}}function fi(e,n,t,i){return{x:t+e*Math.cos(n),y:i+e*Math.sin(n)}}function os(e,n,t,i,s,a){let{x:o,y:r,startAngle:c,pixelMargin:l,innerRadius:d}=n,h=Math.max(n.outerRadius+i+t-l,0),m=d>0?d+i+t+l:0,p=0,f=s-c;if(i){let U=d>0?d-i:0,J=h>0?h-i:0,ct=(U+J)/2,jt=ct!==0?f*ct/(ct+i):f;p=(f-jt)/2}let u=Math.max(.001,f*h-t/j)/h,g=(f-u)/2,_=c+g+p,b=s-g-p,{outerStart:k,outerEnd:M,innerStart:x,innerEnd:C}=np(n,m,h,b-_),R=h-k,D=h-M,O=_+k/R,A=b-M/D,T=m+x,N=m+C,gt=_+x/T,Tt=b-C/N;if(e.beginPath(),a){let U=(O+A)/2;if(e.arc(o,r,h,O,U),e.arc(o,r,h,U,A),M>0){let xt=fi(D,A,o,r);e.arc(xt.x,xt.y,M,A,b+rt)}let J=fi(N,b,o,r);if(e.lineTo(J.x,J.y),C>0){let xt=fi(N,Tt,o,r);e.arc(xt.x,xt.y,C,b+rt,Tt+Math.PI)}let ct=(b-C/m+(_+x/m))/2;if(e.arc(o,r,m,b-C/m,ct,!0),e.arc(o,r,m,ct,_+x/m,!0),x>0){let xt=fi(T,gt,o,r);e.arc(xt.x,xt.y,x,gt+Math.PI,_-rt)}let jt=fi(R,_,o,r);if(e.lineTo(jt.x,jt.y),k>0){let xt=fi(R,O,o,r);e.arc(xt.x,xt.y,k,_-rt,O)}}else{e.moveTo(o,r);let U=Math.cos(O)*h+o,J=Math.sin(O)*h+r;e.lineTo(U,J);let ct=Math.cos(A)*h+o,jt=Math.sin(A)*h+r;e.lineTo(ct,jt)}e.closePath()}function sp(e,n,t,i,s){let{fullCircles:a,startAngle:o,circumference:r}=n,c=n.endAngle;if(a){os(e,n,t,i,c,s);for(let l=0;l<a;++l)e.fill();isNaN(r)||(c=o+(r%K||K))}return os(e,n,t,i,c,s),e.fill(),c}function ap(e,n,t,i,s){let{fullCircles:a,startAngle:o,circumference:r,options:c}=n,{borderWidth:l,borderJoinStyle:d,borderDash:h,borderDashOffset:m,borderRadius:p}=c,f=c.borderAlign==="inner";if(!l)return;e.setLineDash(h||[]),e.lineDashOffset=m,f?(e.lineWidth=l*2,e.lineJoin=d||"round"):(e.lineWidth=l,e.lineJoin=d||"bevel");let u=n.endAngle;if(a){os(e,n,t,i,u,s);for(let g=0;g<a;++g)e.stroke();isNaN(r)||(u=o+(r%K||K))}f&&ep(e,n,u),c.selfJoin&&u-o>=j&&p===0&&d!=="miter"&&tp(e,n,u),a||(os(e,n,t,i,u,s),e.stroke())}var Ia=class extends $t{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:n=>n!=="borderDash"};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(n){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,n&&Object.assign(this,n)}inRange(n,t,i){let s=this.getProps(["x","y"],i),{angle:a,distance:o}=Bs(s,{x:n,y:t}),{startAngle:r,endAngle:c,innerRadius:l,outerRadius:d,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),m=(this.options.spacing+this.options.borderWidth)/2,p=P(h,c-r),f=hi(a,r,c)&&r!==c,u=p>=K||f,g=Jt(o,l+m,d+m);return u&&g}getCenterPoint(n){let{x:t,y:i,startAngle:s,endAngle:a,innerRadius:o,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],n),{offset:c,spacing:l}=this.options,d=(s+a)/2,h=(o+r+l+c)/2;return{x:t+Math.cos(d)*h,y:i+Math.sin(d)*h}}tooltipPosition(n){return this.getCenterPoint(n)}draw(n){let{options:t,circumference:i}=this,s=(t.offset||0)/4,a=(t.spacing||0)/2,o=t.circular;if(this.pixelMargin=t.borderAlign==="inner"?.33:0,this.fullCircles=i>K?Math.floor(i/K):0,i===0||this.innerRadius<0||this.outerRadius<0)return;n.save();let r=(this.startAngle+this.endAngle)/2;n.translate(Math.cos(r)*s,Math.sin(r)*s);let c=1-Math.sin(Math.min(j,i||0)),l=s*c;n.fillStyle=t.backgroundColor,n.strokeStyle=t.borderColor,sp(n,this,l,a,o),ap(n,this,l,a,o),n.restore()}};function dl(e,n,t=n){e.lineCap=P(t.borderCapStyle,n.borderCapStyle),e.setLineDash(P(t.borderDash,n.borderDash)),e.lineDashOffset=P(t.borderDashOffset,n.borderDashOffset),e.lineJoin=P(t.borderJoinStyle,n.borderJoinStyle),e.lineWidth=P(t.borderWidth,n.borderWidth),e.strokeStyle=P(t.borderColor,n.borderColor)}function op(e,n,t){e.lineTo(t.x,t.y)}function rp(e){return e.stepped?Nr:e.tension||e.cubicInterpolationMode==="monotone"?Vr:op}function hl(e,n,t={}){let i=e.length,{start:s=0,end:a=i-1}=t,{start:o,end:r}=n,c=Math.max(s,o),l=Math.min(a,r),d=s<o&&a<o||s>r&&a>r;return{count:i,start:c,loop:n.loop,ilen:l<c&&!d?i+l-c:l-c}}function cp(e,n,t,i){let{points:s,options:a}=n,{count:o,start:r,loop:c,ilen:l}=hl(s,t,i),d=rp(a),{move:h=!0,reverse:m}=i||{},p,f,u;for(p=0;p<=l;++p)f=s[(r+(m?l-p:p))%o],!f.skip&&(h?(e.moveTo(f.x,f.y),h=!1):d(e,u,f,m,a.stepped),u=f);return c&&(f=s[(r+(m?l:0))%o],d(e,u,f,m,a.stepped)),!!c}function lp(e,n,t,i){let s=n.points,{count:a,start:o,ilen:r}=hl(s,t,i),{move:c=!0,reverse:l}=i||{},d=0,h=0,m,p,f,u,g,_,b=M=>(o+(l?r-M:M))%a,k=()=>{u!==g&&(e.lineTo(d,g),e.lineTo(d,u),e.lineTo(d,_))};for(c&&(p=s[b(0)],e.moveTo(p.x,p.y)),m=0;m<=r;++m){if(p=s[b(m)],p.skip)continue;let M=p.x,x=p.y,C=M|0;C===f?(x<u?u=x:x>g&&(g=x),d=(h*d+M)/++h):(k(),e.lineTo(M,x),f=C,h=0,u=g=x),_=x}k()}function Ra(e){let n=e.options,t=n.borderDash&&n.borderDash.length;return!e._decimated&&!e._loop&&!n.tension&&n.cubicInterpolationMode!=="monotone"&&!n.stepped&&!t?lp:cp}function dp(e){return e.stepped?Yr:e.tension||e.cubicInterpolationMode==="monotone"?Kr:_e}function hp(e,n,t,i){let s=n._path;s||(s=n._path=new Path2D,n.path(s,t,i)&&s.closePath()),dl(e,n.options),e.stroke(s)}function mp(e,n,t,i){let{segments:s,options:a}=n,o=Ra(n);for(let r of s)dl(e,a,r.style),e.beginPath(),o(e,n,r,{start:t,end:t+i-1})&&e.closePath(),e.stroke()}var pp=typeof Path2D=="function";function up(e,n,t,i){pp&&!n.options.segment?hp(e,n,t,i):mp(e,n,t,i)}var ls=(()=>{class e extends $t{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,i){let s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){let a=s.spanGaps?this._loop:this._fullLoop;Ur(this._points,s,t,a,i),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Zr(this,this.options.segment))}first(){let t=this.segments,i=this.points;return t.length&&i[t[0].start]}last(){let t=this.segments,i=this.points,s=t.length;return s&&i[t[s-1].end]}interpolate(t,i){let s=this.options,a=t[i],o=this.points,r=aa(this,{property:i,start:a,end:a});if(!r.length)return;let c=[],l=dp(s),d,h;for(d=0,h=r.length;d<h;++d){let{start:m,end:p}=r[d],f=o[m],u=o[p];if(f===u){c.push(f);continue}let g=Math.abs((a-f[i])/(u[i]-f[i])),_=l(f,u,g,s.stepped);_[i]=t[i],c.push(_)}return c.length===1?c[0]:c}pathSegment(t,i,s){return Ra(this)(t,this,i,s)}path(t,i,s){let a=this.segments,o=Ra(this),r=this._loop;i=i||0,s=s||this.points.length-i;for(let c of a)r&=o(t,this,c,{start:i,end:i+s-1});return!!r}draw(t,i,s,a){let o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),up(t,this,s,a),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}return e})();function Dc(e,n,t,i){let s=e.options,{[t]:a}=e.getProps([t],i);return Math.abs(n-a)<s.radius+s.hitRadius}var fp=(()=>{class e extends $t{static id="point";parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,i,s){let a=this.options,{x:o,y:r}=this.getProps(["x","y"],s);return Math.pow(t-o,2)+Math.pow(i-r,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(t,i){return Dc(this,t,"x",i)}inYRange(t,i){return Dc(this,t,"y",i)}getCenterPoint(t){let{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}size(t){t=t||this.options||{};let i=t.radius||0;i=Math.max(i,i&&t.hoverRadius||0);let s=i&&t.borderWidth||0;return(i+s)*2}draw(t,i){let s=this.options;this.skip||s.radius<.1||!Xt(this,i,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Wn(t,s,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}}return e})();function ml(e,n){let{x:t,y:i,base:s,width:a,height:o}=e.getProps(["x","y","base","width","height"],n),r,c,l,d,h;return e.horizontal?(h=o/2,r=Math.min(t,s),c=Math.max(t,s),l=i-h,d=i+h):(h=a/2,r=t-h,c=t+h,l=Math.min(i,s),d=Math.max(i,s)),{left:r,top:l,right:c,bottom:d}}function Ce(e,n,t,i){return e?0:ut(n,t,i)}function gp(e,n,t){let i=e.options.borderWidth,s=e.borderSkipped,a=Ys(i);return{t:Ce(s.top,a.top,0,t),r:Ce(s.right,a.right,0,n),b:Ce(s.bottom,a.bottom,0,t),l:Ce(s.left,a.left,0,n)}}function _p(e,n,t){let{enableBorderRadius:i}=e.getProps(["enableBorderRadius"]),s=e.options.borderRadius,a=ke(s),o=Math.min(n,t),r=e.borderSkipped,c=i||B(s);return{topLeft:Ce(!c||r.top||r.left,a.topLeft,0,o),topRight:Ce(!c||r.top||r.right,a.topRight,0,o),bottomLeft:Ce(!c||r.bottom||r.left,a.bottomLeft,0,o),bottomRight:Ce(!c||r.bottom||r.right,a.bottomRight,0,o)}}function bp(e){let n=ml(e),t=n.right-n.left,i=n.bottom-n.top,s=gp(e,t/2,i/2),a=_p(e,t/2,i/2);return{outer:{x:n.left,y:n.top,w:t,h:i,radius:a},inner:{x:n.left+s.l,y:n.top+s.t,w:t-s.l-s.r,h:i-s.t-s.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,a.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(s.b,s.r))}}}}function ua(e,n,t,i){let s=n===null,a=t===null,r=e&&!(s&&a)&&ml(e,i);return r&&(s||Jt(n,r.left,r.right))&&(a||Jt(t,r.top,r.bottom))}function vp(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function xp(e,n){e.rect(n.x,n.y,n.w,n.h)}function fa(e,n,t={}){let i=e.x!==t.x?-n:0,s=e.y!==t.y?-n:0,a=(e.x+e.w!==t.x+t.w?n:0)-i,o=(e.y+e.h!==t.y+t.h?n:0)-s;return{x:e.x+i,y:e.y+s,w:e.w+a,h:e.h+o,radius:e.radius}}var Ea=class extends $t{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(n){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,n&&Object.assign(this,n)}draw(n){let{inflateAmount:t,options:{borderColor:i,backgroundColor:s}}=this,{inner:a,outer:o}=bp(this),r=vp(o.radius)?pi:xp;n.save(),(o.w!==a.w||o.h!==a.h)&&(n.beginPath(),r(n,fa(o,t,a)),n.clip(),r(n,fa(a,-t,o)),n.fillStyle=i,n.fill("evenodd")),n.beginPath(),r(n,fa(a,t)),n.fillStyle=s,n.fill(),n.restore()}inRange(n,t,i){return ua(this,n,t,i)}inXRange(n,t){return ua(this,n,null,t)}inYRange(n,t){return ua(this,null,n,t)}getCenterPoint(n){let{x:t,y:i,base:s,horizontal:a}=this.getProps(["x","y","base","horizontal"],n);return{x:a?(t+s)/2:t,y:a?i:(i+s)/2}}getRange(n){return n==="x"?this.width/2:this.height/2}},yp=Object.freeze({__proto__:null,ArcElement:Ia,BarElement:Ea,LineElement:ls,PointElement:fp}),Oa=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Ic=Oa.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function pl(e){return Oa[e%Oa.length]}function ul(e){return Ic[e%Ic.length]}function kp(e,n){return e.borderColor=pl(n),e.backgroundColor=ul(n),++n}function wp(e,n){return e.backgroundColor=e.data.map(()=>pl(n++)),n}function Cp(e,n){return e.backgroundColor=e.data.map(()=>ul(n++)),n}function Mp(e){let n=0;return(t,i)=>{let s=e.getDatasetMeta(i).controller;s instanceof Na?n=wp(t,n):s instanceof el?n=Cp(t,n):s&&(n=kp(t,n))}}function Rc(e){let n;for(n in e)if(e[n].borderColor||e[n].backgroundColor)return!0;return!1}function Sp(e){return e&&(e.borderColor||e.backgroundColor)}function Dp(){return Z.borderColor!=="rgba(0,0,0,0.1)"||Z.backgroundColor!=="rgba(0,0,0,0.1)"}var Ip={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,n,t){if(!t.enabled)return;let{data:{datasets:i},options:s}=e.config,{elements:a}=s,o=Rc(i)||Sp(s)||a&&Rc(a)||Dp();if(!t.forceOverride&&o)return;let r=Mp(e);i.forEach(r)}};function Rp(e,n,t,i,s){let a=s.samples||i;if(a>=t)return e.slice(n,n+t);let o=[],r=(t-2)/(a-2),c=0,l=n+t-1,d=n,h,m,p,f,u;for(o[c++]=e[d],h=0;h<a-2;h++){let g=0,_=0,b,k=Math.floor((h+1)*r)+1+n,M=Math.min(Math.floor((h+2)*r)+1,t)+n,x=M-k;for(b=k;b<M;b++)g+=e[b].x,_+=e[b].y;g/=x,_/=x;let C=Math.floor(h*r)+1+n,R=Math.min(Math.floor((h+1)*r)+1,t)+n,{x:D,y:O}=e[d];for(p=f=-1,b=C;b<R;b++)f=.5*Math.abs((D-g)*(e[b].y-O)-(D-e[b].x)*(_-O)),f>p&&(p=f,m=e[b],u=b);o[c++]=m,d=u}return o[c++]=e[l],o}function Ep(e,n,t,i){let s=0,a=0,o,r,c,l,d,h,m,p,f,u,g=[],_=n+t-1,b=e[n].x,M=e[_].x-b;for(o=n;o<n+t;++o){r=e[o],c=(r.x-b)/M*i,l=r.y;let x=c|0;if(x===d)l<f?(f=l,h=o):l>u&&(u=l,m=o),s=(a*s+r.x)/++a;else{let C=o-1;if(!z(h)&&!z(m)){let R=Math.min(h,m),D=Math.max(h,m);R!==p&&R!==C&&g.push(Yi(qi({},e[R]),{x:s})),D!==p&&D!==C&&g.push(Yi(qi({},e[D]),{x:s}))}o>0&&C!==p&&g.push(e[C]),g.push(r),d=x,a=0,f=u=l,h=m=p=o}}return g}function fl(e){if(e._decimated){let n=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:n})}}function Ec(e){e.data.datasets.forEach(n=>{fl(n)})}function Op(e,n){let t=n.length,i=0,s,{iScale:a}=e,{min:o,max:r,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(i=ut(Kt(n,a.axis,o).lo,0,t-1)),l?s=ut(Kt(n,a.axis,r).hi+1,i,t)-i:s=t-i,{start:i,count:s}}var Pp={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,n,t)=>{if(!t.enabled){Ec(e);return}let i=e.width;e.data.datasets.forEach((s,a)=>{let{_data:o,indexAxis:r}=s,c=e.getDatasetMeta(a),l=o||s.data;if(ui([r,e.options.indexAxis])==="y"||!c.controller.supportsDecimation)return;let d=e.scales[c.xAxisID];if(d.type!=="linear"&&d.type!=="time"||e.options.parsing)return;let{start:h,count:m}=Op(c,l),p=t.threshold||4*i;if(m<=p){fl(s);return}z(o)&&(s._data=l,delete s.data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(u){this._data=u}}));let f;switch(t.algorithm){case"lttb":f=Rp(l,h,m,i,t);break;case"min-max":f=Ep(l,h,m,i);break;default:throw new Error(`Unsupported decimation algorithm '${t.algorithm}'`)}s._decimated=f})},destroy(e){Ec(e)}};function Tp(e,n,t){let i=e.segments,s=e.points,a=n.points,o=[];for(let r of i){let{start:c,end:l}=r;l=ds(c,l,s);let d=Pa(t,s[c],s[l],r.loop);if(!n.segments){o.push({source:r,target:d,start:s[c],end:s[l]});continue}let h=aa(n,d);for(let m of h){let p=Pa(t,a[m.start],a[m.end],m.loop),f=sa(r,s,p);for(let u of f)o.push({source:u,target:m,start:{[t]:Oc(d,p,"start",Math.max)},end:{[t]:Oc(d,p,"end",Math.min)}})}}return o}function Pa(e,n,t,i){if(i)return;let s=n[e],a=t[e];return e==="angle"&&(s=_t(s),a=_t(a)),{property:e,start:s,end:a}}function Ap(e,n){let{x:t=null,y:i=null}=e||{},s=n.points,a=[];return n.segments.forEach(({start:o,end:r})=>{r=ds(o,r,s);let c=s[o],l=s[r];i!==null?(a.push({x:c.x,y:i}),a.push({x:l.x,y:i})):t!==null&&(a.push({x:t,y:c.y}),a.push({x:t,y:l.y}))}),a}function ds(e,n,t){for(;n>e;n--){let i=t[n];if(!isNaN(i.x)&&!isNaN(i.y))break}return n}function Oc(e,n,t,i){return e&&n?i(e[t],n[t]):e?e[t]:n?n[t]:0}function gl(e,n){let t=[],i=!1;return Y(e)?(i=!0,t=e):t=Ap(e,n),t.length?new ls({points:t,options:{tension:0},_loop:i,_fullLoop:i}):null}function Pc(e){return e&&e.fill!==!1}function Lp(e,n,t){let s=e[n].fill,a=[n],o;if(!t)return s;for(;s!==!1&&a.indexOf(s)===-1;){if(!at(s))return s;if(o=e[s],!o)return!1;if(o.visible)return s;a.push(s),s=o.fill}return!1}function Fp(e,n,t){let i=Vp(e);if(B(i))return isNaN(i.value)?!1:i;let s=parseFloat(i);return at(s)&&Math.floor(s)===s?zp(i[0],n,s,t):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function zp(e,n,t,i){return(e==="-"||e==="+")&&(t=n+t),t===n||t<0||t>=i?!1:t}function Bp(e,n){let t=null;return e==="start"?t=n.bottom:e==="end"?t=n.top:B(e)?t=n.getPixelForValue(e.value):n.getBasePixel&&(t=n.getBasePixel()),t}function Np(e,n,t){let i;return e==="start"?i=t:e==="end"?i=n.options.reverse?n.min:n.max:B(e)?i=e.value:i=n.getBaseValue(),i}function Vp(e){let n=e.options,t=n.fill,i=P(t&&t.target,t);return i===void 0&&(i=!!n.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Hp(e){let{scale:n,index:t,line:i}=e,s=[],a=i.segments,o=i.points,r=jp(n,t);r.push(gl({x:null,y:n.bottom},i));for(let c=0;c<a.length;c++){let l=a[c];for(let d=l.start;d<=l.end;d++)Wp(s,o[d],r)}return new ls({points:s,options:{}})}function jp(e,n){let t=[],i=e.getMatchingVisibleMetas("line");for(let s=0;s<i.length;s++){let a=i[s];if(a.index===n)break;a.hidden||t.unshift(a.dataset)}return t}function Wp(e,n,t){let i=[];for(let s=0;s<t.length;s++){let a=t[s],{first:o,last:r,point:c}=$p(a,n,"x");if(!(!c||o&&r)){if(o)i.unshift(c);else if(e.push(c),!r)break}}e.push(...i)}function $p(e,n,t){let i=e.interpolate(n,t);if(!i)return{};let s=i[t],a=e.segments,o=e.points,r=!1,c=!1;for(let l=0;l<a.length;l++){let d=a[l],h=o[d.start][t],m=o[d.end][t];if(Jt(s,h,m)){r=s===h,c=s===m;break}}return{first:r,last:c,point:i}}var rs=class{constructor(n){this.x=n.x,this.y=n.y,this.radius=n.radius}pathSegment(n,t,i){let{x:s,y:a,radius:o}=this;return t=t||{start:0,end:K},n.arc(s,a,o,t.end,t.start,!0),!i.bounds}interpolate(n){let{x:t,y:i,radius:s}=this,a=n.angle;return{x:t+Math.cos(a)*s,y:i+Math.sin(a)*s,angle:a}}};function Gp(e){let{chart:n,fill:t,line:i}=e;if(at(t))return Up(n,t);if(t==="stack")return Hp(e);if(t==="shape")return!0;let s=Qp(e);return s instanceof rs?s:gl(s,i)}function Up(e,n){let t=e.getDatasetMeta(n);return t&&e.isDatasetVisible(n)?t.dataset:null}function Qp(e){return(e.scale||{}).getPointPositionForValue?Yp(e):qp(e)}function qp(e){let{scale:n={},fill:t}=e,i=Bp(t,n);if(at(i)){let s=n.isHorizontal();return{x:s?i:null,y:s?null:i}}return null}function Yp(e){let{scale:n,fill:t}=e,i=n.options,s=n.getLabels().length,a=i.reverse?n.max:n.min,o=Np(t,n,a),r=[];if(i.grid.circular){let c=n.getPointPositionForValue(0,a);return new rs({x:c.x,y:c.y,radius:n.getDistanceFromCenterForValue(o)})}for(let c=0;c<s;++c)r.push(n.getPointPositionForValue(c,o));return r}function ga(e,n,t){let i=Gp(n),{chart:s,index:a,line:o,scale:r,axis:c}=n,l=o.options,d=l.fill,h=l.backgroundColor,{above:m=h,below:p=h}=d||{},f=s.getDatasetMeta(a),u=oa(s,f);i&&o.points.length&&(Oi(e,t),Kp(e,{line:o,target:i,above:m,below:p,area:t,scale:r,axis:c,clip:u}),Pi(e))}function Kp(e,n){let{line:t,target:i,above:s,below:a,area:o,scale:r,clip:c}=n,l=t._loop?"angle":n.axis;e.save();let d=a;a!==s&&(l==="x"?(Tc(e,i,o.top),_a(e,{line:t,target:i,color:s,scale:r,property:l,clip:c}),e.restore(),e.save(),Tc(e,i,o.bottom)):l==="y"&&(Ac(e,i,o.left),_a(e,{line:t,target:i,color:a,scale:r,property:l,clip:c}),e.restore(),e.save(),Ac(e,i,o.right),d=s)),_a(e,{line:t,target:i,color:d,scale:r,property:l,clip:c}),e.restore()}function Tc(e,n,t){let{segments:i,points:s}=n,a=!0,o=!1;e.beginPath();for(let r of i){let{start:c,end:l}=r,d=s[c],h=s[ds(c,l,s)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(d.x,t),e.lineTo(d.x,d.y)),o=!!n.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(h.x,t)}e.lineTo(n.first().x,t),e.closePath(),e.clip()}function Ac(e,n,t){let{segments:i,points:s}=n,a=!0,o=!1;e.beginPath();for(let r of i){let{start:c,end:l}=r,d=s[c],h=s[ds(c,l,s)];a?(e.moveTo(d.x,d.y),a=!1):(e.lineTo(t,d.y),e.lineTo(d.x,d.y)),o=!!n.pathSegment(e,r,{move:o}),o?e.closePath():e.lineTo(t,h.y)}e.lineTo(t,n.first().y),e.closePath(),e.clip()}function _a(e,n){let{line:t,target:i,property:s,color:a,scale:o,clip:r}=n,c=Tp(t,i,s);for(let{source:l,target:d,start:h,end:m}of c){let{style:{backgroundColor:p=a}={}}=l,f=i!==!0;e.save(),e.fillStyle=p,Xp(e,o,r,f&&Pa(s,h,m)),e.beginPath();let u=!!t.pathSegment(e,l),g;if(f){u?e.closePath():Lc(e,i,m,s);let _=!!i.pathSegment(e,d,{move:u,reverse:!0});g=u&&_,g||Lc(e,i,h,s)}e.closePath(),e.fill(g?"evenodd":"nonzero"),e.restore()}}function Xp(e,n,t,i){let s=n.chart.chartArea,{property:a,start:o,end:r}=i||{};if(a==="x"||a==="y"){let c,l,d,h;a==="x"?(c=o,l=s.top,d=r,h=s.bottom):(c=s.left,l=o,d=s.right,h=r),e.beginPath(),t&&(c=Math.max(c,t.left),d=Math.min(d,t.right),l=Math.max(l,t.top),h=Math.min(h,t.bottom)),e.rect(c,l,d-c,h-l),e.clip()}}function Lc(e,n,t,i){let s=n.interpolate(t,i);s&&e.lineTo(s.x,s.y)}var Zp={id:"filler",afterDatasetsUpdate(e,n,t){let i=(e.data.datasets||[]).length,s=[],a,o,r,c;for(o=0;o<i;++o)a=e.getDatasetMeta(o),r=a.dataset,c=null,r&&r.options&&r instanceof ls&&(c={visible:e.isDatasetVisible(o),index:o,fill:Fp(r,o,i),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:r}),a.$filler=c,s.push(c);for(o=0;o<i;++o)c=s[o],!(!c||c.fill===!1)&&(c.fill=Lp(s,o,t.propagate))},beforeDraw(e,n,t){let i=t.drawTime==="beforeDraw",s=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let o=s.length-1;o>=0;--o){let r=s[o].$filler;r&&(r.line.updateControlPoints(a,r.axis),i&&r.fill&&ga(e.ctx,r,a))}},beforeDatasetsDraw(e,n,t){if(t.drawTime!=="beforeDatasetsDraw")return;let i=e.getSortedVisibleDatasetMetas();for(let s=i.length-1;s>=0;--s){let a=i[s].$filler;Pc(a)&&ga(e.ctx,a,e.chartArea)}},beforeDatasetDraw(e,n,t){let i=n.meta.$filler;!Pc(i)||t.drawTime!=="beforeDatasetDraw"||ga(e.ctx,i,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Fc=(e,n)=>{let{boxHeight:t=n,boxWidth:i=n}=e;return e.usePointStyle&&(t=Math.min(t,n),i=e.pointStyleWidth||Math.min(i,n)),{boxWidth:i,boxHeight:t,itemHeight:Math.max(n,t)}},Jp=(e,n)=>e!==null&&n!==null&&e.datasetIndex===n.datasetIndex&&e.index===n.index,cs=class extends $t{constructor(n){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,t,i){this.maxWidth=n,this.maxHeight=t,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let n=this.options.labels||{},t=q(n.generateLabels,[this.chart],this)||[];n.filter&&(t=t.filter(i=>n.filter(i,this.chart.data))),n.sort&&(t=t.sort((i,s)=>n.sort(i,s,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:n,ctx:t}=this;if(!n.display){this.width=this.height=0;return}let i=n.labels,s=mt(i.font),a=s.size,o=this._computeTitleHeight(),{boxWidth:r,itemHeight:c}=Fc(i,a),l,d;t.font=s.string,this.isHorizontal()?(l=this.maxWidth,d=this._fitRows(o,a,r,c)+10):(d=this.maxHeight,l=this._fitCols(o,s,r,c)+10),this.width=Math.min(l,n.maxWidth||this.maxWidth),this.height=Math.min(d,n.maxHeight||this.maxHeight)}_fitRows(n,t,i,s){let{ctx:a,maxWidth:o,options:{labels:{padding:r}}}=this,c=this.legendHitBoxes=[],l=this.lineWidths=[0],d=s+r,h=n;a.textAlign="left",a.textBaseline="middle";let m=-1,p=-d;return this.legendItems.forEach((f,u)=>{let g=i+t/2+a.measureText(f.text).width;(u===0||l[l.length-1]+g+2*r>o)&&(h+=d,l[l.length-(u>0?0:1)]=0,p+=d,m++),c[u]={left:0,top:p,row:m,width:g,height:s},l[l.length-1]+=g+r}),h}_fitCols(n,t,i,s){let{ctx:a,maxHeight:o,options:{labels:{padding:r}}}=this,c=this.legendHitBoxes=[],l=this.columnSizes=[],d=o-n,h=r,m=0,p=0,f=0,u=0;return this.legendItems.forEach((g,_)=>{let{itemWidth:b,itemHeight:k}=tu(i,t,a,g,s);_>0&&p+k+2*r>d&&(h+=m+r,l.push({width:m,height:p}),f+=m+r,u++,m=p=0),c[_]={left:f,top:p,col:u,width:b,height:k},m=Math.max(m,b),p+=k+r}),h+=m,l.push({width:m,height:p}),h}adjustHitBoxes(){if(!this.options.display)return;let n=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:i,labels:{padding:s},rtl:a}}=this,o=Be(a,this.left,this.width);if(this.isHorizontal()){let r=0,c=bt(i,this.left+s,this.right-this.lineWidths[r]);for(let l of t)r!==l.row&&(r=l.row,c=bt(i,this.left+s,this.right-this.lineWidths[r])),l.top+=this.top+n+s,l.left=o.leftForLtr(o.x(c),l.width),c+=l.width+s}else{let r=0,c=bt(i,this.top+n+s,this.bottom-this.columnSizes[r].height);for(let l of t)l.col!==r&&(r=l.col,c=bt(i,this.top+n+s,this.bottom-this.columnSizes[r].height)),l.top=c,l.left+=this.left+s,l.left=o.leftForLtr(o.x(l.left),l.width),c+=l.height+s}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){let n=this.ctx;Oi(n,this),this._draw(),Pi(n)}}_draw(){let{options:n,columnSizes:t,lineWidths:i,ctx:s}=this,{align:a,labels:o}=n,r=Z.color,c=Be(n.rtl,this.left,this.width),l=mt(o.font),{padding:d}=o,h=l.size,m=h/2,p;this.drawTitle(),s.textAlign=c.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=l.string;let{boxWidth:f,boxHeight:u,itemHeight:g}=Fc(o,h),_=function(C,R,D){if(isNaN(f)||f<=0||isNaN(u)||u<0)return;s.save();let O=P(D.lineWidth,1);if(s.fillStyle=P(D.fillStyle,r),s.lineCap=P(D.lineCap,"butt"),s.lineDashOffset=P(D.lineDashOffset,0),s.lineJoin=P(D.lineJoin,"miter"),s.lineWidth=O,s.strokeStyle=P(D.strokeStyle,r),s.setLineDash(P(D.lineDash,[])),o.usePointStyle){let A={radius:u*Math.SQRT2/2,pointStyle:D.pointStyle,rotation:D.rotation,borderWidth:O},T=c.xPlus(C,f/2),N=R+m;qs(s,A,T,N,o.pointStyleWidth&&f)}else{let A=R+Math.max((h-u)/2,0),T=c.leftForLtr(C,f),N=ke(D.borderRadius);s.beginPath(),Object.values(N).some(gt=>gt!==0)?pi(s,{x:T,y:A,w:f,h:u,radius:N}):s.rect(T,A,f,u),s.fill(),O!==0&&s.stroke()}s.restore()},b=function(C,R,D){ye(s,D.text,C,R+g/2,l,{strikethrough:D.hidden,textAlign:c.textAlign(D.textAlign)})},k=this.isHorizontal(),M=this._computeTitleHeight();k?p={x:bt(a,this.left+d,this.right-i[0]),y:this.top+d+M,line:0}:p={x:this.left+d,y:bt(a,this.top+M+d,this.bottom-t[0].height),line:0},ia(this.ctx,n.textDirection);let x=g+d;this.legendItems.forEach((C,R)=>{s.strokeStyle=C.fontColor,s.fillStyle=C.fontColor;let D=s.measureText(C.text).width,O=c.textAlign(C.textAlign||(C.textAlign=o.textAlign)),A=f+m+D,T=p.x,N=p.y;c.setWidth(this.width),k?R>0&&T+A+d>this.right&&(N=p.y+=x,p.line++,T=p.x=bt(a,this.left+d,this.right-i[p.line])):R>0&&N+x>this.bottom&&(T=p.x=T+t[p.line].width+d,p.line++,N=p.y=bt(a,this.top+M+d,this.bottom-t[p.line].height));let gt=c.x(T);if(_(gt,N,C),T=Fr(O,T+f+m,k?T+A:this.right,n.rtl),b(c.x(T),N,C),k)p.x+=A+d;else if(typeof C.text!="string"){let Tt=l.lineHeight;p.y+=_l(C,Tt)+d}else p.y+=x}),na(this.ctx,n.textDirection)}drawTitle(){let n=this.options,t=n.title,i=mt(t.font),s=vt(t.padding);if(!t.display)return;let a=Be(n.rtl,this.left,this.width),o=this.ctx,r=t.position,c=i.size/2,l=s.top+c,d,h=this.left,m=this.width;if(this.isHorizontal())m=Math.max(...this.lineWidths),d=this.top+l,h=bt(n.align,h,this.right-m);else{let f=this.columnSizes.reduce((u,g)=>Math.max(u,g.height),0);d=l+bt(n.align,this.top,this.bottom-f-n.labels.padding-this._computeTitleHeight())}let p=bt(r,h,h+m);o.textAlign=a.textAlign(Hn(r)),o.textBaseline="middle",o.strokeStyle=t.color,o.fillStyle=t.color,o.font=i.string,ye(o,t.text,p,d,i)}_computeTitleHeight(){let n=this.options.title,t=mt(n.font),i=vt(n.padding);return n.display?t.lineHeight+i.height:0}_getLegendItemAt(n,t){let i,s,a;if(Jt(n,this.left,this.right)&&Jt(t,this.top,this.bottom)){for(a=this.legendHitBoxes,i=0;i<a.length;++i)if(s=a[i],Jt(n,s.left,s.left+s.width)&&Jt(t,s.top,s.top+s.height))return this.legendItems[i]}return null}handleEvent(n){let t=this.options;if(!nu(n.type,t))return;let i=this._getLegendItemAt(n.x,n.y);if(n.type==="mousemove"||n.type==="mouseout"){let s=this._hoveredItem,a=Jp(s,i);s&&!a&&q(t.onLeave,[n,s,this],this),this._hoveredItem=i,i&&!a&&q(t.onHover,[n,i,this],this)}else i&&q(t.onClick,[n,i,this],this)}};function tu(e,n,t,i,s){let a=eu(i,e,n,t),o=iu(s,i,n.lineHeight);return{itemWidth:a,itemHeight:o}}function eu(e,n,t,i){let s=e.text;return s&&typeof s!="string"&&(s=s.reduce((a,o)=>a.length>o.length?a:o)),n+t.size/2+i.measureText(s).width}function iu(e,n,t){let i=e;return typeof n.text!="string"&&(i=_l(n,t)),i}function _l(e,n){let t=e.text?e.text.length:0;return n*t}function nu(e,n){return!!((e==="mousemove"||e==="mouseout")&&(n.onHover||n.onLeave)||n.onClick&&(e==="click"||e==="mouseup"))}var su={id:"legend",_element:cs,start(e,n,t){let i=e.legend=new cs({ctx:e.ctx,options:t,chart:e});Mt.configure(e,i,t),Mt.addBox(e,i)},stop(e){Mt.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,n,t){let i=e.legend;Mt.configure(e,i,t),i.options=t},afterUpdate(e){let n=e.legend;n.buildLabels(),n.adjustHitBoxes()},afterEvent(e,n){n.replay||e.legend.handleEvent(n.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,n,t){let i=n.datasetIndex,s=t.chart;s.isDatasetVisible(i)?(s.hide(i),n.hidden=!0):(s.show(i),n.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let n=e.data.datasets,{labels:{usePointStyle:t,pointStyle:i,textAlign:s,color:a,useBorderRadius:o,borderRadius:r}}=e.legend.options;return e._getSortedDatasetMetas().map(c=>{let l=c.controller.getStyle(t?0:void 0),d=vt(l.borderWidth);return{text:n[c.index].label,fillStyle:l.backgroundColor,fontColor:a,hidden:!c.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(d.width+d.height)/4,strokeStyle:l.borderColor,pointStyle:i||l.pointStyle,rotation:l.rotation,textAlign:s||l.textAlign,borderRadius:o&&(r||l.borderRadius),datasetIndex:c.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}},Hi=class extends $t{constructor(n){super(),this.chart=n.chart,this.options=n.options,this.ctx=n.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(n,t){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=n,this.height=this.bottom=t;let s=Y(i.text)?i.text.length:1;this._padding=vt(i.padding);let a=s*mt(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=a:this.width=a}isHorizontal(){let n=this.options.position;return n==="top"||n==="bottom"}_drawArgs(n){let{top:t,left:i,bottom:s,right:a,options:o}=this,r=o.align,c=0,l,d,h;return this.isHorizontal()?(d=bt(r,i,a),h=t+n,l=a-i):(o.position==="left"?(d=i+n,h=bt(r,s,t),c=j*-.5):(d=a-n,h=bt(r,t,s),c=j*.5),l=s-t),{titleX:d,titleY:h,maxWidth:l,rotation:c}}draw(){let n=this.ctx,t=this.options;if(!t.display)return;let i=mt(t.font),a=i.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:c,rotation:l}=this._drawArgs(a);ye(n,t.text,0,0,i,{color:t.color,maxWidth:c,rotation:l,textAlign:Hn(t.align),textBaseline:"middle",translation:[o,r]})}};function au(e,n){let t=new Hi({ctx:e.ctx,options:n,chart:e});Mt.configure(e,t,n),Mt.addBox(e,t),e.titleBlock=t}var ou={id:"title",_element:Hi,start(e,n,t){au(e,t)},stop(e){let n=e.titleBlock;Mt.removeBox(e,n),delete e.titleBlock},beforeUpdate(e,n,t){let i=e.titleBlock;Mt.configure(e,i,t),i.options=t},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Zn=new WeakMap,ru={id:"subtitle",start(e,n,t){let i=new Hi({ctx:e.ctx,options:t,chart:e});Mt.configure(e,i,t),Mt.addBox(e,i),Zn.set(e,i)},stop(e){Mt.removeBox(e,Zn.get(e)),Zn.delete(e)},beforeUpdate(e,n,t){let i=Zn.get(e);Mt.configure(e,i,t),i.options=t},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Ni={average(e){if(!e.length)return!1;let n,t,i=new Set,s=0,a=0;for(n=0,t=e.length;n<t;++n){let r=e[n].element;if(r&&r.hasValue()){let c=r.tooltipPosition();i.add(c.x),s+=c.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((r,c)=>r+c)/i.size,y:s/a}},nearest(e,n){if(!e.length)return!1;let t=n.x,i=n.y,s=Number.POSITIVE_INFINITY,a,o,r;for(a=0,o=e.length;a<o;++a){let c=e[a].element;if(c&&c.hasValue()){let l=c.getCenterPoint(),d=Fn(n,l);d<s&&(s=d,r=c)}}if(r){let c=r.tooltipPosition();t=c.x,i=c.y}return{x:t,y:i}}};function te(e,n){return n&&(Y(n)?Array.prototype.push.apply(e,n):e.push(n)),e}function he(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function cu(e,n){let{element:t,datasetIndex:i,index:s}=n,a=e.getDatasetMeta(i).controller,{label:o,value:r}=a.getLabelAndValue(s);return{chart:e,label:o,parsed:a.getParsed(s),raw:e.data.datasets[i].data[s],formattedValue:r,dataset:a.getDataset(),dataIndex:s,datasetIndex:i,element:t}}function zc(e,n){let t=e.chart.ctx,{body:i,footer:s,title:a}=e,{boxWidth:o,boxHeight:r}=n,c=mt(n.bodyFont),l=mt(n.titleFont),d=mt(n.footerFont),h=a.length,m=s.length,p=i.length,f=vt(n.padding),u=f.height,g=0,_=i.reduce((M,x)=>M+x.before.length+x.lines.length+x.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,h&&(u+=h*l.lineHeight+(h-1)*n.titleSpacing+n.titleMarginBottom),_){let M=n.displayColors?Math.max(r,c.lineHeight):c.lineHeight;u+=p*M+(_-p)*c.lineHeight+(_-1)*n.bodySpacing}m&&(u+=n.footerMarginTop+m*d.lineHeight+(m-1)*n.footerSpacing);let b=0,k=function(M){g=Math.max(g,t.measureText(M).width+b)};return t.save(),t.font=l.string,G(e.title,k),t.font=c.string,G(e.beforeBody.concat(e.afterBody),k),b=n.displayColors?o+2+n.boxPadding:0,G(i,M=>{G(M.before,k),G(M.lines,k),G(M.after,k)}),b=0,t.font=d.string,G(e.footer,k),t.restore(),g+=f.width,{width:g,height:u}}function lu(e,n){let{y:t,height:i}=n;return t<i/2?"top":t>e.height-i/2?"bottom":"center"}function du(e,n,t,i){let{x:s,width:a}=i,o=t.caretSize+t.caretPadding;if(e==="left"&&s+a+o>n.width||e==="right"&&s-a-o<0)return!0}function hu(e,n,t,i){let{x:s,width:a}=t,{width:o,chartArea:{left:r,right:c}}=e,l="center";return i==="center"?l=s<=(r+c)/2?"left":"right":s<=a/2?l="left":s>=o-a/2&&(l="right"),du(l,e,n,t)&&(l="center"),l}function Bc(e,n,t){let i=t.yAlign||n.yAlign||lu(e,t);return{xAlign:t.xAlign||n.xAlign||hu(e,n,t,i),yAlign:i}}function mu(e,n){let{x:t,width:i}=e;return n==="right"?t-=i:n==="center"&&(t-=i/2),t}function pu(e,n,t){let{y:i,height:s}=e;return n==="top"?i+=t:n==="bottom"?i-=s+t:i-=s/2,i}function Nc(e,n,t,i){let{caretSize:s,caretPadding:a,cornerRadius:o}=e,{xAlign:r,yAlign:c}=t,l=s+a,{topLeft:d,topRight:h,bottomLeft:m,bottomRight:p}=ke(o),f=mu(n,r),u=pu(n,c,l);return c==="center"?r==="left"?f+=l:r==="right"&&(f-=l):r==="left"?f-=Math.max(d,m)+s:r==="right"&&(f+=Math.max(h,p)+s),{x:ut(f,0,i.width-n.width),y:ut(u,0,i.height-n.height)}}function Jn(e,n,t){let i=vt(t.padding);return n==="center"?e.x+e.width/2:n==="right"?e.x+e.width-i.right:e.x+i.left}function Vc(e){return te([],he(e))}function uu(e,n,t){return le(e,{tooltip:n,tooltipItems:t,type:"tooltip"})}function Hc(e,n){let t=n&&n.dataset&&n.dataset.tooltip&&n.dataset.tooltip.callbacks;return t?e.override(t):e}var bl={beforeTitle:Zt,title(e){if(e.length>0){let n=e[0],t=n.chart.data.labels,i=t?t.length:0;if(this&&this.options&&this.options.mode==="dataset")return n.dataset.label||"";if(n.label)return n.label;if(i>0&&n.dataIndex<i)return t[n.dataIndex]}return""},afterTitle:Zt,beforeBody:Zt,beforeLabel:Zt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let n=e.dataset.label||"";n&&(n+=": ");let t=e.formattedValue;return z(t)||(n+=t),n},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Zt,afterBody:Zt,beforeFooter:Zt,footer:Zt,afterFooter:Zt};function Ot(e,n,t,i){let s=e[n].call(t,i);return typeof s>"u"?bl[n].call(t,i):s}var jc=(()=>{class e extends $t{static positioners=Ni;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let i=this.chart,s=this.options.setContext(this.getContext()),a=s.enabled&&i.options.animation&&s.animations,o=new ns(this.chart,a);return a._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=uu(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,i){let{callbacks:s}=i,a=Ot(s,"beforeTitle",this,t),o=Ot(s,"title",this,t),r=Ot(s,"afterTitle",this,t),c=[];return c=te(c,he(a)),c=te(c,he(o)),c=te(c,he(r)),c}getBeforeBody(t,i){return Vc(Ot(i.callbacks,"beforeBody",this,t))}getBody(t,i){let{callbacks:s}=i,a=[];return G(t,o=>{let r={before:[],lines:[],after:[]},c=Hc(s,o);te(r.before,he(Ot(c,"beforeLabel",this,o))),te(r.lines,Ot(c,"label",this,o)),te(r.after,he(Ot(c,"afterLabel",this,o))),a.push(r)}),a}getAfterBody(t,i){return Vc(Ot(i.callbacks,"afterBody",this,t))}getFooter(t,i){let{callbacks:s}=i,a=Ot(s,"beforeFooter",this,t),o=Ot(s,"footer",this,t),r=Ot(s,"afterFooter",this,t),c=[];return c=te(c,he(a)),c=te(c,he(o)),c=te(c,he(r)),c}_createItems(t){let i=this._active,s=this.chart.data,a=[],o=[],r=[],c=[],l,d;for(l=0,d=i.length;l<d;++l)c.push(cu(this.chart,i[l]));return t.filter&&(c=c.filter((h,m,p)=>t.filter(h,m,p,s))),t.itemSort&&(c=c.sort((h,m)=>t.itemSort(h,m,s))),G(c,h=>{let m=Hc(t.callbacks,h);a.push(Ot(m,"labelColor",this,h)),o.push(Ot(m,"labelPointStyle",this,h)),r.push(Ot(m,"labelTextColor",this,h))}),this.labelColors=a,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=c,c}update(t,i){let s=this.options.setContext(this.getContext()),a=this._active,o,r=[];if(!a.length)this.opacity!==0&&(o={opacity:0});else{let c=Ni[s.position].call(this,a,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);let l=this._size=zc(this,s),d=Object.assign({},c,l),h=Bc(this.chart,s,d),m=Nc(s,d,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:m.x,y:m.y,width:l.width,height:l.height,caretX:c.x,caretY:c.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:i})}drawCaret(t,i,s,a){let o=this.getCaretPosition(t,s,a);i.lineTo(o.x1,o.y1),i.lineTo(o.x2,o.y2),i.lineTo(o.x3,o.y3)}getCaretPosition(t,i,s){let{xAlign:a,yAlign:o}=this,{caretSize:r,cornerRadius:c}=s,{topLeft:l,topRight:d,bottomLeft:h,bottomRight:m}=ke(c),{x:p,y:f}=t,{width:u,height:g}=i,_,b,k,M,x,C;return o==="center"?(x=f+g/2,a==="left"?(_=p,b=_-r,M=x+r,C=x-r):(_=p+u,b=_+r,M=x-r,C=x+r),k=_):(a==="left"?b=p+Math.max(l,h)+r:a==="right"?b=p+u-Math.max(d,m)-r:b=this.caretX,o==="top"?(M=f,x=M-r,_=b-r,k=b+r):(M=f+g,x=M+r,_=b+r,k=b-r),C=M),{x1:_,x2:b,x3:k,y1:M,y2:x,y3:C}}drawTitle(t,i,s){let a=this.title,o=a.length,r,c,l;if(o){let d=Be(s.rtl,this.x,this.width);for(t.x=Jn(this,s.titleAlign,s),i.textAlign=d.textAlign(s.titleAlign),i.textBaseline="middle",r=mt(s.titleFont),c=s.titleSpacing,i.fillStyle=s.titleColor,i.font=r.string,l=0;l<o;++l)i.fillText(a[l],d.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+c,l+1===o&&(t.y+=s.titleMarginBottom-c)}}_drawColorBox(t,i,s,a,o){let r=this.labelColors[s],c=this.labelPointStyles[s],{boxHeight:l,boxWidth:d}=o,h=mt(o.bodyFont),m=Jn(this,"left",o),p=a.x(m),f=l<h.lineHeight?(h.lineHeight-l)/2:0,u=i.y+f;if(o.usePointStyle){let g={radius:Math.min(d,l)/2,pointStyle:c.pointStyle,rotation:c.rotation,borderWidth:1},_=a.leftForLtr(p,d)+d/2,b=u+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Wn(t,g,_,b),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Wn(t,g,_,b)}else{t.lineWidth=B(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;let g=a.leftForLtr(p,d),_=a.leftForLtr(a.xPlus(p,1),d-2),b=ke(r.borderRadius);Object.values(b).some(k=>k!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,pi(t,{x:g,y:u,w:d,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),pi(t,{x:_,y:u+1,w:d-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(g,u,d,l),t.strokeRect(g,u,d,l),t.fillStyle=r.backgroundColor,t.fillRect(_,u+1,d-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,i,s){let{body:a}=this,{bodySpacing:o,bodyAlign:r,displayColors:c,boxHeight:l,boxWidth:d,boxPadding:h}=s,m=mt(s.bodyFont),p=m.lineHeight,f=0,u=Be(s.rtl,this.x,this.width),g=function(O){i.fillText(O,u.x(t.x+f),t.y+p/2),t.y+=p+o},_=u.textAlign(r),b,k,M,x,C,R,D;for(i.textAlign=r,i.textBaseline="middle",i.font=m.string,t.x=Jn(this,_,s),i.fillStyle=s.bodyColor,G(this.beforeBody,g),f=c&&_!=="right"?r==="center"?d/2+h:d+2+h:0,x=0,R=a.length;x<R;++x){for(b=a[x],k=this.labelTextColors[x],i.fillStyle=k,G(b.before,g),M=b.lines,c&&M.length&&(this._drawColorBox(i,t,x,u,s),p=Math.max(m.lineHeight,l)),C=0,D=M.length;C<D;++C)g(M[C]),p=m.lineHeight;G(b.after,g)}f=0,p=m.lineHeight,G(this.afterBody,g),t.y-=o}drawFooter(t,i,s){let a=this.footer,o=a.length,r,c;if(o){let l=Be(s.rtl,this.x,this.width);for(t.x=Jn(this,s.footerAlign,s),t.y+=s.footerMarginTop,i.textAlign=l.textAlign(s.footerAlign),i.textBaseline="middle",r=mt(s.footerFont),i.fillStyle=s.footerColor,i.font=r.string,c=0;c<o;++c)i.fillText(a[c],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,i,s,a){let{xAlign:o,yAlign:r}=this,{x:c,y:l}=t,{width:d,height:h}=s,{topLeft:m,topRight:p,bottomLeft:f,bottomRight:u}=ke(a.cornerRadius);i.fillStyle=a.backgroundColor,i.strokeStyle=a.borderColor,i.lineWidth=a.borderWidth,i.beginPath(),i.moveTo(c+m,l),r==="top"&&this.drawCaret(t,i,s,a),i.lineTo(c+d-p,l),i.quadraticCurveTo(c+d,l,c+d,l+p),r==="center"&&o==="right"&&this.drawCaret(t,i,s,a),i.lineTo(c+d,l+h-u),i.quadraticCurveTo(c+d,l+h,c+d-u,l+h),r==="bottom"&&this.drawCaret(t,i,s,a),i.lineTo(c+f,l+h),i.quadraticCurveTo(c,l+h,c,l+h-f),r==="center"&&o==="left"&&this.drawCaret(t,i,s,a),i.lineTo(c,l+m),i.quadraticCurveTo(c,l,c+m,l),i.closePath(),i.fill(),a.borderWidth>0&&i.stroke()}_updateAnimationTarget(t){let i=this.chart,s=this.$animations,a=s&&s.x,o=s&&s.y;if(a||o){let r=Ni[t.position].call(this,this._active,this._eventPosition);if(!r)return;let c=this._size=zc(this,t),l=Object.assign({},r,this._size),d=Bc(i,t,l),h=Nc(t,l,d,i);(a._to!==h.x||o._to!==h.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=c.width,this.height=c.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){let i=this.options.setContext(this.getContext()),s=this.opacity;if(!s)return;this._updateAnimationTarget(i);let a={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;let r=vt(i.padding),c=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;i.enabled&&c&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,a,i),ia(t,i.textDirection),o.y+=r.top,this.drawTitle(o,t,i),this.drawBody(o,t,i),this.drawFooter(o,t,i),na(t,i.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,i){let s=this._active,a=t.map(({datasetIndex:c,index:l})=>{let d=this.chart.getDatasetMeta(c);if(!d)throw new Error("Cannot find a dataset at index "+c);return{datasetIndex:c,element:d.data[l],index:l}}),o=!Ri(s,a),r=this._positionChanged(a,i);(o||r)&&(this._active=a,this._eventPosition=i,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,i,s=!0){if(i&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let a=this.options,o=this._active||[],r=this._getActiveElements(t,o,i,s),c=this._positionChanged(r,t),l=i||!Ri(r,o)||c;return l&&(this._active=r,(a.enabled||a.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,i))),l}_getActiveElements(t,i,s,a){let o=this.options;if(t.type==="mouseout")return[];if(!a)return i.filter(c=>this.chart.data.datasets[c.datasetIndex]&&this.chart.getDatasetMeta(c.datasetIndex).controller.getParsed(c.index)!==void 0);let r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,i){let{caretX:s,caretY:a,options:o}=this,r=Ni[o.position].call(this,t,i);return r!==!1&&(s!==r.x||a!==r.y)}}return e})(),fu={id:"tooltip",_element:jc,positioners:Ni,afterInit(e,n,t){t&&(e.tooltip=new jc({chart:e,options:t}))},beforeUpdate(e,n,t){e.tooltip&&e.tooltip.initialize(t)},reset(e,n,t){e.tooltip&&e.tooltip.initialize(t)},afterDraw(e){let n=e.tooltip;if(n&&n._willRender()){let t={tooltip:n};if(e.notifyPlugins("beforeTooltipDraw",Yi(qi({},t),{cancelable:!0}))===!1)return;n.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",t)}},afterEvent(e,n){if(e.tooltip){let t=n.replay;e.tooltip.handleEvent(n.event,t,n.inChartArea)&&(n.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,n)=>n.bodyFont.size,boxWidth:(e,n)=>n.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:bl},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},gu=Object.freeze({__proto__:null,Colors:Ip,Decimation:Pp,Filler:Zp,Legend:su,SubTitle:ru,Title:ou,Tooltip:fu}),_u=(e,n,t,i)=>(typeof n=="string"?(t=e.push(n)-1,i.unshift({index:t,label:n})):isNaN(n)&&(t=null),t);function bu(e,n,t,i){let s=e.indexOf(n);if(s===-1)return _u(e,n,t,i);let a=e.lastIndexOf(n);return s!==a?t:s}var vu=(e,n)=>e===null?null:ut(Math.round(e),0,n);function Wc(e){let n=this.getLabels();return e>=0&&e<n.length?n[e]:e}var xu=(()=>{class e extends He{static id="category";static defaults={ticks:{callback:Wc}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let i=this._addedLabels;if(i.length){let s=this.getLabels();for(let{index:a,label:o}of i)s[a]===o&&s.splice(a,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(z(t))return null;let s=this.getLabels();return i=isFinite(i)&&s[i]===t?i:bu(s,t,P(i,t),this._addedLabels),vu(i,s.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:i}=this.getUserBounds(),{min:s,max:a}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),i||(a=this.getLabels().length-1)),this.min=s,this.max=a}buildTicks(){let t=this.min,i=this.max,s=this.options.offset,a=[],o=this.getLabels();o=t===0&&i===o.length-1?o:o.slice(t,i+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=i;r++)a.push({value:r});return a}getLabelForValue(t){return Wc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}return e})();function yu(e,n){let t=[],{bounds:s,step:a,min:o,max:r,precision:c,count:l,maxTicks:d,maxDigits:h,includeBounds:m}=e,p=a||1,f=d-1,{min:u,max:g}=n,_=!z(o),b=!z(r),k=!z(l),M=(g-u)/(h+1),x=Ls((g-u)/f/p)*p,C,R,D,O;if(x<1e-14&&!_&&!b)return[{value:u},{value:g}];O=Math.ceil(g/x)-Math.floor(u/x),O>f&&(x=Ls(O*x/f/p)*p),z(c)||(C=Math.pow(10,c),x=Math.ceil(x*C)/C),s==="ticks"?(R=Math.floor(u/x)*x,D=Math.ceil(g/x)*x):(R=u,D=g),_&&b&&a&&Rr((r-o)/a,x/1e3)?(O=Math.round(Math.min((r-o)/x,d)),x=(r-o)/O,R=o,D=r):k?(R=_?o:R,D=b?r:D,O=l-1,x=(D-R)/O):(O=(D-R)/x,di(O,Math.round(O),x/1e3)?O=Math.round(O):O=Math.ceil(O));let A=Math.max(zs(x),zs(R));C=Math.pow(10,z(c)?A:c),R=Math.round(R*C)/C,D=Math.round(D*C)/C;let T=0;for(_&&(m&&R!==o?(t.push({value:o}),R<o&&T++,di(Math.round((R+T*x)*C)/C,o,$c(o,M,e))&&T++):R<o&&T++);T<O;++T){let N=Math.round((R+T*x)*C)/C;if(b&&N>r)break;t.push({value:N})}return b&&m&&D!==r?t.length&&di(t[t.length-1].value,r,$c(r,M,e))?t[t.length-1].value=r:t.push({value:r}):(!b||D===r)&&t.push({value:D}),t}function $c(e,n,{horizontal:t,minRotation:i}){let s=Ht(i),a=(t?Math.sin(s):Math.cos(s))||.001,o=.75*n*(""+e).length;return Math.min(n/a,o)}var _i=class extends He{constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(n,t){return z(n)||(typeof n=="number"||n instanceof Number)&&!isFinite(+n)?null:+n}handleTickRangeOptions(){let{beginAtZero:n}=this.options,{minDefined:t,maxDefined:i}=this.getUserBounds(),{min:s,max:a}=this,o=c=>s=t?s:c,r=c=>a=i?a:c;if(n){let c=Wt(s),l=Wt(a);c<0&&l<0?r(0):c>0&&l>0&&o(0)}if(s===a){let c=a===0?1:Math.abs(a*.05);r(a+c),n||o(s-c)}this.min=s,this.max=a}getTickLimit(){let n=this.options.ticks,{maxTicksLimit:t,stepSize:i}=n,s;return i?(s=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,s>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`),s=1e3)):(s=this.computeTickLimit(),t=t||11),t&&(s=Math.min(t,s)),s}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let n=this.options,t=n.ticks,i=this.getTickLimit();i=Math.max(2,i);let s={maxTicks:i,bounds:n.bounds,min:n.min,max:n.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},a=this._range||this,o=yu(s,a);return n.bounds==="ticks"&&Fs(o,this,"value"),n.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){let n=this.ticks,t=this.min,i=this.max;if(super.configure(),this.options.offset&&n.length){let s=(i-t)/Math.max(n.length-1,1)/2;t-=s,i+=s}this._startValue=t,this._endValue=i,this._valueRange=i-t}getLabelForValue(n){return mi(n,this.chart.options.locale,this.options.ticks.format)}},Ta=class extends _i{static id="linear";static defaults={ticks:{callback:Ei.formatters.numeric}};determineDataLimits(){let{min:n,max:t}=this.getMinMax(!0);this.min=at(n)?n:0,this.max=at(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let n=this.isHorizontal(),t=n?this.width:this.height,i=Ht(this.options.ticks.minRotation),s=(n?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,a.lineHeight/s))}getPixelForValue(n){return n===null?NaN:this.getPixelForDecimal((n-this._startValue)/this._valueRange)}getValueForPixel(n){return this._startValue+this.getDecimalForPixel(n)*this._valueRange}},ji=e=>Math.floor(re(e)),Ve=(e,n)=>Math.pow(10,ji(e)+n);function Gc(e){return e/Math.pow(10,ji(e))===1}function Uc(e,n,t){let i=Math.pow(10,t),s=Math.floor(e/i);return Math.ceil(n/i)-s}function ku(e,n){let t=n-e,i=ji(t);for(;Uc(e,n,i)>10;)i++;for(;Uc(e,n,i)<10;)i--;return Math.min(i,ji(e))}function wu(e,{min:n,max:t}){n=Et(e.min,n);let i=[],s=ji(n),a=ku(n,t),o=a<0?Math.pow(10,Math.abs(a)):1,r=Math.pow(10,a),c=s>a?Math.pow(10,s):0,l=Math.round((n-c)*o)/o,d=Math.floor((n-c)/r/10)*r*10,h=Math.floor((l-d)/Math.pow(10,a)),m=Et(e.min,Math.round((c+d+h*Math.pow(10,a))*o)/o);for(;m<t;)i.push({value:m,major:Gc(m),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,o=a>=0?1:o),m=Math.round((c+d+h*Math.pow(10,a))*o)/o;let p=Et(e.max,m);return i.push({value:p,major:Gc(p),significand:h}),i}var Aa=class extends He{static id="logarithmic";static defaults={ticks:{callback:Ei.formatters.logarithmic,major:{enabled:!0}}};constructor(n){super(n),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(n,t){let i=_i.prototype.parse.apply(this,[n,t]);if(i===0){this._zero=!0;return}return at(i)&&i>0?i:null}determineDataLimits(){let{min:n,max:t}=this.getMinMax(!0);this.min=at(n)?Math.max(0,n):null,this.max=at(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!at(this._userMin)&&(this.min=n===Ve(this.min,0)?Ve(this.min,-1):Ve(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:n,maxDefined:t}=this.getUserBounds(),i=this.min,s=this.max,a=r=>i=n?i:r,o=r=>s=t?s:r;i===s&&(i<=0?(a(1),o(10)):(a(Ve(i,-1)),o(Ve(s,1)))),i<=0&&a(Ve(s,-1)),s<=0&&o(Ve(i,1)),this.min=i,this.max=s}buildTicks(){let n=this.options,t={min:this._userMin,max:this._userMax},i=wu(t,this);return n.bounds==="ticks"&&Fs(i,this,"value"),n.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(n){return n===void 0?"0":mi(n,this.chart.options.locale,this.options.ticks.format)}configure(){let n=this.min;super.configure(),this._startValue=re(n),this._valueRange=re(this.max)-re(n)}getPixelForValue(n){return(n===void 0||n===0)&&(n=this.min),n===null||isNaN(n)?NaN:this.getPixelForDecimal(n===this.min?0:(re(n)-this._startValue)/this._valueRange)}getValueForPixel(n){let t=this.getDecimalForPixel(n);return Math.pow(10,this._startValue+t*this._valueRange)}};function La(e){let n=e.ticks;if(n.display&&e.display){let t=vt(n.backdropPadding);return P(n.font&&n.font.size,Z.font.size)+t.height}return 0}function Cu(e,n,t){return t=Y(t)?t:[t],{w:Br(e,n.string,t),h:t.length*n.lineHeight}}function Qc(e,n,t,i,s){return e===i||e===s?{start:n-t/2,end:n+t/2}:e<i||e>s?{start:n-t,end:n}:{start:n,end:n+t}}function Mu(e){let n={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},t=Object.assign({},n),i=[],s=[],a=e._pointLabels.length,o=e.options.pointLabels,r=o.centerPointLabels?j/a:0;for(let c=0;c<a;c++){let l=o.setContext(e.getPointLabelContext(c));s[c]=l.padding;let d=e.getPointPosition(c,e.drawingArea+s[c],r),h=mt(l.font),m=Cu(e.ctx,h,e._pointLabels[c]);i[c]=m;let p=_t(e.getIndexAngle(c)+r),f=Math.round(Nn(p)),u=Qc(f,d.x,m.w,0,180),g=Qc(f,d.y,m.h,90,270);Su(t,n,p,u,g)}e.setCenterPoint(n.l-t.l,t.r-n.r,n.t-t.t,t.b-n.b),e._pointLabelItems=Ru(e,i,s)}function Su(e,n,t,i,s){let a=Math.abs(Math.sin(t)),o=Math.abs(Math.cos(t)),r=0,c=0;i.start<n.l?(r=(n.l-i.start)/a,e.l=Math.min(e.l,n.l-r)):i.end>n.r&&(r=(i.end-n.r)/a,e.r=Math.max(e.r,n.r+r)),s.start<n.t?(c=(n.t-s.start)/o,e.t=Math.min(e.t,n.t-c)):s.end>n.b&&(c=(s.end-n.b)/o,e.b=Math.max(e.b,n.b+c))}function Du(e,n,t){let i=e.drawingArea,{extra:s,additionalAngle:a,padding:o,size:r}=t,c=e.getPointPosition(n,i+s+o,a),l=Math.round(Nn(_t(c.angle+rt))),d=Pu(c.y,r.h,l),h=Eu(l),m=Ou(c.x,r.w,h);return{visible:!0,x:c.x,y:d,textAlign:h,left:m,top:d,right:m+r.w,bottom:d+r.h}}function Iu(e,n){if(!n)return!0;let{left:t,top:i,right:s,bottom:a}=e;return!(Xt({x:t,y:i},n)||Xt({x:t,y:a},n)||Xt({x:s,y:i},n)||Xt({x:s,y:a},n))}function Ru(e,n,t){let i=[],s=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:r}=a.pointLabels,c={extra:La(a)/2,additionalAngle:o?j/s:0},l;for(let d=0;d<s;d++){c.padding=t[d],c.size=n[d];let h=Du(e,d,c);i.push(h),r==="auto"&&(h.visible=Iu(h,l),h.visible&&(l=h))}return i}function Eu(e){return e===0||e===180?"center":e<180?"left":"right"}function Ou(e,n,t){return t==="right"?e-=n:t==="center"&&(e-=n/2),e}function Pu(e,n,t){return t===90||t===270?e-=n/2:(t>270||t<90)&&(e-=n),e}function Tu(e,n,t){let{left:i,top:s,right:a,bottom:o}=t,{backdropColor:r}=n;if(!z(r)){let c=ke(n.borderRadius),l=vt(n.backdropPadding);e.fillStyle=r;let d=i-l.left,h=s-l.top,m=a-i+l.width,p=o-s+l.height;Object.values(c).some(f=>f!==0)?(e.beginPath(),pi(e,{x:d,y:h,w:m,h:p,radius:c}),e.fill()):e.fillRect(d,h,m,p)}}function Au(e,n){let{ctx:t,options:{pointLabels:i}}=e;for(let s=n-1;s>=0;s--){let a=e._pointLabelItems[s];if(!a.visible)continue;let o=i.setContext(e.getPointLabelContext(s));Tu(t,o,a);let r=mt(o.font),{x:c,y:l,textAlign:d}=a;ye(t,e._pointLabels[s],c,l+r.lineHeight/2,r,{color:o.color,textAlign:d,textBaseline:"middle"})}}function vl(e,n,t,i){let{ctx:s}=e;if(t)s.arc(e.xCenter,e.yCenter,n,0,K);else{let a=e.getPointPosition(0,n);s.moveTo(a.x,a.y);for(let o=1;o<i;o++)a=e.getPointPosition(o,n),s.lineTo(a.x,a.y)}}function Lu(e,n,t,i,s){let a=e.ctx,o=n.circular,{color:r,lineWidth:c}=n;!o&&!i||!r||!c||t<0||(a.save(),a.strokeStyle=r,a.lineWidth=c,a.setLineDash(s.dash||[]),a.lineDashOffset=s.dashOffset,a.beginPath(),vl(e,t,o,i),a.closePath(),a.stroke(),a.restore())}function Fu(e,n,t){return le(e,{label:t,index:n,type:"pointLabel"})}var Fa=class extends _i{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ei.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(n){return n},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(n){super(n),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let n=this._padding=vt(La(this.options)/2),t=this.width=this.maxWidth-n.width,i=this.height=this.maxHeight-n.height;this.xCenter=Math.floor(this.left+t/2+n.left),this.yCenter=Math.floor(this.top+i/2+n.top),this.drawingArea=Math.floor(Math.min(t,i)/2)}determineDataLimits(){let{min:n,max:t}=this.getMinMax(!1);this.min=at(n)&&!isNaN(n)?n:0,this.max=at(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/La(this.options))}generateTickLabels(n){_i.prototype.generateTickLabels.call(this,n),this._pointLabels=this.getLabels().map((t,i)=>{let s=q(this.options.pointLabels.callback,[t,i],this);return s||s===0?s:""}).filter((t,i)=>this.chart.getDataVisibility(i))}fit(){let n=this.options;n.display&&n.pointLabels.display?Mu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(n,t,i,s){this.xCenter+=Math.floor((n-t)/2),this.yCenter+=Math.floor((i-s)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(n,t,i,s))}getIndexAngle(n){let t=K/(this._pointLabels.length||1),i=this.options.startAngle||0;return _t(n*t+Ht(i))}getDistanceFromCenterForValue(n){if(z(n))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-n)*t:(n-this.min)*t}getValueForDistanceFromCenter(n){if(z(n))return NaN;let t=n/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(n){let t=this._pointLabels||[];if(n>=0&&n<t.length){let i=t[n];return Fu(this.getContext(),n,i)}}getPointPosition(n,t,i=0){let s=this.getIndexAngle(n)-rt+i;return{x:Math.cos(s)*t+this.xCenter,y:Math.sin(s)*t+this.yCenter,angle:s}}getPointPositionForValue(n,t){return this.getPointPosition(n,this.getDistanceFromCenterForValue(t))}getBasePosition(n){return this.getPointPositionForValue(n||0,this.getBaseValue())}getPointLabelPosition(n){let{left:t,top:i,right:s,bottom:a}=this._pointLabelItems[n];return{left:t,top:i,right:s,bottom:a}}drawBackground(){let{backgroundColor:n,grid:{circular:t}}=this.options;if(n){let i=this.ctx;i.save(),i.beginPath(),vl(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),i.closePath(),i.fillStyle=n,i.fill(),i.restore()}}drawGrid(){let n=this.ctx,t=this.options,{angleLines:i,grid:s,border:a}=t,o=this._pointLabels.length,r,c,l;if(t.pointLabels.display&&Au(this,o),s.display&&this.ticks.forEach((d,h)=>{if(h!==0||h===0&&this.min<0){c=this.getDistanceFromCenterForValue(d.value);let m=this.getContext(h),p=s.setContext(m),f=a.setContext(m);Lu(this,p,c,o,f)}}),i.display){for(n.save(),r=o-1;r>=0;r--){let d=i.setContext(this.getPointLabelContext(r)),{color:h,lineWidth:m}=d;!m||!h||(n.lineWidth=m,n.strokeStyle=h,n.setLineDash(d.borderDash),n.lineDashOffset=d.borderDashOffset,c=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),l=this.getPointPosition(r,c),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(l.x,l.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let n=this.ctx,t=this.options,i=t.ticks;if(!i.display)return;let s=this.getIndexAngle(0),a,o;n.save(),n.translate(this.xCenter,this.yCenter),n.rotate(s),n.textAlign="center",n.textBaseline="middle",this.ticks.forEach((r,c)=>{if(c===0&&this.min>=0&&!t.reverse)return;let l=i.setContext(this.getContext(c)),d=mt(l.font);if(a=this.getDistanceFromCenterForValue(this.ticks[c].value),l.showLabelBackdrop){n.font=d.string,o=n.measureText(r.label).width,n.fillStyle=l.backdropColor;let h=vt(l.backdropPadding);n.fillRect(-o/2-h.left,-a-d.size/2-h.top,o+h.width,d.size+h.height)}ye(n,r.label,0,-a,d,{color:l.color,strokeColor:l.textStrokeColor,strokeWidth:l.textStrokeWidth})}),n.restore()}drawTitle(){}},hs={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Pt=Object.keys(hs);function qc(e,n){return e-n}function Yc(e,n){if(z(n))return null;let t=e._adapter,{parser:i,round:s,isoWeekday:a}=e._parseOpts,o=n;return typeof i=="function"&&(o=i(o)),at(o)||(o=typeof i=="string"?t.parse(o,i):t.parse(o)),o===null?null:(s&&(o=s==="week"&&(ze(a)||a===!0)?t.startOf(o,"isoWeek",a):t.startOf(o,s)),+o)}function Kc(e,n,t,i){let s=Pt.length;for(let a=Pt.indexOf(e);a<s-1;++a){let o=hs[Pt[a]],r=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((t-n)/(r*o.size))<=i)return Pt[a]}return Pt[s-1]}function zu(e,n,t,i,s){for(let a=Pt.length-1;a>=Pt.indexOf(t);a--){let o=Pt[a];if(hs[o].common&&e._adapter.diff(s,i,o)>=n-1)return o}return Pt[t?Pt.indexOf(t):0]}function Bu(e){for(let n=Pt.indexOf(e)+1,t=Pt.length;n<t;++n)if(hs[Pt[n]].common)return Pt[n]}function Xc(e,n,t){if(!t)e[n]=!0;else if(t.length){let{lo:i,hi:s}=Vn(t,n),a=t[i]>=n?t[i]:t[s];e[a]=!0}}function Nu(e,n,t,i){let s=e._adapter,a=+s.startOf(n[0].value,i),o=n[n.length-1].value,r,c;for(r=a;r<=o;r=+s.add(r,1,i))c=t[r],c>=0&&(n[c].major=!0);return n}function Zc(e,n,t){let i=[],s={},a=n.length,o,r;for(o=0;o<a;++o)r=n[o],s[r]=o,i.push({value:r,major:!1});return a===0||!t?i:Nu(e,i,s,t)}var za=(()=>{class e extends He{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){let s=t.time||(t.time={}),a=this._adapter=new Kh._date(t.adapters.date);a.init(i),ci(s.displayFormats,a.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:Yc(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,i=this._adapter,s=t.time.unit||"day",{min:a,max:o,minDefined:r,maxDefined:c}=this.getUserBounds();function l(d){!r&&!isNaN(d.min)&&(a=Math.min(a,d.min)),!c&&!isNaN(d.max)&&(o=Math.max(o,d.max))}(!r||!c)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),a=at(a)&&!isNaN(a)?a:+i.startOf(Date.now(),s),o=at(o)&&!isNaN(o)?o:+i.endOf(Date.now(),s)+1,this.min=Math.min(a,o-1),this.max=Math.max(a+1,o)}_getLabelBounds(){let t=this.getLabelTimestamps(),i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],s=t[t.length-1]),{min:i,max:s}}buildTicks(){let t=this.options,i=t.time,s=t.ticks,a=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&a.length&&(this.min=this._userMin||a[0],this.max=this._userMax||a[a.length-1]);let o=this.min,r=this.max,c=Pr(a,o,r);return this._unit=i.unit||(s.autoSkip?Kc(i.minUnit,this.min,this.max,this._getLabelCapacity(o)):zu(this,c.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:Bu(this._unit),this.initOffsets(a),t.reverse&&c.reverse(),Zc(this,c,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,s=0,a,o;this.options.offset&&t.length&&(a=this.getDecimalForValue(t[0]),t.length===1?i=1-a:i=(this.getDecimalForValue(t[1])-a)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);let r=t.length<3?.5:.25;i=ut(i,0,r),s=ut(s,0,r),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){let t=this._adapter,i=this.min,s=this.max,a=this.options,o=a.time,r=o.unit||Kc(o.minUnit,i,s,this._getLabelCapacity(i)),c=P(a.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,d=ze(l)||l===!0,h={},m=i,p,f;if(d&&(m=+t.startOf(m,"isoWeek",l)),m=+t.startOf(m,d?"day":r),t.diff(s,i,r)>1e5*c)throw new Error(i+" and "+s+" are too far apart with stepSize of "+c+" "+r);let u=a.ticks.source==="data"&&this.getDataTimestamps();for(p=m,f=0;p<s;p=+t.add(p,c,r),f++)Xc(h,p,u);return(p===s||a.bounds==="ticks"||f===1)&&Xc(h,p,u),Object.keys(h).sort(qc).map(g=>+g)}getLabelForValue(t){let i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(t,s.tooltipFormat):i.format(t,s.displayFormats.datetime)}format(t,i){let a=this.options.time.displayFormats,o=this._unit,r=i||a[o];return this._adapter.format(t,r)}_tickFormatFunction(t,i,s,a){let o=this.options,r=o.ticks.callback;if(r)return q(r,[t,i,s],this);let c=o.time.displayFormats,l=this._unit,d=this._majorUnit,h=l&&c[l],m=d&&c[d],p=s[i],f=d&&m&&p&&p.major;return this._adapter.format(t,a||(f?m:h))}generateTickLabels(t){let i,s,a;for(i=0,s=t.length;i<s;++i)a=t[i],a.label=this._tickFormatFunction(a.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let i=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(t){let i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){let i=this.options.ticks,s=this.ctx.measureText(t).width,a=Ht(this.isHorizontal()?i.maxRotation:i.minRotation),o=Math.cos(a),r=Math.sin(a),c=this._resolveTickFontOptions(0).size;return{w:s*o+c*r,h:s*r+c*o}}_getLabelCapacity(t){let i=this.options.time,s=i.displayFormats,a=s[i.unit]||s.millisecond,o=this._tickFormatFunction(t,0,Zc(this,[t],this._majorUnit),a),r=this._getLabelSize(o),c=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return c>0?c:1}getDataTimestamps(){let t=this._cache.data||[],i,s;if(t.length)return t;let a=this.getMatchingVisibleMetas();if(this._normalized&&a.length)return this._cache.data=a[0].controller.getAllParsedValues(this);for(i=0,s=a.length;i<s;++i)t=t.concat(a[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],i,s;if(t.length)return t;let a=this.getLabels();for(i=0,s=a.length;i<s;++i)t.push(Yc(this,a[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Vs(t.sort(qc))}}return e})();function ts(e,n,t){let i=0,s=e.length-1,a,o,r,c;t?(n>=e[i].pos&&n<=e[s].pos&&({lo:i,hi:s}=Kt(e,"pos",n)),{pos:a,time:r}=e[i],{pos:o,time:c}=e[s]):(n>=e[i].time&&n<=e[s].time&&({lo:i,hi:s}=Kt(e,"time",n)),{time:a,pos:r}=e[i],{time:o,pos:c}=e[s]);let l=o-a;return l?r+(c-r)*(n-a)/l:r}var Ba=class extends za{static id="timeseries";static defaults=za.defaults;constructor(n){super(n),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let n=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(n);this._minPos=ts(t,this.min),this._tableRange=ts(t,this.max)-this._minPos,super.initOffsets(n)}buildLookupTable(n){let{min:t,max:i}=this,s=[],a=[],o,r,c,l,d;for(o=0,r=n.length;o<r;++o)l=n[o],l>=t&&l<=i&&s.push(l);if(s.length<2)return[{time:t,pos:0},{time:i,pos:1}];for(o=0,r=s.length;o<r;++o)d=s[o+1],c=s[o-1],l=s[o],Math.round((d+c)/2)!==l&&a.push({time:l,pos:o/(r-1)});return a}_generate(){let n=this.min,t=this.max,i=super.getDataTimestamps();return(!i.includes(n)||!i.length)&&i.splice(0,0,n),(!i.includes(t)||i.length===1)&&i.push(t),i.sort((s,a)=>s-a)}_getTimestampsForTable(){let n=this._cache.all||[];if(n.length)return n;let t=this.getDataTimestamps(),i=this.getLabelTimestamps();return t.length&&i.length?n=this.normalize(t.concat(i)):n=t.length?t:i,n=this._cache.all=n,n}getDecimalForValue(n){return(ts(this._table,n)-this._minPos)/this._tableRange}getValueForPixel(n){let t=this._offsets,i=this.getDecimalForPixel(n)/t.factor-t.end;return ts(this._table,i*this._tableRange+this._minPos,!0)}},Vu=Object.freeze({__proto__:null,CategoryScale:xu,LinearScale:Ta,LogarithmicScale:Aa,RadialLinearScale:Fa,TimeScale:za,TimeSeriesScale:Ba}),xl=[Yh,yp,gu,Vu];var Hu=["inherentRisksChart"],ju=["residualRisksChart"],Wu=(e,n)=>n.label;function $u(e,n){e&1&&qe(0,"canvas",null,0)}function Gu(e,n){e&1&&qe(0,"canvas",null,1)}function Uu(e,n){if(e&1&&(Q(0,"div",5),W(1,$u,2,0,"canvas"),W(2,Gu,2,0,"canvas"),Q(3,"div",7),w(4),it()()),e&2){let t=E(),i=t.$implicit,s=t.$index;S(),$(s===4?1:-1),S(),$(s===5?2:-1),S(2),X(i.value)}}function Qu(e,n){if(e&1&&(Q(0,"div",6),w(1),Q(2,"span",8),w(3),it()()),e&2){let t=E().$implicit;S(),ne(" ",t.value),S(2),X(t.suffix)}}function qu(e,n){if(e&1&&(Q(0,"div",3)(1,"div",4),w(2),it(),W(3,Uu,5,3,"div",5)(4,Qu,4,2,"div",6),it()),e&2){let t=n.$implicit;S(2),X(t.label),S(),$(t.hasChart?3:4)}}$i.register(...xl);var ms=class e{dataService=I(pe);inherentRisksCanvas;residualRisksCanvas;inherentRisksChart;residualRisksChart;stats=[{label:"Total Risks",value:0,suffix:""},{label:"Avg Risk Exposure",value:"",suffix:""},{label:"Treatment Activities",value:0,suffix:""},{label:"Treatment Progress",value:0,suffix:"%"},{label:"Inherent Risks",value:0,suffix:"",hasChart:!0,chartData:[0,0,0,0]},{label:"Residual Risks",value:0,suffix:"",hasChart:!0,chartData:[0,0,0,0]}];constructor(){Ji(()=>{let n=this.dataService.risksLoaded(),t=this.dataService.treatmentsLoaded();(n||t)&&(this.updateStats(),this.updateCharts())})}ngOnInit(){this.updateStats()}ngAfterViewInit(){this.createInherentRisksChart(),this.createResidualRisksChart()}updateStats(){this.stats[0].value=this.calculateTotalRisks(),this.stats[1].value=this.calculateRiskExposure(),this.stats[2].value=this.calculateTreatmentActivities(),this.stats[3].value=this.calculateTreatmentProgress();let n=this.calculateInherentRisksData();this.stats[4].value=n.total,this.stats[4].chartData=n.chartData;let t=this.calculateResidualRisksData();this.stats[5].value=t.total,this.stats[5].chartData=t.chartData}updateCharts(){if(this.inherentRisksChart){let n=this.stats[4].chartData||[];this.inherentRisksChart.data.datasets[0].data=[n[0],n[1],n[2]],this.inherentRisksChart.update()}if(this.residualRisksChart){let n=this.stats[5].chartData||[];this.residualRisksChart.data.datasets[0].data=[n[0],n[1],n[2]],this.residualRisksChart.update()}}calculateTotalRisks(){return this.dataService.risks().length}calculateRiskExposure(){let n=this.dataService.risks();return""}calculateTreatmentActivities(){return this.dataService.treatments().length}calculateTreatmentProgress(){let n=this.dataService.treatments();return 62}calculateInherentRisksData(){let n=this.dataService.risks(),t=0,i=0,s=0;t=9,i=3,s=13;let a=t+i+s;return{total:a,chartData:[t,i,s,a]}}calculateResidualRisksData(){let n=this.dataService.risks(),t=0,i=0,s=0;t=19,i=11,s=11;let a=t+i+s;return{total:a,chartData:[t,i,s,a]}}createInherentRisksChart(){let n=this.inherentRisksCanvas.nativeElement.getContext("2d");if(!n)return;let t=this.stats[4].chartData||[],i={type:"doughnut",data:{labels:["High","Medium","Low"],datasets:[{data:[t[0],t[1],t[2]],backgroundColor:["#e53935","#fdd835","#fb8c00"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"70%",plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"rgba(255, 255, 255, 0.2)",borderWidth:1,padding:10,displayColors:!0,boxPadding:5}}}};this.inherentRisksChart=new $i(n,i)}createResidualRisksChart(){let n=this.residualRisksCanvas.nativeElement.getContext("2d");if(!n)return;let t=this.stats[5].chartData||[],i={type:"doughnut",data:{labels:["High","Medium","Low"],datasets:[{data:[t[0],t[1],t[2]],backgroundColor:["#e53935","#fdd835","#66bb6a"],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!0,cutout:"70%",plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"rgba(255, 255, 255, 0.2)",borderWidth:1,padding:10,displayColors:!0,boxPadding:5}}}};this.residualRisksChart=new $i(n,i)}ngOnDestroy(){this.inherentRisksChart&&this.inherentRisksChart.destroy(),this.residualRisksChart&&this.residualRisksChart.destroy()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=nt({type:e,selectors:[["app-risk-stats"]],viewQuery:function(t,i){if(t&1&&Nt(Hu,5)(ju,5),t&2){let s;L(s=F())&&(i.inherentRisksCanvas=s.first),L(s=F())&&(i.residualRisksCanvas=s.first)}},decls:3,vars:0,consts:[["inherentRisksChart",""],["residualRisksChart",""],[1,"risk-stats-container"],[1,"stat-cell"],[1,"stat-label"],[1,"chart-container"],[1,"stat-value"],[1,"chart-center-value"],[1,"stat-suffix"]],template:function(t,i){t&1&&(Q(0,"div",2),It(1,qu,5,2,"div",3,Wu),it()),t&2&&(S(),Rt(i.stats))},dependencies:[ho],styles:[".risk-stats-container[_ngcontent-%COMP%]{display:flex;gap:20px;margin-bottom:20px;background:#fff;padding:0}.stat-cell[_ngcontent-%COMP%]{flex:1;padding:30px 20px;background:#fff;border-right:1px solid #e0e0e0;text-align:center;min-width:0}.stat-cell[_ngcontent-%COMP%]:last-child{border-right:none}.stat-label[_ngcontent-%COMP%]{font-size:14px;color:#666;margin-bottom:10px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.stat-value[_ngcontent-%COMP%]{font-size:48px;font-weight:300;color:#333;line-height:1}.stat-suffix[_ngcontent-%COMP%]{font-size:18px;color:#666;margin-left:4px;font-weight:400}.chart-container[_ngcontent-%COMP%]{position:relative;width:120px;height:120px;margin:0 auto;z-index:1}.chart-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important;position:relative;z-index:2}.chart-center-value[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:36px;font-weight:300;color:#333;pointer-events:none;z-index:1}"]})};var Ku=["*"];function Xu(e,n){e&1&&ot(0)}var ja=(()=>{class e{_elementRef=I(At);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return e})(),Wa=(()=>{class e{template=I(Qe);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","cdkStepLabel",""]]})}return e})();var je={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},Zu=new Bt("STEPPER_GLOBAL_OPTIONS"),ps=(()=>{class e{_stepperOptions;_stepper=I(bi);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(t){this._interacted.set(t)}_interacted=kt(!1);interactedStream=new St;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(t){this._state.set(t)}_state=kt(void 0);get editable(){return this._editable()}set editable(t){this._editable.set(t)}_editable=kt(!0);optional=!1;get completed(){let t=this._completedOverride(),i=this._interacted();return t??(i&&(!this.stepControl||this.stepControl.valid))}set completed(t){this._completedOverride.set(t)}_completedOverride=kt(null);index=kt(-1);isSelected=on(()=>this._stepper.selectedIndex===this.index());indicatorType=on(()=>{let t=this.isSelected(),i=this.completed,s=this._state()??je.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!t?je.ERROR:this._displayDefaultIndicatorType?!i||t?je.NUMBER:a?je.EDIT:je.DONE:i&&!t?je.DONE:i&&t?s:a&&t?je.EDIT:s});isNavigable=on(()=>{let t=this.isSelected();return this.completed||t||!this._stepper.linear});get hasError(){let t=this._customError();return t??this._getDefaultError()}set hasError(t){this._customError.set(t)}_customError=kt(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let t=I(Zu,{optional:!0});this._stepperOptions=t||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(t=>t.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=nt({type:e,selectors:[["cdk-step"]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Wa,5)(a,Io,5),i&2){let o;L(o=F())&&(s.stepLabel=o.first),L(o=F())&&(s._childForms=o)}},viewQuery:function(i,s){if(i&1&&Nt(Qe,7),i&2){let a;L(a=F())&&(s.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",pt],optional:[2,"optional","optional",pt],completed:[2,"completed","completed",pt],hasError:[2,"hasError","hasError",pt]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[tn],ngContentSelectors:Ku,decls:1,vars:0,template:function(i,s){i&1&&(Lt(),so(0,Xu,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return e})(),bi=(()=>{class e{_dir=I(cn,{optional:!0});_changeDetectorRef=I(me);_elementRef=I(At);_destroyed=new ie;_keyManager;_steps;steps=new Ie;_stepHeader;_sortedHeaders=new Ie;get linear(){return this._linear()}set linear(t){this._linear.set(t)}_linear=kt(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(t){this._steps?(this._isValidIndex(t),this.selectedIndex!==t&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(t)&&(t>=this.selectedIndex||this.steps.toArray()[t].editable)&&this._updateSelectedItemIndex(t))):this._selectedIndex.set(t)}_selectedIndex=kt(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(t){this.selectedIndex=t&&this.steps?this.steps.toArray().indexOf(t):-1}selectionChange=new St;selectedIndexChange=new St;_groupId=I(mn).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(t){this._orientation=t,this._keyManager&&this._keyManager.withVerticalOrientation(t==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(zt(this._steps),yt(this._destroyed)).subscribe(t=>{this.steps.reset(t.filter(i=>i._stepper===this)),this.steps.forEach((i,s)=>i.index.set(s)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(zt(this._stepHeader),yt(this._destroyed)).subscribe(t=>{this._sortedHeaders.reset(t.toArray().sort((i,s)=>i._elementRef.nativeElement.compareDocumentPosition(s._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new hn(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Ja()).pipe(zt(this._layoutDirection()),yt(this._destroyed)).subscribe(t=>this._keyManager?.withHorizontalOrientation(t)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let t=this.steps.toArray().slice(0,this._selectedIndex());for(let i of t)i._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(t=>t.reset()),this._stateChanged()}_getStepLabelId(t){return`${this._groupId}-label-${t}`}_getStepContentId(t){return`${this._groupId}-content-${t}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(t){let i=t-this._selectedIndex();return i<0?this._layoutDirection()==="rtl"?"next":"previous":i>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(t){let i=this.steps.toArray(),s=this._selectedIndex();this.selectionChange.emit({selectedIndex:t,previouslySelectedIndex:s,selectedStep:i[t],previouslySelectedStep:i[s]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(t):this._keyManager.updateActiveItem(t)),this._selectedIndex.set(t),this.selectedIndexChange.emit(t),this._stateChanged()}_onKeydown(t){let i=_o(t),s=t.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!i&&(s===32||s===13)?(this.selectedIndex=a.activeItemIndex,t.preventDefault()):a?.setFocusOrigin("keyboard").onKeydown(t)}_anyControlsInvalidOrPending(t){return this.linear&&t>=0?this.steps.toArray().slice(0,t).some(i=>{let s=i.stepControl;return(s?s.invalid||s.pending||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let t=this._elementRef.nativeElement,i=xs();return t===i||t.contains(i)}_isValidIndex(t){return t>-1&&(!this.steps||t<this.steps.length)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","cdkStepper",""]],contentQueries:function(i,s,a){if(i&1&&Ft(a,ps,5)(a,ja,5),i&2){let o;L(o=F())&&(s._steps=o),L(o=F())&&(s._stepHeader=o)}},inputs:{linear:[2,"linear","linear",pt],selectedIndex:[2,"selectedIndex","selectedIndex",wi],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return e})(),yl=(()=>{class e{_stepper=I(bi);type="submit";constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["button","cdkStepperNext",""]],hostVars:1,hostBindings:function(i,s){i&1&&H("click",function(){return s._stepper.next()}),i&2&&qt("type",s.type)},inputs:{type:"type"}})}return e})(),kl=(()=>{class e{_stepper=I(bi);type="button";constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["button","cdkStepperPrevious",""]],hostVars:1,hostBindings:function(i,s){i&1&&H("click",function(){return s._stepper.previous()}),i&2&&qt("type",s.type)},inputs:{type:"type"}})}return e})(),wl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Ut({type:e});static \u0275inj=Gt({imports:[Yt]})}return e})();var Ju=(e,n,t)=>({index:e,active:n,optional:t});function tf(e,n){if(e&1&&Qt(0,2),e&2){let t=E();V("ngTemplateOutlet",t.iconOverrides[t.state])("ngTemplateOutletContext",ro(2,Ju,t.index,t.active,t.optional))}}function ef(e,n){if(e&1&&(v(0,"span",7),w(1),y()),e&2){let t=E(2);S(),X(t._getDefaultTextForState(t.state))}}function nf(e,n){if(e&1&&(v(0,"span",8),w(1),y()),e&2){let t=E(3);S(),X(t._intl.completedLabel)}}function sf(e,n){if(e&1&&(v(0,"span",8),w(1),y()),e&2){let t=E(3);S(),X(t._intl.editableLabel)}}function af(e,n){if(e&1&&(W(0,nf,2,1,"span",8)(1,sf,2,1,"span",8),v(2,"mat-icon",7),w(3),y()),e&2){let t=E(2);$(t.state==="done"?0:t.state==="edit"?1:-1),S(3),X(t._getDefaultTextForState(t.state))}}function of(e,n){if(e&1&&W(0,ef,2,1,"span",7)(1,af,4,2),e&2){let t,i=E();$((t=i.state)==="number"?0:1)}}function rf(e,n){e&1&&(v(0,"div",4),Qt(1,9),y()),e&2&&(S(),V("ngTemplateOutlet",n.template))}function cf(e,n){if(e&1&&(v(0,"div",4),w(1),y()),e&2){let t=E();S(),X(t.label)}}function lf(e,n){if(e&1&&(v(0,"div",5),w(1),y()),e&2){let t=E();S(),X(t._intl.optionalLabel)}}function df(e,n){if(e&1&&(v(0,"div",6),w(1),y()),e&2){let t=E();S(),X(t.errorMessage)}}var Cl=["*"];function hf(e,n){}function mf(e,n){if(e&1&&(ot(0),ft(1,hf,0,0,"ng-template",0)),e&2){let t=E();S(),V("cdkPortalOutlet",t._portal)}}var pf=["animatedContainer"],Ml=e=>({steps:e}),Sl=e=>({step:e});function uf(e,n){e&1&&ot(0)}function ff(e,n){if(e&1&&(v(0,"div",5),Qt(1,9)(2,6),y()),e&2){let t=E(2),i=Ye(6);S(),V("ngTemplateOutlet",t.headerPrefix()),S(),V("ngTemplateOutlet",i)("ngTemplateOutletContext",ki(3,Ml,t.steps))}}function gf(e,n){if(e&1&&Qt(0,6),e&2){let t=E(2),i=Ye(6);V("ngTemplateOutlet",i)("ngTemplateOutletContext",ki(2,Ml,t.steps))}}function _f(e,n){if(e&1&&(v(0,"div",10,2),Qt(2,9),y()),e&2){let t=n.$implicit,i=n.$index,s=E(2);Ke("mat-horizontal-stepper-content-"+s._getAnimationDirection(i)),V("id",s._getStepContentId(i)),et("aria-labelledby",s._getStepLabelId(i))("inert",s.selectedIndex===i?null:""),S(2),V("ngTemplateOutlet",t.content)}}function bf(e,n){if(e&1&&(v(0,"div",3),W(1,ff,3,5,"div",5)(2,gf,1,4,"ng-container",6),v(3,"div",7),It(4,_f,3,6,"div",8,nn),y()()),e&2){let t=E();S(),$(t.headerPrefix()?1:2),S(3),Rt(t.steps)}}function vf(e,n){if(e&1&&Qt(0,9),e&2){let t=E(2);V("ngTemplateOutlet",t.headerPrefix())}}function xf(e,n){if(e&1&&(v(0,"div",11),Qt(1,6),v(2,"div",12,2)(4,"div",13)(5,"div",14),Qt(6,9),y()()()()),e&2){let t=n.$implicit,i=n.$index,s=n.$index,a=n.$count,o=E(2),r=Ye(4);S(),V("ngTemplateOutlet",r)("ngTemplateOutletContext",ki(11,Sl,t)),S(),ht("mat-stepper-vertical-line",s!==a-1)("mat-vertical-content-container-active",o.selectedIndex===i),et("inert",o.selectedIndex===i?null:"")("aria-label",o.ariaLabel),S(2),V("id",o._getStepContentId(i)),et("aria-labelledby",o._getStepLabelId(i)),S(2),V("ngTemplateOutlet",t.content)}}function yf(e,n){if(e&1&&(v(0,"div",4),W(1,vf,1,1,"ng-container",9),It(2,xf,7,13,"div",11,nn),y()),e&2){let t=E();S(),$(t.headerPrefix()?1:-1),S(),Rt(t.steps)}}function kf(e,n){if(e&1){let t=Ct();v(0,"mat-step-header",15),H("click",function(){let s=lt(t).step;return dt(s.select())})("keydown",function(s){lt(t);let a=E();return dt(a._onKeydown(s))}),y()}if(e&2){let t=n.step,i=E();ht("mat-horizontal-stepper-header",i.orientation==="horizontal")("mat-vertical-stepper-header",i.orientation==="vertical"),V("tabIndex",i._getFocusIndex()===t.index()?0:-1)("id",i._getStepLabelId(t.index()))("index",t.index())("state",t.indicatorType())("label",t.stepLabel||t.label)("selected",t.isSelected())("active",t.isNavigable())("optional",t.optional)("errorMessage",t.errorMessage)("iconOverrides",i._iconOverrides)("disableRipple",i.disableRipple||!t.isNavigable())("color",t.color||i.color),et("role",i.orientation==="horizontal"?"tab":"button")("aria-posinset",i.orientation==="horizontal"?t.index()+1:null)("aria-setsize",i.orientation==="horizontal"?i.steps.length:null)("aria-selected",i.orientation==="horizontal"?t.isSelected():null)("aria-current",i.orientation==="vertical"&&t.isSelected()?"step":null)("aria-disabled",i.orientation==="vertical"&&t.isSelected()?"true":null)("aria-expanded",i.orientation==="vertical"?t.isSelected():null)("aria-controls",i._getStepContentId(t.index()))("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null)("aria-disabled",t.isNavigable()?null:!0)}}function wf(e,n){e&1&&st(0,"div",17)}function Cf(e,n){if(e&1&&(Qt(0,6),W(1,wf,1,0,"div",17)),e&2){let t=n.$implicit,i=n.$index,s=n.$count;E(2);let a=Ye(4);V("ngTemplateOutlet",a)("ngTemplateOutletContext",ki(3,Sl,t)),S(),$(i!==s-1?1:-1)}}function Mf(e,n){if(e&1&&(v(0,"div",16),It(1,Cf,2,5,null,null,nn),y()),e&2){let t=n.steps,i=E();et("aria-label",i.ariaLabel),S(),Rt(t)}}var Gi=(()=>{class e extends Wa{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["","matStepLabel",""]],features:[wt]})}return e})(),Sf=(()=>{class e{changes=new ie;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(i){return new(i||e)};static \u0275prov=eo({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),$a=(()=>{class e extends ja{_intl=I(Sf);_focusMonitor=I(dn);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let t=I(Oe);t.load(Pe),t.load(rn);let i=I(me);this._intlSubscription=this._intl.changes.subscribe(()=>i.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,i){t?this._focusMonitor.focusVia(this._elementRef,t,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof Gi?null:this.label}_templateLabel(){return this.label instanceof Gi?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(t){return t=="number"?`${this.index+1}`:t=="edit"?"create":t=="error"?"warning":t}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=nt({type:e,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(i,s){i&2&&(Ke("mat-"+(s.color||"primary")),ht("mat-step-header-empty-label",s._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[wt],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(i,s){if(i&1&&(st(0,"div",0),v(1,"div")(2,"div",1),W(3,tf,1,6,"ng-container",2)(4,of,2,1),y()(),v(5,"div",3),W(6,rf,2,1,"div",4)(7,cf,2,1,"div",4),W(8,lf,2,1,"div",5),W(9,df,2,1,"div",6),y()),i&2){let a;V("matRippleTrigger",s._getHostElement())("matRippleDisabled",s.disableRipple),S(),Ke(oo("mat-step-icon-state-",s.state," mat-step-icon")),ht("mat-step-icon-selected",s.selected),S(2),$(s.iconOverrides&&s.iconOverrides[s.state]?3:4),S(2),ht("mat-step-label-active",s.active)("mat-step-label-selected",s.selected)("mat-step-label-error",s.state=="error"),S(),$((a=s._templateLabel())?6:s._stringLabel()?7:-1,a),S(2),$(s._hasOptionalLabel()?8:-1),S(),$(s._hasErrorLabel()?9:-1)}},dependencies:[vo,vs,Xe],styles:[`.mat-step-header {
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
`],encapsulation:2,changeDetection:0})}return e})(),Df=(()=>{class e{templateRef=I(Qe);name;constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return e})(),If=(()=>{class e{_template=I(Qe);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["ng-template","matStepContent",""]]})}return e})(),Ga=(()=>{class e extends ps{_errorStateMatcher=I(ii,{skipSelf:!0});_viewContainerRef=I(no);_isSelected=Ki.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Xi(()=>this._stepper.selectionChange.pipe(to(t=>t.selectedStep===this),zt(this._stepper.selected===this)))).subscribe(t=>{t&&this._lazyContent&&!this._portal&&(this._portal=new ko(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(t,i){let s=this._errorStateMatcher.isErrorState(t,i),a=!!(t&&t.invalid&&this.interacted);return s||a}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275cmp=nt({type:e,selectors:[["mat-step"]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Gi,5)(a,If,5),i&2){let o;L(o=F())&&(s.stepLabel=o.first),L(o=F())&&(s._lazyContent=o.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[se([{provide:ii,useExisting:e},{provide:ps,useExisting:e}]),wt],ngContentSelectors:Cl,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(i,s){i&1&&(Lt(),ft(0,mf,2,1,"ng-template"))},dependencies:[wo],encapsulation:2,changeDetection:0})}return e})(),Ua=(()=>{class e extends bi{_ngZone=I(Ue);_renderer=I(en);_animationsDisabled=Je();_cleanupTransition;_isAnimating=kt(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Ie;_icons;animationDone=new St;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=lo(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}_animationDuration="";_isServer=!I(ln).isBrowser;constructor(){super();let i=I(At).nativeElement.nodeName.toLowerCase();this.orientation=i==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:t,templateRef:i})=>this._iconOverrides[t]=i),this.steps.changes.pipe(yt(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(yt(this._destroyed)).subscribe(()=>{let t=this._getAnimationDuration();t==="0ms"||t==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let t=!1;this._animatedContainers.changes.pipe(zt(null),yt(this._destroyed)).subscribe(()=>queueMicrotask(()=>{t||(t=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=t=>{let i=t.target;if(!i)return;let s=this.orientation==="horizontal"&&t.propertyName==="transform"&&i.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&t.propertyName==="grid-template-rows"&&i.classList.contains("mat-vertical-content-container-active");(s||a)&&this._animatedContainers.find(r=>r.nativeElement===i)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=nt({type:e,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Ga,5)(a,Df,5),i&2){let o;L(o=F())&&(s._steps=o),L(o=F())&&(s._icons=o)}},viewQuery:function(i,s){if(i&1&&Nt($a,5)(pf,5),i&2){let a;L(a=F())&&(s._stepHeader=a),L(a=F())&&(s._animatedContainers=a)}},hostVars:14,hostBindings:function(i,s){i&2&&(sn("--mat-stepper-animation-duration",s._getAnimationDuration()),ht("mat-stepper-horizontal",s.orientation==="horizontal")("mat-stepper-vertical",s.orientation==="vertical")("mat-stepper-label-position-end",s.orientation==="horizontal"&&s.labelPosition=="end")("mat-stepper-label-position-bottom",s.orientation==="horizontal"&&s.labelPosition=="bottom")("mat-stepper-header-position-bottom",s.headerPosition==="bottom")("mat-stepper-animating",s._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[se([{provide:bi,useExisting:e}]),wt],ngContentSelectors:Cl,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(i,s){if(i&1&&(Lt(),W(0,uf,1,0),W(1,bf,6,1,"div",3)(2,yf,4,1,"div",4),ft(3,kf,1,27,"ng-template",null,0,an)(5,Mf,3,1,"ng-template",null,1,an)),i&2){let a;$(s._isServer?0:-1),S(),$((a=s.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[vs,$a],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2,changeDetection:0})}return e})(),Dl=(()=>{class e extends yl{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["button","matStepperNext",""]],hostAttrs:[1,"mat-stepper-next"],hostVars:1,hostBindings:function(i,s){i&2&&qt("type",s.type)},features:[wt]})}return e})(),Il=(()=>{class e extends kl{static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["button","matStepperPrevious",""]],hostAttrs:[1,"mat-stepper-previous"],hostVars:1,hostBindings:function(i,s){i&2&&qt("type",s.type)},features:[wt]})}return e})(),Rl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Ut({type:e});static \u0275inj=Gt({providers:[ii],imports:[Co,wl,Ze,ei,Ua,$a,Yt]})}return e})();var Al=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ll=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Ef(e,n){e&1&&(v(0,"span",3),ot(1,1),y())}function Of(e,n){e&1&&(v(0,"span",6),ot(1,2),y())}function Pf(e,n){e&1&&(v(0,"span",3),ot(1,1),v(2,"span",7),Ge(),v(3,"svg",8),st(4,"path",9),y()()())}function Tf(e,n){e&1&&(v(0,"span",6),ot(1,2),y())}var Af=`.mdc-evolution-chip,
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
`;var Fl=["*"],Lf=`.mat-mdc-chip-set {
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
`,Ya=new Bt("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),El=new Bt("MatChipAvatar"),Ol=new Bt("MatChipTrailingIcon"),Pl=new Bt("MatChipEdit"),Tl=new Bt("MatChipRemove"),Ka=new Bt("MatChip"),zl=(()=>{class e{_elementRef=I(At);_parentChip=I(Ka);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(t){this._disabled=t}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){I(Oe).load(Pe),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=tt({type:e,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,s){i&2&&(et("disabled",s._getDisabledAttribute())("aria-disabled",s.disabled),ht("mdc-evolution-chip__action--primary",s._isPrimary)("mdc-evolution-chip__action--secondary",!s._isPrimary)("mdc-evolution-chip__action--trailing",!s._isPrimary&&!s._isLeading))},inputs:{disabled:[2,"disabled","disabled",pt],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?-1:wi(t)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return e})(),Bl=(()=>{class e extends zl{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(t){!this.disabled&&this._isPrimary&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(t.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275dir=tt({type:e,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,s){i&1&&H("click",function(o){return s._handleClick(o)})("keydown",function(o){return s._handleKeydown(o)}),i&2&&(et("tabindex",s._getTabindex()),ht("mdc-evolution-chip__action--presentational",!1))},features:[wt]})}return e})();var Qa=(()=>{class e{_changeDetectorRef=I(me);_elementRef=I(At);_tagName=I(co);_ngZone=I(Ue);_focusMonitor=I(dn);_globalRippleOptions=I(pn,{optional:!0});_document=I(io);_onFocus=new ie;_onBlur=new ie;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Je();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=I(mn).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(t){this._value=t}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(t){this._disabled=t}_disabled=!1;removed=new St;destroyed=new St;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=I(xo);_injector=I(Zi);constructor(){let t=I(Oe);t.load(Pe),t.load(rn),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=yi(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(t){(t.keyCode===8&&!t.repeat||t.keyCode===46)&&(t.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(t){return this._getActions().find(i=>{let s=i._elementRef.nativeElement;return s===t||s.contains(t)})}_getActions(){let t=[];return this.editIcon&&t.push(this.editIcon),this.primaryAction&&t.push(this.primaryAction),this.removeIcon&&t.push(this.removeIcon),t}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(t){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>{let i=t!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=nt({type:e,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,s,a){if(i&1&&Ft(a,El,5)(a,Pl,5)(a,Ol,5)(a,Tl,5)(a,El,5)(a,Ol,5)(a,Pl,5)(a,Tl,5),i&2){let o;L(o=F())&&(s.leadingIcon=o.first),L(o=F())&&(s.editIcon=o.first),L(o=F())&&(s.trailingIcon=o.first),L(o=F())&&(s.removeIcon=o.first),L(o=F())&&(s._allLeadingIcons=o),L(o=F())&&(s._allTrailingIcons=o),L(o=F())&&(s._allEditIcons=o),L(o=F())&&(s._allRemoveIcons=o)}},viewQuery:function(i,s){if(i&1&&Nt(Bl,5),i&2){let a;L(a=F())&&(s.primaryAction=a.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,s){i&1&&H("keydown",function(o){return s._handleKeydown(o)}),i&2&&(qt("id",s.id),et("role",s.role)("aria-label",s.ariaLabel),Ke("mat-"+(s.color||"primary")),ht("mdc-evolution-chip",!s._isBasicChip)("mdc-evolution-chip--disabled",s.disabled)("mdc-evolution-chip--with-trailing-action",s._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",s.leadingIcon)("mdc-evolution-chip--with-primary-icon",s.leadingIcon)("mdc-evolution-chip--with-avatar",s.leadingIcon)("mat-mdc-chip-with-avatar",s.leadingIcon)("mat-mdc-chip-highlighted",s.highlighted)("mat-mdc-chip-disabled",s.disabled)("mat-mdc-basic-chip",s._isBasicChip)("mat-mdc-standard-chip",!s._isBasicChip)("mat-mdc-chip-with-trailing-icon",s._hasTrailingIcon())("_mat-animation-noopable",s._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",pt],highlighted:[2,"highlighted","highlighted",pt],disableRipple:[2,"disableRipple","disableRipple",pt],disabled:[2,"disabled","disabled",pt]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[se([{provide:Ka,useExisting:e}])],ngContentSelectors:Ll,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,s){i&1&&(Lt(Al),st(0,"span",0),v(1,"span",1)(2,"span",2),W(3,Ef,2,0,"span",3),v(4,"span",4),ot(5),st(6,"span",5),y()()(),W(7,Of,2,0,"span",6)),i&2&&(S(3),$(s.leadingIcon?3:-1),S(4),$(s._hasTrailingIcon()?7:-1))},dependencies:[zl],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return e})();var Xa=(()=>{class e extends Qa{_defaultOptions=I(Ya,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(t){this._selectable=t,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(t){this._setSelectedState(t,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new St;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(t=!1){return this._setSelectedState(!this.selected,t,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(t,i,s){t!==this.selected&&(this._selected=t,s&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275cmp=nt({type:e,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,s){i&2&&(qt("id",s.id),et("tabindex",null)("aria-label",null)("aria-description",null)("role",s.role),ht("mdc-evolution-chip",!s._isBasicChip)("mdc-evolution-chip--filter",!s._isBasicChip)("mdc-evolution-chip--selectable",!s._isBasicChip)("mat-mdc-chip-selected",s.selected)("mat-mdc-chip-multiple",s._chipListMultiple)("mat-mdc-chip-disabled",s.disabled)("mat-mdc-chip-with-avatar",s.leadingIcon)("mdc-evolution-chip--disabled",s.disabled)("mdc-evolution-chip--selected",s.selected)("mdc-evolution-chip--selecting",!s._animationsDisabled)("mdc-evolution-chip--with-trailing-action",s._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",s.leadingIcon)("mdc-evolution-chip--with-primary-graphic",s._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",s.leadingIcon)("mat-mdc-chip-highlighted",s.highlighted)("mat-mdc-chip-with-trailing-icon",s._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",pt],selected:[2,"selected","selected",pt]},outputs:{selectionChange:"selectionChange"},features:[se([{provide:Qa,useExisting:e},{provide:Ka,useExisting:e}]),wt],ngContentSelectors:Ll,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,s){i&1&&(Lt(Al),st(0,"span",0),v(1,"span",1)(2,"button",2),W(3,Pf,5,0,"span",3),v(4,"span",4),ot(5),st(6,"span",5),y()()(),W(7,Tf,2,0,"span",6)),i&2&&(S(2),V("_allowFocusWhenDisabled",!0),et("aria-description",s.ariaDescription)("aria-label",s.ariaLabel)("aria-selected",s.ariaSelected),S(),$(s._hasLeadingGraphic()?3:-1),S(4),$(s._hasTrailingIcon()?7:-1))},dependencies:[Bl],styles:[Af],encapsulation:2,changeDetection:0})}return e})();var Ff=(()=>{class e{_elementRef=I(At);_changeDetectorRef=I(me);_dir=I(cn,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new ie;_defaultRole="presentation";get chipFocusChanges(){return this._getChipStream(t=>t._onFocus)}get chipDestroyedChanges(){return this._getChipStream(t=>t.destroyed)}get chipRemovedChanges(){return this._getChipStream(t=>t.removed)}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(t){this._explicitRole=t}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Ie;constructor(){}ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(t=>t._hasFocus())}_syncChipsState(){this._chips?.forEach(t=>{t._chipListDisabled=this._disabled,t._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(t){this._originatesFromChip(t)&&this._keyManager.onKeydown(t)}_isValidIndex(t){return t>=0&&t<this._chips.length}_allowFocusEscape(){let t=this._elementRef.nativeElement.tabIndex;t!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=t))}_getChipStream(t){return this._chips.changes.pipe(zt(null),Xi(()=>yi(...this._chips.map(t))))}_originatesFromChip(t){let i=t.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains("mat-mdc-chip"))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(zt(this._chips)).subscribe(t=>{let i=[];t.forEach(s=>s._getActions().forEach(a=>i.push(a))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new hn(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:"ltr").withHomeAndEnd().skipPredicate(t=>this._skipPredicate(t)),this.chipFocusChanges.pipe(yt(this._destroyed)).subscribe(({chip:t})=>{let i=t._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(yt(this._destroyed)).subscribe(t=>this._keyManager.withHorizontalOrientation(t))}_skipPredicate(t){return t.disabled}_trackChipSetChanges(){this._chips.changes.pipe(zt(null),yt(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(yt(this._destroyed)).subscribe(t=>{let s=this._chips.toArray().indexOf(t.chip),a=t.chip._hasFocus(),o=t.chip._hadFocusOnRemove&&this._keyManager.activeItem&&t.chip._getActions().includes(this._keyManager.activeItem),r=a||o;this._isValidIndex(s)&&r&&(this._lastDestroyedFocusedChipIndex=s)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let t=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[t];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=nt({type:e,selectors:[["mat-chip-set"]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Qa,5),i&2){let o;L(o=F())&&(s._chips=o)}},hostAttrs:[1,"mat-mdc-chip-set","mdc-evolution-chip-set"],hostVars:1,hostBindings:function(i,s){i&1&&H("keydown",function(o){return s._handleKeydown(o)}),i&2&&et("role",s.role)},inputs:{disabled:[2,"disabled","disabled",pt],role:"role",tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:wi(t)]},ngContentSelectors:Fl,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,s){i&1&&(Lt(),Q(0,"div",0),ot(1),it())},styles:[`.mat-mdc-chip-set {
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
`],encapsulation:2,changeDetection:0})}return e})(),qa=class{source;value;constructor(n,t){this.source=n,this.value=t}},zf={provide:Do,useExisting:fs(()=>Za),multi:!0},Za=(()=>{class e extends Ff{_onTouched=()=>{};_onChange=()=>{};_defaultRole="listbox";_defaultOptions=I(Ya,{optional:!0});get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._syncListboxProperties()}_multiple=!1;get selected(){let t=this._chips.toArray().filter(i=>i.selected);return this.multiple?t:t[0]}ariaOrientation="horizontal";get selectable(){return this._selectable}set selectable(t){this._selectable=t,this._syncListboxProperties()}_selectable=!0;compareWith=(t,i)=>t===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(t=>t.selectionChange)}get chipBlurChanges(){return this._getChipStream(t=>t._onBlur)}get value(){return this._value}set value(t){this._chips&&this._chips.length&&this._setSelectionByValue(t,!1),this._value=t}_value;change=new St;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(zt(null),yt(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(yt(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(yt(this._destroyed)).subscribe(t=>{this.multiple||this._chips.forEach(i=>{i!==t.source&&i._setSelectedState(!1,!1,!1)}),t.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let t=this._getFirstSelectedChip();t&&!t.disabled?t.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(t){t!=null?this.value=t:this.value=void 0}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_setSelectionByValue(t,i=!0){this._clearSelection(),Array.isArray(t)?t.forEach(s=>this._selectValue(s,i)):this._selectValue(t,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(t){t.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let t=null;Array.isArray(this.selected)?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:void 0,this._value=t,this.change.emit(new qa(this,t)),this._onChange(t),this._changeDetectorRef.markForCheck()}_clearSelection(t){this._chips.forEach(i=>{i!==t&&i.deselect()})}_selectValue(t,i){let s=this._chips.find(a=>a.value!=null&&this.compareWith(a.value,t));return s&&(i?s.selectViaInteraction():s.select()),s}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(t=>{t._chipListMultiple=this.multiple,t.chipListSelectable=this._selectable,t._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,t._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(t){return!1}static \u0275fac=(()=>{let t;return function(s){return(t||(t=Dt(e)))(s||e)}})();static \u0275cmp=nt({type:e,selectors:[["mat-chip-listbox"]],contentQueries:function(i,s,a){if(i&1&&Ft(a,Xa,5),i&2){let o;L(o=F())&&(s._chips=o)}},hostAttrs:[1,"mdc-evolution-chip-set","mat-mdc-chip-listbox"],hostVars:10,hostBindings:function(i,s){i&1&&H("focus",function(){return s.focus()})("blur",function(){return s._blur()})("keydown",function(o){return s._keydown(o)}),i&2&&(qt("tabIndex",s.disabled||s.empty?-1:s.tabIndex),et("role",s.role)("aria-required",s.role?s.required:null)("aria-disabled",s.disabled.toString())("aria-multiselectable",s.multiple)("aria-orientation",s.ariaOrientation),ht("mat-mdc-chip-list-disabled",s.disabled)("mat-mdc-chip-list-required",s.required))},inputs:{multiple:[2,"multiple","multiple",pt],ariaOrientation:[0,"aria-orientation","ariaOrientation"],selectable:[2,"selectable","selectable",pt],compareWith:"compareWith",required:[2,"required","required",pt],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",pt],value:"value"},outputs:{change:"change"},features:[se([zf]),wt],ngContentSelectors:Fl,decls:2,vars:0,consts:[["role","presentation",1,"mdc-evolution-chip-set__chips"]],template:function(i,s){i&1&&(Lt(),Q(0,"div",0),ot(1),it())},styles:[Lf],encapsulation:2,changeDetection:0})}return e})();var Nl=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Ut({type:e});static \u0275inj=Gt({providers:[ii,{provide:Ya,useValue:{separatorKeyCodes:[13]}}],imports:[ei,Yt]})}return e})();var Uf=(e,n)=>n.value,Vl=(e,n)=>n.Id;function Qf(e,n){e&1&&w(0,"Choose Associated Objective")}function qf(e,n){if(e&1){let t=Ct();v(0,"mat-chip-option",27),H("click",function(){let s=lt(t).$implicit,a=E();return dt(a.onDivisionSelect(s.value))}),w(1),y()}if(e&2){let t=n.$implicit,i=E();V("value",t.value)("selected",i.isDivisionSelected(t.value)),S(),ne(" ",t.label," ")}}function Yf(e,n){if(e&1&&(v(0,"mat-option",23),w(1),y()),e&2){let t=n.$implicit;V("value",t.Id),S(),ne(" ",t.Title," ")}}function Kf(e,n){if(e&1){let t=Ct();v(0,"mat-form-field",14)(1,"mat-label"),w(2,"Select Objective"),y(),v(3,"mat-select",28),H("selectionChange",function(s){lt(t);let a=E();return dt(a.onObjectiveSelect(s.value))}),It(4,Yf,2,2,"mat-option",23,Vl),y()()}if(e&2){let t=E();S(4),Rt(t.filteredObjectives)}}function Xf(e,n){e&1&&w(0,"Fill in Risk Details")}function Zf(e,n){e&1&&w(0,"Assign Owner")}function Jf(e,n){if(e&1&&(v(0,"mat-option",23),w(1),y()),e&2){let t=n.$implicit;V("value",t.Id),S(),ne(" ",t.Title," ")}}function tg(e,n){e&1&&w(0,"Verify Risk Data")}var us=class e{logger=I(ni);dialogRef=I(Mo);formBuilder=I(Ao);dataService=I(pe);objectiveFormGroup;riskFormGroup;ownerFormGroup;divisions=[{value:"NAPMO",label:"NAPMO"},{value:"FN",label:"Finance Office"},{value:"HRGS",label:"HR&GS"},{value:"IKM",label:"IKM"},{value:"SEC",label:"Security Office"},{value:"EN",label:"Engineer's Office"},{value:"PM",label:"PM Division"},{value:"PS",label:"PS Division"}];selectedDivision="";filteredObjectives=[];allObjectives=[];selectedObjective=null;siteUsers=[];selectedOwner=null;constructor(){this.objectiveFormGroup=this.formBuilder.group({divisionCtrl:["",Te.required],objectiveCtrl:["",Te.required]}),this.riskFormGroup=this.formBuilder.group({titleCtrl:["",Te.required],descriptionCtrl:["",Te.required]}),this.ownerFormGroup=this.formBuilder.group({ownerCtrl:["",Te.required]})}async ngOnInit(){try{this.allObjectives=this.dataService.objectives(),this.logger.debugLog("Loaded objectives for risk dialog",{count:this.allObjectives.length}),this.siteUsers=await this.loadSiteUsers(),this.logger.debugLog("Loaded site users for risk dialog",{count:this.siteUsers.length})}catch(n){this.logger.debugLog("Failed to load data",n)}}loadSiteUsers=async()=>{let n=this.dataService.siteUsers(),t=[];for(let i=0;i<n.length;i++){let s=n[i];s.PrincipalType===1&&s.Email&&!s.IsHiddenInUI&&t.push(s)}return t};onDivisionSelect=n=>{this.selectedDivision=n,this.objectiveFormGroup.patchValue({divisionCtrl:n}),this.filteredObjectives=[];for(let t=0;t<this.allObjectives.length;t++)this.allObjectives[t].OrgDivision===n&&this.filteredObjectives.push(this.allObjectives[t]);this.logger.debugLog("Division selected",{division:n,objectiveCount:this.filteredObjectives.length}),this.objectiveFormGroup.patchValue({objectiveCtrl:""}),this.selectedObjective=null};isDivisionSelected=n=>this.selectedDivision===n;onObjectiveSelect=n=>{for(let t=0;t<this.filteredObjectives.length;t++)if(this.filteredObjectives[t].Id===n){this.selectedObjective=this.filteredObjectives[t];break}this.logger.debugLog("Objective selected",{objectiveId:n,objective:this.selectedObjective})};onOwnerSelect=n=>{for(let t=0;t<this.siteUsers.length;t++)if(this.siteUsers[t].Id===n){this.selectedOwner=this.siteUsers[t];break}this.logger.debugLog("Owner selected",{ownerId:n,owner:this.selectedOwner})};getSelectedDivisionLabel=()=>{for(let n=0;n<this.divisions.length;n++)if(this.divisions[n].value===this.selectedDivision)return this.divisions[n].label;return""};onSave=async()=>{if(!this.objectiveFormGroup.valid||!this.riskFormGroup.valid||!this.ownerFormGroup.valid){this.logger.debugLog("Cannot save risk - invalid form data");return}let n={Title:this.riskFormGroup.get("titleCtrl")?.value,Description:this.riskFormGroup.get("descriptionCtrl")?.value,ParentId:this.objectiveFormGroup.get("objectiveCtrl")?.value,OwnerId:this.ownerFormGroup.get("ownerCtrl")?.value};this.logger.debugLog("Saving new risk",n),this.dialogRef.close(n)};onCancel=()=>{this.logger.debugLog("Add risk dialog cancelled"),this.dialogRef.close(null)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=nt({type:e,selectors:[["app-add-risk-dialog"]],decls:108,vars:16,consts:[["stepper",""],[1,"info-card"],["color","primary"],[1,"spacer"],["mat-button","",3,"click"],["labelPosition","bottom","linear",""],[3,"stepControl"],[3,"formGroup"],["matStepLabel",""],[1,"step-content"],[1,"division-section"],[1,"section-label"],["aria-label","Division selection","formControlName","divisionCtrl",1,"division-chips"],[3,"value","selected"],["appearance","outline",1,"objective-select"],[1,"step-actions"],["mat-raised-button","","color","primary","matStepperNext","",3,"disabled"],["appearance","outline"],["matInput","","formControlName","titleCtrl","placeholder","Enter risk title","required",""],["matInput","","formControlName","descriptionCtrl","placeholder","Enter risk description","rows","6","required",""],["mat-button","","matStepperPrevious",""],["appearance","outline",1,"owner-select"],["formControlName","ownerCtrl","required","",3,"selectionChange"],[3,"value"],[1,"verification-section"],[1,"verification-field"],["mat-raised-button","","color","primary",3,"click"],[3,"click","value","selected"],["formControlName","objectiveCtrl","required","",3,"selectionChange"]],template:function(t,i){if(t&1&&(v(0,"mat-card",1)(1,"mat-toolbar",2)(2,"span"),w(3,"ADD RISK"),y(),st(4,"span",3),v(5,"button",4),H("click",function(){return i.onCancel()}),w(6," CANCEL "),y()(),v(7,"mat-card-content")(8,"mat-stepper",5,0)(10,"mat-step",6)(11,"form",7),ft(12,Qf,1,0,"ng-template",8),v(13,"div",9)(14,"div",10)(15,"label",11),w(16,"Select Division"),y(),v(17,"mat-chip-listbox",12),It(18,qf,2,3,"mat-chip-option",13,Uf),y()(),W(20,Kf,6,0,"mat-form-field",14),v(21,"div",15)(22,"button",16),w(23," Next "),y()()()()(),v(24,"mat-step",6)(25,"form",7),ft(26,Xf,1,0,"ng-template",8),v(27,"div",9)(28,"mat-form-field",17)(29,"mat-label"),w(30,"RISK TITLE"),y(),st(31,"input",18),y(),v(32,"mat-form-field",17)(33,"mat-label"),w(34,"RISK DESCRIPTION"),y(),v(35,"textarea",19),w(36,"              "),y()(),v(37,"div",15)(38,"button",20),w(39,"Back"),y(),v(40,"button",16),w(41," Next "),y()()()()(),v(42,"mat-step",6)(43,"form",7),ft(44,Zf,1,0,"ng-template",8),v(45,"div",9)(46,"mat-form-field",21)(47,"mat-label"),w(48,"Select Risk Owner"),y(),v(49,"mat-select",22),H("selectionChange",function(a){return i.onOwnerSelect(a.value)}),It(50,Jf,2,2,"mat-option",23,Vl),y(),v(52,"mat-hint"),w(53,"Select the person responsible for managing this risk"),y()(),v(54,"div",15)(55,"button",20),w(56,"Back"),y(),v(57,"button",16),w(58," Next "),y()()()()(),v(59,"mat-step"),ft(60,tg,1,0,"ng-template",8),v(61,"div",9)(62,"div",24)(63,"h3"),w(64,"Associated Objective"),y(),v(65,"div",25)(66,"label"),w(67,"Division:"),y(),v(68,"span"),w(69),y()(),v(70,"div",25)(71,"label"),w(72,"Objective:"),y(),v(73,"span"),w(74),y()()(),v(75,"div",24)(76,"h3"),w(77,"Risk Details"),y(),v(78,"div",25)(79,"label"),w(80,"Title:"),y(),v(81,"span"),w(82),y()(),v(83,"div",25)(84,"label"),w(85,"Description:"),y(),v(86,"span"),w(87),y()()(),v(88,"div",24)(89,"h3"),w(90,"Risk Owner"),y(),v(91,"div",25)(92,"label"),w(93,"Owner:"),y(),v(94,"span"),w(95),y()(),v(96,"div",25)(97,"label"),w(98,"Email:"),y(),v(99,"span"),w(100),y()()(),v(101,"div",15)(102,"button",20),w(103,"Back"),y(),v(104,"button",26),H("click",function(){return i.onSave()}),v(105,"mat-icon"),w(106,"save"),y(),w(107," SAVE "),y()()()()()()()),t&2){let s,a;S(10),V("stepControl",i.objectiveFormGroup),S(),V("formGroup",i.objectiveFormGroup),S(7),Rt(i.divisions),S(2),$(i.selectedDivision?20:-1),S(2),V("disabled",!i.objectiveFormGroup.valid),S(2),V("stepControl",i.riskFormGroup),S(),V("formGroup",i.riskFormGroup),S(15),V("disabled",!i.riskFormGroup.valid),S(2),V("stepControl",i.ownerFormGroup),S(),V("formGroup",i.ownerFormGroup),S(7),Rt(i.siteUsers),S(7),V("disabled",!i.ownerFormGroup.valid),S(12),X(i.getSelectedDivisionLabel()),S(5),X((i.selectedObjective==null?null:i.selectedObjective.Title)||"Not selected"),S(8),X((s=i.riskFormGroup.get("titleCtrl"))==null?null:s.value),S(5),X((a=i.riskFormGroup.get("descriptionCtrl"))==null?null:a.value),S(8),X((i.selectedOwner==null?null:i.selectedOwner.Title)||"Not selected"),S(5),X((i.selectedOwner==null?null:i.selectedOwner.Email)||"N/A")}},dependencies:[bn,Oo,gn,_n,Ro,To,Lo,ys,Po,Mn,wn,Cn,Dn,Sn,Ze,Xe,fn,un,xn,vn,Fo,zo,kn,yn,Rl,Ga,Gi,Ua,Dl,Il,Nl,Za,Xa,tr,Jo,Zo,go],styles:["mat-card[_ngcontent-%COMP%]{padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{height:48px;font-size:14px;font-weight:500}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:16px!important}mat-stepper[_ngcontent-%COMP%]{background:transparent}.step-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;padding:20px 0;min-height:300px}.division-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.section-label[_ngcontent-%COMP%]{font-weight:500;font-size:14px;color:#0009}.division-chips[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.objective-select[_ngcontent-%COMP%], .owner-select[_ngcontent-%COMP%]{width:100%}.step-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.step-actions[_ngcontent-%COMP%]{display:flex;gap:12px;margin-top:auto;padding-top:20px}.step-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:100px}.verification-section[_ngcontent-%COMP%]{padding:16px;background-color:#f5f5f5;border-radius:4px;margin-bottom:16px}.verification-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 12px;font-size:16px;font-weight:500;color:#000000de}.verification-field[_ngcontent-%COMP%]{display:flex;gap:12px;padding:8px 0;border-bottom:1px solid rgba(0,0,0,.12)}.verification-field[_ngcontent-%COMP%]:last-child{border-bottom:none}.verification-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:500;min-width:120px;color:#0009}.verification-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;color:#000000de}"]})};var eg=(e,n)=>n.impact+"-"+n.likelihood;function ig(e,n){if(e&1){let t=Ct();Ge(),Q(0,"g",40),ao("click",function(){lt(t);let s=E().$implicit,a=E();return dt(a.onCellClick(s))}),qe(1,"circle",41),Q(2,"text",42),w(3),it()()}if(e&2){let t=E().$implicit;S(),et("cx",t.x)("cy",t.y),S(),et("x",t.x)("y",t.y),S(),X(t.count)}}function ng(e,n){if(e&1&&W(0,ig,4,5,":svg:g",39),e&2){let t=n.$implicit;$(t.count>0?0:-1)}}var Ui=class e{dataService=I(pe);logger=I(ni);MATRIX_SIZE=5;CELL_SIZE=50;MARGIN=30;cells=[];cellSelected=new St;constructor(){Ji(()=>{this.dataService.risksLoaded()&&this.buildCells()})}getCellCenterX=n=>this.MARGIN+(n-1)*this.CELL_SIZE+this.CELL_SIZE/2;getCellCenterY=n=>{let t=this.MATRIX_SIZE+1-n;return this.MARGIN+(t-1)*this.CELL_SIZE+this.CELL_SIZE/2};countRisksForCell=(n,t)=>{let i=this.dataService.risks(),s=0;for(let a=0;a<i.length;a++)i[a].InherentImpact===n&&i[a].InherentLikelihood===t&&(s=s+1);return s};buildCells=()=>{let n=[];for(let t=1;t<=this.MATRIX_SIZE;t++)for(let i=1;i<=this.MATRIX_SIZE;i++){let s={impact:i,likelihood:t,x:this.getCellCenterX(i),y:this.getCellCenterY(t),count:this.countRisksForCell(i,t)};n.push(s)}this.cells=n,this.logger.debugLog("Risk matrix summary built",{cellCount:n.length})};refreshCounts=()=>{this.buildCells()};onCellClick=n=>{this.logger.debugLog("Matrix cell clicked",{impact:n.impact,likelihood:n.likelihood,count:n.count}),this.cellSelected.emit(n)};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=nt({type:e,selectors:[["app-risk-matrix-summary"]],outputs:{cellSelected:"cellSelected"},decls:53,vars:0,consts:[[1,"risk-matrix-container"],["width","80%","height","80%","viewBox","-10 -10 330 340","xmlns","http://www.w3.org/2000/svg"],["x","30","y","30","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","80","y","30","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","130","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","180","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","230","y","30","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","80","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","80","y","80","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","130","y","80","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","180","y","80","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","230","y","80","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","130","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","130","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","130","y","130","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","180","y","130","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","230","y","130","width","50","height","50","fill","#e13838","stroke","#666","stroke-width","1"],["x","30","y","180","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","180","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","130","y","180","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","180","y","180","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","230","y","180","width","50","height","50","fill","#f98d00","stroke","#666","stroke-width","1"],["x","30","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","80","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","130","y","230","width","50","height","50","fill","#65bb6a","stroke","#666","stroke-width","1"],["x","180","y","230","width","50","height","50","fill","#fdd933","stroke","#666","stroke-width","1"],["x","230","y","230","width","50","height","50","fill","#FFD700","stroke","#666","stroke-width","1"],["x","55","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","105","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","155","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","205","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","255","y","300","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","58","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","108","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","158","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","208","text-anchor","middle","font-size","12","fill","#333"],["x","15","y","258","text-anchor","middle","font-size","12","fill","#333"],["x","155","y","320","text-anchor","middle","font-size","12","fill","#333"],["x","5","y","160","text-anchor","middle","font-size","12","fill","#333","transform","rotate(-90 5 160)"],[1,"risk-count-label"],[1,"risk-count-label",3,"click"],["r","12","fill","#000","opacity","0.75"],["text-anchor","middle","dominant-baseline","middle","font-size","12","font-weight","600","font-family","Roboto, sans-serif","fill","#fff"]],template:function(t,i){t&1&&(Q(0,"div",0),Ge(),Q(1,"svg",1),qe(2,"rect",2)(3,"rect",3)(4,"rect",4)(5,"rect",5)(6,"rect",6)(7,"rect",7)(8,"rect",8)(9,"rect",9)(10,"rect",10)(11,"rect",11)(12,"rect",12)(13,"rect",13)(14,"rect",14)(15,"rect",15)(16,"rect",16)(17,"rect",17)(18,"rect",18)(19,"rect",19)(20,"rect",20)(21,"rect",21)(22,"rect",22)(23,"rect",23)(24,"rect",24)(25,"rect",25)(26,"rect",26),Q(27,"text",27),w(28,"1"),it(),Q(29,"text",28),w(30,"2"),it(),Q(31,"text",29),w(32,"3"),it(),Q(33,"text",30),w(34,"4"),it(),Q(35,"text",31),w(36,"5"),it(),Q(37,"text",32),w(38,"5"),it(),Q(39,"text",33),w(40,"4"),it(),Q(41,"text",34),w(42,"3"),it(),Q(43,"text",35),w(44,"2"),it(),Q(45,"text",36),w(46,"1"),it(),Q(47,"text",37),w(48,"Impact"),it(),Q(49,"text",38),w(50,"Likelihood"),it(),It(51,ng,1,1,null,null,eg),it()()),t&2&&(S(51),Rt(i.cells))},styles:[".risk-matrix-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:16px}svg[_ngcontent-%COMP%]{max-width:100%;height:auto}.risk-count-label[_ngcontent-%COMP%]{cursor:pointer}"]})};var sg=(e,n)=>n.FileRef;function ag(e,n){e&1&&st(0,"mat-progress-bar",0)}function og(e,n){if(e&1){let t=Ct();v(0,"button",34),H("click",function(){lt(t);let s=E();return dt(s.clearFilter())}),v(1,"mat-icon"),w(2,"filter_alt_off"),y()()}}function rg(e,n){e&1&&(v(0,"th",35),w(1," ID "),y())}function cg(e,n){if(e&1&&(v(0,"td",36),w(1),y()),e&2){let t=n.$implicit,i=E();S(),ne(" ",i.resolveCompositeId(t)," ")}}function lg(e,n){e&1&&(v(0,"th",35),w(1," Priority "),y())}function dg(e,n){if(e&1&&(v(0,"td",36),st(1,"span",37),y()),e&2){let t=n.$implicit,i=E();S(),sn("background-color",i.dataService.getPriorityColor(t.Priority)),et("aria-label","Priority "+(t.Priority??"not rated"))}}function hg(e,n){e&1&&(v(0,"th",35),w(1," Title "),y())}function mg(e,n){if(e&1){let t=Ct();v(0,"mat-form-field",39),H("click",function(s){lt(t);let a=E(2);return dt(a.stopPropagation(s))}),v(1,"input",40),bs("ngModelChange",function(s){lt(t);let a=E(2);return _s(a.editedTitle,s)||(a.editedTitle=s),dt(s)}),y()()}if(e&2){let t=E(2);S(),gs("ngModel",t.editedTitle)}}function pg(e,n){if(e&1&&(v(0,"span"),w(1),y()),e&2){let t=E().$implicit;S(),X(t.Title)}}function ug(e,n){if(e&1&&(v(0,"td",36),W(1,mg,2,1,"mat-form-field",38)(2,pg,2,1,"span"),y()),e&2){let t=n.$implicit,i=E();S(),$(i.isEditing(t.Id)?1:2)}}function fg(e,n){e&1&&(v(0,"th",35),w(1," Description "),y())}function gg(e,n){if(e&1){let t=Ct();v(0,"mat-form-field",39),H("click",function(s){lt(t);let a=E(2);return dt(a.stopPropagation(s))}),v(1,"textarea",42),bs("ngModelChange",function(s){lt(t);let a=E(2);return _s(a.editedDescription,s)||(a.editedDescription=s),dt(s)}),y()()}if(e&2){let t=E(2);S(),gs("ngModel",t.editedDescription)}}function _g(e,n){if(e&1&&(v(0,"span"),w(1),y()),e&2){let t=E().$implicit;S(),X(t.Description||"No description available")}}function bg(e,n){if(e&1&&(v(0,"td",41),W(1,gg,2,1,"mat-form-field",38)(2,_g,2,1,"span"),y()),e&2){let t=n.$implicit,i=E();S(),$(i.isEditing(t.Id)?1:2)}}function vg(e,n){e&1&&(v(0,"th",35),w(1," Owner "),y())}function xg(e,n){if(e&1&&(v(0,"td",36),w(1),y()),e&2){let t=n.$implicit,i=E();S(),ne(" ",i.resolveOwnerName(t.OwnerId)," ")}}function yg(e,n){e&1&&(v(0,"th",35),w(1," Actions "),y())}function kg(e,n){if(e&1){let t=Ct();v(0,"div",44)(1,"button",45),H("click",function(){lt(t);let s=E().$implicit,a=E();return dt(a.saveEdit(s))}),v(2,"mat-icon"),w(3,"save"),y()(),v(4,"button",46),H("click",function(){lt(t);let s=E(2);return dt(s.cancelEdit())}),v(5,"mat-icon"),w(6,"close"),y()()()}}function wg(e,n){if(e&1){let t=Ct();v(0,"div",44)(1,"button",47),H("click",function(){lt(t);let s=E().$implicit,a=E();return dt(a.startEdit(s))}),v(2,"mat-icon"),w(3,"edit"),y()(),v(4,"button",48),H("click",function(){lt(t);let s=E().$implicit,a=E();return dt(a.openDeleteRiskDialog(s))}),v(5,"mat-icon"),w(6,"delete"),y()()()}}function Cg(e,n){if(e&1){let t=Ct();v(0,"td",43),H("click",function(s){lt(t);let a=E();return dt(a.stopPropagation(s))}),W(1,kg,7,0,"div",44)(2,wg,7,0,"div",44),y()}if(e&2){let t=n.$implicit,i=E();S(),$(i.isEditing(t.Id)?1:2)}}function Mg(e,n){e&1&&st(0,"tr",49)}function Sg(e,n){if(e&1){let t=Ct();v(0,"tr",50),H("click",function(){let s=lt(t).$implicit,a=E();return dt(a.onRiskRowClick(s))}),y()}if(e&2){let t=n.$implicit,i=E();ht("clickable-row",!i.isEditing(t.Id))("editing-row",i.isEditing(t.Id))}}function Dg(e,n){if(e&1){let t=Ct();v(0,"mat-list-item",51),H("click",function(){let s=lt(t).$implicit,a=E();return dt(a.openDocument(s))}),v(1,"mat-icon",52),w(2,"description"),y(),v(3,"span",53),w(4),y()()}if(e&2){let t=n.$implicit;S(4),X(t.Title||t.FileLeafRef)}}function Ig(e,n){e&1&&(v(0,"mat-list-item")(1,"span",53),w(2,"No documents found"),y()())}var Hl=class e{logger=I(ni);router=I(mo);dialog=I(So);dataService=I(pe);riskMatrixSummary;isLoading=kt(!1);displayedColumns=["Id","Priority","Title","Description","Owner","Actions"];allRisks=[];dataSource=[];activeFilter=null;supportingDocumentsFolderKey="supportingDocuments";supportingDocumentsLibraryUrl="https://collab.napma.nato.int/grc/GRCDocuments/Forms/AllItems.aspx?RootFolder=%2Fgrc%2FGRCDocuments%2FSupporting%20Documents&FolderCTID=0x012000563BB3C5BA587F428A451EF72D88049E&View=%7B23464439%2DEF72%2D422D%2D9593%2D4A7C6CFAF1D4%7D";openSupportingDocumentsLibrary=()=>{window.open(this.supportingDocumentsLibraryUrl,"_blank","noopener")};openDocument=n=>{window.open(this.dataService.getGrcDocumentViewerUrl(n),"_blank","noopener")};editingRiskId=null;editedTitle="";editedDescription="";async ngOnInit(){this.logger.debugLog("Risk Register component initialized"),this.logger.debugLog("Loading risk data...",{timestamp:new Date}),this.isLoading.set(!0);try{await this.dataService.initializeCache(),this.allRisks=this.dataService.risks(),this.dataSource=this.allRisks}catch(n){this.logger.debugLog("Failed to initialize data cache",n)}finally{this.isLoading.set(!1)}}resolveCompositeId=n=>n?n.OrgDivision?`R${n.Id.toString().padStart(3,"0")}${n.OrgDivision}`:n.Id.toString():"";isEditing=n=>this.editingRiskId===n;startEdit=n=>{this.logger.debugLog("Starting edit for risk",{riskId:n.Id}),this.editingRiskId=n.Id,this.editedTitle=n.Title||"",this.editedDescription=n.Description||""};saveEdit=async n=>{if(this.editingRiskId){this.logger.debugLog("Saving risk changes",{riskId:n.Id,newTitle:this.editedTitle,newDescription:this.editedDescription});try{this.isLoading.set(!0),await this.dataService.updateRisk(n.Id,{Title:this.editedTitle,Description:this.editedDescription}),n.Title=this.editedTitle,n.Description=this.editedDescription,this.editingRiskId=null,this.editedTitle="",this.editedDescription="",this.logger.debugLog("Risk updated successfully")}catch(t){this.logger.debugLog("Failed to save risk",t)}finally{this.isLoading.set(!1)}}};cancelEdit=()=>{this.logger.debugLog("Canceling edit"),this.editingRiskId=null,this.editedTitle="",this.editedDescription=""};openDeleteRiskDialog=n=>{this.dialog.open(er,{width:"400px",maxWidth:"90vw",data:{itemType:"Risk",itemName:n.Title||"this risk"}}).afterClosed().subscribe(async i=>{if(i)try{this.isLoading.set(!0),await this.dataService.deleteRiskCascade(n.Id);let s=[];for(let a=0;a<this.allRisks.length;a++)this.allRisks[a].Id!==n.Id&&s.push(this.allRisks[a]);this.allRisks=s,this.applyFilter(),this.riskMatrixSummary?.refreshCounts(),this.logger.debugLog("Risk deleted",{riskId:n.Id})}catch(s){this.logger.debugLog("Failed to delete risk",s)}finally{this.isLoading.set(!1)}})};openAddRiskDialog=()=>{this.logger.debugLog("Opening add risk dialog"),this.dialog.open(us,{width:"900px",maxWidth:"90vw",disableClose:!1,hasBackdrop:!0,backdropClass:"logger-dark-backdrop",panelClass:"logger-dialog-panel"}).afterClosed().subscribe(async t=>{if(t){this.logger.debugLog("Dialog closed with data",t);try{this.isLoading.set(!0);let i=await this.dataService.addRisk(t);this.logger.debugLog("Risk saved successfully",i);let s=this.dataService.risks();this.allRisks=[];for(let a=0;a<s.length;a++)this.allRisks.push(s[a]);this.applyFilter(),this.riskMatrixSummary?.refreshCounts(),this.logger.debugLog("Risk table reloaded",{count:this.dataSource.length})}catch(i){this.logger.debugLog("Failed to save risk",i)}finally{this.isLoading.set(!1)}}else this.logger.debugLog("Dialog cancelled")})};resolveOwnerName=n=>{let t=this.dataService.siteUsers();for(let i=0;i<t.length;i++)if(t[i].Id===n)return t[i].Title;return"Unassigned"};onMatrixCellSelected=n=>{this.logger.debugLog("Filtering risks by matrix cell",n),this.activeFilter={impact:n.impact,likelihood:n.likelihood},this.applyFilter()};clearFilter=()=>{this.logger.debugLog("Clearing risk matrix filter"),this.activeFilter=null,this.applyFilter()};applyFilter=()=>{if(!this.activeFilter){this.dataSource=this.allRisks;return}let n=[];for(let t=0;t<this.allRisks.length;t++)this.allRisks[t].InherentImpact===this.activeFilter.impact&&this.allRisks[t].InherentLikelihood===this.activeFilter.likelihood&&n.push(this.allRisks[t]);this.dataSource=n};onRiskRowClick=n=>{this.editingRiskId!==n.Id&&(this.logger.debugLog("Risk row clicked",{riskId:n.Id,riskTitle:n.Title}),this.router.navigate(["/risk-register",n.Id]))};stopPropagation=n=>{n.stopPropagation()};goBack=()=>{this.logger.debugLog("Navigating back to home"),this.router.navigate(["/"])};ngOnDestroy=()=>{this.logger.debugLog("Risk Register component destroyed")};static \u0275fac=function(t){return new(t||e)};static \u0275cmp=nt({type:e,selectors:[["app-risk-register"]],viewQuery:function(t,i){if(t&1&&Nt(Ui,5),t&2){let s;L(s=F())&&(i.riskMatrixSummary=s.first)}},decls:82,vars:6,consts:[["mode","indeterminate"],[1,"risk-register-container"],[1,"header-row"],["mat-icon-button","","aria-label","Back to home",3,"click"],[1,"page-title"],[1,"cards-container"],[1,"table-card"],["color","primary"],[1,"spacer"],["mat-icon-button","","aria-label","Clear filter"],["mat-icon-button","","aria-label","Add risk",3,"click"],["mat-table","",1,"mat-elevation-z0","striped-table",3,"dataSource"],["matColumnDef","Id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Priority"],["matColumnDef","Title"],["matColumnDef","Description"],["mat-cell","","class","description-cell",4,"matCellDef"],["matColumnDef","Owner"],["matColumnDef","Actions"],["mat-cell","",3,"click",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"clickable-row","editing-row","click",4,"matRowDef","matRowDefColumns"],[1,"right-column"],[1,"matrix-card"],["mat-icon-button",""],[3,"cellSelected"],[1,"documents-card"],["mat-icon-button","","aria-label","Open Supporting Documents library in SharePoint",3,"click"],[1,"document-item"],[1,"comment-card"],[1,"comment-section"],["mat-stroked-button","",1,"add-comment-btn"],["mat-icon-button","","aria-label","Clear filter",3,"click"],["mat-header-cell",""],["mat-cell",""],[1,"priority-dot"],["appearance","outline",1,"inline-edit-field"],["appearance","outline",1,"inline-edit-field",3,"click"],["matInput","","placeholder","Risk title",3,"ngModelChange","ngModel"],["mat-cell","",1,"description-cell"],["matInput","","placeholder","Risk description","rows","2",3,"ngModelChange","ngModel"],["mat-cell","",3,"click"],[1,"action-buttons"],["mat-icon-button","","color","primary","aria-label","Save changes",3,"click"],["mat-icon-button","","aria-label","Cancel editing",3,"click"],["mat-icon-button","","aria-label","Edit risk",3,"click"],["mat-icon-button","","aria-label","Delete risk",3,"click"],["mat-header-row",""],["mat-row","",3,"click"],[1,"document-item",3,"click"],["matListItemIcon",""],["matListItemTitle",""]],template:function(t,i){t&1&&(W(0,ag,1,0,"mat-progress-bar",0),v(1,"div",1)(2,"div",2)(3,"button",3),H("click",function(){return i.goBack()}),v(4,"mat-icon"),w(5,"arrow_back"),y()(),v(6,"h1",4),w(7,"Risk Register"),y()(),st(8,"app-risk-stats"),v(9,"div",5)(10,"mat-card",6)(11,"mat-toolbar",7)(12,"span"),w(13,"RISKS"),y(),st(14,"span",8),W(15,og,3,0,"button",9),v(16,"button",10),H("click",function(){return i.openAddRiskDialog()}),v(17,"mat-icon"),w(18,"add"),y()()(),v(19,"mat-card-content")(20,"table",11),Re(21,12),ft(22,rg,2,0,"th",13)(23,cg,2,1,"td",14),Ee(),Re(24,15),ft(25,lg,2,0,"th",13)(26,dg,2,3,"td",14),Ee(),Re(27,16),ft(28,hg,2,0,"th",13)(29,ug,3,1,"td",14),Ee(),Re(30,17),ft(31,fg,2,0,"th",13)(32,bg,3,1,"td",18),Ee(),Re(33,19),ft(34,vg,2,0,"th",13)(35,xg,2,1,"td",14),Ee(),Re(36,20),ft(37,yg,2,0,"th",13)(38,Cg,3,1,"td",21),Ee(),ft(39,Mg,1,0,"tr",22)(40,Sg,1,4,"tr",23),y()()(),v(41,"div",24)(42,"mat-card",25)(43,"mat-toolbar",7)(44,"span"),w(45,"RISK MATRIX"),y(),st(46,"span",8),v(47,"button",26)(48,"mat-icon"),w(49,"more_vert"),y()()(),v(50,"mat-card-content")(51,"app-risk-matrix-summary",27),H("cellSelected",function(a){return i.onMatrixCellSelected(a)}),y()()(),v(52,"mat-card",28)(53,"mat-toolbar",7)(54,"span"),w(55,"SUPPORTING DOCUMENTS"),y(),st(56,"span",8),v(57,"button",29),H("click",function(){return i.openSupportingDocumentsLibrary()}),v(58,"mat-icon"),w(59,"open_in_new"),y()()(),v(60,"mat-card-content")(61,"mat-list"),It(62,Dg,5,1,"mat-list-item",30,sg,!1,Ig,3,0,"mat-list-item"),y()()(),v(65,"mat-card",31)(66,"mat-toolbar",7)(67,"span"),w(68,"OVERALL RISK ANALYSIS"),y(),st(69,"span",8),v(70,"button",26)(71,"mat-icon"),w(72,"add"),y()(),v(73,"button",26)(74,"mat-icon"),w(75,"more_vert"),y()()(),v(76,"mat-card-content")(77,"div",32)(78,"button",33)(79,"mat-icon"),w(80,"comment"),y(),w(81," ADD A COMMENT "),y()()()()()()()),t&2&&($(i.isLoading()?0:-1),S(15),$(i.activeFilter?15:-1),S(5),V("dataSource",i.dataSource),S(19),V("matHeaderRowDef",i.displayedColumns),S(),V("matRowDefColumns",i.displayedColumns),S(22),Rt(i.dataService.grcDocumentsForFolder(i.supportingDocumentsFolderKey)))},dependencies:[No,Bo,Ko,Vo,jo,Uo,Wo,Ho,Qo,$o,Go,qo,Yo,Mn,wn,Cn,Dn,Sn,Ze,Xe,fn,un,yo,or,sr,ar,Cs,ws,xn,vn,kn,yn,bn,gn,_n,Eo,ms,Ui],styles:[".risk-register-container[_ngcontent-%COMP%]{padding:20px}.header-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:16px}.page-title[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:500}.cards-container[_ngcontent-%COMP%]{display:flex;gap:20px;margin-top:20px}.table-card[_ngcontent-%COMP%]{flex:0 0 66%;padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.right-column[_ngcontent-%COMP%]{flex:0 0 calc(34% - 20px);display:flex;flex-direction:column;gap:20px}.matrix-card[_ngcontent-%COMP%], .comment-card[_ngcontent-%COMP%], .documents-card[_ngcontent-%COMP%]{padding:0;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}mat-toolbar[_ngcontent-%COMP%]{height:48px;font-size:14px;font-weight:500}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}mat-card-content[_ngcontent-%COMP%]{padding:0!important}.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px!important}table[_ngcontent-%COMP%], .striped-table[_ngcontent-%COMP%]{width:100%}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.striped-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}.clickable-row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.clickable-row[_ngcontent-%COMP%]:hover{background-color:#e3f2fd!important}.editing-row[_ngcontent-%COMP%]{cursor:default}.editing-row[_ngcontent-%COMP%]:hover{background-color:inherit!important}.description-cell[_ngcontent-%COMP%]{max-width:400px;white-space:normal;word-break:break-word}.mat-mdc-header-row[_ngcontent-%COMP%]{background-color:#fafafa}.mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;color:#333}.mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:12px 16px;vertical-align:top}.mat-mdc-row[_ngcontent-%COMP%], .mat-mdc-header-row[_ngcontent-%COMP%], .mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{height:auto}.priority-dot[_ngcontent-%COMP%]{width:16px;height:16px;border-radius:50%;display:inline-block;border:1px solid rgba(0,0,0,.2)}.inline-edit-field[_ngcontent-%COMP%]{width:100%;margin:0;padding:0}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:0}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%]{padding:4px 8px}.inline-edit-field[_ngcontent-%COMP%]   .mat-mdc-form-field-subscript-wrapper[_ngcontent-%COMP%]{display:none}.action-buttons[_ngcontent-%COMP%]{display:flex;gap:4px;align-items:center}.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:32px;height:32px;line-height:32px}.action-buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px;line-height:18px}.comment-section[_ngcontent-%COMP%]{padding:20px}.add-comment-btn[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;text-align:left;color:#666}.add-comment-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:8px}.document-item[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .2s ease}.document-item[_ngcontent-%COMP%]:hover{background-color:#e3f2fd}"]})};export{Hl as RiskRegister};
