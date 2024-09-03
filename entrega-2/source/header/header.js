const app = document.getElementById('app')

const header = document.createElement('header')

const headerLogo = document.createElement('img')
headerLogo.src =
  'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724870068/entrega-2/LIQUID_PALMS_RADIO_1080_x_105_px_mklhhu.png'

header.appendChild(headerLogo)

app.appendChild(header)

headerLogo.class = 'logo'
