const n=41;
const parts=await Promise.all(Array.from({length:n},(_,i)=>fetch(new URL(`./index-B397L99P.${i}.part.js`,import.meta.url)).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.text()})));
const s=document.createElement("script");
s.type="module";
s.textContent=parts.join("");
document.head.appendChild(s);
