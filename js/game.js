class Game{
    constructor(){
    }

     getState(){
         var gameStateRef = database.ref('gameState');
         gameStateRef.on("value",(data)=>{
             gameState = data.val();
         });
     }

     update(state){
         database.ref('/').update({
             gameState: state
         })
     }

     async start(){
         if(gameState === 0){
             player = new Player
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }

             form = new Form();
             form.display();
            }
        }

    play(){
        form.hide();
        text("Start of the Game!", 120, 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined ){
            var position = 130;
            for(var plr in allPlayers){
                if(plr === 'Player' + player.index)
                    fill('red');

                    else

                    fill('black');
                    position += 20;
                    text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, position);


                

                

            }
            

        }

        if(keyIsDown(UP_ARROW)&& player.index !== null){
            player.distance += 50;
            player.update();
            
        }

    }
}