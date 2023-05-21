const database = require('../database/connection')

class ChatController {
    novoChat(request,response){

        const {user_id, mensagem, data_chat, visualizacao} = request.body

        console.log(user_id, mensagem, data_chat, visualizacao )

        database.insert({user_id, mensagem, data_chat, visualizacao }).table("CHAT").then(data=>{
            console.log(data)
            response.json({message: "Chat cadastrado com sucesso!"})
        }).catch(error=>{
            console.log(error)
        })
    }

    listarChat(request,response){
        database.select().table("CHAT").then(chat=>{
            console.log(chat)
            response.json(chat)
        }).catch(error=>{
            console.log(error)
        })
    }

    listarUmChat(request,response){
        const {chat_id} = request.params

        database.select().table("CHAT").where({chat_id : chat_id}).then(chat=>{
            response.json(chat)
        }).catch(error=>{
            console.log(error)
        })

    }

    atualizarChat(request,response){
        const {chat_id} = request.params
        const {user_id, mensagem, data_chat, visualizacao} = request.body

        database
            .update({user_id:user_id, mensagem:mensagem, data_chat:data_chat, visualizacao:visualizacao})
            .table("CHAT")
            .where({chat_id:chat_id})
            .then(data=>{
                response.json({message:"Chat atualizado com sucesso!"})
            }).catch(error=>{
                response.json(error)
            })
    }

    removerChat(request,response){
        const {chat_id} = request.params

        database.where({chat_id:chat_id}).del().table("CHAT").then(data=>{
            response.json({message: "Chat removido com sucesso!"})
        }).catch(error=>{
            response.json(error)
        })
    }
}

module.exports = new ChatController()