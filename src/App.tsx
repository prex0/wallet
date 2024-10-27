import { RouterProvider } from "react-router-dom";
import { appRoute } from "./AppRoute";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => { 
  return (<div className='h-full'>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRoute}/>
    </ThemeProvider>
  </div>
  )
}

export default App
