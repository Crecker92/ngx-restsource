import {Injectable} from '@angular/core';
import {RestsourceHttpHeaders} from '../interfaces/restsource-http-headers';
import {HttpHeaders} from '@angular/common/http';
import {RestsourceHttpHeader} from '../types/restsource-http-header';

@Injectable({
    providedIn: 'root'
})
export class RestsourceHttpHeadersResolverService {

    resolve(headers: RestsourceHttpHeaders, defaultHeaders?: RestsourceHttpHeaders): HttpHeaders {
        let resultHeaders: HttpHeaders = null;

        if (headers || defaultHeaders) {
            resultHeaders = new HttpHeaders();
        }

        if (defaultHeaders) {
            for (const headerName of Object.keys(defaultHeaders)) {
                resultHeaders = resultHeaders.set(headerName, this.formatHeader(defaultHeaders[headerName]));
            }
        }

        if (headers) {
            for (const headerName of Object.keys(headers)) {
                resultHeaders = resultHeaders.set(headerName, this.formatHeader(headers[headerName]));
            }
        }

        return resultHeaders;
    }

    private formatHeader(header: RestsourceHttpHeader): string | string[] {
        const isArray = Array.isArray(header);

        if (isArray) {
            const result: string[] = [];

            for (const item of <any[]> header) {
                result.push(String(item));
            }

            return result;
        } else {
            return String(header);
        }
    }

}
