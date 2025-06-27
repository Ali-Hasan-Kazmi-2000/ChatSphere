import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../../_models/member';
import { Members } from '../../_services/members';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Gallery, GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-member-details',
  imports: [TabsModule, GalleryModule],
  templateUrl: './member-details.html',
  styleUrl: './member-details.css'
})
export class MemberDetails implements OnInit {
  private memberServices = inject(Members);
  private route = inject(ActivatedRoute);
  members? : Member;
  images: GalleryItem[] = [];

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    
    this.memberServices.getMember(username).subscribe({
        next: (member) => {
          this.members = member;
          this.members.photos.map(
            p => {
              this.images.push(new ImageItem({
                src: p.url,
                thumb: p.url
              }))
            }
          );
        }
      });
    
  }  
}
