
const propiedadesVentaContainer = document.getElementById('venta').querySelector('.row');

function renderizarPropiedades(propiedades, container) {
  container.innerHTML = '';
  propiedades.forEach(propiedad => {
    container.innerHTML += crearCard(propiedad);
  });
}

function crearCard(propiedad) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <i class="fa-solid fa-location-dot"></i> ${propiedad.ubicacion}</p>
          <p><i class="fa-solid fa-bed"></i> ${propiedad.habitaciones} Habitaciones | <i class="fa-solid fa-bath"></i> ${propiedad.habitaciones} Baños</p>
          <p><i class="fa-solid fa-dollar-sign"></i> ${propiedad.costo}</p>
          <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
            <i class="${propiedad.smoke ? 'fa-solid fa-smoking' : 'fa-solid fa-ban-smoking'}"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
          </p>
          <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
            <i class="${propiedad.pets ? 'fa-solid fa-paw' : 'fa-solid fa-ban'}"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
          </p>
        </div>
      </div>
    </div>
  `;
}

renderizarPropiedades(propiedades_venta, propiedadesVentaContainer);
