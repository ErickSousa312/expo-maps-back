import express from 'express';
const router = express.Router();

import AuthController from '../controllers/AuthController';
import JwtMiddleware from '../auth/JwtMiddleware';
import RouteWalkController from '../controllers/RouteWalkController';

// Rotas de autenticação
router.post('/signUp', AuthController.signUp);
router.post('/login', AuthController.signIn);
// router.get('/infoUser', AuthController.dataToken);
router.get('/routes', RouteWalkController.GetAll);
router.get('/routes/:emailUser', RouteWalkController.GetRoutesByUser);
router.get('/routes/id/:id', RouteWalkController.GetRoutesById);
router.post('/routes', RouteWalkController.SaveRoute);
router.delete('/routes', RouteWalkController.DeleteRoute);

router.get('/infoUser/:userID', AuthController.infoUser);

// Rota de teste
router.get('/', (req, res) => {
  res.json({ msg: 'ta rodando pai' });
  console.log('hi');
});

export default router;
