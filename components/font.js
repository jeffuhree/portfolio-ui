import FontFaceObserver from 'fontfaceobserver'

const MyFont = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Assistant:200,300,400,500,700,900'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const assistant = new FontFaceObserver('Assistant')

  assistant.load().then(() => {
    document.documentElement.classList.add('assistant')
  })
}

export default MyFont