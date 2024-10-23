import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NoteApp from "../components/NoteApp";

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
  }
]);

export default router;