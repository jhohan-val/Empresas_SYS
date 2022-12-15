import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Layouts/Main'
import Principal from './components/Helpers/Principal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Clientes from './components/Helpers/Clientes'
import Productos from './components/Helpers/Productos'
import Proveedores from './components/Helpers/Proveedores'
import TablaClientes from './components/Helpers/Tablas/TablaClientes'
import TablaProductos from './components/Helpers/Tablas/TablaProductos'
import TablaProveedores from './components/Helpers/Tablas/TablaPoveedores'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/principal',
    element: <Principal />
  },
  {
    path: '/clientes',
    element: <Clientes />
  },
  {
    path: '/productos',
    element: <Productos />
  },
  {
    path: '/proveedores',
    element: <Proveedores />
  },
  {
    path: '/clientes/tablaClientes/',
    element: <TablaClientes />
  },
  {
    path: '/productos/tablaProductos',
    element: <TablaProductos />
  },
  {
    path: '/proveedores/tablaProveedores',
    element: <TablaProveedores />
  }
])

function App() {
  return (
    <section className="App">
      <RouterProvider router={ router } />
    </section>
  )
}

export default App
