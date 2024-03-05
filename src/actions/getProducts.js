'use server'

import storwithD from "@/data/storwithD"

export const getStoreData= async (storeCode)=>{
try {
    let storeData = storeWithD.find((item)=> item.store.storeCode ===storeCode)

    return storeData
} catch (error) {
    throw new Error(`An error happend:${error}`)
}
}
export const getProduct= async(key)=>{
try {
    let product = storwithD.map((sdata) => sdata.pItems).flat().find((item)=> item.key === key)

    return product
} catch (error) {
    throw new Error(`An error happend:${error}`)
}
}

export const getProducts = async (offset, limit) => {
    
    try {
        let products = storwithD.map((sdata) => sdata.pItems).flat()
        let responseProducts = products.slice(offset, offset+limit)

        return responseProducts
    } catch (error) {
        throw new Error(`An error happend:${error}`)
    }
}