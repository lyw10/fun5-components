import { App } from 'vue';
export { textDefaultProps, textStylePropNames, TextComponentProps, imageDefaultProps, imageStylePropsNames, ImageComponentProps, shapeDefaultProps, shapeStylePropsNames, ShapeComponentProps, AllComponentProps } from './defaultProps';
import FText from './components/FText';
import FImage from './components/FImage';
import FShape from './components/FShape';
declare const install: (app: App) => void;
export { FText, FImage, FShape, install };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
