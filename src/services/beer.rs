use std::io;

use crate::{dao, models::app::Beer};

pub async fn get_beers() -> Result<Vec<Beer>, io::Error> {
    let beers = dao::beer::get_beers().await?;
    return Ok(beers);
}
