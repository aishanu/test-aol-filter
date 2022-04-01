import { Component } from '@angular/core';
import { AotfilterModel } from 'aot-filter';

export const ELEMENT_DATA = [
  {
    id: 1,
    name: 'Arpitha',
    email_address: 'arpitha.ns@gmail.com',
    mobile_number: '8888888888',
    date: new Date('2022-03-31')
  },
  {
    id: 2,
    name: 'Kishore',
    email_address: 'kishore@gmail.com',
    mobile_number: '7777777777',
    date: new Date('2022-03-05')
  },
  {
    id: 3,
    name: 'Smera',
    email_address: 'smera@gmail.com',
    mobile_number: '6666666666',
    date: new Date('2022-03-28')
  },
  {
    id: 4,
    name: 'Amrutha',
    email_address: 'amrutha@gmail.com',
    mobile_number: '5555555555',
    date: new Date('2022-03-29')
  },
  {
    id: 5,
    name: 'Akshatha',
    email_address: 'akshatha@gmail.com',
    mobile_number: '4444444444',
    date: new Date('2022-03-02')
  }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-filter';
  displayColumns: string[] = ['name', 'mobile_number', 'email_address', 'date']
  filterInput: AotfilterModel.AotFilter = {
    aotMenu: {
      aotMenuType: AotfilterModel.AotMenuType.button,
      aotMenuText: 'Filter',
      iconWithText: 'filter_list',
      textClass: 'btn btn-primary',
      iconCss: {
        color: 'white'
      }
    },
    clearText: 'Clear All',
    filterCategory: {
      category: [
        {
          columnName: 'name',
          header: 'Name',
          headerCss: 'header-font',
          filteredChips: []
        },
        {
          columnName: 'mobile_number',
          header: 'Mobile Number',
          headerCss: 'header-font',
          filteredChips: []
        },
        {
          columnName: 'email_address',
          headerCss: 'header-font',
          header: 'Email',
          filteredChips: []
        }
      ]
    },
    dataSource: ELEMENT_DATA,
    dateFilter: {
      header: 'Date',
      headerCss: 'header-font',
      dateRange: [
        {
          date: null,
          text: 'Start Date',
          minStartDate: new Date('2022-03-01'),
          maxEndDate: new Date('2022-03-31')
        },
        {
          date: null,
          text: 'End Date',
          minStartDate: new Date('2022-03-01'),
          maxEndDate: new Date('2022-03-31')
        }
      ]
    },
    matMenuFilterCss: 'mat-menu-filter-new',
    clearTextCss: 'clear-text-row',
    chipCss: 'mat-chip-custom',
    chipCssSelected: 'mat-chip-custom-selected'
  }

  onFilterApply($event: AotfilterModel.AotResponse) {
    this.filterInput.dataSource = $event.dataSource;
  }
}
