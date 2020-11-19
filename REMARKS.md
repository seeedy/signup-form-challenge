# Challenge remarks

### General

The project was started with CRA. I've decided to not use any external libraries in this project for the sake of the challenge.
Some libraries that came to mind as being potentially helpful for more complex forms would be e.g. Formik (for form validation), react-bootstrap (simple and browser-consistent form styling), classnames (for conditionally joining css-classnames) or SASS.
The theme is "Learn React" (I hope there is no points on creativity... ) and I've tried to style the component accordingly.

### Signup Form

The Component "Form" should meet all the requirements of the challenge. I'm using a functional components (with hooks) as I prefer it over the class syntax and hooks fit very well for form validation.
The custom hook "useForm" is used to control and validate the inputs. Every input field has a validator function that is called on blur to provide instant optical feedback to the user. On submitting, validation for all fields is being run additionaly. There are three "password safety" levels with respective error messages and only the highest one allows for succesful validation. On succesful validation, an alert is showing in place of where the API request would happen.

### Validation

RegEx is being used to validate email and password client-side. Errors are just error-message strings as it is sufficient in this case. In a more complex application, error objects would be preferred. Error messages are displayed as graphical feedback to the user.

### Styles

I've used css-modules for styling. The colors used are defined as css-variables.
