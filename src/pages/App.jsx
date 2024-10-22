import Navbar from '../components/Navbar';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
    }
  ]);
  return (
    <>
      <main>
        <RouterProvider router={router}/>
      </main>
    </>
  )
}

export default App
