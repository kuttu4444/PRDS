import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { LoadconfigService } from './loadconfig.service';
import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BoardMembersComponent } from './board-members/board-members.component';
import { LegalStatusComponent } from './legal-status/legal-status.component';
import { ReportsComponent } from './reports/reports.component';
import { LatestComponent } from './latest/latest.component';
import { DonateComponent } from './donate/donate.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { ActivityHealthComponent } from './activity-health/activity-health.component';
import { ActivityMotherChildComponent } from './activity-mother-child/activity-mother-child.component';
import { ActivitySchoolLiteracyComponent } from './activity-school-literacy/activity-school-literacy.component';
import { PreloadFactory } from "./preload-service.factory";
import { HttpClientModule } from "@angular/common/http";
import { AwsUploadComponent } from './aws-upload/aws-upload.component';
import { ProfileComponent } from './profile/profile.component';
import { OurSupportersComponent } from './our-supporters/our-supporters.component';
import { NgJsonEditorModule } from '@maaxgr/ang-jsoneditor';
import { NaturalResourceManagmentComponent } from './natural-resource-managment/natural-resource-managment.component';
import { FarmerWelfareComponent } from './farmer-welfare/farmer-welfare.component';
import { WomenChildCareComponent } from './women-child-care/women-child-care.component';
import { OpenreportsComponent } from './openreports/openreports.component';
import { OurGalleryComponent } from './our-gallery/our-gallery.component';
import { LinkvideosComponent } from './linkvideos/linkvideos.component';
import { MembercoperativesComponent } from './membercoperatives/membercoperatives.component';
import { OurprinciplesComponent } from './ourprinciples/ourprinciples.component';
import { FederationprofileComponent } from './federationprofile/federationprofile.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ServicestomembersComponent } from './servicestomembers/servicestomembers.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { ValueadditionComponent } from './valueaddition/valueaddition.component';
import { PoolsaleComponent } from './poolsale/poolsale.component';
import { MspsaleComponent } from './mspsale/mspsale.component' 
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DynamicreportComponent } from './dynamicreport/dynamicreport.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { OurpartnersComponent } from './ourpartners/ourpartners.component';
import { CountUpModule } from 'ngx-countup';
import { FrancescoTammaComponent } from './francesco-tamma/francesco-tamma.component';
import { WomenEmpowermentComponent } from './women-empowerment/women-empowerment.component';
import { SkillTrainingComponent } from './skill-training/skill-training.component';
import { EmergencyReliefComponent } from './emergency-relief/emergency-relief.component';
import { OtherActivitiesComponent } from './other-activities/other-activities.component';
import { HolyCowComponent } from './holy-cow/holy-cow.component';
import { TrainANurseComponent } from './train-anurse/train-anurse.component';
import { GoGreenComponent } from './go-green/go-green.component';
import { AnahataStiftungComponent } from './anahata-stiftung/anahata-stiftung.component';
import { OnlylinkreportsComponent } from './onlylinkreports/onlylinkreports.component';
import { ProjectsComponent } from './projects/projects.component';
const appRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'Homepage',component:HomePageComponent},
  {path:'BoardMembers',component:BoardMembersComponent},
  {path:'LegalStatus',component:LegalStatusComponent},
  {path:'Reports',component:ReportsComponent},
  {path:'Latest',component:LatestComponent},
  {path:'Donate',component:DonateComponent},
  {path:'VisionMission',component:VisionMissionComponent},
  {path:'Health',component:ActivityHealthComponent},
  {path:'MotherChild',component:ActivityMotherChildComponent},
  {path:'School',component:ActivitySchoolLiteracyComponent},
  {path:'Others',component:ActivitiesComponent},
  {path:'Upload',component:AwsUploadComponent},
  {path:'Profile',component:ProfileComponent},
  {path:'OurSupporters',component:OurSupportersComponent},
  {path:'WomenChildCare',component:WomenChildCareComponent},
  {path:'NaturalResourceManagment',component:NaturalResourceManagmentComponent},
  {path:'FarmerWelfare',component:FarmerWelfareComponent},
  {path:'OpenReports',component:OpenreportsComponent},
  {path:'OurGallery',component:OurGalleryComponent},
  {path:'LinkVideos',component:LinkvideosComponent},
  {path:'MemberCoperatives',component:MembercoperativesComponent},
  {path:'OurPrinciples',component:OurprinciplesComponent},
  {path:'OrganizationProfile',component:FederationprofileComponent},
  {path:'SchoolEducation',component:MeetingsComponent},
  {path:'EconomicEmpowerment',component:ServicestomembersComponent},
  {path:'HealthNutrition',component:ProcurementComponent},
  {path:'ValueAddition',component:ValueadditionComponent},
  {path:'PoolSale',component:PoolsaleComponent},
  {path:'MspSale',component:MspsaleComponent},
  {path:'DynamicReport',component:DynamicreportComponent},
  {path:'CommunityWelfare',component:TrainingsComponent},
  {path:'OurSupporters',component:OurpartnersComponent},
  {path:'FrancescoTamma',component:FrancescoTammaComponent},
  {path:'WomenEmpowerment',component:WomenEmpowermentComponent},
  {path:'SkillTraining',component:SkillTrainingComponent},
  {path:'EmergencyRelief',component:EmergencyReliefComponent},
  {path:'OtherActivities',component:OtherActivitiesComponent},
  {path:'HolyCow',component:HolyCowComponent},
  {path:'TrainaNurse',component:TrainANurseComponent},
  {path:'GoGreen',component:GoGreenComponent},
  {path:'AnahataStiftung',component:AnahataStiftungComponent},
  {path:'ProjectsLink',component:OnlylinkreportsComponent},
  {path:'Projects',component:ProjectsComponent},
]
RouterModule.forRoot(appRoutes,{ preloadingStrategy:PreloadAllModules})
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ActivitiesComponent,
    BoardMembersComponent,
    LegalStatusComponent,
    ReportsComponent,
    LatestComponent,
    DonateComponent,
    VisionMissionComponent,
    ActivityHealthComponent,
    ActivityMotherChildComponent,
    ActivitySchoolLiteracyComponent,
    AwsUploadComponent,
    ProfileComponent,
    OurSupportersComponent,
    NaturalResourceManagmentComponent,
    FarmerWelfareComponent,
    WomenChildCareComponent,
    OpenreportsComponent,
    OurGalleryComponent,
    LinkvideosComponent,
    MembercoperativesComponent,
    OurprinciplesComponent,
    FederationprofileComponent,
    MeetingsComponent,
    ServicestomembersComponent,
    ProcurementComponent,
    ValueadditionComponent,
    PoolsaleComponent,
    MspsaleComponent,
    DynamicreportComponent,
    TrainingsComponent,
    OurpartnersComponent,
    FrancescoTammaComponent,
    WomenEmpowermentComponent,
    SkillTrainingComponent,
    EmergencyReliefComponent,
    OtherActivitiesComponent,
    HolyCowComponent,
    TrainANurseComponent,
    GoGreenComponent,
    AnahataStiftungComponent,
    OnlylinkreportsComponent,
    ProjectsComponent
  ],
  imports: [
    NgxExtendedPdfViewerModule,CountUpModule,BrowserModule,FormsModule, PdfViewerModule, HttpClientModule,RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),NgJsonEditorModule
  ],
  providers: [   LoadconfigService,
    {
      provide: APP_INITIALIZER,
      deps: [
        LoadconfigService
      ],
      multi: true,
      useFactory: PreloadFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
