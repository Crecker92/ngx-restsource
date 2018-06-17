import { ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CONFIG, RestsourceConfigFactory, USERCONFIGOPTIONS} from './restsource.config';
import {RestsourceConfigOptions} from './utils/interfaces/restsource-config-options';
import {RestsourcePathResolverService} from './utils/services/restsource-path-resolver.service';

@NgModule({
    imports: [
        HttpClientModule
    ]
})
export class RestsourceModule {

    static forRoot(config: RestsourceConfigOptions): ModuleWithProviders {
        return {
            ngModule: RestsourceModule,
            providers: [
                {provide: USERCONFIGOPTIONS, useValue: config},
                {provide: CONFIG, useFactory: RestsourceConfigFactory, deps: [USERCONFIGOPTIONS, RestsourcePathResolverService]}
            ]
        };
    }

}
