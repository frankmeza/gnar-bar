use std::io;
use tokio_postgres::{row::Row, Error};

use crate::{
    db,
    models::{app::Wine, db::WineDB, transformers},
    queries,
};

pub async fn get_wines() -> Result<Vec<Wine>, io::Error> {
    let client = db::connect().await?;

    let statement = client
        .prepare_typed(&queries::wine::get_all_wines(), &[])
        .await
        .expect("get_wines: error writing SQL statement");

    let rows = &client
        .query(&statement, &[])
        .await
        .expect("get_wines: error getting rows");

    let wines_db = gather_wines(&rows, Vec::new())
        .expect("get_wines: error with wines_db");

    let wines = wines_db
        .iter()
        .map(|w| transformers::transform_wine(w))
        .collect();

    return Ok(wines);
}

pub fn gather_wines(
    rows: &Vec<Row>,
    mut wine_list: Vec<WineDB>,
) -> Result<Vec<WineDB>, Error> {
    for r in rows {
        let s = WineDB {
            id: r.get(0),
            producer_id: r.get(1),
            name: r.get(2),
            color: r.get(3),
            kind: r.get(4),
            finish: r.get(5),
            abv: r.get(6),
            cost: r.get(7),
            volume: r.get(8),
            created_at: r.get(9),
            updated_at: r.get(10),
        };

        wine_list.push(s);
    }

    return Ok(wine_list);
}
