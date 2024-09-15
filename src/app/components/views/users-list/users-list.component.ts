import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../../interfaces/user';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: `./users-list.component.html`,
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  currentUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password1',
    isAdmin: true,
  };

  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password1',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      password: 'password2',
      isAdmin: false,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      password: 'password3',
      isAdmin: false,
    },
  ];

  displayedColumns: string[] = ['id', 'name', 'email', 'isAdmin'];

  trackChanges(field: string, value: any, user: User): void {
    console.log(`Zmieniono ${field} dla użytkownika ${user.name}: ${value}`);
    console.log(user);
  }
}
