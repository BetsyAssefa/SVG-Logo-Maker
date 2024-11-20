SVG Logo Maker

## Walkthrough Video

[Watch the Walkthrough Video](https://drive.google.com/file/d/1qus1QEOYv_HJCIyZd8vH7I3FgjG3-vwx/view?usp=sharing)

## Description

The **SVG Logo Maker** is a command-line application that generates simple SVG logos based on user input. It allows users to create custom logos by choosing a shape, colors, and adding a short text, making it ideal for developers who want a quick and easy logo for their projects without needing to hire a graphic designer.

This project was built using **Node.js**, **Inquirer** for user input, and **Jest** for testing. It’s structured with an object-oriented approach, utilizing classes to define different shapes (Circle, Triangle, Square) with customizable colors.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Testing](#testing)
- [Walkthrough Video](#walkthrough-video)
- [Example Output](#example-output)
- [License](#license)

## Installation

To set up this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BetsyAssefa/SVG-Logo-Maker.git
   cd SVG-Logo-Maker
Install the dependencies: This project requires Node.js and npm (Node Package Manager). Install the necessary packages by running: npm install

## Usage

To generate a logo, run the application from the command line: node index.js
You will be prompted to enter the following information:


Text: A short text for the logo (up to three characters).
Text Color: The color for the text, which can be a color keyword (e.g., red, blue) or a hexadecimal color code (e.g., #FFFFFF).
Shape: Choose a shape for the logo (Circle, Triangle, or Square).
Shape Color: The color of the shape, specified as a color keyword or hexadecimal code.
Once you provide the inputs, an SVG file named logo.svg will be generated in the project directory. You can open this file in a browser to view the logo.

## Features


Customizable Text: Add up to three characters for the logo text.
Flexible Colors: Specify colors using keywords or hex codes for both the text and shape.
Shape Selection: Choose from three different shapes (Circle, Triangle, or Square) to personalize your logo.
Object-Oriented Design: Uses classes and inheritance for shape creation, making it easy to add more shapes in the future.
Automated Testing: Includes Jest tests to ensure each shape renders correctly.

## How to Contribute

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

1.Fork the repository.
2.Create your feature branch (`git checkout -b feature/NewFeature`).
3.Commit your changes (`git commit -m 'Add some feature'`).
4.Push to the branch (`git push origin feature/NewFeature`).
5.Create a new Pull Request.

## Testing

This project includes unit tests using Jest to verify that each shape renders correctly with the specified color. To run the tests, use the following command: npm test


The tests ensure that each shape (Circle, Triangle, and Square) generates the correct SVG code based on the specified color.

## License

This project is licensed under the MIT License.

## Credits

This project was developed by Bitsiet Assefa. 
