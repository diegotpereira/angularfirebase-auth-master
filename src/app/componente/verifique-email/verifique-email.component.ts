import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-verifique-email',
  templateUrl: './verifique-email.component.html',
  styleUrls: ['./verifique-email.component.css']
})
export class VerifiqueEmailComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
