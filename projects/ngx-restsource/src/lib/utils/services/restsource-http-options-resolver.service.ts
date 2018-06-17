import {Injectable} from '@angular/core';
import {RestsourceHttpOptions} from '../interfaces/restsource-http-options';
import {RestsourceHttpHeadersResolverService} from './restsource-http-headers-resolver.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {RestsourceQueryParamsResolverService} from './restsource-query-params-resolver.service';

@Injectable({
    providedIn: 'root'
})
export class RestsourceHttpOptionsResolverService {

    constructor(private httpHeadersResolver: RestsourceHttpHeadersResolverService,
                private queryParamsResolver: RestsourceQueryParamsResolverService) {
    }

    resolve(options: RestsourceHttpOptions, defaultOptions?: RestsourceHttpOptions): { headers: HttpHeaders, params: HttpParams, body: any } {
        const opts = options || {} as RestsourceHttpOptions;
        const defaultOpts = defaultOptions || {} as RestsourceHttpOptions;
        return {
            headers: this.httpHeadersResolver.resolve(opts.headers, defaultOpts.headers),
            params: this.queryParamsResolver.resolve(opts.params),
            body: opts.body
        };
    }

}
