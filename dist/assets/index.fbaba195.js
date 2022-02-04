var _=Object.defineProperty,C=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var v=(i,n,s)=>n in i?_(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,m=(i,n)=>{for(var s in n||(n={}))S.call(n,s)&&v(i,s,n[s]);if(N)for(var s of N(n))E.call(n,s)&&v(i,s,n[s]);return i},x=(i,n)=>C(i,I(n));import{r as u,j as g,a as r,P as L,A as R,b as A,M as O,C as y,D as P,R as k,c as M}from"./vendor.c81067a1.js";const j=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};j();const $=({todo:i,setTodo:n,handleAdd:s})=>{const o=u.exports.useRef(null);return g("form",{className:"input",onSubmit:e=>{var t;s(e),(t=o.current)==null||t.blur()},children:[r("input",{ref:o,value:i,onChange:e=>n(e.target.value),type:"input",placeholder:"Enter a task",className:"input_box"}),r("button",{className:"input_button",type:"submit",children:"Go"})]})},T=({index:i,todo:n,todos:s,setTodos:o})=>{const[e,t]=u.exports.useState(!1),[d,h]=u.exports.useState(n.todo),D=(a,l)=>{a.preventDefault(),o(s.map(f=>f.id===l?x(m({},f),{todo:d}):f)),t(!1)},c=u.exports.useRef(null);u.exports.useEffect(()=>{var a;(a=c.current)==null||a.focus()},[e]);const p=a=>{o(s.filter(l=>l.id!==a))},b=a=>{o(s.map(l=>l.id===a?x(m({},l),{isDone:!l.isDone}):l))};return r(L,{draggableId:n.id.toString(),index:i,children:(a,l)=>g("form",x(m(m({className:`todos_single ${l.isDragging?"singledrag":""}`,onSubmit:f=>D(f,n.id)},a.draggableProps),a.dragHandleProps),{ref:a.innerRef,children:[e?r("input",{ref:c,value:d,className:"todos_single--text",onChange:f=>h(f.target.value)}):n.isDone?r("s",{className:"todos_single--text",children:n.todo}):r("span",{className:"todos_single--text",children:n.todo}),g("div",{className:"icon",children:[r("span",{className:"icon_edit",onClick:()=>{!e&&!n.isDone&&t(!e)},children:r(R,{})}),r("span",{className:"icon_delete",onClick:()=>p(n.id),children:r(A,{})}),r("span",{className:"icon_done",onClick:()=>b(n.id),children:r(O,{})})]})]}))})},F=({todos:i,setTodos:n,completedTodos:s,setCompletedTodos:o})=>g("div",{className:"container",children:[r(y,{droppableId:"TodoList",children:(e,t)=>g("div",x(m({className:`todos ${t.isDraggingOver?"dragactive":""}`,ref:e.innerRef},e.droppableProps),{children:[r("span",{className:"todos_heading",children:"Active Tasks"}),i.map((d,h)=>r(T,{index:h,todo:d,todos:i,setTodos:n},d.id)),e.placeholder]}))}),r(y,{droppableId:"TodoList1",children:(e,t)=>g("div",x(m({className:`todos_remove ${t.isDraggingOver?"dragcomplete":""}`,ref:e.innerRef},e.droppableProps),{children:[r("span",{className:"todos_heading",children:"Completed Tasks"}),s.map((d,h)=>r(T,{index:h,todo:d,todos:s,setTodos:o},d.id)),e.placeholder]}))})]}),w=()=>{const[i,n]=u.exports.useState(""),[s,o]=u.exports.useState([]),[e,t]=u.exports.useState([]);return r(P,{onDragEnd:D=>{const{destination:c,source:p}=D;if(!c||c.droppableId===p.droppableId&&c.index===p.index)return;let b,a=s,l=e;p.droppableId==="TodoList"?(b=a[p.index],a.splice(p.index,1)):(b=l[p.index],l.splice(p.index,1)),c.droppableId==="TodoList"?a.splice(c.index,0,b):l.splice(c.index,0,b),t(l),o(a)},children:g("div",{className:"app",children:[r("span",{className:"heading",children:"COMPITO"}),r($,{todo:i,setTodo:n,handleAdd:D=>{D.preventDefault(),i&&(o([...s,{id:Date.now(),todo:i,isDone:!1}]),n(""))}}),r(F,{todos:s,setTodos:o,completedTodos:e,setCompletedTodos:t})]})})};k.render(r(M.StrictMode,{children:r(w,{})}),document.getElementById("root"));