// unidade fundamental do bloco

// composto 4 dados fundamentais
// timestamp
// lasthash
// hash
// dados -> data

const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data){

        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block =
        Timestamp = ${this.timestamp}
        lstHash = ${this.lastHash.substring(0, 10)}
        hash = ${this.hash.substring(0, 10)}
        data = ${this.data}`;
    }

    static genesis(){

        return new this('Genesis time', '---------', 'FHSDAGFSDDHGF', []);

    }

    static mineBlock(lastBlock, data){

        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash  = 'a-fazer-bloco'

        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp} ${lastHash} ${data}`).toString();
    }

    //SHA - 256

}

module.exports = Block;
