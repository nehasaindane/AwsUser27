import { Component} from '@angular/core';

@Component({
  selector: 'app-registration',
  template: `
  <h1>Employee Registration Page</h1><hr>
  <form>
  <table>
  <tr><td>Enter your name1</td><td><input type=text name=t1 size=20></td></tr>
  <tr><td>Enter your email</td><td><input type=text name=t2 size=20></td></tr>
  <tr><td>Enter your address</td><td><input type=text name=t3 size=20></td></tr>
  <tr><td>Enter your phoneno</td><td><input type=text name=t4 size=20></td></tr>
  <tr><td>Enter your nationality</td><td><input type=text name=t5 size=20></td></tr>
  <tr><td></td><td><input type=submit value="submit"></td></tr>
  </table>
  </form>
  `,
})
export class RegistrationComponent {


}
