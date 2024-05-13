


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    chiildren:'Click Me to visit google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)

