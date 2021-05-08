import {PRICES} from '../constants'

export const calcPrice = (size: string, cheese: Array<string>, vegetables: Array<string>, meat: Array<string>) => {
    let price = PRICES.base
    if (size === "big") {
        price += PRICES.sizeBig
    }

    price += (cheese.length + vegetables.length + meat.length) * PRICES.ingredient
    return price
}
