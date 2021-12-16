export default {
    createPhone(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    },
    createLaptop(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    },
    createCpu(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    },
    createGpu(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    },
    createMemory(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    },
    createHeadset(parent, args, context, info) {
        return context.db.mutation.createPhone({
            data: {
                ...args
            }
        }, info);
    }
}