(()=>{var e=document.getElementById("theme-toggler"),l=document.documentElement.dataset.theme,n=localStorage.getItem("theme"),m=window.matchMedia("(prefers-color-scheme: dark)"),a={dark:`<span class="material-icons-outlined material-icons">
    dark_mode
    </span>`,light:`<span class="material-icons-outlined material-icons">
    light_mode
    </span>`};n?(document.documentElement.dataset.theme=n,e.innerHTML=a[n]):m.matches?(document.documentElement.dataset.theme="dark",e.innerHTML=a.dark,localStorage.setItem("theme","dark")):localStorage.setItem("theme","light");e.addEventListener("click",()=>{l=document.documentElement.dataset.theme,l==="dark"?(document.documentElement.dataset.theme="light",e.innerHTML=a.light,localStorage.setItem("theme","light")):(document.documentElement.dataset.theme="dark",e.innerHTML=a.dark,localStorage.setItem("theme","dark"))});document.querySelector("[data-sidebar-toggler]").addEventListener("click",()=>{let t=document.querySelector("aside");t.classList.toggle("active"),document.addEventListener("click",s=>{s.target.closest("aside")||s.target.closest("[data-sidebar-toggler]")||t.classList.contains("active")&&t.classList.remove("active")})});var d=class extends HTMLElement{connectedCallback(){this.classList.add("user__popup"),this.addEventListener("click",s=>{let o=s.target;if(o.closest(".user__popup_removeBtn")){let c=o.closest(".user__popup");c.classList.add("removing"),setTimeout(()=>{c.remove()},250)}})}};customElements.define("user-popup",d);})();
//# sourceMappingURL=dashboard.js.map
