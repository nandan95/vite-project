
import { Formik } from 'formik'
import React from 'react'
import CustomFormField from './components/formfieldArray'

function MainFormik() {

    const initialValue = {data:[{ name: "nandan", email: "nandankango" }]}
  return (
    <div>
      <Formik
      initialValues={initialValue}>
       
    {({values})=>
        <CustomFormField  formArrayData = {values}/>
    }
      </Formik>
    </div>
  )
}

export default MainFormik
