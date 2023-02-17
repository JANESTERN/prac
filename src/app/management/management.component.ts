import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
[something: string]: any;

 message='students with balance'

    students = [
      {
        name: 'kuku',
        balance: 0
      },
      {
        name: 'Ali',
        balance: 0
      },
      {
        name: 'ngocho',
        balance: 0
      }
    ];
    constructor() { 

    }
  
    ngOnInit() {
    }
  
    addStudent(name:string, balance:number) {
      this.students.push({
        name,
        balance
      });
    }
  
    updateBalance(index:number, balance:number) {
      this.students[index].balance = balance;
    }
  
  }
  




