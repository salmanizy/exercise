import React from "react";
import Login from "../../src/component/Login"; 
import { mount } from '@cypress/react18';

describe("Component Testing Login Form", () => {
  it("Render input form dengan benar", () => {
    mount(<Login />);
    cy.get(".name-input").should("exist");
    cy.get(".email-input").should("exist");
    cy.get(".phone-input").should("exist");
  });

  it("Menampilkan error ketika submit kosong (Test Gagal)", () => {
    mount(<Login />);
    cy.get(".post-user-button").click();
    cy.get(".fail-response").should("contain", "Masukan data user!");
  });

  it("Menampilkan success message ketika submit berhasil (Test Berhasil)", () => {
    mount(<Login />);
    
    cy.intercept("POST", "https://jsonplaceholder.typicode.com/users", {
      statusCode: 201,
      body: { id: 101 },
    }).as("postUser");

    cy.get(".name-input").type("Jayjay");
    cy.get(".email-input").type("jay@example.com");
    cy.get(".phone-input").type("123456");

    cy.get(".post-user-button").click();
    cy.wait("@postUser");
    cy.get(".success-response").should("contain", "Berhasil membuat user!");
  });
});
