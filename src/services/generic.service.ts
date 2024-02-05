import express from "express";
import { Document, Model } from "mongoose";
import { response, serverError } from "../utils/common";

export class GenericService<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const newItem = await this.model.create(req.body);
      return response(res, false, 201, newItem);
    } catch (error) {
      return serverError(res, error);
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    try {
      const items = await this.model.find().lean();
      return response(res, false, 200, items);
    } catch (error) {
      return serverError(res, error);
    }
  }

  async getById(req: express.Request, res: express.Response) {
    try {
      const item = await this.model.findById(req.params.id);
      if (item) {
        return response(res, false, 200, item);
      } else {
        return response(res, true, 404, null, "Not Found");
      }
    } catch (error) {
      return serverError(res, error);
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      const item = await this.model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (item) {
        return response(res, false, 200, item);
      } else {
        return response(res, true, 404, null, "Not Found");
      }
    } catch (error) {
      return serverError(res, error);
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      const item = await this.model.findByIdAndDelete(req.params.id);
      if (item) {
        return response(res, false, 200, item);
      } else {
        return response(res, true, 404, null, "Not Found");
      }
    } catch (error) {
      return serverError(res, error);
    }
  }
}
