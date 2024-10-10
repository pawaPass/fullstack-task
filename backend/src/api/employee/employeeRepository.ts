import type { Employee } from "@/api/employee/employeeModel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EmployeeRepository {
  // Find all employees, optionally filtered by role (case-insensitive)
  async findAllAsync(role?: string): Promise<Employee[]> {
    return prisma.employee.findMany({
      where: { role },
    });
  }
}
