export const textAlign = {
  type: 'string',
  name: 'textAlign',
  options: {
    list: [
      { title: 'Left', value: 'left' },
      { title: 'Center', value: 'center' },
      { title: 'Right', value: 'right' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
}

export const fontPicker = {
  type: 'string',
  name: 'fontPicker',
  options: {
    list: [
      { title: 'Sans Serif', value: 'sans' },
      { title: 'Serif', value: 'serif' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
}
