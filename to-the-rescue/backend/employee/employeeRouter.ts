import express, { type Router } from "express";

import { employeeController } from "./employeeController";

export const employeeRouter: Router = express.Router();

employeeRouter.get("/", employeeController.getEmployees);
