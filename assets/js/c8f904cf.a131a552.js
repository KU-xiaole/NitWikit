"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5898],{6685:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>h});var i=n(4848),r=n(8453);const d={sidebar_position:5},c="\u6570\u636e\u5e93\u5b89\u88c5",t={id:"\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u6570\u636e\u5e93\u5b89\u88c5",title:"\u6570\u636e\u5e93\u5b89\u88c5",description:"\u672c\u90e8\u5206\u8bb2\u89e3\u5728\u547d\u4ee4\u884c\u4e2d\u5b89\u88c5\u5e38\u89c1\u6570\u636e\u5e93\u7684\u65b9\u5f0f\u3002\u672c\u6559\u7a0b\u4ee5 Ubuntu 24.04\u7cfb\u7edf\u4e3a\u4f8b",source:"@site/docs/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u6570\u636e\u5e93\u5b89\u88c5.md",sourceDirName:"\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d",slug:"/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u6570\u636e\u5e93\u5b89\u88c5",permalink:"/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u6570\u636e\u5e93\u5b89\u88c5",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u6570\u636e\u5e93\u5b89\u88c5.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",permalink:"/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u7ef4\u6301\u670d\u52a1\u5668\u540e\u53f0\u8fd0\u884c"},next:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f\uff08frp\uff09",permalink:"/\u8fdb\u9636\u6559\u7a0b/Linux\u5f00\u670d/\u642d\u5efa\u5185\u7f51\u7a7f\u900f"}},l={},h=[{value:"MySQL",id:"mysql",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:3},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:3},{value:"\u7528\u6237\u6388\u6743",id:"\u7528\u6237\u6388\u6743",level:3},{value:"Redis",id:"redis",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u6570\u636e\u5e93\u5b89\u88c5",children:"\u6570\u636e\u5e93\u5b89\u88c5"}),"\n",(0,i.jsx)(s.p,{children:"\u672c\u90e8\u5206\u8bb2\u89e3\u5728\u547d\u4ee4\u884c\u4e2d\u5b89\u88c5\u5e38\u89c1\u6570\u636e\u5e93\u7684\u65b9\u5f0f\u3002\u672c\u6559\u7a0b\u4ee5 Ubuntu 24.04\u7cfb\u7edf\u4e3a\u4f8b"}),"\n",(0,i.jsx)(s.h2,{id:"mysql",children:"MySQL"}),"\n",(0,i.jsx)(s.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsxs)(s.p,{children:["\u5728",(0,i.jsx)(s.a,{href:"https://dev.mysql.com/downloads/repo/apt/",children:"\u5b98\u65b9\u7f51\u7ad9"}),"\u9875\u9762\u4e0b\u8f7d ",(0,i.jsx)(s.code,{children:"mysql-apt-config_0.8.301_all.deb"})]}),"\n",(0,i.jsx)(s.p,{children:"\u8fd9\u4e2a\u5305\u662f\u4e00\u4e2a\u914d\u7f6eAPT \u7684 MySQL \u4ed3\u5e93\u3002\u5b89\u88c5 mysql-apt-config \u540e\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u60f3\u8981\u5b89\u88c5\u7684MySQL\u7248\u672c\u3002"}),"\n",(0,i.jsxs)(s.p,{children:["\u5c06\u6587\u4ef6\u4f20\u5165\u670d\u52a1\u5668 ",(0,i.jsx)(s.code,{children:"/opt"})," \u76ee\u5f55\u4e0b\uff0c\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88c5\uff1a"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"dpkg -i mysql-apt-config_0.8.30-1_all.deb\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(5297).A+"",width:"536",height:"95"})}),"\n",(0,i.jsx)(s.p,{children:"\u5b89\u88c5\u5b8c\u6210\u540e\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u66f4\u65b0\u8f6f\u4ef6\u5305\u5217\u8868\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo apt update\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u968f\u540e\u8fdb\u884c MySQL server \uff08\u5373 MySQL \u670d\u52a1\uff09\u7684\u5b89\u88c5\uff0c\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88c5 MySQL\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"apt install mysql-community-server -y\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(4714).A+"",width:"1194",height:"540"})}),"\n",(0,i.jsx)(s.p,{children:"MySQL \u9ed8\u8ba4\u4f1a\u81ea\u5e26\u968f\u673a\u5bc6\u7801\uff0c\u6240\u4ee5\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210\u540e\u9700\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u67e5\u770b\u521d\u59cb\u5bc6\u7801\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"mysqld --initialize \u2013console\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(9923).A+"",width:"554",height:"59"})}),"\n",(0,i.jsx)(s.p,{children:"\u7ea2\u6846\u90e8\u5206\u5c31\u662f\u521d\u59cb\u5bc6\u7801\uff0c\u5b89\u88c5\u5df2\u7ecf\u5b8c\u6bd5\uff0c\u63a5\u4e0b\u6765\u542f\u52a8\u5e76 \u5c06 MySQL\u8bbe\u4e3a\u5f00\u673a\u81ea\u542f\u52a8\uff0c\u5206\u522b\u8f93\u5165"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"systemctl start mysql\nsystemctl enable mysql\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u542f\u52a8 MySQL \u670d\u52a1\u540e\uff0c\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\u8fdb\u5165 MySQL \u6307\u4ee4\u884c\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"mysql -uroot -p\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u6309\u63d0\u793a\u8f93\u5165\u5bc6\u7801\u767b\u5f55\u5230 MySQL"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(8700).A+"",width:"586",height:"207"})}),"\n",(0,i.jsx)(s.p,{children:"\u8f93\u5165\u4fee\u6539\u5bc6\u7801\u6307\u4ee4\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"ALTER user 'root'@'localhost' IDENTIFIED BY 'NewPassword';\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u5c06 NewPassword \u4fee\u6539\u4e3a\u4f60\u81ea\u5df1\u8bbe\u7f6e\u7684\u5bc6\u7801"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u81f3\u6b64\uff0cMySQL \u5b89\u88c5\u5df2\u7ecf\u5b8c\u6210"})}),"\n",(0,i.jsx)(s.h3,{id:"\u521b\u5efa\u8868",children:"\u521b\u5efa\u8868"}),"\n",(0,i.jsx)(s.admonition,{type:"warning",children:(0,i.jsxs)(s.p,{children:["\u4ee5\u4e0b\u7684\u64cd\u4f5c\u4e3a SQL \u8bed\u53e5\uff0c\u5728\u7ed3\u5c3e\u5904\u7684 ",(0,i.jsx)(s.code,{children:";"})," \u4e0d\u80fd\u7701\u7565\u5426\u5219\u4f1a\u62a5\u9519\u3002"]})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"CREATE DATABASE IF NOT EXISTS XXX DEFAULT CHARACTER SET utf8mb4;\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8fd9\u91cc\u7684 XXX \u53ef\u4ee5\u9009\u62e9\u662f\u4f60\u8981\u4f7f\u7528\u6570\u636e\u5e93\u7684\u63d2\u4ef6\u540d\u79f0\u4e5f\u53ef\u4ee5\u662f\u81ea\u5b9a\u4e49\u5b57\u7b26"}),"\n",(0,i.jsx)(s.h3,{id:"\u521b\u5efa\u7528\u6237",children:"\u521b\u5efa\u7528\u6237"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"CREATE USER 'UserName'@'%' IDENTIFIED BY 'Password';\n"})}),"\n",(0,i.jsx)(s.h3,{id:"\u7528\u6237\u6388\u6743",children:"\u7528\u6237\u6388\u6743"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"GRANT ALL PRIVILEGES ON \u6570\u636e\u5e93\u540d\u79f0.* TO 'UserName'@'%';\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"UserName \u586b\u5199\u7528\u6237\u540d\uff0c"}),(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"%"})," \u4ee3\u8868\u6240\u6709 IP \u5730\u5740\uff0c\u5982\u679c Minecraft \u670d\u52a1\u7aef\u548c\u6570\u636e\u5e93\u5904\u4e8e\u540c\u4e00\u4e2a\u670d\u52a1\u5668\uff0c\u5efa\u8bae\u6539\u6210 localhost \u4ee5\u589e\u52a0\u5b89\u5168\u6027\uff0c"]}),(0,i.jsx)(s.p,{children:"Password \u586b\u5199\u7528\u6237\u7684\u5bc6\u7801\uff08\u7531\u4e8e\u5b89\u5168\u6027\u8bbe\u7f6e\uff0c\u5bc6\u7801\u5fc5\u987b\u6709\u5927\u5c0f\u5199\u957f\u5ea68\u4f4d\u4ee5\u4e0a\uff0c\u5e76\u4e14\u9ed8\u8ba4\u5173\u95ed\u8fdc\u7a0b\u8bbf\u95ee\uff09"}),(0,i.jsx)(s.p,{children:"\u5982\u679c\u9700\u8981\u8bbe\u7f6e\u5bc6\u7801\u5f3a\u5ea6\u4e3a\u4f4e\uff0c\u5f00\u542f\u8fdc\u7a0b\u8bbf\u95ee\u7b49\u4e0d\u5b89\u5168\u7684\u64cd\u4f5c\u8bf7\u81ea\u884c\u767e\u5ea6\uff0c\u5bf9\u4e8e\u4fee\u6539\u5b89\u5168\u8bbe\u7f6e\u4e4b\u540e\u7684\u6570\u636e\u5e93\u5b89\u5168\u95ee\u9898\uff0c\u672c\u7ad9\u6982\u4e0d\u8d1f\u8d23"})]}),"\n",(0,i.jsx)(s.h2,{id:"redis",children:"Redis"}),"\n",(0,i.jsx)(s.p,{children:"\u4f9d\u6b21\u5728\u7ec8\u7aef\u8f93\u5165\u4ee5\u4e0b\u6307\u4ee4\uff0c\u5206\u522b\u64cd\u4f5c\u4e3a\u5b89\u88c5\u4f9d\u8d56\u3001\u4e0b\u8f7d Redis\u3001\u5c06\u5b89\u88c5\u5305\u653e\u5728\u5b89\u88c5\u8def\u5f84\u3002\u66f4\u65b0\u8f6f\u4ef6\u5305\uff0c\u5b89\u88c5\u4e0b\u8f7d\u597d\u7684 Redis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'apt install lsb-release curl gpg\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\napt update\napt install redis -y\n'})}),"\n",(0,i.jsxs)(s.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\u8f93\u5165 ",(0,i.jsx)(s.code,{children:"systemctl start redis-server"})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(1589).A+"",width:"310",height:"35"})}),"\n",(0,i.jsxs)(s.p,{children:["\u81f3\u6b64\u5b89\u88c5\u5b8c\u6210\uff0c\u8f93\u5165 ",(0,i.jsx)(s.code,{children:"redis-cli"})," \u5373\u53ef\u8fdb\u5165\u547d\u4ee4\u884c\u7ba1\u7406"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(7582).A+"",width:"185",height:"57"})}),"\n",(0,i.jsxs)(s.admonition,{type:"tip",children:[(0,i.jsx)(s.p,{children:"\u4f7f\u7528 systemctl enable redis-server \u4f7f Redis \u5f00\u673a\u81ea\u542f"}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(6807).A+"",width:"925",height:"102"})})]})]})}function o(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5297:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/1-f2956a74003a78a74303298699366c14.png"},4714:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/2-9d54ba77bb5a2688b62b964ebae9ba44.png"},9923:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/3-81ecee708e22efaf1103acacc37f24e9.png"},8700:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/4-e4bdcb71441274a8fddafdfb8cf91481.png"},1589:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/5-855e7709bbe0c449ca92ec4e2230e193.png"},7582:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/6-80b4284f459548d71bac118f1a8bd802.png"},6807:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/7-f920b2002a318ee79446397e35659ef3.png"},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>t});var i=n(6540);const r={},d=i.createContext(r);function c(e){const s=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:s},e.children)}}}]);