import { App } from 'vue'
import FShape from './FShape.vue'
FShape.install = (app: App) => {
  app.component(FShape.name, FShape)
}

export default FShape