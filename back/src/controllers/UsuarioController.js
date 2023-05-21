const database = require('../database/connection')

class UsuarioController {
    novoUsuario(request,response){

        const {user_nome, user_telefone, user_email, user_cpf, user_endereco, user_data_nasc, user_senha} = request.body

        console.log(user_nome, user_telefone, user_email, user_cpf, user_endereco, user_data_nasc, user_senha )

        database.insert({user_nome, user_telefone, user_email, user_cpf, user_endereco, user_data_nasc, user_senha }).table("USUARIO").then(data=>{
            console.log(data)
            response.json({message: "Usuario cadastrado com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    loginUsuario(request,response){
        const {user_email, user_senha} = request.body;

        database
        .select()
        .from("USUARIO")
        .where({user_email,user_senha})
        .then((data) =>{
            if (data.lenght > 0) {
                response.json({message : "Login bem-sucedido!"})
            } else {
                response.status(401).json({error : "Credenciais inválidas!"})
            }
        }).catch((error) => {
            console.log(error);
            response.status(500).json({ error : "Erro no servidor"})
        });
    }

    listarUsuario(request,response){
        database.select().table("USUARIO").then(usuario=>{
            console.log(usuario)
            response.json(usuario)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmUsuario(request,response){
        const {user_id} = request.params

        database.select().table("USUARIO").where({user_id:user_id}).then(usuario=>{
            response.json(usuario)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarUsuario(request,response){
        const {user_id} = request.params
        const {user_nome, user_telefone, user_email, user_cpf, user_endereco, user_data_nasc, user_senha} = request.body

        database
            .update({user_nome:user_nome, user_telefone:user_telefone, user_email:user_email, user_cpf:user_cpf, user_endereco:user_endereco, user_data_nasc:user_data_nasc, user_senha:user_senha})
            .table("USUARIO")
            .where({user_id:user_id})
            .then(data=>{
                response.json({message: "Usuario atualizado com sucesso!"})
            })
    }

    removerUsuario(request,response){
        const {user_id} = request.params

        database.where({user_id:user_id}).del().table("USUARIO").then(data=>{
            response.json({message: "Usuario removido com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new UsuarioController()