export default {
    async getPhones (parent, args, context) {
        const phones = await context.prisma.phone.findMany()
        console.log(phones)
        return phones
    },
    async getLaptops(parent, args, context) {
        const laptops = await context.prisma.laptop.findMany()
        
        return laptops;
    },
    async getCpus(parent, args, context) {
        const cpus = await context.prisma.cpu.findMany()
        return cpus;
    },
    async getGpus(parent, args, context) {
        const gpus = await context.prisma.gpu.findMany()
        return gpus;
    },
    getMemories() {
        return [];
    },
    getHeadsets() {
        return [];
    },
}