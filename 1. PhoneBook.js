function phoneBook(input) {
    let phonebook = {};
    for (let personInfo of input) {

        let [name, phoneNumber] = personInfo.split(` `)
        phonebook[name] = phoneNumber

    }
    for (const name in phonebook) {
        
        console.log(`${name} -> ${phonebook[name]}`);

    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);
