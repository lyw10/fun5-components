import { App } from 'vue'
import FImage from './FImage.vue'
FImage.install = (app: App) => {
  app.component(FImage.name, FImage)
}

export default FImage