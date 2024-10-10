import { employeeService } from "@/api/employee/employeeService";
import { handleServiceResponse } from "@/common/utils/httpHandlers";
import type { Request, RequestHandler, Response } from "express";

class EmployeeController {
  public getEmployees: RequestHandler = async (req: Request, res: Response) => {
    const role = req.query.role as string | undefined; // Extract the 'role' query param
    const serviceResponse = await employeeService.findAll(role);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const employeeController = new EmployeeController();
