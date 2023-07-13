import { db } from "../database/db.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export async function signUp(req, res) {
    const { name, email, password, age } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (user) return res.status(409).send("E-mail já foi cadastrado!")

        const hash = bcrypt.hashSync(password, 10)

        await db.collection("users").insertOne({ name, email, password: hash, age })
        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body

    try {
        const user = await db.collection("users").findOne({ email })
        if (!user) return res.status(404).send("E-mail não cadastrado!")

        const isPasswordCorrect = bcrypt.compareSync(password, user.password)
        if (!isPasswordCorrect) return res.status(401).send("Senha incorreta")

        const token = uuid()
        await db.collection("sessions").insertOne({ token, userId: user._id })

        res.send({ token, userName: user.name, age: user.age })

    } catch (err) {
        res.status(500).send(err.message)
    }
}