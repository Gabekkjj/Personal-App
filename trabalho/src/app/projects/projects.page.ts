import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: false
})
export class ProjectsPage {
  constructor(private router: Router) {}

  openDetail(projectId: string) {
    this.router.navigate(['/project-detail', projectId]);
  }
}