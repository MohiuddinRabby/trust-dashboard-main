import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { createBlogPost } from "./_helper";
import * as Yup from "yup";
// Validation schema
const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User Name required"),
  userEmail: Yup.string()
    .email()
    .required("Email required"),
});
const initialValues = {
  userName: "",
  userEmail: "",
};
export function TestCustomerCreate() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const itemsData = {
            userId: 1,
            title: values?.userName,
            body: values?.userEmail,
          };
          createBlogPost(itemsData);
          resetForm();
        }}
      >
        {({ values, setFieldValue, isValid }) => (
          <>
            <Form>
              <div className="container">
                <div className="form-group row py-5">
                  <div className="col-lg-4">
                    <label>User Name</label>
                    <Field
                      className="form-control"
                      name="userName"
                      placeholder="User Name"
                      value={values?.userName}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userName" />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <label>Email</label>
                    <Field
                      className="form-control"
                      name="userEmail"
                      placeholder="Email"
                      value={values?.userEmail}
                    />
                    <div className="text-danger">
                      <ErrorMessage name="userEmail" />
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={!isValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
