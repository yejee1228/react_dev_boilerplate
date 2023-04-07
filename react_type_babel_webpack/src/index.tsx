import React from 'react'
import App from './App'
import CreateDOM from 'react-dom/client';

const rootElement = document.getElementById("root") as HTMLElement
const root = CreateDOM.createRoot(rootElement)

root.render(<App />)
