This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is created to include the following: [ReactJS](https://reactjs.org/),[TypeScript](https://www.typescriptlang.org/), [Axios](https://github.com/axios/axios), [Ant Design](https://ant.design/docs/react/introduce), [PostCSS](https://postcss.org/).

[Create-react-app-rewired](https://github.com/timarney/react-app-rewired) was used to override the configuration built into Create React App to be able to use postcss plugins and ant-design without the need to eject.

### Some Code Conventions:
  1. All imports should be sorted alphabetically
  2. Src is split into several folders:
     - **Components**: 
       - This folder should contain all Components
       - we can define *components* as reusable and independent UI pieces.
       - Each component should have it's folder that contains the component's tsx file, css file and test file if any.
     - **Pages**:
       - This folder should contain all Pages for this web application, both static and dynamic.
       - we can define *Pages* as the entire view a user will see.
       - A page would essentially consist of a set of components.
       - Each page should have it's own folder; having the same page-component name. That folder should contain the page's tsx file, css file and test file if any.
     - **Services**:
       - This folder should contains all Services that will allow us to fetch, transform, and store data.
     - **Interfaces**:
       - This folder should contain all the interfaces used within our application
     - **Assets**:
       - This folder should contain all the assets needed in our application
  3. **Naming Conventions**: 
     - *Components* and *pages* names should be written in **PascalCase**
     - *Files* and *Folders* names should be written in **kebab-case**
  4. All files should have *headers* that contain author and file information
  5. All components/pages should be well commented
     
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

