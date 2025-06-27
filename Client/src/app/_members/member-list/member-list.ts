import { Component, inject, OnInit } from '@angular/core';
import { Members } from '../../_services/members';
import {Member} from '../../../_models/member';
import { MemberCard } from '../member-card/member-card';


@Component({
  selector: 'app-member-list',
  imports: [MemberCard],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css'
})
export class MemberList implements OnInit {
  private membersService = inject(Members);
  members: Member[] = [];

  ngOnInit() {
   this.loadMembers(); 
  }

  loadMembers() {
    this.membersService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      }
  });
}
}
