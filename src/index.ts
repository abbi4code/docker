import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

interface usersprops{
    user: string,
    about: string
}


app.get('/', async(req,res)=>{
    try {
        const users = await prisma.info.findMany()

        res.send(users)

        
    } catch (error) {
        res.send(error)
        
    }

})

app.post('/user', async(req,res)=>{
    const {user,about} = req.body

    try {
        const users=  await prisma.info.create({
            data:{
                user,about
            }
        })

        res.send(users)
        
    } catch (error) {
        res.json({error})
        
    }
})


app.listen(3000, ()=>{
    console.log("app running bitch")
})



