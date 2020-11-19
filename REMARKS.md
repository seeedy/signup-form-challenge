# Challenge remarks

### General

The project was started with CRA. I've decided to not use any external libraries in this project for the sake of the challenge.
Some libraries that came to mind as being potentially helpful for more complex forms would be e.g. Formik (for form validation), react-bootstrap (simple and browser-consistent form styling), classnames (for conditionally joining css-classnames) or SASS.
The theme is "Learn React" (I hope there is no grades on creativity... ) and I've tried to style the component accordingly.

### Signup Form

The Component "Form" should meet all the requirements of the challenge. I'm using a functional components (with hooks) as I prefer it over the class syntax. Additionally hooks fit very well for the form validation.
The custom hook "useForm" is used to control and validate the inputs. Every input field has a validator function that is called on blur to provide instant optical feedback to the user. On submitting, validation for all fields is being run additionaly. There are three "password safety" levels and only the highest one allows for succesful validation. (Some websites also allow mid-strength... this would be open for discussion). On succesful validation, an alert is showing in place of where the API request would happen.

### Validation

RegEx is being used to validate email and password client-side. The validation rules would certainly be open for discussion depending on preferences. Errors are simply declared as strings as it is sufficient in this case. In a more complex application, error objects would be preferred. Error messages are displayed as graphical feedback to the user.

### Styles

I've used css-modules for styling. The colors used are defined as css-variables. For more complex applications, adding SASS could make sense.

-   Component Form
-   custom hook useForm für Validierung und controlled inputs
-   möglichst ohne dependencies also keine Nutzung von externen Libraries (wie z.B. Formik für Validierung, Sass, React-Bootstrap für styling)

-   css-modules für styling
-   css-variables für color themes
