import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders, Types } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("order")) {
            addCustomOrder()

        }

    }
)


export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                ${Wheels()}
            </section>
        </article>

        <article>
            <section class="choices__types options">
             ${Types()}
            </section>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
