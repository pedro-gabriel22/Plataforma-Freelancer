const express = require("express");
const ap =express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt")
const saltRounds = 10
// aqui estamos estabelecendo uma conxão com o banco de dados 
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password: "oliveira123@",
    database:"banco",
})

// req => pega os dados do front 
// res => envia os dados pro front 
ap.use(express.json());
ap.use(cors());

ap.post("/register", (req, res)=>{
    const {email} = req.body
    const {password} = req.body

    

    db.query("SELECT * FROM usuarios WHERE email = ?",[email],(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result.length == 0){
            bcrypt.hash(password, saltRounds,(err,hash) =>{
                db.query("INSERT INTO usuarios (email,password) VALUES (?,?)",
                [email,hash],(err,response)=>{
                    if(err){
                        res.send(err)
                    }
                    res.send({msg:"cadastrado com sucesso"})
                })
            })
            
        }else{
            res.send({msg:"usuario ja cadastrado"} );
        }
    })
})

ap.post("/login", (req,res)=>{
    const {email} = req.body
    const {password} = req.body

    
    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err,result)=>{
        if(err){
            res.send(err)
        }
        if(result.length > 0){
            bcrypt.compare(password,result[0].password,(err, result)=>{
                if(result){
                     res.send({msg:"usuario logado com sucesso"})
                    // res.sendFile(__dirname + "./login/src/teste")
                }else{
                    res.send({msg:"senha incorreta"})
                }
                
            })
           
        }else{
            res.send({msg:"Conta não encontrada"})
        }
    })
})

ap.listen(3001, () => {
    console.log("rodando servidor");
})