const Intern = require('../utils/intern');


describe('Intern', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object that extends Employee, and include a github username", () => {
      // Arrange
      
      const intern = new Intern("Bob", "2", "thebuilder@canhefixit.com", "UCB")

  
      // Assert
      expect(intern.name).toEqual("Bob");
      expect(intern.id).toEqual("2");
      expect(intern.email).toEqual("thebuilder@canhefixit.com");
      expect(intern.school).toEqual("UCB");
    });

  });
});
