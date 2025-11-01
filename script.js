const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    type: "Sedan",
    seats: 5,
    range: 450,
    dailyRate: 120,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 2,
    name: "Volvo XC40 Recharge",
    type: "SUV",
    seats: 5,
    range: 420,
    dailyRate: 100,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 3,
    name: "Hyundai Ioniq 5",
    type: "SUV",
    seats: 5,
    range: 480,
    dailyRate: 130,
    image:
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 4,
    name: "Nissan Leaf",
    type: "Hatchback",
    seats: 5,
    range: 350,
    dailyRate: 90,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 5,
    name: "Porsche Taycan",
    type: "Sports",
    seats: 4,
    range: 400,
    dailyRate: 250,
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 6,
    name: "BMW iX",
    type: "SUV",
    seats: 5,
    range: 500,
    dailyRate: 200,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 7,
    name: "Tesla Model Y",
    type: "SUV",
    seats: 7,
    range: 505,
    dailyRate: 150,
    image:
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 8,
    name: "Audi e-tron",
    type: "SUV",
    seats: 5,
    range: 435,
    dailyRate: 180,
    image:
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 9,
    name: "Mercedes EQS",
    type: "Sedan",
    seats: 5,
    range: 550,
    dailyRate: 220,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 10,
    name: "Kia EV6",
    type: "SUV",
    seats: 5,
    range: 470,
    dailyRate: 110,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 11,
    name: "Volkswagen ID.4",
    type: "SUV",
    seats: 5,
    range: 400,
    dailyRate: 105,
    image:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
  {
    id: 12,
    name: "Polestar 2",
    type: "Sedan",
    seats: 5,
    range: 440,
    dailyRate: 140,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop&auto=format&q=80",
    available: true,
  },
];

let users = [
  {
    email: "employee@azoom.sg",
    password: "demo123",
    name: "Demo Employee",
    phone: "+65 9123 4567",
    role: "employee",
  },
];
let currentUser = null;
let bookings = [];

function getCurrentUser() {
  return currentUser;
}

function setCurrentUser(user) {
  currentUser = user;
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function updateAuthButton() {
  const authButtonContainer = document.getElementById("authButtonContainer");
  const authButton = document.getElementById("authButton");
  const authButtonText = document.getElementById("authButtonText");
  const loginNavLink = document.querySelector('a[href="#login"]');
  const dashboardLogoutBtn = document.getElementById("dashboardLogoutBtn");

  if (isLoggedIn()) {
    // Show logout button, hide login link
    if (authButtonContainer && authButton && authButtonText) {
      authButtonContainer.classList.remove("hidden");
      authButtonContainer.style.display = "block";
      authButtonText.textContent = "Logout";
      authButton.querySelector("i").className = "fas fa-sign-out-alt";
    }
    if (loginNavLink) {
      loginNavLink.style.display = "none";
    }
    if (dashboardLogoutBtn) {
      dashboardLogoutBtn.style.display = "block";
    }
  } else {
    // Hide logout button, show login link
    if (authButtonContainer) {
      authButtonContainer.classList.add("hidden");
      authButtonContainer.style.display = "none";
    }
    if (loginNavLink) {
      loginNavLink.style.display = "block";
    }
    if (dashboardLogoutBtn) {
      dashboardLogoutBtn.style.display = "none";
    }
  }
}

function handleAuthClick() {
  if (isLoggedIn()) {
    logout();
  } else {
    showSection("login");
  }
}

function switchTab(tabName) {
  const tabs = document.querySelectorAll(".auth-tab");
  const forms = document.querySelectorAll(".auth-form");

  tabs.forEach((tab) => tab.classList.remove("active"));
  forms.forEach((form) => form.classList.remove("active-form"));

  if (tabName === "login") {
    tabs[0].classList.add("active");
    document.getElementById("loginForm").classList.add("active-form");
  } else {
    tabs[1].classList.add("active");
    document.getElementById("registerForm").classList.add("active-form");
  }
}

// Initialize authentication on page load
function initializeAuth() {
  updateAuthButton();
}

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".app-section");
  sections.forEach((section) => {
    section.classList.remove("active-section");
  });

  // Show the requested section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add("active-section");

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update active nav link
    updateActiveNav(sectionId);

    // Close mobile menu if open
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    if (navLinks && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }

    // Initialize section-specific content
    if (sectionId === "booking") {
      initializeBookingPage();
    } else if (sectionId === "dashboard") {
      initializeDashboard();
    }
  }
}

