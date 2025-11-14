import { Event, FileRequest, GameData, ModBase, MoveEvent, Player, Request, RequestUpdater, SquareRequest, StartEvent } from "shogi2-types";
import fs from "fs";

export default class Ennui extends ModBase{
  constructor(){
    super();
  }
  onStart(_data:GameData,_before:GameData,_event:StartEvent,_sender:Player,_updater:RequestUpdater):{r:Request[];e:Event[];}{
    const request=new FileRequest(
      "both",
      "coexistence",
      "effect1",
      fs.readFileSync("src/mods/shogi2-ennui/src/assets/effect1.png").toString("base64"),
      "image/png"
    );
    return {r:[request],e:[]};
  }
  onMove(_d: GameData, before: GameData, event: MoveEvent, _sender: Player, _updater: RequestUpdater): { r: Request[]; e: Event[]; } {
    const data={...before};
    const {x,y}=event.to;
    const index=data.board.squares.findIndex((square)=>{
      return square.position.x===x && square.position.y===y;
    });
    const square=data.board.squares[index];
    square.image="effect1";
    const request=new SquareRequest("both","obedience",square);
    return {r:[request],e:[]};
  }
};
