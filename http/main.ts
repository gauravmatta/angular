import {Component, Input, Injectable} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import { Observable } from 'rxjs/Observable';
import {Response,Http, HTTP_PROVIDERS} from  'angular2/http';

@Injectable()
class StudentSvc {
constructor(private http: Http){}
getStudents(): Observable<Response> {
  return this.http.get('https://reqres.in/api/users');
}
}

/**
 * Define the Component.  1 b
 */
@Component({
  selector: 'app',
  templateUrl : 'templates/app.tpl.html',
  providers: [HTTP_PROVIDERS,StudentSvc]
})
class StarterTemplate  {
  private name: string;
  private students:Observable<Response>;
  constructor (studentSvc: StudentSvc) {
    this.name = 'Http Service Example';
    studentSvc.getStudents().subscribe((resp)=> {
      this.students = resp.json().data;
    });
  }
}

/**
 * Bootstrap the app with `StarterTemplate`.
 */
bootstrap(StarterTemplate, []);
