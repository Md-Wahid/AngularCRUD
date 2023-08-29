import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular CRUD App';

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   *
   */
  constructor(
      private _matDialog: MatDialog,
      private _empService: EmployeeService
    ) {}
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openEntryForm(){
    const dialogRef = this._matDialog.open(EmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (res) =>  {
        if(res){
          this.getEmployeeList();
        }
      }
    })
  }

  openUpdateForm(data: any){
    const dialogRef = this._matDialog.open(EmpAddEditComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (res) =>  {
        if(res){
          this.getEmployeeList();
        }
      }
    })
  }

  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }

  deleteEmployee(id: number){
    this._empService.deletEmployee(id).subscribe({
      next: (res: any) => {
        alert('Employee deleted!');
        console.info(res);
        this.getEmployeeList();
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
