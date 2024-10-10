Backend: (Express, Prisma, SQLite, TypeScript)
1. Create an Employee model in Prisma:
The model should have the following fields:
- id (Primary key, Integer, Auto-increment)
- name (String)
- role (String)
- email (String)
- createdAt (DateTime, default to now)
2. Generate Prisma migrations and seed the database:
Add at least 5 sample employees with different names and roles to the database.
3. Create an Express endpoint to fetch a list of employees:
Route: GET /employees
This endpoint should return a list of all employees.
4. Add a filter to the endpoint:
Allow filtering the list of employees based on a query parameter role.
Example: GET /employees?role=developer should return only the employees whose role is “developer”.

Frontend: (React, TypeScript)
1. Fetch the list of employees:
In the frontend app, create a simple interface that fetches the list of employees from the backend and displays them in a list.
2. Add a text input for filtering by role:
Add a text input where the user can type a role (e.g., “developer”).
When the user types a role, fetch the filtered list of employees from the backend (e.g., GET /employees?role=developer) and update the list displayed.