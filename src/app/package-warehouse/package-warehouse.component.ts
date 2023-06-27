import { Component } from '@angular/core';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'package-warehouse.component.html' })
export class PackageWarehouseComponent {
    account = this.accountService.accountValue;

    constructor(private accountService: AccountService) { }
}