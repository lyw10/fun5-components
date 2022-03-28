import { App } from 'vue'
export { textDefaultProps , textStylePropNames, TextComponentProps,
  imageDefaultProps, imageStylePropsNames, ImageComponentProps,
  shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps,
  AllComponentProps
} from './defaultProps'

import FText from './components/FText'
import FImage from './components/FImage'
import FShape from './components/FShape'

const components = [
  FText,
  FImage,
  FShape
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  FText,
  FImage,
  FShape,
  install
}
export default {
  install
}