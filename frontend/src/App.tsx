import React, { useEffect, useState } from "react";

// Define the Employee type
interface Employee {
  id: number;
  name: string;
  role: string;
  email: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filterRole, setFilterRole] = useState<string>(""); // Role filter state
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch employees from the backend, with optional role filtering
  const fetchEmployees = async (role: string = "") => {
    setLoading(true);
    setError(null);

    try {
      const query = role ? `?role=${role}` : "";
      const response = await fetch(`http://localhost:8080/employees${query}`);
      const data = await response.json();

      if (response.ok && data.success) {
        // Extract employees from the responseObject field
        setEmployees(data.responseObject);
      } else {
        setError(data.message || "Failed to fetch employees");
      }
    } catch (err) {
      setError("Error fetching employees");
    } finally {
      setLoading(false);
    }
  };

  // Fetch employees when the component mounts or when the role filter changes
  useEffect(() => {
    fetchEmployees(filterRole);
  }, [filterRole]);

  // Handle role input changes
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterRole(e.target.value);
  };

  return (
    <div>
      <h1>Employee List</h1>

      {/* Input for filtering by role */}
      <div>
        <label htmlFor="roleFilter">Filter by role:</label>
        <input
          type="text"
          id="roleFilter"
          value={filterRole}
          onChange={handleRoleChange}
          placeholder="e.g., Developer"
        />
      </div>

      {/* Loading and error handling */}
      {loading && <p>Loading employees...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Employee List */}
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <strong>{employee.name}</strong> - {employee.role} - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
