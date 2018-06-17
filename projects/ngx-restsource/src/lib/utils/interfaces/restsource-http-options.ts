import {RestsourceHttpHeaders} from './restsource-http-headers';
import {RestsourceQueryParams} from './restsource-query-params';

export interface RestsourceHttpOptions {
    headers?: RestsourceHttpHeaders;
    params?: RestsourceQueryParams;
    body?: any;
}
