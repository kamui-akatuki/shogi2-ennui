import { PieceType } from "shogi2-types";

export const infected_king1=new PieceType(
  "infected_king",
  "王",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
export const infected_king2=new PieceType(
  "infected_king",
  "玉",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1},{x:1,y:0},{x:0,y:1},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
const infected_promoted_bishop=new PieceType(
  "infected_promoted_bishop",
  "竜馬",
  {
    absolute:[],
    relative:[
      {x:1,y:1}, {x:2,y:2}, {x:3,y:3}, {x:4,y:4}, {x:5,y:5}, {x:6,y:6}, {x:7,y:7}, {x:8,y:8},
      {x:1,y:-1}, {x:2,y:-2}, {x:3,y:-3}, {x:4,y:-4}, {x:5,y:-5}, {x:6,y:-6}, {x:7,y:-7}, {x:8,y:-8},
      {x:-1,y:1}, {x:-2,y:2}, {x:-3,y:3}, {x:-4,y:4}, {x:-5,y:5}, {x:-6,y:6}, {x:-7,y:7}, {x:-8,y:8},
      {x:-1,y:-1}, {x:-2,y:-2}, {x:-3,y:-3}, {x:-4,y:-4}, {x:-5,y:-5}, {x:-6,y:-6}, {x:-7,y:-7}, {x:-8,y:-8},
      {x:0,y:1},{x:0,y:-1},{x:1,y:0},{x:-1,y:0}
    ]
  },
  false
);
export const infected_bishop=new PieceType(
  "infected_bishop",
  "角",
  {
    absolute:[],
    relative:[
      {x:1,y:1}, {x:2,y:2}, {x:3,y:3}, {x:4,y:4}, {x:5,y:5}, {x:6,y:6}, {x:7,y:7}, {x:8,y:8},
      {x:1,y:-1}, {x:2,y:-2}, {x:3,y:-3}, {x:4,y:-4}, {x:5,y:-5}, {x:6,y:-6}, {x:7,y:-7}, {x:8,y:-8},
      {x:-1,y:1}, {x:-2,y:2}, {x:-3,y:3}, {x:-4,y:4}, {x:-5,y:5}, {x:-6,y:6}, {x:-7,y:7}, {x:-8,y:8},
      {x:-1,y:-1}, {x:-2,y:-2}, {x:-3,y:-3}, {x:-4,y:-4}, {x:-5,y:-5}, {x:-6,y:-6}, {x:-7,y:-7}, {x:-8,y:-8},
    ]
  },
  false,
  infected_promoted_bishop
);
const infected_promoted_rook=new PieceType(
  "infected_promoted_rook",
  "竜王",
  {
    absolute:[],
    relative:[
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},
      {x:-1,y:0}, {x:-2,y:0}, {x:-3,y:0}, {x:-4,y:0}, {x:-5,y:0}, {x:-6,y:0}, {x:-7,y:0}, {x:-8,y:0},
      {x:0,y:1}, {x:0,y:2}, {x:0,y:3}, {x:0,y:4}, {x:0,y:5}, {x:0,y:6}, {x:0,y:7}, {x:0,y:8},
      {x:0,y:-1}, {x:0,y:-2}, {x:0,y:-3}, {x:0,y:-4}, {x:0,y:-5}, {x:0,y:-6}, {x:0,y:-7}, {x:0,y:-8},
      {x:1,y:1},{x:1,y:-1},{x:-1,y:1},{x:-1,y:-1}
    ]
  },
  false
);
export const infected_rook=new PieceType(
  "infected_rook",
  "飛",
  {
    absolute:[],
    relative:[
      {x:1,y:0}, {x:2,y:0}, {x:3,y:0}, {x:4,y:0}, {x:5,y:0}, {x:6,y:0}, {x:7,y:0}, {x:8,y:0},
      {x:-1,y:0}, {x:-2,y:0}, {x:-3,y:0}, {x:-4,y:0}, {x:-5,y:0}, {x:-6,y:0}, {x:-7,y:0}, {x:-8,y:0},
      {x:0,y:1}, {x:0,y:2}, {x:0,y:3}, {x:0,y:4}, {x:0,y:5}, {x:0,y:6}, {x:0,y:7}, {x:0,y:8},
      {x:0,y:-1}, {x:0,y:-2}, {x:0,y:-3}, {x:0,y:-4}, {x:0,y:-5}, {x:0,y:-6}, {x:0,y:-7}, {x:0,y:-8},
    ]
  },
  false,
  infected_promoted_rook
);
const infected_promoted_knight=new PieceType(
  "infected_promoted_knight",
  "成桂",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
export const infected_knight=new PieceType(
  "infected_knight",
  "桂",
  {
    absolute:[],
    relative:[ {x:1,y:2}, {x:-1,y:2} ]
  },
  true,
  infected_promoted_knight
);
const infected_promoted_pawn=new PieceType(
  "infected_promoted_pawn",
  "と金",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
export const infected_pawn=new PieceType(
  "infected_pawn",
  "歩",
  {
    absolute:[],
    relative:[{x:0,y:1}]
  },
  false,
  infected_promoted_pawn
);
export const infected_gold=new PieceType(
  "infected_gold",
  "金",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
export const infected_silver=new PieceType(
  "infected_silver",
  "銀",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:1,y:-1},{x:-1,y:-1}]
  },
  false
);
const infected_promoted_lance=new PieceType(
  "infected_promoted_lance",
  "成香",
  {
    absolute:[],
    relative:[{x:1,y:1},{x:0,y:1},{x:-1,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1}]
  },
  false
);
export const infected_lance=new PieceType(
  "infected_lance",
  "香",
  {
    absolute:[],
    relative:[ {x:0,y:1}, {x:0,y:2}, {x:0,y:3}, {x:0,y:4}, {x:0,y:5}, {x:0,y:6}, {x:0,y:7}, {x:0,y:8}, ]
  },
  false,
  infected_promoted_lance
);
