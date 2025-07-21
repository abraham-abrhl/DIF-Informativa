const eventos = [
  { año: "2014", titulo: "Registro oficial DIF Municipal", detalle: "El DIF Municipal de Pabellón de Arteaga aparece formalmente registrado en directorios empresariales, marcando su existencia legal." },
  { año: "2021", titulo: "Entrega de aparatos funcionales", detalle: "El DIF Municipal gestiona y entrega una andadera y cuatro sillas de ruedas a personas vulnerables, en coordinación con el DIF Estatal." },
  { año: "2022", titulo: "Entrega de ropa y cobijas", detalle: "El voluntariado del DIF Municipal realiza entrega de ropa y cobijas a personas en situación vulnerable." },
  { año: "2023", titulo: "Campaña de seguridad en tanques de gas", detalle: "El Ayuntamiento, junto con el DIF, realiza campañas preventivas sobre seguridad en el manejo de tanques de gas." },
  { año: "2024", titulo: "Carrera altruista: Juntos somos Más y Mejores ", detalle: "Se organiza una carrera de 5 y 10 km para recaudar fondos en apoyo a una casa hogar vinculada al DIF Municipal." },
  { año: "2024", titulo: "Caravana de salud Canina y Felina", detalle: "Llega al municipio la caravana veterinaria, en la que el DIF participa coordinando apoyos sociales y logísticos." },
  { año: "2025", titulo: "Inicio de talleres en Vergel del Valle", detalle: "El DIF anuncia talleres gratuitos en la Velaria de Vergel del Valle: uñas, maquillaje, elaboración de piñatas y deportes para niños de 5 a 13 años." },
  { año: "2025", titulo: "Convocatoria ampliada a talleres comunitarios", detalle: "El DIF Municipal extiende la convocatoria a talleres gratuitos en diferentes colonias para fomentar desarrollo social y económico." },
];

const timeline = document.getElementById("timeline");

function renderTimeline(filtro) {
  timeline.innerHTML = "";

  const filtrados = filtro === "all"
    ? eventos
    : eventos.filter(e => e.año === filtro);

  filtrados.forEach((evento, i) => {
    const isLeft = i % 2 === 0;
    const align = isLeft ? "md:self-start md:items-end" : "md:self-end md:items-start";
    const dotColor = isLeft ? "bg-[#1C3973]" : "bg-[#CC3079]";
    const anim = isLeft ? "animate-fade-in-left" : "animate-fade-in-right";

    const card = document.createElement("div");
    card.className = `relative flex flex-col ${align} group`;

    card.innerHTML = `
      <div class="absolute left-1/2 md:left-auto md:${isLeft ? 'right-full' : 'left-full'} top-6 -translate-x-1/2 md:translate-x-0">
        <span class="block w-6 h-6 rounded-full border-4 border-white shadow-lg ${dotColor} transition group-hover:scale-110"></span>
      </div>
      <div class="bg-white border-l-4 border-[#CC3079] rounded-xl shadow-lg px-6 py-4 mt-2 md:mt-0 md:ml-8 md:mr-8 transition hover:scale-105 hover:shadow-2xl cursor-pointer ${anim}">
        <h3 class="text-lg font-bold text-[#1C3973] mb-1">${evento.año} - ${evento.titulo}</h3>
        <p class="text-[#333333] mt-2 hidden group-hover:block transition-all duration-300">${evento.detalle}</p>
        <span class="block md:hidden w-4 h-4 rounded-full border-2 border-white shadow-lg ${dotColor} mt-2"></span>
      </div>
    `;
    timeline.appendChild(card);
  });
}
const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in-left { from { opacity:0; transform:translateX(-40px);} to {opacity:1; transform:translateX(0);} }
@keyframes fade-in-right { from { opacity:0; transform:translateX(40px);} to {opacity:1; transform:translateX(0);} }
.animate-fade-in-left { animation: fade-in-left 0.7s both; }
.animate-fade-in-right { animation: fade-in-right 0.7s both; }
`;
document.head.appendChild(style);

renderTimeline("all");

document.querySelectorAll(".timeline-filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".timeline-filter-btn").forEach(b => {
      b.classList.remove("bg-[#CC3079]");
      b.classList.add("bg-[#1C3973]");
    });
    btn.classList.remove("bg-[#1C3973]");
    btn.classList.add("bg-[#CC3079]");
    renderTimeline(btn.dataset.year);
  });
});


const menuBtn = document.getElementById('menu-btn');
const mainMenu = document.getElementById('main-menu');
menuBtn.addEventListener('click', () => {
  mainMenu.classList.toggle('-translate-x-full');
  mainMenu.classList.toggle('translate-x-0');
});
window.addEventListener('resize', () => {
  if(window.innerWidth >= 768) {
    mainMenu.classList.remove('-translate-x-full');
    mainMenu.classList.add('translate-x-0');
  } else {
    mainMenu.classList.add('-translate-x-full');
    mainMenu.classList.remove('translate-x-0');
  }
});
