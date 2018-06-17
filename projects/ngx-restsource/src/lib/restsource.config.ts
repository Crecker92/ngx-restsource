import {InjectionToken} from '@angular/core';
import {RestsourceConfigOptions} from './utils/interfaces/restsource-config-options';
import {RestsourcePathResolverService} from './utils/services/restsource-path-resolver.service';
import {RestsourceResource} from './utils/interfaces/restsource-resource';
import {RestsourceHttpHeaders} from './utils/interfaces/restsource-http-headers';
import {RestsourceHttpOptions} from './utils/interfaces/restsource-http-options';

export const USERCONFIGOPTIONS = new InjectionToken<RestsourceConfigOptions>('USERCONFIGOPTIONS');
export const CONFIG = new InjectionToken<RestsourceConfig>('CONFIG');

export function RestsourceConfigFactory(config: RestsourceConfigOptions, pathResolver: RestsourcePathResolverService) {
    return new RestsourceConfig(config, pathResolver);
}

export class RestsourceConfig {
    private baseURL: string;
    private resources: RestsourceResource[];
    private options: RestsourceHttpOptions;

    constructor(private config: RestsourceConfigOptions,
                private pathResolver: RestsourcePathResolverService) {
        this.baseURL = config.baseURL;
        this.resources = config.resources;
        this.options = {} as RestsourceHttpOptions;
        this.options.headers = this.config.headers;
    }

    getBaseURL(): string {
        return this.baseURL;
    }

    getResources(): RestsourceResource[] {
        return this.resources;
    }

    getResource(id: string): RestsourceResource {
        for (const resource of this.getResources()) {
            if (resource.id === id) {
                return resource;
            }
        }
        return null;
    }

    isValidResource(id: string): boolean {
        return this.getResource(id) !== null;
    }

    getResourceBaseURL(id: string): string {
        const resource: RestsourceResource = this.getResource(id);
        return resource ? this.getBaseURL() + '/' + this.pathResolver.resolve(resource.path) : null;
    }

    getDefaultOptions() {
        return this.options;
    }
}
