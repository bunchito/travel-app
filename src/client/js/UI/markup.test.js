import {
  generateMarkup
} from "./markup"

describe('Testing generateMarkup()' , () => {
  test('given an element object and a data object it should return the proper markup', () => {

    const element = {
      type: 'div',
      id: 'travel',
      classes: ['data-travel']
    }
    const data = {
      city: { lng: '167.96667', lat: '-46.1', name: 'North Head Stream' },
      weather: { icon: 'c02d', code: 802, description: 'Scattered Clouds' },
      photos: [
        {
          previewURL: 'https://cdn.pixabay.com/photo/2021/02/27/04/03/crocus-6053680_150.jpg',
          tags: 'crocus, iris, flowers'
        }
      ]
    }
    const result = `<div id="travel" class="data-travel"><div class="travel-image"><img src="https://cdn.pixabay.com/photo/2021/02/27/04/03/crocus-6053680_150.jpg" alt="North Head Stream"></div><div class="travel-info"><h2>North Head Stream</h2>
    <div class="container">
      <img src="https://www.weatherbit.io/static/img/icons/c02d.png" alt="North Head Stream">
      <span>Current weather: Scattered Clouds</span>
    </div>
  </div></div>`
    const markup = generateMarkup(element, data)
    let wrapper = document.createElement('div')
    wrapper.appendChild(markup)
    const stringifiedDOmElement = wrapper.innerHTML;
    expect(stringifiedDOmElement).toBe(result)
  });
});



// const markup = generateMarkup(element, classes, data)
// let wrapper = document.createElement('div')
// wrapper.appendChild(markup)
// var stringifiedDOmElement = wrapper.innerHTML;
// expect(stringifiedDOmElement).toBe(result)



// import { generateRandomNumber } from '../utils/index'

// const generateMarkup = (element = {}, data = {}) => {
//   const { type, id, classes } = element

//   const newElement = document.createElement(type)
//   newElement.setAttribute('id', id)
//   newElement.classList.add(...classes)

//   const { city, photos, weather } = data


//   let tempData = ``
//   tempData += markupCity(city)
//   tempData += markupPhotos(photos, city.name)
//   tempData += markupWeather(weather, city.name)

//   newElement.innerHTML = tempData
//   return newElement
// }

// const markupCity = (data = {}) => {
//   return `<div>${data.name}</div>`
// }

// const markupPhotos = (data = [], altForPhoto = '') => {
//   const randomIndex = generateRandomNumber(data.length)
//   const selectedElement = data[randomIndex]
//   return `<div><img src='${selectedElement.previewURL}' alt='${altForPhoto}' /></div>`
// }

// const markupWeather = (data = {}, altForPhoto = '') => {
//   return `
//     <div>
//       <div>Current weather: ${data.description}</div>
//       <div><img src='https://www.weatherbit.io/static/img/icons/${data.icon}.png' alt='${altForPhoto}' /></div>
//     </div>
//   `
// }

// const addMarkup = (element = {}, markup = '', childElement = {}) => {
//   const elementType = element.selectorType === 'id' ? '#' : '.'
//   const elementText = element.selectorText

//   const childElementToremove = document.getElementById(childElement.id)

//   const selectedElement = document.querySelector(`${elementType}${elementText}`)
//   if(childElementToremove) {
//     selectedElement.getElementsByClassName.display = 'none'
//     selectedElement.removeChild(childElementToremove)
//     selectedElement.getElementsByClassName.display = 'block'
//   }

//   document.querySelector(`${elementType}${elementText}`).appendChild(markup)
//   return
// }

// export {
//   generateMarkup,
//   addMarkup
// }