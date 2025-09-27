describe("E2E Testing App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Menampilkan 10 user setelah klik Ambil User", () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users").as("getUsers");
    cy.get(".fetch-user-button").should("exist").click();
    cy.wait("@getUsers");
    cy.get(".user-name").should("have.length", 10);
  });

  it("Berhasil submit user jika form terisi (Test Berhasil)", () => {
    cy.intercept("POST", "https://jsonplaceholder.typicode.com/users", {
      statusCode: 201,
      body: { id: 101, name: "Jayjay", email: "jay@example.com", phone: "123456" },
    }).as("postUser");

    cy.get(".name-input").should("exist").type("Jayjay Test E2E");
    cy.get(".email-input").type("e2e@example.com");
    cy.get(".phone-input").type("987654");

    cy.get(".post-user-button").click();
    cy.wait("@postUser");
    
    cy.get(".success-response").should("contain", "Berhasil membuat user!");
  });

  it("Gagal submit user jika form kosong (Test Gagal)", () => {
    cy.get(".post-user-button").should("exist").click();
    cy.get(".fail-response").should("contain", "Masukan data user!");
  });
});
