class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getcount() {
    var PlayerCountRef = database.ref("PlayerCount");
    PlayerCountRef.on("value", (data) => {
      myplayercount = data.val();
    });
  }

  addplayers() {
    var playerindex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionY = width / 2 + 100;
    }
    database.ref(playerindex).set({
      name: this.name,
      index: this.index,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  updatecount(countnumber) {
    database.ref("/").update({
      PlayerCount: countnumber,
    });
  }

  //get x and y position of players
  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", (data) => {
      var distance = data.val();
      this.positionX = distance.positionX;
      this.positionY = distance.positionY;
    });
  }

  updatePlayers() {
    var playerRef = database.ref('players/player'+ this.index)
    database.ref(playerRef).update({
      name: this.name,
      positionX:  this.positionX,
      positionY: this.positionY,
      index: this.index
    })
   
  }

  static getPlayersinfo() {
    var playerRef = database.ref('players')
    playerRef.on('value',(data)=>{
      allplayers=data.val()

    })

  }
}
