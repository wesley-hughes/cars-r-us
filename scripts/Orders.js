
import { getOrders, getPaints, getInteriors, getTechnologies, getWheels, getTypes, setType } from "./database.js"

// const orders = getOrders()
const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()
const types = getTypes()

const buildOrderListItem = (order) => {
    // const wheels = getWheels()
    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )
    
   let totalCost = foundWheel.price + foundInterior.price + foundPaint.price + foundTechnology.price

    totalCost *= foundType.priceMultiplier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
            Order #${order.id} cost ${costString}
        </li>`
    /*
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
    */
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "type") {
            const chosenOption = changeEvent.target.value
            setType(parseInt(changeEvent.target.value))
        }
    }
)

export const Types = () => {

    let html = "<h2>Types</h2>"

    html += '<select id="type">'
    html += '<option value="0">Select a body type</option>'

    const arrayOfOptions = types.map((type) => {
        return `<option value="${type.id}">${type.type}</option>`
    }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)


    html += listItems.join("")
    html += "</ul>"

    return html
}