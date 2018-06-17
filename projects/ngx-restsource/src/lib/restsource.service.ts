import {Inject, Injectable} from '@angular/core';
import {CONFIG, RestsourceConfig} from './restsource.config';
import {RestsourcePathResolverService} from './utils/services/restsource-path-resolver.service';
import {RestsourcePath} from './utils/types/restsource-path';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {RestsourceHttpMethod} from './utils/types/restsource-http-method';
import {RestsourceHttpOptions} from './utils/interfaces/restsource-http-options';
import {RestsourceHttpOptionsResolverService} from './utils/services/restsource-http-options-resolver.service';

@Injectable({
    providedIn: 'root'
})
export class RestsourceService {

    constructor(@Inject(CONFIG) private config: RestsourceConfig,
                private pathResolver: RestsourcePathResolverService,
                private httpOptionsResolver: RestsourceHttpOptionsResolverService,
                private httpClient: HttpClient) {
    }

    request<T>(method: RestsourceHttpMethod, url: string, options: RestsourceHttpOptions): Observable<T> {
        return Observable.create(observer => {
            const defaultOptions = this.config.getDefaultOptions();
            const httpOptions = this.httpOptionsResolver.resolve(options, defaultOptions) || {};

            this.httpClient.request<T>(method, url, httpOptions).subscribe(
                (data) => observer.next(data),
                (error) => observer.error(error),
                () => observer.complete()
            );
        });
    }

    get<T>(resourceId: string, subpath?: RestsourcePath, options?: RestsourceHttpOptions): Observable<T> {
        const resourceURL: string = this.config.getResourceBaseURL(resourceId);
        const fullURL: string = resourceURL + (subpath > 0 ? '/' + this.pathResolver.resolve(subpath) : '');
        return this.request<T>('GET', fullURL, options);
    }

    post<T>(resourceId: string, subpath?: RestsourcePath, options?: RestsourceHttpOptions): Observable<T> {
        const resourceURL: string = this.config.getResourceBaseURL(resourceId);
        const fullURL: string = resourceURL + (subpath ? '/' + this.pathResolver.resolve(subpath) : '');
        return this.request<T>('POST', fullURL, options);
    }

    put<T>(resourceId: string, subpath?: RestsourcePath, options?: RestsourceHttpOptions): Observable<T> {
        const resourceURL: string = this.config.getResourceBaseURL(resourceId);
        const fullURL: string = resourceURL + (subpath ? '/' + this.pathResolver.resolve(subpath) : '');
        return this.request<T>('PUT', fullURL, options);
    }

    patch<T>(resourceId: string, subpath?: RestsourcePath, options?: RestsourceHttpOptions): Observable<T> {
        const resourceURL: string = this.config.getResourceBaseURL(resourceId);
        const fullURL: string = resourceURL + (subpath ? '/' + this.pathResolver.resolve(subpath) : '');
        return this.request<T>('PATCH', fullURL, options);
    }

    delete<T>(resourceId: string, subpath?: RestsourcePath, options?: RestsourceHttpOptions): Observable<T> {
        const resourceURL: string = this.config.getResourceBaseURL(resourceId);
        const fullURL: string = resourceURL + (subpath ? '/' + this.pathResolver.resolve(subpath) : '');
        return this.request<T>('DELETE', fullURL, options);
    }
}
