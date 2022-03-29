/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// 1. Fill in your name and email and add some programming languages
//    you know to the languages array
// 2. Replace the `var` keyword with `const`, then try to reassign a
//    variable declared as `const`
let name = 'Jason Cameron';
let email = 'dev.jasoncameron@gmail.com';
let languages = ['javascript', 'java', 'html', 'css', 'python'];

// 3. Rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// 4. Replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// 5. Rewrite the following using arrow functions
users.forEach((user) => { emails.push(user.email); });


// 6. Replace `var` with `let` in the following declaration
let developers = [];
users.forEach(user => {
    // 7. Rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    name,
        email,
        languages,

        // 8. Rewrite the assignment below to use template strings
        developers.push(`${name}'\'s email is ${email} ${name} knows ${languages.join(', ')}`);
});

// 9. Use `let` for the following variable
let list = '<ul>';

// 10. Rewrite the following loop to use a for..of loop
for (let developer of developers) {
    // TODO: rewrite the assignment below to use template strings
    list += `<li> ${developer} </li>`;
};
list += '</ul>';