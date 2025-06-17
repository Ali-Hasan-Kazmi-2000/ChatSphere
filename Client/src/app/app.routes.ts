import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MemberList } from './_members/member-list/member-list';
import { MemberDetails } from './_members/member-detail/member-details';
import { Lists } from './lists/lists';
import { Messages } from './messages/messages';
import { Register } from './register/register';
import { authGuard } from './_guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      { path: 'members', component: MemberList },
      { path: 'members/:id', component: MemberDetails },      
      { path: 'lists', component: Lists },
      { path: 'messages', component: Messages },
    ],
  },
  { path: 'register', component: Register },
  { path: '**', component: Home, pathMatch: 'full' },
];
