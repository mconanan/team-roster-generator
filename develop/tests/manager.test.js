const Manager = require('../utils/manager');


describe('Manager', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object that extends Employee, and include an office number", () => {
      // Arrange
      
      const manager = new Manager("Veruka", "3", "salt@wonka.com", "123")
      

      // Assert
      expect(manager.name).toEqual("Veruka");
      expect(manager.id).toEqual("3");
      expect(manager.email).toEqual("salt@wonka.com");
      expect(manager.officeNumber).toEqual("123");
    });

  });
});
