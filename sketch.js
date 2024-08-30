function setup() {
  createCanvas(1000, 1000);
  //noLoop()
}

function draw() {
  // Center position
  let centerX = width / 2
  let centerY = height / 2
  

  let x = randomGaussian(centerX, 60) // Mean at centerX, standard deviation of 100
  let y = randomGaussian(centerY, 60) // Mean at centerY, standard deviation of 100
    
  // Generate color using a normal distribution
  let r = constrain(randomGaussian(128, 50), 0, 255)
  let g = constrain(randomGaussian(128, 50), 0, 255)
  let b = constrain(randomGaussian(128, 50), 0, 255)
    
  fill(r, g, b, 30)
  //noStroke()
  stroke(r, g, b, 60)
  ellipse(x, y, 8, 8) // Draw the dot
}
