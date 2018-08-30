const Gist = require('../src/index')

const main = () => {
    if(typeof document !== 'undefined') {
        Gist.embed('9a63adf6c9b5d4be135449818cd747c3', document.getElementById("gist"))
    } else {
        Gist.get('9a63adf6c9b5d4be135449818cd747c3')
            .then((result) => {
                console.log(result)
            })
    }
}

main()