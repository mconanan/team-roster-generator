const inquirer = require("inquirer");
const index = require("../index");


describe("init", () => {
  describe("Initialization", () => {
    // Positive test
    it("should use inquirer to prompt user with questions, and create an array from the answers", () => {
      // Arrange
      inquirer.prompt(questions).then((anwers) => {
        const  yourEmployee = new yourEmployee (
        answers.name = "Bob",
        answers.id = "1",
        answers.email = "thebuilder@fixit.com",
        answers.gitHub = "canHeFixIt"
        );
       const newTeam = [];
        newTeam.push(yourEmployee);
      });

      // Action
      
      // Assert
      expect(newTeam).toEqual(["Bob", "1", "thebuilder@fixit.com", "canHeFixIt"]);
    });
  });


    // Exception test
    it("", () => {
      // Arrange
      const = new ();
      const err = new Error(
        ""
      );

    //  Action
      const cb = () => ();

      // Assert
      expect(cb).toThrowError(err);
    });
  });

  

    