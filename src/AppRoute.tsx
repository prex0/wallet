import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { WalletLayout, HomePage, SendPage, SwapPage, ReceivePage, NotFound } from './pages'

/**
 * AppRoute is the main router for the application.
 */
export const appRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WalletLayout />}>
      <Route path="home" element={<HomePage />} />
      <Route path="send" element={<SendPage />} />
      <Route path="swap" element={<SwapPage />} />
      <Route path="receive" element={<ReceivePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
