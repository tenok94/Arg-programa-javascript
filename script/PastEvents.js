  let currentDate = new Date(data.currentDate)
  currentDate.setMinutes(currentDate.getMinutes() + currentDate.getTimezoneOffset())
  

  let pastEvents = [];
  let upcomingEvents = [];

  data.events.forEach(event => {
    const eventDate = new Date(event.date);
  
    if (eventDate < currentDate) {
      pastEvents.push(event);
    } else {
      upcomingEvents.push(event);
    }
  });

  const upcomingEventsContainer = document.getElementById("upcoming-events-container");
  const pastEventsContainer = document.getElementById("past-events-container");

  pastEvents.forEach(event => {
    const eventCardHtml = createEventCard(event);
    pastEventsContainer.innerHTML += eventCardHtml;
});

  function createEventCard(event) {
    return `
    <div class="col">
    <div class="card">
        <img src="${event.image}" class="card-img-top" alt="${event.name}" width="200">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Date:</strong> ${event.date}</li>
              <li class="list-group-item"><strong>Category:</strong> ${event.category}</li>
              <li class="list-group-item"><strong>Place:</strong> ${event.place}</li>
              <li class="list-group-item"><strong>Capacity:</strong> ${event.capacity}</li>
              <li class="list-group-item"><strong>Assistance:</strong> ${event.assistance}</li>
              <li class="list-group-item"><strong>Price:</strong> $${event.price}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }
