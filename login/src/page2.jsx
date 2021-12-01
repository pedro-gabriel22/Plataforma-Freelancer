
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import "./App.css";


const Page2 = () =>  {
   
    const handlerClickLogin = (values) => {
      Axios.post("http://localhost:3001/login",{
        email:values.email,
        password:values.password,
      }).then((response)=>{
        console.log(response);
      })
    };
  
    const validationlogin = yup.object().shape({
      email: yup
        .string()
        .email("não é um email")
        .required("este campo é obrigatório"),
      password: yup
        .string()
        .min(8, "a senha deve ter 8 caracteres")
        .required("este campo é obrigatório"),
    });
  
   
  
    return (
      
      <div className="container">
        <h1>login</h1>
        <Formik
          initialValues={{}} 
          onSubmit={handlerClickLogin}
          validationSchema={validationlogin}
        >
          <Form className="login-form">
            <div className="login-form-group">
              <Field name="email" className="form-field" placeholder="email" />
              <ErrorMessage
                component="span"
                name="email"
                className="form-error"
              />
            </div>
            <div className="login-form-group">
              <Field name="password" className="form-field" placeholder="senha" />
              <ErrorMessage
                component="span"
                name="password"
                className="form-error"
              />
            </div>
  
            <button className="button" type="submit">
              login
            </button>
          </Form>
        </Formik>
  
      </div>
      
    );
  }
  
  export default Page2;
  