import Lorem from '../../services/lorem'

import agile from './agile.json'
import autoMechanic from './auto-mechanic.json'

const INDEX = {
  'Agile': new Lorem(agile),
  'Auto Mechanic': new Lorem(autoMechanic)
}

export const names = Object.keys(INDEX).sort()

export default INDEX
