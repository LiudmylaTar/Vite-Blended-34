import"./assets/styles-QSora9ny.js";import{i as c}from"./assets/vendor-OvO9u9K3.js";const t={loginForm:document.querySelector(".login-form"),emailInput:document.querySelector('[name="email"]'),passwordInput:document.querySelector('[name="password"]'),btnSubmit:document.querySelector('[name="button"]')};function d(o,e){localStorage.setItem(e,JSON.stringify(o))}function g(o){const e=localStorage.getItem(o);return e?JSON.parse(e):null}function p(o){localStorage.removeItem(o)}const w="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e";function s(o){const e=new Date,a=new Date(o);let l=e.getFullYear()-a.getFullYear();const i=e.getMonth()-a.getMonth(),m=e.getDate()-a.getDate();return(i===0&&m<0||i<0)&&(l-=1),l}console.log(s("2000-01-01"));console.log(s("2000-03-10"));console.log(s("2000-10-15"));const u={email:"user@mail.com",password:"secret"},n="user-data";t.loginForm.addEventListener("submit",o=>{if(o.preventDefault(),t.btnSubmit.textContent==="Logout"){p(n),t.loginForm.reset(),t.emailInput.removeAttribute("readonly"),t.passwordInput.removeAttribute("readonly"),t.btnSubmit.textContent="Login";return}const e=t.emailInput.value.trim(),a=t.passwordInput.value.trim();if(e===""||a===""){c.warning({iconUrl:w,message:"Please fill all fields!"});return}if(e!==u.email||a!==u.password){c.error({message:"Incorrect data, plaese check password or mail"});return}d({email:e,password:a},n),t.btnSubmit.textContent="Logout",t.emailInput.setAttribute("readonly",!0),t.passwordInput.setAttribute("readonly",!0)});const r=g(n);r&&(t.emailInput.value=r.email||"",t.passwordInput.value=r.password||"",t.btnSubmit.textContent="Logout",t.emailInput.setAttribute("readonly",!0),t.passwordInput.setAttribute("readonly",!0));
//# sourceMappingURL=index.js.map
