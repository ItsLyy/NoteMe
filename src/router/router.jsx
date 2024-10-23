import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NoteApp from "../components/NoteApp";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/note/:filterNote',
        element: <NoteApp />,
      },
      {
        path: '/',
        element: <NoteApp />,
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;