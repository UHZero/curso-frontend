import './styles.scss'
import img from './photo.jpg'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const elemh1 = document.createElement('h1')
    elemh1.innerHTML = 'Hello Developer'
    elemh1.classList.add('title')
    return elemh1
}

function imageComponent(){
    const imgContent = new Image()
    imgContent.src = img
    return imgContent
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())
