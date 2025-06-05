// Dynamic greeting
function showGreeting() {
  const hour = new Date().getHours();
  let greeting = "Welcome!";
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  document.getElementById("greeting").textContent = greeting;
}

// Load services dynamically
function loadServices() {
  const services = [
    "Website Development",
    "UI/UX Design",
    "SEO Optimization",
    "Technical Support"
  ];

  const serviceList = document.getElementById("service-list");
  services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = service;
    serviceList.appendChild(li);
  });
}

// Handle contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    // Simulate sending (for static site)
    document.getElementById("form-status").textContent = "Thank you for your message!";
    this.reset();
  } else {
    document.getElementById("form-status").textContent = "Please fill out all fields.";
  }
});

// Initialize
window.onload = function() {
  showGreeting();
  loadServices();
};
