 
### This is a simple HTML and Javascript site used for trying out Tailwind CSS ###
Module 3: 
The goal of this project was to try out Tailwind, and make a responsive site.
The Travel Blog is a fictional blog, a simple static website that displays a list of blog posts and individual post details. It's purpose is to display the use of Tailwind with simple javascript and html. 
I tried keeping the code structure consistent between files and kept different functionalities in seperate files. 

-----

To use Tailwind CSS with basic HTML and JavaScript, follow these steps:

1. Install Tailwind CSS by running the following command in your project directory:
    ```
    npm install tailwindcss
    ```

2. Create a new CSS file, for example, `styles.css`, and import Tailwind CSS by adding the following line at the top of the file:
    ```css
    @import 'tailwindcss/base';
    @import 'tailwindcss/components';
    @import 'tailwindcss/utilities';
    ```

3. Link the CSS file to your HTML file by adding the following line in the `<head>` section:
    ```html
    <link rel="stylesheet" href="styles.css">
    ```

4. Start using Tailwind CSS classes in your HTML elements. For example:
    ```html
    <div class="bg-blue-500 text-white p-4">
      This is a div with a blue background, white text, and padding of 4 units.
    </div>
    ```

5. If you want to customize the default configuration of Tailwind CSS, you can create a `tailwind.config.mjs` file in your project directory and modify the settings as needed. Refer to the Tailwind CSS documentation for more details.

6. Finally, to see your changes in the browser, you can use a live server. One option is to install the `serve` package by running the following command:
    ```
    npm install -g serve
    ```

    Then, start the live server by running the following command in your project directory:
    ```
    serve .
    ```

    This will start a local server and open your HTML file in the browser.

Remember to save your changes and refresh the browser to see the updated styles. 

#### Happy coding with Tailwind CSS!