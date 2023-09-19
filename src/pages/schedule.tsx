export function Schedule() {
  return (
    <div className="calandar-container">
      <h1>Class Schedule</h1>
      <iframe
        className="calandar"
        src="https://calendar.google.com/calendar/embed?src=eb6ba7678cfcd181329dc10d9f0b2dbdc02da9d8ac0622e82ec2787fac59874f%40group.calendar.google.com&ctz=America%2FNew_York"
      ></iframe>
    </div>
  );
}
