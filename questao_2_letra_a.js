function main() {

    let test_string = "AnalogAmente";
    let splitted_string = test_string.split("");
    let counter = 0;

    for (let i = 0; i < splitted_string.length; i++) {
        const letter = splitted_string[i];
        
        if (letter == "a" || letter == "A") {
            counter++;
        }
    }

    if (counter == 0) {
        console.log(`\nA letra 'a' não aparece na palavra '${test_string}'`);
    }
    else {
        console.log(`\nA letra 'a' aparece ${counter} vezes na palavra '${test_string}'`);
    }
}

main();
