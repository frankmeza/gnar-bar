use serde_derive::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Producer {
    pub name: String,
    pub city: String,
    pub country: String,
    pub is_brewery: bool,
    pub is_kitchen: bool,
    pub is_winery: bool,
    pub created_at: i64,
    pub updated_at: i64,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Snack {
    pub id: String,
    pub producer_id: String,
    pub cost: i32,
    pub name: String,
    pub kind: String,
    pub is_dairy: bool,
    pub is_vegetarian: bool,
    pub created_at: i64,
    pub updated_at: i64,
}
