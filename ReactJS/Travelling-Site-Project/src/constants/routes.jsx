import { HomePage } from "../pages/HomePage";
import { Layout } from "../layout/Layout";
import LuxuryHotels from "../pages/LuxuryHotels";
import BudgetHotels from "../pages/BudgetHotels";
import FlightsDomestic from "../pages/FlightsDomestic";
import FlightsInternational from "../pages/FlightsInternational";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/hotels/luxury-hotels",
        element: <LuxuryHotels />,
      },
      {
        path: "/hotels/budget-hotels",
        element: <BudgetHotels />,
      },
      {
        path: "/flights/domestic-flights",
        element: <FlightsDomestic />,
      },
      {
        path: "/flights/international-flights",
        element: <FlightsInternational />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
];
