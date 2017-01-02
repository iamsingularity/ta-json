import {getDefinition} from '../classes/object-definition';

export function JsonElementType(type:Function) {
    return function(target:any, key:string):void {
        const property = getDefinition(target.constructor).getProperty(key);

        property.type = type;
    };
}