function updateActiveNav(sectionId) {
  highlightNavLink(`#${sectionId}`);
}

function scrollToCars() {
  const carsSection = document.getElementById("allCars");
  if (carsSection) {
    carsSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function highlightNavLink(targetHref) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === targetHref);
  });
}

function goToAllCars(event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }
  showSection("home");
  highlightNavLink("#allCars");
  setTimeout(() => {
    scrollToCars();
  }, 250);
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}

function openModal(modalId, data = null) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Load data into modal if provided
    if (data) {
      loadModalData(modalId, data);
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function loadModalData(modalId, data) {
  // This function will be extended based on the specific modal
  console.log("Loading data into modal:", modalId, data);
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  initializeAuth();

  // Handle initial hash navigation
  const hash = window.location.hash.slice(1);
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  } else {
    showSection("home");
  }

  // Initialize catalog on home page
  initializeCarCatalog();

  // Initialize login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      login(email, password);
    });
  }

  // Initialize registration form
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById(
        "registerConfirmPassword"
      ).value;

      if (password !== confirmPassword) {
        showNotification("Passwords do not match", "error");
        return;
      }

      const userData = {
        name: document.getElementById("registerName").value,
        email: document.getElementById("registerEmail").value,
        phone: document.getElementById("registerPhone").value,
        license: document.getElementById("registerLicense").value,
        password: password,
      };

      register(userData);
    });
  }

  // Initialize booking page
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBooking);
  }

  // Initialize inspection form
  const damagesCheckbox = document.getElementById("damagesFound");
  if (damagesCheckbox) {
    damagesCheckbox.addEventListener("change", function () {
      const damageDetails = document.getElementById("damageDetails");
      if (damageDetails) {
        damageDetails.style.display = this.checked ? "block" : "none";
      }
    });
  }
});

// Handle browser back/forward buttons
window.addEventListener("hashchange", function () {
  const hash = window.location.hash.slice(1);
  if (hash && document.getElementById(hash)) {
    showSection(hash);
  } else {
    showSection("home");
  }
});

