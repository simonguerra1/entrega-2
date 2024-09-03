const discos = [
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691622/entrega-2/PSI006_z4af5p.jpg',
    nombre: 'Comportamientos Nocturnos EP',
    artista: 'Marcos Coya',
    label: 'Psionic',
    año: 2022,
    precio: '€14.75'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691622/entrega-2/RIDE12_io19gs.jpg',
    nombre: 'Witch Doctor EP (RIDE12)',
    artista: 'Pete Melba',
    label: 'Magic Carpet',
    año: 2023,
    precio: '€16.20'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691113/entrega-2/NBN004_lf0btf.jpg',
    nombre: 'The Excursion Of Dreams (NBN004)',
    artista: 'James Andrew',
    label: 'Nothing But Nice Records',
    año: 2023,
    precio: '€15.30'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691098/entrega-2/PE017_A_hzeira.jpg',
    nombre: 'Dance Generation (PE017)',
    artista: 'Vitess',
    label: 'Physical Education',
    año: 2023,
    precio: '€17.50'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691098/entrega-2/PAV004_sbqy7u.jpg',
    nombre: 'Inner Glow (PAV004)',
    artista: 'Neoser',
    label: 'Pa volar',
    año: 2024,
    precio: '€14.85'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691097/entrega-2/MOUR001_1_front-1024x1024_dzzyfc.jpg',
    nombre: 'Housematic (Incl. LTJ Xperience Remix) (MOUR001)',
    artista: 'GarcyNoise & Luca Mauro',
    label: 'Move On Up Records',
    año: 2022,
    precio: '€16.95'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724691097/entrega-2/MELD004_qryklo.jpg',
    nombre: 'Aqualand EP (MELD004)',
    artista: 'Kawaii San',
    label: 'Meld',
    año: 2022,
    precio: '€15.80'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690435/entrega-2/LD009-1024x1024_mjf6vf.jpg',
    nombre: 'The Velvet Edge (LD009)',
    artista: 'Gene On Earth',
    label: 'Limousine Dream',
    año: 2024,
    precio: '€17.10'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690426/entrega-2/LEP003_u3eo7m.jpg',
    nombre: 'Three Dimensional Rocker (LEP003)',
    artista: 'Liquid Earth',
    label: 'Liquid Earth Physical',
    año: 2022,
    precio: '€14.90'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690426/entrega-2/KGV002_1_Front-1024x1024_sb6ukk.jpg',
    nombre: 'Kulture Galerie Volume Two (KGV002)',
    artista: 'Various Artists (Böhm, John Beltran…)',
    label: 'Kulture Galerie',
    año: 2023,
    precio: '€16.40'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690425/entrega-2/HTCB02_rnb6dt.jpg',
    nombre: 'Chronicles Of Bru Vol. 2 (HTCB02)',
    artista: 'Jesse Bru',
    label: 'Happiness Therapy',
    año: 2023,
    precio: '€14.60'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690328/entrega-2/HT022_sly6nq.jpg',
    nombre: 'Mon Numéro (HT22)',
    artista: 'Marc Brauner ',
    label: 'Happiness Therapy',
    año: 2024,
    precio: '€15.25'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690279/entrega-2/HT19_ojqteu.jpg',
    nombre: 'Weekend (HT19)',
    artista: 'Baka G',
    label: 'Happiness Therapy',
    año: 2023,
    precio: '€16.75'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690278/entrega-2/FTVA06_u6ygzc.jpg',
    nombre: 'Dead Space EP (FTVA06)',
    artista: 'Ildec',
    label: 'From The Void Above',
    año: 2024,
    precio: '€17.30'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690278/entrega-2/HAWS026_wmcscj.jpg',
    nombre: 'Haŵs Party Vol. 4 (HAWS026)',
    artista: 'Various Artists',
    label: 'Haŵs',
    año: 2022,
    precio: '€15.95'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690278/entrega-2/ER003_qacrqu.jpg',
    nombre: 'Human Spirit EP (Incl. Clint Remixes) (ER003)',
    artista: 'Cosmic G',
    label: 'E&X Records',
    año: 2024,
    precio: '€14.40'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690277/entrega-2/DR005_m0plus.jpg',
    nombre: 'Satellite EP (DR005)',
    artista: 'Anna Wall & Corbi ',
    label: 'Drifted Records',
    año: 2023,
    precio: '€16.85'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690277/entrega-2/DWT012_jahtkk.jpg',
    nombre: 'Unification Of Harmony (DWT012)',
    artista: 'Sound Synthesis',
    label: 'Distant Worlds',
    año: 2022,
    precio: '€17.00'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690276/entrega-2/D91009_1_Front-1-1024x1024_wclybz.jpg',
    nombre: 'The Lost Intruder (D91009)',
    artista: 'KafkaCtrl',
    label: 'Distrito 91',
    año: 2024,
    precio: '€14.95'
  },
  {
    cover:
      'https://res.cloudinary.com/dzviuc0zj/image/upload/v1724690276/entrega-2/BSU009_waajyl.jpg',
    nombre: 'Deputy Dog EP (BSU009)',
    artista: 'Liquid Earth',
    label: 'Butter Side Up',
    año: 2023,
    precio: '€15.55'
  }
]

