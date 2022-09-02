const Engineer = require('../utils/engineer');


describe('Engineer', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object that extends Employee, and include a github username", () => {
      // Arrange
      
      const engineer = new Engineer("Maddy", "1", "mconanan@gmail.com", "mconanan")
      

      // Assert
      expect(engineer.name).toEqual("Maddy");
      expect(engineer.id).toEqual("1");
      expect(engineer.email).toEqual("mconanan@gmail.com");
      expect(engineer.gitHub).toEqual("mconanan");
    });
    
  });
});
