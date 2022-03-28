import { App } from 'vue'
import FText from './FText.vue'
FText.install = (app: App) => {
  app.component(FText.name, FText)
}

export default FText