class Game {
  constructor() {}

  start() {
    myform = new Form();
    myform.display();

    myplayer = new Player();
    myplayer.getcount();

    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage("car1", car1Image);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2Image);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  getstate() {
    var gamestateRef = database.ref("gamestate");
    gamestateRef.on("value", (data) => {
      mygamestate = data.val();
    });
  }

  updatestate(statenumber) {
    database.ref("/").update({
      gamestate: statenumber,
    });
  }
  handleElement() {
    myform.title.position(40, 50);
    myform.title.class("resetTitle");
  }

  play() {
    myform.hide();

    this.handleElement();

    Player.getPlayersinfo();
    if (allplayers !== undefined) {
      image(trackImage, 0, -height * 5, width, height * 6);
      // getting active players in current  window
      var index = 0;

      for (var i in allplayers) {
        index = index + 1;

        var x = allplayers[i].positionX;
        var y = height - allplayers[i].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        if (index === myplayer.index) {
          stroke(10);
          strokeWeight("black");
          fill("red");
          ellipse(x, y, 70, 70);
        }
      }
    }

    drawSprites();
  }

  end() {}
}
