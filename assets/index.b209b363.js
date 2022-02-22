import{j as m,u as r,T as l,r as u,i as h,a as g,R as p,b as v}from"./vendor.cf73e7c3.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}};f();var b="/cv/assets/yo.593216d0.jpg";const e=m.exports.jsx,a=m.exports.jsxs;function y(){return a("header",{className:"profile-container",children:[e("img",{src:b,className:"profile-picture"}),a("div",{className:"title",children:[e("h1",{children:"Scaramutti Pablo Martin"}),e("p",{className:"font-light",children:"Multimedia Designer / Front-end Web Developer"})]})]})}var N="/cv/assets/mail.ee439e57.svg",P="/cv/assets/phone.980902fc.svg",I="/cv/assets/github.8c4aa423.svg",x="/cv/assets/linkedin.6c8896bf.svg",k="/cv/assets/instagram.33855527.svg";function w(){return a("div",{children:[e("h1",{children:"Contact"}),a("ul",{children:[e("li",{children:a("a",{href:"mailto:pabloscaramutti@gmail.com",children:[e("img",{src:N,alt:"Mail",className:"icon"}),e("h4",{children:"pabloscaramutti@gmail.com"})]})}),e("li",{children:a("a",{href:"tel:+5492215718024",children:[e("img",{src:P,alt:"phone",className:"icon"}),e("h4",{children:"+54 221 571-8024"})]})}),e("li",{children:a("a",{href:"https://github.com/pabloScaramutti",target:"_blank",children:[e("img",{src:I,alt:"Github",className:"icon"}),e("h4",{children:"/pabloScaramutti"})]})}),e("li",{children:a("a",{href:"https://www.linkedin.com/in/pabloscaramutti/",target:"_blank",children:[e("img",{src:x,alt:"Linkedin",className:"icon"}),e("h4",{children:"/in/pabloscaramutti/"})]})}),e("li",{children:a("a",{href:"https://www.instagram.com/pabloscaramutti/",target:"_blank",children:[e("img",{src:k,alt:"Instagram",className:"icon"}),e("h4",{children:"/pabloscaramutti/"})]})})]})]})}var L="/cv/assets/html-5.1930bbab.svg",A="/cv/assets/css3.d7708542.svg",j="/cv/assets/javascript.9790e648.svg",E="/cv/assets/react.5cdae4bc.svg",D="/cv/assets/vuejs.24edb04c.svg",S="/cv/assets/next-js.40f02dfc.svg",F="/cv/assets/adobe-illustrator.51e492ed.svg",M="/cv/assets/adobe-lightroom.b20a0176.svg",C="/cv/assets/adobe-photoshop.65bdee88.svg",R="/cv/assets/adobe-after-effects.ea940b86.svg",T="/cv/assets/adobe-premiere-pro.eb8eaa7c.svg";const O=[{name:"HTML",icon:L},{name:"CSS",icon:A},{name:"Javascript",icon:j},{name:"React",icon:E},{name:"NextJs",icon:S},{name:"Vuejs",icon:D}],U=[{name:"Illustrator",icon:F},{name:"Lightroom",icon:M},{name:"AfterEffects",icon:R},{name:"PremirePro",icon:T},{name:"Photoshop",icon:C}];function B(){return a("div",{children:[e("h1",{children:"Toolbox"}),a("div",{className:"skills-container",children:[a("div",{children:[e("h2",{children:"IT"}),e("ul",{children:O.map(i=>a("li",{children:[e("img",{src:i.icon,className:"icon"}),e("p",{children:i.name})]},i.name))})]}),a("div",{children:[e("h2",{children:"Visual"}),e("ul",{children:U.map(i=>a("li",{children:[e("img",{src:i.icon,className:"icon"}),e("p",{children:i.name})]},i.name))})]})]})]})}function G(){return a("div",{className:"languages",children:[e("h1",{children:"Languages"}),a("p",{className:"font-bold",children:["Spanish: ",e("span",{className:"font-light",children:"Native"})]}),a("p",{className:"font-bold",children:["English: ",e("span",{className:"font-light",children:"Intermediate"})]})]})}function V(){const{t:i}=r();return a("div",{children:[e("h1",{className:"line-separator",children:e(l,{children:"workExperience.title"})}),i("workExperience.content",{returnObjects:!0}).map(n=>a("div",{children:[e("h3",{children:n.company}),e("h4",{children:n.jobPosition}),e("p",{className:"font-light",children:n.description})]},n.company))]})}function J(){const{t:i}=r();return a("div",{children:[e("h1",{className:"line-separator",children:e(l,{children:"education.title"})}),i("education.content",{returnObjects:!0}).map(n=>a("div",{children:[a("div",{className:"flex align-center no-margin",children:[e("h3",{children:n.title}),e("p",{className:"font-light ml-1",children:n.status?n.status:""})]}),e("h4",{children:n.university}),e("p",{className:"font-light",children:n.faculty}),e("p",{className:"font-light",children:n.location})]}))]})}var W="/cv/assets/PabloScaramutti-cv.dd48dd2e.png",_="/cv/assets/download.32b1d33c.svg",q="/cv/assets/sun.b277c78f.svg",H="/cv/assets/moon.d5e60848.svg",$="/cv/assets/mail-solid.2b9a3eee.svg";const K={dark:"light",light:"dark"};function z({theme:i,setTheme:n}){const{i18n:o}=r();return a("nav",{className:"menu-bar",children:[o.language==="en"?e("button",{type:"button",onClick:()=>o.changeLanguage("es"),children:"ES"}):e("button",{type:"button",onClick:()=>o.changeLanguage("en"),children:"EN"}),e("button",{type:"button",onClick:()=>n(K[i]),title:"Change theme",children:i=="dark"?e("img",{src:q,className:"icon"}):e("img",{src:H,className:"icon",width:"18px",height:"18px"})}),e("a",{href:"mailto:pabloscaramutti@gmail.com",children:e("img",{src:$,alt:"mail-icon",title:"Send me an email",className:"icon"})}),e("a",{href:W,download:!0,children:e("img",{src:_,alt:"download-icon",title:"Download PDF",className:"icon"})})]})}function Q(){const[i,n]=u.exports.useState("dark");return r(),e("div",{className:"App","data-theme":i,children:a("div",{className:"main-container",children:[e(z,{theme:i,setTheme:n}),e(y,{}),e("p",{className:"bio font-light",children:e(l,{children:"bio"})}),a("div",{className:"content",children:[a("div",{className:"contact",children:[e(w,{}),e(B,{}),e(G,{})]}),a("div",{className:"curriculum",children:[e(V,{}),e(J,{})]})]})]})})}h.use(g).init({debug:!0,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{bio:"I\u2019m 27 years old based in La Plata, Argentina. I've lernt a lot of tools and skills in my years as student and expanded this knowledge working in startups and as a freelancer. I love new challenges, finding solutions for problems and helping others to have a better life. With my background on multimedia design and programming, I can ideate solutions and bring them to life. <br/> I\u2019m currently searching new experiences to apply and develope my skills and learn from team work.",workExperience:{title:"Work Experience",content:[{company:"Panorama - Digital agency",jobPosition:"Visual designer",description:"Gained experience about digital marketing, graphic design, web design, event photography and videography."},{company:"DevGoblins",jobPosition:"Front-end developer",description:"React & Next"},{company:"Cheers smart contracts",jobPosition:"Front-end developer",description:"React & Tailwind"}]},education:{title:"Education",content:[{title:"Degree on Multimedia Design",status:void 0,university:"National University of La Plata",faculty:"Faculty of arts",location:"La Plata, Buenos Aires, Argentina"},{title:"Professorship in Multimedia Design",status:"(Ongoing - 95.65%)",university:"National University of La Plata",faculty:"Faculty of arts",location:"La Plata, Buenos Aires, Argentina"},{title:"University Programmer Analyst",status:"(Ongoing - 52.17%)",university:"National University of La Plata",faculty:"Computer Science Faculty",location:"La Plata, Buenos Aires, Argentina"}]}}},es:{translation:{bio:"Tengo 27 a\xF1os y vivo en La Plata, Argentina. Aprend\xED muchas habilidades en mi carrera universitaria y expand\xED mi conocimiento trabajando en startups y como freelancer. Me gustan los desafios y ayudar a las personas buscando soluciones a distintos problemas. Con mis conocimientos en dise\xF1o multimedia y programaci\xF3n, puedo idear soluciones y luego llevarlas a cabo. <br/> Actualmente estoy buscando nuevas experiencias para aplicar y desarrollar todos los conocimientos que fui aprendiendo a lo largo de los a\xF1os y seguir aprendiendo y formarmandome.",workExperience:{title:"Experiencia laboral",content:[{company:"Panorama - Agencia digital",jobPosition:"Dise\xF1ador visual",description:"Realic\xE9 tareas vinculadas con el marketing digital, community managment, dise\xF1o gr\xE1fico, dise\xF1o web, fotograf\xEDa de eventos y videograf\xEDa."},{company:"DevGoblins",jobPosition:"Front-end developer",description:"React & Next"},{company:"Cheers smart contracts",jobPosition:"Front-end developer",description:"React & Tailwind"}]},education:{title:"Educaci\xF3n",content:[{title:"Lic. Dise\xF1o Multimedial",status:void 0,university:"Universidad Nacional de La Plata",faculty:"Facultad de Artes",location:"La Plata, Buenos Aires, Argentina"},{title:"Prof. Dise\xF1o Multimedial",status:"(En curso - 95.65%)",university:"Universidad Nacional de La Plata",faculty:"Facultad de Artes",location:"La Plata, Buenos Aires, Argentina"},{title:"Analista Programador Universitario",status:"(En curso - 52.17%)",university:"Universidad Nacional de La Plata",faculty:"Facultad de Inform\xE1tica",location:"La Plata, Buenos Aires, Argentina"}]}}}}});p.render(e(v.StrictMode,{children:e(Q,{})}),document.getElementById("root"));