function initializeCarCatalog() {
  const carsGrid = document.getElementById("allCarsGrid");
  const searchInput = document.getElementById("carSearchInput");
  const typeFiltersContainer = document.getElementById("carTypeFilters");
  const resultsCount = document.getElementById("carResultsCount");
  const resetFiltersButton = document.getElementById("resetCarFilters");

  if (!carsGrid) {
    return;
  }

  const uniqueTypes = ["All", ...new Set(cars.map((car) => car.type))];
  if (typeFiltersContainer) {
    typeFiltersContainer.innerHTML = uniqueTypes
      .map(
        (type, index) => `
            <button type="button" class="filter-chip${
              index === 0 ? " active" : ""
            }" data-type="${type.toLowerCase()}">
                ${type}
            </button>
        `
      )
      .join("");
  }

  let activeType = "all";

  const renderCars = (list) => {
    if (!list.length) {
      carsGrid.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>No cars match your search yet. Try a different keyword or reset the filters.</p>
                </div>
            `;
    } else {
      carsGrid.innerHTML = list
        .map(
          (car) => `
                <article class="catalog-card">
                    <div class="catalog-card__media">
                        <img src="${car.image}" alt="${car.name}">
                        <span class="catalog-card__tag">${car.type}</span>
                    </div>
                    <div class="catalog-card__body">
                        <h3 class="catalog-card__title">${car.name}</h3>
                        <div class="catalog-card__stats">
                            <span><i class="fas fa-users"></i> ${car.seats} seats</span>
                            <span><i class="fas fa-battery-full"></i> ${car.range} km</span>
                        </div>
                        <div class="catalog-card__footer">
                            <span class="catalog-card__price">$${car.dailyRate}<small>/day</small></span>
                            <button class="catalog-card__cta" onclick="selectCarAndNavigate(${car.id})">
                                <i class="fas fa-calendar-plus"></i>
                                Book now
                            </button>
                        </div>
                    </div>
                </article>
            `
        )
        .join("");
    }

    if (resultsCount) {
      const label = list.length === 1 ? "vehicle" : "vehicles";
      resultsCount.textContent = `${list.length} ${label} available`;
    }
  };

  const applyFilters = () => {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const filtered = cars.filter((car) => {
      const matchesType =
        activeType === "all" || car.type.toLowerCase() === activeType;
      const combined = `${car.name} ${car.type}`.toLowerCase();
      const matchesQuery = !query || combined.includes(query);
      return matchesType && matchesQuery;
    });

    renderCars(filtered);
  };

  if (typeFiltersContainer) {
    typeFiltersContainer.addEventListener("click", (event) => {
      const target = event.target.closest(".filter-chip");
      if (!target) return;

      activeType = target.dataset.type || "all";
      typeFiltersContainer
        .querySelectorAll(".filter-chip")
        .forEach((chip) => chip.classList.remove("active"));
      target.classList.add("active");
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  if (resetFiltersButton) {
    resetFiltersButton.addEventListener("click", () => {
      activeType = "all";
      if (searchInput) {
        searchInput.value = "";
      }
      if (typeFiltersContainer) {
        typeFiltersContainer
          .querySelectorAll(".filter-chip")
          .forEach((chip, index) => {
            chip.classList.toggle("active", index === 0);
          });
      }
      applyFilters();
    });
  }

  renderCars(cars);
}

let selectedCarId = null;

function selectCarAndNavigate(carId) {
  selectedCarId = carId;
  showSection("booking");
}

function login(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    setCurrentUser(user);
    updateAuthButton();
    showNotification(`Welcome back, ${user.name || user.email}!`, "success");
    showSection("home");
    return true;
  } else {
    showNotification("Invalid email or password", "error");
    return false;
  }
}

function register(userData) {
  const existingUser = users.find((u) => u.email === userData.email);

  if (existingUser) {
    showNotification("Email already registered", "error");
    return false;
  }

  const newUser = {
    ...userData,
    role: "customer",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);

  setCurrentUser(newUser);
  updateAuthButton();
  showNotification(
    `Welcome, ${newUser.name}! Your account has been created.`,
    "success"
  );
  showSection("home");
  return true;
}

function logout() {
  setCurrentUser(null);
  updateAuthButton();
  showNotification("Logged out successfully", "info");
  showSection("home");
}

function showNotification(message, type = "info") {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.className = `notification show ${type}`;

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

let selectedCar = null;

function initializeBookingPage() {
  loadAvailableCars();
  setupBookingFormListeners();

  // Check if a car was pre-selected
  if (selectedCarId) {
    selectCar(selectedCarId);
    selectedCarId = null;
  }
}

function loadAvailableCars(filteredCars = null) {
  const availableCarsContainer = document.getElementById("availableCars");
  if (!availableCarsContainer) return;

  const carsToDisplay = filteredCars || cars.filter((car) => car.available);

  if (carsToDisplay.length === 0) {
    availableCarsContainer.innerHTML =
      '<div class="no-results"><p>No vehicles found matching your search.</p></div>';
    return;
  }

  availableCarsContainer.innerHTML = carsToDisplay
    .map(
      (car) => `
        <div class="car-card ${
          selectedCar && selectedCar.id === car.id ? "selected" : ""
        }" onclick="selectCar(${car.id})">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge">${car.type}</span>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <span class="spec">
                        <i class="fas fa-users"></i> ${car.seats} Seats
                    </span>
                    <span class="spec">
                        <i class="fas fa-battery-full"></i> ${car.range}km
                    </span>
                </div>
                <div class="car-price">
                    <div class="price">
                        $${car.dailyRate}
                        <span>/day</span>
                    </div>
                    ${
                      selectedCar && selectedCar.id === car.id
                        ? '<span class="selected-badge"><i class="fas fa-check-circle"></i> Selected</span>'
                        : ""
                    }
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function filterCars() {
  const searchInput = document.getElementById("carSearch");
  const typeFilter = document.getElementById("typeFilter");

  if (!searchInput || !typeFilter) return;

  const searchTerm = searchInput.value.toLowerCase();
  const selectedType = typeFilter.value;

  let filteredCars = cars.filter((car) => car.available);

  // Filter by search term
  if (searchTerm) {
    filteredCars = filteredCars.filter(
      (car) =>
        car.name.toLowerCase().includes(searchTerm) ||
        car.type.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by type
  if (selectedType) {
    filteredCars = filteredCars.filter((car) => car.type === selectedType);
  }

  loadAvailableCars(filteredCars);
}

function selectCar(carId) {
  selectedCar = cars.find((car) => car.id === carId);
  loadAvailableCars();

  const selectedCarInfo = document.getElementById("selectedCarInfo");
  const selectedCarDisplay = document.getElementById("selectedCarDisplay");

  if (selectedCarInfo && selectedCarDisplay) {
    selectedCarInfo.style.display = "block";
    selectedCarDisplay.innerHTML = `
            <div class="selected-car-summary">
                <img src="${selectedCar.image}" alt="${selectedCar.name}">
                <div>
                    <h4>${selectedCar.name}</h4>
                    <p>${selectedCar.type} • ${selectedCar.seats} Seats • ${selectedCar.range}km Range</p>
                    <p class="price">$${selectedCar.dailyRate}/day</p>
                </div>
            </div>
        `;
  }

  calculateRentalCost();
}

function setupBookingFormListeners() {
  const pickupDate = document.getElementById("pickupDate");
  const returnDate = document.getElementById("returnDate");

  if (pickupDate) {
    // Set minimum date to today
    const today = new Date().toISOString().split("T")[0];
    pickupDate.min = today;
    pickupDate.addEventListener("change", calculateRentalCost);
  }

  if (returnDate) {
    returnDate.addEventListener("change", calculateRentalCost);
  }
}

function calculateRentalCost() {
  if (!selectedCar) return;

  const pickupDate = document.getElementById("pickupDate").value;
  const returnDate = document.getElementById("returnDate").value;

  if (!pickupDate || !returnDate) return;

  const pickup = new Date(pickupDate);
  const returnD = new Date(returnDate);
  const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));

  if (days <= 0) {
    showNotification("Return date must be after pickup date", "error");
    return;
  }

  const rentalCost = selectedCar.dailyRate * days;
  const insurance = 30 * days;
  const total = rentalCost + insurance;

  const rentalSummary = document.getElementById("rentalSummary");
  if (rentalSummary) {
    rentalSummary.style.display = "block";
    document.getElementById(
      "dailyRate"
    ).textContent = `$${selectedCar.dailyRate}`;
    document.getElementById("numberOfDays").textContent = days;
    document.getElementById("totalAmount").textContent = `$${total}`;
  }
}

function handleBooking(e) {
  e.preventDefault();

  if (!selectedCar) {
    showNotification("Please select a vehicle", "error");
    return;
  }

  const booking = {
    id: Date.now(),
    userId: isLoggedIn() ? getCurrentUser().email : "guest@azoom.sg",
    car: selectedCar,
    pickupDate: document.getElementById("pickupDate").value,
    pickupTime: document.getElementById("pickupTime").value,
    returnDate: document.getElementById("returnDate").value,
    returnTime: document.getElementById("returnTime").value,
    pickupLocation: document.getElementById("pickupLocation").value,
    cardName: document.getElementById("cardName").value,
    cardNumber: document.getElementById("cardNumber").value.slice(-4),
    totalAmount: document.getElementById("totalAmount").textContent,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);

  showNotification("Booking confirmed successfully!", "success");

  // Reset form
  document.getElementById("bookingForm").reset();
  selectedCar = null;
  document.getElementById("selectedCarInfo").style.display = "none";
  document.getElementById("rentalSummary").style.display = "none";

  setTimeout(() => {
    showSection("dashboard");
  }, 2000);
}

function initializeDashboard() {
  const notLoggedInView = document.getElementById("notLoggedInView");
  const customerView = document.getElementById("customerView");
  const employeeView = document.getElementById("employeeView");
  const dashboardLogoutBtn = document.getElementById("dashboardLogoutBtn");

  // Show appropriate view based on login
  if (!isLoggedIn()) {
    notLoggedInView.style.display = "flex";
    customerView.style.display = "none";
    employeeView.style.display = "none";
    if (dashboardLogoutBtn) {
      dashboardLogoutBtn.style.display = "none";
    }
  } else if (getCurrentUser().role === "employee") {
    notLoggedInView.style.display = "none";
    customerView.style.display = "none";
    employeeView.style.display = "block";
    if (dashboardLogoutBtn) {
      dashboardLogoutBtn.style.display = "block";
    }
    loadEmployeeDashboard();
  } else {
    notLoggedInView.style.display = "none";
    customerView.style.display = "block";
    employeeView.style.display = "none";
    if (dashboardLogoutBtn) {
      dashboardLogoutBtn.style.display = "block";
    }
    loadCustomerDashboard();
  }
}

function loadCustomerDashboard() {
  const userEmail = isLoggedIn() ? getCurrentUser().email : "guest@azoom.sg";
  const userBookings = bookings.filter((b) => b.userId === userEmail);

  // Update stats
  const activeRentals = userBookings.filter(
    (b) => b.status === "active"
  ).length;
  const completedRentals = userBookings.filter(
    (b) => b.status === "completed"
  ).length;
  const pendingBookings = userBookings.filter(
    (b) => b.status === "pending"
  ).length;

  document.getElementById("activeRentals").textContent = activeRentals;
  document.getElementById("completedRentals").textContent = completedRentals;
  document.getElementById("pendingBookings").textContent = pendingBookings;

  // Display bookings
  const customerBookingsContainer = document.getElementById("customerBookings");
  if (userBookings.length === 0) {
    customerBookingsContainer.innerHTML =
      '<p class="no-bookings">No bookings yet. <a href="#booking" onclick="showSection(\'booking\')">Make your first booking!</a></p>';
    return;
  }

  customerBookingsContainer.innerHTML = userBookings
    .reverse()
    .map(
      (booking) => `
        <div class="booking-card">
            <div class="booking-header">
                <h3>${booking.car.name}</h3>
                <span class="status-badge status-${booking.status}">${
        booking.status
      }</span>
            </div>
            <div class="booking-details">
                <p><i class="fas fa-calendar"></i> ${formatDate(
                  booking.pickupDate
                )} ${booking.pickupTime} - ${formatDate(booking.returnDate)} ${
        booking.returnTime
      }</p>
                <p><i class="fas fa-map-marker-alt"></i> ${getLocationName(
                  booking.pickupLocation
                )}</p>
                <p><i class="fas fa-dollar-sign"></i> ${booking.totalAmount}</p>
            </div>
            <div class="booking-actions">
                ${
                  booking.status === "active"
                    ? `<button onclick="openReturnModal(${booking.id})" class="btn btn-primary btn-small">Return Vehicle</button>`
                    : ""
                }
                ${
                  booking.status === "inspected"
                    ? `<button onclick="openPaymentModal(${booking.id})" class="btn btn-primary btn-small">Pay Bill</button>`
                    : ""
                }
            </div>
        </div>
    `
    )
    .join("");
}

function loadEmployeeDashboard() {
  // Load pending bookings for rental office
  const pendingBookings = bookings.filter((b) => b.status === "pending");
  const pendingBookingsContainer = document.getElementById("pendingBookings");

  if (pendingBookings.length === 0) {
    pendingBookingsContainer.innerHTML =
      '<p class="no-data">No pending bookings</p>';
  } else {
    pendingBookingsContainer.innerHTML = pendingBookings
      .map(
        (booking) => `
            <div class="booking-card">
                <div class="booking-header">
                    <h3>${booking.car.name}</h3>
                    <span class="status-badge status-${booking.status}">${
          booking.status
        }</span>
                </div>
                <div class="booking-details">
                    <p><i class="fas fa-user"></i> ${booking.userId}</p>
                    <p><i class="fas fa-calendar"></i> ${formatDate(
                      booking.pickupDate
                    )} ${booking.pickupTime}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${getLocationName(
                      booking.pickupLocation
                    )}</p>
                </div>
                <button onclick="openRentalOfficeModal(${
                  booking.id
                })" class="btn btn-primary btn-small">Process Rental</button>
            </div>
        `
      )
      .join("");
  }

  // Load returned cars for inspection
  const returnedCars = bookings.filter((b) => b.status === "returned");
  const returnedCarsContainer = document.getElementById("returnedCars");

  if (returnedCars.length === 0) {
    returnedCarsContainer.innerHTML =
      '<p class="no-data">No vehicles awaiting inspection</p>';
  } else {
    returnedCarsContainer.innerHTML = returnedCars
      .map(
        (booking) => `
            <div class="booking-card">
                <div class="booking-header">
                    <h3>${booking.car.name}</h3>
                    <span class="status-badge status-${booking.status}">${
          booking.status
        }</span>
                </div>
                <div class="booking-details">
                    <p><i class="fas fa-user"></i> ${booking.userId}</p>
                    <p><i class="fas fa-calendar"></i> Returned: ${formatDate(
                      booking.returnDate
                    )}</p>
                    <p><i class="fas fa-parking"></i> ${getLocationName(
                      booking.returnCarPark
                    )}</p>
                </div>
                <button onclick="openInspectionModal(${
                  booking.id
                })" class="btn btn-primary btn-small">Inspect Vehicle</button>
            </div>
        `
      )
      .join("");
  }
}

function showEmployeeTab(tabName) {
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  if (tabName === "rental-office") {
    tabs[0].classList.add("active");
    document.getElementById("rentalOfficeTab").classList.add("active-tab");
  } else if (tabName === "inspection") {
    tabs[1].classList.add("active");
    document.getElementById("inspectionTab").classList.add("active-tab");
  }
}

function openRentalOfficeModal(bookingId) {
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) return;

  const modalBookingDetails = document.getElementById("modalBookingDetails");
  modalBookingDetails.innerHTML = `
        <p><strong>Customer:</strong> ${booking.userId}</p>
        <p><strong>Vehicle:</strong> ${booking.car.name}</p>
        <p><strong>Pickup:</strong> ${formatDate(booking.pickupDate)} ${
    booking.pickupTime
  }</p>
        <p><strong>Return:</strong> ${formatDate(booking.returnDate)} ${
    booking.returnTime
  }</p>
        <p><strong>Location:</strong> ${getLocationName(
          booking.pickupLocation
        )}</p>
    `;

  const verificationForm = document.getElementById("verificationForm");
  verificationForm.onsubmit = function (e) {
    e.preventDefault();
    booking.status = "active";
    booking.vehicleCondition =
      document.getElementById("vehicleCondition").value;
    booking.initialBatteryLevel = document.getElementById("fuelLevel").value;
    booking.initialMileage = document.getElementById("mileage").value;
    booking.staffNotes = document.getElementById("staffNotes").value;

    const index = bookings.findIndex((b) => b.id === bookingId);
    bookings[index] = booking;

    showNotification("Rental processed successfully", "success");
    closeModal("rentalOfficeModal");
    verificationForm.reset();
    initializeDashboard();
  };

  openModal("rentalOfficeModal");
}

function openReturnModal(bookingId) {
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) return;

  const modalActiveRentalInfo = document.getElementById(
    "modalActiveRentalInfo"
  );
  modalActiveRentalInfo.innerHTML = `
        <p><strong>Vehicle:</strong> ${booking.car.name}</p>
        <p><strong>Pickup:</strong> ${formatDate(booking.pickupDate)} ${
    booking.pickupTime
  }</p>
        <p><strong>Expected Return:</strong> ${formatDate(
          booking.returnDate
        )} ${booking.returnTime}</p>
        <p><strong>Pickup Location:</strong> ${getLocationName(
          booking.pickupLocation
        )}</p>
    `;

  const returnForm = document.getElementById("returnForm");
  returnForm.onsubmit = function (e) {
    e.preventDefault();
    booking.status = "returned";
    booking.returnCarPark = document.getElementById("returnCarPark").value;
    booking.finalMileage = document.getElementById("returnMileage").value;
    booking.finalBatteryLevel = document.getElementById("batteryLevel").value;
    booking.customerNotes = document.getElementById("customerNotes").value;
    booking.actualReturnDate = new Date().toISOString();

    const index = bookings.findIndex((b) => b.id === bookingId);
    bookings[index] = booking;

    showNotification("Return request submitted successfully", "success");
    closeModal("returnModal");
    returnForm.reset();
    initializeDashboard();
  };

  openModal("returnModal");
}

