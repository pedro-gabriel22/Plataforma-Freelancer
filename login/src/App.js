import "./App.css";

import Page1 from "./page1";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
function App() {




  const handlerClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
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

  const handlerClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };


  //  const  pegarvalores = () =>{
  //     axios.get("http://localhost:3001/login").then(response => console.log(response));
    
  //  }

  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("não é um email")
      .required("este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "a senha deve ter 8 caracteres")
      .required("este campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "as senhas não sao iguais"),
  });

  return (
    <>


      

  
    
      <div className="container-pai">
        <div className="container">
          <h1>login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handlerClickLogin}
            validationSchema={validationlogin}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="email"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              <div className="login-form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="senha"
                />
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

        <div className="container-2" hidemenu>
          <h1>cadastrar</h1>
          <Formik
            initialValues={{}}
            onSubmit={handlerClickRegister}
            validationSchema={validationRegister}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="email"
                />
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-error"
                />
              </div>
              <div className="login-form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="senha"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <div className="login-form-group">
                <Field
                  name="confirmarPassword"
                  className="form-field"
                  placeholder="confirme sua senha"
                />
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-error"
                />
              </div>

              <button className="button" type="submit">
                cadastrar
              </button>
          
            </Form>
          </Formik>
          
        </div>
      </div>

      <Router>



      
      
      <Link to="/"  className="link"><button> home </button></Link>
              <Link to="/page1">
                <button>
                  click
                </button>
              </Link>
      <Routes>
        
      

        <Route path="/page1" exact element={<Page1/>} />
        
      </Routes> 
      </Router>

    
    </>
  );
}

export default App;
