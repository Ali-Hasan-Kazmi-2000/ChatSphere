import { Component, input, ViewEncapsulation } from '@angular/core';
import { Member } from '../../../_models/member';
import { RouterLink } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink, TabsModule],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',  
  encapsulation: ViewEncapsulation.None,
})
export class MemberCard {
  member = input.required<Member>();
}
