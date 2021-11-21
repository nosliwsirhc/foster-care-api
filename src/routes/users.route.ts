import { Router } from 'express'
import userController from '../controllers/users.controller'
import passport from '../lib/passport'

const router = Router()

router.get('/:id', userController.userProfile)
// router.get('/:id', passport.authenticate('jwt', { session: false }), userController.userProfile)
router.get('/', userController.users)
// router.get('/', passport.authenticate('jwt', { session: false }), userController.users)

export default router