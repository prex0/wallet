import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { WalletLayout, HomePage, SendPage, SwapPage, ReceivePage, NotFound } from './pages'
import { Layout } from './pages/Layout'
import { PendingPage } from './pages/PendingPage'

/**
 * AppRoute is the main router for the application.
 */
export const appRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<WalletLayout />}>
        <Route index element={<HomePage />} />
        <Route path="send" element={<SendPage />} />
        <Route path="swap" element={<SwapPage />} />
      </Route>
      <Route path="pending" element={<PendingPage />} />
      <Route path="receive" element={<ReceivePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
