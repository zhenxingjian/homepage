(window.webpackJsonphomepage=window.webpackJsonphomepage||[]).push([[0],{134:function(e,t,a){e.exports=a(237)},158:function(e,t){},228:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(238),a(78)),o=(a(67),a(42)),s=(a(102),a(33)),u=a(23),m=a(24),p=a(26),h=a(25),f=a(61),y=a(27),d=(a(144),a(66)),E=(a(59),a(19)),g=(a(104),a(43)),v=(a(106),a(20)),k=(a(81),a(40)),b=(a(150),a(101)),j=(a(152),a(100)),O=(a(154),a(11)),w=a(56),x=(a(239),a(98)),C=a(125),I=a.n(C),M="/homepage";function N(e,t){I()({url:e+"?time="+(new Date).getTime(),type:"json",method:"get",contentType:"application/json",success:t})}function A(e){return e.startsWith("http")?e:M+"/"+e}function T(e){N(M+"/info/info.json",e)}var K=E.a.Title,S=E.a.Text,P=E.a.Paragraph,W=x.a.Meta,_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={info:null},a.parseList=function(){var e=a.state.info.where,t=a.state.info.mail,n=[];return e&&n.push.apply(n,Object(w.a)(e.map((function(e,t){return"string"===typeof e?r.a.createElement("li",{key:t},e):e.url?r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url},e.text)):r.a.createElement("li",{key:t},e.text)})))),t&&n.push(r.a.createElement("li",{key:"mail"},r.a.createElement(O.a,{type:"mail",style:{marginRight:15}}),r.a.createElement(S,{type:"secondary",copyable:!0},t))),r.a.createElement("ul",null,n)},a.parseEdu=function(){var e=a.state.info.education;return e?r.a.createElement(j.a,{className:"timeLine",mode:"left"},e.map((function(e,t){var a="processing"===e.status?r.a.createElement(O.a,{type:"clock-circle-o",style:{fontSize:"16px"}}):void 0,n=e.descriptions;return"string"===typeof n&&(n=[n]),n=n.map((function(e,t){return r.a.createElement(P,{key:t,type:"secondary",className:"small"},e)})),r.a.createElement(j.a.Item,{dot:a,key:t},n)}))):[]},a.parseCourses=function(){if(!a.state.info.courses)return[];for(var e=a.state.info.courses.maxShow,t=a.state.info.courses.list.slice(0,e),n=["magenta","red","volcano","orange","gold","lime","green","cyan","blue","geekblue","purple"],l=[];l.length<t.length;)l.push.apply(l,n);var c=t.map((function(e,t){return r.a.createElement(b.a,{className:"smaller",key:t,color:l[t]},e)}));return 0===c.length?[]:(c.length<a.state.info.courses.list.length&&c.push(r.a.createElement(b.a,{key:"omitted"},"...")),r.a.createElement(P,null,r.a.createElement(K,{level:4},"Courses"),c))},a.parseCV=function(){var e=a.state.info.cv;if(!e)return[];if("string"!==typeof e){if(!e.show)return[];e=e.url}return r.a.createElement("li",null,r.a.createElement(o.a,{type:"link",onClick:function(){window.open(A(e),"_blank")}},"My Resume"))},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;T((function(t){return e.setState({info:t})}))}},{key:"render",value:function(){var e=this,t=this.state.info;return t?r.a.createElement("div",null,r.a.createElement(g.a,{type:"flex",justify:"space-between"},r.a.createElement(v.a,{span:8},r.a.createElement(K,{level:2},r.a.createElement(S,{type:"secondary"},"HELLO,")," ",r.a.createElement("br",null)," I AM ",t.name),r.a.createElement(P,null,this.parseList()),r.a.createElement("div",{className:"margin-bottom-large"}),r.a.createElement(k.a,{orientation:"left"}," ",r.a.createElement(K,{level:3,className:"right"},"EDUCATION")),this.parseEdu(),this.parseCourses()),r.a.createElement(v.a,{span:6},r.a.createElement("a",{href:t.github},r.a.createElement(x.a,{hoverable:!0,cover:r.a.createElement("img",{alt:"Imagine that I'm very handsome",src:A(t.cover)})},r.a.createElement(W,{title:t.name,description:r.a.createElement("p",{className:"small "},t.github)})))),r.a.createElement(v.a,{span:8},r.a.createElement(k.a,null,r.a.createElement(K,{level:3},"Research Interests")),r.a.createElement(P,{type:"secondary",className:"justify indent "},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.interests}})),r.a.createElement("div",{className:"margin-top-large"}),r.a.createElement(k.a,null,r.a.createElement(K,{level:3},"FYI")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{type:"link",onClick:function(){return e.props.changeKey("paper")}},"My Publications")),r.a.createElement("li",null,r.a.createElement(o.a,{type:"link",onClick:function(){return e.props.changeKey("program")}},"My Programs")),r.a.createElement("li",null,r.a.createElement(o.a,{type:"link",onClick:function(){return e.props.changeKey("work")}},"My Work Experience")),r.a.createElement("li",null,r.a.createElement(o.a,{type:"link",onClick:function(){window.open(t.github,"_blank")}},"My Github Page")),this.parseCV())))):r.a.createElement("div",null)}}]),t}(n.Component),L=(a(221),a(34)),H=(a(223),a(99)),D=H.a.Panel,z=E.a.Text,R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;N(M+"/paper/papers.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement(H.a,{bordered:!1,defaultActiveKey:[]},this.state.data.map((function(e,a){return r.a.createElement(D,{key:a,header:t.header(e)},t.supplementMaterial(e))})))}}],[{key:"computeIndexes",value:function(e,t){if(!t)return[];"string"===typeof t&&(t=[t]);var a=[];return t.forEach((function(t){var n=e.indexOf(t),r=n+t.length;a.push.apply(a,Object(w.a)(Object(w.a)(Array(r).keys()).filter((function(e){return e>=n}))))})),new Set(a)}},{key:"computeClassArray",value:function(e,t,a,n){for(var r=Object(w.a)(Array(e.length).keys()).map((function(e){var r=[];return t.has(e)&&r.push("bold"),a.has(e)&&r.push("italic"),n.has(e)&&r.push("mark"),r.join("+")})),l=[],c=[],i=r[0],o=0,s=1;s<r.length;s++)r[s]!==i&&(l.push([o,s]),c.push(i),o=s,i=r[s]);return l.push([o,r.length]),c.push(i),{intervals:l,classes:c}}}]),t}(n.Component);R.supplementMaterial=function(e){var t=e.supplement;return t?"image"===t.type?r.a.createElement("img",{width:"100%",alt:"imagine there is a poster",src:A(t.src)}):"video"===t.type?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.src}}):r.a.createElement(L.a,{description:"There is no supplement materials for this paper."}):r.a.createElement(L.a,{description:"There is no supplement materials for this paper."})},R.header=function(e){for(var t=e.content,a=R.computeIndexes(t,e.bold),n=R.computeIndexes(t,e.italic),l=R.computeIndexes(t,e.mark),c=R.computeClassArray(t,a,n,l),i=[],o=0;o<c.intervals.length;o++){var s=c.intervals[o],u=c.classes[o],m=u.indexOf("bold")>-1,p=u.indexOf("mark")>-1,h="";u.indexOf("italic")>-1&&(h="italic"),i.push(r.a.createElement(z,{strong:m,mark:p,key:o,className:h},t.slice(s[0],s[1])))}var f=e.arxiv;f&&i.push(r.a.createElement(z,{key:"arxiv"},"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:f,target:"_blank"},"[arxiv]")));var y=e.pdf;y&&i.push(r.a.createElement(z,{key:"pdf"},"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:A(y),target:"_blank"},"[pdf]")));var d=e.github;return d&&i.push(r.a.createElement(z,{key:"github"},"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:A(d),target:"_blank"},"[github]"))),r.a.createElement(z,{className:"paperInfo"},i)};var B=E.a.Title,F=E.a.Paragraph,J=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,t=this.props.order%2?"right":"left";return r.a.createElement(E.a,{className:"margin-top-large"},r.a.createElement(k.a,{orientation:t}," ",r.a.createElement(B,{level:3},e.title)),r.a.createElement(F,{type:"secondary",className:t+" margin-"+t},e.start," - ",e.end),r.a.createElement(F,{className:"right"===t?"margin-right":""},r.a.createElement("ul",{className:t+"List"},e.descriptions.map((function(e,t){return r.a.createElement("li",{key:t},e)})))))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;N(M+"/program/programs.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data.map((function(e,t){return r.a.createElement(J,{data:e,key:t,order:t})})))}}]),t}(n.Component),q=(a(226),a(79)),G=E.a.Title,U=(E.a.Paragraph,E.a.Text),Y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).parseData=function(e,t){var a=t.span,n=t.value||t;return"string"===typeof n?r.a.createElement(q.a.Item,{span:a,label:e,key:e},n):void 0!==n.length?r.a.createElement(q.a.Item,{span:a,label:e,key:e},r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement("li",{key:t},e)})))):r.a.createElement("div",null)},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.required,a=this.props.data.detail,n=r.a.createElement(k.a,{orientation:"left"},r.a.createElement(G,{level:3},t.title," ",r.a.createElement(U,{type:"secondary",className:"smaller"},"(",t.from," - ",t.to,")")));return r.a.createElement(q.a,{className:"margin-top-large",title:n,bordered:!0},Object.keys(a).map((function(t){return e.parseData(t,a[t])})))}}]),t}(n.Component),$=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;N(M+"/work/works.json",(function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data.map((function(e,t){return r.a.createElement(Y,{data:e,key:t})})))}}]),t}(n.Component),Q=(a(228),E.a.Text),X=d.a.Header,Z=d.a.Content,ee=d.a.Footer,te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).changeKey=function(e){var t={key:e};a.handleMenuClick(t)},a.state={info:[],content:r.a.createElement(_,{changeKey:a.changeKey.bind(Object(f.a)(a))}),title:"About Me",key:"info"},a.handleMenuClick=function(e){var t,n,l=e.key;switch(l){case"info":t=r.a.createElement(_,{changeKey:a.changeKey.bind(Object(f.a)(a))}),n="About Me";break;case"paper":t=r.a.createElement(R,null),n="Publications";break;case"program":t=r.a.createElement(V,null),n="Programs";break;case"work":t=r.a.createElement($,null),n="Work Experience";break;default:t=null,n=""}a.setState({content:t,title:n,key:l})},a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("here"),T((function(t){console.log(t),e.setState({info:t})}))}},{key:"render",value:function(){var e=this,t=this.state.info;return console.log(t),t?r.a.createElement(d.a,null,r.a.createElement(X,{style:{position:"fixed",zIndex:1,width:"100%"}},r.a.createElement("div",{className:"logo"},t.name),r.a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["info"],selectedKeys:[this.state.key],style:{lineHeight:"64px"},onClick:this.handleMenuClick},r.a.createElement(s.a.Item,{key:"info"},"About Me"),r.a.createElement(s.a.Item,{key:"paper"},"Publications"),r.a.createElement(s.a.Item,{key:"program"},"Programs"),r.a.createElement(s.a.Item,{key:"work"},"Work Experience"))),r.a.createElement(Z,{style:{padding:"0 50px",marginTop:64}},r.a.createElement(i.a,{style:{margin:"16px 0"}},r.a.createElement(i.a.Item,null,r.a.createElement(o.a,{type:"link",style:{padding:0},onClick:function(){return e.changeKey("info")}},t.name)),r.a.createElement(i.a.Item,null,this.state.title)),r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:380}},this.state.content)),r.a.createElement(ee,{style:{textAlign:"center"}},"Contact: ",r.a.createElement(Q,{type:"secondary",copyable:!0},t.mail))):r.a.createElement("div",null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[134,1,2]]]);
//# sourceMappingURL=main.666d9bfd.chunk.js.map