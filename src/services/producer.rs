use std::io;

use crate::{dao::producer, models::app::Producer};

pub async fn get_producers() -> Result<Vec<Producer>, io::Error> {
    let pp = producer::producer_dao_get_producers().await;

    let producers = match pp {
        Err(err) => {
            panic!("{}", err);
        }
        Ok(pp) => pp,
    };

    return Ok(producers);
}
