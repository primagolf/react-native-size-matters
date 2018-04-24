import { Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen Apple (6, 7 & 8) device
const guidelineBaseWidth = Constants.manifest.extra.baseWidth | 375;
const guidelineBaseHeight = Constants.manifest.extra.baseHeight | 667;

const scaleH = (size, factor = 1) => {
    const newSize = width / guidelineBaseWidth * size;
    return Math.round(size + (newSize - size) * factor);
}
const scaleV = (size, factor = 1) => {
    const newSize = height / guidelineBaseHeight * size;
    return Math.round(size + (newSize - size) * factor);
}

export { scaleH, scaleV };