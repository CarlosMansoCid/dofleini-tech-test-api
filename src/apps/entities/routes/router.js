const {Router} = require('express')
const Controller = require('../controllers/entities.controller')
const router = Router()
const validateAndAdapteInputData = require('../middlewares/validateAndAdapteInputData.middleware')
const validatePermissions = require('../middlewares/permisionValidator.middleware')
const EntitiesModel = require('../models/entity.model')
const EntitiesUseCases = require('../../../useCases/entityUseCases')



console.log(Controller.getOne)
router.get('/', Controller.getAll)
router.get('/:id', Controller.getOne)
router.delete('/:id', Controller.deleteEntity)

router.use(validatePermissions)
router.post('/:id', Controller.addPermissions)
router.patch('/:id', Controller.deleteEntityPermissions)
router.post('/',validateAndAdapteInputData, Controller.createEntity)



module.exports = router