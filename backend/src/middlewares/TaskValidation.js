const TaskModel = require('../model/TaskModel')
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body
    
    if(!macaddress)
        return res.status(400).json({ error: 'macaddress é obrigatorio!' })
    else if (!type)
        return res.status(400).json({ error: "Tipe é obrigatorio"})
    else if (!title)
        return res.status(400).json({ error: "title é obrigatorio"})
    else if (!description)
        return res.status(400).json({ error: "description é obrigatorio"})
    else if (!when)
        return res.status(400).json({ error: "when é obrigatorio"})
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: "Data não pode ser cadastrada no passado!"})
    else{
        exists = await TaskModel
            .findOne({
                'when': {'$eq': new Date(when)},
                'macaddress': {'$in': macaddress}
            })

        if(exists){
            return res.status(400).json({ error: "Já existe uma tarefa cadastrada! "})
        }

        next()
    }
    
    }

module.exports = TaskValidation