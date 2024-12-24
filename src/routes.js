import About from "./pages/About";
import MainPage from "./pages/MainPage";

const router = [
  {
    element: <MainPage />,
    path: "/",
  },

  {
    element: <About />,
    path: "/about",
  },
];

export default router;
