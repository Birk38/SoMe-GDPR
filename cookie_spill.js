
// Spiller

let canvasWidth = 1100
let canvasHeight = 530

let isPaused = false

function defineObject(obj, x, y, width, heigth) {

  obj.x_pos = x,
    obj.y_pos = y,
    obj.width = width,
    obj.height = heigth
}

let objects = []

let player = {}

let box1 = {}
objects.push(box1)

let box2 = {}
objects.push(box2)

let box3 = {}
objects.push(box3)

let box4 = {}
objects.push(box4)

console.log(objects)

defineObject(player, 140, 400, 20, 20)

let box_width = 190
let box_heigth = 120

defineObject(box1, canvasWidth / 4, 3 * canvasHeight / 4, box_width, box_heigth)
defineObject(box2, 3 * canvasWidth / 4, 3 * canvasHeight / 4, box_width, box_heigth)
defineObject(box3, canvasWidth / 4, canvasHeight / 4, box_width, box_heigth)
defineObject(box4, 3 * canvasWidth / 4, canvasHeight / 4, box_width, box_heigth)

console.log(player)

let speed_factor = 1

// Zucker start

let zuck = {
  x_pos: canvasWidth / 2,
  y_pos: canvasHeight / 2,
  width: 40,
  height: 60,
  speed: 20,
}

function preload() {
  zuck.file = loadImage('bilder/The zuck.jpeg')
  cookie_bilde = loadImage('bilder/cookie.png')
  virus_bilde = loadImage('bilder/virus.png')
  rasmus_bilde = loadImage('bilder/rasmus.jpeg')
}

let lastFrameTime = 0

function zuck_move() {

  if (!isPaused) {
    image(zuck.file, zuck.x_pos, zuck.y_pos, zuck.width, zuck.height);

    let currentTime = millis()
    let deltaTime = (currentTime - lastFrameTime) / 1000
    lastFrameTime = currentTime

    // console.log(deltaTime)

    if (deltaTime > 0.05) {
      deltaTime = 0
    }

    for (i = 0; i < objects.length; i++) {
      if (CollisionDetection(zuck, objects[i])) {

        // Check if zuck is to the left of the object
        if (zuck.x_pos < objects[i].x_pos - objects[i].width / 2) {
          zuck.velocity = p5.Vector.sub(createVector(player.x_pos, player.y_pos), createVector(zuck.x_pos, zuck.y_pos));
          zuck.velocity.x = 0
          if (abs(zuck.velocity.y) < 0.2) {
            zuck.x_pos = player.x_pos
            zuck.y_pos = player.y_pos
          } else {
            zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor);

            zuck.x_pos = objects[i].x_pos - objects[i].width / 2 - zuck.width / 2;
            zuck.y_pos += zuck.velocity.y;
          }
        }

        // Check if zuck is to the right of the object
        if (zuck.x_pos > objects[i].x_pos + objects[i].width / 2) {
          zuck.velocity = p5.Vector.sub(createVector(player.x_pos, player.y_pos), createVector(zuck.x_pos, zuck.y_pos));

          zuck.velocity.x = 0

          if (abs(zuck.velocity.y) < 0.2) {
            zuck.x_pos = player.x_pos
            zuck.y_pos = player.y_pos
          } else {
            zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor);

            zuck.x_pos = objects[i].x_pos + objects[i].width / 2 + zuck.width / 2;
            zuck.y_pos += zuck.velocity.y;
          }
        }

        // Check if zuck is above the object
        if (zuck.y_pos < objects[i].y_pos - objects[i].height / 2) {
          zuck.velocity = p5.Vector.sub(createVector(player.x_pos, player.y_pos), createVector(zuck.x_pos, zuck.y_pos));

          zuck.velocity.y = 0

          if (abs(zuck.velocity.x) < 0.2) {
            zuck.x_pos = player.x_pos
            zuck.y_pos = player.y_pos
          } else {
            zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor);

            zuck.y_pos = objects[i].y_pos - objects[i].height / 2 - zuck.height / 2
            zuck.x_pos += zuck.velocity.x;
          }
        }

        // Check if zuck is below the object
        if (zuck.y_pos > objects[i].y_pos + objects[i].height / 2) {
          zuck.velocity = p5.Vector.sub(createVector(player.x_pos, player.y_pos), createVector(zuck.x_pos, zuck.y_pos));

          zuck.velocity.y = 0

          if (abs(zuck.velocity.x) < 0.2) {
            zuck.x_pos = player.x_pos
            zuck.y_pos = player.y_pos
          } else {
            zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor);

            zuck.y_pos = objects[i].y_pos + objects[i].height / 2 + zuck.height / 2
            zuck.x_pos += zuck.velocity.x;
          }
        }

      } else {
        // Move zuck with a constant speed towards the player
        zuck.velocity = p5.Vector.sub(createVector(player.x_pos, player.y_pos), createVector(zuck.x_pos, zuck.y_pos));
        zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor);

        zuck.x_pos += zuck.velocity.x;
        zuck.y_pos += zuck.velocity.y;
      }

      zuck.velocity.setMag(zuck.speed * deltaTime * speed_factor)

      if (abs(zuck.velocity.x) > 10) {
        console.log("SE HER")
        console.log("SE HER")
        console.log(zuck.velocity)
      }

    }
  }
}