let selectedLabel = ''
let selectedYear = ''

const divDiscos = document.createElement('div')
divDiscos.id = 'discos'

const printDiscos = (discos) => {
  const app = document.querySelector('#app')

  const divDiscos = document.querySelector('#discos')
  divDiscos.innerHTML = ''

  const ul = document.createElement('ul')

  for (const disco of discos) {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const infoDiv = document.createElement('div')
    infoDiv.className = 'info-container'
    const nombre = document.createElement('h3')
    const detailsDiv = document.createElement('div')
    const artista = document.createElement('p')
    const label = document.createElement('p')
    const año = document.createElement('p')
    const precio = document.createElement('p')

    img.src = disco.cover
    img.alt = `${disco.nombre} cover`
    img.style.width = '100%'

    nombre.textContent = disco.nombre
    artista.textContent = `Artista: ${disco.artista}`
    label.textContent = `Label: ${disco.label}`
    año.textContent = `Año: ${disco.año}`
    precio.textContent = `Precio: ${disco.precio}`

    li.appendChild(img)
    li.appendChild(infoDiv)
    infoDiv.appendChild(nombre)
    infoDiv.appendChild(detailsDiv)
    detailsDiv.appendChild(artista)
    detailsDiv.appendChild(label)
    detailsDiv.appendChild(año)
    detailsDiv.appendChild(precio)

    ul.appendChild(li)
  }

  divDiscos.appendChild(ul)
}

app.appendChild(divDiscos)
printDiscos(discos)

const labels = []
let label = ''

const fillLabels = (discos) => {
  labels.splice(0)
  labels.length = 0

  discos.forEach((disco) => {
    if (!labels.includes(disco.label)) {
      labels.push(disco.label)
    }
  })
}
fillLabels(discos)

const createSelect = () => {
  const filterDiv = document.createElement('div')
  filterDiv.id = 'filtros'
  const selectLabel = document.createElement('select')
  selectLabel.className = 'select'

  labels.forEach((label) => {
    const option = document.createElement('option')

    option.value = label
    option.textContent = label

    selectLabel.appendChild(option)
  })

  selectLabel.addEventListener('change', (event) => {
    selectedLabel = event.target.value
    filtrar()
  })

  filterDiv.appendChild(selectLabel)

  const header = document.querySelector('header')
  header.insertAdjacentElement('afterend', filterDiv)
}

createSelect()

const createSelectYear = () => {
  const filterDiv = document.getElementById('filtros')
  const selectYear = document.createElement('select')
  selectYear.className = 'select'

  const years = [...new Set(discos.map((disco) => disco.año))]

  years.forEach((year) => {
    const option = document.createElement('option')

    option.value = year
    option.textContent = year

    selectYear.appendChild(option)
  })

  selectYear.addEventListener('change', (event) => {
    selectedYear = event.target.value
    filtrar()
  })

  filterDiv.appendChild(selectYear)
}

createSelectYear()

const filtrar = () => {
  let filtered = discos

  if (selectedLabel) {
    filtered = filtered.filter((disco) => disco.label === selectedLabel)
  }

  if (selectedYear) {
    filtered = filtered.filter((disco) => disco.año == selectedYear)
  }

  document.querySelector('#discos').innerHTML = ''
  printDiscos(filtered)
}

const createClearButton = () => {
  const clearButton = document.createElement('button')
  clearButton.textContent = 'Limpiar filtros'
  clearButton.className = 'clear-button'

  clearButton.addEventListener('click', () => {
    selectedLabel = ''
    selectedYear = ''

    const selects = document.querySelectorAll('select')
    selects.forEach((select) => (select.value = ''))

    printDiscos(discos)
  })

  const filterDiv = document.getElementById('filtros')
  filterDiv.appendChild(clearButton)
}

createClearButton()
