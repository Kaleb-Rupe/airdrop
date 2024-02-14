import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import * as prompt from "prompt-sync";

let keypair = Keypair.generate();
console.log(
  `You've generated a new Solana wallet: ${keypair.publicKey.toBase58()} [${
    keypair.secretKey
  }]`
);
