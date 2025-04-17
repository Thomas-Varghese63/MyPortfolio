export default function VideoBg() {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline className="video-element">
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
    </div>
  )
}