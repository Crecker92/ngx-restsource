import {Injectable} from '@angular/core';
import {RestsourceQueryParams} from '../interfaces/restsource-query-params';
import {HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestsourceQueryParamsResolverService {

    resolve(params: RestsourceQueryParams): HttpParams {
        let resultParams: HttpParams = null;

        if (params) {
            const formattedParams: { [param: string]: string | string[] } = {};

            for (const paramName of Object.keys(params)) {
                formattedParams[paramName] = String(params[paramName]);
            }

            resultParams = new HttpParams({fromObject: formattedParams});
        }

        return resultParams;
    }
}
