const database = require('../database/connection')

class DesaparecidoController {
    novoDesaparecido(request,response){

        const {nome, cidade_natal, data_nasc, des_sexo, des_altura, des_peso, des_cordosolhos, des_cordapele, des_local, des_datavisto, des_descricao, user_id} = request.body

        console.log(nome, cidade_natal, data_nasc, des_sexo, des_altura, des_peso, des_cordosolhos, des_cordapele, des_local, des_datavisto, des_descricao, user_id )

        database.insert({nome, cidade_natal, data_nasc, des_sexo, des_altura, des_peso, des_cordosolhos, des_cordapele, des_local, des_datavisto, des_descricao, user_id }).table("DESAPARECIDO").then(data=>{
            console.log(data)
            response.json({message: "Desaparecido cadastrado com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarDesaparecido(request, response) {
        database.select('*').table('DESAPARECIDO').then(desaparecido=>{
            console.log(desaparecido)
            response.json(desaparecido)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmDesaparecido(request,response) {
    const {des_id} = request.params

        database.select().table("DESAPARECIDO").where({des_id:des_id}).then(desaparecido=>{
            response.json(desaparecido)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarDesaparecido(request,response){
        const {des_id} = request.params
        const {nome, cidade_natal, data_nasc, des_sexo, des_altura, des_peso, des_cordosolhos, des_cordapele, des_local, des_datavisto, des_descricao, user_id} = request.body

        database
            .update({nome:nome, cidade_natal:cidade_natal, data_nasc:data_nasc, des_sexo:des_sexo, des_altura:des_altura, des_peso:des_peso, des_cordosolhos:des_cordosolhos, des_cordapele:des_cordapele, des_local:des_local, des_datavisto:des_datavisto, des_descricao:des_descricao, user_id:user_id
            })
            .table("DESAPARECIDO")
            .where({des_id:des_id})
            .then(data=>{
                response.json({message: "Desaparecido atualizado com sucesso!"})
            }).catch(error=>{
                response.json(error)
            })
    }

    removerDesaparecido(request,response){
        const {des_id} = request.params

        database.where({des_id:des_id}).del().table("DESAPARECIDO").then(data=>{
            response.json({message: "Desaparecido removido com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new DesaparecidoController()