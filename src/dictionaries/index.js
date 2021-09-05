import agile from './agile.json'
import autoMechanic from './auto-mechanic.json'
import marklar from './marklar.json'

const DICTIONARIES = [
  agile,
  autoMechanic,
  marklar,
].sort((a, b) => a.name > b.name )

export default DICTIONARIES
