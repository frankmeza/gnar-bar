use std::io;

use crate::{dao, models::app::Wine};

pub async fn get_wines() -> Result<Vec<Wine>, io::Error> {
    let wines = dao::wine::get_wines().await?;
    return Ok(wines);
}
