import { Router } from 'express'
import adminController from '../controllers/admin.controller'

const router = Router()

router.post('/register', adminController.register)
router.delete('/delete-user/:id', adminController.deleteUser)
router.delete('/revoke-token', adminController.revokeToken)

export default router