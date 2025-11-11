document.getElementById('sendLocation').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition, showError);
  } else {
    document.getElementById('status').innerText = "Geolocation not supported!";
  }
});

function sendPosition(position) {
  const user = {
    name: "Alpha",
    email: "alpha@gmail.com",
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };

  fetch("http://localhost:8080/api/send-location", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById('status').innerText = data;
  })
  .catch(err => {
    document.getElementById('status').innerText = "Error sending location!";
  });
}


// function sendPosition(position) {
//   const locationData = {
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//   };

//   fetch("http://localhost:8080/api/check-location", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(locationData)
//   })
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('status').innerText = data;
//   })
//   .catch(err => {
//     document.getElementById('status').innerText = "Error sending location!";
//   });
// }

function showError(error) {
  document.getElementById('status').innerText = "Location access denied or unavailable.";
}





//----------------------------------------------------------------------
// document.getElementById('userForm').addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent page reload

//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();

//   if (!navigator.geolocation) {
//     document.getElementById('status').innerText = "Geolocation not supported!";
//     return;
//   }

//   // Get current position
//   navigator.geolocation.getCurrentPosition(
//     function(position) {
//       const user = {
//         name: name,
//         email: email , // Make email unique to avoid duplicate error
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       };

//       fetch("http://localhost:8080/api/send-location", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user)
//       })
//       .then(res => res.text())
//       .then(data => {
//         document.getElementById('status').innerText = "Location sent successfully!";
//         // Optionally clear form
//         document.getElementById('userForm').reset();
//       })
//       .catch(err => {
//         console.error(err);
//         document.getElementById('status').innerText = "Error sending location!";
//       });
//     },
//     function(error) {
//       document.getElementById('status').innerText = "Location access denied or unavailable.";
//     }
//   );
// });



//------------------------------------------------------
// Submit user info to backend
// document.getElementById('submitUser').addEventListener('click', function() {
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();

//   fetch("http://localhost:8080/api/send-user", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email })
//   })
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('status').innerText = "User submitted!";
//   })
//   .catch(err => {
//     document.getElementById('status').innerText = "Error submitting user!";
//   });
// });

// // Send location and check geofence
// document.getElementById('sendLocation').addEventListener('click', function() {
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();

//   if (!navigator.geolocation) {
//     document.getElementById('status').innerText = "Geolocation not supported!";
//     return;
//   }

//   navigator.geolocation.getCurrentPosition(
//     function(position) {
//       const user = {
//         name,
//         email,
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       };

//       fetch("http://localhost:8080/api/check-geofence", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user)
//       })
//       .then(res => res.json())
//       .then(data => {
//         document.getElementById('status').innerText = data.inside
//           ? "You are inside the geofence!"
//           : "You are outside the geofence!";
//       })
//       .catch(err => {
//         document.getElementById('status').innerText = "Error checking geofence!";
//       });
//     },
//     function() {
//       document.getElementById('status').innerText = "Location access denied or unavailable.";
//     }
//   );
// });
