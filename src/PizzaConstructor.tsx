import React, {FormEvent, useState} from 'react';
import {calcPrice} from "./utils/calcPrice";
import {getUpdatedArray} from "./utils/getUpdatedArray";
import TotalOrder from "./TotalOrder";

const PizzaConstructor = () => {
    const [size, setSize] = useState<string>("big")
    const [dough, setDough] = useState<string>("thick")
    const [sauce, setSauce] = useState<string | null>(null)
    const [cheese, setCheese] = useState<Array<string>>([])
    const [vegetables, setVegetables] = useState<Array<string>>([])
    const [meat, setMeat] = useState<Array<string>>([])
    const [isOrdered, setIsOrdered] = useState<boolean>(false)

    const totalPrice = calcPrice(size, cheese, vegetables, meat)

    const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSize(event.target.value)
    }
    const handleDough = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDough(event.target.value)
    }
    const handleSauce = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSauce(event.target.value)
    }

    const handleCheese = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheese(getUpdatedArray(cheese, event.target.value))
    }

    const handleVegetables = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVegetables(getUpdatedArray(vegetables, event.target.value))
    }

    const handleMeat = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMeat(getUpdatedArray(meat, event.target.value))
    }

    const handleSubmit = (evt: FormEvent) => {
        evt.preventDefault()
        setIsOrdered(true)
    }


    return (
        <>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div>
                    <label>Big
                        <input type="radio" name="size" value="big" checked={"big" === size}
                               data-testid="big"
                               onChange={handleSize}/>
                    </label>
                    <label>Small
                        <input type="radio" name="size" value="small" checked={"small" === size}
                               onChange={handleSize}/>
                    </label>
                </div>
                <div>
                    <label>Thick
                        <input type="radio" name="dough" value="thick" checked={"thick" === dough}
                               data-testid="thick"
                               onChange={handleDough}/>
                    </label>
                    <label>Thin
                        <input type="radio" name="dough" value="thin" checked={"thin" === dough}
                               onChange={handleDough}/>
                    </label>
                </div>
                <div>
                    <label>Tomato
                        <input type="radio" name="sauce" value="tomato" checked={"tomato" === sauce}
                               onChange={handleSauce}/>
                    </label>
                    <label>White
                        <input type="radio" name="sauce" value="white" checked={"white" === sauce}
                               onChange={handleSauce}/>
                    </label>
                    <label>Spicy
                        <input type="radio" name="sauce" value="spicy" checked={"spicy" === sauce}
                               onChange={handleSauce}/>
                    </label>
                </div>
                <div>
                    <label>Mozzarella
                        <input type="checkbox" name="cheese" value="mozzarella" id="cheeseMozzarella"
                               checked={cheese.includes("mozzarella")}
                               onChange={handleCheese}/>
                    </label>
                    <label>Cheddar
                        <input type="checkbox" name="cheese" value="cheddar"
                               checked={cheese.includes("cheddar")}
                               onChange={handleCheese}/>
                    </label>
                    <label>Dor blue
                        <input type="checkbox" name="cheese" value="dorBlue"
                               checked={cheese.includes("dorBlue")}
                               onChange={handleCheese}/>
                    </label>
                </div>
                <div>
                    <label data-testid="tomato">Tomato
                        <input type="checkbox" name="vegetables" value="tomato" id="vegetablesTomato"
                               checked={vegetables.includes("tomato")}
                               onChange={handleVegetables}/>
                    </label>
                    <label>Mushrooms
                        <input type="checkbox" name="vegetables" value="mushrooms" id="vegetablesMushrooms"
                               checked={vegetables.includes("mushrooms")}
                               onChange={handleVegetables}/>
                    </label>
                    <label>Pepper
                        <input type="checkbox" name="vegetables" value="pepper" id="vegetablesPepper"
                               checked={vegetables.includes("pepper")}
                               onChange={handleVegetables}/>
                    </label>
                </div>
                <div>
                    <label>Bacon
                        <input type="checkbox" name="meat" value="bacon"
                               checked={meat.includes("bacon")}
                               onChange={handleMeat}/>
                    </label>
                    <label>Pepperoni
                        <input type="checkbox" name="meat" value="pepperoni"
                               checked={meat.includes("pepperoni")}
                               onChange={handleMeat}/>
                    </label>
                    <label>Ham
                        <input type="checkbox" name="meat" value="hum"
                               checked={meat.includes("ham")}
                               onChange={handleMeat}/>
                    </label>
                </div>
                <div>
                    <button type="submit">Sum: {totalPrice}</button>
                </div>
            </form>
            <hr/>
            {isOrdered &&
            <TotalOrder size={size} dough={dough} sauce={sauce} cheese={cheese} vegetables={vegetables} meat={meat}
                        totalPrice={totalPrice}/>}
        </>
    );
};

export default PizzaConstructor;
