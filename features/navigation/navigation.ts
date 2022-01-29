import { Then, When } from "cypress-cucumber-preprocessor/steps";

When(/I click the ([A-z]*) link/, link => {
    cy.contains("a", link).click();
});

Then(/I see the ([A-z]*) report/, report => {
    cy.contains("header", report).should("exist");
});
