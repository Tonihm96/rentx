// Ícones
import accelerationSvg from '../assets/acceleration.svg';
import arrowSvg from '../assets/arrow.svg';
import carSvg from '../assets/car.svg';
import energySvg from '../assets/energy.svg';
import exchangeSvg from '../assets/exchange.svg';
import forceSvg from '../assets/force.svg';
import gasolineSvg from '../assets/gasoline.svg';
import hybridSvg from '../assets/hybrid.svg';
import peopleSvg from '../assets/people.svg';
import speedSvg from '../assets/speed.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'acceleration':
      return accelerationSvg;
    case 'arrow':
      return arrowSvg;
    case 'electric_motor':
      return energySvg;
    case 'exchange':
      return exchangeSvg;
    case 'turning_diameter':
      return forceSvg;
    case 'gasoline_motor':
      return gasolineSvg;
    case 'hybrid_motor':
      return hybridSvg;
    case 'seats':
      return peopleSvg;
    case 'speed':
      return speedSvg;
    default:
      return carSvg;
  }
}
