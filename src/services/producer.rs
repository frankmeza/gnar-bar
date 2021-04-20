use std::io;

use crate::{dao, models::app::Producer};

pub async fn get_producers() -> Result<Vec<Producer>, io::Error> {
    let producers = dao::producer::get_producers().await?;
    return Ok(producers);
}
