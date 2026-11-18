describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.wait(1000); // /!\ /!\ /!\ USELESS LINE HERE <---
        // Cypress always wait before doing the next action
        // Please, do not copy that line for the rest of the TP.
    })
    it("Should clear input field after adding a new todo",()=> {
        cy.visit("http://127.0.0.1:4000");
        cy.get("#new-todo-field").type("premier test");
        cy.get("#new-button").click();
        cy.get("#new-todo-field").should('be.empty');
    })
    it("Add new task", () => {
        cy.visit("http://127.0.0.1:4000");

        cy.get("#new-todo-field").type("deuxieme test");
        cy.get("#new-button").click();

        cy.get("#todoitem-1").should('contain', 'deuxieme test');

    })
    it("Delete a task", () => {
        cy.visit("http://127.0.0.1:4000");

        cy.get("#new-todo-field").type("troisième test");
        cy.get("#new-button").click();
        cy.get("#sup-button-1").click()
        cy.get("#todoitem-1").should('not.exist')
    })
    it("Counter tasks", () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get("#nbTodo").should('contain','Nombre de todo: 0')

        cy.get("#new-todo-field").type("quatrième test");
        cy.get("#new-button").click();
        cy.get("#nbTodo").should('contain','Nombre de todo: 1')

        cy.get("#sup-button-1").click()
        cy.get("#nbTodo").should('contain','Nombre de todo: 0')
    })
    it("Counter black red", () => {
        cy.visit("http://127.0.0.1:4000");

        for (let i = 0; i < 4; i++) {
            cy.get("#new-todo-field").type("cinquième test " + (i+1));
            cy.get("#new-button").click();
        }

        cy.get("#nbTodo")
            .should('have.css', 'color', 'rgb(0, 0, 0)');

        cy.get("#new-todo-field").type("cinquième test 5");
        cy.get("#new-button").click()

        cy.get("#nbTodo")
            .should('have.css', 'color', 'rgb(255, 0, 0)');
    });
})