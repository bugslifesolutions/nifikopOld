(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(161)),c={id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},i={unversionedId:"2_setup/2_platform_setup/1_gke",id:"2_setup/2_platform_setup/1_gke",isDocsHomePage:!1,title:"Google Kubernetes Engine",description:"Follow these instructions to prepare a GKE cluster for NiFiKop",source:"@site/../docs/2_setup/2_platform_setup/1_gke.md",slug:"/2_setup/2_platform_setup/1_gke",permalink:"/nifikop/docs/next/2_setup/2_platform_setup/1_gke",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/../docs/2_setup/2_platform_setup/1_gke.md",version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1610097720,sidebar_label:"Google Kubernetes Engine",sidebar:"docs",previous:{title:"Getting Started",permalink:"/nifikop/docs/next/2_setup/1_getting_started"},next:{title:"MiniKube",permalink:"/nifikop/docs/next/2_setup/2_platform_setup/2_minikube"}},l=[],s={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Follow these instructions to prepare a GKE cluster for NiFiKop"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Setup environment variables.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"export GCP_PROJECT=<project_id>\nexport GCP_ZONE=<zone>\nexport CLUSTER_NAME=<cluster-name>\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Create a new cluster.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"gcloud container clusters create $CLUSTER_NAME \\\n  --cluster-version latest \\\n  --machine-type=n1-standard-1 \\\n  --num-nodes 4 \\\n  --zone $GCP_ZONE \\\n  --project $GCP_PROJECT\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Retrieve your credentials for ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl"),".")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"cloud container clusters get-credentials $CLUSTER_NAME \\\n    --zone $GCP_ZONE \\\n    --project $GCP_PROJECT\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Grant cluster administrator (admin) permissions to the current user. To create the necessary RBAC rules for NiFiKop, the current user requires admin permissions.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"kubectl create clusterrolebinding cluster-admin-binding \\\n    --clusterrole=cluster-admin \\\n    --user=$(gcloud config get-value core/account)\n")))}u.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);