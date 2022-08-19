import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme/theme";
import Favicon from "react-favicon";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Favicon url="img\favicon-32x32.ico" />
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
