import {Injectable} from '@angular/core';
import {RestsourcePath} from '../types/restsource-path';

@Injectable({
    providedIn: 'root'
})
export class RestsourcePathResolverService {
    resolve(path: RestsourcePath): string | number {
        if (path) {
            if (Array.isArray(path)) {
                return path.join('/');
            } else {
                return path;
            }
        }

        return '';
    }
}