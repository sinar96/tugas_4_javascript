var sinar = 155;
var mustika = 165;
var ruslan = 185;

if (sinar > mustika) {
    if (sinar > ruslan) {
        console.log("Sinar paling tinggi");
    } else {
        console.log("Ruslan paling tinggi");
    }
} else {
    console.log("Mustika paling tinggi");

}

function urutan() {
    if (sinar > mustika && mustika > ruslan && sinar > ruslan)
        console.log("\nUrutan tinggi :\n1. sinar\n2. mustika\n3. ruslan");

    else if (sinar > ruslan && ruslan > mustika && sinar > mustika)
        console.log("\nUrutan tinggi :\n1. sinar\n2. ruslan\n3. mustika");

    else if (mustika > sinar && sinar > ruslan && mustika > ruslan)
        console.log("\nUrutan tinggi :\n1. mustika\n2. sinar\n3. ruslan");

    else if (mustika > ruslan && ruslan > sinar && mustika > sinar)
        console.log("\nUrutan tinggi :\n1. mustika\n2. ruslan\n3. sinar");

    else if (ruslan > sinar && sinar > mustika && ruslan > mustika)
        console.log("\nUrutan tinggi :\n1. ruslan\n2. sinar\n3. mustika");
    else
        console.log("\nUrutan tinggi :\n1. ruslan\n2. mustika\n3. sinar");
}

urutan()
