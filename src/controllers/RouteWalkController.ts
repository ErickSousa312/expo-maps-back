import { Request, Response } from 'express';
import ProductsDonated from '../models/RouteWalk';
import User from '../models/User';
import RouteWalk from '../models/RouteWalk';

class RouteWalkController {
  async GetAll(req: Request, res: Response) {
    const routes = await RouteWalk.find();
    console.log(routes);
    res.status(200).json(routes);
  }

  async SaveRoute(req: Request, res: Response) {
    try {
      const { route, emailUser, distance } = req.body;
      console.log(req.body);
      const newRoute = await RouteWalk.create({
        route,
        emailUser,
        distance,
      });
      if (!newRoute) {
        return res.status(400).json({ msg: 'Erro ao registrar rota' });
      }
      res.status(201).json(newRoute);
    } catch (error) {
      return res.status(400).json({
        msg: 'Erro ao cadastrar rota',
        err: (error as Error).message,
      });
    }
  }

  async DeleteRoute(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedRoute = await RouteWalk.findByIdAndDelete(id);
      if (!deletedRoute) {
        return res.status(404).json({ msg: 'Rota não encontrada' });
      }
      return res.status(200).json({ msg: 'Rota deletada com sucesso' });
    } catch (error) {
      return res.status(400).json({
        msg: 'Erro ao deletar rota',
        err: (error as Error).message,
      });
    }
  }

  async GetRoutesByUser(req: Request, res: Response) {
    const { emailUser } = req.params;
    try {
      const routes = await RouteWalk.find({ emailUser });
      if (!routes) {
        return res.status(404).json({ msg: 'Rota não encontrada' });
      }
      return res.status(200).json(routes);
    } catch (error) {
      return res.status(400).json({
        msg: 'Erro ao buscar rota',
        err: (error as Error).message,
      });
    }
  }

  async GetRoutesById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      console.log('getroutes by id: ' + id);
      const routes = await RouteWalk.findById(id);
      if (!routes) {
        return res.status(404).json({ msg: 'Rota não encontrada' });
      }
      console.log(routes);
      return res.status(200).json(routes);
    } catch (error) {
      return res.status(400).json({
        msg: 'Erro ao buscar rota',
        err: (error as Error).message,
      });
    }
  }
}

export default new RouteWalkController();