function openInspectionModal(bookingId) {
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) return;

  const modalReturnInfo = document.getElementById("modalReturnInfo");
  modalReturnInfo.innerHTML = `
        <p><strong>Customer:</strong> ${booking.userId}</p>
        <p><strong>Vehicle:</strong> ${booking.car.name}</p>
        <p><strong>Return Location:</strong> ${getLocationName(
          booking.returnCarPark
        )}</p>
        <p><strong>Initial Mileage:</strong> ${booking.initialMileage} km</p>
        <p><strong>Final Mileage:</strong> ${booking.finalMileage} km</p>
        <p><strong>Battery Level:</strong> ${booking.finalBatteryLevel}%</p>
    `;

  const inspectionForm = document.getElementById("inspectionForm");
  inspectionForm.onsubmit = function (e) {
    e.preventDefault();

    const formData = new FormData(inspectionForm);
    const inspectionData = Object.fromEntries(formData.entries());

    booking.status = "inspected";
    booking.inspectionData = inspectionData;
    booking.damagesFound = document.getElementById("damagesFound").checked;
    booking.damageDescription =
      document.getElementById("damageDescription").value;
    booking.repairCost = document.getElementById("repairCost").value || 0;
    booking.inspectorNotes = document.getElementById("inspectorNotes").value;
    booking.inspectorName = document.getElementById("inspectorName").value;

    const index = bookings.findIndex((b) => b.id === bookingId);
    bookings[index] = booking;

    showNotification("Inspection completed successfully", "success");
    closeModal("inspectionModal");
    inspectionForm.reset();
    initializeDashboard();
  };

  openModal("inspectionModal");
}

