use std::io;
use tokio_postgres::{row::Row, Error};

use crate::{
    db,
    models::{app::Producer, db::ProducerDB, transformers},
};

pub async fn get_producers() -> Result<Vec<Producer>, io::Error> {
    let client = match db::connect().await {
        Err(err) => {
            panic!("{}", err); // todo figure out another approach
        }
        Ok(c) => c,
    };

    // todo create queries mod, get query from there
    let rows = &client.query("SELECT * from producers;", &[]).await.unwrap(); // todo fix unwrap

    let producers_db = match gather_producers(&rows, Vec::new()) {
        Err(err) => {
            panic!("{}", err); // todo figure out another approach
        }
        Ok(pp_db) => pp_db,
    };

    let producers = producers_db
        .iter()
        .map(|p| transformers::transform_producer(p))
        .collect();

    return Ok(producers);
}

pub fn gather_producers(
    rows: &Vec<Row>,
    mut producer_list: Vec<ProducerDB>,
) -> Result<Vec<ProducerDB>, Error> {
    for r in rows {
        let p = ProducerDB {
            id: r.get(0),
            name: r.get(1),
            city: r.get(2),
            country: r.get(3),
            produces_beer: r.get(4),
            produces_food: r.get(5),
            produces_wine: r.get(6),
        };

        producer_list.push(p);
    }

    return Ok(producer_list);
}