let cookies = []

setInterval(createCookie, 5000)

function createCookie() {
  let cookie = new Cookie(zuck.x_pos, zuck.y_pos, player)
  cookies.push(cookie)
}

class Cookie {
  constructor(x, y, target) {
    this.position = createVector(x, y)
    this.velocity = p5.Vector.sub(createVector(target.x_pos, target.y_pos), this.position)
    this.velocity.setMag(4.5 * speed_factor)

    this.height = 30
    this.width = 30

    this.x_pos = this.position.x
    this.y_pos = this.position.y

    this.returned = false
  }

  update() {
    this.x_pos += this.velocity.x;
    this.y_pos += this.velocity.y;
  }

  display() {
    fill(255, 0, 0);
    image(cookie_bilde, this.x_pos, this.y_pos, this.width, this.height);
  }

  isOffscreen() {
    return (
      this.x_pos < 0 ||
      this.x_pos > width ||
      this.y_pos < 0 ||
      this.y_pos > height
    )
  }
}

let viruses = []

setInterval(createVirus, 1200)

function createVirus() {
  let virus = new Virus(zuck.x_pos, zuck.y_pos, player)
  viruses.push(virus)
}

class Virus {
  constructor(x, y, target) {
    this.position = createVector(x, y)
    this.velocity = p5.Vector.sub(createVector(target.x_pos, target.y_pos), this.position)
    this.velocity.setMag(15 * (speed_factor) / 2)

    this.height = 12
    this.width = 12

    this.x_pos = this.position.x
    this.y_pos = this.position.y
  }

  update() {
    this.x_pos += this.velocity.x
    this.y_pos += this.velocity.y
  }

  display() {
    fill(255, 0, 0)
    image(virus_bilde, this.x_pos, this.y_pos, this.width, this.height)
  }

  isOffscreen() {
    return (
      this.x_pos < 0 ||
      this.x_pos > width ||
      this.y_pos < 0 ||
      this.y_pos > height
    )
  }
}

// Zucker end

// Setup

let stage = 0

let score = document.getElementById("score")
let new_score = 0

function addScore() {

  new_score = Math.round((((25000) / (dist(player.x_pos, player.y_pos, zuck.x_pos, zuck.y_pos) + 200)) + 2) / 15)
  score.innerHTML = parseInt(score.innerHTML) + new_score

  speed_factor = 4.5 / (1 + (4 * (2.7 ** (-0.00005 * parseInt(score.innerHTML)))))

  //console.log(speed_factor)
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER)
  imageMode(CENTER)
  textAlign(CENTER)

  score.innerHTML = "0"
}

