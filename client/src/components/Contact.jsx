import React, { Fragment } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";

export default function Contact() {
  const schema = yup.object({
    first: yup.string().required("What's your first name?"),
    last: yup.string().required("Last name too!"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Please enter your email"),
    message: yup.string().required("What's on your mind?"),
  });

  return (
    <Fragment>
      <Helmet>
        <title>Contact Me | Bertrand Shao</title>
        <meta
          name="description"
          content="Contact me and learn more. I won't bite."
        ></meta>
      </Helmet>
      <div className="contact-page">
      <div className="contact-div">
        <h1 className="contact-header">Let's get in touch.</h1>

        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <p>
            <label>
              <div classname="contact-input">Your Name: </div><input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
            <div classname="contact-input">Your Email: </div><input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
            <div classname="contact-input">Message: </div><textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        {/* <Formik
                    validationSchema={schema}
                    onSubmit={(initialValues) => {
                        axios.post('/contact', {
                            first: initialValues.first,
                            last: initialValues.last,
                            email: initialValues.email,
                            message: initialValues.message
                        }, window.location.reload()
                        )
                            .then(response => {
                                console.log(response)
                            })
                            .catch((err) => console.log(err))
                    }}
                    initialValues={{ first: "", last: "", email: "", message: "" }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        touched,
                        errors
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first"
                                            placeholder="First"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.first}
                                            isValid={touched.first && !errors.first}
                                            isInvalid={errors.first}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.first}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last"
                                            placeholder="Last"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.last}
                                            isValid={touched.last && !errors.last}
                                            isInvalid={errors.last}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.last}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group controlId="emailForm">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        name="message"
                                        placeholder="Let's collaborate together!"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        isValid={touched.message && !errors.message}
                                        isInvalid={errors.message}
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary">Send</Button>
                            </Form>
                        )}
                </Formik> */}
      </div>
      </div>
      <Footer />
    </Fragment>
  );
}
