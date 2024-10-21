import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/menu.interface';
import { MediaMatcher } from '@angular/cdk/layout';
import { MENU } from 'src/app/constants/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = MENU;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1024)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    console.log(this.menu);
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  abrirFormularioGoogle() {}

  logout(e: any) {}
}