function draw() {

  frameRate(30)

  if (antall_bortgjemminger > 0) {
    closeButtonDimensions += 0.09

    closeButton.style.width = closeButtonDimensions + 'px'
    closeButton.style.height = closeButtonDimensions + 'px'
  } 

  if (!isPaused) {
    background(140, 177, 196)   //skyblå
    rectMode(CENTER)

    //bakgrunn ramme
    noFill()
    stroke(0)
    strokeWeight(15)
    rect(width / 2, height / 2, width, height)

    if (stage == 0) {
      game()
    }

    keyPressed()

    zuck_move()

    addScore()

 

    let cookiesToRemove = [];

    for (let i = cookies.length - 1; i >= 0; i--) {
      cookies[i].update()
      cookies[i].display()

      for (let j = 0; j < objects.length; j++) {
        if (CollisionDetection(cookies[i], objects[j])) {
          cookiesToRemove.push(i)
        }
      }

      if (cookies[i].isOffscreen()) {
        cookiesToRemove.push(i)
      } else if (dist(player.x_pos, player.y_pos, cookies[i].x_pos, cookies[i].y_pos) < 25 && !cookies[i].returned) {
        cookiePopUp(cookies[i])
        cookies[i].returned = true
      } else if (dist(zuck.x_pos, zuck.y_pos, cookies[i].x_pos, cookies[i].y_pos) < 30 && cookies[i].returned) {
        gainLife()
        cookiesToRemove.push(i)
      }
    }

    // Remove marked cookies
    for (let i = cookiesToRemove.length - 1; i >= 0; i--) {
      cookies.splice(cookiesToRemove[i], 1)
    }

    let virusesToRemove = [];

    for (let i = viruses.length - 1; i >= 0; i--) {
      viruses[i].update()
      viruses[i].display()

      for (let j = 0; j < objects.length; j++) {
        if (CollisionDetection(viruses[i], objects[j])) {
          virusesToRemove.push(i)
        }
      }

      if (viruses[i].isOffscreen()) {
        virusesToRemove.push(i)
      } else if (dist(player.x_pos, player.y_pos, viruses[i].x_pos, viruses[i].y_pos) < 10) {
        virusesToRemove.push(i)
        loseLife()
      }
    }

    // Remove marked cookies
    for (let i = virusesToRemove.length - 1; i >= 0; i--) {
      viruses.splice(virusesToRemove[i], 1)
    }

    // zuck vibrasjon (for å ikke bli stuck på hjørner)

    zuck.x_pos += (Math.round(Math.random()) * 2 - 1) * 1
    zuck.y_pos += (Math.round(Math.random()) * 2 - 1) * 1
  }

  // Setup end  

  function game() {
    // Legger inn bokser

    for (i = 0; i < objects.length; i++) {
      stroke(0)
      strokeWeight(1)
      fill(237, 238, 234)
      rect(objects[i].x_pos, objects[i].y_pos, objects[i].width, objects[i].height)
    }

    // Lager spiller
    stroke(0)
    strokeWeight(2)
    fill(150, 0, 170)
    image(rasmus_bilde, player.x_pos, player.y_pos, player.width, player.height)

  }

}

let player_speed = 5.5

function keyPressed() {

  // Note: keyPressed() is called once when a key is first pressed down.
  // keyIsDown() is used in draw() to continuously check if a key is being held down.

  for (let i = 0; i < objects.length; i++) {
    let collisionType = boxCollision(player, objects[i])
    if (collisionType === "top" && keyIsDown(UP_ARROW) && (player.y_pos - player.height / 2) - 10 > 0) {
      return
    }
    if (collisionType === "bottom" && keyIsDown(DOWN_ARROW) && (player.y_pos + player.height / 2) + 10 < canvasHeight) {
      return
    }
    if (collisionType === "left" && keyIsDown(LEFT_ARROW) && (player.x_pos - player.width / 2) - 10 > 0) {
      return
    }
    if (collisionType === "right" && keyIsDown(RIGHT_ARROW) && (player.x_pos + player.width / 2) + 10 < canvasWidth) {
      return
    }
  }

  if (keyIsDown(LEFT_ARROW) && (player.x_pos - player.width / 2) - 10 > 0) {
    player.x_pos -= player_speed;
  }
  if (keyIsDown(RIGHT_ARROW) && (player.x_pos + player.width / 2) + 10 < canvasWidth) {
    player.x_pos += player_speed;
  }
  if (keyIsDown(UP_ARROW) && (player.y_pos - player.height / 2) - 10 > 0) {
    player.y_pos -= player_speed;
  }
  if (keyIsDown(DOWN_ARROW) && (player.y_pos + player.height / 2) + 10 < canvasHeight) {
    player.y_pos += player_speed;
  }
}

function boxCollision(player, obj) {
  if (CollisionDetection(player, obj)) {

    let player_border = {
      top: player.y_pos - player.height / 2,
      right: player.x_pos + player.width / 2,
      bottom: player.y_pos + player.height / 2,
      left: player.x_pos - player.width / 2
    }

    //console.log(player_border)

    let obj_border = {
      top: obj.y_pos - obj.height / 2,
      right: obj.x_pos + obj.width / 2,
      bottom: obj.y_pos + obj.height / 2,
      left: obj.x_pos - obj.width / 2
    }

    //console.log(obj_border)

    var collisionType = ""

    if (player_border.bottom >= obj_border.top && player_border.top < obj_border.top) {
      collisionType = "bottom"
    } else if (player_border.top <= obj_border.bottom && player_border.bottom > obj_border.bottom) {
      collisionType = "top"
    } else if (player_border.right >= obj_border.left && player_border.left < obj_border.left) {
      collisionType = "right"
    } else if (player_border.left <= obj_border.right && player_border.right > obj_border.right) {
      collisionType = "left"
    }

    //console.log(collisionType)
    return collisionType


  } else {
    return null
  }
}