function openPaymentModal(bookingId) {
  const booking = bookings.find((b) => b.id === bookingId);

  if (!booking) return;

  // Calculate costs
  const pickupDate = new Date(booking.pickupDate);
  const returnDate = new Date(booking.returnDate);
  const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));
  const rentalCost = booking.car.dailyRate * days;
  const insurance = 30 * days;
  const damageCost = parseFloat(booking.repairCost) || 0;
  const cleaningFee = booking.inspectionData?.cleanliness !== "clean" ? 50 : 0;
  const batteryFee = parseInt(booking.finalBatteryLevel) < 70 ? 30 : 0;
  const totalAmount =
    rentalCost + insurance + damageCost + cleaningFee + batteryFee;

  // Load bill summary
  const billSummary = document.getElementById("billSummary");
  billSummary.innerHTML = `
        <p><strong>Vehicle:</strong> ${booking.car.name}</p>
        <p><strong>Customer:</strong> ${booking.userId}</p>
        <p><strong>Rental Period:</strong> ${formatDate(
          booking.pickupDate
        )} - ${formatDate(booking.returnDate)}</p>
    `;

  document.getElementById("rentalDuration").textContent = `${days} days`;
  document.getElementById(
    "billDailyRate"
  ).textContent = `$${booking.car.dailyRate}`;
  document.getElementById("rentalCost").textContent = `$${rentalCost}`;
  document.getElementById("insuranceCost").textContent = `$${insurance}`;
  document.getElementById("totalBillAmount").textContent = `$${totalAmount}`;

  if (damageCost > 0) {
    document.getElementById("damageRow").style.display = "flex";
    document.getElementById("damageCost").textContent = `$${damageCost}`;
  }

  if (cleaningFee > 0) {
    document.getElementById("cleaningRow").style.display = "flex";
    document.getElementById("cleaningFee").textContent = `$${cleaningFee}`;
  }

  if (batteryFee > 0) {
    document.getElementById("batteryRow").style.display = "flex";
    document.getElementById("batteryFee").textContent = `$${batteryFee}`;
  }

  // Load inspection report
  const inspectionReport = document.getElementById("inspectionReport");
  inspectionReport.innerHTML = `
        <p><strong>Inspector:</strong> ${booking.inspectorName}</p>
        ${
          booking.damagesFound
            ? `<p class="text-danger"><strong>Damages Found:</strong> ${booking.damageDescription}</p>`
            : '<p class="text-success">No damages found</p>'
        }
        ${
          booking.inspectorNotes
            ? `<p><strong>Notes:</strong> ${booking.inspectorNotes}</p>`
            : ""
        }
    `;

  const paymentForm = document.getElementById("paymentForm");
  paymentForm.onsubmit = function (e) {
    e.preventDefault();

    booking.status = "completed";
    booking.finalAmount = totalAmount;
    booking.paymentMethod = "credit";
    booking.paymentDate = new Date().toISOString();

    const index = bookings.findIndex((b) => b.id === bookingId);
    bookings[index] = booking;

    showNotification("Payment processed successfully!", "success");
    closeModal("paymentModal");
    paymentForm.reset();

    setTimeout(() => {
      initializeDashboard();
    }, 1500);
  };

  openModal("paymentModal");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-SG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getLocationName(locationCode) {
  const locations = {
    orchard: "Orchard Road Office",
    changi: "Changi Airport Office",
    marina: "Marina Bay Office",
    woodlands: "Woodlands Office",
  };
  return locations[locationCode] || locationCode;
}
