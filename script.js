
window.addEventListener("DOMContentLoaded", () => 
{
    botoes()
})

function botoes () {

    document.getElementById("somar").addEventListener("click", ()=>
    {
        calcular ()
    })

    document.getElementById("buscarPokemon").addEventListener("click", function ()
    {
        botaoPesquisaPokemon()
    }) 

}


async function botaoPesquisaPokemon() 
{
    {
        let id = document.getElementById("idPokemon").value
        if((id >0 && id <1000))
        {
        
        const personagem = await buscarPokemon(id)
        
        let nomeCaps = (personagem.name[0].toUpperCase() + personagem.name.substring(1))

        console.log(personagem.sprites.front_default)

        document.getElementById('nomePokemon').innerHTML = ("Nome: " + nomeCaps)
        document.getElementById("imagemPokemon").src = (personagem.sprites.front_default)
        }
    }

    async function buscarPokemon(id)
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const response = await fetch(url)
        return response.json()
    }
}


function calcular ()
{
    let numero1 = Number (document.getElementById("num1").value)
    let numero2 = Number (document.getElementById("num2").value)
    
    let resultado = (numero1 + numero2)

    document.getElementById("resultadoCalculadora").innerHTML = resultado
}