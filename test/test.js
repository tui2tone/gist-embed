const Gist = require('../src/index')

const main = () => {
    if(typeof document !== 'undefined') {
        Gist.embed('9a63adf6c9b5d4be135449818cd747c3', document.getElementById("gist"))
    } else {
        // With Id
        Gist.get('9a63adf6c9b5d4be135449818cd747c3')
            .then((result) => {
                // console.log(result)
            })
        
        // With Url
        Gist.get('https://gist.github.com/Culttm/a8c3ca85032c4b0cc67037425f150c44.js')
            .then((result) => {
                console.log(result)
            })
        
    }
}

main()