function CollisionDetection(obj1, obj2) {

  if (
    obj1.y_pos - obj1.height / 2 < obj2.y_pos + obj2.height / 2 &&
    obj1.y_pos + obj1.height / 2 > obj2.y_pos - obj2.height / 2 &&
    obj1.x_pos - obj1.width / 2 < obj2.x_pos + obj2.width / 2 &&
    obj1.x_pos + obj1.width / 2 > obj2.x_pos - obj2.width / 2

  ) {

    //console.log('kollisjon')

    return true
  } else {
    return false
  }

}

let life_1 = document.getElementById("liv1")
let life_2 = document.getElementById("liv2")
let life_3 = document.getElementById("liv3")
let life_4 = document.getElementById("liv4")

remaining_lives = [life_1, life_2, life_3, life_4]
lost_lives = []

function loseLife() {
  console.log('mistet et liv :(')
  if (remaining_lives.length > 1) {
    remaining_lives[remaining_lives.length - 1].style.color = "gray"
    lost_lives.push(remaining_lives.pop())
  } else {    
    remaining_lives = [life_1, life_2, life_3, life_4]
    lost_lives = []
    playerLost()
  }
}

function gainLife() {
  if (lost_lives.length > 0) {
    lost_lives[lost_lives.length - 1].style.color = "red"
    remaining_lives.push(lost_lives.pop())
  }
}

let lossPopup = document.getElementById("loss_popup")
let finalScore = document.getElementById("final_score")

function playerLost() {
  hidePopup()
  isPaused = true

  lossPopup.style.display = "flex"
  finalScore.innerHTML = score.innerHTML
}

let pauseButton = document.getElementById("pauseButton")
let acceptButton = document.getElementById("acceptButton")
let cookiePopUpHTML = document.getElementById("cookie_popup")
let closeButton = document.getElementById("kryss")

pauseButton.addEventListener("click", function () {
  if (!isPaused) {
    isPaused = true
  } else {
    isPaused = false
  }
})

let antall_bortgjemminger = 0
let closeButtonDimensions = 12

closeButton.addEventListener("mouseover", function() {
  antall_bortgjemminger += 1
  closeButtonDimensions = 12

  closeButton.style.width = closeButtonDimensions + "px"
  closeButton.style.height = closeButtonDimensions + "px"

  if (antall_bortgjemminger < 4) {
    closeButton.style.top = Math.floor(Math.random() * 465) + 25 + 'px'
    closeButton.style.right = Math.floor(Math.random() * 420) + 25 + 'px'
  } else {
    closeButton.style.top = 25 + 'px'
    closeButton.style.right = 25 + 'px'
  }
})

closeButton.addEventListener("click", function () {
  hidePopup()
  isPaused = false
  antall_bortgjemminger = 0
})

acceptButton.addEventListener("click", function () {
  hidePopup()
  playerLost()
})

function hidePopup() {
  cookiePopUpHTML.className = "hide"
  setTimeout(function () {cookiePopUpHTML.style.display = "none"}, 1000)
}

function cookiePopUp(cookie) {
  isPaused = true
  
  cookiePopUpHTML.style.display = "block"
  cookiePopUpHTML.className = "show"

  cookie.velocity.x = cookie.velocity.x * -1
  cookie.velocity.y = cookie.velocity.y * -1
}

let restartButton = document.getElementById("restart_knapp")
let allLives = document.querySelectorAll("fa-heart")

restartButton.addEventListener("click", function () {
  score.innerHTML = "0"
  lossPopup.style.display = "none"
  speed_factor = 1

  player.x_pos = 140
  player.y_pos = 500

  zuck.x_pos = canvasWidth / 2
  zuck.y_pos = canvasHeight / 2

  isPaused = false

  life_1.style.color = "red"
  life_2.style.color = "red"
  life_3.style.color = "red"
  life_4.style.color = "red"

  remaining_lives = [life_1, life_2, life_3, life_4]
  lost_lives = []

  viruses = []
  cookies = []
})

window.addEventListener("keydown", function(e) {
  if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
      e.preventDefault();
  }
}, false);

// TO DO:
// Highscore?