import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "../components/Contacts";
import MainPage from "../components/MainPage";
import { setupStore } from "../store/store";

test("MainPage test", () => {
  render(
    <Provider store={setupStore({})}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </Provider>
  );

  expect(screen.getByRole("button")).toBeInTheDocument();
});
