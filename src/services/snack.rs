use std::io;

use crate::{dao, models::app::Snack};

pub async fn get_snacks() -> Result<Vec<Snack>, io::Error> {
    let snacks = dao::snack::get_snacks().await?;
    return Ok(snacks);
}
