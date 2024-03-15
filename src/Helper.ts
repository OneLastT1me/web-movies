import { CategoryIDs } from './Constants/renreIDs'

export const CategoryDefinitions = (id: number[]) =>{
    const Category =  Object.keys(CategoryIDs).filter((key) => id.includes(CategoryIDs[key as keyof typeof CategoryIDs]))

    return Category
}