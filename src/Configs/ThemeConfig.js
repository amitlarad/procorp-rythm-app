import { DefaultTheme } from "react-native-paper";
const theme = {
    ...DefaultTheme,
    roundness: 3,
    mode: "adaptive",
    colors: {
        ...DefaultTheme.colors,
        primary: "#1e3d59",
        accent: "#ff6e40",
        disabled: "#595260",
        background: "#f5f0e1",
        text: "#000000",
    },
};

export const SITE_LOGO = 'https://www.sutionline.com/image/catalog/logo/Suti%20Logo%20.png';

export default theme;