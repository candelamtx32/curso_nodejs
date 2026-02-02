
import { findHeroeById } from "./services/hero.service";


const hero = findHeroeById(1);
console.log((hero?.name ?? 'No hero found'));
