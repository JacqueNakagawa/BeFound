const database = require('../database/connection')

class SumidoController {
    novoSumido(request,response){

        const {nome, cidade, data_nasc} = request.body

        console.log(nome, cidade, data_nasc )

        database.insert({nome, cidade, data_nasc }).table("sumido").then(data=>{
            console.log(data)
            response.json({message: "Sumido cadastrado com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarSumido(request,response){
        database.select('*').from('sumido').then(sumido=>{
            console.log(sumido)
            response.json(sumido)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmSumido(request,response){
        const {id}  = request.params

        database.select().table("sumido").where({id:id}).then(sumido=>{
            response.json(sumido)
        }).catch(error=>{
            console.log(error)
        })
    }

    atualizarSumido(request,response){
        const {id} = request.params
        const {nome, cidade, data_nasc} = request.body

        database
        .update({nome:nome, cidade:cidade, data_nasc:data_nasc})
        .table("sumido")
        .where({id:id})
        .then(data=>{
            response.json({message:"Cadastro Atualizado com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }

    removerSumido(request,response){
        const {id} = request.params

        database.where({id:id}).del().table("sumido").then(data=>{
            response.json({message:"Cadastro removido com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new SumidoController()