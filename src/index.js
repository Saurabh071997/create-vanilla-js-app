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

let something = true;
console.log(something)

console.log(elvenGauntletRecipe)

document.getElementById('root')
.innerHTML = App();