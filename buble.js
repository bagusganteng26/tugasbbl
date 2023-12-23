function buble(nom) {
    for (let i = 0; i < nom.length; i++){
        for (let j = 0; j < nom.length - i -1; j++){
            if (nom[j] > nom[j + 1]){
                let sem = nom[j];
                nom [j] = nom [j+1];
                nom [j+1] = sem;
            }
        }
    }
    console.log(nom);
}

let nom = [3, 5, 1, 99, 12, 18, 65];
buble (nom);