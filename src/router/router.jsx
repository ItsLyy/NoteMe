import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import NotFound from "../components/NotFound";
import NoteDetail from "../components/NoteDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/note/:idNote',
    element: <NoteDetail />,
  },
  {
    path: '*',
    element: <NotFound />
  }
]);

export default router;