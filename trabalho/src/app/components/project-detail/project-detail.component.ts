import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: false
})
export class ProjectDetailComponent implements OnInit {
  project: any;

  projects: { [key: string]: any } = {
    pwa: {
      title: 'PWA',
      description: 'PWA usando HTML, JS e CSS.',
      link: 'https://github.com/Gabekkjj/PWA_UPF',
    },
    todo: {
      title: 'Todo List',
      description: 'App de tarefas usando Ionic.',
      link: 'https://github.com/Gabekkjj/todolist',
    },
    personal: {
      title: 'Personal APP',
      description: 'App de apresentação pessoal com Ionic.',
      link: 'https://github.com/Gabekkjj/Personal-App',
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.project = this.projects[id];
  }
}