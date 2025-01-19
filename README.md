# 🌱 Green Shadow (Pvt) Ltd

## 📖 Introduction
**Green Shadow (Pvt) Ltd**, located in Matale, Sri Lanka, is a thriving farm specializing in root crops and cereals. As the company expands its operations, a need for digital transformation arose, leading to the development of the **Crop Monitoring System**. This system is designed to streamline field management, crop tracking, and resource allocation, ensuring efficient large-scale operations.

---

## ✨ Key Features
- **Field Management**:  
  Organizes land parcels with crop assignments and staff allocations.
- **Crop Monitoring**:  
  Tracks crop types, growth stages, and field observations in real-time.
- **Staff Management**:  
  Manages staff details, assignments, and roles.
- **Monitoring Logs**:  
  Records field activities, crop observations, and images.
- **Vehicle & Equipment Management**:  
  Tracks vehicle assignments, equipment usage, and availability.
- **User Access Control**:  
  Role-based permissions for:
  - **MANAGER**: Full system access.
  - **ADMINISTRATIVE**: Limited to crop and field data management.
  - **SCIENTIST**: Access to crop-related data and insights.

---

## 🛠️ Core Business Processes
### 🚦 Role-Based Access
- **MANAGER**: Oversees the entire system and operations.
- **ADMINISTRATIVE**: Limited access for operational efficiency.
- **SCIENTIST**: Focused access to crop monitoring and research.

### 📊 Data Analysis
- **Relational Insights**: Assess resource relationships and allocations.
- **Spatial & Temporal Analysis**: Analyze operations by location and time.

---

## 🚀 Services Overview
| Service              | Description                                                      |
|----------------------|------------------------------------------------------------------|
| **Field Service**    | Allocates and manages cultivation fields.                       |
| **Crop Service**     | Monitors crop data, types, and growth stages.                   |
| **Staff Service**    | Manages staff assignments and roles.                            |
| **Monitoring Service**| Records observations and staff activities.                     |
| **Vehicle Service**  | Tracks vehicle assignments and operational usage.               |
| **Equipment Service**| Logs and monitors equipment usage.                              |
| **Auth Service**     | Ensures secure user authentication with role-based permissions. |

---

## 🗂️ Database Schema
Key entities in the database:
- **Field**: Details of field location, size, and assignments.
- **Crop**: Information on types, categories, and seasons.
- **Staff**: Personal details, roles, and tasks.
- **Monitoring Logs**: Observations, notes, and images.
- **Vehicle**: Vehicle details, fuel types, and assignments.
- **Equipment**: Equipment details and usage.
- **User**: Secure user credentials and roles.

---

## 💻 Technologies Used
- **Frontend**: React.js, React Router, Redux
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS

---

## 📥 Installation
Follow these steps to set up the system:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/maleeshaLH/React-Mock-Frontend.git
   ```

2. **Navigate to the frontend directory**:
   ```bash
   cd crop-monitoring-frontend
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Backend Setup**:
   - Follow the backend setup instructions in the respective directory.

---

## 📂 Project Structure
```plaintext
├── public/                 # Static files
├── src/                    # Main source folder
│   ├── assets/             # Images and static assets
│   ├── components/         # Reusable components
│   │   ├── crop/           # Components for crop management
│   │   ├── field/          # Components for field management
│   │   ├── header/         # Header components
│   │   ├── logMonitoring/  # Components for monitoring logs
│   │   ├── sidebar/        # Sidebar navigation components
│   │   ├── staff/          # Components for staff management
│   │   └── user/           # Components for user management
│   ├── models/             # Data models for the application
│   ├── pages/              # Application pages (using React Router)
│   ├── reducers/           # Redux reducers
│   ├── store/              # Redux store configuration
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # TypeScript environment declarations
└── package.json            # Project metadata and dependencies
```

---

## 🌟 Getting Started
1. Open the app in your browser at `http://localhost:5173`.
2. Login using the provided credentials.
3. Navigate through the system to explore its features.

---

## 📷 Project Photos
View the photos of the second semester project 
 ```bash
https://docs.google.com/document/d/1uIn7zPYlipqQrwNVZ6B1Z457W7XN4IyCQ-eABNDm_2E/edit?usp=sharing


