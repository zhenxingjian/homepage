(window.webpackJsonphomepage=window.webpackJsonphomepage||[]).push([[0],{120:function(e,t,a){e.exports=a.p+"static/media/Selfie.ebeacdd0.png"},130:function(e,t,a){e.exports=a(231)},218:function(e,t){},222:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(232),a(63)),o=(a(96),a(31)),s=a(22),m=a(23),u=a(25),p=a(24),h=a(26),d=(a(140),a(62)),f=(a(56),a(18)),E=(a(99),a(39)),y=(a(101),a(19)),g=(a(145),a(74)),v=(a(77),a(44)),b=(a(148),a(12)),k=(a(233),a(94)),j=a(120),O=a.n(j),w=f.a.Title,x=f.a.Text,I=f.a.Paragraph,C=k.a.Meta,A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.a,{type:"flex",justify:"space-between"},r.a.createElement(y.a,{span:8},r.a.createElement(w,{level:2},r.a.createElement(x,{type:"secondary"},"HELLO,")," ",r.a.createElement("br",null)," I AM Xingjian Zhen"),r.a.createElement(I,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(x,null," ",r.a.createElement("a",{href:"https://www.wisc.edu/"},"University of Wisconsin-Madison"))),r.a.createElement("li",null,r.a.createElement(x,{type:"secondary"},r.a.createElement("a",{href:"http://www.cs.wisc.edu/"},"Department of Computer Science"))),r.a.createElement("li",null,r.a.createElement(b.a,{type:"mail",style:{marginRight:15}}),r.a.createElement(x,{type:"secondary",copyable:!0},"xzhen3@wisc.edu")))),r.a.createElement(v.a,{orientation:"left"}," ",r.a.createElement(w,{level:3,className:"right"},"EDUCATION")),r.a.createElement(g.a,{mode:"left"},r.a.createElement(g.a.Item,{dot:r.a.createElement(b.a,{type:"clock-circle-o",style:{fontSize:"16px"}})},r.a.createElement(x,{type:"secondary",className:"small"},"Aug.2017 - present",r.a.createElement("br",null),"Ph.D. Student",r.a.createElement("br",null),"Department of Computer Science",r.a.createElement("br",null),"UW-Madision, WI, U.S.")),r.a.createElement(g.a.Item,null,r.a.createElement(x,{type:"secondary",className:"small"},"Aug.2013 - Jul. 2017",r.a.createElement("br",null),"B.E. Department of Electronic Engineering",r.a.createElement("br",null),"Tsinghua University, Beijing, P.R. China")))),r.a.createElement(y.a,{span:6},r.a.createElement("a",{href:"https://github.com/zhenxingjian"},r.a.createElement(k.a,{hoverable:!0,cover:r.a.createElement("img",{alt:"Imagine that there is a photo",src:O.a})},r.a.createElement(C,{title:"Xingjian Zhen",description:r.a.createElement("p",{className:"small"},"https://github.com/zhenxingjian")})))),r.a.createElement(y.a,{span:8},r.a.createElement(v.a,{className:"margin-top"},r.a.createElement(w,{level:3},"Research Interests")),r.a.createElement(I,{type:"secondary",className:"justify indent"}," My research interest is about different structured data for medical application in Computer Vision. Since it's quite mature for Euclidean space machine learning, I would like to explore some different structured data or constrained data. For example, the Symmetric Positive Definite matrix in medical data (DTI) or covariance matrix are the data with constraint. I want to try some neural networks in Euclidean space, and extend them to the structured data, manifold data as an example, to do the classification or regression. I believe this will be useful in diagnosis from a medical perspective or analysis of the video/image information."))))}}]),t}(n.Component),N=(a(214),a(32)),T=a(73),S=(a(216),a(95)),M=a(126),D=a.n(M),P="/homepage";function W(e,t){D()({url:e+"?time="+(new Date).getTime(),type:"json",method:"get",contentType:"application/json",success:t})}var z=S.a.Panel,H=f.a.Text,L="/homepage";function U(e){return e.startsWith("http")?e:L+"/"+e}var B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;W(P+"/paper/papers.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(S.a,{bordered:!1,defaultActiveKey:[]},this.state.data.map((function(e,a){return r.a.createElement(z,{key:a,header:t.header(e)},t.supplementMaterial(e))})))}}],[{key:"computeIndexes",value:function(e,t){if(!t)return[];"string"===typeof t&&(t=[t]);var a=[];return t.forEach((function(t){var n=e.indexOf(t),r=n+t.length;a.push.apply(a,Object(T.a)(Object(T.a)(Array(r).keys()).filter((function(e){return e>=n}))))})),new Set(a)}},{key:"computeClassArray",value:function(e,t,a,n){for(var r=Object(T.a)(Array(e.length).keys()).map((function(e){var r=[];return t.has(e)&&r.push("bold"),a.has(e)&&r.push("italic"),n.has(e)&&r.push("mark"),r.join("+")})),l=[],c=[],i=r[0],o=0,s=1;s<r.length;s++)r[s]!==i&&(l.push([o,s]),c.push(i),o=s,i=r[s]);return l.push([o,r.length]),c.push(i),{intervals:l,classes:c}}}]),t}(n.Component);B.supplementMaterial=function(e){var t=e.supplement;return t?"image"===t.type?r.a.createElement("img",{width:"100%",alt:"imagine there is a poster",src:U(t.src)}):"video"===t.type?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.src}}):r.a.createElement(N.a,{description:"There is no supplement materials for this paper."}):r.a.createElement(N.a,{description:"There is no supplement materials for this paper."})},B.header=function(e){for(var t=e.content,a=B.computeIndexes(t,e.bold),n=B.computeIndexes(t,e.italic),l=B.computeIndexes(t,e.mark),c=B.computeClassArray(t,a,n,l),i=[],o=0;o<c.intervals.length;o++){var s=c.intervals[o],m=c.classes[o],u=m.indexOf("bold")>-1,p=m.indexOf("mark")>-1,h="";m.indexOf("italic")&&(h="italic"),i.push(r.a.createElement(H,{strong:u,mark:p,key:o,className:h},t.slice(s[0],s[1])))}var d=e.arxiv;d&&i.push(r.a.createElement(H,{key:"arxiv"},"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:d,target:"_blank"},"[arxiv]")));var f=e.pdf;return f&&i.push(r.a.createElement(H,{key:"pdf"},"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:U(f),target:"_blank"},"[PDF]"))),r.a.createElement(H,{className:"paperInfo"},i)};var _=f.a.Title,F=f.a.Paragraph,J=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.order%2?"right":"left";return r.a.createElement(f.a,{className:"margin-top-large"},r.a.createElement(v.a,{orientation:t}," ",r.a.createElement(_,{level:3},e.title)),r.a.createElement(F,{type:"secondary",className:t+" margin-"+t},e.start," - ",e.end),r.a.createElement(F,{className:"right"===t?"margin-right":""},r.a.createElement("ul",{className:t+"List"},e.descriptions.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;W(P+"/program/programs.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data.map((function(e,t){return r.a.createElement(J,{data:e,key:t,order:t})})))}}]),t}(n.Component),X=(a(220),a(75)),Z=f.a.Title,q=(f.a.Paragraph,f.a.Text),K=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).parseData=function(e,t){var a=t.span,n=t.value||t;return"string"===typeof n?r.a.createElement(X.a.Item,{span:a,label:e,key:e},n):void 0!==n.length?r.a.createElement(X.a.Item,{span:a,label:e,key:e},r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement("li",{key:t},e)})))):r.a.createElement("div",null)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.required,a=this.props.data.detail,n=r.a.createElement(v.a,{orientation:"left"},r.a.createElement(Z,{level:3},t.title," ",r.a.createElement(q,{type:"secondary",className:"smaller"},"(",t.from," - ",t.to,")")));return r.a.createElement(X.a,{className:"margin-top-large",title:n,bordered:!0},Object.keys(a).map((function(t){return e.parseData(t,a[t])})))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;W(P+"/work/works.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data.map((function(e,t){return r.a.createElement(K,{data:e,key:t})})))}}]),t}(n.Component),$=(a(222),f.a.Text),G=d.a.Header,Q=d.a.Content,Y=d.a.Footer,ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={content:r.a.createElement(A,null)},a.handleMenuClick=function(e){var t;switch(e.key){case"info":t=r.a.createElement(A,null);break;case"paper":t=r.a.createElement(B,null);break;case"program":t=r.a.createElement(R,null);break;case"work":t=r.a.createElement(V,null);break;default:t=null}a.setState({content:t})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(G,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"},"Xingjian Zhen"),r.a.createElement(o.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["info"],style:{lineHeight:"64px"},onClick:this.handleMenuClick},r.a.createElement(o.a.Item,{key:"info"},"Info"),r.a.createElement(o.a.Item,{key:"paper"},"Paper"),r.a.createElement(o.a.Item,{key:"program"},"Program"),r.a.createElement(o.a.Item,{key:"work"},"Work"))),r.a.createElement(Q,{style:{padding:"0 50px",marginTop:64}},r.a.createElement(i.a,{style:{margin:"16px 0"}},r.a.createElement(i.a.Item,null,"Home"),r.a.createElement(i.a.Item,null,"List"),r.a.createElement(i.a.Item,null,"App")),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},this.state.content)),r.a.createElement(Y,{style:{textAlign:"center"}},"Contact: ",r.a.createElement($,{type:"secondary",copyable:!0},"xzhen3@wisc.edu")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[130,1,2]]]);
//# sourceMappingURL=main.81c3ed73.chunk.js.map