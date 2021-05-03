use std::io;
use tokio_postgres::{row::Row, Error};

use crate::{
    db,
    models::{app::Producer, db::ProducerDB, transformers},
    queries,
};

pub async fn get_producers() -> Result<Vec<Producer>, io::Error> {
    let client = db::connect().await?;

    let statement = client
        .prepare_typed(&queries::producer::get_all_producers(), &[])
        .await
        .expect("get_producers: error writing SQL statement");

    let rows = &client
        .query(&statement, &[])
        .await
        .expect("get_producers: error getting rows");

    let producers_db = gather_producers(&rows, Vec::new())
        .expect("get_producers: error with producers_db");

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
            state: r.get(3),
            country: r.get(4),
            is_brewery: r.get(5),
            is_kitchen: r.get(6),
            is_winery: r.get(7),
            created_at: r.get(8),
            updated_at: r.get(9),
        };

        producer_list.push(p);
    }

    return Ok(producer_list);
}
