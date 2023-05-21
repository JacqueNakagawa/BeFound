const database = require('../database/connection')

class AdmController {
    novoAdm(request,response){

        const {adm_nome, adm_email, adm_cpf, adm_senha} = request.body

        console.log(adm_nome, adm_email, adm_cpf, adm_senha )

        database.insert({adm_nome, adm_email, adm_cpf, adm_senha }).table("ADM").then(data=>{
            console.log(data)
            response.json({message: "Adm cadastrado com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    loginAdm(request,response){
        const {adm_email, adm_senha} = request.body

        database
        .select()
        .from("ADM")
        .where({adm_email, adm_senha})
        .then((data) => {
            if (data.lenght > 0) {
                response.json({message: "Login bem-sucedido!"})
            } else {
                response.status(401).json({error : "Credenciais inválidas!"})
            }
        }).catch((error) =>{
            console.log(error);
            response.status(500).json({error : "Erro no servidor"})
        })
    }

    listarAdm(request, response){
        database.select().table("ADM").then(adm=>{
            console.log(adm)
            response.json(adm)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmAdm(request,response){
        const {adm_id} = request.params

        database.select().table("ADM").where({adm_id: adm_id}).then(adm=>{
            response.json(adm)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarAdm(request,response){
        const {adm_id} = request.params
        const {adm_nome, adm_email, adm_cpf, adm_senha} = request.body

        database
            .update({adm_nome:adm_nome, adm_email:adm_email, adm_cpf:adm_cpf, adm_senha:adm_senha})
            .where({adm_id:adm_id})
            .table("ADM")
            .then(data=>{
                response.json({message: "Adm atualizado com sucesso!"})
            }).catch(error=>{
                response.json(error)
            })
    }

    removerAdm(request,response){
        const {adm_id} = request.params

        database.where({adm_id:adm_id}).del().table("ADM").then(data=>{
            response.json({message: "Adm removido com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new AdmController()