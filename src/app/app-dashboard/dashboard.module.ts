import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DashRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { AppMapComponent } from '../views/user-home/app-map.component';
import { ChildListComponent } from '../views/child-list/child-list.component';
import { SupportComponent } from '../views/support/support.component';
import {NavbarComponent} from'../shared/navbar/navbar.component'
import {AsideParentComponent} from'../shared/aside/aside-parent/aside-parent.component'
import { AsideAdminComponent } from '../shared/aside/aside-admin/aside-admin.component';
import { AsideHealthCenterComponent } from '../shared/aside/aside-health-center/aside-health-center.component';
import { ParentListComponent } from '../views/parent-list/parent-list.component';
import { VaccineListComponent } from '../views/vaccine-list/vaccine-list.component';
import { ReservationListComponent } from '../views/reservation-list/reservation-list.component';
import { CenterListComponent } from '../views/center-list/center-list.component';
import {AddCenterComponent} from'../views/add-center/add-center.component'
import { AddVaccineComponent } from '../views/add-vaccine/add-vaccine.component';
import { AddCapacityComponent } from '../views/add-capacity/add-capacity.component';
import { AddDateCapacityComponent } from '../views/add-date-capacity/add-date-capacity.component';
import {DetailsComponent} from '../views/details/details.component'
import { ReservationsMenuComponent } from '../views/reservations-menu/reservations-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    AppMapComponent,
    ChildListComponent,
    NavbarComponent,
    DetailsComponent,
    SupportComponent,
    AsideParentComponent,
    AsideAdminComponent,
    AsideHealthCenterComponent,
    ParentListComponent,
    VaccineListComponent,
    ReservationListComponent,
    ReservationsMenuComponent,
    CenterListComponent,
    AddCenterComponent,
    AddVaccineComponent,
    AddCapacityComponent,
    AddDateCapacityComponent

  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule
  ],
  exports:[   
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule

  ],
})
export class DashboardModule { }
