import { Field, Form, Formik } from 'formik';

const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>emailId</p>
          <Field type="email" name="emailId" />
          <p>Password</p>
          <Field type="password" name="password" />

          <button type="submit">Save and Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
