import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import App from "../App";
import { setupStore } from "../store/store";

test("Router test", () => {
  const store = setupStore();
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const mainLink = screen.getByTestId("main");
  const aboutLink = screen.getByTestId("about-me");
  const skillsLink = screen.getByTestId("skills");
  const contactsLink = screen.getByTestId("contacts");
  const ProjectsLink = screen.getByTestId("projects");

  userEvent.click(skillsLink);
  expect(screen.getByText(/опыт/i)).toBeInTheDocument();

  userEvent.click(mainLink);
  expect(screen.getByText(/Белокрылец/i)).toBeInTheDocument();
  expect(screen.getByText(/Связаться/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/Связаться/i));
  expect(screen.getByText(/написать мне/i)).toBeInTheDocument();

  userEvent.click(aboutLink);
  expect(screen.getByText(/мой путь к/i)).toBeInTheDocument();

  userEvent.click(contactsLink);
  expect(screen.getByText(/написать мне/i)).toBeInTheDocument();

  userEvent.click(ProjectsLink);
  expect(screen.getByText(/фитнес/i)).toBeInTheDocument();
});
