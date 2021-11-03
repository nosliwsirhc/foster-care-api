import { Router } from 'express'
import userController from '../controllers/user.controller'
import passport from '../lib/passport'

const router = Router()

router.patch('/change-password', passport.authenticate('jwt', { session: false }), userController.changePassword)

export default router