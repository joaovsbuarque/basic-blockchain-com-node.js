const Block = require('./block.js');

const block = new Block('7657', '234237435DSHFSDGBFAHSD21', 'HDSAGDYUG34G23HG42354HBE', '100');
console.log(block.toString());
console.log(Block.genesis().toString());
const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());
