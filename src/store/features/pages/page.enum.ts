export type SortOption =
    | "best-match"
    | "price-low"
    | "price-high"
    | "name-asc"
    | "name-desc";

export const SortOptions = {
    BestMatch: "best-match" as SortOption,
    PriceLow: "price-low" as SortOption,
    PriceHigh: "price-high" as SortOption,
    NameAsc: "name-asc" as SortOption,
    NameDesc: "name-desc" as SortOption,
};

export type ViewMode = "grid" | "list"
export const ViewModes = {
    Grid: "grid" as ViewMode,
    List: "list" as ViewMode,
};
