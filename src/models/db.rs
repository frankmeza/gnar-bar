use serde_derive::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct ErrorResponse {
    pub message: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct ProducerDB {
    pub city: String,
    pub country: String,
    pub is_brewery: bool,
    pub is_kitchen: bool,
    pub is_winery: bool,
    pub name: String,
    pub state: String,
    // ids, timestamps
    pub id: String,
    pub created_at: i64,
    pub updated_at: i64,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct SnackDB {
    pub cost: i32,
    pub name: String,
    pub kind: String,
    pub is_dairy: bool,
    pub is_vegetarian: bool,
    // ids, timestamps
    pub id: String,
    pub producer_id: String,
    pub created_at: i64,
    pub updated_at: i64,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct BeerDB {
    pub abv: i32,
    pub color: String,
    pub cost: i32,
    pub name: String,
    pub finish: String,
    pub volume: i32,
    pub kind: String,
    // ids, timestamps
    pub id: String,
    pub producer_id: String,
    pub created_at: i64,
    pub updated_at: i64,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct WineDB {
    pub abv: i32,
    pub color: String,
    pub cost: i32,
    pub name: String,
    pub finish: String,
    pub volume: i32,
    pub kind: String,
    // ids, timestamps
    pub id: String,
    pub producer_id: String,
    pub created_at: i64,
    pub updated_at: i64,
}
