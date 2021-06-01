import App from './App'

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
.innerHTML = App();