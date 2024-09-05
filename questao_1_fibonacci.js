function main() {
    
    let test_number = 317811;
    let sequence = [0,1];

    while (true) {
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];

        sequence.push(next);

        if (sequence[sequence.length - 1] == test_number) {
            // console.log(sequence);
            // console.log(test_number);
            console.log(`\nNúmero ${test_number} existe na sequência fibonacci, na posição ${sequence.length} (Contando a partir de 1)`);
            break;
        }
        else if (sequence[sequence.length - 1] > test_number){
            // console.log(sequence);
            console.log(`\nNúmero ${test_number} não existe na sequência fibonacci, números mais próximos são ${sequence[sequence.length - 2]} e ${sequence[sequence.length - 1]}`);
            break;
        }
    }
}

main();
