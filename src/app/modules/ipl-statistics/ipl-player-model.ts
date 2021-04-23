export interface Player {
    id: number,
    x_label: string,
    year: number,
    y_label: number,
    y_label_second: number
}
export interface InventoryReport {
    id: string,
    name: string,
    sku: string,
    brand: Brand,
    is_active: boolean,
    stock: Stock,
    in_stock: boolean
}

export interface Brand {
    owner: string,
    is_active: boolean,
    updated_at: Date,
    name: string,
    logo: null,
    description: string,
    created_at: Date,
    id: string,
    last_modified_by: Date,
    display_name: string,
    created_by: string
}

export interface Stock {
    committed_stock: number,
    stock_in_nearest_branch: number,
    total_available_stock: number,
    stock_by_branches:  StockByBranches[],
    in_stock: boolean
}

export interface StockByBranches {
    stock_by_warehouses: StockByWarehouse[],
    stock_in_hand: number,
    name: string,
    id: string,
}

export interface StockByWarehouse{
    committed_stock: number,
    name: string,
    id: number,
    available_stock: number
}

export type Theme = 'light' | 'dark';