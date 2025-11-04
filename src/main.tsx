import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Layout from './components/layout/index.tsx'
import CreateProduct from './pages/createProduct/index.tsx'
import ProductsList from './pages/productsList/index.tsx'
import ProductCard from './pages/productCard/index.tsx'
import PageNotFound from './pages/pageNotFound/index.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { HeroUIProvider } from '@heroui/react'

const router = createBrowserRouter([
  {path:'/',
    element:<Layout/>,
    children: [
      {
        path:'',
        element:<PageNotFound/>
      },
      {
        path:'products',
        element:<ProductsList/>
      },
      {
        path:'products/:id',
        element:<ProductCard/>
      },
      {
        path:'create-product',
        element:<CreateProduct/>
      },
    ]
  },
  {
    path:'*',
    element:<PageNotFound/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HeroUIProvider>
      <RouterProvider router={router} />
      </HeroUIProvider>
      </Provider>
  </StrictMode>,
)
