import Bricks from 'bricks.js'

const instance = Bricks({
    container: '#brick',
    packed: 'data-packed',
    sizes: [
        { columns: 2, gutter: 50 },
        { mq: '1440px', columns: 3, gutter: 40 }
    ]
})

document.querySelector('#brick').style.margin = "0 auto";

instance.resize(true);
instance.pack();