'use server'

import storwithD from "@/data/storwithD"


export const getProducts = async (offset, limit) => {
    console.log(offset, limit)
    try {
        let products = storwithD.map((sdata) => sdata.pItems).flat()
        let responseProducts = products.slice(offset, offset+limit)

        return responseProducts
    } catch (error) {
        throw new Error(`An error happend:${error}`)
    }
}