export const MyBackground = () => {
    document.body.classList.add("page-background")
}

export class BackgroundAnimation extends React.Component {
  render () {
    return (
    <style jsx global>{`
      .page-background {
        background-color: #010101;
        animation-name: pulsate;
        animation-duration: 15s;
        animation-iteration-count: infinite;
      }

      @keyframes pulsate {
        0% {
          background-color: #010101;
        }
        20% {
          background-color: #00090f;
        }
        40% {
          background-color: #00030f;
        }
        60% {
          background-color: #05000f;
        }
        80% {
          background-color: #0a000f;
        }
        100 {
          background-color: #010101;
        }
      }
    `}</style>
    )
  }
}