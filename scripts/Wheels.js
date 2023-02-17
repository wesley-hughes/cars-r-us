import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
        let html = "<h2>Wheels</h2>"
    
        html += '<select id="wheel">'
        html += '<option value="0">Make a wheel selection</option>'
    
        const arrayOfOptions = wheels.map( (wheel) => {
                return `<option value="${wheel.id}">${wheel.selection}</option>`
            }
        )
        html += arrayOfOptions.join("")
        html += "</select>"
        return html
    }
