import { gql } from "apollo-server-micro";

export  default gql`
    type Phone {
        id: ID!
        name:  String
        cpu:   String
        ram:   Int
        gpu:   String
        memory: Int[]
        camara_frontal: Int[]
        camara_trasera: Int[]
        price: Float
        image: String
        description: String
    }

    type laptop {
        id: ID!
        name:String
        cpu: String
        ram: Int
        gpu: String
        memory: Int[]
        camara_frontal: Int[]
        price: Float
        image: String
        description: String
    }

    type cpu {
        id: ID!
        name:  String
        cores: Int
        threads: Int
        price: Float
        image: String
        description: String
    }


    type gpu {
        name:  String
        ram: Int
        type: String
        price: Float
        image: String
        description: String
    }

    type memory {
        id:    ID!
        name:  String
        memory_count: Int
        type: String 
        price: Float
        image: String
        description: String

    }
    type headset {
        id  : ID!
        name:  String
        micro: String
        frequency: Int
        price: Float
        image: String
        description: String
    }

    type Query {
        getPhones: [Phone]
        getLaptops: [laptop]
        getCpus: [cpu]
        getGpus: [gpu]
        getMemories: [memory]
        getHeadsets: [headset]
    }

    type Mutations {
        createPhone(name: String, cpu: String, ram: Int, gpu: String, memory: Int[], camara_frontal: Int[], camara_trasera: Int[], price: Float, image: String, description: String): Phone
        createLaptop(name: String, cpu: String, ram: Int, gpu: String, memory: Int[], camara_frontal: Int[], price: Float, image: String, description: String): laptop
        createCpu(name: String, cores: Int, threads: Int, price: Float, image: String, description: String): cpu
        createGpu(name: String, ram: Int, type: String, price: Float, image: String, description: String): gpu
        createMemory(name: String, memory_count: Int, type: String, price: Float, image: String, description: String): memory
        createHeadset(name: String, micro: String, frequency: Int, price: Float, image: String, description: String): headset
    }

`
