export class PackageResponse {
    data?: PackageData;
    labels?: string[];
}

export class PackageData {
    add_extra_photos?: number[];
    deleted_packages?: number[];
    divided_packages?: number[];
    grouping_packages?: number[];
    paid_packages?: number[];
    picked_up_packages?: number[];
    received_packages?: number[];
    returned_packages?: number[];
    shipped_packages?: number[];
}