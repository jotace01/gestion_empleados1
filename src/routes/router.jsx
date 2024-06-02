import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import Root from "./route";
import PersonalForm from "../PersonalForm/PersonalForm";
import Personal from "../components/Personal";
// import PersonalTable from "../PersonalTable/PersonalTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Form",
        element: <PersonalForm />,
      },
      {
        path: "report",
        element: <Personal />,
      },
      {
        path: "contexFixed",
        element: <PersonalForm />,
      },
      {
        path: "context",
        element: <Personal />,
      },
    ],
  },
  //   {
  //   //   path: "form",
  //   //   element: <Contact />,
  //   // },
]);
