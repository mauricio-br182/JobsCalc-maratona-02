const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')
module.exports = 
{
    create(req,res){

       return res.render('job') 
    },

    async save(req, res){

        await Job.create({
        name: req.body.name,
        "daily-hours": req.body['daily-hours'],
        "total-hours": req.body['total-hours'],
        createdAt: Date.now() //atribuindo a data de hoje 

    })

        return res.redirect('/')  
    },

    async show ( req, res ) 
    {   
        //fazer aparecer o numero do id no url do navegador
        const jobId = req.params.id

        const jobs = await Job.get()

        const job = jobs.find(job => Number(job.id) === Number(jobId))

        if(! job )
        {   
           return res.send('job not found')
        }  
        const profile = await Profile.get()

        job.budget = JobUtils.calculateBudget(job, profile['value-hour'])

        return res.render('job-edit',{ job })
        
    },

    async update(req, res) 
    {
        //pegando o numero do projeto
        const jobId = req.params.id

        const updatedJob = {
            name: req.body.name,
            'daily-hours': req.body['daily-hours'],
            'total-hours': req.body['total-hours'],
        }

        await Job.update(updatedJob, jobId)

        res.redirect('/job/' + jobId)

    } ,
    async delete(req, res)
    {   
        const jobId = req.params.id
        
        await Job.delete(jobId)
        
        return res.redirect('/')
    },
}