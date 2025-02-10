import { FieldArray, Field, Form } from 'formik';
import React from 'react';
import useFormikHelper from '../../helper';

function CustomFormField({ formArrayData }) {
  console.log(formArrayData, 'formArrayData'); // Debugging: to check the form data
const {handleAddMore} = useFormikHelper();
  return (
    <Form>
      <FieldArray name="data">
        {({ push, remove }) => (
          <>
            {formArrayData.data.map((field, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                {/* Name field */}
                <div style={{ margin: "10px" }}>
                  <Field
                    name={`data[${index}].name`}
                    value={field.name}
                    placeholder="Name"
                  />
                </div>

                {/* Email field */}
                <div style={{ margin: "10px" }}>
                  <Field
                    name={`data[${index}].email`}
                    value={field.email}
                    placeholder="Email"
                  />
                </div>

                {/* Add/Delete buttons */}
                {formArrayData.data.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)} // Remove this field
                    className="IconBtn"
                    style={{ margin: "10px" }}
                  >
                    Delete
                  </button>
                )}

                {/* Show Add More Button only for the last field */}
                {index === formArrayData.data.length - 1 && (
                  <div className="btnWrapper" style={{ marginTop: "10px" }}>
                    <button
                      type="button"
                      onClick={() =>handleAddMore (formArrayData , push)}
                      className="add-container-btn"
                    >
                      + Add More
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </FieldArray>
    </Form>
  );
}

export default CustomFormField;
