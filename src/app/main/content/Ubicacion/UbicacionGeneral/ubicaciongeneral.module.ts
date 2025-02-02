// Angular Imports
import { NgModule } from '@angular/core';
import { UbicacionGeneralComponent } from './ubicaciongeneral.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatFormFieldModule,MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatStepperModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { TextMaskModule } from 'angular2-text-mask';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule} from 'agm-direction'; // agm-direction
const routes: Routes = [
    {
        path: 'ubicaciongeneral',
        component: UbicacionGeneralComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        MatDialogModule,
        FuseSharedModule,
        TextMaskModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        AgmCoreModule,
        AgmDirectionModule
    ],
    declarations: [
        UbicacionGeneralComponent,
    ],
    exports: [
        UbicacionGeneralComponent,
    ]
})
export class UbicacionGeneralModule {

}
