import React from 'react';
import FormikForm from './components/formikForm'; // Import the form component

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      <FormikForm /> {/* Render the Formik-based registration form */}
    </div>
  );
}

export default App;
