import Home from "./components/layout/Home"
import Login from "./components/layout/Login"
import Signup from "./components/layout/Signup"
import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/ui/mode-toggle"
import { ThemeProvider } from "./components/ui/theme-provider"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
