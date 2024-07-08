import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

const App = () => {
  const Layout = () => {
    return (
      <MaxWidthWrapper>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MaxWidthWrapper>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/academy",
          element: <Home />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
