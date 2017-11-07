import path from 'path'
import express from 'express'
import hpp from 'hpp'
import helmet from 'helmet'
import compression from 'compression'
import HealthCheck from '@financial-times/health-check'
import expressWs from '@financial-times/express-web-service'

import { checks } from '../../config/server'
import { packageJSON } from '../../config'

const health = new HealthCheck({
  checks
})

const app = express()

const publicPath = path.join(__dirname, '../../public')
const indexFile = path.join(publicPath, 'index.html')

app.use(compression())
app.use(hpp())
app.use(helmet())

app.use(expressWs({
  healthCheck: health.checks(),
  goodToGoTest: health.gtg(),
  manifestPath: packageJSON
}))

app.use(express.static(publicPath))
app.get('*', (req, res) => res.sendFile(indexFile))

export default app
