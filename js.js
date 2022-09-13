const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
  const li = document.createElement("li");
  ulSquares.appendChild(li);
  const size = Math.floor(Math.random() * (120 - 10) + 10);
  const random = (min, max) => Math.random() * (max - min) + min;
  const position = Math.random(1, 99);
  const delay = random(5, 0.1);
  const duration = random(24, 12);
  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;

  li.style.left = `-${position}%`;
  li.style.animationDelay = `-${delay}s`;
  li.style.animationDirection = `-${delay}s`;
  li.style.animationTimingFunction = `cubic-bezier((${Math.random()},$ { Math.random()}, ${Math.random()}, ${Math.random()}))`;

  ulSquares.appendChild(li);
}
