import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { CrudServiceService } from '../services/crud-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { crudInterface } from '../interface/crud';

@Component({
  selector: 'app-crudfeature',
  templateUrl: './crudfeature.component.html',
  styleUrls: ['./crudfeature.component.scss']
})
export class CrudfeatureComponent implements OnInit {

  public datas: any = [];
  public editData: any = {};
  public testname = new FormControl('AAAAA');

  constructor(
    private crudService: CrudServiceService
  ) { 
    this.editData = {} as crudInterface;
  }

  ngOnInit(): void {
    this.crudService.getDataTest().subscribe(
      (response: any) => {
        this.datas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  openModal(flag: string, data: any) {
    if (flag == "add") {
      const modal = document.getElementById("myModal") as HTMLElement;
      modal.style.display = "block";
    } else {
      this.editData = data;

      const modalEdit = document.getElementById("myEditModal") as HTMLElement;
      modalEdit.style.display = "block";
    }
  }

  closeModal(flag: string) {
    if (flag == 'add') {
      var modal = document.getElementById("myModal") as HTMLElement || null;
      modal.style.display = "none";
    } else {
      var modal = document.getElementById("myEditModal") as HTMLElement || null;
      modal.style.display = "none";
    }
  }

  test(addForm: NgForm) {
    document.getElementById('add-form')?.click();
    let name = addForm.value.name;
    let username = addForm.value.username;
    let id = this.datas[this.datas.length - 1].id + 1

    const obj = {
      id: id,
      name: name,
      username: username
    }

    this.datas.push(obj)
    addForm.reset();
    this.closeModal('add');
  }

  testEdit(editForm: NgForm) {
    document.getElementById('edit-form')?.click();
  }

  deleteData(data: any) {
    this.datas.splice(data.id-1, 1)
  }

}
