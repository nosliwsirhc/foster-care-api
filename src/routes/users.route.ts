import { Router } from 'express'
import userController from '../controllers/users.controller'
import passport from '../lib/passport'

const router = Router()

router.get('/:id', passport.authenticate('jwt', { session: false }), userController.userProfile)
router.get('/', passport.authenticate('jwt', { session: false }), userController.users)

export default router