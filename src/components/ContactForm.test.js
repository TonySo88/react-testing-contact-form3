import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test("renders ContactForm component without errors", () => {
  render(<ContactForm />);
});

test("when a user can fills out and submits the form, a new user profile is created and displayed", () => {
  // Arrange - render the component and get access to the form elements in the DOM
  render(<ContactForm />);
  const firstNameInput = screen.getByLabelText(/firstname/i);
  // one word? two? asterisk?
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  // Act - type into the form, filling out all the fields, then submitting
 userEvent.type(firstNameInput, "Ton");
 userEvent.type(lastNameInput, "So");
 userEvent.type(emailInput, "tony@lambdaschool.com");
 userEvent.type(messageInput, "Hello World");
 userEvent.click(submitButton);

  // Assert - make sure that the new user is created and displayed
const newUser = screen.findByText(/ton/i);

newUser.then(element => {
    expect(element).toBeTruthy();
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
})

});

