const database = {
    orderBuilder: {

    },
    paints: [
        { id: 1, color: "silver", price: 3000 },
        { id: 2, color: "midnight blue", price: 2500 },
        { id: 3, color: "firebrick red", price: 2750 },
        { id: 4, color: "spring green", price: 2250 }
    ],
    interiors: [
        { id: 1, material: "beige fabric", price: 1000 },
        { id: 2, material: "charcoal fabric", price: 1100 },
        { id: 3, material: "white leather", price: 2200 },
        { id: 4, material: "black leather", price: 2600 }
    ],
    technologies: [
        { id: 1, package: "basic package", price: 1500 },
        { id: 2, package: "navigation package", price: 3000 },
        { id: 3, package: "visibility package", price: 4200 },
        { id: 4, package: "ultra package", price: 6500 }
    ],
    wheels: [
        { id: 1, selection: "17-inch pair radial", price: 1000 },
        { id: 2, selection: "17-inch pair radial black", price: 1400 },
        { id: 3, selection: "18-inch pair spoke silver", price: 1900 },
        { id: 4, selection: "18-inch pair spoke black", price: 2400 }
    ],
    types: [
        { id: 1, type: "Car", priceMultiplier: 1 },
        { id: 2, type: "SUV", priceMultiplier: 1.5 },
        { id: 3, type: "Truck", priceMultiplier: 2.5 },

    ],
    customOrders: [
        { id: 1, paintId: 3, interiorId: 2, technologyId: 3, wheelId: 4, typeId: 3, timestamp: 1614659931693 }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getTypes = () => {
    return database.types.map(type => ({...type}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setType = (id) => {
    database.orderBuilder.typeId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
