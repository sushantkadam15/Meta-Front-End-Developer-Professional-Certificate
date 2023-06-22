Exercise:

You are tasked with implementing a simple banking system using JavaScript to demonstrate your understanding of object-oriented programming concepts. The system should consist of different types of bank accounts, including a basic account and a savings account. Each account should have the following functionalities:

1. Objects and Methods:
   - Each account should be represented as an object with properties such as account number, account holder name, and balance.
   - Implement methods for depositing money, withdrawing money, and checking the account balance.

2. Object.create vs new:
   - Implement the basic account using the `Object.create` method.
   - Implement the savings account using the `new` keyword.

3. Classes and Prototypes:
   - Refactor the basic account object created with `Object.create` into a class called `BasicAccount`.
   - Refactor the savings account created with `new` into a class called `SavingsAccount`.

4. Constructors:
   - Add a constructor to the `BasicAccount` class to initialize the account number, account holder name, and balance.
   - Add a constructor to the `SavingsAccount` class that extends `BasicAccount` and initializes an additional property for the interest rate.

5. Inheritance:
   - Implement inheritance by creating a new class called `CheckingAccount` that extends `BasicAccount`.
   - The `CheckingAccount` should have an overdraft limit property.

6. Encapsulation:
   - Ensure that the properties of each account are encapsulated and can only be accessed or modified using appropriate methods.

7. Abstraction:
   - Implement abstract methods such as `calculateInterest()` in the `SavingsAccount` class, which will be overridden in the child class.

8. Polymorphism:
   - Implement the `calculateInterest()` method differently in each type of account (`SavingsAccount` and `CheckingAccount`).

Create instances of each account type and demonstrate their functionalities, such as depositing and withdrawing money, checking balances, and calculating interest.

Remember to focus on understanding the concepts and implementing the structure of the banking system rather than providing the actual solution code.