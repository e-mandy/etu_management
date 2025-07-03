import promptSync  from 'prompt-sync';
const prompt = promptSync();

interface Notes {
  terminal: number;
  partiel: {
    note1: number;
    note2: number;
  };
}

class Etudiant {
  
  prenom: string | null;
  filiere: string;
  email: string;
  moyenne: number;
  notes: Notes;

  constructor(private nom: string, prenom: string, filiere: string, email: string) {
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
    this.prenom = null
  }

  entrerNotes(note_terminal: number, note_partiel1: number, note_partiel2: number): void {
    this.notes.terminal = note_terminal;
    this.notes.partiel.note1 = note_partiel1;
    this.notes.partiel.note2 = note_partiel2;
  }

  calculerMoyenne(): void {
    this.moyenne =
      (this.notes.terminal + this.notes.partiel.note1 + this.notes.partiel.note2) / 3;
  }
}

// Liste d'étudiants
const etudiants: Etudiant[] = [
  new Etudiant('Magengo', 'Gutembert', 'IRT', 'exemple@gmail.com'),
  new Etudiant('Magengette', 'Gutembertte', 'IRT', 'exemple@gmail.com'),
  new Etudiant('Joli', 'Joliette', 'IRT', 'exemple@gmail.com'),
  new Etudiant('Magengo', 'Gut', 'IRT', 'exemple@gmail.com'),
];

// Fonction pour demander les notes à l'utilisateur
function demanderNotes(etudiant: Etudiant): void {
  const nt = parseFloat(prompt(`Note terminale de ${etudiant.nom} : `));
  const np1 = parseFloat(prompt('Note partiel 1 : '));
  const np2 = parseFloat(prompt('Note partiel 2 : '));

  etudiant.entrerNotes(nt, np1, np2);
}

function lancer(): void {
  for (const etudiant of etudiants) {
    demanderNotes(etudiant);
    etudiant.calculerMoyenne();
    console.log(`${etudiant.nom} : moyenne = ${etudiant.moyenne.toFixed(2)}`);
  }
}

lancer();
