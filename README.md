# link-item-list
Link Item List Application written with React.js

# you can run the server with `npm start` command
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Development notes:
I try to develop this front-end application with component based structure. I try to prevent code duplication via using child component as much as possible. I create css files for all components to style their elements.

# Architectural Design Pattern
Container-View pattern: I try to applied this design pattern. However, because of this is a simple application. Differences are not sharp.

# Pattern which I use in this development process:
Array as children: I used this pattern to create child component as much as needed. Example usage "src/components/Link.js". I create each row of table with this pattern.

Compound Component Pattern: I commonly use this pattern to separate my header content, body content and footer content in the application.

Conditional Rendering: I used this pattern to render NewItemForm component in specific conditions.
