use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct ErrorResponse {
    pub message: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct ProducerDB {
    pub name: String,
    pub city: String,
    pub country: String,
    pub produces_beer: bool,
    pub produces_food: bool,
    pub produces_wine: bool,
}
