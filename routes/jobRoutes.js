const router = require('express').Router()
const Job = require('../models/Job')

router.post('/', async (req, res) => {
 
    //req.body
    const {nameJob, department} = req.body

    if(!nameJob) {
       res.status(422).json({message: 'O nome da profissão é obrigatório!'})
       return
    }

    const job = {
        nameJob,
        department
    }

    try{
      await Job.create(job)
      res.status(201).json({message: 'Profissão inserido com sucesso!'})

    } catch (error) {
       res.status(500).json({error: error})
    }

})

router.get('/', async (req, res) => {
    try {
        const jobs = await Job.find()
        res.status(200).json(jobs)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router;