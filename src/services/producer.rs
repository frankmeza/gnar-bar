use std::io;

use crate::{dao, models::app::Producer};

pub async fn get_producers() -> Result<Vec<Producer>, io::Error> {
    let pp = dao::producer::get_producers().await;

    let producers = match pp {
        Err(err) => {
            panic!("{}", err);
        }
        Ok(pp) => pp,
    };

    return Ok(producers);
}
