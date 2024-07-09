/*

We are going to have two formulas here. One will be Effectiveness, and the other Efficiency. 

Effectiveness will take into account three key metrics - Stage Points (stage 4), Average Points, and Overall Standing.
Formula: SP + AP / Overall

Efficiency will essentially be the same thing except we will take into account Rider Cost. This is important because one of the scenarios might be two drop Gall and Kristoff - so getting two riders that are more efficient might be more impactful than just upgrading Kristoff in the long run.
Formula: SP + AP / Cost

*/

const riders = {
    'Landa': {
        'stagePoints': 108,
        'avgPoints': 34.3,
        'cost': 16,
        'overallStanding':  215
    },
    'Ciccone': {
        'stagePoints': 84,
        'avgPoints': 30.7,
        'cost': 16,
        'overallStanding':  335
    },
    'Bilbao': {
        'stagePoints': 23,
        'avgPoints': 29.3,
        'cost': 15,
        'overallStanding':  358
    },
    'Gee': {
        'stagePoints': 30,
        'avgPoints': 54.9,
        'cost': 16,
        'overallStanding':  242
    },
    'Gall': {
        'stagePoints': 70,
        'avgPoints': 23.4,
        'cost': 17,
        'overallStanding':  366
    },
    'Rodriguez': {
        'stagePoints': 153,
        'avgPoints': 64.3,
        'cost': 18,
        'overallStanding':  151
    },
    'Haig': {
        'stagePoints': 17,
        'avgPoints': 14.2,
        'cost': 14,
        'overallStanding':  457
    },
    'Kristoff': {
        'stagePoints': 0,
        'avgPoints': 25.6,
        'cost': 15,
        'overallStanding':  6136
    },
}


const calculateEffectiveness = (stagePoints, avgPoints, overallStanding) => {
   return (stagePoints + avgPoints) / overallStanding
}

const calculateEfficiency = (stagePoints, avgPoints, cost) => {
    return (stagePoints + avgPoints) / cost
}

const results = {}

Object.entries(riders).forEach(([rider, data]) => {
    const effectiveness = calculateEffectiveness(data.stagePoints, data.avgPoints, data.overallStanding)
    const efficiency = calculateEfficiency(data.stagePoints, data.avgPoints, data.cost)
    results[rider] = { effectiveness, efficiency}
})

console.log(results, riders)


const riderResults = document.getElementById('riderResults').getElementsByTagName('tbody')[0]

Object.entries(results).forEach(([rider, data]) => {
    const row = riderResults.insertRow()
    const riderCell = row.insertCell(0)
    const effectivenessCell = row.insertCell(1)
    const efficiencyCell  = row.insertCell(2)

    riderCell.textContent = rider
    effectivenessCell.textContent = data.effectiveness.toFixed(4)
    efficiencyCell.textContent = data.efficiency.toFixed(4)
})