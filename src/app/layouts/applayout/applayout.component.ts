import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-blank-layout',
    templateUrl: './applayout.component.html',
    styleUrls: ['./applayout.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLayoutComponent implements OnInit {
    sideMenuItems;
    togglenavbar = false;

    @ViewChild('sidenav') public sidenav: MatSidenav;
    constructor(private route: ActivatedRoute, private router: Router,
        public authService: AuthService,
        private toastr: ToastrService) {
    }

    ngOnInit() {
        this.sideMenuItems = environment.menuItems;
        this.togglenavbar = this.route.snapshot.data['navbar'];
    }

    ngAfterViewInit() {
        if (this.togglenavbar) {
            this.sidenav.toggle();
        }
    }

    logout() {
        this.authService.logOut()
            .then(() => {
                this.toastr.info('Sesion cerrada correctamente', '¡Hasta Luego!');
                this.router.navigate([''])
            });
        ;
    }
}