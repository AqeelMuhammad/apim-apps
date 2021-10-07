/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *  
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by WSO2 in accordance with
 * the WSO2 Commercial License available at http://wso2.com/licenses.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with WSO2 governing the purchase of this software and any
 * associated services.
 */
describe("do nothing", () => {
    const username = 'admin'
    const password = 'admin'

    beforeEach(function () {
        cy.loginToPublisher(username, password)
        // login before each test
    });

    it.only("Add Authorization Header for the api", () => {
        cy.createAPIByRestAPIDesign();
        cy.get('[data-testid="left-menu-itemenvironments"]').click();
        cy.get('[data-testid="environments-checkbox-Production and Sandbox"]').click();
        cy.get('[data-testid="save-environments-btn"]').click();
        cy.get('[data-testid="save-environments-btn"]').then(function () {
            cy.get('[data-testid="environments-checkbox-Production and Sandbox"] input').should('not.be.checked');
        });

        cy.get('[data-testid="environments-checkbox-Production and Sandbox"]').click();
        cy.get('[data-testid="save-environments-btn"]').click();
        cy.get('[data-testid="save-environments-btn"]').then(function () {
            cy.get('[data-testid="environments-checkbox-Production and Sandbox"] input').should('be.checked');
        });
    });

    after(function () {
        // Test is done. Now delete the api
        cy.get(`[data-testid="itest-id-deleteapi-icon-button"]`).click();
        cy.get(`[data-testid="itest-id-deleteconf"]`).click();
    })
});