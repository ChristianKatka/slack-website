import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { NavigationComponent } from './components/navbar/navigation.component';
import { SidenavBottomButtonsComponent } from './components/navbar/sidenav/bottom-buttons/bottom-buttons.component';
import { SidenavComponent } from './components/navbar/sidenav/sidenav.component';
import { SideNavTreeLinksComponent } from './components/navbar/sidenav/tree-links/tree-links.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { BooleanPipe } from './pipes/boolean.pipe';

export const components: any[] = [
  WrapperComponent,
  LoadingSpinnerComponent,
  NavigationComponent,
  NavbarComponent,
  SidenavComponent,
  LogoComponent,
  SideNavTreeLinksComponent,
  SidenavBottomButtonsComponent,
];

export const pipes: any[] = [BooleanPipe];
