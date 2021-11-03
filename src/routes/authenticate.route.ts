import { Router } from 'express'
import authenticateController from '../controllers/authenticate.controller'

const router = Router()

router.post('/login', authenticateController.login)
router.get('/refresh-token', authenticateController.refresh)
router.delete('/logout', authenticateController.logout)

export default router