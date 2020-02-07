import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('Xabbaa');

numbersCollection.sort();
charactersCollection.sort();
console.log("New way sorting numbers -> ", numbersCollection.data);
console.log("New way sorting characters -> ", charactersCollection.data);
 