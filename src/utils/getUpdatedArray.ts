export const getUpdatedArray = (array: Array<string>, ingredient: string) => {
    if (array.includes(ingredient)) {
        return array.filter(item => item !== ingredient)
    }
    return [...array, ingredient]
}
