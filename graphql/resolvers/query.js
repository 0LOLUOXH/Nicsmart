export default {
    async getPhones (parent, args, context) {
        const phones = await context.prisma.phone.findMany()
        console.log(phones)
        return phones
    },
    getLaptops() {
        return [];
    },
    getCpus() {
        return [];
    },
    getGpus() {
        return [];
    },
    getMemories() {
        return [];
    },
    getHeadsets() {
        return [];
    },
}