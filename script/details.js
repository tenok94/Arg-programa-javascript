const dataContainer = document.getElementById('data-container');

// Actualizar el contenido del contenedor con la información guardada
dataContainer.innerHTML = `
    <p>Nombre: ${localStorage.name}</p>
    <p>Edad: ${localStorage.age}</p>
    <p>Email: ${localStorage.email}</p>
    <!-- Agrega más campos aquí -->
`;