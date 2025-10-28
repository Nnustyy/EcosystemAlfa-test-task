import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Layout from './components/layout/index.tsx'
import CreateProduct from './pages/createProduct/index.tsx'
import ProductsList from './pages/productsList/index.tsx'
import ProductCard from './pages/productCard/index.tsx'

const router = createBrowserRouter([
  {path:'/',
    element:<Layout/>,
    children: [
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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
