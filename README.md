# ISIT207 - Assignment 2 - Q4 2025

| Name            | Akilesh Jayakumar |
| --------------- | ----------------- |
| Student ID      | 7901240           |
| Module Code     | ISIT207           |
| Submission Date | 2 November 2025   |

---

## AZoom Car Rental – Project Overview

AZoom Car Rental is a modern Single-Page Application (SPA) for electric vehicle rentals in Singapore. It is designed for both customers and employees, offering a seamless workflow and an intuitive user experience.

---

### Core Features

- **Customer Car Reservation:** Reserve a car online via the AZoom Car Rental website using a credit card.
- **Car Pickup at Office:** Customer rents and collects the car at the AZoom Car Rental office.
- **Car Return:** Customer returns the rented car at a designated car park location.
- **Car Inspection:** An employee inspects the returned car and updates the status to ensure there are no damages.
- **Final Billing:** Customer pays the final bill, which includes the rental cost and any charges for damages found during inspection.

---

## Additional Credits & Creative Features Implementation

#### 1. Modern Responsive UI/UX Design Quality

- **Fully Responsive Layout:** Three breakpoints (992px, 768px, 480px) ensuring optimal viewing on desktop, tablet, and mobile devices
- **Professional Visual Design:** Modern gradient-based color scheme with blue and green accents, smooth animations, and transitions throughout
- **Interactive Elements:** Hover effects on cards, buttons, and navigation items with smooth transform animations for enhanced user engagement
- **Mobile-First Approach:** Hamburger menu navigation, touch-friendly button sizes, and optimized font scaling for seamless mobile experience

#### 2. Advanced Car Catalog System with Search & Filters

- **Real-time Search Functionality:** Instant filtering as users type, with search across car names and types
- **Multi-Filter Capability:** Type-based filtering (Sedan, SUV, Hatchback, Sports) with active filter indicators
- **Results Counter Display:** Real-time count of matching vehicles to guide user selection
- **Reset Filters Option:** Quick access button to clear all filters and return to full catalog view
- **One-Click Booking Navigation:** Direct navigation to booking page with pre-selected vehicle from catalog

#### 3. Comprehensive Dashboard System with Role-Based Access Control

- **Customer Dashboard:**
  - Statistics cards showing active rentals, completed rentals, and pending bookings
  - Complete booking management with status tracking
  - Action buttons (Return Vehicle, Pay Bill) based on booking state
- **Employee Dashboard:**

  - Dual-tab interface (Rental Office & Inspection) for organized workflow
  - Role-specific functionality for rental processing and vehicle inspection
  - Real-time booking status updates

- **Status Badges:** Color-coded indicators (pending, active, returned, inspected, completed) for quick visual status recognition

#### 4. Dynamic Content & Notification

- **Toast Notification System:** Non-intrusive notifications for all user actions (success, error, info) with auto-dismiss functionality
- **Real-Time Form Validation:** Immediate feedback on form inputs with clear error messages
- **Empty State Messaging:** Helpful guidance messages when no bookings or data are available, improving user experience
- **Interactive Status Updates:** Live status changes reflected across the application without manual refresh

#### 5. Professional Modal System & Enhanced Booking Experience

- **Professional Modal System:**
  - Smooth modal animations with backdrop blur effect for focused user attention
  - Responsive modal layouts that adapt to different screen sizes
  - Multi-step forms for complex processes (rental processing, inspection, payment)
- **Enhanced Booking Experience:**
  - Car selection with visual preview showing selected vehicle details
  - Credit Card payment processing with secure form handling
  - Detailed final bill with comprehensive breakdown including damage assessment, cleaning fees, and battery charges
  - Complete inspection report display within payment modal

---

### Technical Details

- All data is stored on the client side using JavaScript arrays (no backend or database).
- Data will reset when the browser is refreshed.

---
