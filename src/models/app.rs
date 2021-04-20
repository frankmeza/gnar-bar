use serde_derive::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Producer {
    pub name: String,
    pub city: String,
    pub country: String,
    pub is_brewery: bool,
    pub is_kitchen: bool,
    pub is_winery: bool,
}
