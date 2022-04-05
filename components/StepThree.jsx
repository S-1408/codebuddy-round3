import { Field, Form, Formik } from 'formik';

const StepThree = props => {
  const handleSubmit = values => {
    props.next(values, true);
  };
  return (
    <Formik initialValues={props.data} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <p>Country Code</p>
          <Field type="number" name="countryCode" />
          <p>Phone Number</p>
          <Field type="number" name="phoneNumber" />
          <p>Accept Term and Conditions</p>
          <Field type="checkbox" name="address" />
          <button type="button" onClick={props.prev}>
            Back
          </button>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
