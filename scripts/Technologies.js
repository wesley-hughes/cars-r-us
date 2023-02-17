import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map((technology) => {
        return `<option value="${technology.id}">${technology.package}</option>`
    }
    )
    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
