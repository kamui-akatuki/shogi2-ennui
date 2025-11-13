import { Event, FileRequest, GameData, ModBase, MoveEvent, Player, Request, RequestExpansion, RequestUpdater, SquareRequest, StartEvent } from "shogi2-types";
import fs from "fs";

export default class Ennui extends ModBase{
  constructor(){
    super();
  }
  onStart(_data:GameData,_before:GameData,_event:StartEvent,_sender:Player,_updater:RequestUpdater):{r:RequestExpansion[];e:Event[];}{
    const request=new FileRequest(
      "both",
      "coexistence",
      "effect1",
      fs.readFileSync("src/mods/shogi2-ennui/src/assets/effect1.png").toString("base64"),
      "image/png"
    );
    return {r:[{request}],e:[]};
  }
  onMove(d: GameData, _before: GameData, event: MoveEvent, _sender: Player, _updater: RequestUpdater): { r: RequestExpansion[]; e: Event[]; } {
    const data={...d};
    const {x,y}=event.to;
    const requests:Request[]=[];
    data.board.squares=data.board.squares.map((square)=>{
      if (square.position.x===x && square.position.y===y){
        const s={...square,image:"effect1"};
        const request=new SquareRequest("both","coexistence",s);
        requests.push(request);
        return s;
      }
      return square;
    });
    return {r:requests.map((r)=>({request:r,data})),e:[]};
  }
};
