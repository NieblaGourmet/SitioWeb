// Optimized app initialization script - loads after DOM ready

const getCurrentLanguage=()=>{const l=localStorage.getItem('language');if(l)return l;const h=document.documentElement.lang;if(h)return h;const b=navigator.language||navigator.userLanguage;return b.startsWith('es')?'es':b.startsWith('en')?'en':'es'};

const redirectToWhatsApp=(phone,key,e)=>{if(e)e.preventDefault();const lang=getCurrentLanguage();const msgs={es:{chef_service_msg:"Hola, me interesa el Servicio de Chef Personal de Niebla Gourmet. Me gustaría recibir más información sobre menús, precios y disponibilidad. ¡Gracias!"},en:{chef_service_msg:"Hello, I'm interested in Niebla Gourmet's Personal Chef Service. I would like more information about menus, prices, and availability. Thank you!"}};const msg=msgs[lang]?.[key]||msgs.es[key];window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank')};

// Setup chef service button
const chefBtn=document.getElementById('chefServiceBtn');if(chefBtn)chefBtn.addEventListener('click',(e)=>redirectToWhatsApp('50683271956','chef_service_msg',e));

// Language change listener
window.addEventListener('languageChanged',()=>console.log('Lang:',getCurrentLanguage()));
