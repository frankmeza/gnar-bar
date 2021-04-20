use chrono::{DateTime, Utc};
use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ErrorResponse {
    pub message: String,
}

#[derive(Serialize, Debug)]
pub struct ProducerDB {
    pub id: String,
    pub city: String,
    pub country: String,
    pub is_brewery: bool,
    pub is_kitchen: bool,
    pub is_winery: bool,
    pub name: String,
    pub state: String,
    pub created_at: Option<DateTime<Utc>>,
    pub updated_at: Option<DateTime<Utc>>,
}
