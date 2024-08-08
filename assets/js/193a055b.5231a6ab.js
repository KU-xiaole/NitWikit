"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3949],{49801:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=s(74848),r=s(28453),a=s(11470),i=s(19365);const l={title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:2},o="\u8fde\u63a5\u670d\u52a1\u5668",c={id:"advance/Linux/Connect-to-server",title:"\u8fde\u63a5\u670d\u52a1\u5668",description:"Linux\u6709\u4e00\u4e2a\u5de5\u5177\u88ab\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528\uff0c\u5b83\u5c31\u662fssh\u3002\u5b83\u867d\u7136\u4e0d\u80fd\u8fdc\u7a0b\u63a7\u5236\u684c\u9762\uff0c\u4f46\u662f\u53ef\u4ee5\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u7684\u547d\u4ee4\u884c\uff0c\u5e76\u8ba9\u670d\u52a1\u5668\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002\u7531\u4e8essh\u975e\u5e38\u5e38\u7528\uff0c\u73b0\u5728\u5f88\u591aLinux\u7cfb\u7edf\u90fd\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u8fd9\u4e2a\u8f6f\u4ef6\u3002",source:"@site/docs/advance/Linux/Connect-to-server.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/Connect-to-server",permalink:"/NitWikit/advance/Linux/Connect-to-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/Connect-to-server.md",tags:[],version:"current",lastUpdatedBy:"\u5f20\u5b87\u8861",lastUpdatedAt:1723083893e3,sidebarPosition:2,frontMatter:{title:"\u8fde\u63a5\u670d\u52a1\u5668",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux \u5f00\u670d",permalink:"/NitWikit/Sundry/Advance/Linux"},next:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",permalink:"/NitWikit/advance/Linux/keep-running"}},u={},d=[{value:"\u5f00\u542fssh\u670d\u52a1",id:"\u5f00\u542fssh\u670d\u52a1",level:2},{value:"\u8fde\u63a5ssh\u670d\u52a1",id:"\u8fde\u63a5ssh\u670d\u52a1",level:2},{value:"Linux\u7684ssh\u547d\u4ee4",id:"linux\u7684ssh\u547d\u4ee4",level:3},{value:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",id:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u8fde\u63a5\u670d\u52a1\u5668",children:"\u8fde\u63a5\u670d\u52a1\u5668"}),"\n",(0,t.jsx)(n.p,{children:"Linux\u6709\u4e00\u4e2a\u5de5\u5177\u88ab\u4e1a\u754c\u5e7f\u6cdb\u4f7f\u7528\uff0c\u5b83\u5c31\u662fssh\u3002\u5b83\u867d\u7136\u4e0d\u80fd\u8fdc\u7a0b\u63a7\u5236\u684c\u9762\uff0c\u4f46\u662f\u53ef\u4ee5\u8fdc\u7a0b\u767b\u5f55\u670d\u52a1\u5668\u7684\u547d\u4ee4\u884c\uff0c\u5e76\u8ba9\u670d\u52a1\u5668\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002\u7531\u4e8essh\u975e\u5e38\u5e38\u7528\uff0c\u73b0\u5728\u5f88\u591aLinux\u7cfb\u7edf\u90fd\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86\u8fd9\u4e2a\u8f6f\u4ef6\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5f00\u542fssh\u670d\u52a1",children:"\u5f00\u542fssh\u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9\u5ba2\u6237\u80fd\u987a\u5229\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u4e91\u670d\u52a1\u5668\u7684ssh\u4e00\u822c\u9ed8\u8ba4\u5f00\u542f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u5bb6\u91cc\u4e91\uff0c\u6216\u8005\u4e91\u670d\u52a1\u5668\u7684ssh\u786e\u5b9e\u6ca1\u6709\u5f00\u542f\uff08\u6bd4\u5982\u4f60\u662f\u53ea\u80fd\u901a\u8fc7\u670d\u52a1\u5546\u63d0\u4f9b\u7684VNC\u6216\u8005\u7b2c\u4e09\u65b9\u8fdc\u63a7\u8f6f\u4ef6\u8fde\u63a5\u7684\u670d\u52a1\u5668\uff0c\u65e0\u6cd5\u4f7f\u7528ssh\uff09\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u5148\u5f00\u542fssh\u624d\u80fd\u8fdb\u884c\u8fde\u63a5\u3002\u5728\u4e3b\u6d41\u7684Linux\u7cfb\u7edf\u4e2d\uff0c\u6267\u884c",(0,t.jsx)(n.code,{children:"sudo systemctl start ssh"}),"\u5373\u53ef\u5f00\u542fssh\uff0c\u5982\u679c\u8fd9\u4e9b\u547d\u4ee4\u90fd\u62a5\u9519\uff0c\u8bc1\u660essh\u670d\u52a1\u5b58\u5728\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u628a\u62a5\u9519\u590d\u5236\u7c98\u8d34\u5230\u641c\u7d22\u5f15\u64ce\u4e0a\u67e5\u8be2\u600e\u4e48\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002\u5f00\u542fssh\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u8fde\u63a5\u5230\u8fd9\u53f0\u670d\u52a1\u5668\u4e86\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6210\u529f\u5f00\u542fssh\u670d\u52a1\u540e\uff0c\u5982\u679c\u8981\u4ece\u516c\u7f51\u8fde\u63a5\uff0c\u4f60\u8fd8\u9700\u8981\u628assh\u670d\u52a1\u7684\u7aef\u53e3",(0,t.jsx)(n.code,{children:"22"}),"\u5f00\u653e\u5230\u516c\u7f51\u3002\u5f00\u653e\u7684\u65b9\u6cd5\u4e0e\u5f00\u653eWindows\u7684\u8fdc\u7a0b\u684c\u9762\u7aef\u53e3\u7684\u65b9\u5f0f\u5b8c\u5168\u76f8\u540c\uff0c\u4f46\u662f\u534f\u8bae\u53ea\u9700\u8981TCP\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["\u914d\u7f6e\u76f4\u63a5\u5728\u516c\u7f51\u4f7f\u752822\u7aef\u53e3\u8fde\u63a5\u670d\u52a1\u5668ssh",(0,t.jsx)(n.strong,{children:"\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684\u5b89\u5168\u6027\u95ee\u9898"}),"\uff0c\u8be6\u89c1",(0,t.jsx)(n.a,{href:"/NitWikit/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4f55\u62b5\u5fa1\u7f51\u7edc\u653b\u51fb"}),"\u3002",(0,t.jsx)(n.br,{}),"\n","\u53e6\u5916\u9664\u975e\u6709\u660e\u786e\u9700\u6c42\uff0c\u4e0d\u8981\u968f\u610f\u914d\u7f6eUDP\u534f\u8bae\u7aef\u53e3\u6620\u5c04\uff0c\u5305\u62ec\u4e0a\u6587\u4e2d\u63d0\u5230\u7684",(0,t.jsx)(n.strong,{children:"\u4e0d\u9700\u8981UDP\u534f\u8bae"}),"\u7684ssh\uff0c\u5426\u5219\u53ef\u80fd\u5bfc\u81f4\u4f60\u7684\u670d\u52a1\u5668\u88abDDoS\uff01\u8be6\u89c1",(0,t.jsx)(n.a,{href:"/NitWikit/process/maintenance/how-to-defend-against-cyber-attacks",children:"\u5982\u4f55\u62b5\u5fa1\u7f51\u7edc\u653b\u51fb"}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fde\u63a5ssh\u670d\u52a1",children:"\u8fde\u63a5ssh\u670d\u52a1"}),"\n",(0,t.jsx)(n.h3,{id:"linux\u7684ssh\u547d\u4ee4",children:"Linux\u7684ssh\u547d\u4ee4"}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u50cf Windows \u4e0d\u7528\u5b89\u88c5\u4efb\u4f55\u8f6f\u4ef6\u5c31\u80fd\u8fde\u63a5 Windows \u7684\u8fdc\u7a0b\u684c\u9762\u4e00\u6837\uff0c Linux \u4e5f\u5185\u7f6e\u4e86\u8fde\u63a5 ssh \u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u6267\u884c ssh \u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u3002\u5b83\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ssh \u7528\u6237\u540d@\u8fde\u63a5\u5730\u5740\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u4f55\u8981\u6307\u5b9a\u7aef\u53e3\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u7aef\u53e3\u53c2\u6570\u3002\u5728\u4e00\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd9\u4e2a\u53c2\u6570\u662f",(0,t.jsx)(n.code,{children:"-p"}),"\uff0c\u4f8b\u5982",(0,t.jsx)(n.code,{children:"ssh root@yizhan.wiki -p 48291"}),"\uff0c\u6709\u4e00\u4e9b\u5de5\u5177\u4e0a\u5219\u662f\u76f4\u63a5\u5728\u540e\u9762\u8f93\u5165\u7aef\u53e3\uff0c\u4f8b\u5982Xshell\u662f",(0,t.jsx)(n.code,{children:"ssh root@yizhan.wiki 48291"}),"\u3002\u4f60\u9700\u8981\u6839\u636e\u4e0d\u540c\u7684\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u5f0f\u6765\u786e\u5b9assh\u7684\u547d\u4ee4\u683c\u5f0f\u3002\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u4ec5\u6267\u884c",(0,t.jsx)(n.code,{children:"ssh"}),"\uff0c\u7136\u540e\u8ba9 ssh \u5de5\u5177\u63d0\u793a\u4f60\u5982\u4f55\u4f7f\u7528\u5f53\u524d\u5de5\u5177\u7684\u8fd9\u4e2a\u547d\u4ee4\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5",children:"\u4f7f\u7528\u5de5\u5177\u8fde\u63a5"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5de5\u5177\u8fde\u63a5\u81f3\u670d\u52a1\u5668\uff0c\u5728\u8fd9\u91cc\u4e3e\u51fa\u51e0\u4e2a\u5de5\u5177"}),"\n","\n",(0,t.jsxs)(a.A,{children:[(0,t.jsxs)(i.A,{value:"powershell",label:"powershell",default:!0,children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2543).A+"",width:"963",height:"752"})}),(0,t.jsx)(n.p,{children:"windows \u7cfb\u7edf\u81ea\u5e26\u7684 powershell"}),(0,t.jsx)(n.p,{children:"\u6309\u4e0b Win + R \u8f93\u5165 powershell \u5373\u53ef"}),(0,t.jsx)(n.p,{children:"\u968f\u540e\u5728 cmd \u6216 powershell \u4e2d\u8f93\u5165 ssh -p (port) (username)@(hostname) \u5373\u53ef\u8fde\u63a5 Linux \u670d\u52a1\u5668\u3002"}),(0,t.jsx)(n.p,{children:"\u6b64\u65f6\u4f1a\u5f39\u51fa\u662f\u5426\u4fdd\u5b58\u670d\u52a1\u5668\u5bc6\u94a5\uff0c\u9009\u62e9\u63a5\u53d7\u5e76\u4fdd\u5b58\uff0c\u4e4b\u540e\u5c31\u4e0d\u4f1a\u518d\u5f39\u51fa\u3002"}),(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"port \u8f93\u5165\u670d\u52a1\u5668\u7684 ssh \u7aef\u53e3\nusername \u4e3a\u767b\u5f55\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\nhostname \u4e3a\u670d\u52a1\u5668\u7684\u57df\u540d\u6216\u8005 IP"})})]}),(0,t.jsxs)(i.A,{value:"windterm",label:"WindTerm",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"WindTerm",src:s(57556).A+"",width:"2560",height:"1520"})}),(0,t.jsx)(n.p,{children:"\u4e00\u4e2a\u5f00\u6e90\u7684 SSH/Telnet/Serial/Shell/Sftp \u5ba2\u6237\u7aef\u5de5\u5177"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/kingToolbox/WindTerm",children:"https://github.com/kingToolbox/WindTerm"})})]}),(0,t.jsxs)(i.A,{value:"finelshell",label:"FinelShell",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(81076).A+"",width:"1758",height:"847"})}),(0,t.jsx)(n.p,{children:"FinalShell\u662f\u4e00\u4f53\u5316\u7684\u7684\u670d\u52a1\u5668,\u7f51\u7edc\u7ba1\u7406\u8f6f\u4ef6,\u4e0d\u4ec5\u662fssh\u5ba2\u6237\u7aef,\u8fd8\u662f\u529f\u80fd\u5f3a\u5927\u7684\u5f00\u53d1,\u8fd0\u7ef4\u5de5\u5177,\u5145\u5206\u6ee1\u8db3\u5f00\u53d1,\u8fd0\u7ef4\u9700\u6c42."})]}),(0,t.jsxs)(i.A,{value:"xshell",label:"Xshell",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://www.xshell.com/wp-content/uploads/2020/10/p-xshell7-top-zh.png",alt:""})}),(0,t.jsx)(n.p,{children:"\u4ed6\u79f0\u81ea\u5df1\u662f \u4e1a\u754c\u6700\u5f3a\u5927\u7684SSH\u5ba2\u6237\u673a"})]}),(0,t.jsx)(i.A,{value:"termux",lable:"\u5b89\u5353\u624b\u673a\uff08termux\uff09",children:(0,t.jsxs)(n.p,{children:["\u4f60\u9700\u8981\u5b89\u88c5 termux \u8fd9\u4e2a\u8f6f\u4ef6\u3002\u4f60\u53ef\u4ee5\u53bb Google Play \u4e0b\u8f7d\uff0c\u4e5f\u53ef\u4ee5\u53bb",(0,t.jsx)(n.a,{href:"https://github.com/termux/termux-app",children:"\u5b83\u7684\u5f00\u6e90\u5730\u5740"}),"\u4e0b\u8f7d\u3002",(0,t.jsx)(n.br,{}),"\n","\u5b89\u88c5\u597d\u4e4b\u540e\uff0c\u6253\u5f00\u8f6f\u4ef6\u5c31\u662f\u547d\u4ee4\u884c\uff0c\u968f\u540e\u76f4\u63a5\u4f7f\u7528 ssh \u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u3002",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(71086).A+"",width:"1812",height:"2176"})]})}),(0,t.jsxs)(i.A,{value:"zsh",lable:"macOS\uff08zsh\uff09",children:[(0,t.jsx)(n.p,{children:"macOS \u5185\u7f6e\u7684\u7ec8\u7aefapp \u4e2d\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5c31\u662f zsh\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u8fde\u63a5 ssh \u3002\u8981\u6253\u5f00\u8fd9\u4e2a\u5de5\u5177\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff1a"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uff08\u5982\u679c\u7ec8\u7aefapp\u6ca1\u6709\u88ab\u79fb\u52a8\u8fc7\uff09\u6253\u5f00\u542f\u52a8\u53f0\uff0c\u6253\u5f00\u7b2c\u4e00\u9875\u7684\u5176\u4ed6\u6587\u4ef6\u5939\uff0c\u70b9\u51fb\u7ec8\u7aef\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728\u5e94\u7528\u6587\u4ef6\u5939\uff08\u5165\u53e3\u9ed8\u8ba4\u56fa\u5b9a\u5728\u8bbf\u8fbe\u4fa7\u8fb9\u680f\u4e0a\uff09\u91cc\u627e\u5230\u5b83\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u6309\u4e0bcommand+\u7a7a\u683c\u6216\u952e\u76d8\u4e0a\u7684\u641c\u7d22\u952e\u5524\u8d77 spotlight \uff0c\u8f93\u5165\u201c\u7ec8\u7aef\u201d\uff0c\u7136\u540e\u5b83\u5c31\u4f1a\u663e\u793a\u5728\u4e0b\u9762\u3002"}),"\n"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:s(32266).A+"",width:"1394",height:"966"}),(0,t.jsx)(n.br,{}),"\n","\u6253\u5f00\u7ec8\u7aef\u540e\uff0c\u4f7f\u7528\u4e0a\u6587\u4e2d\u63d0\u5230\u7684ssh\u547d\u4ee4\u5373\u53ef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u3002"]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),a=s(23104),i=s(56347),l=s(205),o=s(57485),c=s(31682),u=s(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=x({queryString:s,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(74848);function v(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,s=o.indexOf(n),r=l[s].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},2543:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/1-daf76eddacdb25edc4d3e1862e24a46d.png"},81076:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/2-2bf042e5ab3d3b4724c8b904ded82dbb.png"},57556:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/WindTerm-a6c90b279d68879aa4026a51bea75f76.png"},32266:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/macOS_terminal-f90865fd5bb3791d09224092269b5e91.png"},71086:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/termux_screenshot-f9c83ca2dffadc48ff9e4fa59f138544.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);