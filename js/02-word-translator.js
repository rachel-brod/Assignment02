let languageCode = prompt('Enter your language code (es, de, en, or fr)')
console.log(languageCode)

if (languageCode === 'es') {
    document.write('Hello World translated to Spanish is: Hola mundo.')
} else if (languageCode === 'de') {
    document.write('Hello World translated to German is: Hallo welt.')
} else if (languageCode === 'en') {
    document.write('Hello World translated to English is: Hello world.')
} else if (languageCode === 'fr') {
    document.write('Hello World translated to French is: Bonjour le monde.')
} else {
    document.write('You didn\'t choose a known language. Hello world translated in English is still: Hello world.')
}
