import { PrismaClient } from '@prisma/client'

class PrismaLib {
    static instance;
    
    constructor() {
        // singleton
        if (!PrismaLib.instance) {
            PrismaLib.instance = new PrismaClient()
        }
        return PrismaLib.instance
    }
}

export default PrismaLib
