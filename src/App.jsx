import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import AppStore from "./utils/AppSlice";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Provider store={AppStore}>
   <div className="bg-[#212428]">
      <div className="container mx-auto font-bevellier">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
    </Provider>
  );
}

export default App;
