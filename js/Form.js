class Form {
  constructor() {
    this.input=createInput('').attribute('placeholder','enter your name')
    this.button=createButton('play')
    this.greeting=createElement('h2')
    this.title = createImg(
      "../Multiplayer-v4-stage-1-activity-main/assets/title.png"
    );
  }

  setPosition() {
    this.title.position(width / 2-600, height / 4);
    this.input.position(width/2-120,height/2)
    this.button.position(width/2-100,height/2+80)
    this.greeting.position(width/2-100,height/2+80)
  }

  setStyle() {
    this.title.class("gameTitle");
    this.input.class('customInput')
    this.button.class('customButton')
    this.greeting.class('greeting')
  }
  handleButtonPressed() {
    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()

      var message = `Hello ${this.input.value()}
      <br/> waite for another player to join...!`
      this.greeting.html(message)
      myplayercount+=1
      myplayer.updatecount(myplayercount)

      myplayer.index=myplayercount
      myplayer.name=this.input.value()
      myplayer.addplayers()
      myplayer.getDistance()

    })
  }

  display() {
    this.setPosition();
    this.setStyle();
    this.handleButtonPressed();
  }

  hide(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
  }
}
