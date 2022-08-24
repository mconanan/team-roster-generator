const Engineer = require('../utils/engineer');
const Todo = require('../utils/engineer');

describe('Todo', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object that extends Employee, and include a github username", () => {
      // Arrange
      
      const engineer = new Engineer(
        this.engineerName = "Maddy",
        this.engineerId = "1",
        this.engineerEmail = "mconanan@gmail.com",
        this.engineerGithub = "mconanan")

      // Act
      const obj = new Engineer(engineer);

      // Assert
      expect(obj.engineer).toEqual(engineer);
    });

    // Exception test
    it("should throw an error if not provided a 'text' value", () => {
      // Arrange
      const cb = () => new Engineer();
      const err = new Error(
        "Expected parameter 'engineer' to be a non empty string"
      );

      // Assert
      expect(cb).toThrowError(err);
    });
  });
});
