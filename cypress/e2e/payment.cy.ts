describe("payment", () => {
  it("user can make payment", () => {
    //  login
    cy.visit("http://localhost:3000");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();
  });
});
