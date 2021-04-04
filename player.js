
class Player {




    constructor(){
        this.distance=0;
        this.index=null;
        this.name=null;

    }
   
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
  
   
   
   
   
   
    getCount(){
   
   
      var playerCountRef = database.ref('playerCount');
   
   
      playerCountRef.on("value",function(data){
   
   
        playerCount = data.val();
   
   
      })
   
   
    }
   
   
   
   
   
   
   
    updateCount(count){
   
   
      database.ref('/').update({
   
   
        playerCount: count
   
   
      });
   
   
    }
   
   
   
   
   
   
   
    update(){
   
   
        var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
   

        name:this.name,
        distance:this.distance
   
   
      });
   
   
    }
    deletePlayerAll(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.remove();
    }
   
   }
   
   
   