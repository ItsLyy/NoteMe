import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NoteApp from "../components/NoteApp";
import NotFound from "../components/NotFound";
import NoteDetail from '../components/NoteDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/note-detail/:idNote',
        element: <NoteDetail />
      },
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