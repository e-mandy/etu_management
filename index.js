console.log('Bonjour et bienvenue dans le programme de sécrétariat')

const prompt = require('prompt-sync')()


let listEtu =[
    {
        nom: "Bon",
        prenom: "Voila",
        notes: {
            continu: [10, 9],
            terminal: 10
        }
    },

    {
        nom: "Bon",
        prenom: "Voici",
        notes: {
            continu: [11, 2],
            terminal: 12
        }
    },

    {
        nom: "Bon",
        prenom: "Voi",
        notes: {
            continu: [0, 1],
            terminal: 15
        }
    }
]

function moyenne(continu, terminal){
    let somme = 0
    for(let i = 0; i < continu.length; i++){
        somme += continu[i]
    }

    return ((somme /2) + terminal) / 2
}

function afficheGrille(etudiant){
    const moyen = moyenne(etudiant.notes.continu, etudiant.notes.terminal)
    console.log(`Etudiant : ${etudiant.nom} 
    Moyenne : ${moyen}`)
}

function getValues(etudiant){
    for(let i = 0; i < etudiant.notes.continu.length; i++){
        etudiant.notes.continu[i] = parseFloat(prompt('Note continu ' + i + ': '))
    }
    etudiant.notes.terminal = parseFloat(prompt('Note terminal : '))
}

getValues(listEtu[0])

afficheGrille(listEtu[0])
