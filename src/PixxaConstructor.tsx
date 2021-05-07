import React, {FormEvent, useState} from 'react';

const PRICES = {
    base: 200,
    sizeBig: 50,
    ingredient: 29
}

const PizzaConstructor = () => {
    const [size, setSize] = useState<string>("big")
    const [dough, setDough] = useState<string>("thick")
    const [sauce, setSauce] = useState<string>()
    const [cheese, setCheese] = useState<Array<string>>([])
    const [vegetables, setVegetables] = useState<Array<string>>([])
    const [meat, setMeat] = useState<Array<string>>([])
    const [isOrdered, setIsOrdered] = useState<boolean>(false)

    const handleAddIngredient = (typeIngredient: string, ingredient: string) => {
        switch (typeIngredient) {
            case "cheese": {
                if (cheese.includes(ingredient)) {
                    setCheese(cheese.filter(item => item !== ingredient))
                } else {
                    setCheese([...cheese, ingredient])
                }
                break
            }
            case "vegetables": {
                if (vegetables.includes(ingredient)) {
                    setVegetables(vegetables.filter(item => item !== ingredient))
                } else {
                    setVegetables([...vegetables, ingredient])
                }
                break
            }
            case "meat": {
                if (meat.includes(ingredient)) {
                    setMeat(meat.filter(item => item !== ingredient))
                } else {
                    setMeat([...meat, ingredient])
                }
                break
            }
            default:
                break
        }
    }

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        setIsOrdered(true)
    }

    let price = 200
    const calcPrice = () => {
        if (size === "big") {
            price += PRICES.sizeBig
        }
        price += cheese.length * PRICES.ingredient
        price += vegetables.length * PRICES.ingredient
        price += meat.length * PRICES.ingredient
    }

    calcPrice()

    return (
        <>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div>
                    <label htmlFor="bigSize">Big
                        <input type="radio" name="size" value="big" id="bigSize" checked={"big" === size}
                               data-testid="big"
                               onChange={() => setSize("big")}/>
                    </label>
                    <label htmlFor="smallSize">Small
                        <input type="radio" name="size" value="big" id="smallSize" checked={"small" === size}
                               onChange={() => setSize("small")}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="doughThick">Thick
                        <input type="radio" name="dough" value="thick" id="doughThick" checked={"thick" === dough}
                               data-testid="thick"
                               onChange={() => setDough("thick")}/>
                    </label>
                    <label htmlFor="doughThin">Thin
                        <input type="radio" name="dough" value="thin" id="doughThin" checked={"thin" === dough}
                               onChange={() => setDough("thin")}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="sauceTomato">Tomato
                        <input type="radio" name="sauce" value="tomato" id="sauceTomato" checked={"tomato" === sauce}
                               onChange={() => setSauce("tomato")}/>
                    </label>
                    <label htmlFor="sauceWhite">White
                        <input type="radio" name="sauce" value="white" id="sauceWhite" checked={"white" === sauce}
                               onChange={() => setSauce("white")}/>
                    </label>
                    <label htmlFor="sauceSpicy">Spicy
                        <input type="radio" name="sauce" value="spicy" id="sauceSpicy" checked={"spicy" === sauce}
                               onChange={() => setSauce("spicy")}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="cheeseMozzarella">Mozzarella
                        <input type="checkbox" name="cheese" value="mozzarella" id="cheeseMozzarella"
                               checked={cheese.includes("mozzarella")}
                               onChange={() => handleAddIngredient("cheese", "mozzarella")}/>
                    </label>
                    <label htmlFor="cheeseCheddar">Cheddar
                        <input type="checkbox" name="cheese" value="cheddar" id="cheeseCheddar"
                               checked={cheese.includes("cheddar")}
                               onChange={() => handleAddIngredient("cheese", "cheddar")}/>
                    </label>
                    <label htmlFor="cheeseDorBlue">Dor blue
                        <input type="checkbox" name="cheese" value="dorBlue" id="cheeseDorBlue"
                               checked={cheese.includes("dorBlue")}
                               onChange={() => handleAddIngredient("cheese", "dorBlue")}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="vegetablesTomato" data-testid="tomato">Tomato
                        <input type="checkbox" name="vegetables" value="tomato" id="vegetablesTomato"
                               checked={vegetables.includes("tomato")}
                               onChange={() => handleAddIngredient("vegetables", "tomato")}/>
                    </label>
                    <label htmlFor="vegetablesMushrooms">Mushrooms
                        <input type="checkbox" name="vegetables" value="mushrooms" id="vegetablesMushrooms"
                               checked={vegetables.includes("mushrooms")}
                               onChange={() => handleAddIngredient("vegetables", "mushrooms")}/>
                    </label>
                    <label htmlFor="vegetablesPepper">Pepper
                        <input type="checkbox" name="vegetables" value="pepper" id="vegetablesPepper"
                               checked={vegetables.includes("pepper")}
                               onChange={() => handleAddIngredient("vegetables", "pepper")}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="meatBacon">Bacon
                        <input type="checkbox" name="meat" value="bacon" id="meatBacon"
                               checked={meat.includes("bacon")}
                               onChange={() => handleAddIngredient("meat", "bacon")}/>
                    </label>
                    <label htmlFor="meatPepperoni">Pepperoni
                        <input type="checkbox" name="meat" value="pepperoni" id="meatPepperoni"
                               checked={meat.includes("pepperoni")}
                               onChange={() => handleAddIngredient("meat", "pepperoni")}/>
                    </label>
                    <label htmlFor="meatHam">Ham
                        <input type="checkbox" name="meat" value="hum" id="meatHam"
                               checked={meat.includes("ham")}
                               onChange={() => handleAddIngredient("meat", "ham")}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Sum: {price}</button>
                </div>
            </form>
            <hr/>
            {isOrdered &&
            <div>
                <h3>Your order:</h3>
                {size && <div>Size: {size}</div>}
                {dough && <div>Dough: {dough}</div>}
                {sauce && <div>Sauce: {sauce}</div>}
                {cheese.length > 0 && <div>Cheese: {cheese.join(', ')}</div>}
                {vegetables.length > 0 && <div>Vegetables: {vegetables.join(', ')}</div>}
                {meat.length > 0 && <div>Meat: {meat.join(', ')}</div>}
                <br/>
                <div>Money: {price}</div>
            </div>
            }
        </>
    );
};

export default PizzaConstructor;
