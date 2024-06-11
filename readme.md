# CTEC3905 Portfolio Website Project

## About

This portfolio project is a part of the CTEC3905 assignment, aimed at creating a personalised portfolio website.

Through this project, I aim to highlight my achievements, soft skills, technical skills, and public projects. I used HTML, CSS, and JavaScript files to create a unique and visually appealing portfolio website.


## Files

### `index.html`

The `index.html` file contains five sections and a footer. It includes links to the `css/styles.css` file for styling and a script tag at the end linking to the `js/scripts.js` file for scripting.
## Key Features

- Semantic elements are used to structure the content, making it more understandable for assistive technologies and improving overall accessibility.
-  All images include descriptive alt attributes, enhancing accessibility for users who rely on screen readers or who have images disabled.
- Proper heading structure is maintained throughout th document, ensuring clear hierarchy and navigation for screen reader users.
- ARIA landmarks and roles are used to enhance accessibility and provide additional support to assistive technologies.
-  Labels are associated with form elements using the <label> element, improving usability and accessibility for users navigating with screen readers.
- Descriptive text is provided for form fields using the aria-describedby attribute, aiding users in understanding the purpose of each field.

### `css/styles.css`

The `css/styles.css` file serves as the foundation for styling my portfolio website. The CSS stylesheet is designed for a modern website layout using a mobile first approach. It use various CSS features such as Grid Layout, Flexbox, Media Queries, Transitions, and Custom Styling.
## Key Features

**Grid Layout**: Used for structuring the navbar.
- **Flexbox**: Used for flexible alignment and distribution of elements within sections like the navbar, contact form, and social media icons.
- **Media Queries**: Used to ensure responsiveness across different screen sizes.
- **Transitions and Animations**: Added subtle visual effects like transitions and animations to enhance user interaction and engagement.
- **Custom Scrollbar Styling**: Customised scrollbar appearance using `::-webkit-scrollbar`.
- **Gradient Backgrounds**: Used gradient backgrounds to add depth and visual interest to elements like the navbar and social media icons.
- **Custom Fonts**: Imported Google Fonts ('Poppins' and 'Ubuntu') and applied them to different sections.

### `js/scripts.js`

Within the `js/scripts.js` file, I have included the following:

- Implemented toggle menu functionality: Toggles the visibility of the menu when the menu icon is clicked.
- Added scroll-to-top feature: Scrolls the page to the top when the scroll-up button is clicked.
- Included logic for downloading CV: Handles the download of a CV file when the download link is clicked.
-  used GitHub API to fetch repositories: Retrieves public repositories from my GitHub account and handles any errors during the process.
- Created cards for GitHub repositories: Dynamically generates cards for each repository fetched from GitHub.
- Captured form submission data: Sends form data to a Google Sheet via a Google Apps Script API when the contact form is submitted.
- Limited word count in textarea: Restricts the number of words in the message textarea and displays remaining words.

### `images`

The img folder contains personal and public images used in the project.

### `GitHub`

The Git Repos were made public just for the purpose of this project. If at a point no repositories are found on the projects section, it means all my repos have been made private or deleted. A simple change of the username to a different Git username should fetch you the persons public repos.


## Reference and Credits
1. https://www.w3schools.com/js/DEFAULT.asp
2. DMU Front End Dev Module lab resources
3. https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics
4. https://developer.mozilla.org/en-US/docs/Web/javascript
- https://boxicons.com/?query=ma
- https://cssbuttons.app/
- https://validator.w3.org/nu/#textarea
- https://codepen.io/hayzey/pen/LNzwVO
- Google Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) and [Ubuntu](https://fonts.google.com/specimen/Ubuntu)
CodingNepal- design

