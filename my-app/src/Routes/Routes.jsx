import { LoginPage, Transacciones, Cajero, Usuarios } from "../Pages/";
import LayoutLogin from "../Layouts/LayoutLogin";
import { SignUp } from "../Components/";
import { ForgetPassword } from "../Components/";
import LayoutMenu from "../Layouts/LayoutMenu";

export const Routes = [
  {
    path: "/",
    element: <LayoutLogin />,
    children: [
      {
        path: "",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutMenu />,
    children: [
      {
        path: "/transacciones",
        element: <Transacciones />,
      },
      {
        path: "/usuarios",
        element: <Usuarios />,
      },

      {
        path: "/cajeros",
        element: <Cajero />,
      },
      {
        path: "/Login",
        element: <LoginPage />,
      },
    ],
  },
];
