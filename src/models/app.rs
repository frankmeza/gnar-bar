use serde_derive::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Producer {
    pub name: String,
    pub city: String,
    pub country: String,
    pub produces_beer: bool,
    pub produces_food: bool,
    pub produces_wine: bool,
}
