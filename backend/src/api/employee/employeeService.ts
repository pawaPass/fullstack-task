import type { Employee } from "@/api/employee/employeeModel";
import { EmployeeRepository } from "@/api/employee/employeeRepository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { StatusCodes } from "http-status-codes";

export class EmployeeService {
  private employeeRepository: EmployeeRepository;

  constructor(repository: EmployeeRepository = new EmployeeRepository()) {
    this.employeeRepository = repository;
  }

  // Retrieves all employees, optionally filtered by role
  async findAll(role?: string): Promise<ServiceResponse<Employee[] | null>> {
    try {
      const employees = await this.employeeRepository.findAllAsync(role);
      if (!employees || employees.length === 0) {
        return ServiceResponse.failure("No employees found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<Employee[]>("Employees found", employees);
    } catch (ex) {
      const errorMessage = `Error finding all employees: ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving employees.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

export const employeeService = new EmployeeService();
