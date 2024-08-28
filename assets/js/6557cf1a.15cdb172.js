"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6569],{74410:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var a=i(86070),l=i(18355);const s={sidebar_position:2,title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",slug:"/optimize/jvm/common"},r="\u901a\u7528\u53c2\u6570",c={id:"process/maintenance/optimize/jvm/common",title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",description:"\u5927\u9875\u652f\u6301",source:"@site/docs-java/process/maintenance/optimize/jvm/common.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm/common",permalink:"/NitWikit/Java/optimize/jvm/common",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/common.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:172483188e4,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",slug:"/optimize/jvm/common"},sidebar:"tutorialSidebar",previous:{title:"JVM \u4f18\u5316",permalink:"/NitWikit/Java/optimize/jvm"},next:{title:"Dragonwell 8",permalink:"/NitWikit/Java/optimize/jvm/dragonwell8"}},d={},t=[{value:"\u5927\u9875\u652f\u6301",id:"\u5927\u9875\u652f\u6301",level:2},{value:"SIMD",id:"simd",level:2},{value:"\u4e0b\u8f7d\u6e90\u52a0\u901f",id:"\u4e0b\u8f7d\u6e90\u52a0\u901f",level:2},{value:"\u4e2d\u6587\u7f16\u7801",id:"\u4e2d\u6587\u7f16\u7801",level:2},{value:"\u5220\u9664\u5783\u573e\u4fe1\u606f",id:"\u5220\u9664\u5783\u573e\u4fe1\u606f",level:2},{value:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",id:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",level:2},{value:"\u5f02\u6b65\u65e5\u5fd7",id:"\u5f02\u6b65\u65e5\u5fd7",level:2},{value:"\u66f4\u957f\u7684 KeepAlive \u65f6\u95f4",id:"\u66f4\u957f\u7684-keepalive-\u65f6\u95f4",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u901a\u7528\u53c2\u6570",children:"\u901a\u7528\u53c2\u6570"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5927\u9875\u652f\u6301",children:"\u5927\u9875\u652f\u6301"}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\u5728 WINDOWS \u4e0a\u4f7f\u7528\u5927\u9875,\u5fc5\u987b\u8981\u4ee5\u7ba1\u7406\u5458\u542f\u52a8"}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u7136,\u5728\u52a8\u624b\u524d,\u8ba9\u6211\u4eec\u5148\u8bd5\u4e00\u8bd5\u662f\u4e0d\u662f\u7cfb\u7edf\u5df2\u7ecf\u652f\u6301\u4e86\u8fd9\u9879\u529f\u80fd ,\u5728\u63a7\u5236\u53f0\u6267\u884c\u6b64\u547d\u4ee4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"java -Xlog:gc+init -XX:+UseLargePages -Xmx1g -version\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u51fa\u73b0\u4e86\u4ee5\u4e0b\u5b57\u6837,\u90a3\u4e48\u8bf4\u660e\u4e0d\u5b8c\u5168\u517c\u5bb9\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"UseLargePages disabled, no large pages configured and available on the system.\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e48\u5c31\u8bf4\u660e\u5f53\u524d\u7cfb\u7edf\u5e76\u4e0d\u652f\u6301\u5927\u9875,\u4e0d\u8fc7\u4e0d\u8981\u6025,\u53ef\u4ee5\u8bd5\u4e00\u4e0b\u8fd9\u4e00\u884c\u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"java -Xlog:gc+init -XX:+UseTransparentHugePages -Xmx1g -version\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u770b\u5230 ",(0,a.jsx)(n.code,{children:"Large Page Support: Enabled (Transparent)"})," ,\u8868\u793a\u4f60\u7684\u7cfb\u7edf\u652f\u6301\u900f\u660e\u5927\u9875"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f46\u662f\u5982\u679c\u4f60\u4f9d\u7136\u4e0d\u652f\u6301\u6216\u8005\u60f3\u8981\u8ffd\u6c42\u6781\u81f4\u6027\u80fd,\u53ef\u4ee5\u53bb\u767e\u5ea6\u641c\u7d22\u5f53\u524d\u7684\u7cfb\u7edf\u5982\u4f55\u5f00\u542f\u5927\u9875,"}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u5c31\u4e0d\u518d\u8fc7\u591a\u7684\u8d58\u8ff0\u4e86\u3002(LargePages \u5bf9\u670d\u52a1\u5668\u63d0\u5347\u76f8\u5f53\u5de8\u5927,\u5728\u6211\u7684\u7535\u8111\u4e0a,\u5b83\u63d0\u5347\u4e86 50%\u7684\u6027\u80fd)"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u652f\u6301 LargePages ,\u52a0\u4e0a\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-XX:+UseLargePages  -XX:LargePageSizeInBytes=2m\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u652f\u6301 TransparentHugePages (\u4e0d\u8981\u628a\u4e24\u4e2a\u90fd\u52a0\u4e0a,\u4f18\u5148 LargePages),\u52a0\u4e0a\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-XX:+UseTransparentHugePages -XX:LargePageSizeInBytes=2m\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"\u5728\u67d0\u4e9b\u670d\u52a1\u5668\u4e0a,\u5f00\u542f\u5927\u9875\u540e,\u4f1a\u5ef6\u957f JVM \u7684\u542f\u52a8\u65f6\u95f4,\u65f6\u95f4\u4ece\u5341\u79d2\u5230\u5341\u5206\u949f\u4e0d\u7b49"})}),"\n",(0,a.jsx)(n.h2,{id:"simd",children:"SIMD"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Pufferfish \u7684\u5206\u652f(Purpur,Leaf,Leaves,Gale),\u4f60\u53ef\u4ee5\u6dfb\u52a0\u6b64\u53c2\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"--add-modules=jdk.incubator.vector\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4e0b\u8f7d\u6e90\u52a0\u901f",children:"\u4e0b\u8f7d\u6e90\u52a0\u901f"}),"\n",(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u7684 SpigotLibraryLoader \u4e0b\u8f7d\u6e90\u5728\u56fd\u5185\u8bbf\u95ee\u5f88\u6162,\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Leaf,\u4f60\u53ef\u4ee5\u6dfb\u52a0\u53c2\u6570\u4f7f\u7528\u56fd\u5185\u4e0b\u8f7d\u6e90\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-DLeaf.library-download-repo=https://maven.aliyun.com/repository/public\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4e2d\u6587\u7f16\u7801",children:"\u4e2d\u6587\u7f16\u7801"}),"\n",(0,a.jsx)(n.p,{children:"\u9632\u6b62\u4e71\u7801"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-Dfile.encoding=UTF-8\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5220\u9664\u5783\u573e\u4fe1\u606f",children:"\u5220\u9664\u5783\u573e\u4fe1\u606f"}),"\n",(0,a.jsx)(n.p,{children:"(\u4ec5\u9002\u5408 Leaf \u6216\u8005 Gale)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-Dgale.log.warning.root=false -Dgale.log.warning.offline.mode=false\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f",children:"\u66f4\u5feb\u7684\u5b89\u5168\u968f\u673a\u6570\u53d1\u751f"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-Djava.security.egd=file:/dev/urandom\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5f02\u6b65\u65e5\u5fd7",children:"\u5f02\u6b65\u65e5\u5fd7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:" -Xlog:async\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f02\u6b65\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65e5\u5fd7\u8bb0\u5f55\u7684\u987a\u5e8f\u4e0d\u786e\u5b9a"}),"\n",(0,a.jsx)(n.h3,{id:"\u66f4\u957f\u7684-keepalive-\u65f6\u95f4",children:"\u66f4\u957f\u7684 KeepAlive \u65f6\u95f4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"-Dpaper.playerconnection.keepalive=60\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u7f51\u7edc\u4e0d\u597d,\u53ef\u4ee5\u9002\u5f53\u5ef6\u957f keepalive \u65f6\u95f4,\u6253\u5f00",(0,a.jsx)(n.a,{href:"/NitWikit/Java/process/maintenance/optimize/go#%E5%BF%83%E8%B7%B3%E8%BF%9E%E6%8E%A5",children:"alternate-keepalive"})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},18355:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var a=i(30758);const l={},s=a.createContext(l);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);