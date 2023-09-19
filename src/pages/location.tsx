export default function Location() {
  return (
    <div className="location-container">
      <p> 📍 1469 Colonial Blvd Unit #130, Fort Myers, FL 33907</p>
      <iframe
        className="map"
        width="600"
        height="450"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDK-Rwqn2rbYpAOVrhqFWvck7_NkNI9cd0
    &q=Vickery+jiujitsu,FortMyers+FL"
      ></iframe>
      <p>We offer the best in Fort Myers BJJ, Muay Thai & MMA.</p>
      <h1>Come check us out!</h1>
    </div>
  );
}
