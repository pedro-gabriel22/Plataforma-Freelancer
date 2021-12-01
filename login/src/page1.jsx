import React, { useEffect, useState } from "react";
import "./page1.css";
import Card from "./card"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function Page1() {
  const handlerClickCard = (values) =>{
    Axios.post("http://localhost:3001/card",{
      titulo:values.titulo,
      descricao : values.descricao,
    }).then((response)=>{
      console.log(response);
    })
  }

  const validationCard = yup.object().shape({
    titulo:yup
    .string()
    .required("este campo é obrigatório"),
    descricao:yup
    .string()
    .required("este campo é obrigatório")
  })

const [listCards,setListCards] = useState()

useEffect(()=>{
  Axios.get("http://localhost:3001/getCards").then((response)=>{
    setListCards(response.data)
})
},[])


  return (
    <>
    <div className="container-card">
      <Formik
        initialValues={{}}
         onSubmit={handlerClickCard}
         validationSchema={validationCard}
      >
        <Form
        className="card-frela"
        >
          <div className="titulo-card-pai">
            {/* field é como se fosse um input */}
            <Field 
            name="titulo"
            className="titulo-card"
            placeholder="titulo..."/>

            <ErrorMessage
            component="span"
            name="titulo"
            className="error-titulo"
            />
            <Field
            name="descricao"
            className="descricao-card"
            placeholder="descriçao.."
            />
            
            <ErrorMessage
            component="span"
            name="descricao"
            className="error-titulo"
            />
          </div>
      <button className="button-card" type="submit">
        criar
      </button>
        </Form>
      </Formik>
      </div>

      <div>
        {typeof listCards !== "undefined" && listCards.map((value) =>{
          return(
            <Card 
            key={value.id}
            listCard={listCards} 
            setListCard={setListCards}
            id={value.id}
            titulo={value.titulo}
            descricao={value.descricao}
            
            ></Card>
          )
        })}
        
      </div>
    </>
  );
}
export default Page1;
