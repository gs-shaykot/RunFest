# [🌍 RunFest: A Marathon Event Application](https://assignment-11-1f30f.web.app/) 

## 🗞️ Description
**RunFest** A Marathon Management System is a full-stack platform designed to connect marathon event organizers with participants. It enables users to create marathons, register for events, and manage their registrations via a personal dashboard. The project provides practical experience in user authentication, data management, and secure database integration. Key features include tools for exploring and managing marathon events.
The platform allows users to:
- Browse all ongoing and user-specific marathon events.
- Create, update, and delete marathon events through an intuitive interface.
- Register,update,delete to active marathon events and track contributions.

Key features include:
- **Marathon Management**: Add new Marathon events with details like type, description, and deadlines.
- **Real-time Feedback**: Toast messages for confirmations and error handling.
- **Authentication**: Secure login/registration system, with Google social login.
- **Personalized Dashboards**: Users can view and manage their marathon events and application.
- **Unique Design**: An eye-catching, responsive design adaptable to any device.
- **User Infor**: User Name and logout Button onClicking profile icon.

## ⚙️ Technologies Used
- **React.js** for building the user interface.
- **Firebase Authentication** for managing user login and registration.
- **Firebase Hosting** and **Vercel** for deployment.
- **MongoDB** for database management.
- **Node.js** and **Express.js** for API creation and backend logic.
- **React Hooks** (`useState`, `useEffect`, `useContext`, `useNavigate`, `useLocation`) for managing state and side effects.
- **React-Router** for routing.
- **Sweet Alert** for toast notifications.
- **DaisyUI** and **Tailwind CSS** for styling.
- **Swiper** for implementing dynamic sliders.
- Additional libraries for animations: **Lottie React**, **React Awesome Reveal**, **React Super Responsive Table**.

### ⭐ Key Features

1. **Dynamic Home Page**:
   - A banner section with a meaningful image slider showcasing at least three slides with event highlights.
   - **Marathons Section**: Displays six marathon cards fetched from the database, including the Marathon Title, Location, Registration Dates, and a "See Details" button.
   - **Upcoming Marathons Section**: Highlights six randomly selected upcoming marathon events with essential details.
   - Two extra meaningful sections to enhance user engagement.

2. **Marathon Management**:
   - **Add, Update, and Delete Marathons**: Secure forms to manage marathon events with fields like title, location, dates, running distance, and description.
   - View all marathons in a 3-column grid layout with sorting options by the newest or oldest creation date.
   - **Marathon Details Page**: Displays comprehensive details about a specific marathon, including a countdown timer for event start.

3. **User Registration and Application**:
   - **User Authentication**: Email/password-based login and registration with optional Google or GitHub authentication.
   - Register for marathons using a detailed form, auto-fill for logged-in users, and incremental registration count updates.
   - **My Apply List**: Displays marathons applied by the logged-in user with options to update or delete their application.

4. **Dashboard**:
   - **Add Marathons**: Form to create new marathon events with fields like registration dates, start date, location, and distance.
   - **My Marathon List**: A table view of all marathons created by the user, with options to update or delete.

5. **Responsive Design**:
   - Fully responsive design for mobile, tablet, and desktop views.
   - Dynamic content updates based on user navigation and interactions.

6. **Enhanced User Experience**:
   - Custom 404 Not Found Page.
   - Loading spinner for data-fetching and submission states.
   - Toast notifications for CRUD operations and error handling.

7. **Security & Scalability**:
   - Environment variables to hide Firebase config and MongoDB credentials.
   - JWT authentication for secure private routes and user verification.
   - Server-side search functionality for better performance and scalability.

8. **Additional Features**:
   - **Sorting and Filtering**: Sort marathons based on creation date and filter applied marathons by title.
   - Countdown timer on Marathon Details Page using `react-countdown-circle-timer`.
   - Dynamic page titles that change based on the current route.

## 🚀 Live Link
- [RunFest: A Marathon Management Application](https://assignment-11-1f30f.web.app/) 

## 🔧 Development Practices
- **GitHub Commits**: Maintained a structured commit history with 18+ commits on the client side and 8+ on the server side.
- **Environment Variables**: Secured sensitive keys (Firebase config, MongoDB credentials) using `.env` files.
- **Error Handling**: Used toast notifications and modals for user feedback instead of default alerts.
- **Hosting**: Deployed the client side on Firebase Hosting and the server side on Vercel, ensuring smooth route handling on reload.
- **Database Management**: Implemented MongoDB query filters to limit and sort data efficiently.
