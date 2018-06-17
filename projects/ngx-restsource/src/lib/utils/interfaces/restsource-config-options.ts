import {RestsourceResource} from './restsource-resource';
import {RestsourceHttpHeaders} from './restsource-http-headers';

export interface RestsourceConfigOptions {
    baseURL: string;
    resources: RestsourceResource[];
    headers?: RestsourceHttpHeaders;
}
