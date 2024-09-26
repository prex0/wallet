import { RouterProvider } from "react-router-dom";
import { appRoute } from "./AppRoute";
import { cn, background, color } from "@prex0/uikit/styles";
const App = () => {
 
  return (<div className={cn(background.default, color.foreground, 'h-full')}>
    <RouterProvider router={appRoute}/>
  </div>
  )
}

export default App
