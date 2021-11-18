import { createConnection } from 'typeorm'


const connection = async () => {
    try {
        await createConnection()
    } catch (error) {
        console.error(error)
        throw new Error("Unable to connect to database")
    }
}

export default connection