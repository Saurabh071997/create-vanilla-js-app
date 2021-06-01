import './App.css'

const elvenShieldRecipe = {
    leatherstrips: 2, 
    ironIngot:1,
    refined:4
}

console.log(elvenShieldRecipe)

const elvenGauntletRecipe = {
    ...elvenShieldRecipe, 
    leather:4
}

console.log(elvenGauntletRecipe)

document.getElementById('root')
.innerHTML = `
    <h1>JS Starter pack</h1>
`