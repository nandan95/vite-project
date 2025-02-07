import { Form, Formik ,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
function App() {
   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const loginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .test("single-domain", "Invalid email address", (value) => {
        if (!value) return true;
        const domainPart = value.split("@")[1];
        if (!domainPart) return false;
        const domainSegments = domainPart.split(".");
        return domainSegments.length <= 3;
      })
      .required("Email cannot be empty.")
      .matches(emailRegex, "Please enter a valid email address."),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long.")
      .max(64, "")
      .required("Password cannot be empty."),
  });

  const handleSubmit = (values ) => {
    const data = {
      email: values?.email || "",
      password: values?.password || "",
      
    };
    console.log(data,'data')

    // dispatch(fetchLoginDataRequest(data));
  };
  return (
    <>
      <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, action) => {
        handleSubmit(values)
        action.resetForm();
      }}
    >
      {({ values, errors, touched, setFieldValue  ,handleBlur})=>(
        <Form>
        <div>
          <label htmlFor="email">Email</label>
          <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={(e)=>{
                        
                      const { name, value } = e.target;
                      const val = value.replace(/\s/g, "");
                        setFieldValue(name ,val)}}
                      onBlur={handleBlur}
                    />
           {errors.email && touched.email && (
                    <p className="">{errors.email}</p>
                  )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={(e)=>{
                        
                      const { name, value } = e.target;
                      const val = value.replace(/\s/g, "");
                        setFieldValue(name ,val)}}
                      onBlur={handleBlur}
                    />
                     {errors.password && touched.password && (
                    <p className="">{errors.password}</p>
                  )}
        </div>
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
    </>
  )
}

export default App
