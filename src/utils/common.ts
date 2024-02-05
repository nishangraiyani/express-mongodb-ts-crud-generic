import { Response } from "express";

export const response = (
  res: Response,
  isError: Boolean,
  statusCode: number,
  data: any,
  error?: string
) => {
  if (!isError) {
    return res.status(statusCode).json(data);
  }
  return res.status(statusCode).json(error);
};

export const serverError = (res: Response, error: any) => {
  console.log("error", error);
  return response(
    res,
    true,
    500,
    null,
    "Something went wrong, please try again later."
  );
};
