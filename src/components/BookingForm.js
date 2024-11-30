import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Stripe public key
const stripePromise = loadStripe('your-stripe-public-key');

const BookingContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <Formik
      initialValues={{ name: '', email: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // Handle form submission and Stripe integration here
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="email" name="email" placeholder="Email" />
          <Field type="text" name="phone" placeholder="Phone Number" />
          <CardElement />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const BookingForm = () => {
  return (
    <BookingContainer>
      <h2>Pre-book Your RHYNO EV</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </BookingContainer>
  );
};

export default BookingForm;
