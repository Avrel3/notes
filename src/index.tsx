import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);