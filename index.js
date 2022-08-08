import Neo from "./neo"
import { getNeo } from "./neo_services"

async function loadNeos() {
    let neos = []
    let neosJson = await getNeo()
    neosJson.forEach(neo => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const averageDiameter = (minDiameter + maxDiameter) / 2
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    })
    renderNEO(neos)
}

function renderNEO(neos) {
    const ulElement = document.querySelector("neos-list")
    neos.forEach(neo => {
        const letElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo" : "Sem perigo "
        const text = `${neo.name} - ${neo.id} - ${neo.averageEstimatedDiameter} - ${isSentry}`
        letElement.innerHTML = text
        ulElement.appendChild(letElement)
    })
}
loadNeos()