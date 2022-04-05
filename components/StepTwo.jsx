import { Field, Form, Formik } from 'formik';

const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>First Name</p>
          <Field type="text" name="firstName" />
          <p>Last name</p>
          <Field type="text" name="lastName" />
          <p>Address</p>
          <Field as="textarea" name="address" />
          <button type="button" onClick={props.prev}>
            Back
          </button>
          <button type="submit">Save and Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
