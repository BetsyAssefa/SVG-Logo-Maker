const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

async function init() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: input => input.length <= 3 || 'Text should be 3 characters or less!',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hex):',
    },
  ]);

  // Create a shape instance based on user choice
  let shape;
  if (answers.shape === 'Circle') shape = new Circle();
  else if (answers.shape === 'Triangle') shape = new Triangle();
  else if (answers.shape === 'Square') shape = new Square();

  shape.setColor(answers.shapeColor);

  // Generate SVG content
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    </svg>
  `;

  // Write the SVG file
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
}

init();
