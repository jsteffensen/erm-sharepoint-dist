import{f as wt}from"./chunk-AUJTOGQM.js";import{A as dt,Ba as Dt,C as ht,E as pt,F as _t,J as gt,Oa as Lt,P as ut,R as b,U as ft,V as bt,X as vt,Y as xt,Z as j,_ as yt,ja as kt,pa as Ct,s as N,t as mt,v as M,va as It,xa as Tt,y as R}from"./chunk-RL6GQBO2.js";import{$ as d,$a as it,$b as ot,Ab as et,Ac as q,Bb as nt,Cb as Q,Db as at,Mb as F,Nb as st,Pb as G,Q as v,Qb as y,Ra as H,Rb as X,Sb as z,Tb as u,Ub as f,Va as V,W as J,X as O,Ya as U,Z as k,_b as w,a as I,ac as rt,bc as lt,d as Z,db as C,eb as P,fb as g,h as A,ib as L,ic as ct,ja as T,ka as tt,oa as E,rb as S,sa as B,wa as D,ya as x,z as $,zb as Y}from"./chunk-RUNKS36W.js";var St=class s{dataService=d(Lt);margin=10;fieldLineH=3.7;reservedW=67;reservedUntilY=0;months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];appetiteLabels={1:"Low",2:"Medium",3:"High",4:"Very high"};consequenceLabels={1:"1 - Insignificant",2:"2 - Minor",3:"3 - Moderate",4:"4 - Major",5:"5 - Severe"};matrixColors=[["#FFD700","#f98d00","#e13838","#e13838","#e13838"],["#fdd933","#FFD700","#f98d00","#e13838","#e13838"],["#65bb6a","#fdd933","#FFD700","#f98d00","#e13838"],["#65bb6a","#65bb6a","#fdd933","#FFD700","#f98d00"],["#65bb6a","#65bb6a","#65bb6a","#fdd933","#FFD700"]];riskListColumns=[{title:"Class",width:10},{title:"ID",width:20},{title:"Priority",width:16},{title:"Title",width:45},{title:"Description",width:66},{title:"Owner",width:30},{title:"Appetite",width:16},{title:"Inherent",width:34},{title:"Residual",width:40}];createRiskListReport=async(i,t)=>{this.reservedUntilY=0;let e=new jspdf.jsPDF({orientation:"landscape",unit:"mm",format:"a4"}),n=[],a=[];for(let c=0;c<i.length;c++)n.push(this.riskListCells(i[c])),a.push(this.dataService.getPriorityColor(i[c].Priority));let o=this.addReportHeader(e,"Risk Register Report","Filter: "+t+"    |    Risks: "+i.length+"    |    Generated: "+new Date().toDateString());this.addTable(e,o,this.riskListColumns,n,2,a),this.finalize(e,this.reportClassification(i),"Risk_Register_"+this.dateStamp()+".pdf")};riskListCells=i=>{let t=i.LatestResidualRiskValue;return[this.classCode(i),this.compositeId(i),this.fmt(i.Priority),i.Title||"",i.Description||"-",this.ownerName(i.OwnerId),this.appetiteLabels[i.RiskAppetite]||"-",this.ratingCell(i.InherentLikelihood,i.HighestConsequenceRating,i.InherentExposure),t?this.ratingCell(t.ResidualLikelihood,t.ResidualImpact,i.ResidualExposure):"Not assessed"]};ratingCell=(i,t,e)=>"Likelihood: "+this.fmt(i)+`
Impact: `+this.fmt(t)+`
Exposure: `+this.fmt1(e);createRiskDetailReport=async i=>{let t=new jspdf.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),e=this.compositeId(i),n=this.addReportHeader(t,"Risk Report "+e,"Generated: "+new Date().toDateString());this.reservedUntilY=this.addRiskMatrix(t,i),n=this.addAnalysisSections(t,n,i,e),n=this.addControlActivitiesSections(t,n,i),this.reservedUntilY=0,this.finalize(t,this.reportClassification([i]),"Risk_"+e+"_"+this.dateStamp()+".pdf")};addAnalysisSections=(i,t,e,n)=>{t=this.addSection(i,t,"EVENT INFORMATION"),t=this.addFields(i,t,[{label:"Classification",value:e.Classification},{label:"Risk ID",value:n},{label:"Risk",value:e.Title,full:!0},{label:"Risk description",value:e.Description,full:!0}]),t=this.addSection(i,t,"ADDITIONAL INFORMATION"),t=this.addFields(i,t,[{label:"Status",value:e.Status},{label:"Priority",value:this.fmt1(e.Priority)},{label:"Threat",value:e.Threat?"Yes":"No"},{label:"Category",value:e.Category},{label:"Objective",value:this.objectiveLabel(e.ParentId),full:!0},{label:"Owner",value:this.ownerName(e.OwnerId)},{label:"Identified",value:this.fmtDate(e.DateIdentified)},{label:"Division",value:this.dataService.getDivisionLabel(e.OrgDivision)},{label:"Unit",value:e.OrgUnit},{label:"Modified",value:this.fmtDate(e.Modified)}]),t=this.addSection(i,t,"INHERENT RISK RATING"),t=this.addFields(i,t,[{label:"Likelihood",value:e.InherentLikelihood},{label:"Impact",value:e.HighestConsequenceRating},{label:"Likelihood description",value:e.LikelihoodDescription,full:!0}]),t=this.addSection(i,t,"RISK APPETITE"),t=this.addFields(i,t,[{label:"Risk appetite",value:this.appetiteLabels[e.RiskAppetite]},{label:"Inherent exposure",value:this.exposureText(e.InherentExposure)}]),t=this.addSection(i,t,"RISK RESPONSE"),t=this.addFields(i,t,[{label:"Response",value:e.Response},{label:"Response date",value:this.fmtDate(e.DateResponse)}]);let a=e.Causes||[],o=[];for(let h=0;h<a.length;h++)o.push([this.text(a[h].Title),this.text(a[h].Description)]);t=this.addSection(i,t,"ASSESSMENT"),t=this.addTable(i,t,[{title:"Cause",width:60},{title:"Description",width:130}],o);let c=e.Consequences||[],l=[];for(let h=0;h<c.length;h++)l.push([this.consequenceLabels[c[h].Rating]||"-",this.text(c[h].Title),this.text(c[h].Description)]);return t=this.addSection(i,t,"CONSEQUENCES"),this.addTable(i,t,[{title:"Rating",width:28},{title:"Consequence",width:55},{title:"Description",width:107}],l)};addControlActivitiesSections=(i,t,e)=>{let n=e.Controls||[],a=[];for(let r=0;r<n.length;r++)a.push([this.text(n[r].Title),this.text(n[r].Description),this.ownerName(n[r].OwnerId),this.text(n[r].Effectiveness),this.text(n[r].ControlType)]);t=this.addSection(i,t,"PROCESS CONTROLS"),t=this.addTable(i,t,[{title:"Title",width:40},{title:"Description",width:70},{title:"Owner",width:30},{title:"Effectiveness",width:25},{title:"Control Type",width:25}],a);let o=e.Treatments||[],c=[];for(let r=0;r<o.length;r++)c.push([this.text(o[r].Title),this.text(o[r].Description),this.ownerName(o[r].OwnerId),this.fmtDate(o[r].Start),this.fmtDate(o[r].End)]);t=this.addSection(i,t,"RISK INITIATIVES"),t=this.addTable(i,t,[{title:"Title",width:40},{title:"Description",width:76},{title:"Owner",width:30},{title:"Start Date",width:22},{title:"End Date",width:22}],c);let l=e.LatestControlImpact;t=this.addSection(i,t,"IMPACT PER AREA"),t=l?this.addFields(i,t,[{label:"Period",value:this.fmtPeriod(l.PeriodMonth,l.PeriodYear),full:!0},{label:"Operational",value:this.dataService.getImpactLabel(l.ImpactOperational)},{label:"Sustainment",value:this.dataService.getImpactLabel(l.ImpactSustainment)},{label:"Modification",value:this.dataService.getImpactLabel(l.ImpactModification)},{label:"Disposal",value:this.dataService.getImpactLabel(l.ImpactDisposal)}]):this.addNone(i,t,"No impact found");let h=e.LatestResidualRiskValue;t=this.addSection(i,t,"RESIDUAL RISK VALUES"),t=h?this.addFields(i,t,[{label:"Period",value:this.fmtPeriod(h.PeriodMonth,h.PeriodYear)},{label:"Residual exposure",value:this.exposureText(e.ResidualExposure)},{label:"Likelihood",value:this.dataService.getResidualLabel(h.ResidualLikelihood)},{label:"Impact",value:this.dataService.getResidualLabel(h.ResidualImpact)}]):this.addNone(i,t,"No residual risk values found");let p=e.ControlActivitiesNotes||[],m=[];for(let r=0;r<p.length;r++)m.push([this.fmtDateTime(p[r].Created),p[r].AuthorId?this.ownerName(p[r].AuthorId):"-",this.text(p[r].NoteText)]);return t=this.addSection(i,t,"NOTES"),this.addTable(i,t,[{title:"Date",width:32},{title:"Author",width:35},{title:"Note",width:123}],m)};addReportHeader=(i,t,e)=>(i.setFont("helvetica","bold"),i.setFontSize(16),i.text(t,this.margin,16),i.setFont("helvetica","normal"),i.setFontSize(9),i.text(e,this.margin,22),28);addSection=(i,t,e)=>(t=this.checkPage(i,t+2,16),i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor("#000000"),i.text(e,this.margin,t+4),i.setDrawColor("#424242"),i.setLineWidth(.4),i.line(this.margin,t+5.5,this.margin+this.contentW(i,t),t+5.5),i.setLineWidth(.2),i.setFont("helvetica","normal"),t+8);addFields=(i,t,e)=>{let n=this.contentW(i,t),a=0;for(;a<e.length;){let o=[e[a]];!e[a].full&&a+1<e.length&&!e[a+1].full&&o.push(e[a+1]);let c=e[a].full?n:n/2;i.setFontSize(9);let l=[],h=1;for(let m=0;m<o.length;m++)l.push(i.splitTextToSize(this.text(o[m].value),c-4)),h=Math.max(h,l[m].length);let p=9+(h-1)*this.fieldLineH;t=this.checkPage(i,t,p);for(let m=0;m<o.length;m++){let r=this.margin+m*c;i.setFontSize(7),i.setTextColor("#666666"),i.text(o[m].label.toUpperCase(),r,t+3),i.setFontSize(9),i.setTextColor("#000000"),i.text(l[m],r,t+7)}t+=p,a+=o.length}return t+2};addNone=(i,t,e)=>(t=this.checkPage(i,t,8),i.setFontSize(9),i.setTextColor("#666666"),i.text(e,this.margin,t+4),i.setTextColor("#000000"),t+8);addTable=(i,t,e,n,a=-1,o=[])=>{i.getNumberOfPages()===1&&(t=Math.max(t,this.reservedUntilY));let c=0;for(let l=0;l<e.length;l++)c+=e[l].width;if(t=this.addTableHeader(i,this.checkPage(i,t,14),e,c),n.length===0)return i.text("None",this.margin+1.5,t+3.5),t+8;for(let l=0;l<n.length;l++){let h=[],p=1;for(let _=0;_<e.length;_++){let Ot=_===a?4:0;h.push(i.splitTextToSize(n[l][_]||"",e[_].width-3-Ot)),p=Math.max(p,h[_].length)}let m=p*3.3+3;t+m>this.pageH(i)-12&&(i.addPage(),t=this.addTableHeader(i,14,e,c)),l%2===1&&(i.setFillColor("#f5f5f5"),i.rect(this.margin,t,c,m,"F"));let r=this.margin;for(let _=0;_<e.length;_++)_===a?(i.setFillColor(o[l]),i.setDrawColor("#999999"),i.circle(r+3,t+2.6,1.5,"FD"),i.text(h[_],r+5.5,t+3.5)):i.text(h[_],r+1.5,t+3.5),r+=e[_].width;i.setDrawColor("#e0e0e0"),i.line(this.margin,t+m,this.margin+c,t+m),t+=m}return t+3};addTableHeader=(i,t,e,n)=>{i.setFillColor("#424242"),i.rect(this.margin,t,n,7,"F"),i.setFont("helvetica","bold"),i.setFontSize(8),i.setTextColor("#ffffff");let a=this.margin;for(let o=0;o<e.length;o++)i.text(e[o].title,a+1.5,t+4.8),a+=e[o].width;return i.setTextColor("#000000"),i.setFont("helvetica","normal"),t+7};addRiskMatrix=(i,t)=>{let n=i.internal.pageSize.getWidth()-this.margin-50,a=37;i.setFont("helvetica","bold"),i.setFontSize(10),i.setTextColor("#000000"),i.text("RESIDUAL RISK",n,34),i.setFont("helvetica","normal"),i.setDrawColor("#666666");for(let m=0;m<5;m++)for(let r=0;r<5;r++)i.setFillColor(this.matrixColors[m][r]),i.rect(n+r*10,a+m*10,10,10,"FD");i.setFontSize(7),i.setTextColor("#333333");for(let m=1;m<=5;m++)i.text(String(m),n+(m-.5)*10,a+50+3.5,{align:"center"}),i.text(String(m),n-2.5,a+(5-m+.5)*10+1,{align:"center"});i.text("Impact",n+2.5*10,a+50+7.5,{align:"center"}),i.text("Likelihood",n-6,a+2.5*10+6,{angle:90});let o=t.LatestResidualRiskValue,c=this.matrixCell(t.HighestConsequenceRating,t.InherentLikelihood,n,a,10),l=o?this.matrixCell(o.ResidualImpact,o.ResidualLikelihood,n,a,10):null;c&&l&&c.x===l.x&&c.y===l.y&&(c.y-=2.3,l.y+=2.3);let h=this.compositeId(t);this.drawMatrixLabel(i,c,h,"#000000","#ffffff"),this.drawMatrixLabel(i,l,h,"#ffffff","#000000");let p=a+50+10;return i.setDrawColor("#000000"),i.setFillColor("#000000"),i.roundedRect(n,p,6,3.5,.6,.6,"FD"),i.setFillColor("#ffffff"),i.roundedRect(n+26,p,6,3.5,.6,.6,"FD"),i.setFontSize(8),i.setTextColor("#000000"),i.text("Inherent",n+8,p+2.8),i.text("Residual",n+34,p+2.8),p+8};matrixCell=(i,t,e,n,a)=>!i||!t||i<1||i>5||t<1||t>5?null:{x:e+(i-.5)*a,y:n+(5-t+.5)*a};drawMatrixLabel=(i,t,e,n,a)=>{t&&(i.setFillColor(n),i.setDrawColor("#000000"),i.roundedRect(t.x-5.5,t.y-2,11,4,.8,.8,"FD"),i.setFontSize(5.5),i.setTextColor(a),i.text(e,t.x,t.y+.7,{align:"center"}),i.setTextColor("#000000"))};addPageMarkings=(i,t)=>{let e=i.getNumberOfPages(),n=i.internal.pageSize.getWidth(),a=this.pageH(i);for(let o=1;o<=e;o++)i.setPage(o),i.setTextColor("#000000"),i.setFont("helvetica","bold"),i.setFontSize(10),i.text(t,n/2,7,{align:"center"}),i.text(t,n/2,a-5,{align:"center"}),i.setFont("helvetica","normal"),i.setFontSize(8),i.text("Page "+o+" of "+e,n-this.margin,a-5,{align:"right"})};checkPage=(i,t,e)=>t+e>this.pageH(i)-12?(i.addPage(),14):t;pageH=i=>i.internal.pageSize.getHeight();contentW=(i,t=9999)=>{let e=i.internal.pageSize.getWidth()-2*this.margin;return i.getNumberOfPages()===1&&t<this.reservedUntilY?e-this.reservedW:e};finalize=(i,t,e)=>{this.addPageMarkings(i,t),this.addStanagLabel(i,t);let n=t==="NATO RESTRICTED"?"NR_":"NU_";i.save(n+e)};addStanagLabel=(i,t)=>{let e=t.replace(/^NATO /,""),n=new Date().toISOString().replace(/\.\d{3}Z$/,"Z"),a='<mb:BindingInformation xmlns:mb="urn:nato:stanag:4778:bindinginformation:1:0" xmlns:slab="urn:nato:stanag:4774:confidentialitymetadatalabel:1:0" xmlns:xmime="http://www.w3.org/2005/05/xmlmime"><mb:MetadataBindingContainer><mb:MetadataBinding><mb:Metadata><slab:originatorConfidentialityLabel><slab:ConfidentialityInformation><slab:PolicyIdentifier>NATO</slab:PolicyIdentifier><slab:Classification>'+e+"</slab:Classification></slab:ConfidentialityInformation><slab:CreationDateTime>"+n+'</slab:CreationDateTime></slab:originatorConfidentialityLabel></mb:Metadata><mb:DataReference URI="" xmime:contentType="application/pdf"/></mb:MetadataBinding></mb:MetadataBindingContainer></mb:BindingInformation>',o='<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?><x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:mbxmp="urn:nato:stanag:4778:bindinginformation:1:0:xmp#"><rdf:Description rdf:about=""><mbxmp:bindingInformation>'+this.xmlEscape(a)+'</mbxmp:bindingInformation></rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>';i.addMetadata(o,!0)};xmlEscape=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");reportClassification=i=>{for(let t=0;t<i.length;t++)if(this.classCode(i[t])==="NR")return"NATO RESTRICTED";return"NATO UNCLASSIFIED"};classCode=i=>{let t=String(i.Classification||"").trim().toUpperCase();return t==="NATO RESTRICTED"?"NR":t==="NATO UNCLASSIFIED"?"NU":"-"};text=i=>i==null||i===""?"-":String(i);fmt=i=>i==null||i===""?"-":String(Math.round(Number(i)*100)/100);fmt1=i=>{if(i==null||i==="")return"-";let t=String(Math.round(Number(i)*10)/10);return t.includes(".")?t:t+".0"};exposureText=i=>i==null?"-":this.fmt1(i)+" - "+this.dataService.getExposureLabel(i);fmtDate=i=>{if(!i)return"-";let t=new Date(i);return isNaN(t.getTime())?"-":String(t.getDate()).padStart(2,"0")+"-"+this.months[t.getMonth()]+"-"+t.getFullYear()};fmtDateTime=i=>{if(!i)return"-";let t=new Date(i);return isNaN(t.getTime())?"-":this.fmtDate(i)+" "+String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")};fmtPeriod=(i,t)=>!i||!t?"-":this.months[i-1]+"-"+t;compositeId=i=>i.OrgDivision?"R"+String(i.Id).padStart(3,"0")+i.OrgDivision:String(i.Id);ownerName=i=>{let t=this.dataService.siteUsers();for(let e=0;e<t.length;e++)if(t[e].Id===i)return t[e].Title;return"Unassigned"};objectiveLabel=i=>{if(!i)return"None";let t=this.dataService.objectives();for(let e=0;e<t.length;e++)if(t[e].Id===i)return t[e].Uid+"  "+t[e].Title;return"None"};dateStamp=()=>{let i=new Date;return i.getFullYear()+String(i.getMonth()+1).padStart(2,"0")+String(i.getDate()).padStart(2,"0")};static \u0275fac=function(t){return new(t||s)};static \u0275prov=J({token:s,factory:s.\u0275fac,providedIn:"root"})};var Mt=(()=>{class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=P({type:s});static \u0275inj=O({imports:[j]})}return s})();var Et=["*"],Pt=`.mdc-list {
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
`,Ft=["unscopedContent"],zt=["text"],Nt=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],jt=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var Bt=new k("ListOption"),Ht=(()=>{class s{_elementRef=d(x);constructor(){}static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return s})(),Vt=(()=>{class s{_elementRef=d(x);constructor(){}static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return s})(),Ut=(()=>{class s{static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return s})(),Rt=(()=>{class s{_listOption=d(Bt,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,hostVars:4,hostBindings:function(e,n){e&2&&w("mdc-list-item__start",n._isAlignedAtStart())("mdc-list-item__end",!n._isAlignedAtStart())}})}return s})(),Yt=(()=>{class s extends Rt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(s)))(n||s)}})();static \u0275dir=g({type:s,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[L]})}return s})(),Qt=(()=>{class s extends Rt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(s)))(n||s)}})();static \u0275dir=g({type:s,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[L]})}return s})(),Gt=new k("MAT_LIST_CONFIG"),K=(()=>{class s{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=b(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(b(t))}_disabled=B(!1);_defaultOptions=d(Gt,{optional:!0});static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,hostVars:1,hostBindings:function(e,n){e&2&&S("aria-disabled",n.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return s})(),Xt=(()=>{class s{_elementRef=d(x);_ngZone=d(E);_listBase=d(K,{optional:!0});_platform=d(N);_hostElement;_isButtonElement;_noopAnimations=M();_avatars;_icons;set lines(t){this._explicitLines=R(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=b(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(b(t))}_disabled=B(!1);_subscriptions=new Z;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){d(ht).load(vt);let t=d(bt,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new ft(this,this._ngZone,this._hostElement,this._platform,d(T)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add($(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),n=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;n.classList.toggle("mdc-list-item__primary-text",a),n.classList.toggle("mdc-list-item__secondary-text",!a)}else n.classList.remove("mdc-list-item__primary-text"),n.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,contentQueries:function(e,n,a){if(e&1&&X(a,Yt,4)(a,Qt,4),e&2){let o;u(o=f())&&(n._avatars=o),u(o=f())&&(n._icons=o)}},hostVars:4,hostBindings:function(e,n){e&2&&(S("aria-disabled",n.disabled)("disabled",n._isButtonElement&&n.disabled||null),w("mdc-list-item--disabled",n.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return s})();var Gi=(()=>{class s extends K{static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(s)))(n||s)}})();static \u0275cmp=C({type:s,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[ct([{provide:K,useExisting:s}]),L],ngContentSelectors:Et,decls:1,vars:0,template:function(e,n){e&1&&(G(),y(0))},styles:[Pt],encapsulation:2,changeDetection:0})}return s})(),Xi=(()=>{class s extends Xt{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=b(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=D(s)))(n||s)}})();static \u0275cmp=C({type:s,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,n,a){if(e&1&&X(a,Vt,5)(a,Ht,5)(a,Ut,5),e&2){let o;u(o=f())&&(n._lines=o),u(o=f())&&(n._titles=o),u(o=f())&&(n._meta=o)}},viewQuery:function(e,n){if(e&1&&z(Ft,5)(zt,5),e&2){let a;u(a=f())&&(n._unscopedContent=a.first),u(a=f())&&(n._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,n){e&2&&(S("aria-current",n._getAriaCurrent()),w("mdc-list-item--activated",n.activated)("mdc-list-item--with-leading-avatar",n._avatars.length!==0)("mdc-list-item--with-leading-icon",n._icons.length!==0)("mdc-list-item--with-trailing-meta",n._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",n._hasBothLeadingAndTrailing())("_mat-animation-noopable",n._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[L],ngContentSelectors:jt,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,n){e&1&&(G(Nt),y(0),Y(1,"span",1),y(2,1),y(3,2),Y(4,"span",2,0),F("cdkObserveContent",function(){return n._updateItemLines(!0)}),y(6,3),et()(),y(7,4),y(8,5),nt(9,"div",3))},dependencies:[pt],encapsulation:2,changeDetection:0})}return s})();var qi=(()=>{class s{static \u0275fac=function(e){return new(e||s)};static \u0275mod=P({type:s});static \u0275inj=O({imports:[_t,yt,wt,j,Mt]})}return s})();var Wt=["tooltip"],Kt=20;var Zt=new k("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let s=d(T);return()=>It(s,{scrollThrottle:Kt})}}),$t=new k("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var At="tooltip-panel",Jt={passive:!0},ti=8,ii=8,ei=24,ni=200,_e=(()=>{class s{_elementRef=d(x);_ngZone=d(E);_platform=d(N);_ariaDescriber=d(ut);_focusMonitor=d(dt);_dir=d(xt);_injector=d(T);_viewContainerRef=d(it);_mediaMatcher=d(mt);_document=d(tt);_renderer=d(U);_animationsDisabled=M();_defaultOptions=d($t,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=ai;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=b(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=b(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=R(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=R(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new A;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=ti}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(v(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(e=>e()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(e);this._detach(),this._portal=this._portal||new Ct(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=n.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(v(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&o._origin instanceof x)return this._overlayRef;this._detach()}let e=this._injector.get(kt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${At}`,a=Tt(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e).withPopoverLocation("global");return a.positionChanges.pipe(v(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Dt(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Zt)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(v(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(v(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(v(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(v(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,n=this._getOrigin(),a=this._getOverlayPosition();e.withPositions([this._addOffset(I(I({},n.main),a.main)),this._addOffset(I(I({},n.fallback),a.fallback))])}_addOffset(t){let e=ii,n=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=n?-e:e:t.originX==="end"&&(t.offsetX=n?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"||e=="below"?n={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={originX:"end",originY:"center"});let{x:a,y:o}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,n;e=="above"?n={overlayX:"center",overlayY:"bottom"}:e=="below"?n={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?n={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(n={overlayX:"start",overlayY:"center"});let{x:a,y:o}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),V(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:n,originY:a}=t,o;if(e==="center"?this._dir&&this._dir.value==="rtl"?o=n==="end"?"left":"right":o=n==="start"?"left":"right":o=e==="bottom"&&a==="top"?"above":"below",o!==this._currentPosition){let c=this._overlayRef;if(c){let l=`${this._cssClassPrefix}-${At}-`;c.removePanelClass(l+this._currentPosition),c.addPanelClass(l+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",t=>{let e=t.targetTouches?.[0],n=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",t=>{let e=t.relatedTarget;(!e||!this._overlayRef?.overlayElement.contains(e))&&this.hide()}),this._addListener("wheel",t=>{if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),n=this._elementRef.nativeElement;e!==n&&!n.contains(e)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",t),this._addListener("touchcancel",t)}}}_addListener(t,e){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,e,Jt))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t=="function"?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,n=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(t==="on"||!e.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._isDestroyed||V({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type==="keydown"?this._isTooltipVisible()&&t.keyCode===27&&!gt(t):!0;static \u0275fac=function(e){return new(e||s)};static \u0275dir=g({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,n){e&2&&w("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return s})(),ai=(()=>{class s{_changeDetectorRef=d(q);_elementRef=d(x);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=M();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new A;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>ei&&t.width>=ni}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,n=this._showAnimation,a=this._hideAnimation;if(e.classList.remove(t?a:n),e.classList.add(t?n:a),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(e);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||s)};static \u0275cmp=C({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(e,n){if(e&1&&z(Wt,7),e&2){let a;u(a=f())&&(n._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,n){e&1&&F("mouseleave",function(o){return n._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,n){e&1&&(Q(0,"div",1,0),st("animationend",function(o){return n._handleAnimationEnd(o)}),Q(2,"div",2),rt(3),at()()),e&2&&(ot(n.tooltipClass),w("mdc-tooltip--multiline",n._isMultiline),H(3),lt(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return s})();export{St as a,Ht as b,Ut as c,Qt as d,Gi as e,Xi as f,qi as g,_e as h};
