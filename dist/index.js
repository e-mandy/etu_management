"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Etudiant {
    constructor(nom, prenom, filiere, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.filiere = filiere;
        this.email = email;
        this.moyenne = 0;
        this.notes = {
            terminal: 0,
            partiel: {
                note1: 0,
                note2: 0,
            },
        };
    }
    entrerNotes(note_terminal, note_partiel1, note_partiel2) {
        this.notes.terminal = note_terminal;
        this.notes.partiel.note1 = note_partiel1;
        this.notes.partiel.note2 = note_partiel2;
    }
    calculerMoyenne() {
        this.moyenne =
            (this.notes.terminal + this.notes.partiel.note1 + this.notes.partiel.note2) / 3;
    }
}
// Liste d'étudiants
const etudiants = [
    new Etudiant('Magengo', 'Gutembert', 'IRT', 'exemple@gmail.com'),
    new Etudiant('Magengette', 'Gutembertte', 'IRT', 'exemple@gmail.com'),
    new Etudiant('Joli', 'Joliette', 'IRT', 'exemple@gmail.com'),
    new Etudiant('Magengo', 'Gut', 'IRT', 'exemple@gmail.com'),
];
// Fonction pour demander les notes à l'utilisateur
function demanderNotes(etudiant) {
    const nt = parseFloat(prompt(`Note terminale de ${etudiant.nom} : `));
    const np1 = parseFloat(prompt('Note partiel 1 : '));
    const np2 = parseFloat(prompt('Note partiel 2 : '));
    etudiant.entrerNotes(nt, np1, np2);
}
function lancer() {
    for (const etudiant of etudiants) {
        demanderNotes(etudiant);
        etudiant.calculerMoyenne();
        console.log(`${etudiant.nom} : moyenne = ${etudiant.moyenne.toFixed(2)}`);
    }
}
lancer();
