import React from "react"
import { withFormik, FormikProps, FormikHelpers } from "formik"
import * as Yup from "yup"
//import * as emailjs from 'emailjs-com'
import { GrSend } from "react-icons/gr"

interface FormValues {
  email: string
  name: string
  message: string
}
interface MyFormProps {
  initialEmail?: string
  initialName?: string
  initialMessage?: string
}

const form = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    status,
  } = props


  return (
    <div className="form-wrap">
      {status && status.success && (
        <div className="success-msg">
          Thank you for contacting me.
          <br />I will reply to you shortly.
        </div>
      )}
      <form
        className="genericforms"
        onSubmit={handleSubmit}
        name="contact-form"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" />
        <input type="hidden" name="bot-field" />
        <div className="forms_field">
          <label className="sr-only" htmlFor="email">
            Your Email address
            <span className="errorMessage">
              {touched["email"] && errors["email"]}
            </span>
          </label>
          <input
            className={errors.email && touched.email ? "error" : ""}
            placeholder="Type your Email address"
            id="email"
            name="email"
            type="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="forms_field">
          <label className="sr-only" htmlFor="name">
            Your Name
            <span className="errorMessage">
              {touched["name"] && errors["name"]}
            </span>
          </label>
          <input
            className={errors.name && touched.name ? "error" : ""}
            placeholder="What's your name?"
            id="name"
            name="name"
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.name}
          />
        </div>
        <div className="forms_field">
          <label className="sr-only" htmlFor="message">
            Your message
            <span className="errorMessage">
              {touched["message"] && errors["message"]}
            </span>
          </label>
          <textarea
            className={errors.message && touched.message ? "error" : ""}
            placeholder="Your message"
            id="message"
            name="message"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.message}
          />
        </div>
        <div className="forms_field">
          <button
            className="genericforms__field__btn btn"
            type="submit"
            disabled={
              isSubmitting ||
              !!(errors.email && touched.email) ||
              !!(errors.name && touched.name) ||
              !!(errors.message && touched.message)
            }
          >
            <GrSend /> <span>{isSubmitting ? "Sending..." : "Submit"}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const Formik = withFormik<MyFormProps, FormValues, FormikHelpers<FormValues>>({
  mapPropsToValues: props => ({
    email: props.initialEmail || "",
    name: props.initialName || "",
    message: props.initialMessage || "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
  }),
  handleSubmit(values: FormValues, actions: FormikHelpers<FormValues>) {
    //console.log(values.email, values.name, values.message)
    actions.setSubmitting(true)
    setTimeout(() => {
      /*emailjs.send(
            "gmail", //Email service as defined in EmailJS setting
            "template_5iGIrzaB", // Email template ID provided by EmailJS
            {
              from_name: values.name,
              to_name: "Daniel",
              reply_to: values.email,
              message_html: values.message,
            },
            "user_nC9Jzq7Yr5yiw9IF5NDpm" // EmailJS user ID
          )*/
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...values }),
      })
        .then(() => {
          //setEmailSent(true)
          actions.setSubmitting(false)
          actions.resetForm()
          actions.setStatus({ success: true })
        })
        .catch(() => {
          actions.setSubmitting(false)
          alert("Error sending email...")
        })
    }, 1000)
  },
})(form)

export default Formik
