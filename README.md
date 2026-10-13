# Task Dashboard Assignment

Hello! This is my homework for the Web Programming lab. In this project, I created a Task Dashboard using only Vanilla JavaScript. I didn't use React, Vue, or any other frameworks.

## File Organization

I divided my project into 5 different files to keep my code clean and organized. Here is what each file does:

* **`index.html`**: This is the main HTML file. It has the basic page structure, the "Load Tasks" button, and empty `div` containers for my JavaScript to use later.
* **`styles.css`**: I added very simple CSS here. The most important part is the `.completed` class. It puts a line through the text when a task is finished.
* **`taskManager.js`**: This file has my `Task` and `TaskManager` classes. It keeps the task data safe and handles all the logic, like adding, deleting, or toggling tasks.
* **`api.js`**: This file simulates a real server. I used `setTimeout` to wait for 1.5 seconds before it returns the task data to practice asynchronous JavaScript.
* **`main.js`**: This is the main file that connects everything together. It listens for button clicks, gets the data using `async/await`, and uses DOM methods to show the tasks on the screen.

## Challenges I Faced

I learned a lot while doing this assignment, but some parts were really difficult for me:

1. **Immutability (Not changing original data):** We were not allowed to mutate the original task array. Normally, I just use `.push()` to add something to an array. Learning how to use the spread operator (`...`), `.map()`, and `.filter()` to create *new* arrays was confusing at first, but now I understand it better.
2. **Making the ID read-only:** In the `Task` class, I had to make the `id` read-only. I didn't know how to do this before, so I had to research `Object.defineProperty()`. The syntax was a bit strange and hard to remember.
3. **The JSON requirement:** The assignment wanted us to use `JSON.stringify` and then immediately `JSON.parse` on our data. At first, I thought this was useless because the data was already an object. But then I realized it was a good practice to learn how real data comes from a web API as text. 
4. **DOM Manipulation:** Creating every single `div`, `span`, and `button` using `document.createElement()` takes a lot of lines of code. It was hard to keep track of what element I was appending where, but taking it step by step helped me solve it.