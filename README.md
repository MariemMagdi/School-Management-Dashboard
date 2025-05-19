# School Management Dashboard

This is a school management dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**. It offers a comprehensive solution for managing students, teachers, classes, grades, attendance, and more, while providing role-based access control using **Clerk** for authentication.

## Key Features

- **Role-Based Dashboards**: Admin, Teacher, Student, and Parent dashboards, each with unique views and functionalities.
- **CRUD Operations**: Create, read, update, and delete operations for all major entities (students, teachers, classes, etc.) with pagination and search/filter capabilities.
- **Interactive Charts**: Visualizations for attendance, performance, finance, and student demographics.
- **Calendar & Event Management**: Tools for managing school events and schedules.
- **Announcements & Notifications**: Keep users informed with real-time updates and notifications.
- **Authentication & Route Protection**: Integrated **Clerk** for handling user authentication and role-based access control via custom middleware.

## Architecture

- **Pages**: Organized under a dashboard by user role (Admin, Teacher, Student, Parent).
- **Components**: Reusable UI components for charts, tables, forms, and other UI elements.
- **Database**: The backend is powered by **PostgreSQL** with a rich schema using **Prisma ORM** to manage entities such as students, teachers, classes, grades, exams, assignments, results, attendance, events, and announcements.
- **Database Models**: Defined in `schema.prisma`.
- **Data Access**: Handled via **Prisma** in `prisma.ts`.
- **Utility Functions**: Located in the `lib` folder for shared functions and configurations.

## Data Flow

- **Server Components**: Fetch data from the backend using **Prisma** and pass it to the UI components.
- **Forms**: Handled using **react-hook-form** and **Zod** for schema validation.
- **State & Navigation**: Managed by **Next.js** routing and **Clerk** for session management.

## Authentication & Authorization

- **Clerk**: Handles user sessions and role-based access control.
- **Middleware**: Custom middleware in `middleware.ts` ensures proper access restrictions based on user roles.

## Project Snapshots

### Admin Dashboard

![Admin Dashboard](./assets/screenshots/AdminDashboard.png)
_This is a screenshot of the Admin Dashboard._

### Teachers List

![Teachers List](./assets/screenshots//TeachersList.png)
_This is a screenshot of the Teachers List page._

### Adding Teacher Form

![Adding Teacher Form](./assets/screenshots/AddingTeacherForm.png)
_This is a screenshot of the Add Teacher form._

### Single Teacher Page

![Single Teacher Page](./assets/screenshots/SignleTeacherPage.png)
_This is a screenshot of the Teacher Page._

### Responsive Design

![Responsive Design](./assets/screenshots/ResponsiveDesign.png)
_This is a screenshot of the responsive design of the application._

## Setup & Installation

### Prerequisites

- Node.js (version 16 or higher)
- PostgreSQL (or an alternative database that Prisma supports)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/school-management-dashboard.git
   cd school-management-dashboard
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables by creating a `.env` file in the root directory and configure your database connection along with **Clerk** credentials:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/school_db
   CLERK_FRONTEND_API=your-clerk-frontend-api
   CLERK_API_KEY=your-clerk-api-key
   ```

4. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the application in your browser at `http://localhost:3000`.

## Project Structure

```
/pages
  /dashboard
    /admin
    /teacher
    /student
    /parent
/components
  /charts
  /tables
  /forms
  /ui
/prisma
  schema.prisma
/lib
  /utils
  /auth
/middleware.ts
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
